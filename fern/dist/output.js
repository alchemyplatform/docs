var i2 = Object.defineProperty;
var s2 = (r, t, o) =>
  t in r
    ? i2(r, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
    : (r[t] = o);
var L = (r, t, o) => s2(r, typeof t != "symbol" ? t + "" : t, o);
function l2(r, t) {
  for (var o = 0; o < t.length; o++) {
    const a = t[o];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const i in a)
        if (i !== "default" && !(i in r)) {
          const c = Object.getOwnPropertyDescriptor(a, i);
          c &&
            Object.defineProperty(
              r,
              i,
              c.get ? c : { enumerable: !0, get: () => a[i] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
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
function c2(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r;
}
var vl = { exports: {} },
  Hr = {},
  yl = { exports: {} },
  ke = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lf;
function u2() {
  if (Lf) return ke;
  Lf = 1;
  var r = Symbol.for("react.element"),
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
    P = {};
  function k(C, A, K) {
    (this.props = C),
      (this.context = A),
      (this.refs = P),
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
  function O() {}
  O.prototype = k.prototype;
  function T(C, A, K) {
    (this.props = C),
      (this.context = A),
      (this.refs = P),
      (this.updater = K || x);
  }
  var I = (T.prototype = new O());
  (I.constructor = T), S(I, k.prototype), (I.isPureReactComponent = !0);
  var N = Array.isArray,
    F = Object.prototype.hasOwnProperty,
    $ = { current: null },
    M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function X(C, A, K) {
    var le,
      oe = {},
      _e = null,
      de = null;
    if (A != null)
      for (le in (A.ref !== void 0 && (de = A.ref),
      A.key !== void 0 && (_e = "" + A.key),
      A))
        F.call(A, le) && !M.hasOwnProperty(le) && (oe[le] = A[le]);
    var be = arguments.length - 2;
    if (be === 1) oe.children = K;
    else if (1 < be) {
      for (var pe = Array(be), Ie = 0; Ie < be; Ie++)
        pe[Ie] = arguments[Ie + 2];
      oe.children = pe;
    }
    if (C && C.defaultProps)
      for (le in ((be = C.defaultProps), be))
        oe[le] === void 0 && (oe[le] = be[le]);
    return {
      $$typeof: r,
      type: C,
      key: _e,
      ref: de,
      props: oe,
      _owner: $.current,
    };
  }
  function he(C, A) {
    return {
      $$typeof: r,
      type: C.type,
      key: A,
      ref: C.ref,
      props: C.props,
      _owner: C._owner,
    };
  }
  function Ce(C) {
    return typeof C == "object" && C !== null && C.$$typeof === r;
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
            case r:
            case t:
              de = !0;
          }
      }
    if (de)
      return (
        (de = C),
        (oe = oe(de)),
        (C = le === "" ? "." + ye(de, 0) : le),
        N(oe)
          ? ((K = ""),
            C != null && (K = C.replace(ce, "$&/") + "/"),
            Se(oe, A, K, "", function (Ie) {
              return Ie;
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
    if (((de = 0), (le = le === "" ? "." : le + ":"), N(C)))
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
            !M.hasOwnProperty(pe) &&
            (le[pe] = A[pe] === void 0 && be !== void 0 ? be[pe] : A[pe]);
      }
      var pe = arguments.length - 2;
      if (pe === 1) le.children = K;
      else if (1 < pe) {
        be = Array(pe);
        for (var Ie = 0; Ie < pe; Ie++) be[Ie] = arguments[Ie + 2];
        le.children = be;
      }
      return {
        $$typeof: r,
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
var $f;
function bc() {
  return $f || (($f = 1), (yl.exports = u2())), yl.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Af;
function d2() {
  if (Af) return Hr;
  Af = 1;
  var r = bc(),
    t = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
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
  return (Hr.Fragment = o), (Hr.jsx = d), (Hr.jsxs = d), Hr;
}
var Df;
function f2() {
  return Df || ((Df = 1), (vl.exports = d2())), vl.exports;
}
var W = f2(),
  V = bc();
const ze = c2(V),
  Hf = l2({ __proto__: null, default: ze }, [V]);
var va = {},
  _l = { exports: {} },
  kt = {},
  xl = { exports: {} },
  Sl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zf;
function p2() {
  return (
    zf ||
      ((zf = 1),
      (function (r) {
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
          r.unstable_now = function () {
            return c.now();
          };
        } else {
          var d = Date,
            h = d.now();
          r.unstable_now = function () {
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
          P = !1,
          k = typeof setTimeout == "function" ? setTimeout : null,
          O = typeof clearTimeout == "function" ? clearTimeout : null,
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
        function N(q) {
          if (((P = !1), I(q), !S))
            if (o(f) !== null) (S = !0), me(F);
            else {
              var Y = o(m);
              Y !== null && we(N, Y.startTime - q);
            }
        }
        function F(q, Y) {
          (S = !1), P && ((P = !1), O(X), (X = -1)), (x = !0);
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
                (Y = r.unstable_now()),
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
              oe !== null && we(N, oe.startTime - Y), (le = !1);
            }
            return le;
          } finally {
            (v = null), (y = C), (x = !1);
          }
        }
        var $ = !1,
          M = null,
          X = -1,
          he = 5,
          Ce = -1;
        function te() {
          return !(r.unstable_now() - Ce < he);
        }
        function ce() {
          if (M !== null) {
            var q = r.unstable_now();
            Ce = q;
            var Y = !0;
            try {
              Y = M(!0, q);
            } finally {
              Y ? ye() : (($ = !1), (M = null));
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
          (M = q), $ || (($ = !0), ye());
        }
        function we(q, Y) {
          X = k(function () {
            q(r.unstable_now());
          }, Y);
        }
        (r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (q) {
            q.callback = null;
          }),
          (r.unstable_continueExecution = function () {
            S || x || ((S = !0), me(F));
          }),
          (r.unstable_forceFrameRate = function (q) {
            0 > q || 125 < q
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (he = 0 < q ? Math.floor(1e3 / q) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return y;
          }),
          (r.unstable_getFirstCallbackNode = function () {
            return o(f);
          }),
          (r.unstable_next = function (q) {
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
          (r.unstable_pauseExecution = function () {}),
          (r.unstable_requestPaint = function () {}),
          (r.unstable_runWithPriority = function (q, Y) {
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
          (r.unstable_scheduleCallback = function (q, Y, C) {
            var A = r.unstable_now();
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
                    (P ? (O(X), (X = -1)) : (P = !0), we(N, C - A)))
                : ((q.sortIndex = K), t(f, q), S || x || ((S = !0), me(F))),
              q
            );
          }),
          (r.unstable_shouldYield = te),
          (r.unstable_wrapCallback = function (q) {
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
      })(Sl)),
    Sl
  );
}
var Vf;
function h2() {
  return Vf || ((Vf = 1), (xl.exports = p2())), xl.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gf;
function m2() {
  if (Gf) return kt;
  Gf = 1;
  var r = bc(),
    t = h2();
  function o(e) {
    for (
      var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        s = 1;
      s < arguments.length;
      s++
    )
      n += "&args[]=" + encodeURIComponent(arguments[s]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var a = new Set(),
    i = {};
  function c(e, n) {
    d(e, n), d(e + "Capture", n);
  }
  function d(e, n) {
    for (i[e] = n, e = 0; e < n.length; e++) a.add(n[e]);
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
  function x(e, n, s, l) {
    if (s !== null && s.type === 0) return !1;
    switch (typeof n) {
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
  function S(e, n, s, l) {
    if (n === null || typeof n > "u" || x(e, n, s, l)) return !0;
    if (l) return !1;
    if (s !== null)
      switch (s.type) {
        case 3:
          return !n;
        case 4:
          return n === !1;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
    return !1;
  }
  function P(e, n, s, l, u, p, g) {
    (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
      (this.attributeName = l),
      (this.attributeNamespace = u),
      (this.mustUseProperty = s),
      (this.propertyName = e),
      (this.type = n),
      (this.sanitizeURL = p),
      (this.removeEmptyString = g);
  }
  var k = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      k[e] = new P(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var n = e[0];
      k[n] = new P(n, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        k[e] = new P(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      k[e] = new P(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        k[e] = new P(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      k[e] = new P(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      k[e] = new P(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      k[e] = new P(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      k[e] = new P(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var O = /[\-:]([a-z])/g;
  function T(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var n = e.replace(O, T);
      k[n] = new P(n, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var n = e.replace(O, T);
        k[n] = new P(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var n = e.replace(O, T);
      k[n] = new P(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      k[e] = new P(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (k.xlinkHref = new P(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      k[e] = new P(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function I(e, n, s, l) {
    var u = k.hasOwnProperty(n) ? k[n] : null;
    (u !== null
      ? u.type !== 0
      : l ||
        !(2 < n.length) ||
        (n[0] !== "o" && n[0] !== "O") ||
        (n[1] !== "n" && n[1] !== "N")) &&
      (S(n, s, u, l) && (s = null),
      l || u === null
        ? y(n) &&
          (s === null ? e.removeAttribute(n) : e.setAttribute(n, "" + s))
        : u.mustUseProperty
          ? (e[u.propertyName] = s === null ? (u.type === 3 ? !1 : "") : s)
          : ((n = u.attributeName),
            (l = u.attributeNamespace),
            s === null
              ? e.removeAttribute(n)
              : ((u = u.type),
                (s = u === 3 || (u === 4 && s === !0) ? "" : "" + s),
                l ? e.setAttributeNS(l, n, s) : e.setAttribute(n, s))));
  }
  var N = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    F = Symbol.for("react.element"),
    $ = Symbol.for("react.portal"),
    M = Symbol.for("react.fragment"),
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
        var n = s.stack.trim().match(/\n( *(at )?)/);
        A = (n && n[1]) || "";
      }
    return (
      `
` +
      A +
      e
    );
  }
  var le = !1;
  function oe(e, n) {
    if (!e || le) return "";
    le = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n)
        if (
          ((n = function () {
            throw Error();
          }),
          Object.defineProperty(n.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(n, []);
          } catch (B) {
            var l = B;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (B) {
            l = B;
          }
          e.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (B) {
          l = B;
        }
        e();
      }
    } catch (B) {
      if (B && l && typeof B.stack == "string") {
        for (
          var u = B.stack.split(`
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
      case M:
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
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ge:
          return (
            (n = e.displayName || null), n !== null ? n : de(e.type) || "Memo"
          );
        case me:
          (n = e._payload), (e = e._init);
          try {
            return de(e(n));
          } catch {}
      }
    return null;
  }
  function be(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = n.render),
          (e = e.displayName || e.name || ""),
          n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return de(n);
      case 8:
        return n === X ? "StrictMode" : "Mode";
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
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
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
  function Ie(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function Gn(e) {
    var n = Ie(e) ? "checked" : "value",
      s = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      l = "" + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof s < "u" &&
      typeof s.get == "function" &&
      typeof s.set == "function"
    ) {
      var u = s.get,
        p = s.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (g) {
            (l = "" + g), p.call(this, g);
          },
        }),
        Object.defineProperty(e, n, { enumerable: s.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (g) {
            l = "" + g;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[n];
          },
        }
      );
    }
  }
  function Mt(e) {
    e._valueTracker || (e._valueTracker = Gn(e));
  }
  function yt(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var s = n.getValue(),
      l = "";
    return (
      e && (l = Ie(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== s ? (n.setValue(e), !0) : !1
    );
  }
  function f0(e) {
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
  function p0(e, n) {
    var s = n.checked;
    return C({}, n, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: s ?? e._wrapperState.initialChecked,
    });
  }
  function lo(e, n) {
    var s = n.defaultValue == null ? "" : n.defaultValue,
      l = n.checked != null ? n.checked : n.defaultChecked;
    (s = pe(n.value != null ? n.value : s)),
      (e._wrapperState = {
        initialChecked: l,
        initialValue: s,
        controlled:
          n.type === "checkbox" || n.type === "radio"
            ? n.checked != null
            : n.value != null,
      });
  }
  function Vc(e, n) {
    (n = n.checked), n != null && I(e, "checked", n, !1);
  }
  function Oi(e, n) {
    Vc(e, n);
    var s = pe(n.value),
      l = n.type;
    if (s != null)
      l === "number"
        ? ((s === 0 && e.value === "") || e.value != s) && (e.value = "" + s)
        : e.value !== "" + s && (e.value = "" + s);
    else if (l === "submit" || l === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value")
      ? Pi(e, n.type, s)
      : n.hasOwnProperty("defaultValue") && Pi(e, n.type, pe(n.defaultValue)),
      n.checked == null &&
        n.defaultChecked != null &&
        (e.defaultChecked = !!n.defaultChecked);
  }
  function Gc(e, n, s) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var l = n.type;
      if (
        !(
          (l !== "submit" && l !== "reset") ||
          (n.value !== void 0 && n.value !== null)
        )
      )
        return;
      (n = "" + e._wrapperState.initialValue),
        s || n === e.value || (e.value = n),
        (e.defaultValue = n);
    }
    (s = e.name),
      s !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      s !== "" && (e.name = s);
  }
  function Pi(e, n, s) {
    (n !== "number" || f0(e.ownerDocument) !== e) &&
      (s == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + s && (e.defaultValue = "" + s));
  }
  var nr = Array.isArray;
  function h0(e, n, s, l) {
    if (((e = e.options), n)) {
      n = {};
      for (var u = 0; u < s.length; u++) n["$" + s[u]] = !0;
      for (s = 0; s < e.length; s++)
        (u = n.hasOwnProperty("$" + e[s].value)),
          e[s].selected !== u && (e[s].selected = u),
          u && l && (e[s].defaultSelected = !0);
    } else {
      for (s = "" + pe(s), n = null, u = 0; u < e.length; u++) {
        if (e[u].value === s) {
          (e[u].selected = !0), l && (e[u].defaultSelected = !0);
          return;
        }
        n !== null || e[u].disabled || (n = e[u]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Ei(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(o(91));
    return C({}, n, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Uc(e, n) {
    var s = n.value;
    if (s == null) {
      if (((s = n.children), (n = n.defaultValue), s != null)) {
        if (n != null) throw Error(o(92));
        if (nr(s)) {
          if (1 < s.length) throw Error(o(93));
          s = s[0];
        }
        n = s;
      }
      n == null && (n = ""), (s = n);
    }
    e._wrapperState = { initialValue: pe(s) };
  }
  function qc(e, n) {
    var s = pe(n.value),
      l = pe(n.defaultValue);
    s != null &&
      ((s = "" + s),
      s !== e.value && (e.value = s),
      n.defaultValue == null && e.defaultValue !== s && (e.defaultValue = s)),
      l != null && (e.defaultValue = "" + l);
  }
  function Wc(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue &&
      n !== "" &&
      n !== null &&
      (e.value = n);
  }
  function Kc(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ti(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Kc(n)
      : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var co,
    Xc = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (n, s, l, u) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(n, s, l, u);
            });
          }
        : e;
    })(function (e, n) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = n;
      else {
        for (
          co = co || document.createElement("div"),
            co.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
            n = co.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; n.firstChild; ) e.appendChild(n.firstChild);
      }
    });
  function rr(e, n) {
    if (n) {
      var s = e.firstChild;
      if (s && s === e.lastChild && s.nodeType === 3) {
        s.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var or = {
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
    u1 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(or).forEach(function (e) {
    u1.forEach(function (n) {
      (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (or[n] = or[e]);
    });
  });
  function Qc(e, n, s) {
    return n == null || typeof n == "boolean" || n === ""
      ? ""
      : s || typeof n != "number" || n === 0 || (or.hasOwnProperty(e) && or[e])
        ? ("" + n).trim()
        : n + "px";
  }
  function Yc(e, n) {
    e = e.style;
    for (var s in n)
      if (n.hasOwnProperty(s)) {
        var l = s.indexOf("--") === 0,
          u = Qc(s, n[s], l);
        s === "float" && (s = "cssFloat"), l ? e.setProperty(s, u) : (e[s] = u);
      }
  }
  var d1 = C(
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
  function Fi(e, n) {
    if (n) {
      if (d1[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(o(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(o(60));
        if (
          typeof n.dangerouslySetInnerHTML != "object" ||
          !("__html" in n.dangerouslySetInnerHTML)
        )
          throw Error(o(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(o(62));
    }
  }
  function ji(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
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
  var Ri = null;
  function Ii(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Bi = null,
    m0 = null,
    g0 = null;
  function Zc(e) {
    if ((e = Or(e))) {
      if (typeof Bi != "function") throw Error(o(280));
      var n = e.stateNode;
      n && ((n = Io(n)), Bi(e.stateNode, e.type, n));
    }
  }
  function Jc(e) {
    m0 ? (g0 ? g0.push(e) : (g0 = [e])) : (m0 = e);
  }
  function eu() {
    if (m0) {
      var e = m0,
        n = g0;
      if (((g0 = m0 = null), Zc(e), n)) for (e = 0; e < n.length; e++) Zc(n[e]);
    }
  }
  function tu(e, n) {
    return e(n);
  }
  function nu() {}
  var Mi = !1;
  function ru(e, n, s) {
    if (Mi) return e(n, s);
    Mi = !0;
    try {
      return tu(e, n, s);
    } finally {
      (Mi = !1), (m0 !== null || g0 !== null) && (nu(), eu());
    }
  }
  function ar(e, n) {
    var s = e.stateNode;
    if (s === null) return null;
    var l = Io(s);
    if (l === null) return null;
    s = l[n];
    e: switch (n) {
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
    if (s && typeof s != "function") throw Error(o(231, n, typeof s));
    return s;
  }
  var Ni = !1;
  if (h)
    try {
      var ir = {};
      Object.defineProperty(ir, "passive", {
        get: function () {
          Ni = !0;
        },
      }),
        window.addEventListener("test", ir, ir),
        window.removeEventListener("test", ir, ir);
    } catch {
      Ni = !1;
    }
  function f1(e, n, s, l, u, p, g, _, w) {
    var B = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(s, B);
    } catch (H) {
      this.onError(H);
    }
  }
  var sr = !1,
    uo = null,
    fo = !1,
    Li = null,
    p1 = {
      onError: function (e) {
        (sr = !0), (uo = e);
      },
    };
  function h1(e, n, s, l, u, p, g, _, w) {
    (sr = !1), (uo = null), f1.apply(p1, arguments);
  }
  function m1(e, n, s, l, u, p, g, _, w) {
    if ((h1.apply(this, arguments), sr)) {
      if (sr) {
        var B = uo;
        (sr = !1), (uo = null);
      } else throw Error(o(198));
      fo || ((fo = !0), (Li = B));
    }
  }
  function Un(e) {
    var n = e,
      s = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do (n = e), (n.flags & 4098) !== 0 && (s = n.return), (e = n.return);
      while (e);
    }
    return n.tag === 3 ? s : null;
  }
  function ou(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function au(e) {
    if (Un(e) !== e) throw Error(o(188));
  }
  function g1(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = Un(e)), n === null)) throw Error(o(188));
      return n !== e ? null : e;
    }
    for (var s = e, l = n; ; ) {
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
          if (p === s) return au(u), e;
          if (p === l) return au(u), n;
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
    return s.stateNode.current === s ? e : n;
  }
  function iu(e) {
    return (e = g1(e)), e !== null ? su(e) : null;
  }
  function su(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = su(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var lu = t.unstable_scheduleCallback,
    cu = t.unstable_cancelCallback,
    b1 = t.unstable_shouldYield,
    v1 = t.unstable_requestPaint,
    Ue = t.unstable_now,
    y1 = t.unstable_getCurrentPriorityLevel,
    $i = t.unstable_ImmediatePriority,
    uu = t.unstable_UserBlockingPriority,
    po = t.unstable_NormalPriority,
    _1 = t.unstable_LowPriority,
    du = t.unstable_IdlePriority,
    ho = null,
    Jt = null;
  function x1(e) {
    if (Jt && typeof Jt.onCommitFiberRoot == "function")
      try {
        Jt.onCommitFiberRoot(ho, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Ut = Math.clz32 ? Math.clz32 : w1,
    S1 = Math.log,
    C1 = Math.LN2;
  function w1(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((S1(e) / C1) | 0)) | 0;
  }
  var mo = 64,
    go = 4194304;
  function lr(e) {
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
  function bo(e, n) {
    var s = e.pendingLanes;
    if (s === 0) return 0;
    var l = 0,
      u = e.suspendedLanes,
      p = e.pingedLanes,
      g = s & 268435455;
    if (g !== 0) {
      var _ = g & ~u;
      _ !== 0 ? (l = lr(_)) : ((p &= g), p !== 0 && (l = lr(p)));
    } else (g = s & ~u), g !== 0 ? (l = lr(g)) : p !== 0 && (l = lr(p));
    if (l === 0) return 0;
    if (
      n !== 0 &&
      n !== l &&
      (n & u) === 0 &&
      ((u = l & -l), (p = n & -n), u >= p || (u === 16 && (p & 4194240) !== 0))
    )
      return n;
    if (((l & 4) !== 0 && (l |= s & 16), (n = e.entangledLanes), n !== 0))
      for (e = e.entanglements, n &= l; 0 < n; )
        (s = 31 - Ut(n)), (u = 1 << s), (l |= e[s]), (n &= ~u);
    return l;
  }
  function k1(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
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
        return n + 5e3;
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
  function O1(e, n) {
    for (
      var s = e.suspendedLanes,
        l = e.pingedLanes,
        u = e.expirationTimes,
        p = e.pendingLanes;
      0 < p;

    ) {
      var g = 31 - Ut(p),
        _ = 1 << g,
        w = u[g];
      w === -1
        ? ((_ & s) === 0 || (_ & l) !== 0) && (u[g] = k1(_, n))
        : w <= n && (e.expiredLanes |= _),
        (p &= ~_);
    }
  }
  function Ai(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function fu() {
    var e = mo;
    return (mo <<= 1), (mo & 4194240) === 0 && (mo = 64), e;
  }
  function Di(e) {
    for (var n = [], s = 0; 31 > s; s++) n.push(e);
    return n;
  }
  function cr(e, n, s) {
    (e.pendingLanes |= n),
      n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (n = 31 - Ut(n)),
      (e[n] = s);
  }
  function P1(e, n) {
    var s = e.pendingLanes & ~n;
    (e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= n),
      (e.mutableReadLanes &= n),
      (e.entangledLanes &= n),
      (n = e.entanglements);
    var l = e.eventTimes;
    for (e = e.expirationTimes; 0 < s; ) {
      var u = 31 - Ut(s),
        p = 1 << u;
      (n[u] = 0), (l[u] = -1), (e[u] = -1), (s &= ~p);
    }
  }
  function Hi(e, n) {
    var s = (e.entangledLanes |= n);
    for (e = e.entanglements; s; ) {
      var l = 31 - Ut(s),
        u = 1 << l;
      (u & n) | (e[l] & n) && (e[l] |= n), (s &= ~u);
    }
  }
  var Re = 0;
  function pu(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var hu,
    zi,
    mu,
    gu,
    bu,
    Vi = !1,
    vo = [],
    Cn = null,
    wn = null,
    kn = null,
    ur = new Map(),
    dr = new Map(),
    On = [],
    E1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function vu(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Cn = null;
        break;
      case "dragenter":
      case "dragleave":
        wn = null;
        break;
      case "mouseover":
      case "mouseout":
        kn = null;
        break;
      case "pointerover":
      case "pointerout":
        ur.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        dr.delete(n.pointerId);
    }
  }
  function fr(e, n, s, l, u, p) {
    return e === null || e.nativeEvent !== p
      ? ((e = {
          blockedOn: n,
          domEventName: s,
          eventSystemFlags: l,
          nativeEvent: p,
          targetContainers: [u],
        }),
        n !== null && ((n = Or(n)), n !== null && zi(n)),
        e)
      : ((e.eventSystemFlags |= l),
        (n = e.targetContainers),
        u !== null && n.indexOf(u) === -1 && n.push(u),
        e);
  }
  function T1(e, n, s, l, u) {
    switch (n) {
      case "focusin":
        return (Cn = fr(Cn, e, n, s, l, u)), !0;
      case "dragenter":
        return (wn = fr(wn, e, n, s, l, u)), !0;
      case "mouseover":
        return (kn = fr(kn, e, n, s, l, u)), !0;
      case "pointerover":
        var p = u.pointerId;
        return ur.set(p, fr(ur.get(p) || null, e, n, s, l, u)), !0;
      case "gotpointercapture":
        return (
          (p = u.pointerId), dr.set(p, fr(dr.get(p) || null, e, n, s, l, u)), !0
        );
    }
    return !1;
  }
  function yu(e) {
    var n = qn(e.target);
    if (n !== null) {
      var s = Un(n);
      if (s !== null) {
        if (((n = s.tag), n === 13)) {
          if (((n = ou(s)), n !== null)) {
            (e.blockedOn = n),
              bu(e.priority, function () {
                mu(s);
              });
            return;
          }
        } else if (n === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function yo(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var s = Ui(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (s === null) {
        s = e.nativeEvent;
        var l = new s.constructor(s.type, s);
        (Ri = l), s.target.dispatchEvent(l), (Ri = null);
      } else return (n = Or(s)), n !== null && zi(n), (e.blockedOn = s), !1;
      n.shift();
    }
    return !0;
  }
  function _u(e, n, s) {
    yo(e) && s.delete(n);
  }
  function F1() {
    (Vi = !1),
      Cn !== null && yo(Cn) && (Cn = null),
      wn !== null && yo(wn) && (wn = null),
      kn !== null && yo(kn) && (kn = null),
      ur.forEach(_u),
      dr.forEach(_u);
  }
  function pr(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      Vi ||
        ((Vi = !0),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, F1)));
  }
  function hr(e) {
    function n(u) {
      return pr(u, e);
    }
    if (0 < vo.length) {
      pr(vo[0], e);
      for (var s = 1; s < vo.length; s++) {
        var l = vo[s];
        l.blockedOn === e && (l.blockedOn = null);
      }
    }
    for (
      Cn !== null && pr(Cn, e),
        wn !== null && pr(wn, e),
        kn !== null && pr(kn, e),
        ur.forEach(n),
        dr.forEach(n),
        s = 0;
      s < On.length;
      s++
    )
      (l = On[s]), l.blockedOn === e && (l.blockedOn = null);
    for (; 0 < On.length && ((s = On[0]), s.blockedOn === null); )
      yu(s), s.blockedOn === null && On.shift();
  }
  var b0 = N.ReactCurrentBatchConfig,
    _o = !0;
  function j1(e, n, s, l) {
    var u = Re,
      p = b0.transition;
    b0.transition = null;
    try {
      (Re = 1), Gi(e, n, s, l);
    } finally {
      (Re = u), (b0.transition = p);
    }
  }
  function R1(e, n, s, l) {
    var u = Re,
      p = b0.transition;
    b0.transition = null;
    try {
      (Re = 4), Gi(e, n, s, l);
    } finally {
      (Re = u), (b0.transition = p);
    }
  }
  function Gi(e, n, s, l) {
    if (_o) {
      var u = Ui(e, n, s, l);
      if (u === null) ls(e, n, l, xo, s), vu(e, l);
      else if (T1(u, e, n, s, l)) l.stopPropagation();
      else if ((vu(e, l), n & 4 && -1 < E1.indexOf(e))) {
        for (; u !== null; ) {
          var p = Or(u);
          if (
            (p !== null && hu(p),
            (p = Ui(e, n, s, l)),
            p === null && ls(e, n, l, xo, s),
            p === u)
          )
            break;
          u = p;
        }
        u !== null && l.stopPropagation();
      } else ls(e, n, l, null, s);
    }
  }
  var xo = null;
  function Ui(e, n, s, l) {
    if (((xo = null), (e = Ii(l)), (e = qn(e)), e !== null))
      if (((n = Un(e)), n === null)) e = null;
      else if (((s = n.tag), s === 13)) {
        if (((e = ou(n)), e !== null)) return e;
        e = null;
      } else if (s === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else n !== e && (e = null);
    return (xo = e), null;
  }
  function xu(e) {
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
        switch (y1()) {
          case $i:
            return 1;
          case uu:
            return 4;
          case po:
          case _1:
            return 16;
          case du:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Pn = null,
    qi = null,
    So = null;
  function Su() {
    if (So) return So;
    var e,
      n = qi,
      s = n.length,
      l,
      u = "value" in Pn ? Pn.value : Pn.textContent,
      p = u.length;
    for (e = 0; e < s && n[e] === u[e]; e++);
    var g = s - e;
    for (l = 1; l <= g && n[s - l] === u[p - l]; l++);
    return (So = u.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Co(e) {
    var n = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function wo() {
    return !0;
  }
  function Cu() {
    return !1;
  }
  function Et(e) {
    function n(s, l, u, p, g) {
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
          ? wo
          : Cu),
        (this.isPropagationStopped = Cu),
        this
      );
    }
    return (
      C(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var s = this.nativeEvent;
          s &&
            (s.preventDefault
              ? s.preventDefault()
              : typeof s.returnValue != "unknown" && (s.returnValue = !1),
            (this.isDefaultPrevented = wo));
        },
        stopPropagation: function () {
          var s = this.nativeEvent;
          s &&
            (s.stopPropagation
              ? s.stopPropagation()
              : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
            (this.isPropagationStopped = wo));
        },
        persist: function () {},
        isPersistent: wo,
      }),
      n
    );
  }
  var v0 = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Wi = Et(v0),
    mr = C({}, v0, { view: 0, detail: 0 }),
    I1 = Et(mr),
    Ki,
    Xi,
    gr,
    ko = C({}, mr, {
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
      getModifierState: Yi,
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
          : (e !== gr &&
              (gr && e.type === "mousemove"
                ? ((Ki = e.screenX - gr.screenX), (Xi = e.screenY - gr.screenY))
                : (Xi = Ki = 0),
              (gr = e)),
            Ki);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Xi;
      },
    }),
    wu = Et(ko),
    B1 = C({}, ko, { dataTransfer: 0 }),
    M1 = Et(B1),
    N1 = C({}, mr, { relatedTarget: 0 }),
    Qi = Et(N1),
    L1 = C({}, v0, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    $1 = Et(L1),
    A1 = C({}, v0, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    D1 = Et(A1),
    H1 = C({}, v0, { data: 0 }),
    ku = Et(H1),
    z1 = {
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
    V1 = {
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
    G1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function U1(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = G1[e])
        ? !!n[e]
        : !1;
  }
  function Yi() {
    return U1;
  }
  var q1 = C({}, mr, {
      key: function (e) {
        if (e.key) {
          var n = z1[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress"
          ? ((e = Co(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? V1[e.keyCode] || "Unidentified"
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
      getModifierState: Yi,
      charCode: function (e) {
        return e.type === "keypress" ? Co(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Co(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    W1 = Et(q1),
    K1 = C({}, ko, {
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
    Ou = Et(K1),
    X1 = C({}, mr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Yi,
    }),
    Q1 = Et(X1),
    Y1 = C({}, v0, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Z1 = Et(Y1),
    J1 = C({}, ko, {
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
    eg = Et(J1),
    tg = [9, 13, 27, 32],
    Zi = h && "CompositionEvent" in window,
    br = null;
  h && "documentMode" in document && (br = document.documentMode);
  var ng = h && "TextEvent" in window && !br,
    Pu = h && (!Zi || (br && 8 < br && 11 >= br)),
    Eu = " ",
    Tu = !1;
  function Fu(e, n) {
    switch (e) {
      case "keyup":
        return tg.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ju(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var y0 = !1;
  function rg(e, n) {
    switch (e) {
      case "compositionend":
        return ju(n);
      case "keypress":
        return n.which !== 32 ? null : ((Tu = !0), Eu);
      case "textInput":
        return (e = n.data), e === Eu && Tu ? null : e;
      default:
        return null;
    }
  }
  function og(e, n) {
    if (y0)
      return e === "compositionend" || (!Zi && Fu(e, n))
        ? ((e = Su()), (So = qi = Pn = null), (y0 = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Pu && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var ag = {
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
  function Ru(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!ag[e.type] : n === "textarea";
  }
  function Iu(e, n, s, l) {
    Jc(l),
      (n = Fo(n, "onChange")),
      0 < n.length &&
        ((s = new Wi("onChange", "change", null, s, l)),
        e.push({ event: s, listeners: n }));
  }
  var vr = null,
    yr = null;
  function ig(e) {
    Yu(e, 0);
  }
  function Oo(e) {
    var n = w0(e);
    if (yt(n)) return e;
  }
  function sg(e, n) {
    if (e === "change") return n;
  }
  var Bu = !1;
  if (h) {
    var Ji;
    if (h) {
      var es = "oninput" in document;
      if (!es) {
        var Mu = document.createElement("div");
        Mu.setAttribute("oninput", "return;"),
          (es = typeof Mu.oninput == "function");
      }
      Ji = es;
    } else Ji = !1;
    Bu = Ji && (!document.documentMode || 9 < document.documentMode);
  }
  function Nu() {
    vr && (vr.detachEvent("onpropertychange", Lu), (yr = vr = null));
  }
  function Lu(e) {
    if (e.propertyName === "value" && Oo(yr)) {
      var n = [];
      Iu(n, yr, e, Ii(e)), ru(ig, n);
    }
  }
  function lg(e, n, s) {
    e === "focusin"
      ? (Nu(), (vr = n), (yr = s), vr.attachEvent("onpropertychange", Lu))
      : e === "focusout" && Nu();
  }
  function cg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Oo(yr);
  }
  function ug(e, n) {
    if (e === "click") return Oo(n);
  }
  function dg(e, n) {
    if (e === "input" || e === "change") return Oo(n);
  }
  function fg(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var qt = typeof Object.is == "function" ? Object.is : fg;
  function _r(e, n) {
    if (qt(e, n)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var s = Object.keys(e),
      l = Object.keys(n);
    if (s.length !== l.length) return !1;
    for (l = 0; l < s.length; l++) {
      var u = s[l];
      if (!f.call(n, u) || !qt(e[u], n[u])) return !1;
    }
    return !0;
  }
  function $u(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Au(e, n) {
    var s = $u(e);
    e = 0;
    for (var l; s; ) {
      if (s.nodeType === 3) {
        if (((l = e + s.textContent.length), e <= n && l >= n))
          return { node: s, offset: n - e };
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
      s = $u(s);
    }
  }
  function Du(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
          ? !1
          : n && n.nodeType === 3
            ? Du(e, n.parentNode)
            : "contains" in e
              ? e.contains(n)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(n) & 16)
                : !1
      : !1;
  }
  function Hu() {
    for (var e = window, n = f0(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var s = typeof n.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) e = n.contentWindow;
      else break;
      n = f0(e.document);
    }
    return n;
  }
  function ts(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        n === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function pg(e) {
    var n = Hu(),
      s = e.focusedElem,
      l = e.selectionRange;
    if (
      n !== s &&
      s &&
      s.ownerDocument &&
      Du(s.ownerDocument.documentElement, s)
    ) {
      if (l !== null && ts(s)) {
        if (
          ((n = l.start),
          (e = l.end),
          e === void 0 && (e = n),
          "selectionStart" in s)
        )
          (s.selectionStart = n),
            (s.selectionEnd = Math.min(e, s.value.length));
        else if (
          ((e = ((n = s.ownerDocument || document) && n.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var u = s.textContent.length,
            p = Math.min(l.start, u);
          (l = l.end === void 0 ? p : Math.min(l.end, u)),
            !e.extend && p > l && ((u = l), (l = p), (p = u)),
            (u = Au(s, p));
          var g = Au(s, l);
          u &&
            g &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== u.node ||
              e.anchorOffset !== u.offset ||
              e.focusNode !== g.node ||
              e.focusOffset !== g.offset) &&
            ((n = n.createRange()),
            n.setStart(u.node, u.offset),
            e.removeAllRanges(),
            p > l
              ? (e.addRange(n), e.extend(g.node, g.offset))
              : (n.setEnd(g.node, g.offset), e.addRange(n)));
        }
      }
      for (n = [], e = s; (e = e.parentNode); )
        e.nodeType === 1 &&
          n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof s.focus == "function" && s.focus(), s = 0; s < n.length; s++)
        (e = n[s]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var hg = h && "documentMode" in document && 11 >= document.documentMode,
    _0 = null,
    ns = null,
    xr = null,
    rs = !1;
  function zu(e, n, s) {
    var l =
      s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    rs ||
      _0 == null ||
      _0 !== f0(l) ||
      ((l = _0),
      "selectionStart" in l && ts(l)
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
      (xr && _r(xr, l)) ||
        ((xr = l),
        (l = Fo(ns, "onSelect")),
        0 < l.length &&
          ((n = new Wi("onSelect", "select", null, n, s)),
          e.push({ event: n, listeners: l }),
          (n.target = _0))));
  }
  function Po(e, n) {
    var s = {};
    return (
      (s[e.toLowerCase()] = n.toLowerCase()),
      (s["Webkit" + e] = "webkit" + n),
      (s["Moz" + e] = "moz" + n),
      s
    );
  }
  var x0 = {
      animationend: Po("Animation", "AnimationEnd"),
      animationiteration: Po("Animation", "AnimationIteration"),
      animationstart: Po("Animation", "AnimationStart"),
      transitionend: Po("Transition", "TransitionEnd"),
    },
    os = {},
    Vu = {};
  h &&
    ((Vu = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete x0.animationend.animation,
      delete x0.animationiteration.animation,
      delete x0.animationstart.animation),
    "TransitionEvent" in window || delete x0.transitionend.transition);
  function Eo(e) {
    if (os[e]) return os[e];
    if (!x0[e]) return e;
    var n = x0[e],
      s;
    for (s in n) if (n.hasOwnProperty(s) && s in Vu) return (os[e] = n[s]);
    return e;
  }
  var Gu = Eo("animationend"),
    Uu = Eo("animationiteration"),
    qu = Eo("animationstart"),
    Wu = Eo("transitionend"),
    Ku = new Map(),
    Xu =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function En(e, n) {
    Ku.set(e, n), c(n, [e]);
  }
  for (var as = 0; as < Xu.length; as++) {
    var is = Xu[as],
      mg = is.toLowerCase(),
      gg = is[0].toUpperCase() + is.slice(1);
    En(mg, "on" + gg);
  }
  En(Gu, "onAnimationEnd"),
    En(Uu, "onAnimationIteration"),
    En(qu, "onAnimationStart"),
    En("dblclick", "onDoubleClick"),
    En("focusin", "onFocus"),
    En("focusout", "onBlur"),
    En(Wu, "onTransitionEnd"),
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
  var Sr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    bg = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Sr),
    );
  function Qu(e, n, s) {
    var l = e.type || "unknown-event";
    (e.currentTarget = s), m1(l, n, void 0, e), (e.currentTarget = null);
  }
  function Yu(e, n) {
    n = (n & 4) !== 0;
    for (var s = 0; s < e.length; s++) {
      var l = e[s],
        u = l.event;
      l = l.listeners;
      e: {
        var p = void 0;
        if (n)
          for (var g = l.length - 1; 0 <= g; g--) {
            var _ = l[g],
              w = _.instance,
              B = _.currentTarget;
            if (((_ = _.listener), w !== p && u.isPropagationStopped()))
              break e;
            Qu(u, _, B), (p = w);
          }
        else
          for (g = 0; g < l.length; g++) {
            if (
              ((_ = l[g]),
              (w = _.instance),
              (B = _.currentTarget),
              (_ = _.listener),
              w !== p && u.isPropagationStopped())
            )
              break e;
            Qu(u, _, B), (p = w);
          }
      }
    }
    if (fo) throw ((e = Li), (fo = !1), (Li = null), e);
  }
  function Ne(e, n) {
    var s = n[hs];
    s === void 0 && (s = n[hs] = new Set());
    var l = e + "__bubble";
    s.has(l) || (Zu(n, e, 2, !1), s.add(l));
  }
  function ss(e, n, s) {
    var l = 0;
    n && (l |= 4), Zu(s, e, l, n);
  }
  var To = "_reactListening" + Math.random().toString(36).slice(2);
  function Cr(e) {
    if (!e[To]) {
      (e[To] = !0),
        a.forEach(function (s) {
          s !== "selectionchange" && (bg.has(s) || ss(s, !1, e), ss(s, !0, e));
        });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[To] || ((n[To] = !0), ss("selectionchange", !1, n));
    }
  }
  function Zu(e, n, s, l) {
    switch (xu(n)) {
      case 1:
        var u = j1;
        break;
      case 4:
        u = R1;
        break;
      default:
        u = Gi;
    }
    (s = u.bind(null, n, s, e)),
      (u = void 0),
      !Ni ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (u = !0),
      l
        ? u !== void 0
          ? e.addEventListener(n, s, { capture: !0, passive: u })
          : e.addEventListener(n, s, !0)
        : u !== void 0
          ? e.addEventListener(n, s, { passive: u })
          : e.addEventListener(n, s, !1);
  }
  function ls(e, n, s, l, u) {
    var p = l;
    if ((n & 1) === 0 && (n & 2) === 0 && l !== null)
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
            if (((g = qn(_)), g === null)) return;
            if (((w = g.tag), w === 5 || w === 6)) {
              l = p = g;
              continue e;
            }
            _ = _.parentNode;
          }
        }
        l = l.return;
      }
    ru(function () {
      var B = p,
        H = Ii(s),
        z = [];
      e: {
        var D = Ku.get(e);
        if (D !== void 0) {
          var Q = Wi,
            J = e;
          switch (e) {
            case "keypress":
              if (Co(s) === 0) break e;
            case "keydown":
            case "keyup":
              Q = W1;
              break;
            case "focusin":
              (J = "focus"), (Q = Qi);
              break;
            case "focusout":
              (J = "blur"), (Q = Qi);
              break;
            case "beforeblur":
            case "afterblur":
              Q = Qi;
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
              Q = wu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = M1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = Q1;
              break;
            case Gu:
            case Uu:
            case qu:
              Q = $1;
              break;
            case Wu:
              Q = Z1;
              break;
            case "scroll":
              Q = I1;
              break;
            case "wheel":
              Q = eg;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = D1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = Ou;
          }
          var ee = (n & 4) !== 0,
            qe = !ee && e === "scroll",
            j = ee ? (D !== null ? D + "Capture" : null) : D;
          ee = [];
          for (var E = B, R; E !== null; ) {
            R = E;
            var U = R.stateNode;
            if (
              (R.tag === 5 &&
                U !== null &&
                ((R = U),
                j !== null &&
                  ((U = ar(E, j)), U != null && ee.push(wr(E, U, R)))),
              qe)
            )
              break;
            E = E.return;
          }
          0 < ee.length &&
            ((D = new Q(D, J, null, s, H)),
            z.push({ event: D, listeners: ee }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (
            ((D = e === "mouseover" || e === "pointerover"),
            (Q = e === "mouseout" || e === "pointerout"),
            D &&
              s !== Ri &&
              (J = s.relatedTarget || s.fromElement) &&
              (qn(J) || J[un]))
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
                (Q = B),
                (J = J ? qn(J) : null),
                J !== null &&
                  ((qe = Un(J)), J !== qe || (J.tag !== 5 && J.tag !== 6)) &&
                  (J = null))
              : ((Q = null), (J = B)),
            Q !== J)
          ) {
            if (
              ((ee = wu),
              (U = "onMouseLeave"),
              (j = "onMouseEnter"),
              (E = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ee = Ou),
                (U = "onPointerLeave"),
                (j = "onPointerEnter"),
                (E = "pointer")),
              (qe = Q == null ? D : w0(Q)),
              (R = J == null ? D : w0(J)),
              (D = new ee(U, E + "leave", Q, s, H)),
              (D.target = qe),
              (D.relatedTarget = R),
              (U = null),
              qn(H) === B &&
                ((ee = new ee(j, E + "enter", J, s, H)),
                (ee.target = R),
                (ee.relatedTarget = qe),
                (U = ee)),
              (qe = U),
              Q && J)
            )
              t: {
                for (ee = Q, j = J, E = 0, R = ee; R; R = S0(R)) E++;
                for (R = 0, U = j; U; U = S0(U)) R++;
                for (; 0 < E - R; ) (ee = S0(ee)), E--;
                for (; 0 < R - E; ) (j = S0(j)), R--;
                for (; E--; ) {
                  if (ee === j || (j !== null && ee === j.alternate)) break t;
                  (ee = S0(ee)), (j = S0(j));
                }
                ee = null;
              }
            else ee = null;
            Q !== null && Ju(z, D, Q, ee, !1),
              J !== null && qe !== null && Ju(z, qe, J, ee, !0);
          }
        }
        e: {
          if (
            ((D = B ? w0(B) : window),
            (Q = D.nodeName && D.nodeName.toLowerCase()),
            Q === "select" || (Q === "input" && D.type === "file"))
          )
            var ne = sg;
          else if (Ru(D))
            if (Bu) ne = dg;
            else {
              ne = cg;
              var ae = lg;
            }
          else
            (Q = D.nodeName) &&
              Q.toLowerCase() === "input" &&
              (D.type === "checkbox" || D.type === "radio") &&
              (ne = ug);
          if (ne && (ne = ne(e, B))) {
            Iu(z, ne, s, H);
            break e;
          }
          ae && ae(e, D, B),
            e === "focusout" &&
              (ae = D._wrapperState) &&
              ae.controlled &&
              D.type === "number" &&
              Pi(D, "number", D.value);
        }
        switch (((ae = B ? w0(B) : window), e)) {
          case "focusin":
            (Ru(ae) || ae.contentEditable === "true") &&
              ((_0 = ae), (ns = B), (xr = null));
            break;
          case "focusout":
            xr = ns = _0 = null;
            break;
          case "mousedown":
            rs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (rs = !1), zu(z, s, H);
            break;
          case "selectionchange":
            if (hg) break;
          case "keydown":
          case "keyup":
            zu(z, s, H);
        }
        var ie;
        if (Zi)
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
          y0
            ? Fu(e, s) && (fe = "onCompositionEnd")
            : e === "keydown" &&
              s.keyCode === 229 &&
              (fe = "onCompositionStart");
        fe &&
          (Pu &&
            s.locale !== "ko" &&
            (y0 || fe !== "onCompositionStart"
              ? fe === "onCompositionEnd" && y0 && (ie = Su())
              : ((Pn = H),
                (qi = "value" in Pn ? Pn.value : Pn.textContent),
                (y0 = !0))),
          (ae = Fo(B, fe)),
          0 < ae.length &&
            ((fe = new ku(fe, e, null, s, H)),
            z.push({ event: fe, listeners: ae }),
            ie
              ? (fe.data = ie)
              : ((ie = ju(s)), ie !== null && (fe.data = ie)))),
          (ie = ng ? rg(e, s) : og(e, s)) &&
            ((B = Fo(B, "onBeforeInput")),
            0 < B.length &&
              ((H = new ku("onBeforeInput", "beforeinput", null, s, H)),
              z.push({ event: H, listeners: B }),
              (H.data = ie)));
      }
      Yu(z, n);
    });
  }
  function wr(e, n, s) {
    return { instance: e, listener: n, currentTarget: s };
  }
  function Fo(e, n) {
    for (var s = n + "Capture", l = []; e !== null; ) {
      var u = e,
        p = u.stateNode;
      u.tag === 5 &&
        p !== null &&
        ((u = p),
        (p = ar(e, s)),
        p != null && l.unshift(wr(e, p, u)),
        (p = ar(e, n)),
        p != null && l.push(wr(e, p, u))),
        (e = e.return);
    }
    return l;
  }
  function S0(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ju(e, n, s, l, u) {
    for (var p = n._reactName, g = []; s !== null && s !== l; ) {
      var _ = s,
        w = _.alternate,
        B = _.stateNode;
      if (w !== null && w === l) break;
      _.tag === 5 &&
        B !== null &&
        ((_ = B),
        u
          ? ((w = ar(s, p)), w != null && g.unshift(wr(s, w, _)))
          : u || ((w = ar(s, p)), w != null && g.push(wr(s, w, _)))),
        (s = s.return);
    }
    g.length !== 0 && e.push({ event: n, listeners: g });
  }
  var vg = /\r\n?/g,
    yg = /\u0000|\uFFFD/g;
  function ed(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        vg,
        `
`,
      )
      .replace(yg, "");
  }
  function jo(e, n, s) {
    if (((n = ed(n)), ed(e) !== n && s)) throw Error(o(425));
  }
  function Ro() {}
  var cs = null,
    us = null;
  function ds(e, n) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var fs = typeof setTimeout == "function" ? setTimeout : void 0,
    _g = typeof clearTimeout == "function" ? clearTimeout : void 0,
    td = typeof Promise == "function" ? Promise : void 0,
    xg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof td < "u"
          ? function (e) {
              return td.resolve(null).then(e).catch(Sg);
            }
          : fs;
  function Sg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ps(e, n) {
    var s = n,
      l = 0;
    do {
      var u = s.nextSibling;
      if ((e.removeChild(s), u && u.nodeType === 8))
        if (((s = u.data), s === "/$")) {
          if (l === 0) {
            e.removeChild(u), hr(n);
            return;
          }
          l--;
        } else (s !== "$" && s !== "$?" && s !== "$!") || l++;
      s = u;
    } while (s);
    hr(n);
  }
  function Tn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  function nd(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var s = e.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (n === 0) return e;
          n--;
        } else s === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var C0 = Math.random().toString(36).slice(2),
    en = "__reactFiber$" + C0,
    kr = "__reactProps$" + C0,
    un = "__reactContainer$" + C0,
    hs = "__reactEvents$" + C0,
    Cg = "__reactListeners$" + C0,
    wg = "__reactHandles$" + C0;
  function qn(e) {
    var n = e[en];
    if (n) return n;
    for (var s = e.parentNode; s; ) {
      if ((n = s[un] || s[en])) {
        if (
          ((s = n.alternate),
          n.child !== null || (s !== null && s.child !== null))
        )
          for (e = nd(e); e !== null; ) {
            if ((s = e[en])) return s;
            e = nd(e);
          }
        return n;
      }
      (e = s), (s = e.parentNode);
    }
    return null;
  }
  function Or(e) {
    return (
      (e = e[en] || e[un]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function w0(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Io(e) {
    return e[kr] || null;
  }
  var ms = [],
    k0 = -1;
  function Fn(e) {
    return { current: e };
  }
  function Le(e) {
    0 > k0 || ((e.current = ms[k0]), (ms[k0] = null), k0--);
  }
  function Be(e, n) {
    k0++, (ms[k0] = e.current), (e.current = n);
  }
  var jn = {},
    ct = Fn(jn),
    _t = Fn(!1),
    Wn = jn;
  function O0(e, n) {
    var s = e.type.contextTypes;
    if (!s) return jn;
    var l = e.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === n)
      return l.__reactInternalMemoizedMaskedChildContext;
    var u = {},
      p;
    for (p in s) u[p] = n[p];
    return (
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = n),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      u
    );
  }
  function xt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Bo() {
    Le(_t), Le(ct);
  }
  function rd(e, n, s) {
    if (ct.current !== jn) throw Error(o(168));
    Be(ct, n), Be(_t, s);
  }
  function od(e, n, s) {
    var l = e.stateNode;
    if (((n = n.childContextTypes), typeof l.getChildContext != "function"))
      return s;
    l = l.getChildContext();
    for (var u in l) if (!(u in n)) throw Error(o(108, be(e) || "Unknown", u));
    return C({}, s, l);
  }
  function Mo(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        jn),
      (Wn = ct.current),
      Be(ct, e),
      Be(_t, _t.current),
      !0
    );
  }
  function ad(e, n, s) {
    var l = e.stateNode;
    if (!l) throw Error(o(169));
    s
      ? ((e = od(e, n, Wn)),
        (l.__reactInternalMemoizedMergedChildContext = e),
        Le(_t),
        Le(ct),
        Be(ct, e))
      : Le(_t),
      Be(_t, s);
  }
  var dn = null,
    No = !1,
    gs = !1;
  function id(e) {
    dn === null ? (dn = [e]) : dn.push(e);
  }
  function kg(e) {
    (No = !0), id(e);
  }
  function Rn() {
    if (!gs && dn !== null) {
      gs = !0;
      var e = 0,
        n = Re;
      try {
        var s = dn;
        for (Re = 1; e < s.length; e++) {
          var l = s[e];
          do l = l(!0);
          while (l !== null);
        }
        (dn = null), (No = !1);
      } catch (u) {
        throw (dn !== null && (dn = dn.slice(e + 1)), lu($i, Rn), u);
      } finally {
        (Re = n), (gs = !1);
      }
    }
    return null;
  }
  var P0 = [],
    E0 = 0,
    Lo = null,
    $o = 0,
    Nt = [],
    Lt = 0,
    Kn = null,
    fn = 1,
    pn = "";
  function Xn(e, n) {
    (P0[E0++] = $o), (P0[E0++] = Lo), (Lo = e), ($o = n);
  }
  function sd(e, n, s) {
    (Nt[Lt++] = fn), (Nt[Lt++] = pn), (Nt[Lt++] = Kn), (Kn = e);
    var l = fn;
    e = pn;
    var u = 32 - Ut(l) - 1;
    (l &= ~(1 << u)), (s += 1);
    var p = 32 - Ut(n) + u;
    if (30 < p) {
      var g = u - (u % 5);
      (p = (l & ((1 << g) - 1)).toString(32)),
        (l >>= g),
        (u -= g),
        (fn = (1 << (32 - Ut(n) + u)) | (s << u) | l),
        (pn = p + e);
    } else (fn = (1 << p) | (s << u) | l), (pn = e);
  }
  function bs(e) {
    e.return !== null && (Xn(e, 1), sd(e, 1, 0));
  }
  function vs(e) {
    for (; e === Lo; )
      (Lo = P0[--E0]), (P0[E0] = null), ($o = P0[--E0]), (P0[E0] = null);
    for (; e === Kn; )
      (Kn = Nt[--Lt]),
        (Nt[Lt] = null),
        (pn = Nt[--Lt]),
        (Nt[Lt] = null),
        (fn = Nt[--Lt]),
        (Nt[Lt] = null);
  }
  var Tt = null,
    Ft = null,
    Ae = !1,
    Wt = null;
  function ld(e, n) {
    var s = Ht(5, null, null, 0);
    (s.elementType = "DELETED"),
      (s.stateNode = n),
      (s.return = e),
      (n = e.deletions),
      n === null ? ((e.deletions = [s]), (e.flags |= 16)) : n.push(s);
  }
  function cd(e, n) {
    switch (e.tag) {
      case 5:
        var s = e.type;
        return (
          (n =
            n.nodeType !== 1 || s.toLowerCase() !== n.nodeName.toLowerCase()
              ? null
              : n),
          n !== null
            ? ((e.stateNode = n), (Tt = e), (Ft = Tn(n.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
          n !== null ? ((e.stateNode = n), (Tt = e), (Ft = null), !0) : !1
        );
      case 13:
        return (
          (n = n.nodeType !== 8 ? null : n),
          n !== null
            ? ((s = Kn !== null ? { id: fn, overflow: pn } : null),
              (e.memoizedState = {
                dehydrated: n,
                treeContext: s,
                retryLane: 1073741824,
              }),
              (s = Ht(18, null, null, 0)),
              (s.stateNode = n),
              (s.return = e),
              (e.child = s),
              (Tt = e),
              (Ft = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ys(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function _s(e) {
    if (Ae) {
      var n = Ft;
      if (n) {
        var s = n;
        if (!cd(e, n)) {
          if (ys(e)) throw Error(o(418));
          n = Tn(s.nextSibling);
          var l = Tt;
          n && cd(e, n)
            ? ld(l, s)
            : ((e.flags = (e.flags & -4097) | 2), (Ae = !1), (Tt = e));
        }
      } else {
        if (ys(e)) throw Error(o(418));
        (e.flags = (e.flags & -4097) | 2), (Ae = !1), (Tt = e);
      }
    }
  }
  function ud(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Tt = e;
  }
  function Ao(e) {
    if (e !== Tt) return !1;
    if (!Ae) return ud(e), (Ae = !0), !1;
    var n;
    if (
      ((n = e.tag !== 3) &&
        !(n = e.tag !== 5) &&
        ((n = e.type),
        (n = n !== "head" && n !== "body" && !ds(e.type, e.memoizedProps))),
      n && (n = Ft))
    ) {
      if (ys(e)) throw (dd(), Error(o(418)));
      for (; n; ) ld(e, n), (n = Tn(n.nextSibling));
    }
    if ((ud(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var s = e.data;
            if (s === "/$") {
              if (n === 0) {
                Ft = Tn(e.nextSibling);
                break e;
              }
              n--;
            } else (s !== "$" && s !== "$!" && s !== "$?") || n++;
          }
          e = e.nextSibling;
        }
        Ft = null;
      }
    } else Ft = Tt ? Tn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function dd() {
    for (var e = Ft; e; ) e = Tn(e.nextSibling);
  }
  function T0() {
    (Ft = Tt = null), (Ae = !1);
  }
  function xs(e) {
    Wt === null ? (Wt = [e]) : Wt.push(e);
  }
  var Og = N.ReactCurrentBatchConfig;
  function Kt(e, n) {
    if (e && e.defaultProps) {
      (n = C({}, n)), (e = e.defaultProps);
      for (var s in e) n[s] === void 0 && (n[s] = e[s]);
      return n;
    }
    return n;
  }
  var Do = Fn(null),
    Ho = null,
    F0 = null,
    Ss = null;
  function Cs() {
    Ss = F0 = Ho = null;
  }
  function ws(e) {
    var n = Do.current;
    Le(Do), (e._currentValue = n);
  }
  function ks(e, n, s) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), l !== null && (l.childLanes |= n))
          : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n),
        e === s)
      )
        break;
      e = e.return;
    }
  }
  function j0(e, n) {
    (Ho = e),
      (Ss = F0 = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & n) !== 0 && (St = !0), (e.firstContext = null));
  }
  function $t(e) {
    var n = e._currentValue;
    if (Ss !== e)
      if (((e = { context: e, memoizedValue: n, next: null }), F0 === null)) {
        if (Ho === null) throw Error(o(308));
        (F0 = e), (Ho.dependencies = { lanes: 0, firstContext: e });
      } else F0 = F0.next = e;
    return n;
  }
  var Qn = null;
  function Os(e) {
    Qn === null ? (Qn = [e]) : Qn.push(e);
  }
  function fd(e, n, s, l) {
    var u = n.interleaved;
    return (
      u === null ? ((s.next = s), Os(n)) : ((s.next = u.next), (u.next = s)),
      (n.interleaved = s),
      hn(e, l)
    );
  }
  function hn(e, n) {
    e.lanes |= n;
    var s = e.alternate;
    for (s !== null && (s.lanes |= n), s = e, e = e.return; e !== null; )
      (e.childLanes |= n),
        (s = e.alternate),
        s !== null && (s.childLanes |= n),
        (s = e),
        (e = e.return);
    return s.tag === 3 ? s.stateNode : null;
  }
  var In = !1;
  function Ps(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function pd(e, n) {
    (e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function mn(e, n) {
    return {
      eventTime: e,
      lane: n,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Bn(e, n, s) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Oe & 2) !== 0)) {
      var u = l.pending;
      return (
        u === null ? (n.next = n) : ((n.next = u.next), (u.next = n)),
        (l.pending = n),
        hn(e, s)
      );
    }
    return (
      (u = l.interleaved),
      u === null ? ((n.next = n), Os(l)) : ((n.next = u.next), (u.next = n)),
      (l.interleaved = n),
      hn(e, s)
    );
  }
  function zo(e, n, s) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (s & 4194240) !== 0))
    ) {
      var l = n.lanes;
      (l &= e.pendingLanes), (s |= l), (n.lanes = s), Hi(e, s);
    }
  }
  function hd(e, n) {
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
        p === null ? (u = p = n) : (p = p.next = n);
      } else u = p = n;
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
      e === null ? (s.firstBaseUpdate = n) : (e.next = n),
      (s.lastBaseUpdate = n);
  }
  function Vo(e, n, s, l) {
    var u = e.updateQueue;
    In = !1;
    var p = u.firstBaseUpdate,
      g = u.lastBaseUpdate,
      _ = u.shared.pending;
    if (_ !== null) {
      u.shared.pending = null;
      var w = _,
        B = w.next;
      (w.next = null), g === null ? (p = B) : (g.next = B), (g = w);
      var H = e.alternate;
      H !== null &&
        ((H = H.updateQueue),
        (_ = H.lastBaseUpdate),
        _ !== g &&
          (_ === null ? (H.firstBaseUpdate = B) : (_.next = B),
          (H.lastBaseUpdate = w)));
    }
    if (p !== null) {
      var z = u.baseState;
      (g = 0), (H = B = w = null), (_ = p);
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
            switch (((D = n), (Q = s), ee.tag)) {
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
                In = !0;
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
            H === null ? ((B = H = Q), (w = z)) : (H = H.next = Q),
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
        (u.firstBaseUpdate = B),
        (u.lastBaseUpdate = H),
        (n = u.shared.interleaved),
        n !== null)
      ) {
        u = n;
        do (g |= u.lane), (u = u.next);
        while (u !== n);
      } else p === null && (u.shared.lanes = 0);
      (Jn |= g), (e.lanes = g), (e.memoizedState = z);
    }
  }
  function md(e, n, s) {
    if (((e = n.effects), (n.effects = null), e !== null))
      for (n = 0; n < e.length; n++) {
        var l = e[n],
          u = l.callback;
        if (u !== null) {
          if (((l.callback = null), (l = s), typeof u != "function"))
            throw Error(o(191, u));
          u.call(l);
        }
      }
  }
  var gd = new r.Component().refs;
  function Es(e, n, s, l) {
    (n = e.memoizedState),
      (s = s(l, n)),
      (s = s == null ? n : C({}, n, s)),
      (e.memoizedState = s),
      e.lanes === 0 && (e.updateQueue.baseState = s);
  }
  var Go = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Un(e) === e : !1;
    },
    enqueueSetState: function (e, n, s) {
      e = e._reactInternals;
      var l = vt(),
        u = $n(e),
        p = mn(l, u);
      (p.payload = n),
        s != null && (p.callback = s),
        (n = Bn(e, p, u)),
        n !== null && (Yt(n, e, u, l), zo(n, e, u));
    },
    enqueueReplaceState: function (e, n, s) {
      e = e._reactInternals;
      var l = vt(),
        u = $n(e),
        p = mn(l, u);
      (p.tag = 1),
        (p.payload = n),
        s != null && (p.callback = s),
        (n = Bn(e, p, u)),
        n !== null && (Yt(n, e, u, l), zo(n, e, u));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var s = vt(),
        l = $n(e),
        u = mn(s, l);
      (u.tag = 2),
        n != null && (u.callback = n),
        (n = Bn(e, u, l)),
        n !== null && (Yt(n, e, l, s), zo(n, e, l));
    },
  };
  function bd(e, n, s, l, u, p, g) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, p, g)
        : n.prototype && n.prototype.isPureReactComponent
          ? !_r(s, l) || !_r(u, p)
          : !0
    );
  }
  function vd(e, n, s) {
    var l = !1,
      u = jn,
      p = n.contextType;
    return (
      typeof p == "object" && p !== null
        ? (p = $t(p))
        : ((u = xt(n) ? Wn : ct.current),
          (l = n.contextTypes),
          (p = (l = l != null) ? O0(e, u) : jn)),
      (n = new n(s, p)),
      (e.memoizedState =
        n.state !== null && n.state !== void 0 ? n.state : null),
      (n.updater = Go),
      (e.stateNode = n),
      (n._reactInternals = e),
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = u),
        (e.__reactInternalMemoizedMaskedChildContext = p)),
      n
    );
  }
  function yd(e, n, s, l) {
    (e = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(s, l),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(s, l),
      n.state !== e && Go.enqueueReplaceState(n, n.state, null);
  }
  function Ts(e, n, s, l) {
    var u = e.stateNode;
    (u.props = s), (u.state = e.memoizedState), (u.refs = gd), Ps(e);
    var p = n.contextType;
    typeof p == "object" && p !== null
      ? (u.context = $t(p))
      : ((p = xt(n) ? Wn : ct.current), (u.context = O0(e, p))),
      (u.state = e.memoizedState),
      (p = n.getDerivedStateFromProps),
      typeof p == "function" && (Es(e, n, p, s), (u.state = e.memoizedState)),
      typeof n.getDerivedStateFromProps == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function" ||
        (typeof u.UNSAFE_componentWillMount != "function" &&
          typeof u.componentWillMount != "function") ||
        ((n = u.state),
        typeof u.componentWillMount == "function" && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == "function" &&
          u.UNSAFE_componentWillMount(),
        n !== u.state && Go.enqueueReplaceState(u, u.state, null),
        Vo(e, s, u, l),
        (u.state = e.memoizedState)),
      typeof u.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Pr(e, n, s) {
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
        return n !== null &&
          n.ref !== null &&
          typeof n.ref == "function" &&
          n.ref._stringRef === p
          ? n.ref
          : ((n = function (g) {
              var _ = u.refs;
              _ === gd && (_ = u.refs = {}),
                g === null ? delete _[p] : (_[p] = g);
            }),
            (n._stringRef = p),
            n);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!s._owner) throw Error(o(290, e));
    }
    return e;
  }
  function Uo(e, n) {
    throw (
      ((e = Object.prototype.toString.call(n)),
      Error(
        o(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(n).join(", ") + "}"
            : e,
        ),
      ))
    );
  }
  function _d(e) {
    var n = e._init;
    return n(e._payload);
  }
  function xd(e) {
    function n(j, E) {
      if (e) {
        var R = j.deletions;
        R === null ? ((j.deletions = [E]), (j.flags |= 16)) : R.push(E);
      }
    }
    function s(j, E) {
      if (!e) return null;
      for (; E !== null; ) n(j, E), (E = E.sibling);
      return null;
    }
    function l(j, E) {
      for (j = new Map(); E !== null; )
        E.key !== null ? j.set(E.key, E) : j.set(E.index, E), (E = E.sibling);
      return j;
    }
    function u(j, E) {
      return (j = Dn(j, E)), (j.index = 0), (j.sibling = null), j;
    }
    function p(j, E, R) {
      return (
        (j.index = R),
        e
          ? ((R = j.alternate),
            R !== null
              ? ((R = R.index), R < E ? ((j.flags |= 2), E) : R)
              : ((j.flags |= 2), E))
          : ((j.flags |= 1048576), E)
      );
    }
    function g(j) {
      return e && j.alternate === null && (j.flags |= 2), j;
    }
    function _(j, E, R, U) {
      return E === null || E.tag !== 6
        ? ((E = fl(R, j.mode, U)), (E.return = j), E)
        : ((E = u(E, R)), (E.return = j), E);
    }
    function w(j, E, R, U) {
      var ne = R.type;
      return ne === M
        ? H(j, E, R.props.children, U, R.key)
        : E !== null &&
            (E.elementType === ne ||
              (typeof ne == "object" &&
                ne !== null &&
                ne.$$typeof === me &&
                _d(ne) === E.type))
          ? ((U = u(E, R.props)), (U.ref = Pr(j, E, R)), (U.return = j), U)
          : ((U = ua(R.type, R.key, R.props, null, j.mode, U)),
            (U.ref = Pr(j, E, R)),
            (U.return = j),
            U);
    }
    function B(j, E, R, U) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== R.containerInfo ||
        E.stateNode.implementation !== R.implementation
        ? ((E = pl(R, j.mode, U)), (E.return = j), E)
        : ((E = u(E, R.children || [])), (E.return = j), E);
    }
    function H(j, E, R, U, ne) {
      return E === null || E.tag !== 7
        ? ((E = r0(R, j.mode, U, ne)), (E.return = j), E)
        : ((E = u(E, R)), (E.return = j), E);
    }
    function z(j, E, R) {
      if ((typeof E == "string" && E !== "") || typeof E == "number")
        return (E = fl("" + E, j.mode, R)), (E.return = j), E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case F:
            return (
              (R = ua(E.type, E.key, E.props, null, j.mode, R)),
              (R.ref = Pr(j, null, E)),
              (R.return = j),
              R
            );
          case $:
            return (E = pl(E, j.mode, R)), (E.return = j), E;
          case me:
            var U = E._init;
            return z(j, U(E._payload), R);
        }
        if (nr(E) || Y(E))
          return (E = r0(E, j.mode, R, null)), (E.return = j), E;
        Uo(j, E);
      }
      return null;
    }
    function D(j, E, R, U) {
      var ne = E !== null ? E.key : null;
      if ((typeof R == "string" && R !== "") || typeof R == "number")
        return ne !== null ? null : _(j, E, "" + R, U);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case F:
            return R.key === ne ? w(j, E, R, U) : null;
          case $:
            return R.key === ne ? B(j, E, R, U) : null;
          case me:
            return (ne = R._init), D(j, E, ne(R._payload), U);
        }
        if (nr(R) || Y(R)) return ne !== null ? null : H(j, E, R, U, null);
        Uo(j, R);
      }
      return null;
    }
    function Q(j, E, R, U, ne) {
      if ((typeof U == "string" && U !== "") || typeof U == "number")
        return (j = j.get(R) || null), _(E, j, "" + U, ne);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case F:
            return (
              (j = j.get(U.key === null ? R : U.key) || null), w(E, j, U, ne)
            );
          case $:
            return (
              (j = j.get(U.key === null ? R : U.key) || null), B(E, j, U, ne)
            );
          case me:
            var ae = U._init;
            return Q(j, E, R, ae(U._payload), ne);
        }
        if (nr(U) || Y(U)) return (j = j.get(R) || null), H(E, j, U, ne, null);
        Uo(E, U);
      }
      return null;
    }
    function J(j, E, R, U) {
      for (
        var ne = null, ae = null, ie = E, fe = (E = 0), rt = null;
        ie !== null && fe < R.length;
        fe++
      ) {
        ie.index > fe ? ((rt = ie), (ie = null)) : (rt = ie.sibling);
        var Pe = D(j, ie, R[fe], U);
        if (Pe === null) {
          ie === null && (ie = rt);
          break;
        }
        e && ie && Pe.alternate === null && n(j, ie),
          (E = p(Pe, E, fe)),
          ae === null ? (ne = Pe) : (ae.sibling = Pe),
          (ae = Pe),
          (ie = rt);
      }
      if (fe === R.length) return s(j, ie), Ae && Xn(j, fe), ne;
      if (ie === null) {
        for (; fe < R.length; fe++)
          (ie = z(j, R[fe], U)),
            ie !== null &&
              ((E = p(ie, E, fe)),
              ae === null ? (ne = ie) : (ae.sibling = ie),
              (ae = ie));
        return Ae && Xn(j, fe), ne;
      }
      for (ie = l(j, ie); fe < R.length; fe++)
        (rt = Q(ie, j, fe, R[fe], U)),
          rt !== null &&
            (e &&
              rt.alternate !== null &&
              ie.delete(rt.key === null ? fe : rt.key),
            (E = p(rt, E, fe)),
            ae === null ? (ne = rt) : (ae.sibling = rt),
            (ae = rt));
      return (
        e &&
          ie.forEach(function (Hn) {
            return n(j, Hn);
          }),
        Ae && Xn(j, fe),
        ne
      );
    }
    function ee(j, E, R, U) {
      var ne = Y(R);
      if (typeof ne != "function") throw Error(o(150));
      if (((R = ne.call(R)), R == null)) throw Error(o(151));
      for (
        var ae = (ne = null), ie = E, fe = (E = 0), rt = null, Pe = R.next();
        ie !== null && !Pe.done;
        fe++, Pe = R.next()
      ) {
        ie.index > fe ? ((rt = ie), (ie = null)) : (rt = ie.sibling);
        var Hn = D(j, ie, Pe.value, U);
        if (Hn === null) {
          ie === null && (ie = rt);
          break;
        }
        e && ie && Hn.alternate === null && n(j, ie),
          (E = p(Hn, E, fe)),
          ae === null ? (ne = Hn) : (ae.sibling = Hn),
          (ae = Hn),
          (ie = rt);
      }
      if (Pe.done) return s(j, ie), Ae && Xn(j, fe), ne;
      if (ie === null) {
        for (; !Pe.done; fe++, Pe = R.next())
          (Pe = z(j, Pe.value, U)),
            Pe !== null &&
              ((E = p(Pe, E, fe)),
              ae === null ? (ne = Pe) : (ae.sibling = Pe),
              (ae = Pe));
        return Ae && Xn(j, fe), ne;
      }
      for (ie = l(j, ie); !Pe.done; fe++, Pe = R.next())
        (Pe = Q(ie, j, fe, Pe.value, U)),
          Pe !== null &&
            (e &&
              Pe.alternate !== null &&
              ie.delete(Pe.key === null ? fe : Pe.key),
            (E = p(Pe, E, fe)),
            ae === null ? (ne = Pe) : (ae.sibling = Pe),
            (ae = Pe));
      return (
        e &&
          ie.forEach(function (a2) {
            return n(j, a2);
          }),
        Ae && Xn(j, fe),
        ne
      );
    }
    function qe(j, E, R, U) {
      if (
        (typeof R == "object" &&
          R !== null &&
          R.type === M &&
          R.key === null &&
          (R = R.props.children),
        typeof R == "object" && R !== null)
      ) {
        switch (R.$$typeof) {
          case F:
            e: {
              for (var ne = R.key, ae = E; ae !== null; ) {
                if (ae.key === ne) {
                  if (((ne = R.type), ne === M)) {
                    if (ae.tag === 7) {
                      s(j, ae.sibling),
                        (E = u(ae, R.props.children)),
                        (E.return = j),
                        (j = E);
                      break e;
                    }
                  } else if (
                    ae.elementType === ne ||
                    (typeof ne == "object" &&
                      ne !== null &&
                      ne.$$typeof === me &&
                      _d(ne) === ae.type)
                  ) {
                    s(j, ae.sibling),
                      (E = u(ae, R.props)),
                      (E.ref = Pr(j, ae, R)),
                      (E.return = j),
                      (j = E);
                    break e;
                  }
                  s(j, ae);
                  break;
                } else n(j, ae);
                ae = ae.sibling;
              }
              R.type === M
                ? ((E = r0(R.props.children, j.mode, U, R.key)),
                  (E.return = j),
                  (j = E))
                : ((U = ua(R.type, R.key, R.props, null, j.mode, U)),
                  (U.ref = Pr(j, E, R)),
                  (U.return = j),
                  (j = U));
            }
            return g(j);
          case $:
            e: {
              for (ae = R.key; E !== null; ) {
                if (E.key === ae)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === R.containerInfo &&
                    E.stateNode.implementation === R.implementation
                  ) {
                    s(j, E.sibling),
                      (E = u(E, R.children || [])),
                      (E.return = j),
                      (j = E);
                    break e;
                  } else {
                    s(j, E);
                    break;
                  }
                else n(j, E);
                E = E.sibling;
              }
              (E = pl(R, j.mode, U)), (E.return = j), (j = E);
            }
            return g(j);
          case me:
            return (ae = R._init), qe(j, E, ae(R._payload), U);
        }
        if (nr(R)) return J(j, E, R, U);
        if (Y(R)) return ee(j, E, R, U);
        Uo(j, R);
      }
      return (typeof R == "string" && R !== "") || typeof R == "number"
        ? ((R = "" + R),
          E !== null && E.tag === 6
            ? (s(j, E.sibling), (E = u(E, R)), (E.return = j), (j = E))
            : (s(j, E), (E = fl(R, j.mode, U)), (E.return = j), (j = E)),
          g(j))
        : s(j, E);
    }
    return qe;
  }
  var R0 = xd(!0),
    Sd = xd(!1),
    Er = {},
    tn = Fn(Er),
    Tr = Fn(Er),
    Fr = Fn(Er);
  function Yn(e) {
    if (e === Er) throw Error(o(174));
    return e;
  }
  function Fs(e, n) {
    switch ((Be(Fr, n), Be(Tr, e), Be(tn, Er), (e = n.nodeType), e)) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Ti(null, "");
        break;
      default:
        (e = e === 8 ? n.parentNode : n),
          (n = e.namespaceURI || null),
          (e = e.tagName),
          (n = Ti(n, e));
    }
    Le(tn), Be(tn, n);
  }
  function I0() {
    Le(tn), Le(Tr), Le(Fr);
  }
  function Cd(e) {
    Yn(Fr.current);
    var n = Yn(tn.current),
      s = Ti(n, e.type);
    n !== s && (Be(Tr, e), Be(tn, s));
  }
  function js(e) {
    Tr.current === e && (Le(tn), Le(Tr));
  }
  var De = Fn(0);
  function qo(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var s = n.memoizedState;
        if (
          s !== null &&
          ((s = s.dehydrated), s === null || s.data === "$?" || s.data === "$!")
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  var Rs = [];
  function Is() {
    for (var e = 0; e < Rs.length; e++)
      Rs[e]._workInProgressVersionPrimary = null;
    Rs.length = 0;
  }
  var Wo = N.ReactCurrentDispatcher,
    Bs = N.ReactCurrentBatchConfig,
    Zn = 0,
    He = null,
    Ze = null,
    tt = null,
    Ko = !1,
    jr = !1,
    Rr = 0,
    Pg = 0;
  function ut() {
    throw Error(o(321));
  }
  function Ms(e, n) {
    if (n === null) return !1;
    for (var s = 0; s < n.length && s < e.length; s++)
      if (!qt(e[s], n[s])) return !1;
    return !0;
  }
  function Ns(e, n, s, l, u, p) {
    if (
      ((Zn = p),
      (He = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (Wo.current = e === null || e.memoizedState === null ? jg : Rg),
      (e = s(l, u)),
      jr)
    ) {
      p = 0;
      do {
        if (((jr = !1), (Rr = 0), 25 <= p)) throw Error(o(301));
        (p += 1),
          (tt = Ze = null),
          (n.updateQueue = null),
          (Wo.current = Ig),
          (e = s(l, u));
      } while (jr);
    }
    if (
      ((Wo.current = Yo),
      (n = Ze !== null && Ze.next !== null),
      (Zn = 0),
      (tt = Ze = He = null),
      (Ko = !1),
      n)
    )
      throw Error(o(300));
    return e;
  }
  function Ls() {
    var e = Rr !== 0;
    return (Rr = 0), e;
  }
  function nn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return tt === null ? (He.memoizedState = tt = e) : (tt = tt.next = e), tt;
  }
  function At() {
    if (Ze === null) {
      var e = He.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ze.next;
    var n = tt === null ? He.memoizedState : tt.next;
    if (n !== null) (tt = n), (Ze = e);
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
  function Ir(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function $s(e) {
    var n = At(),
      s = n.queue;
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
        w = null,
        B = p;
      do {
        var H = B.lane;
        if ((Zn & H) === H)
          w !== null &&
            (w = w.next =
              {
                lane: 0,
                action: B.action,
                hasEagerState: B.hasEagerState,
                eagerState: B.eagerState,
                next: null,
              }),
            (l = B.hasEagerState ? B.eagerState : e(l, B.action));
        else {
          var z = {
            lane: H,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null,
          };
          w === null ? ((_ = w = z), (g = l)) : (w = w.next = z),
            (He.lanes |= H),
            (Jn |= H);
        }
        B = B.next;
      } while (B !== null && B !== p);
      w === null ? (g = l) : (w.next = _),
        qt(l, n.memoizedState) || (St = !0),
        (n.memoizedState = l),
        (n.baseState = g),
        (n.baseQueue = w),
        (s.lastRenderedState = l);
    }
    if (((e = s.interleaved), e !== null)) {
      u = e;
      do (p = u.lane), (He.lanes |= p), (Jn |= p), (u = u.next);
      while (u !== e);
    } else u === null && (s.lanes = 0);
    return [n.memoizedState, s.dispatch];
  }
  function As(e) {
    var n = At(),
      s = n.queue;
    if (s === null) throw Error(o(311));
    s.lastRenderedReducer = e;
    var l = s.dispatch,
      u = s.pending,
      p = n.memoizedState;
    if (u !== null) {
      s.pending = null;
      var g = (u = u.next);
      do (p = e(p, g.action)), (g = g.next);
      while (g !== u);
      qt(p, n.memoizedState) || (St = !0),
        (n.memoizedState = p),
        n.baseQueue === null && (n.baseState = p),
        (s.lastRenderedState = p);
    }
    return [p, l];
  }
  function wd() {}
  function kd(e, n) {
    var s = He,
      l = At(),
      u = n(),
      p = !qt(l.memoizedState, u);
    if (
      (p && ((l.memoizedState = u), (St = !0)),
      (l = l.queue),
      Ds(Ed.bind(null, s, l, e), [e]),
      l.getSnapshot !== n || p || (tt !== null && tt.memoizedState.tag & 1))
    ) {
      if (
        ((s.flags |= 2048),
        Br(9, Pd.bind(null, s, l, u, n), void 0, null),
        nt === null)
      )
        throw Error(o(349));
      (Zn & 30) !== 0 || Od(s, n, u);
    }
    return u;
  }
  function Od(e, n, s) {
    (e.flags |= 16384),
      (e = { getSnapshot: n, value: s }),
      (n = He.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (He.updateQueue = n),
          (n.stores = [e]))
        : ((s = n.stores), s === null ? (n.stores = [e]) : s.push(e));
  }
  function Pd(e, n, s, l) {
    (n.value = s), (n.getSnapshot = l), Td(n) && Fd(e);
  }
  function Ed(e, n, s) {
    return s(function () {
      Td(n) && Fd(e);
    });
  }
  function Td(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var s = n();
      return !qt(e, s);
    } catch {
      return !0;
    }
  }
  function Fd(e) {
    var n = hn(e, 1);
    n !== null && Yt(n, e, 1, -1);
  }
  function jd(e) {
    var n = nn();
    return (
      typeof e == "function" && (e = e()),
      (n.memoizedState = n.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ir,
        lastRenderedState: e,
      }),
      (n.queue = e),
      (e = e.dispatch = Fg.bind(null, He, e)),
      [n.memoizedState, e]
    );
  }
  function Br(e, n, s, l) {
    return (
      (e = { tag: e, create: n, destroy: s, deps: l, next: null }),
      (n = He.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (He.updateQueue = n),
          (n.lastEffect = e.next = e))
        : ((s = n.lastEffect),
          s === null
            ? (n.lastEffect = e.next = e)
            : ((l = s.next), (s.next = e), (e.next = l), (n.lastEffect = e))),
      e
    );
  }
  function Rd() {
    return At().memoizedState;
  }
  function Xo(e, n, s, l) {
    var u = nn();
    (He.flags |= e),
      (u.memoizedState = Br(1 | n, s, void 0, l === void 0 ? null : l));
  }
  function Qo(e, n, s, l) {
    var u = At();
    l = l === void 0 ? null : l;
    var p = void 0;
    if (Ze !== null) {
      var g = Ze.memoizedState;
      if (((p = g.destroy), l !== null && Ms(l, g.deps))) {
        u.memoizedState = Br(n, s, p, l);
        return;
      }
    }
    (He.flags |= e), (u.memoizedState = Br(1 | n, s, p, l));
  }
  function Id(e, n) {
    return Xo(8390656, 8, e, n);
  }
  function Ds(e, n) {
    return Qo(2048, 8, e, n);
  }
  function Bd(e, n) {
    return Qo(4, 2, e, n);
  }
  function Md(e, n) {
    return Qo(4, 4, e, n);
  }
  function Nd(e, n) {
    if (typeof n == "function")
      return (
        (e = e()),
        n(e),
        function () {
          n(null);
        }
      );
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function Ld(e, n, s) {
    return (
      (s = s != null ? s.concat([e]) : null), Qo(4, 4, Nd.bind(null, n, e), s)
    );
  }
  function Hs() {}
  function $d(e, n) {
    var s = At();
    n = n === void 0 ? null : n;
    var l = s.memoizedState;
    return l !== null && n !== null && Ms(n, l[1])
      ? l[0]
      : ((s.memoizedState = [e, n]), e);
  }
  function Ad(e, n) {
    var s = At();
    n = n === void 0 ? null : n;
    var l = s.memoizedState;
    return l !== null && n !== null && Ms(n, l[1])
      ? l[0]
      : ((e = e()), (s.memoizedState = [e, n]), e);
  }
  function Dd(e, n, s) {
    return (Zn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (St = !0)), (e.memoizedState = s))
      : (qt(s, n) ||
          ((s = fu()), (He.lanes |= s), (Jn |= s), (e.baseState = !0)),
        n);
  }
  function Eg(e, n) {
    var s = Re;
    (Re = s !== 0 && 4 > s ? s : 4), e(!0);
    var l = Bs.transition;
    Bs.transition = {};
    try {
      e(!1), n();
    } finally {
      (Re = s), (Bs.transition = l);
    }
  }
  function Hd() {
    return At().memoizedState;
  }
  function Tg(e, n, s) {
    var l = $n(e);
    if (
      ((s = {
        lane: l,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      zd(e))
    )
      Vd(n, s);
    else if (((s = fd(e, n, s, l)), s !== null)) {
      var u = vt();
      Yt(s, e, l, u), Gd(s, n, l);
    }
  }
  function Fg(e, n, s) {
    var l = $n(e),
      u = {
        lane: l,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (zd(e)) Vd(n, u);
    else {
      var p = e.alternate;
      if (
        e.lanes === 0 &&
        (p === null || p.lanes === 0) &&
        ((p = n.lastRenderedReducer), p !== null)
      )
        try {
          var g = n.lastRenderedState,
            _ = p(g, s);
          if (((u.hasEagerState = !0), (u.eagerState = _), qt(_, g))) {
            var w = n.interleaved;
            w === null
              ? ((u.next = u), Os(n))
              : ((u.next = w.next), (w.next = u)),
              (n.interleaved = u);
            return;
          }
        } catch {
        } finally {
        }
      (s = fd(e, n, u, l)),
        s !== null && ((u = vt()), Yt(s, e, l, u), Gd(s, n, l));
    }
  }
  function zd(e) {
    var n = e.alternate;
    return e === He || (n !== null && n === He);
  }
  function Vd(e, n) {
    jr = Ko = !0;
    var s = e.pending;
    s === null ? (n.next = n) : ((n.next = s.next), (s.next = n)),
      (e.pending = n);
  }
  function Gd(e, n, s) {
    if ((s & 4194240) !== 0) {
      var l = n.lanes;
      (l &= e.pendingLanes), (s |= l), (n.lanes = s), Hi(e, s);
    }
  }
  var Yo = {
      readContext: $t,
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
    jg = {
      readContext: $t,
      useCallback: function (e, n) {
        return (nn().memoizedState = [e, n === void 0 ? null : n]), e;
      },
      useContext: $t,
      useEffect: Id,
      useImperativeHandle: function (e, n, s) {
        return (
          (s = s != null ? s.concat([e]) : null),
          Xo(4194308, 4, Nd.bind(null, n, e), s)
        );
      },
      useLayoutEffect: function (e, n) {
        return Xo(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        return Xo(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var s = nn();
        return (
          (n = n === void 0 ? null : n),
          (e = e()),
          (s.memoizedState = [e, n]),
          e
        );
      },
      useReducer: function (e, n, s) {
        var l = nn();
        return (
          (n = s !== void 0 ? s(n) : n),
          (l.memoizedState = l.baseState = n),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (l.queue = e),
          (e = e.dispatch = Tg.bind(null, He, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = nn();
        return (e = { current: e }), (n.memoizedState = e);
      },
      useState: jd,
      useDebugValue: Hs,
      useDeferredValue: function (e) {
        return (nn().memoizedState = e);
      },
      useTransition: function () {
        var e = jd(!1),
          n = e[0];
        return (e = Eg.bind(null, e[1])), (nn().memoizedState = e), [n, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, n, s) {
        var l = He,
          u = nn();
        if (Ae) {
          if (s === void 0) throw Error(o(407));
          s = s();
        } else {
          if (((s = n()), nt === null)) throw Error(o(349));
          (Zn & 30) !== 0 || Od(l, n, s);
        }
        u.memoizedState = s;
        var p = { value: s, getSnapshot: n };
        return (
          (u.queue = p),
          Id(Ed.bind(null, l, p, e), [e]),
          (l.flags |= 2048),
          Br(9, Pd.bind(null, l, p, s, n), void 0, null),
          s
        );
      },
      useId: function () {
        var e = nn(),
          n = nt.identifierPrefix;
        if (Ae) {
          var s = pn,
            l = fn;
          (s = (l & ~(1 << (32 - Ut(l) - 1))).toString(32) + s),
            (n = ":" + n + "R" + s),
            (s = Rr++),
            0 < s && (n += "H" + s.toString(32)),
            (n += ":");
        } else (s = Pg++), (n = ":" + n + "r" + s.toString(32) + ":");
        return (e.memoizedState = n);
      },
      unstable_isNewReconciler: !1,
    },
    Rg = {
      readContext: $t,
      useCallback: $d,
      useContext: $t,
      useEffect: Ds,
      useImperativeHandle: Ld,
      useInsertionEffect: Bd,
      useLayoutEffect: Md,
      useMemo: Ad,
      useReducer: $s,
      useRef: Rd,
      useState: function () {
        return $s(Ir);
      },
      useDebugValue: Hs,
      useDeferredValue: function (e) {
        var n = At();
        return Dd(n, Ze.memoizedState, e);
      },
      useTransition: function () {
        var e = $s(Ir)[0],
          n = At().memoizedState;
        return [e, n];
      },
      useMutableSource: wd,
      useSyncExternalStore: kd,
      useId: Hd,
      unstable_isNewReconciler: !1,
    },
    Ig = {
      readContext: $t,
      useCallback: $d,
      useContext: $t,
      useEffect: Ds,
      useImperativeHandle: Ld,
      useInsertionEffect: Bd,
      useLayoutEffect: Md,
      useMemo: Ad,
      useReducer: As,
      useRef: Rd,
      useState: function () {
        return As(Ir);
      },
      useDebugValue: Hs,
      useDeferredValue: function (e) {
        var n = At();
        return Ze === null ? (n.memoizedState = e) : Dd(n, Ze.memoizedState, e);
      },
      useTransition: function () {
        var e = As(Ir)[0],
          n = At().memoizedState;
        return [e, n];
      },
      useMutableSource: wd,
      useSyncExternalStore: kd,
      useId: Hd,
      unstable_isNewReconciler: !1,
    };
  function B0(e, n) {
    try {
      var s = "",
        l = n;
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
    return { value: e, source: n, stack: u, digest: null };
  }
  function zs(e, n, s) {
    return { value: e, source: null, stack: s ?? null, digest: n ?? null };
  }
  function Vs(e, n) {
    try {
      console.error(n.value);
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  var Bg = typeof WeakMap == "function" ? WeakMap : Map;
  function Ud(e, n, s) {
    (s = mn(-1, s)), (s.tag = 3), (s.payload = { element: null });
    var l = n.value;
    return (
      (s.callback = function () {
        oa || ((oa = !0), (ol = l)), Vs(e, n);
      }),
      s
    );
  }
  function qd(e, n, s) {
    (s = mn(-1, s)), (s.tag = 3);
    var l = e.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var u = n.value;
      (s.payload = function () {
        return l(u);
      }),
        (s.callback = function () {
          Vs(e, n);
        });
    }
    var p = e.stateNode;
    return (
      p !== null &&
        typeof p.componentDidCatch == "function" &&
        (s.callback = function () {
          Vs(e, n),
            typeof l != "function" &&
              (Nn === null ? (Nn = new Set([this])) : Nn.add(this));
          var g = n.stack;
          this.componentDidCatch(n.value, {
            componentStack: g !== null ? g : "",
          });
        }),
      s
    );
  }
  function Wd(e, n, s) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Bg();
      var u = new Set();
      l.set(n, u);
    } else (u = l.get(n)), u === void 0 && ((u = new Set()), l.set(n, u));
    u.has(s) || (u.add(s), (e = Kg.bind(null, e, n, s)), n.then(e, e));
  }
  function Kd(e) {
    do {
      var n;
      if (
        ((n = e.tag === 13) &&
          ((n = e.memoizedState),
          (n = n !== null ? n.dehydrated !== null : !0)),
        n)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Xd(e, n, s, l, u) {
    return (e.mode & 1) === 0
      ? (e === n
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (s.flags |= 131072),
            (s.flags &= -52805),
            s.tag === 1 &&
              (s.alternate === null
                ? (s.tag = 17)
                : ((n = mn(-1, 1)), (n.tag = 2), Bn(s, n, 1))),
            (s.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = u), e);
  }
  var Mg = N.ReactCurrentOwner,
    St = !1;
  function bt(e, n, s, l) {
    n.child = e === null ? Sd(n, null, s, l) : R0(n, e.child, s, l);
  }
  function Qd(e, n, s, l, u) {
    s = s.render;
    var p = n.ref;
    return (
      j0(n, u),
      (l = Ns(e, n, s, l, p, u)),
      (s = Ls()),
      e !== null && !St
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~u),
          gn(e, n, u))
        : (Ae && s && bs(n), (n.flags |= 1), bt(e, n, l, u), n.child)
    );
  }
  function Yd(e, n, s, l, u) {
    if (e === null) {
      var p = s.type;
      return typeof p == "function" &&
        !dl(p) &&
        p.defaultProps === void 0 &&
        s.compare === null &&
        s.defaultProps === void 0
        ? ((n.tag = 15), (n.type = p), Zd(e, n, p, l, u))
        : ((e = ua(s.type, null, l, n, n.mode, u)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((p = e.child), (e.lanes & u) === 0)) {
      var g = p.memoizedProps;
      if (
        ((s = s.compare), (s = s !== null ? s : _r), s(g, l) && e.ref === n.ref)
      )
        return gn(e, n, u);
    }
    return (
      (n.flags |= 1),
      (e = Dn(p, l)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function Zd(e, n, s, l, u) {
    if (e !== null) {
      var p = e.memoizedProps;
      if (_r(p, l) && e.ref === n.ref)
        if (((St = !1), (n.pendingProps = l = p), (e.lanes & u) !== 0))
          (e.flags & 131072) !== 0 && (St = !0);
        else return (n.lanes = e.lanes), gn(e, n, u);
    }
    return Gs(e, n, s, l, u);
  }
  function Jd(e, n, s) {
    var l = n.pendingProps,
      u = l.children,
      p = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden")
      if ((n.mode & 1) === 0)
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Be(N0, jt),
          (jt |= s);
      else {
        if ((s & 1073741824) === 0)
          return (
            (e = p !== null ? p.baseLanes | s : s),
            (n.lanes = n.childLanes = 1073741824),
            (n.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (n.updateQueue = null),
            Be(N0, jt),
            (jt |= e),
            null
          );
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (l = p !== null ? p.baseLanes : s),
          Be(N0, jt),
          (jt |= l);
      }
    else
      p !== null ? ((l = p.baseLanes | s), (n.memoizedState = null)) : (l = s),
        Be(N0, jt),
        (jt |= l);
    return bt(e, n, u, s), n.child;
  }
  function ef(e, n) {
    var s = n.ref;
    ((e === null && s !== null) || (e !== null && e.ref !== s)) &&
      ((n.flags |= 512), (n.flags |= 2097152));
  }
  function Gs(e, n, s, l, u) {
    var p = xt(s) ? Wn : ct.current;
    return (
      (p = O0(n, p)),
      j0(n, u),
      (s = Ns(e, n, s, l, p, u)),
      (l = Ls()),
      e !== null && !St
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~u),
          gn(e, n, u))
        : (Ae && l && bs(n), (n.flags |= 1), bt(e, n, s, u), n.child)
    );
  }
  function tf(e, n, s, l, u) {
    if (xt(s)) {
      var p = !0;
      Mo(n);
    } else p = !1;
    if ((j0(n, u), n.stateNode === null))
      Jo(e, n), vd(n, s, l), Ts(n, s, l, u), (l = !0);
    else if (e === null) {
      var g = n.stateNode,
        _ = n.memoizedProps;
      g.props = _;
      var w = g.context,
        B = s.contextType;
      typeof B == "object" && B !== null
        ? (B = $t(B))
        : ((B = xt(s) ? Wn : ct.current), (B = O0(n, B)));
      var H = s.getDerivedStateFromProps,
        z =
          typeof H == "function" ||
          typeof g.getSnapshotBeforeUpdate == "function";
      z ||
        (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
          typeof g.componentWillReceiveProps != "function") ||
        ((_ !== l || w !== B) && yd(n, g, l, B)),
        (In = !1);
      var D = n.memoizedState;
      (g.state = D),
        Vo(n, l, g, u),
        (w = n.memoizedState),
        _ !== l || D !== w || _t.current || In
          ? (typeof H == "function" && (Es(n, s, H, l), (w = n.memoizedState)),
            (_ = In || bd(n, s, _, l, D, w, B))
              ? (z ||
                  (typeof g.UNSAFE_componentWillMount != "function" &&
                    typeof g.componentWillMount != "function") ||
                  (typeof g.componentWillMount == "function" &&
                    g.componentWillMount(),
                  typeof g.UNSAFE_componentWillMount == "function" &&
                    g.UNSAFE_componentWillMount()),
                typeof g.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof g.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = l),
                (n.memoizedState = w)),
            (g.props = l),
            (g.state = w),
            (g.context = B),
            (l = _))
          : (typeof g.componentDidMount == "function" && (n.flags |= 4194308),
            (l = !1));
    } else {
      (g = n.stateNode),
        pd(e, n),
        (_ = n.memoizedProps),
        (B = n.type === n.elementType ? _ : Kt(n.type, _)),
        (g.props = B),
        (z = n.pendingProps),
        (D = g.context),
        (w = s.contextType),
        typeof w == "object" && w !== null
          ? (w = $t(w))
          : ((w = xt(s) ? Wn : ct.current), (w = O0(n, w)));
      var Q = s.getDerivedStateFromProps;
      (H =
        typeof Q == "function" ||
        typeof g.getSnapshotBeforeUpdate == "function") ||
        (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
          typeof g.componentWillReceiveProps != "function") ||
        ((_ !== z || D !== w) && yd(n, g, l, w)),
        (In = !1),
        (D = n.memoizedState),
        (g.state = D),
        Vo(n, l, g, u);
      var J = n.memoizedState;
      _ !== z || D !== J || _t.current || In
        ? (typeof Q == "function" && (Es(n, s, Q, l), (J = n.memoizedState)),
          (B = In || bd(n, s, B, l, D, J, w) || !1)
            ? (H ||
                (typeof g.UNSAFE_componentWillUpdate != "function" &&
                  typeof g.componentWillUpdate != "function") ||
                (typeof g.componentWillUpdate == "function" &&
                  g.componentWillUpdate(l, J, w),
                typeof g.UNSAFE_componentWillUpdate == "function" &&
                  g.UNSAFE_componentWillUpdate(l, J, w)),
              typeof g.componentDidUpdate == "function" && (n.flags |= 4),
              typeof g.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof g.componentDidUpdate != "function" ||
                (_ === e.memoizedProps && D === e.memoizedState) ||
                (n.flags |= 4),
              typeof g.getSnapshotBeforeUpdate != "function" ||
                (_ === e.memoizedProps && D === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = l),
              (n.memoizedState = J)),
          (g.props = l),
          (g.state = J),
          (g.context = w),
          (l = B))
        : (typeof g.componentDidUpdate != "function" ||
            (_ === e.memoizedProps && D === e.memoizedState) ||
            (n.flags |= 4),
          typeof g.getSnapshotBeforeUpdate != "function" ||
            (_ === e.memoizedProps && D === e.memoizedState) ||
            (n.flags |= 1024),
          (l = !1));
    }
    return Us(e, n, s, l, p, u);
  }
  function Us(e, n, s, l, u, p) {
    ef(e, n);
    var g = (n.flags & 128) !== 0;
    if (!l && !g) return u && ad(n, s, !1), gn(e, n, p);
    (l = n.stateNode), (Mg.current = n);
    var _ =
      g && typeof s.getDerivedStateFromError != "function" ? null : l.render();
    return (
      (n.flags |= 1),
      e !== null && g
        ? ((n.child = R0(n, e.child, null, p)), (n.child = R0(n, null, _, p)))
        : bt(e, n, _, p),
      (n.memoizedState = l.state),
      u && ad(n, s, !0),
      n.child
    );
  }
  function nf(e) {
    var n = e.stateNode;
    n.pendingContext
      ? rd(e, n.pendingContext, n.pendingContext !== n.context)
      : n.context && rd(e, n.context, !1),
      Fs(e, n.containerInfo);
  }
  function rf(e, n, s, l, u) {
    return T0(), xs(u), (n.flags |= 256), bt(e, n, s, l), n.child;
  }
  var qs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ws(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function of(e, n, s) {
    var l = n.pendingProps,
      u = De.current,
      p = !1,
      g = (n.flags & 128) !== 0,
      _;
    if (
      ((_ = g) ||
        (_ = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
      _
        ? ((p = !0), (n.flags &= -129))
        : (e === null || e.memoizedState !== null) && (u |= 1),
      Be(De, u & 1),
      e === null)
    )
      return (
        _s(n),
        (e = n.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((n.mode & 1) === 0
              ? (n.lanes = 1)
              : e.data === "$!"
                ? (n.lanes = 8)
                : (n.lanes = 1073741824),
            null)
          : ((g = l.children),
            (e = l.fallback),
            p
              ? ((l = n.mode),
                (p = n.child),
                (g = { mode: "hidden", children: g }),
                (l & 1) === 0 && p !== null
                  ? ((p.childLanes = 0), (p.pendingProps = g))
                  : (p = da(g, l, 0, null)),
                (e = r0(e, l, s, null)),
                (p.return = n),
                (e.return = n),
                (p.sibling = e),
                (n.child = p),
                (n.child.memoizedState = Ws(s)),
                (n.memoizedState = qs),
                e)
              : Ks(n, g))
      );
    if (((u = e.memoizedState), u !== null && ((_ = u.dehydrated), _ !== null)))
      return Ng(e, n, g, l, _, u, s);
    if (p) {
      (p = l.fallback), (g = n.mode), (u = e.child), (_ = u.sibling);
      var w = { mode: "hidden", children: l.children };
      return (
        (g & 1) === 0 && n.child !== u
          ? ((l = n.child),
            (l.childLanes = 0),
            (l.pendingProps = w),
            (n.deletions = null))
          : ((l = Dn(u, w)), (l.subtreeFlags = u.subtreeFlags & 14680064)),
        _ !== null ? (p = Dn(_, p)) : ((p = r0(p, g, s, null)), (p.flags |= 2)),
        (p.return = n),
        (l.return = n),
        (l.sibling = p),
        (n.child = l),
        (l = p),
        (p = n.child),
        (g = e.child.memoizedState),
        (g =
          g === null
            ? Ws(s)
            : {
                baseLanes: g.baseLanes | s,
                cachePool: null,
                transitions: g.transitions,
              }),
        (p.memoizedState = g),
        (p.childLanes = e.childLanes & ~s),
        (n.memoizedState = qs),
        l
      );
    }
    return (
      (p = e.child),
      (e = p.sibling),
      (l = Dn(p, { mode: "visible", children: l.children })),
      (n.mode & 1) === 0 && (l.lanes = s),
      (l.return = n),
      (l.sibling = null),
      e !== null &&
        ((s = n.deletions),
        s === null ? ((n.deletions = [e]), (n.flags |= 16)) : s.push(e)),
      (n.child = l),
      (n.memoizedState = null),
      l
    );
  }
  function Ks(e, n) {
    return (
      (n = da({ mode: "visible", children: n }, e.mode, 0, null)),
      (n.return = e),
      (e.child = n)
    );
  }
  function Zo(e, n, s, l) {
    return (
      l !== null && xs(l),
      R0(n, e.child, null, s),
      (e = Ks(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function Ng(e, n, s, l, u, p, g) {
    if (s)
      return n.flags & 256
        ? ((n.flags &= -257), (l = zs(Error(o(422)))), Zo(e, n, g, l))
        : n.memoizedState !== null
          ? ((n.child = e.child), (n.flags |= 128), null)
          : ((p = l.fallback),
            (u = n.mode),
            (l = da({ mode: "visible", children: l.children }, u, 0, null)),
            (p = r0(p, u, g, null)),
            (p.flags |= 2),
            (l.return = n),
            (p.return = n),
            (l.sibling = p),
            (n.child = l),
            (n.mode & 1) !== 0 && R0(n, e.child, null, g),
            (n.child.memoizedState = Ws(g)),
            (n.memoizedState = qs),
            p);
    if ((n.mode & 1) === 0) return Zo(e, n, g, null);
    if (u.data === "$!") {
      if (((l = u.nextSibling && u.nextSibling.dataset), l)) var _ = l.dgst;
      return (
        (l = _), (p = Error(o(419))), (l = zs(p, l, void 0)), Zo(e, n, g, l)
      );
    }
    if (((_ = (g & e.childLanes) !== 0), St || _)) {
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
            ((p.retryLane = u), hn(e, u), Yt(l, e, u, -1));
      }
      return ul(), (l = zs(Error(o(421)))), Zo(e, n, g, l);
    }
    return u.data === "$?"
      ? ((n.flags |= 128),
        (n.child = e.child),
        (n = Xg.bind(null, e)),
        (u._reactRetry = n),
        null)
      : ((e = p.treeContext),
        (Ft = Tn(u.nextSibling)),
        (Tt = n),
        (Ae = !0),
        (Wt = null),
        e !== null &&
          ((Nt[Lt++] = fn),
          (Nt[Lt++] = pn),
          (Nt[Lt++] = Kn),
          (fn = e.id),
          (pn = e.overflow),
          (Kn = n)),
        (n = Ks(n, l.children)),
        (n.flags |= 4096),
        n);
  }
  function af(e, n, s) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n), ks(e.return, n, s);
  }
  function Xs(e, n, s, l, u) {
    var p = e.memoizedState;
    p === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: s,
          tailMode: u,
        })
      : ((p.isBackwards = n),
        (p.rendering = null),
        (p.renderingStartTime = 0),
        (p.last = l),
        (p.tail = s),
        (p.tailMode = u));
  }
  function sf(e, n, s) {
    var l = n.pendingProps,
      u = l.revealOrder,
      p = l.tail;
    if ((bt(e, n, l.children, s), (l = De.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (n.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && af(e, s, n);
          else if (e.tag === 19) af(e, s, n);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      l &= 1;
    }
    if ((Be(De, l), (n.mode & 1) === 0)) n.memoizedState = null;
    else
      switch (u) {
        case "forwards":
          for (s = n.child, u = null; s !== null; )
            (e = s.alternate),
              e !== null && qo(e) === null && (u = s),
              (s = s.sibling);
          (s = u),
            s === null
              ? ((u = n.child), (n.child = null))
              : ((u = s.sibling), (s.sibling = null)),
            Xs(n, !1, u, s, p);
          break;
        case "backwards":
          for (s = null, u = n.child, n.child = null; u !== null; ) {
            if (((e = u.alternate), e !== null && qo(e) === null)) {
              n.child = u;
              break;
            }
            (e = u.sibling), (u.sibling = s), (s = u), (u = e);
          }
          Xs(n, !0, s, null, p);
          break;
        case "together":
          Xs(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function Jo(e, n) {
    (n.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
  }
  function gn(e, n, s) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (Jn |= n.lanes),
      (s & n.childLanes) === 0)
    )
      return null;
    if (e !== null && n.child !== e.child) throw Error(o(153));
    if (n.child !== null) {
      for (
        e = n.child, s = Dn(e, e.pendingProps), n.child = s, s.return = n;
        e.sibling !== null;

      )
        (e = e.sibling),
          (s = s.sibling = Dn(e, e.pendingProps)),
          (s.return = n);
      s.sibling = null;
    }
    return n.child;
  }
  function Lg(e, n, s) {
    switch (n.tag) {
      case 3:
        nf(n), T0();
        break;
      case 5:
        Cd(n);
        break;
      case 1:
        xt(n.type) && Mo(n);
        break;
      case 4:
        Fs(n, n.stateNode.containerInfo);
        break;
      case 10:
        var l = n.type._context,
          u = n.memoizedProps.value;
        Be(Do, l._currentValue), (l._currentValue = u);
        break;
      case 13:
        if (((l = n.memoizedState), l !== null))
          return l.dehydrated !== null
            ? (Be(De, De.current & 1), (n.flags |= 128), null)
            : (s & n.child.childLanes) !== 0
              ? of(e, n, s)
              : (Be(De, De.current & 1),
                (e = gn(e, n, s)),
                e !== null ? e.sibling : null);
        Be(De, De.current & 1);
        break;
      case 19:
        if (((l = (s & n.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (l) return sf(e, n, s);
          n.flags |= 128;
        }
        if (
          ((u = n.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Be(De, De.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), Jd(e, n, s);
    }
    return gn(e, n, s);
  }
  var lf, Qs, cf, uf;
  (lf = function (e, n) {
    for (var s = n.child; s !== null; ) {
      if (s.tag === 5 || s.tag === 6) e.appendChild(s.stateNode);
      else if (s.tag !== 4 && s.child !== null) {
        (s.child.return = s), (s = s.child);
        continue;
      }
      if (s === n) break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === n) return;
        s = s.return;
      }
      (s.sibling.return = s.return), (s = s.sibling);
    }
  }),
    (Qs = function () {}),
    (cf = function (e, n, s, l) {
      var u = e.memoizedProps;
      if (u !== l) {
        (e = n.stateNode), Yn(tn.current);
        var p = null;
        switch (s) {
          case "input":
            (u = p0(e, u)), (l = p0(e, l)), (p = []);
            break;
          case "select":
            (u = C({}, u, { value: void 0 })),
              (l = C({}, l, { value: void 0 })),
              (p = []);
            break;
          case "textarea":
            (u = Ei(e, u)), (l = Ei(e, l)), (p = []);
            break;
          default:
            typeof u.onClick != "function" &&
              typeof l.onClick == "function" &&
              (e.onclick = Ro);
        }
        Fi(s, l);
        var g;
        s = null;
        for (B in u)
          if (!l.hasOwnProperty(B) && u.hasOwnProperty(B) && u[B] != null)
            if (B === "style") {
              var _ = u[B];
              for (g in _) _.hasOwnProperty(g) && (s || (s = {}), (s[g] = ""));
            } else
              B !== "dangerouslySetInnerHTML" &&
                B !== "children" &&
                B !== "suppressContentEditableWarning" &&
                B !== "suppressHydrationWarning" &&
                B !== "autoFocus" &&
                (i.hasOwnProperty(B)
                  ? p || (p = [])
                  : (p = p || []).push(B, null));
        for (B in l) {
          var w = l[B];
          if (
            ((_ = u != null ? u[B] : void 0),
            l.hasOwnProperty(B) && w !== _ && (w != null || _ != null))
          )
            if (B === "style")
              if (_) {
                for (g in _)
                  !_.hasOwnProperty(g) ||
                    (w && w.hasOwnProperty(g)) ||
                    (s || (s = {}), (s[g] = ""));
                for (g in w)
                  w.hasOwnProperty(g) &&
                    _[g] !== w[g] &&
                    (s || (s = {}), (s[g] = w[g]));
              } else s || (p || (p = []), p.push(B, s)), (s = w);
            else
              B === "dangerouslySetInnerHTML"
                ? ((w = w ? w.__html : void 0),
                  (_ = _ ? _.__html : void 0),
                  w != null && _ !== w && (p = p || []).push(B, w))
                : B === "children"
                  ? (typeof w != "string" && typeof w != "number") ||
                    (p = p || []).push(B, "" + w)
                  : B !== "suppressContentEditableWarning" &&
                    B !== "suppressHydrationWarning" &&
                    (i.hasOwnProperty(B)
                      ? (w != null && B === "onScroll" && Ne("scroll", e),
                        p || _ === w || (p = []))
                      : (p = p || []).push(B, w));
        }
        s && (p = p || []).push("style", s);
        var B = p;
        (n.updateQueue = B) && (n.flags |= 4);
      }
    }),
    (uf = function (e, n, s, l) {
      s !== l && (n.flags |= 4);
    });
  function Mr(e, n) {
    if (!Ae)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var s = null; n !== null; )
            n.alternate !== null && (s = n), (n = n.sibling);
          s === null ? (e.tail = null) : (s.sibling = null);
          break;
        case "collapsed":
          s = e.tail;
          for (var l = null; s !== null; )
            s.alternate !== null && (l = s), (s = s.sibling);
          l === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function dt(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      s = 0,
      l = 0;
    if (n)
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
    return (e.subtreeFlags |= l), (e.childLanes = s), n;
  }
  function $g(e, n, s) {
    var l = n.pendingProps;
    switch ((vs(n), n.tag)) {
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
        return dt(n), null;
      case 1:
        return xt(n.type) && Bo(), dt(n), null;
      case 3:
        return (
          (l = n.stateNode),
          I0(),
          Le(_t),
          Le(ct),
          Is(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ao(n)
              ? (n.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), Wt !== null && (sl(Wt), (Wt = null)))),
          Qs(e, n),
          dt(n),
          null
        );
      case 5:
        js(n);
        var u = Yn(Fr.current);
        if (((s = n.type), e !== null && n.stateNode != null))
          cf(e, n, s, l, u),
            e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
        else {
          if (!l) {
            if (n.stateNode === null) throw Error(o(166));
            return dt(n), null;
          }
          if (((e = Yn(tn.current)), Ao(n))) {
            (l = n.stateNode), (s = n.type);
            var p = n.memoizedProps;
            switch (((l[en] = n), (l[kr] = p), (e = (n.mode & 1) !== 0), s)) {
              case "dialog":
                Ne("cancel", l), Ne("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ne("load", l);
                break;
              case "video":
              case "audio":
                for (u = 0; u < Sr.length; u++) Ne(Sr[u], l);
                break;
              case "source":
                Ne("error", l);
                break;
              case "img":
              case "image":
              case "link":
                Ne("error", l), Ne("load", l);
                break;
              case "details":
                Ne("toggle", l);
                break;
              case "input":
                lo(l, p), Ne("invalid", l);
                break;
              case "select":
                (l._wrapperState = { wasMultiple: !!p.multiple }),
                  Ne("invalid", l);
                break;
              case "textarea":
                Uc(l, p), Ne("invalid", l);
            }
            Fi(s, p), (u = null);
            for (var g in p)
              if (p.hasOwnProperty(g)) {
                var _ = p[g];
                g === "children"
                  ? typeof _ == "string"
                    ? l.textContent !== _ &&
                      (p.suppressHydrationWarning !== !0 &&
                        jo(l.textContent, _, e),
                      (u = ["children", _]))
                    : typeof _ == "number" &&
                      l.textContent !== "" + _ &&
                      (p.suppressHydrationWarning !== !0 &&
                        jo(l.textContent, _, e),
                      (u = ["children", "" + _]))
                  : i.hasOwnProperty(g) &&
                    _ != null &&
                    g === "onScroll" &&
                    Ne("scroll", l);
              }
            switch (s) {
              case "input":
                Mt(l), Gc(l, p, !0);
                break;
              case "textarea":
                Mt(l), Wc(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (l.onclick = Ro);
            }
            (l = u), (n.updateQueue = l), l !== null && (n.flags |= 4);
          } else {
            (g = u.nodeType === 9 ? u : u.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Kc(s)),
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
              (e[en] = n),
              (e[kr] = l),
              lf(e, n, !1, !1),
              (n.stateNode = e);
            e: {
              switch (((g = ji(s, l)), s)) {
                case "dialog":
                  Ne("cancel", e), Ne("close", e), (u = l);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ne("load", e), (u = l);
                  break;
                case "video":
                case "audio":
                  for (u = 0; u < Sr.length; u++) Ne(Sr[u], e);
                  u = l;
                  break;
                case "source":
                  Ne("error", e), (u = l);
                  break;
                case "img":
                case "image":
                case "link":
                  Ne("error", e), Ne("load", e), (u = l);
                  break;
                case "details":
                  Ne("toggle", e), (u = l);
                  break;
                case "input":
                  lo(e, l), (u = p0(e, l)), Ne("invalid", e);
                  break;
                case "option":
                  u = l;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!l.multiple }),
                    (u = C({}, l, { value: void 0 })),
                    Ne("invalid", e);
                  break;
                case "textarea":
                  Uc(e, l), (u = Ei(e, l)), Ne("invalid", e);
                  break;
                default:
                  u = l;
              }
              Fi(s, u), (_ = u);
              for (p in _)
                if (_.hasOwnProperty(p)) {
                  var w = _[p];
                  p === "style"
                    ? Yc(e, w)
                    : p === "dangerouslySetInnerHTML"
                      ? ((w = w ? w.__html : void 0), w != null && Xc(e, w))
                      : p === "children"
                        ? typeof w == "string"
                          ? (s !== "textarea" || w !== "") && rr(e, w)
                          : typeof w == "number" && rr(e, "" + w)
                        : p !== "suppressContentEditableWarning" &&
                          p !== "suppressHydrationWarning" &&
                          p !== "autoFocus" &&
                          (i.hasOwnProperty(p)
                            ? w != null && p === "onScroll" && Ne("scroll", e)
                            : w != null && I(e, p, w, g));
                }
              switch (s) {
                case "input":
                  Mt(e), Gc(e, l, !1);
                  break;
                case "textarea":
                  Mt(e), Wc(e);
                  break;
                case "option":
                  l.value != null && e.setAttribute("value", "" + pe(l.value));
                  break;
                case "select":
                  (e.multiple = !!l.multiple),
                    (p = l.value),
                    p != null
                      ? h0(e, !!l.multiple, p, !1)
                      : l.defaultValue != null &&
                        h0(e, !!l.multiple, l.defaultValue, !0);
                  break;
                default:
                  typeof u.onClick == "function" && (e.onclick = Ro);
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
            l && (n.flags |= 4);
          }
          n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
        }
        return dt(n), null;
      case 6:
        if (e && n.stateNode != null) uf(e, n, e.memoizedProps, l);
        else {
          if (typeof l != "string" && n.stateNode === null) throw Error(o(166));
          if (((s = Yn(Fr.current)), Yn(tn.current), Ao(n))) {
            if (
              ((l = n.stateNode),
              (s = n.memoizedProps),
              (l[en] = n),
              (p = l.nodeValue !== s) && ((e = Tt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  jo(l.nodeValue, s, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    jo(l.nodeValue, s, (e.mode & 1) !== 0);
              }
            p && (n.flags |= 4);
          } else
            (l = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(l)),
              (l[en] = n),
              (n.stateNode = l);
        }
        return dt(n), null;
      case 13:
        if (
          (Le(De),
          (l = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ae && Ft !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0)
            dd(), T0(), (n.flags |= 98560), (p = !1);
          else if (((p = Ao(n)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!p) throw Error(o(318));
              if (
                ((p = n.memoizedState),
                (p = p !== null ? p.dehydrated : null),
                !p)
              )
                throw Error(o(317));
              p[en] = n;
            } else
              T0(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4);
            dt(n), (p = !1);
          } else Wt !== null && (sl(Wt), (Wt = null)), (p = !0);
          if (!p) return n.flags & 65536 ? n : null;
        }
        return (n.flags & 128) !== 0
          ? ((n.lanes = s), n)
          : ((l = l !== null),
            l !== (e !== null && e.memoizedState !== null) &&
              l &&
              ((n.child.flags |= 8192),
              (n.mode & 1) !== 0 &&
                (e === null || (De.current & 1) !== 0
                  ? Je === 0 && (Je = 3)
                  : ul())),
            n.updateQueue !== null && (n.flags |= 4),
            dt(n),
            null);
      case 4:
        return (
          I0(),
          Qs(e, n),
          e === null && Cr(n.stateNode.containerInfo),
          dt(n),
          null
        );
      case 10:
        return ws(n.type._context), dt(n), null;
      case 17:
        return xt(n.type) && Bo(), dt(n), null;
      case 19:
        if ((Le(De), (p = n.memoizedState), p === null)) return dt(n), null;
        if (((l = (n.flags & 128) !== 0), (g = p.rendering), g === null))
          if (l) Mr(p, !1);
          else {
            if (Je !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = n.child; e !== null; ) {
                if (((g = qo(e)), g !== null)) {
                  for (
                    n.flags |= 128,
                      Mr(p, !1),
                      l = g.updateQueue,
                      l !== null && ((n.updateQueue = l), (n.flags |= 4)),
                      n.subtreeFlags = 0,
                      l = s,
                      s = n.child;
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
                  return Be(De, (De.current & 1) | 2), n.child;
                }
                e = e.sibling;
              }
            p.tail !== null &&
              Ue() > L0 &&
              ((n.flags |= 128), (l = !0), Mr(p, !1), (n.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = qo(g)), e !== null)) {
              if (
                ((n.flags |= 128),
                (l = !0),
                (s = e.updateQueue),
                s !== null && ((n.updateQueue = s), (n.flags |= 4)),
                Mr(p, !0),
                p.tail === null &&
                  p.tailMode === "hidden" &&
                  !g.alternate &&
                  !Ae)
              )
                return dt(n), null;
            } else
              2 * Ue() - p.renderingStartTime > L0 &&
                s !== 1073741824 &&
                ((n.flags |= 128), (l = !0), Mr(p, !1), (n.lanes = 4194304));
          p.isBackwards
            ? ((g.sibling = n.child), (n.child = g))
            : ((s = p.last),
              s !== null ? (s.sibling = g) : (n.child = g),
              (p.last = g));
        }
        return p.tail !== null
          ? ((n = p.tail),
            (p.rendering = n),
            (p.tail = n.sibling),
            (p.renderingStartTime = Ue()),
            (n.sibling = null),
            (s = De.current),
            Be(De, l ? (s & 1) | 2 : s & 1),
            n)
          : (dt(n), null);
      case 22:
      case 23:
        return (
          cl(),
          (l = n.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== l && (n.flags |= 8192),
          l && (n.mode & 1) !== 0
            ? (jt & 1073741824) !== 0 &&
              (dt(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : dt(n),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, n.tag));
  }
  function Ag(e, n) {
    switch ((vs(n), n.tag)) {
      case 1:
        return (
          xt(n.type) && Bo(),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          I0(),
          Le(_t),
          Le(ct),
          Is(),
          (e = n.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((n.flags = (e & -65537) | 128), n)
            : null
        );
      case 5:
        return js(n), null;
      case 13:
        if (
          (Le(De), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(o(340));
          T0();
        }
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return Le(De), null;
      case 4:
        return I0(), null;
      case 10:
        return ws(n.type._context), null;
      case 22:
      case 23:
        return cl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ea = !1,
    ft = !1,
    Dg = typeof WeakSet == "function" ? WeakSet : Set,
    Z = null;
  function M0(e, n) {
    var s = e.ref;
    if (s !== null)
      if (typeof s == "function")
        try {
          s(null);
        } catch (l) {
          Ve(e, n, l);
        }
      else s.current = null;
  }
  function Ys(e, n, s) {
    try {
      s();
    } catch (l) {
      Ve(e, n, l);
    }
  }
  var df = !1;
  function Hg(e, n) {
    if (((cs = _o), (e = Hu()), ts(e))) {
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
              B = 0,
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
                  (D === s && ++B === u && (_ = g),
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
      us = { focusedElem: e, selectionRange: s }, _o = !1, Z = n;
      Z !== null;

    )
      if (((n = Z), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = n), (Z = e);
      else
        for (; Z !== null; ) {
          n = Z;
          try {
            var J = n.alternate;
            if ((n.flags & 1024) !== 0)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (J !== null) {
                    var ee = J.memoizedProps,
                      qe = J.memoizedState,
                      j = n.stateNode,
                      E = j.getSnapshotBeforeUpdate(
                        n.elementType === n.type ? ee : Kt(n.type, ee),
                        qe,
                      );
                    j.__reactInternalSnapshotBeforeUpdate = E;
                  }
                  break;
                case 3:
                  var R = n.stateNode.containerInfo;
                  R.nodeType === 1
                    ? (R.textContent = "")
                    : R.nodeType === 9 &&
                      R.documentElement &&
                      R.removeChild(R.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(o(163));
              }
          } catch (U) {
            Ve(n, n.return, U);
          }
          if (((e = n.sibling), e !== null)) {
            (e.return = n.return), (Z = e);
            break;
          }
          Z = n.return;
        }
    return (J = df), (df = !1), J;
  }
  function Nr(e, n, s) {
    var l = n.updateQueue;
    if (((l = l !== null ? l.lastEffect : null), l !== null)) {
      var u = (l = l.next);
      do {
        if ((u.tag & e) === e) {
          var p = u.destroy;
          (u.destroy = void 0), p !== void 0 && Ys(n, s, p);
        }
        u = u.next;
      } while (u !== l);
    }
  }
  function ta(e, n) {
    if (
      ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
    ) {
      var s = (n = n.next);
      do {
        if ((s.tag & e) === e) {
          var l = s.create;
          s.destroy = l();
        }
        s = s.next;
      } while (s !== n);
    }
  }
  function Zs(e) {
    var n = e.ref;
    if (n !== null) {
      var s = e.stateNode;
      switch (e.tag) {
        case 5:
          e = s;
          break;
        default:
          e = s;
      }
      typeof n == "function" ? n(e) : (n.current = e);
    }
  }
  function ff(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), ff(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((n = e.stateNode),
        n !== null &&
          (delete n[en],
          delete n[kr],
          delete n[hs],
          delete n[Cg],
          delete n[wg])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function pf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function hf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || pf(e.return)) return null;
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
  function Js(e, n, s) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        n
          ? s.nodeType === 8
            ? s.parentNode.insertBefore(e, n)
            : s.insertBefore(e, n)
          : (s.nodeType === 8
              ? ((n = s.parentNode), n.insertBefore(e, s))
              : ((n = s), n.appendChild(e)),
            (s = s._reactRootContainer),
            s != null || n.onclick !== null || (n.onclick = Ro));
    else if (l !== 4 && ((e = e.child), e !== null))
      for (Js(e, n, s), e = e.sibling; e !== null; )
        Js(e, n, s), (e = e.sibling);
  }
  function el(e, n, s) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), n ? s.insertBefore(e, n) : s.appendChild(e);
    else if (l !== 4 && ((e = e.child), e !== null))
      for (el(e, n, s), e = e.sibling; e !== null; )
        el(e, n, s), (e = e.sibling);
  }
  var it = null,
    Xt = !1;
  function Mn(e, n, s) {
    for (s = s.child; s !== null; ) mf(e, n, s), (s = s.sibling);
  }
  function mf(e, n, s) {
    if (Jt && typeof Jt.onCommitFiberUnmount == "function")
      try {
        Jt.onCommitFiberUnmount(ho, s);
      } catch {}
    switch (s.tag) {
      case 5:
        ft || M0(s, n);
      case 6:
        var l = it,
          u = Xt;
        (it = null),
          Mn(e, n, s),
          (it = l),
          (Xt = u),
          it !== null &&
            (Xt
              ? ((e = it),
                (s = s.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(s)
                  : e.removeChild(s))
              : it.removeChild(s.stateNode));
        break;
      case 18:
        it !== null &&
          (Xt
            ? ((e = it),
              (s = s.stateNode),
              e.nodeType === 8
                ? ps(e.parentNode, s)
                : e.nodeType === 1 && ps(e, s),
              hr(e))
            : ps(it, s.stateNode));
        break;
      case 4:
        (l = it),
          (u = Xt),
          (it = s.stateNode.containerInfo),
          (Xt = !0),
          Mn(e, n, s),
          (it = l),
          (Xt = u);
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
              g !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && Ys(s, n, g),
              (u = u.next);
          } while (u !== l);
        }
        Mn(e, n, s);
        break;
      case 1:
        if (
          !ft &&
          (M0(s, n),
          (l = s.stateNode),
          typeof l.componentWillUnmount == "function")
        )
          try {
            (l.props = s.memoizedProps),
              (l.state = s.memoizedState),
              l.componentWillUnmount();
          } catch (_) {
            Ve(s, n, _);
          }
        Mn(e, n, s);
        break;
      case 21:
        Mn(e, n, s);
        break;
      case 22:
        s.mode & 1
          ? ((ft = (l = ft) || s.memoizedState !== null), Mn(e, n, s), (ft = l))
          : Mn(e, n, s);
        break;
      default:
        Mn(e, n, s);
    }
  }
  function gf(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var s = e.stateNode;
      s === null && (s = e.stateNode = new Dg()),
        n.forEach(function (l) {
          var u = Qg.bind(null, e, l);
          s.has(l) || (s.add(l), l.then(u, u));
        });
    }
  }
  function Qt(e, n) {
    var s = n.deletions;
    if (s !== null)
      for (var l = 0; l < s.length; l++) {
        var u = s[l];
        try {
          var p = e,
            g = n,
            _ = g;
          e: for (; _ !== null; ) {
            switch (_.tag) {
              case 5:
                (it = _.stateNode), (Xt = !1);
                break e;
              case 3:
                (it = _.stateNode.containerInfo), (Xt = !0);
                break e;
              case 4:
                (it = _.stateNode.containerInfo), (Xt = !0);
                break e;
            }
            _ = _.return;
          }
          if (it === null) throw Error(o(160));
          mf(p, g, u), (it = null), (Xt = !1);
          var w = u.alternate;
          w !== null && (w.return = null), (u.return = null);
        } catch (B) {
          Ve(u, n, B);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; ) bf(n, e), (n = n.sibling);
  }
  function bf(e, n) {
    var s = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Qt(n, e), rn(e), l & 4)) {
          try {
            Nr(3, e, e.return), ta(3, e);
          } catch (ee) {
            Ve(e, e.return, ee);
          }
          try {
            Nr(5, e, e.return);
          } catch (ee) {
            Ve(e, e.return, ee);
          }
        }
        break;
      case 1:
        Qt(n, e), rn(e), l & 512 && s !== null && M0(s, s.return);
        break;
      case 5:
        if (
          (Qt(n, e),
          rn(e),
          l & 512 && s !== null && M0(s, s.return),
          e.flags & 32)
        ) {
          var u = e.stateNode;
          try {
            rr(u, "");
          } catch (ee) {
            Ve(e, e.return, ee);
          }
        }
        if (l & 4 && ((u = e.stateNode), u != null)) {
          var p = e.memoizedProps,
            g = s !== null ? s.memoizedProps : p,
            _ = e.type,
            w = e.updateQueue;
          if (((e.updateQueue = null), w !== null))
            try {
              _ === "input" && p.type === "radio" && p.name != null && Vc(u, p),
                ji(_, g);
              var B = ji(_, p);
              for (g = 0; g < w.length; g += 2) {
                var H = w[g],
                  z = w[g + 1];
                H === "style"
                  ? Yc(u, z)
                  : H === "dangerouslySetInnerHTML"
                    ? Xc(u, z)
                    : H === "children"
                      ? rr(u, z)
                      : I(u, H, z, B);
              }
              switch (_) {
                case "input":
                  Oi(u, p);
                  break;
                case "textarea":
                  qc(u, p);
                  break;
                case "select":
                  var D = u._wrapperState.wasMultiple;
                  u._wrapperState.wasMultiple = !!p.multiple;
                  var Q = p.value;
                  Q != null
                    ? h0(u, !!p.multiple, Q, !1)
                    : D !== !!p.multiple &&
                      (p.defaultValue != null
                        ? h0(u, !!p.multiple, p.defaultValue, !0)
                        : h0(u, !!p.multiple, p.multiple ? [] : "", !1));
              }
              u[kr] = p;
            } catch (ee) {
              Ve(e, e.return, ee);
            }
        }
        break;
      case 6:
        if ((Qt(n, e), rn(e), l & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (u = e.stateNode), (p = e.memoizedProps);
          try {
            u.nodeValue = p;
          } catch (ee) {
            Ve(e, e.return, ee);
          }
        }
        break;
      case 3:
        if (
          (Qt(n, e), rn(e), l & 4 && s !== null && s.memoizedState.isDehydrated)
        )
          try {
            hr(n.containerInfo);
          } catch (ee) {
            Ve(e, e.return, ee);
          }
        break;
      case 4:
        Qt(n, e), rn(e);
        break;
      case 13:
        Qt(n, e),
          rn(e),
          (u = e.child),
          u.flags & 8192 &&
            ((p = u.memoizedState !== null),
            (u.stateNode.isHidden = p),
            !p ||
              (u.alternate !== null && u.alternate.memoizedState !== null) ||
              (rl = Ue())),
          l & 4 && gf(e);
        break;
      case 22:
        if (
          ((H = s !== null && s.memoizedState !== null),
          e.mode & 1 ? ((ft = (B = ft) || H), Qt(n, e), (ft = B)) : Qt(n, e),
          rn(e),
          l & 8192)
        ) {
          if (
            ((B = e.memoizedState !== null),
            (e.stateNode.isHidden = B) && !H && (e.mode & 1) !== 0)
          )
            for (Z = e, H = e.child; H !== null; ) {
              for (z = Z = H; Z !== null; ) {
                switch (((D = Z), (Q = D.child), D.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Nr(4, D, D.return);
                    break;
                  case 1:
                    M0(D, D.return);
                    var J = D.stateNode;
                    if (typeof J.componentWillUnmount == "function") {
                      (l = D), (s = D.return);
                      try {
                        (n = l),
                          (J.props = n.memoizedProps),
                          (J.state = n.memoizedState),
                          J.componentWillUnmount();
                      } catch (ee) {
                        Ve(l, s, ee);
                      }
                    }
                    break;
                  case 5:
                    M0(D, D.return);
                    break;
                  case 22:
                    if (D.memoizedState !== null) {
                      _f(z);
                      continue;
                    }
                }
                Q !== null ? ((Q.return = D), (Z = Q)) : _f(z);
              }
              H = H.sibling;
            }
          e: for (H = null, z = e; ; ) {
            if (z.tag === 5) {
              if (H === null) {
                H = z;
                try {
                  (u = z.stateNode),
                    B
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
                        (_.style.display = Qc("display", g)));
                } catch (ee) {
                  Ve(e, e.return, ee);
                }
              }
            } else if (z.tag === 6) {
              if (H === null)
                try {
                  z.stateNode.nodeValue = B ? "" : z.memoizedProps;
                } catch (ee) {
                  Ve(e, e.return, ee);
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
        Qt(n, e), rn(e), l & 4 && gf(e);
        break;
      case 21:
        break;
      default:
        Qt(n, e), rn(e);
    }
  }
  function rn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var s = e.return; s !== null; ) {
            if (pf(s)) {
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
            l.flags & 32 && (rr(u, ""), (l.flags &= -33));
            var p = hf(e);
            el(e, p, u);
            break;
          case 3:
          case 4:
            var g = l.stateNode.containerInfo,
              _ = hf(e);
            Js(e, _, g);
            break;
          default:
            throw Error(o(161));
        }
      } catch (w) {
        Ve(e, e.return, w);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function zg(e, n, s) {
    (Z = e), vf(e);
  }
  function vf(e, n, s) {
    for (var l = (e.mode & 1) !== 0; Z !== null; ) {
      var u = Z,
        p = u.child;
      if (u.tag === 22 && l) {
        var g = u.memoizedState !== null || ea;
        if (!g) {
          var _ = u.alternate,
            w = (_ !== null && _.memoizedState !== null) || ft;
          _ = ea;
          var B = ft;
          if (((ea = g), (ft = w) && !B))
            for (Z = u; Z !== null; )
              (g = Z),
                (w = g.child),
                g.tag === 22 && g.memoizedState !== null
                  ? xf(u)
                  : w !== null
                    ? ((w.return = g), (Z = w))
                    : xf(u);
          for (; p !== null; ) (Z = p), vf(p), (p = p.sibling);
          (Z = u), (ea = _), (ft = B);
        }
        yf(e);
      } else
        (u.subtreeFlags & 8772) !== 0 && p !== null
          ? ((p.return = u), (Z = p))
          : yf(e);
    }
  }
  function yf(e) {
    for (; Z !== null; ) {
      var n = Z;
      if ((n.flags & 8772) !== 0) {
        var s = n.alternate;
        try {
          if ((n.flags & 8772) !== 0)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                ft || ta(5, n);
                break;
              case 1:
                var l = n.stateNode;
                if (n.flags & 4 && !ft)
                  if (s === null) l.componentDidMount();
                  else {
                    var u =
                      n.elementType === n.type
                        ? s.memoizedProps
                        : Kt(n.type, s.memoizedProps);
                    l.componentDidUpdate(
                      u,
                      s.memoizedState,
                      l.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var p = n.updateQueue;
                p !== null && md(n, p, l);
                break;
              case 3:
                var g = n.updateQueue;
                if (g !== null) {
                  if (((s = null), n.child !== null))
                    switch (n.child.tag) {
                      case 5:
                        s = n.child.stateNode;
                        break;
                      case 1:
                        s = n.child.stateNode;
                    }
                  md(n, g, s);
                }
                break;
              case 5:
                var _ = n.stateNode;
                if (s === null && n.flags & 4) {
                  s = _;
                  var w = n.memoizedProps;
                  switch (n.type) {
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
                if (n.memoizedState === null) {
                  var B = n.alternate;
                  if (B !== null) {
                    var H = B.memoizedState;
                    if (H !== null) {
                      var z = H.dehydrated;
                      z !== null && hr(z);
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
          ft || (n.flags & 512 && Zs(n));
        } catch (D) {
          Ve(n, n.return, D);
        }
      }
      if (n === e) {
        Z = null;
        break;
      }
      if (((s = n.sibling), s !== null)) {
        (s.return = n.return), (Z = s);
        break;
      }
      Z = n.return;
    }
  }
  function _f(e) {
    for (; Z !== null; ) {
      var n = Z;
      if (n === e) {
        Z = null;
        break;
      }
      var s = n.sibling;
      if (s !== null) {
        (s.return = n.return), (Z = s);
        break;
      }
      Z = n.return;
    }
  }
  function xf(e) {
    for (; Z !== null; ) {
      var n = Z;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var s = n.return;
            try {
              ta(4, n);
            } catch (w) {
              Ve(n, s, w);
            }
            break;
          case 1:
            var l = n.stateNode;
            if (typeof l.componentDidMount == "function") {
              var u = n.return;
              try {
                l.componentDidMount();
              } catch (w) {
                Ve(n, u, w);
              }
            }
            var p = n.return;
            try {
              Zs(n);
            } catch (w) {
              Ve(n, p, w);
            }
            break;
          case 5:
            var g = n.return;
            try {
              Zs(n);
            } catch (w) {
              Ve(n, g, w);
            }
        }
      } catch (w) {
        Ve(n, n.return, w);
      }
      if (n === e) {
        Z = null;
        break;
      }
      var _ = n.sibling;
      if (_ !== null) {
        (_.return = n.return), (Z = _);
        break;
      }
      Z = n.return;
    }
  }
  var Vg = Math.ceil,
    na = N.ReactCurrentDispatcher,
    tl = N.ReactCurrentOwner,
    Dt = N.ReactCurrentBatchConfig,
    Oe = 0,
    nt = null,
    Ke = null,
    st = 0,
    jt = 0,
    N0 = Fn(0),
    Je = 0,
    Lr = null,
    Jn = 0,
    ra = 0,
    nl = 0,
    $r = null,
    Ct = null,
    rl = 0,
    L0 = 1 / 0,
    bn = null,
    oa = !1,
    ol = null,
    Nn = null,
    aa = !1,
    Ln = null,
    ia = 0,
    Ar = 0,
    al = null,
    sa = -1,
    la = 0;
  function vt() {
    return (Oe & 6) !== 0 ? Ue() : sa !== -1 ? sa : (sa = Ue());
  }
  function $n(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Oe & 2) !== 0 && st !== 0
        ? st & -st
        : Og.transition !== null
          ? (la === 0 && (la = fu()), la)
          : ((e = Re),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : xu(e.type))),
            e);
  }
  function Yt(e, n, s, l) {
    if (50 < Ar) throw ((Ar = 0), (al = null), Error(o(185)));
    cr(e, s, l),
      ((Oe & 2) === 0 || e !== nt) &&
        (e === nt && ((Oe & 2) === 0 && (ra |= s), Je === 4 && An(e, st)),
        wt(e, l),
        s === 1 &&
          Oe === 0 &&
          (n.mode & 1) === 0 &&
          ((L0 = Ue() + 500), No && Rn()));
  }
  function wt(e, n) {
    var s = e.callbackNode;
    O1(e, n);
    var l = bo(e, e === nt ? st : 0);
    if (l === 0)
      s !== null && cu(s), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((n = l & -l), e.callbackPriority !== n)) {
      if ((s != null && cu(s), n === 1))
        e.tag === 0 ? kg(Cf.bind(null, e)) : id(Cf.bind(null, e)),
          xg(function () {
            (Oe & 6) === 0 && Rn();
          }),
          (s = null);
      else {
        switch (pu(l)) {
          case 1:
            s = $i;
            break;
          case 4:
            s = uu;
            break;
          case 16:
            s = po;
            break;
          case 536870912:
            s = du;
            break;
          default:
            s = po;
        }
        s = jf(s, Sf.bind(null, e));
      }
      (e.callbackPriority = n), (e.callbackNode = s);
    }
  }
  function Sf(e, n) {
    if (((sa = -1), (la = 0), (Oe & 6) !== 0)) throw Error(o(327));
    var s = e.callbackNode;
    if ($0() && e.callbackNode !== s) return null;
    var l = bo(e, e === nt ? st : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & e.expiredLanes) !== 0 || n) n = ca(e, l);
    else {
      n = l;
      var u = Oe;
      Oe |= 2;
      var p = kf();
      (nt !== e || st !== n) && ((bn = null), (L0 = Ue() + 500), t0(e, n));
      do
        try {
          qg();
          break;
        } catch (_) {
          wf(e, _);
        }
      while (!0);
      Cs(),
        (na.current = p),
        (Oe = u),
        Ke !== null ? (n = 0) : ((nt = null), (st = 0), (n = Je));
    }
    if (n !== 0) {
      if (
        (n === 2 && ((u = Ai(e)), u !== 0 && ((l = u), (n = il(e, u)))),
        n === 1)
      )
        throw ((s = Lr), t0(e, 0), An(e, l), wt(e, Ue()), s);
      if (n === 6) An(e, l);
      else {
        if (
          ((u = e.current.alternate),
          (l & 30) === 0 &&
            !Gg(u) &&
            ((n = ca(e, l)),
            n === 2 && ((p = Ai(e)), p !== 0 && ((l = p), (n = il(e, p)))),
            n === 1))
        )
          throw ((s = Lr), t0(e, 0), An(e, l), wt(e, Ue()), s);
        switch (((e.finishedWork = u), (e.finishedLanes = l), n)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            n0(e, Ct, bn);
            break;
          case 3:
            if (
              (An(e, l),
              (l & 130023424) === l && ((n = rl + 500 - Ue()), 10 < n))
            ) {
              if (bo(e, 0) !== 0) break;
              if (((u = e.suspendedLanes), (u & l) !== l)) {
                vt(), (e.pingedLanes |= e.suspendedLanes & u);
                break;
              }
              e.timeoutHandle = fs(n0.bind(null, e, Ct, bn), n);
              break;
            }
            n0(e, Ct, bn);
            break;
          case 4:
            if ((An(e, l), (l & 4194240) === l)) break;
            for (n = e.eventTimes, u = -1; 0 < l; ) {
              var g = 31 - Ut(l);
              (p = 1 << g), (g = n[g]), g > u && (u = g), (l &= ~p);
            }
            if (
              ((l = u),
              (l = Ue() - l),
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
                            : 1960 * Vg(l / 1960)) - l),
              10 < l)
            ) {
              e.timeoutHandle = fs(n0.bind(null, e, Ct, bn), l);
              break;
            }
            n0(e, Ct, bn);
            break;
          case 5:
            n0(e, Ct, bn);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return wt(e, Ue()), e.callbackNode === s ? Sf.bind(null, e) : null;
  }
  function il(e, n) {
    var s = $r;
    return (
      e.current.memoizedState.isDehydrated && (t0(e, n).flags |= 256),
      (e = ca(e, n)),
      e !== 2 && ((n = Ct), (Ct = s), n !== null && sl(n)),
      e
    );
  }
  function sl(e) {
    Ct === null ? (Ct = e) : Ct.push.apply(Ct, e);
  }
  function Gg(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var s = n.updateQueue;
        if (s !== null && ((s = s.stores), s !== null))
          for (var l = 0; l < s.length; l++) {
            var u = s[l],
              p = u.getSnapshot;
            u = u.value;
            try {
              if (!qt(p(), u)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((s = n.child), n.subtreeFlags & 16384 && s !== null))
        (s.return = n), (n = s);
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function An(e, n) {
    for (
      n &= ~nl,
        n &= ~ra,
        e.suspendedLanes |= n,
        e.pingedLanes &= ~n,
        e = e.expirationTimes;
      0 < n;

    ) {
      var s = 31 - Ut(n),
        l = 1 << s;
      (e[s] = -1), (n &= ~l);
    }
  }
  function Cf(e) {
    if ((Oe & 6) !== 0) throw Error(o(327));
    $0();
    var n = bo(e, 0);
    if ((n & 1) === 0) return wt(e, Ue()), null;
    var s = ca(e, n);
    if (e.tag !== 0 && s === 2) {
      var l = Ai(e);
      l !== 0 && ((n = l), (s = il(e, l)));
    }
    if (s === 1) throw ((s = Lr), t0(e, 0), An(e, n), wt(e, Ue()), s);
    if (s === 6) throw Error(o(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = n),
      n0(e, Ct, bn),
      wt(e, Ue()),
      null
    );
  }
  function ll(e, n) {
    var s = Oe;
    Oe |= 1;
    try {
      return e(n);
    } finally {
      (Oe = s), Oe === 0 && ((L0 = Ue() + 500), No && Rn());
    }
  }
  function e0(e) {
    Ln !== null && Ln.tag === 0 && (Oe & 6) === 0 && $0();
    var n = Oe;
    Oe |= 1;
    var s = Dt.transition,
      l = Re;
    try {
      if (((Dt.transition = null), (Re = 1), e)) return e();
    } finally {
      (Re = l), (Dt.transition = s), (Oe = n), (Oe & 6) === 0 && Rn();
    }
  }
  function cl() {
    (jt = N0.current), Le(N0);
  }
  function t0(e, n) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var s = e.timeoutHandle;
    if ((s !== -1 && ((e.timeoutHandle = -1), _g(s)), Ke !== null))
      for (s = Ke.return; s !== null; ) {
        var l = s;
        switch ((vs(l), l.tag)) {
          case 1:
            (l = l.type.childContextTypes), l != null && Bo();
            break;
          case 3:
            I0(), Le(_t), Le(ct), Is();
            break;
          case 5:
            js(l);
            break;
          case 4:
            I0();
            break;
          case 13:
            Le(De);
            break;
          case 19:
            Le(De);
            break;
          case 10:
            ws(l.type._context);
            break;
          case 22:
          case 23:
            cl();
        }
        s = s.return;
      }
    if (
      ((nt = e),
      (Ke = e = Dn(e.current, null)),
      (st = jt = n),
      (Je = 0),
      (Lr = null),
      (nl = ra = Jn = 0),
      (Ct = $r = null),
      Qn !== null)
    ) {
      for (n = 0; n < Qn.length; n++)
        if (((s = Qn[n]), (l = s.interleaved), l !== null)) {
          s.interleaved = null;
          var u = l.next,
            p = s.pending;
          if (p !== null) {
            var g = p.next;
            (p.next = u), (l.next = g);
          }
          s.pending = l;
        }
      Qn = null;
    }
    return e;
  }
  function wf(e, n) {
    do {
      var s = Ke;
      try {
        if ((Cs(), (Wo.current = Yo), Ko)) {
          for (var l = He.memoizedState; l !== null; ) {
            var u = l.queue;
            u !== null && (u.pending = null), (l = l.next);
          }
          Ko = !1;
        }
        if (
          ((Zn = 0),
          (tt = Ze = He = null),
          (jr = !1),
          (Rr = 0),
          (tl.current = null),
          s === null || s.return === null)
        ) {
          (Je = 1), (Lr = n), (Ke = null);
          break;
        }
        e: {
          var p = e,
            g = s.return,
            _ = s,
            w = n;
          if (
            ((n = st),
            (_.flags |= 32768),
            w !== null && typeof w == "object" && typeof w.then == "function")
          ) {
            var B = w,
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
            var Q = Kd(g);
            if (Q !== null) {
              (Q.flags &= -257),
                Xd(Q, g, _, p, n),
                Q.mode & 1 && Wd(p, B, n),
                (n = Q),
                (w = B);
              var J = n.updateQueue;
              if (J === null) {
                var ee = new Set();
                ee.add(w), (n.updateQueue = ee);
              } else J.add(w);
              break e;
            } else {
              if ((n & 1) === 0) {
                Wd(p, B, n), ul();
                break e;
              }
              w = Error(o(426));
            }
          } else if (Ae && _.mode & 1) {
            var qe = Kd(g);
            if (qe !== null) {
              (qe.flags & 65536) === 0 && (qe.flags |= 256),
                Xd(qe, g, _, p, n),
                xs(B0(w, _));
              break e;
            }
          }
          (p = w = B0(w, _)),
            Je !== 4 && (Je = 2),
            $r === null ? ($r = [p]) : $r.push(p),
            (p = g);
          do {
            switch (p.tag) {
              case 3:
                (p.flags |= 65536), (n &= -n), (p.lanes |= n);
                var j = Ud(p, w, n);
                hd(p, j);
                break e;
              case 1:
                _ = w;
                var E = p.type,
                  R = p.stateNode;
                if (
                  (p.flags & 128) === 0 &&
                  (typeof E.getDerivedStateFromError == "function" ||
                    (R !== null &&
                      typeof R.componentDidCatch == "function" &&
                      (Nn === null || !Nn.has(R))))
                ) {
                  (p.flags |= 65536), (n &= -n), (p.lanes |= n);
                  var U = qd(p, _, n);
                  hd(p, U);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        Pf(s);
      } catch (ne) {
        (n = ne), Ke === s && s !== null && (Ke = s = s.return);
        continue;
      }
      break;
    } while (!0);
  }
  function kf() {
    var e = na.current;
    return (na.current = Yo), e === null ? Yo : e;
  }
  function ul() {
    (Je === 0 || Je === 3 || Je === 2) && (Je = 4),
      nt === null ||
        ((Jn & 268435455) === 0 && (ra & 268435455) === 0) ||
        An(nt, st);
  }
  function ca(e, n) {
    var s = Oe;
    Oe |= 2;
    var l = kf();
    (nt !== e || st !== n) && ((bn = null), t0(e, n));
    do
      try {
        Ug();
        break;
      } catch (u) {
        wf(e, u);
      }
    while (!0);
    if ((Cs(), (Oe = s), (na.current = l), Ke !== null)) throw Error(o(261));
    return (nt = null), (st = 0), Je;
  }
  function Ug() {
    for (; Ke !== null; ) Of(Ke);
  }
  function qg() {
    for (; Ke !== null && !b1(); ) Of(Ke);
  }
  function Of(e) {
    var n = Ff(e.alternate, e, jt);
    (e.memoizedProps = e.pendingProps),
      n === null ? Pf(e) : (Ke = n),
      (tl.current = null);
  }
  function Pf(e) {
    var n = e;
    do {
      var s = n.alternate;
      if (((e = n.return), (n.flags & 32768) === 0)) {
        if (((s = $g(s, n, jt)), s !== null)) {
          Ke = s;
          return;
        }
      } else {
        if (((s = Ag(s, n)), s !== null)) {
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
      if (((n = n.sibling), n !== null)) {
        Ke = n;
        return;
      }
      Ke = n = e;
    } while (n !== null);
    Je === 0 && (Je = 5);
  }
  function n0(e, n, s) {
    var l = Re,
      u = Dt.transition;
    try {
      (Dt.transition = null), (Re = 1), Wg(e, n, s, l);
    } finally {
      (Dt.transition = u), (Re = l);
    }
    return null;
  }
  function Wg(e, n, s, l) {
    do $0();
    while (Ln !== null);
    if ((Oe & 6) !== 0) throw Error(o(327));
    s = e.finishedWork;
    var u = e.finishedLanes;
    if (s === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), s === e.current))
      throw Error(o(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var p = s.lanes | s.childLanes;
    if (
      (P1(e, p),
      e === nt && ((Ke = nt = null), (st = 0)),
      ((s.subtreeFlags & 2064) === 0 && (s.flags & 2064) === 0) ||
        aa ||
        ((aa = !0),
        jf(po, function () {
          return $0(), null;
        })),
      (p = (s.flags & 15990) !== 0),
      (s.subtreeFlags & 15990) !== 0 || p)
    ) {
      (p = Dt.transition), (Dt.transition = null);
      var g = Re;
      Re = 1;
      var _ = Oe;
      (Oe |= 4),
        (tl.current = null),
        Hg(e, s),
        bf(s, e),
        pg(us),
        (_o = !!cs),
        (us = cs = null),
        (e.current = s),
        zg(s),
        v1(),
        (Oe = _),
        (Re = g),
        (Dt.transition = p);
    } else e.current = s;
    if (
      (aa && ((aa = !1), (Ln = e), (ia = u)),
      (p = e.pendingLanes),
      p === 0 && (Nn = null),
      x1(s.stateNode),
      wt(e, Ue()),
      n !== null)
    )
      for (l = e.onRecoverableError, s = 0; s < n.length; s++)
        (u = n[s]), l(u.value, { componentStack: u.stack, digest: u.digest });
    if (oa) throw ((oa = !1), (e = ol), (ol = null), e);
    return (
      (ia & 1) !== 0 && e.tag !== 0 && $0(),
      (p = e.pendingLanes),
      (p & 1) !== 0 ? (e === al ? Ar++ : ((Ar = 0), (al = e))) : (Ar = 0),
      Rn(),
      null
    );
  }
  function $0() {
    if (Ln !== null) {
      var e = pu(ia),
        n = Dt.transition,
        s = Re;
      try {
        if (((Dt.transition = null), (Re = 16 > e ? 16 : e), Ln === null))
          var l = !1;
        else {
          if (((e = Ln), (Ln = null), (ia = 0), (Oe & 6) !== 0))
            throw Error(o(331));
          var u = Oe;
          for (Oe |= 4, Z = e.current; Z !== null; ) {
            var p = Z,
              g = p.child;
            if ((Z.flags & 16) !== 0) {
              var _ = p.deletions;
              if (_ !== null) {
                for (var w = 0; w < _.length; w++) {
                  var B = _[w];
                  for (Z = B; Z !== null; ) {
                    var H = Z;
                    switch (H.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Nr(8, H, p);
                    }
                    var z = H.child;
                    if (z !== null) (z.return = H), (Z = z);
                    else
                      for (; Z !== null; ) {
                        H = Z;
                        var D = H.sibling,
                          Q = H.return;
                        if ((ff(H), H === B)) {
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
                      var qe = ee.sibling;
                      (ee.sibling = null), (ee = qe);
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
                      Nr(9, p, p.return);
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
            var R = g.child;
            if ((g.subtreeFlags & 2064) !== 0 && R !== null)
              (R.return = g), (Z = R);
            else
              e: for (g = E; Z !== null; ) {
                if (((_ = Z), (_.flags & 2048) !== 0))
                  try {
                    switch (_.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ta(9, _);
                    }
                  } catch (ne) {
                    Ve(_, _.return, ne);
                  }
                if (_ === g) {
                  Z = null;
                  break e;
                }
                var U = _.sibling;
                if (U !== null) {
                  (U.return = _.return), (Z = U);
                  break e;
                }
                Z = _.return;
              }
          }
          if (
            ((Oe = u),
            Rn(),
            Jt && typeof Jt.onPostCommitFiberRoot == "function")
          )
            try {
              Jt.onPostCommitFiberRoot(ho, e);
            } catch {}
          l = !0;
        }
        return l;
      } finally {
        (Re = s), (Dt.transition = n);
      }
    }
    return !1;
  }
  function Ef(e, n, s) {
    (n = B0(s, n)),
      (n = Ud(e, n, 1)),
      (e = Bn(e, n, 1)),
      (n = vt()),
      e !== null && (cr(e, 1, n), wt(e, n));
  }
  function Ve(e, n, s) {
    if (e.tag === 3) Ef(e, e, s);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Ef(n, e, s);
          break;
        } else if (n.tag === 1) {
          var l = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Nn === null || !Nn.has(l)))
          ) {
            (e = B0(s, e)),
              (e = qd(n, e, 1)),
              (n = Bn(n, e, 1)),
              (e = vt()),
              n !== null && (cr(n, 1, e), wt(n, e));
            break;
          }
        }
        n = n.return;
      }
  }
  function Kg(e, n, s) {
    var l = e.pingCache;
    l !== null && l.delete(n),
      (n = vt()),
      (e.pingedLanes |= e.suspendedLanes & s),
      nt === e &&
        (st & s) === s &&
        (Je === 4 || (Je === 3 && (st & 130023424) === st && 500 > Ue() - rl)
          ? t0(e, 0)
          : (nl |= s)),
      wt(e, n);
  }
  function Tf(e, n) {
    n === 0 &&
      ((e.mode & 1) === 0
        ? (n = 1)
        : ((n = go), (go <<= 1), (go & 130023424) === 0 && (go = 4194304)));
    var s = vt();
    (e = hn(e, n)), e !== null && (cr(e, n, s), wt(e, s));
  }
  function Xg(e) {
    var n = e.memoizedState,
      s = 0;
    n !== null && (s = n.retryLane), Tf(e, s);
  }
  function Qg(e, n) {
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
    l !== null && l.delete(n), Tf(e, s);
  }
  var Ff;
  Ff = function (e, n, s) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || _t.current) St = !0;
      else {
        if ((e.lanes & s) === 0 && (n.flags & 128) === 0)
          return (St = !1), Lg(e, n, s);
        St = (e.flags & 131072) !== 0;
      }
    else (St = !1), Ae && (n.flags & 1048576) !== 0 && sd(n, $o, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 2:
        var l = n.type;
        Jo(e, n), (e = n.pendingProps);
        var u = O0(n, ct.current);
        j0(n, s), (u = Ns(null, n, l, e, u, s));
        var p = Ls();
        return (
          (n.flags |= 1),
          typeof u == "object" &&
          u !== null &&
          typeof u.render == "function" &&
          u.$$typeof === void 0
            ? ((n.tag = 1),
              (n.memoizedState = null),
              (n.updateQueue = null),
              xt(l) ? ((p = !0), Mo(n)) : (p = !1),
              (n.memoizedState =
                u.state !== null && u.state !== void 0 ? u.state : null),
              Ps(n),
              (u.updater = Go),
              (n.stateNode = u),
              (u._reactInternals = n),
              Ts(n, l, e, s),
              (n = Us(null, n, l, !0, p, s)))
            : ((n.tag = 0), Ae && p && bs(n), bt(null, n, u, s), (n = n.child)),
          n
        );
      case 16:
        l = n.elementType;
        e: {
          switch (
            (Jo(e, n),
            (e = n.pendingProps),
            (u = l._init),
            (l = u(l._payload)),
            (n.type = l),
            (u = n.tag = Zg(l)),
            (e = Kt(l, e)),
            u)
          ) {
            case 0:
              n = Gs(null, n, l, e, s);
              break e;
            case 1:
              n = tf(null, n, l, e, s);
              break e;
            case 11:
              n = Qd(null, n, l, e, s);
              break e;
            case 14:
              n = Yd(null, n, l, Kt(l.type, e), s);
              break e;
          }
          throw Error(o(306, l, ""));
        }
        return n;
      case 0:
        return (
          (l = n.type),
          (u = n.pendingProps),
          (u = n.elementType === l ? u : Kt(l, u)),
          Gs(e, n, l, u, s)
        );
      case 1:
        return (
          (l = n.type),
          (u = n.pendingProps),
          (u = n.elementType === l ? u : Kt(l, u)),
          tf(e, n, l, u, s)
        );
      case 3:
        e: {
          if ((nf(n), e === null)) throw Error(o(387));
          (l = n.pendingProps),
            (p = n.memoizedState),
            (u = p.element),
            pd(e, n),
            Vo(n, l, null, s);
          var g = n.memoizedState;
          if (((l = g.element), p.isDehydrated))
            if (
              ((p = {
                element: l,
                isDehydrated: !1,
                cache: g.cache,
                pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
                transitions: g.transitions,
              }),
              (n.updateQueue.baseState = p),
              (n.memoizedState = p),
              n.flags & 256)
            ) {
              (u = B0(Error(o(423)), n)), (n = rf(e, n, l, s, u));
              break e;
            } else if (l !== u) {
              (u = B0(Error(o(424)), n)), (n = rf(e, n, l, s, u));
              break e;
            } else
              for (
                Ft = Tn(n.stateNode.containerInfo.firstChild),
                  Tt = n,
                  Ae = !0,
                  Wt = null,
                  s = Sd(n, null, l, s),
                  n.child = s;
                s;

              )
                (s.flags = (s.flags & -3) | 4096), (s = s.sibling);
          else {
            if ((T0(), l === u)) {
              n = gn(e, n, s);
              break e;
            }
            bt(e, n, l, s);
          }
          n = n.child;
        }
        return n;
      case 5:
        return (
          Cd(n),
          e === null && _s(n),
          (l = n.type),
          (u = n.pendingProps),
          (p = e !== null ? e.memoizedProps : null),
          (g = u.children),
          ds(l, u) ? (g = null) : p !== null && ds(l, p) && (n.flags |= 32),
          ef(e, n),
          bt(e, n, g, s),
          n.child
        );
      case 6:
        return e === null && _s(n), null;
      case 13:
        return of(e, n, s);
      case 4:
        return (
          Fs(n, n.stateNode.containerInfo),
          (l = n.pendingProps),
          e === null ? (n.child = R0(n, null, l, s)) : bt(e, n, l, s),
          n.child
        );
      case 11:
        return (
          (l = n.type),
          (u = n.pendingProps),
          (u = n.elementType === l ? u : Kt(l, u)),
          Qd(e, n, l, u, s)
        );
      case 7:
        return bt(e, n, n.pendingProps, s), n.child;
      case 8:
        return bt(e, n, n.pendingProps.children, s), n.child;
      case 12:
        return bt(e, n, n.pendingProps.children, s), n.child;
      case 10:
        e: {
          if (
            ((l = n.type._context),
            (u = n.pendingProps),
            (p = n.memoizedProps),
            (g = u.value),
            Be(Do, l._currentValue),
            (l._currentValue = g),
            p !== null)
          )
            if (qt(p.value, g)) {
              if (p.children === u.children && !_t.current) {
                n = gn(e, n, s);
                break e;
              }
            } else
              for (p = n.child, p !== null && (p.return = n); p !== null; ) {
                var _ = p.dependencies;
                if (_ !== null) {
                  g = p.child;
                  for (var w = _.firstContext; w !== null; ) {
                    if (w.context === l) {
                      if (p.tag === 1) {
                        (w = mn(-1, s & -s)), (w.tag = 2);
                        var B = p.updateQueue;
                        if (B !== null) {
                          B = B.shared;
                          var H = B.pending;
                          H === null
                            ? (w.next = w)
                            : ((w.next = H.next), (H.next = w)),
                            (B.pending = w);
                        }
                      }
                      (p.lanes |= s),
                        (w = p.alternate),
                        w !== null && (w.lanes |= s),
                        ks(p.return, s, n),
                        (_.lanes |= s);
                      break;
                    }
                    w = w.next;
                  }
                } else if (p.tag === 10) g = p.type === n.type ? null : p.child;
                else if (p.tag === 18) {
                  if (((g = p.return), g === null)) throw Error(o(341));
                  (g.lanes |= s),
                    (_ = g.alternate),
                    _ !== null && (_.lanes |= s),
                    ks(g, s, n),
                    (g = p.sibling);
                } else g = p.child;
                if (g !== null) g.return = p;
                else
                  for (g = p; g !== null; ) {
                    if (g === n) {
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
          bt(e, n, u.children, s), (n = n.child);
        }
        return n;
      case 9:
        return (
          (u = n.type),
          (l = n.pendingProps.children),
          j0(n, s),
          (u = $t(u)),
          (l = l(u)),
          (n.flags |= 1),
          bt(e, n, l, s),
          n.child
        );
      case 14:
        return (
          (l = n.type),
          (u = Kt(l, n.pendingProps)),
          (u = Kt(l.type, u)),
          Yd(e, n, l, u, s)
        );
      case 15:
        return Zd(e, n, n.type, n.pendingProps, s);
      case 17:
        return (
          (l = n.type),
          (u = n.pendingProps),
          (u = n.elementType === l ? u : Kt(l, u)),
          Jo(e, n),
          (n.tag = 1),
          xt(l) ? ((e = !0), Mo(n)) : (e = !1),
          j0(n, s),
          vd(n, l, u),
          Ts(n, l, u, s),
          Us(null, n, l, !0, e, s)
        );
      case 19:
        return sf(e, n, s);
      case 22:
        return Jd(e, n, s);
    }
    throw Error(o(156, n.tag));
  };
  function jf(e, n) {
    return lu(e, n);
  }
  function Yg(e, n, s, l) {
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
      (this.pendingProps = n),
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
  function Ht(e, n, s, l) {
    return new Yg(e, n, s, l);
  }
  function dl(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Zg(e) {
    if (typeof e == "function") return dl(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ce)) return 11;
      if (e === ge) return 14;
    }
    return 2;
  }
  function Dn(e, n) {
    var s = e.alternate;
    return (
      s === null
        ? ((s = Ht(e.tag, n, e.key, e.mode)),
          (s.elementType = e.elementType),
          (s.type = e.type),
          (s.stateNode = e.stateNode),
          (s.alternate = e),
          (e.alternate = s))
        : ((s.pendingProps = n),
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
      (n = e.dependencies),
      (s.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (s.sibling = e.sibling),
      (s.index = e.index),
      (s.ref = e.ref),
      s
    );
  }
  function ua(e, n, s, l, u, p) {
    var g = 2;
    if (((l = e), typeof e == "function")) dl(e) && (g = 1);
    else if (typeof e == "string") g = 5;
    else
      e: switch (e) {
        case M:
          return r0(s.children, u, p, n);
        case X:
          (g = 8), (u |= 8);
          break;
        case he:
          return (
            (e = Ht(12, s, n, u | 2)), (e.elementType = he), (e.lanes = p), e
          );
        case ye:
          return (e = Ht(13, s, n, u)), (e.elementType = ye), (e.lanes = p), e;
        case Se:
          return (e = Ht(19, s, n, u)), (e.elementType = Se), (e.lanes = p), e;
        case we:
          return da(s, u, p, n);
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
      (n = Ht(g, s, n, u)), (n.elementType = e), (n.type = l), (n.lanes = p), n
    );
  }
  function r0(e, n, s, l) {
    return (e = Ht(7, e, l, n)), (e.lanes = s), e;
  }
  function da(e, n, s, l) {
    return (
      (e = Ht(22, e, l, n)),
      (e.elementType = we),
      (e.lanes = s),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function fl(e, n, s) {
    return (e = Ht(6, e, null, n)), (e.lanes = s), e;
  }
  function pl(e, n, s) {
    return (
      (n = Ht(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = s),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  function Jg(e, n, s, l, u) {
    (this.tag = n),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Di(0)),
      (this.expirationTimes = Di(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Di(0)),
      (this.identifierPrefix = l),
      (this.onRecoverableError = u),
      (this.mutableSourceEagerHydrationData = null);
  }
  function hl(e, n, s, l, u, p, g, _, w) {
    return (
      (e = new Jg(e, n, s, _, w)),
      n === 1 ? ((n = 1), p === !0 && (n |= 8)) : (n = 0),
      (p = Ht(3, null, null, n)),
      (e.current = p),
      (p.stateNode = e),
      (p.memoizedState = {
        element: l,
        isDehydrated: s,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ps(p),
      e
    );
  }
  function e2(e, n, s) {
    var l =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: $,
      key: l == null ? null : "" + l,
      children: e,
      containerInfo: n,
      implementation: s,
    };
  }
  function Rf(e) {
    if (!e) return jn;
    e = e._reactInternals;
    e: {
      if (Un(e) !== e || e.tag !== 1) throw Error(o(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (xt(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var s = e.type;
      if (xt(s)) return od(e, s, n);
    }
    return n;
  }
  function If(e, n, s, l, u, p, g, _, w) {
    return (
      (e = hl(s, l, !0, e, u, p, g, _, w)),
      (e.context = Rf(null)),
      (s = e.current),
      (l = vt()),
      (u = $n(s)),
      (p = mn(l, u)),
      (p.callback = n ?? null),
      Bn(s, p, u),
      (e.current.lanes = u),
      cr(e, u, l),
      wt(e, l),
      e
    );
  }
  function fa(e, n, s, l) {
    var u = n.current,
      p = vt(),
      g = $n(u);
    return (
      (s = Rf(s)),
      n.context === null ? (n.context = s) : (n.pendingContext = s),
      (n = mn(p, g)),
      (n.payload = { element: e }),
      (l = l === void 0 ? null : l),
      l !== null && (n.callback = l),
      (e = Bn(u, n, g)),
      e !== null && (Yt(e, u, g, p), zo(e, u, g)),
      g
    );
  }
  function pa(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Bf(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var s = e.retryLane;
      e.retryLane = s !== 0 && s < n ? s : n;
    }
  }
  function ml(e, n) {
    Bf(e, n), (e = e.alternate) && Bf(e, n);
  }
  function t2() {
    return null;
  }
  var Mf =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function gl(e) {
    this._internalRoot = e;
  }
  (ha.prototype.render = gl.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(o(409));
      fa(e, n, null, null);
    }),
    (ha.prototype.unmount = gl.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          e0(function () {
            fa(null, e, null, null);
          }),
            (n[un] = null);
        }
      });
  function ha(e) {
    this._internalRoot = e;
  }
  ha.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = gu();
      e = { blockedOn: null, target: e, priority: n };
      for (var s = 0; s < On.length && n !== 0 && n < On[s].priority; s++);
      On.splice(s, 0, e), s === 0 && yu(e);
    }
  };
  function bl(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function ma(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Nf() {}
  function n2(e, n, s, l, u) {
    if (u) {
      if (typeof l == "function") {
        var p = l;
        l = function () {
          var B = pa(g);
          p.call(B);
        };
      }
      var g = If(n, l, e, 0, null, !1, !1, "", Nf);
      return (
        (e._reactRootContainer = g),
        (e[un] = g.current),
        Cr(e.nodeType === 8 ? e.parentNode : e),
        e0(),
        g
      );
    }
    for (; (u = e.lastChild); ) e.removeChild(u);
    if (typeof l == "function") {
      var _ = l;
      l = function () {
        var B = pa(w);
        _.call(B);
      };
    }
    var w = hl(e, 0, !1, null, null, !1, !1, "", Nf);
    return (
      (e._reactRootContainer = w),
      (e[un] = w.current),
      Cr(e.nodeType === 8 ? e.parentNode : e),
      e0(function () {
        fa(n, w, s, l);
      }),
      w
    );
  }
  function ga(e, n, s, l, u) {
    var p = s._reactRootContainer;
    if (p) {
      var g = p;
      if (typeof u == "function") {
        var _ = u;
        u = function () {
          var w = pa(g);
          _.call(w);
        };
      }
      fa(n, g, e, u);
    } else g = n2(s, n, e, u, l);
    return pa(g);
  }
  (hu = function (e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var s = lr(n.pendingLanes);
          s !== 0 &&
            (Hi(n, s | 1),
            wt(n, Ue()),
            (Oe & 6) === 0 && ((L0 = Ue() + 500), Rn()));
        }
        break;
      case 13:
        e0(function () {
          var l = hn(e, 1);
          if (l !== null) {
            var u = vt();
            Yt(l, e, 1, u);
          }
        }),
          ml(e, 1);
    }
  }),
    (zi = function (e) {
      if (e.tag === 13) {
        var n = hn(e, 134217728);
        if (n !== null) {
          var s = vt();
          Yt(n, e, 134217728, s);
        }
        ml(e, 134217728);
      }
    }),
    (mu = function (e) {
      if (e.tag === 13) {
        var n = $n(e),
          s = hn(e, n);
        if (s !== null) {
          var l = vt();
          Yt(s, e, n, l);
        }
        ml(e, n);
      }
    }),
    (gu = function () {
      return Re;
    }),
    (bu = function (e, n) {
      var s = Re;
      try {
        return (Re = e), n();
      } finally {
        Re = s;
      }
    }),
    (Bi = function (e, n, s) {
      switch (n) {
        case "input":
          if ((Oi(e, s), (n = s.name), s.type === "radio" && n != null)) {
            for (s = e; s.parentNode; ) s = s.parentNode;
            for (
              s = s.querySelectorAll(
                "input[name=" + JSON.stringify("" + n) + '][type="radio"]',
              ),
                n = 0;
              n < s.length;
              n++
            ) {
              var l = s[n];
              if (l !== e && l.form === e.form) {
                var u = Io(l);
                if (!u) throw Error(o(90));
                yt(l), Oi(l, u);
              }
            }
          }
          break;
        case "textarea":
          qc(e, s);
          break;
        case "select":
          (n = s.value), n != null && h0(e, !!s.multiple, n, !1);
      }
    }),
    (tu = ll),
    (nu = e0);
  var r2 = { usingClientEntryPoint: !1, Events: [Or, w0, Io, Jc, eu, ll] },
    Dr = {
      findFiberByHostInstance: qn,
      bundleType: 0,
      version: "18.2.0",
      rendererPackageName: "react-dom",
    },
    o2 = {
      bundleType: Dr.bundleType,
      version: Dr.version,
      rendererPackageName: Dr.rendererPackageName,
      rendererConfig: Dr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: N.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = iu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Dr.findFiberByHostInstance || t2,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ba = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ba.isDisabled && ba.supportsFiber)
      try {
        (ho = ba.inject(o2)), (Jt = ba);
      } catch {}
  }
  return (
    (kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = r2),
    (kt.createPortal = function (e, n) {
      var s =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!bl(n)) throw Error(o(200));
      return e2(e, n, null, s);
    }),
    (kt.createRoot = function (e, n) {
      if (!bl(e)) throw Error(o(299));
      var s = !1,
        l = "",
        u = Mf;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (s = !0),
          n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (n = hl(e, 1, !1, null, null, s, !1, l, u)),
        (e[un] = n.current),
        Cr(e.nodeType === 8 ? e.parentNode : e),
        new gl(n)
      );
    }),
    (kt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var n = e._reactInternals;
      if (n === void 0)
        throw typeof e.render == "function"
          ? Error(o(188))
          : ((e = Object.keys(e).join(",")), Error(o(268, e)));
      return (e = iu(n)), (e = e === null ? null : e.stateNode), e;
    }),
    (kt.flushSync = function (e) {
      return e0(e);
    }),
    (kt.hydrate = function (e, n, s) {
      if (!ma(n)) throw Error(o(200));
      return ga(null, e, n, !0, s);
    }),
    (kt.hydrateRoot = function (e, n, s) {
      if (!bl(e)) throw Error(o(405));
      var l = (s != null && s.hydratedSources) || null,
        u = !1,
        p = "",
        g = Mf;
      if (
        (s != null &&
          (s.unstable_strictMode === !0 && (u = !0),
          s.identifierPrefix !== void 0 && (p = s.identifierPrefix),
          s.onRecoverableError !== void 0 && (g = s.onRecoverableError)),
        (n = If(n, null, e, 1, s ?? null, u, !1, p, g)),
        (e[un] = n.current),
        Cr(e),
        l)
      )
        for (e = 0; e < l.length; e++)
          (s = l[e]),
            (u = s._getVersion),
            (u = u(s._source)),
            n.mutableSourceEagerHydrationData == null
              ? (n.mutableSourceEagerHydrationData = [s, u])
              : n.mutableSourceEagerHydrationData.push(s, u);
      return new ha(n);
    }),
    (kt.render = function (e, n, s) {
      if (!ma(n)) throw Error(o(200));
      return ga(null, e, n, !1, s);
    }),
    (kt.unmountComponentAtNode = function (e) {
      if (!ma(e)) throw Error(o(40));
      return e._reactRootContainer
        ? (e0(function () {
            ga(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[un] = null);
            });
          }),
          !0)
        : !1;
    }),
    (kt.unstable_batchedUpdates = ll),
    (kt.unstable_renderSubtreeIntoContainer = function (e, n, s, l) {
      if (!ma(s)) throw Error(o(200));
      if (e == null || e._reactInternals === void 0) throw Error(o(38));
      return ga(e, n, s, !1, l);
    }),
    (kt.version = "18.2.0-next-9e3b772b8-20220608"),
    kt
  );
}
var Uf;
function gh() {
  if (Uf) return _l.exports;
  Uf = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (t) {
        console.error(t);
      }
  }
  return r(), (_l.exports = m2()), _l.exports;
}
var qf;
function g2() {
  if (qf) return va;
  qf = 1;
  var r = gh();
  return (va.createRoot = r.createRoot), (va.hydrateRoot = r.hydrateRoot), va;
}
var Wf = g2(),
  gt = function () {
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
function Va(r, t, o) {
  if (o || arguments.length === 2)
    for (var a = 0, i = t.length, c; a < i; a++)
      (c || !(a in t)) &&
        (c || (c = Array.prototype.slice.call(t, 0, a)), (c[a] = t[a]));
  return r.concat(c || Array.prototype.slice.call(t));
}
var $e = "-ms-",
  Kr = "-moz-",
  je = "-webkit-",
  bh = "comm",
  pi = "rule",
  vc = "decl",
  b2 = "@import",
  vh = "@keyframes",
  v2 = "@layer",
  yh = Math.abs,
  yc = String.fromCharCode,
  Gl = Object.assign;
function y2(r, t) {
  return ot(r, 0) ^ 45
    ? (((((((t << 2) ^ ot(r, 0)) << 2) ^ ot(r, 1)) << 2) ^ ot(r, 2)) << 2) ^
        ot(r, 3)
    : 0;
}
function _h(r) {
  return r.trim();
}
function vn(r, t) {
  return (r = t.exec(r)) ? r[0] : r;
}
function xe(r, t, o) {
  return r.replace(t, o);
}
function ja(r, t, o) {
  return r.indexOf(t, o);
}
function ot(r, t) {
  return r.charCodeAt(t) | 0;
}
function q0(r, t, o) {
  return r.slice(t, o);
}
function an(r) {
  return r.length;
}
function xh(r) {
  return r.length;
}
function Ur(r, t) {
  return t.push(r), r;
}
function _2(r, t) {
  return r.map(t).join("");
}
function Kf(r, t) {
  return r.filter(function (o) {
    return !vn(o, t);
  });
}
var hi = 1,
  W0 = 1,
  Sh = 0,
  Gt = 0,
  Qe = 0,
  Z0 = "";
function mi(r, t, o, a, i, c, d, h) {
  return {
    value: r,
    root: t,
    parent: o,
    type: a,
    props: i,
    children: c,
    line: hi,
    column: W0,
    length: d,
    return: "",
    siblings: h,
  };
}
function zn(r, t) {
  return Gl(
    mi("", null, null, "", null, null, 0, r.siblings),
    r,
    { length: -r.length },
    t,
  );
}
function A0(r) {
  for (; r.root; ) r = zn(r.root, { children: [r] });
  Ur(r, r.siblings);
}
function x2() {
  return Qe;
}
function S2() {
  return (
    (Qe = Gt > 0 ? ot(Z0, --Gt) : 0), W0--, Qe === 10 && ((W0 = 1), hi--), Qe
  );
}
function Zt() {
  return (
    (Qe = Gt < Sh ? ot(Z0, Gt++) : 0), W0++, Qe === 10 && ((W0 = 1), hi++), Qe
  );
}
function i0() {
  return ot(Z0, Gt);
}
function Ra() {
  return Gt;
}
function gi(r, t) {
  return q0(Z0, r, t);
}
function Ul(r) {
  switch (r) {
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
function C2(r) {
  return (hi = W0 = 1), (Sh = an((Z0 = r))), (Gt = 0), [];
}
function w2(r) {
  return (Z0 = ""), r;
}
function Cl(r) {
  return _h(gi(Gt - 1, ql(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function k2(r) {
  for (; (Qe = i0()) && Qe < 33; ) Zt();
  return Ul(r) > 2 || Ul(Qe) > 3 ? "" : " ";
}
function O2(r, t) {
  for (
    ;
    --t &&
    Zt() &&
    !(Qe < 48 || Qe > 102 || (Qe > 57 && Qe < 65) || (Qe > 70 && Qe < 97));

  );
  return gi(r, Ra() + (t < 6 && i0() == 32 && Zt() == 32));
}
function ql(r) {
  for (; Zt(); )
    switch (Qe) {
      case r:
        return Gt;
      case 34:
      case 39:
        r !== 34 && r !== 39 && ql(Qe);
        break;
      case 40:
        r === 41 && ql(r);
        break;
      case 92:
        Zt();
        break;
    }
  return Gt;
}
function P2(r, t) {
  for (; Zt() && r + Qe !== 57; ) if (r + Qe === 84 && i0() === 47) break;
  return "/*" + gi(t, Gt - 1) + "*" + yc(r === 47 ? r : Zt());
}
function E2(r) {
  for (; !Ul(i0()); ) Zt();
  return gi(r, Gt);
}
function T2(r) {
  return w2(Ia("", null, null, null, [""], (r = C2(r)), 0, [0], r));
}
function Ia(r, t, o, a, i, c, d, h, f) {
  for (
    var m = 0,
      b = 0,
      v = d,
      y = 0,
      x = 0,
      S = 0,
      P = 1,
      k = 1,
      O = 1,
      T = 0,
      I = "",
      N = i,
      F = c,
      $ = a,
      M = I;
    k;

  )
    switch (((S = T), (T = Zt()))) {
      case 40:
        if (S != 108 && ot(M, v - 1) == 58) {
          ja((M += xe(Cl(T), "&", "&\f")), "&\f", yh(m ? h[m - 1] : 0)) != -1 &&
            (O = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        M += Cl(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        M += k2(S);
        break;
      case 92:
        M += O2(Ra() - 1, 7);
        continue;
      case 47:
        switch (i0()) {
          case 42:
          case 47:
            Ur(F2(P2(Zt(), Ra()), t, o, f), f);
            break;
          default:
            M += "/";
        }
        break;
      case 123 * P:
        h[m++] = an(M) * O;
      case 125 * P:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            k = 0;
          case 59 + b:
            O == -1 && (M = xe(M, /\f/g, "")),
              x > 0 &&
                an(M) - v &&
                Ur(
                  x > 32
                    ? Qf(M + ";", a, o, v - 1, f)
                    : Qf(xe(M, " ", "") + ";", a, o, v - 2, f),
                  f,
                );
            break;
          case 59:
            M += ";";
          default:
            if (
              (Ur(
                ($ = Xf(M, t, o, m, b, i, h, I, (N = []), (F = []), v, c)),
                c,
              ),
              T === 123)
            )
              if (b === 0) Ia(M, t, $, $, N, c, v, h, F);
              else
                switch (y === 99 && ot(M, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ia(
                      r,
                      $,
                      $,
                      a && Ur(Xf(r, $, $, 0, 0, i, h, I, i, (N = []), v, F), F),
                      i,
                      F,
                      v,
                      h,
                      a ? N : F,
                    );
                    break;
                  default:
                    Ia(M, $, $, $, [""], F, 0, h, F);
                }
        }
        (m = b = x = 0), (P = O = 1), (I = M = ""), (v = d);
        break;
      case 58:
        (v = 1 + an(M)), (x = S);
      default:
        if (P < 1) {
          if (T == 123) --P;
          else if (T == 125 && P++ == 0 && S2() == 125) continue;
        }
        switch (((M += yc(T)), T * P)) {
          case 38:
            O = b > 0 ? 1 : ((M += "\f"), -1);
            break;
          case 44:
            (h[m++] = (an(M) - 1) * O), (O = 1);
            break;
          case 64:
            i0() === 45 && (M += Cl(Zt())),
              (y = i0()),
              (b = v = an((I = M += E2(Ra())))),
              T++;
            break;
          case 45:
            S === 45 && an(M) == 2 && (P = 0);
        }
    }
  return c;
}
function Xf(r, t, o, a, i, c, d, h, f, m, b, v) {
  for (
    var y = i - 1, x = i === 0 ? c : [""], S = xh(x), P = 0, k = 0, O = 0;
    P < a;
    ++P
  )
    for (var T = 0, I = q0(r, y + 1, (y = yh((k = d[P])))), N = r; T < S; ++T)
      (N = _h(k > 0 ? x[T] + " " + I : xe(I, /&\f/g, x[T]))) && (f[O++] = N);
  return mi(r, t, o, i === 0 ? pi : h, f, m, b, v);
}
function F2(r, t, o, a) {
  return mi(r, t, o, bh, yc(x2()), q0(r, 2, -2), 0, a);
}
function Qf(r, t, o, a, i) {
  return mi(r, t, o, vc, q0(r, 0, a), q0(r, a + 1, -1), a, i);
}
function Ch(r, t, o) {
  switch (y2(r, t)) {
    case 5103:
      return je + "print-" + r + r;
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
      return je + r + r;
    case 4789:
      return Kr + r + r;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return je + r + Kr + r + $e + r + r;
    case 5936:
      switch (ot(r, t + 11)) {
        case 114:
          return je + r + $e + xe(r, /[svh]\w+-[tblr]{2}/, "tb") + r;
        case 108:
          return je + r + $e + xe(r, /[svh]\w+-[tblr]{2}/, "tb-rl") + r;
        case 45:
          return je + r + $e + xe(r, /[svh]\w+-[tblr]{2}/, "lr") + r;
      }
    case 6828:
    case 4268:
    case 2903:
      return je + r + $e + r + r;
    case 6165:
      return je + r + $e + "flex-" + r + r;
    case 5187:
      return (
        je + r + xe(r, /(\w+).+(:[^]+)/, je + "box-$1$2" + $e + "flex-$1$2") + r
      );
    case 5443:
      return (
        je +
        r +
        $e +
        "flex-item-" +
        xe(r, /flex-|-self/g, "") +
        (vn(r, /flex-|baseline/)
          ? ""
          : $e + "grid-row-" + xe(r, /flex-|-self/g, "")) +
        r
      );
    case 4675:
      return (
        je +
        r +
        $e +
        "flex-line-pack" +
        xe(r, /align-content|flex-|-self/g, "") +
        r
      );
    case 5548:
      return je + r + $e + xe(r, "shrink", "negative") + r;
    case 5292:
      return je + r + $e + xe(r, "basis", "preferred-size") + r;
    case 6060:
      return (
        je +
        "box-" +
        xe(r, "-grow", "") +
        je +
        r +
        $e +
        xe(r, "grow", "positive") +
        r
      );
    case 4554:
      return je + xe(r, /([^-])(transform)/g, "$1" + je + "$2") + r;
    case 6187:
      return (
        xe(
          xe(xe(r, /(zoom-|grab)/, je + "$1"), /(image-set)/, je + "$1"),
          r,
          "",
        ) + r
      );
    case 5495:
    case 3959:
      return xe(r, /(image-set\([^]*)/, je + "$1$`$1");
    case 4968:
      return (
        xe(
          xe(r, /(.+:)(flex-)?(.*)/, je + "box-pack:$3" + $e + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        je +
        r +
        r
      );
    case 4200:
      if (!vn(r, /flex-|baseline/))
        return $e + "grid-column-align" + q0(r, t) + r;
      break;
    case 2592:
    case 3360:
      return $e + xe(r, "template-", "") + r;
    case 4384:
    case 3616:
      return o &&
        o.some(function (a, i) {
          return (t = i), vn(a.props, /grid-\w+-end/);
        })
        ? ~ja(r + (o = o[t].value), "span", 0)
          ? r
          : $e +
            xe(r, "-start", "") +
            r +
            $e +
            "grid-row-span:" +
            (~ja(o, "span", 0) ? vn(o, /\d+/) : +vn(o, /\d+/) - +vn(r, /\d+/)) +
            ";"
        : $e + xe(r, "-start", "") + r;
    case 4896:
    case 4128:
      return o &&
        o.some(function (a) {
          return vn(a.props, /grid-\w+-start/);
        })
        ? r
        : $e + xe(xe(r, "-end", "-span"), "span ", "") + r;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return xe(r, /(.+)-inline(.+)/, je + "$1$2") + r;
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
      if (an(r) - 1 - t > 6)
        switch (ot(r, t + 1)) {
          case 109:
            if (ot(r, t + 4) !== 45) break;
          case 102:
            return (
              xe(
                r,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  je +
                  "$2-$3$1" +
                  Kr +
                  (ot(r, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + r
            );
          case 115:
            return ~ja(r, "stretch", 0)
              ? Ch(xe(r, "stretch", "fill-available"), t, o) + r
              : r;
        }
      break;
    case 5152:
    case 5920:
      return xe(
        r,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (a, i, c, d, h, f, m) {
          return (
            $e +
            i +
            ":" +
            c +
            m +
            (d ? $e + i + "-span:" + (h ? f : +f - +c) + m : "") +
            r
          );
        },
      );
    case 4949:
      if (ot(r, t + 6) === 121) return xe(r, ":", ":" + je) + r;
      break;
    case 6444:
      switch (ot(r, ot(r, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            xe(
              r,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                je +
                (ot(r, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                je +
                "$2$3$1" +
                $e +
                "$2box$3",
            ) + r
          );
        case 100:
          return xe(r, ":", ":" + $e) + r;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return xe(r, "scroll-", "scroll-snap-") + r;
  }
  return r;
}
function Ga(r, t) {
  for (var o = "", a = 0; a < r.length; a++) o += t(r[a], a, r, t) || "";
  return o;
}
function j2(r, t, o, a) {
  switch (r.type) {
    case v2:
      if (r.children.length) break;
    case b2:
    case vc:
      return (r.return = r.return || r.value);
    case bh:
      return "";
    case vh:
      return (r.return = r.value + "{" + Ga(r.children, a) + "}");
    case pi:
      if (!an((r.value = r.props.join(",")))) return "";
  }
  return an((o = Ga(r.children, a)))
    ? (r.return = r.value + "{" + o + "}")
    : "";
}
function R2(r) {
  var t = xh(r);
  return function (o, a, i, c) {
    for (var d = "", h = 0; h < t; h++) d += r[h](o, a, i, c) || "";
    return d;
  };
}
function I2(r) {
  return function (t) {
    t.root || ((t = t.return) && r(t));
  };
}
function B2(r, t, o, a) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case vc:
        r.return = Ch(r.value, r.length, o);
        return;
      case vh:
        return Ga([zn(r, { value: xe(r.value, "@", "@" + je) })], a);
      case pi:
        if (r.length)
          return _2((o = r.props), function (i) {
            switch (vn(i, (a = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                A0(zn(r, { props: [xe(i, /:(read-\w+)/, ":" + Kr + "$1")] })),
                  A0(zn(r, { props: [i] })),
                  Gl(r, { props: Kf(o, a) });
                break;
              case "::placeholder":
                A0(
                  zn(r, {
                    props: [xe(i, /:(plac\w+)/, ":" + je + "input-$1")],
                  }),
                ),
                  A0(zn(r, { props: [xe(i, /:(plac\w+)/, ":" + Kr + "$1")] })),
                  A0(zn(r, { props: [xe(i, /:(plac\w+)/, $e + "input-$1")] })),
                  A0(zn(r, { props: [i] })),
                  Gl(r, { props: Kf(o, a) });
                break;
            }
            return "";
          });
    }
}
var M2 = {
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
  It = {},
  K0 =
    (typeof process < "u" &&
      It !== void 0 &&
      (It.REACT_APP_SC_ATTR || It.SC_ATTR)) ||
    "data-styled",
  wh = "active",
  kh = "data-styled-version",
  bi = "6.1.18",
  _c = `/*!sc*/
`,
  Ua = typeof window < "u" && typeof document < "u",
  N2 = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
        It !== void 0 &&
        It.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
        It.REACT_APP_SC_DISABLE_SPEEDY !== ""
      ? It.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
        It.REACT_APP_SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        It !== void 0 &&
        It.SC_DISABLE_SPEEDY !== void 0 &&
        It.SC_DISABLE_SPEEDY !== "" &&
        It.SC_DISABLE_SPEEDY !== "false" &&
        It.SC_DISABLE_SPEEDY),
  vi = Object.freeze([]),
  X0 = Object.freeze({});
function L2(r, t, o) {
  return (
    o === void 0 && (o = X0), (r.theme !== o.theme && r.theme) || t || o.theme
  );
}
var Oh = new Set([
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
  $2 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  A2 = /(^-|-$)/g;
function Yf(r) {
  return r.replace($2, "-").replace(A2, "");
}
var D2 = /(a)(d)/gi,
  ya = 52,
  Zf = function (r) {
    return String.fromCharCode(r + (r > 25 ? 39 : 97));
  };
function Wl(r) {
  var t,
    o = "";
  for (t = Math.abs(r); t > ya; t = (t / ya) | 0) o = Zf(t % ya) + o;
  return (Zf(t % ya) + o).replace(D2, "$1-$2");
}
var wl,
  Ph = 5381,
  H0 = function (r, t) {
    for (var o = t.length; o; ) r = (33 * r) ^ t.charCodeAt(--o);
    return r;
  },
  Eh = function (r) {
    return H0(Ph, r);
  };
function H2(r) {
  return Wl(Eh(r) >>> 0);
}
function z2(r) {
  return r.displayName || r.name || "Component";
}
function kl(r) {
  return typeof r == "string" && !0;
}
var Th = typeof Symbol == "function" && Symbol.for,
  Fh = Th ? Symbol.for("react.memo") : 60115,
  V2 = Th ? Symbol.for("react.forward_ref") : 60112,
  G2 = {
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
  U2 = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  jh = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  q2 =
    (((wl = {})[V2] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (wl[Fh] = jh),
    wl);
function Jf(r) {
  return ("type" in (t = r) && t.type.$$typeof) === Fh
    ? jh
    : "$$typeof" in r
      ? q2[r.$$typeof]
      : G2;
  var t;
}
var W2 = Object.defineProperty,
  K2 = Object.getOwnPropertyNames,
  ep = Object.getOwnPropertySymbols,
  X2 = Object.getOwnPropertyDescriptor,
  Q2 = Object.getPrototypeOf,
  tp = Object.prototype;
function Rh(r, t, o) {
  if (typeof t != "string") {
    if (tp) {
      var a = Q2(t);
      a && a !== tp && Rh(r, a, o);
    }
    var i = K2(t);
    ep && (i = i.concat(ep(t)));
    for (var c = Jf(r), d = Jf(t), h = 0; h < i.length; ++h) {
      var f = i[h];
      if (!(f in U2 || (o && o[f]) || (d && f in d) || (c && f in c))) {
        var m = X2(t, f);
        try {
          W2(r, f, m);
        } catch {}
      }
    }
  }
  return r;
}
function l0(r) {
  return typeof r == "function";
}
function xc(r) {
  return typeof r == "object" && "styledComponentId" in r;
}
function o0(r, t) {
  return r && t ? "".concat(r, " ").concat(t) : r || t || "";
}
function np(r, t) {
  if (r.length === 0) return "";
  for (var o = r[0], a = 1; a < r.length; a++) o += r[a];
  return o;
}
function Qr(r) {
  return (
    r !== null &&
    typeof r == "object" &&
    r.constructor.name === Object.name &&
    !("props" in r && r.$$typeof)
  );
}
function Kl(r, t, o) {
  if ((o === void 0 && (o = !1), !o && !Qr(r) && !Array.isArray(r))) return t;
  if (Array.isArray(t))
    for (var a = 0; a < t.length; a++) r[a] = Kl(r[a], t[a]);
  else if (Qr(t)) for (var a in t) r[a] = Kl(r[a], t[a]);
  return r;
}
function Sc(r, t) {
  Object.defineProperty(r, "toString", { value: t });
}
function c0(r) {
  for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(r, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""),
  );
}
var Y2 = (function () {
    function r(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (r.prototype.indexOfGroup = function (t) {
        for (var o = 0, a = 0; a < t; a++) o += this.groupSizes[a];
        return o;
      }),
      (r.prototype.insertRules = function (t, o) {
        if (t >= this.groupSizes.length) {
          for (var a = this.groupSizes, i = a.length, c = i; t >= c; )
            if ((c <<= 1) < 0) throw c0(16, "".concat(t));
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
      (r.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var o = this.groupSizes[t],
            a = this.indexOfGroup(t),
            i = a + o;
          this.groupSizes[t] = 0;
          for (var c = a; c < i; c++) this.tag.deleteRule(a);
        }
      }),
      (r.prototype.getGroup = function (t) {
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
          o += "".concat(this.tag.getRule(d)).concat(_c);
        return o;
      }),
      r
    );
  })(),
  Ba = new Map(),
  qa = new Map(),
  Ma = 1,
  _a = function (r) {
    if (Ba.has(r)) return Ba.get(r);
    for (; qa.has(Ma); ) Ma++;
    var t = Ma++;
    return Ba.set(r, t), qa.set(t, r), t;
  },
  Z2 = function (r, t) {
    (Ma = t + 1), Ba.set(r, t), qa.set(t, r);
  },
  J2 = "style[".concat(K0, "][").concat(kh, '="').concat(bi, '"]'),
  eb = new RegExp(
    "^".concat(K0, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  ),
  tb = function (r, t, o) {
    for (var a, i = o.split(","), c = 0, d = i.length; c < d; c++)
      (a = i[c]) && r.registerName(t, a);
  },
  nb = function (r, t) {
    for (
      var o,
        a = ((o = t.textContent) !== null && o !== void 0 ? o : "").split(_c),
        i = [],
        c = 0,
        d = a.length;
      c < d;
      c++
    ) {
      var h = a[c].trim();
      if (h) {
        var f = h.match(eb);
        if (f) {
          var m = 0 | parseInt(f[1], 10),
            b = f[2];
          m !== 0 && (Z2(b, m), tb(r, b, f[3]), r.getTag().insertRules(m, i)),
            (i.length = 0);
        } else i.push(h);
      }
    }
  },
  rp = function (r) {
    for (
      var t = document.querySelectorAll(J2), o = 0, a = t.length;
      o < a;
      o++
    ) {
      var i = t[o];
      i &&
        i.getAttribute(K0) !== wh &&
        (nb(r, i), i.parentNode && i.parentNode.removeChild(i));
    }
  };
function rb() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Ih = function (r) {
    var t = document.head,
      o = r || t,
      a = document.createElement("style"),
      i = (function (h) {
        var f = Array.from(h.querySelectorAll("style[".concat(K0, "]")));
        return f[f.length - 1];
      })(o),
      c = i !== void 0 ? i.nextSibling : null;
    a.setAttribute(K0, wh), a.setAttribute(kh, bi);
    var d = rb();
    return d && a.setAttribute("nonce", d), o.insertBefore(a, c), a;
  },
  ob = (function () {
    function r(t) {
      (this.element = Ih(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (o) {
          if (o.sheet) return o.sheet;
          for (var a = document.styleSheets, i = 0, c = a.length; i < c; i++) {
            var d = a[i];
            if (d.ownerNode === o) return d;
          }
          throw c0(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (r.prototype.insertRule = function (t, o) {
        try {
          return this.sheet.insertRule(o, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (r.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (r.prototype.getRule = function (t) {
        var o = this.sheet.cssRules[t];
        return o && o.cssText ? o.cssText : "";
      }),
      r
    );
  })(),
  ab = (function () {
    function r(t) {
      (this.element = Ih(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (r.prototype.insertRule = function (t, o) {
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
      (r.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (r.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      r
    );
  })(),
  ib = (function () {
    function r(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (r.prototype.insertRule = function (t, o) {
        return (
          t <= this.length && (this.rules.splice(t, 0, o), this.length++, !0)
        );
      }),
      (r.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (r.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      r
    );
  })(),
  op = Ua,
  sb = { isServer: !Ua, useCSSOMInjection: !N2 },
  Bh = (function () {
    function r(t, o, a) {
      t === void 0 && (t = X0), o === void 0 && (o = {});
      var i = this;
      (this.options = gt(gt({}, sb), t)),
        (this.gs = o),
        (this.names = new Map(a)),
        (this.server = !!t.isServer),
        !this.server && Ua && op && ((op = !1), rp(this)),
        Sc(this, function () {
          return (function (c) {
            for (
              var d = c.getTag(),
                h = d.length,
                f = "",
                m = function (v) {
                  var y = (function (O) {
                    return qa.get(O);
                  })(v);
                  if (y === void 0) return "continue";
                  var x = c.names.get(y),
                    S = d.getGroup(v);
                  if (x === void 0 || !x.size || S.length === 0)
                    return "continue";
                  var P = ""
                      .concat(K0, ".g")
                      .concat(v, '[id="')
                      .concat(y, '"]'),
                    k = "";
                  x !== void 0 &&
                    x.forEach(function (O) {
                      O.length > 0 && (k += "".concat(O, ","));
                    }),
                    (f += ""
                      .concat(S)
                      .concat(P, '{content:"')
                      .concat(k, '"}')
                      .concat(_c));
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
      (r.registerId = function (t) {
        return _a(t);
      }),
      (r.prototype.rehydrate = function () {
        !this.server && Ua && rp(this);
      }),
      (r.prototype.reconstructWithOptions = function (t, o) {
        return (
          o === void 0 && (o = !0),
          new r(
            gt(gt({}, this.options), t),
            this.gs,
            (o && this.names) || void 0,
          )
        );
      }),
      (r.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (r.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (o) {
              var a = o.useCSSOMInjection,
                i = o.target;
              return o.isServer ? new ib(i) : a ? new ob(i) : new ab(i);
            })(this.options)),
            new Y2(t)))
        );
        var t;
      }),
      (r.prototype.hasNameForId = function (t, o) {
        return this.names.has(t) && this.names.get(t).has(o);
      }),
      (r.prototype.registerName = function (t, o) {
        if ((_a(t), this.names.has(t))) this.names.get(t).add(o);
        else {
          var a = new Set();
          a.add(o), this.names.set(t, a);
        }
      }),
      (r.prototype.insertRules = function (t, o, a) {
        this.registerName(t, o), this.getTag().insertRules(_a(t), a);
      }),
      (r.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (r.prototype.clearRules = function (t) {
        this.getTag().clearGroup(_a(t)), this.clearNames(t);
      }),
      (r.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      r
    );
  })(),
  lb = /&/g,
  cb = /^\s*\/\/.*$/gm;
function Mh(r, t) {
  return r.map(function (o) {
    return (
      o.type === "rule" &&
        ((o.value = "".concat(t, " ").concat(o.value)),
        (o.value = o.value.replaceAll(",", ",".concat(t, " "))),
        (o.props = o.props.map(function (a) {
          return "".concat(t, " ").concat(a);
        }))),
      Array.isArray(o.children) &&
        o.type !== "@keyframes" &&
        (o.children = Mh(o.children, t)),
      o
    );
  });
}
function ub(r) {
  var t,
    o,
    a,
    i = X0,
    c = i.options,
    d = c === void 0 ? X0 : c,
    h = i.plugins,
    f = h === void 0 ? vi : h,
    m = function (y, x, S) {
      return S.startsWith(o) && S.endsWith(o) && S.replaceAll(o, "").length > 0
        ? ".".concat(t)
        : y;
    },
    b = f.slice();
  b.push(function (y) {
    y.type === pi &&
      y.value.includes("&") &&
      (y.props[0] = y.props[0].replace(lb, o).replace(a, m));
  }),
    d.prefix && b.push(B2),
    b.push(j2);
  var v = function (y, x, S, P) {
    x === void 0 && (x = ""),
      S === void 0 && (S = ""),
      P === void 0 && (P = "&"),
      (t = P),
      (o = x),
      (a = new RegExp("\\".concat(o, "\\b"), "g"));
    var k = y.replace(cb, ""),
      O = T2(S || x ? "".concat(S, " ").concat(x, " { ").concat(k, " }") : k);
    d.namespace && (O = Mh(O, d.namespace));
    var T = [];
    return (
      Ga(
        O,
        R2(
          b.concat(
            I2(function (I) {
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
            return x.name || c0(15), H0(y, x.name);
          }, Ph)
          .toString()
      : ""),
    v
  );
}
var db = new Bh(),
  Xl = ub(),
  Nh = ze.createContext({
    shouldForwardProp: void 0,
    styleSheet: db,
    stylis: Xl,
  });
Nh.Consumer;
ze.createContext(void 0);
function ap() {
  return V.useContext(Nh);
}
var fb = (function () {
    function r(t, o) {
      var a = this;
      (this.inject = function (i, c) {
        c === void 0 && (c = Xl);
        var d = a.name + c.hash;
        i.hasNameForId(a.id, d) ||
          i.insertRules(a.id, d, c(a.rules, d, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = o),
        Sc(this, function () {
          throw c0(12, String(a.name));
        });
    }
    return (
      (r.prototype.getName = function (t) {
        return t === void 0 && (t = Xl), this.name + t.hash;
      }),
      r
    );
  })(),
  pb = function (r) {
    return r >= "A" && r <= "Z";
  };
function ip(r) {
  for (var t = "", o = 0; o < r.length; o++) {
    var a = r[o];
    if (o === 1 && a === "-" && r[0] === "-") return r;
    pb(a) ? (t += "-" + a.toLowerCase()) : (t += a);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Lh = function (r) {
    return r == null || r === !1 || r === "";
  },
  $h = function (r) {
    var t,
      o,
      a = [];
    for (var i in r) {
      var c = r[i];
      r.hasOwnProperty(i) &&
        !Lh(c) &&
        ((Array.isArray(c) && c.isCss) || l0(c)
          ? a.push("".concat(ip(i), ":"), c, ";")
          : Qr(c)
            ? a.push.apply(
                a,
                Va(Va(["".concat(i, " {")], $h(c), !1), ["}"], !1),
              )
            : a.push(
                ""
                  .concat(ip(i), ": ")
                  .concat(
                    ((t = i),
                    (o = c) == null || typeof o == "boolean" || o === ""
                      ? ""
                      : typeof o != "number" ||
                          o === 0 ||
                          t in M2 ||
                          t.startsWith("--")
                        ? String(o).trim()
                        : "".concat(o, "px")),
                    ";",
                  ),
              ));
    }
    return a;
  };
function s0(r, t, o, a) {
  if (Lh(r)) return [];
  if (xc(r)) return [".".concat(r.styledComponentId)];
  if (l0(r)) {
    if (!l0((c = r)) || (c.prototype && c.prototype.isReactComponent) || !t)
      return [r];
    var i = r(t);
    return s0(i, t, o, a);
  }
  var c;
  return r instanceof fb
    ? o
      ? (r.inject(o, a), [r.getName(a)])
      : [r]
    : Qr(r)
      ? $h(r)
      : Array.isArray(r)
        ? Array.prototype.concat.apply(
            vi,
            r.map(function (d) {
              return s0(d, t, o, a);
            }),
          )
        : [r.toString()];
}
function hb(r) {
  for (var t = 0; t < r.length; t += 1) {
    var o = r[t];
    if (l0(o) && !xc(o)) return !1;
  }
  return !0;
}
var mb = Eh(bi),
  gb = (function () {
    function r(t, o, a) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (a === void 0 || a.isStatic) && hb(t)),
        (this.componentId = o),
        (this.baseHash = H0(mb, o)),
        (this.baseStyle = a),
        Bh.registerId(o);
    }
    return (
      (r.prototype.generateAndInjectStyles = function (t, o, a) {
        var i = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, o, a)
          : "";
        if (this.isStatic && !a.hash)
          if (
            this.staticRulesId &&
            o.hasNameForId(this.componentId, this.staticRulesId)
          )
            i = o0(i, this.staticRulesId);
          else {
            var c = np(s0(this.rules, t, o, a)),
              d = Wl(H0(this.baseHash, c) >>> 0);
            if (!o.hasNameForId(this.componentId, d)) {
              var h = a(c, ".".concat(d), void 0, this.componentId);
              o.insertRules(this.componentId, d, h);
            }
            (i = o0(i, d)), (this.staticRulesId = d);
          }
        else {
          for (
            var f = H0(this.baseHash, a.hash), m = "", b = 0;
            b < this.rules.length;
            b++
          ) {
            var v = this.rules[b];
            if (typeof v == "string") m += v;
            else if (v) {
              var y = np(s0(v, t, o, a));
              (f = H0(f, y + b)), (m += y);
            }
          }
          if (m) {
            var x = Wl(f >>> 0);
            o.hasNameForId(this.componentId, x) ||
              o.insertRules(
                this.componentId,
                x,
                a(m, ".".concat(x), void 0, this.componentId),
              ),
              (i = o0(i, x));
          }
        }
        return i;
      }),
      r
    );
  })(),
  Wa = ze.createContext(void 0);
Wa.Consumer;
function Ah(r) {
  var t = ze.useContext(Wa),
    o = V.useMemo(
      function () {
        return (function (a, i) {
          if (!a) throw c0(14);
          if (l0(a)) {
            var c = a(i);
            return c;
          }
          if (Array.isArray(a) || typeof a != "object") throw c0(8);
          return i ? gt(gt({}, i), a) : a;
        })(r.theme, t);
      },
      [r.theme, t],
    );
  return r.children
    ? ze.createElement(Wa.Provider, { value: o }, r.children)
    : null;
}
var Ol = {};
function bb(r, t, o) {
  var a = xc(r),
    i = r,
    c = !kl(r),
    d = t.attrs,
    h = d === void 0 ? vi : d,
    f = t.componentId,
    m =
      f === void 0
        ? (function (N, F) {
            var $ = typeof N != "string" ? "sc" : Yf(N);
            Ol[$] = (Ol[$] || 0) + 1;
            var M = "".concat($, "-").concat(H2(bi + $ + Ol[$]));
            return F ? "".concat(F, "-").concat(M) : M;
          })(t.displayName, t.parentComponentId)
        : f,
    b = t.displayName,
    v =
      b === void 0
        ? (function (N) {
            return kl(N) ? "styled.".concat(N) : "Styled(".concat(z2(N), ")");
          })(r)
        : b,
    y =
      t.displayName && t.componentId
        ? "".concat(Yf(t.displayName), "-").concat(t.componentId)
        : t.componentId || m,
    x = a && i.attrs ? i.attrs.concat(h).filter(Boolean) : h,
    S = t.shouldForwardProp;
  if (a && i.shouldForwardProp) {
    var P = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var k = t.shouldForwardProp;
      S = function (N, F) {
        return P(N, F) && k(N, F);
      };
    } else S = P;
  }
  var O = new gb(o, y, a ? i.componentStyle : void 0);
  function T(N, F) {
    return (function ($, M, X) {
      var he = $.attrs,
        Ce = $.componentStyle,
        te = $.defaultProps,
        ce = $.foldedComponentIds,
        ye = $.styledComponentId,
        Se = $.target,
        ge = ze.useContext(Wa),
        me = ap(),
        we = $.shouldForwardProp || me.shouldForwardProp,
        q = L2(M, ge, te) || X0,
        Y = (function (_e, de, be) {
          for (
            var pe,
              Ie = gt(gt({}, de), { className: void 0, theme: be }),
              Gn = 0;
            Gn < _e.length;
            Gn += 1
          ) {
            var Mt = l0((pe = _e[Gn])) ? pe(Ie) : pe;
            for (var yt in Mt)
              Ie[yt] =
                yt === "className"
                  ? o0(Ie[yt], Mt[yt])
                  : yt === "style"
                    ? gt(gt({}, Ie[yt]), Mt[yt])
                    : Mt[yt];
          }
          return (
            de.className && (Ie.className = o0(Ie.className, de.className)), Ie
          );
        })(he, M, q),
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
          var be = ap(),
            pe = _e.generateAndInjectStyles(de, be.styleSheet, be.stylis);
          return pe;
        })(Ce, Y),
        oe = o0(ce, ye);
      return (
        le && (oe += " " + le),
        Y.className && (oe += " " + Y.className),
        (A[kl(C) && !Oh.has(C) ? "class" : "className"] = oe),
        X && (A.ref = X),
        V.createElement(C, A)
      );
    })(I, N, F);
  }
  T.displayName = v;
  var I = ze.forwardRef(T);
  return (
    (I.attrs = x),
    (I.componentStyle = O),
    (I.displayName = v),
    (I.shouldForwardProp = S),
    (I.foldedComponentIds = a
      ? o0(i.foldedComponentIds, i.styledComponentId)
      : ""),
    (I.styledComponentId = y),
    (I.target = a ? i.target : r),
    Object.defineProperty(I, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (N) {
        this._foldedDefaultProps = a
          ? (function (F) {
              for (var $ = [], M = 1; M < arguments.length; M++)
                $[M - 1] = arguments[M];
              for (var X = 0, he = $; X < he.length; X++) Kl(F, he[X], !0);
              return F;
            })({}, i.defaultProps, N)
          : N;
      },
    }),
    Sc(I, function () {
      return ".".concat(I.styledComponentId);
    }),
    c &&
      Rh(I, r, {
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
function sp(r, t) {
  for (var o = [r[0]], a = 0, i = t.length; a < i; a += 1)
    o.push(t[a], r[a + 1]);
  return o;
}
var lp = function (r) {
  return Object.assign(r, { isCss: !0 });
};
function vb(r) {
  for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
  if (l0(r) || Qr(r)) return lp(s0(sp(vi, Va([r], t, !0))));
  var a = r;
  return t.length === 0 && a.length === 1 && typeof a[0] == "string"
    ? s0(a)
    : lp(s0(sp(a, t)));
}
function Ql(r, t, o) {
  if ((o === void 0 && (o = X0), !t)) throw c0(1, t);
  var a = function (i) {
    for (var c = [], d = 1; d < arguments.length; d++) c[d - 1] = arguments[d];
    return r(t, o, vb.apply(void 0, Va([i], c, !1)));
  };
  return (
    (a.attrs = function (i) {
      return Ql(
        r,
        t,
        gt(gt({}, o), {
          attrs: Array.prototype.concat(o.attrs, i).filter(Boolean),
        }),
      );
    }),
    (a.withConfig = function (i) {
      return Ql(r, t, gt(gt({}, o), i));
    }),
    a
  );
}
var Dh = function (r) {
    return Ql(bb, r);
  },
  We = Dh;
Oh.forEach(function (r) {
  We[r] = Dh(r);
});
const yb = ({ isDark: r = !1 }) =>
    W.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "113",
      height: "24",
      viewBox: "0 0 113 24",
      fill: "none",
      children: [
        W.jsx("path", {
          d: "M35.3052 12.7696V12.4883C35.3052 11.7814 35.0635 11.2405 34.5801 10.8654C34.1114 10.4759 33.4962 10.2812 32.7345 10.2812C32.1486 10.2812 31.6872 10.3821 31.3503 10.5841C31.028 10.7716 30.7204 11.0601 30.4274 11.4496C30.3396 11.565 30.2443 11.6444 30.1418 11.6876C30.0393 11.7309 29.9001 11.7526 29.7243 11.7526H29.0652C28.9041 11.7526 28.7576 11.6949 28.6258 11.5795C28.5086 11.4641 28.4573 11.327 28.472 11.1683C28.5159 10.7356 28.7283 10.31 29.1091 9.89167C29.5046 9.45891 30.0246 9.10548 30.6691 8.8314C31.3136 8.55731 32.0021 8.42027 32.7345 8.42027C34.0967 8.42027 35.1953 8.79534 36.0302 9.54546C36.8798 10.2956 37.3046 11.3486 37.3046 12.7046V19.3043C37.3046 19.463 37.246 19.6 37.1288 19.7154C37.0116 19.8308 36.8725 19.8885 36.7114 19.8885H35.8984C35.7373 19.8885 35.5981 19.8308 35.4809 19.7154C35.3638 19.6 35.3052 19.463 35.3052 19.3043V18.4171C35.0708 18.9365 34.5728 19.3476 33.8111 19.6505C33.0494 19.9535 32.2877 20.1049 31.526 20.1049C30.779 20.1049 30.1125 19.9751 29.5266 19.7154C28.9407 19.4413 28.4866 19.0735 28.1643 18.6119C27.8567 18.1503 27.7029 17.6309 27.7029 17.0539C27.7029 15.972 28.1131 15.1281 28.9334 14.5223C29.7536 13.902 30.8449 13.4836 32.2071 13.2672L35.3052 12.7696ZM35.3052 14.5006L32.7125 14.9117C31.7604 15.056 31.0207 15.294 30.4934 15.6258C29.966 15.9432 29.7024 16.3471 29.7024 16.8375C29.7024 17.1982 29.8708 17.5228 30.2077 17.8113C30.5446 18.0998 31.0573 18.244 31.7457 18.244C32.8004 18.244 33.6573 17.9483 34.3164 17.3569C34.9756 16.7654 35.3052 15.9937 35.3052 15.0416V14.5006Z",
          fill: r ? "#FBFDFF" : "#020617",
        }),
        W.jsx("path", {
          d: "M42.5097 19.3043C42.5097 19.463 42.4511 19.6 42.3339 19.7154C42.2167 19.8308 42.0776 19.8885 41.9164 19.8885H41.1035C40.9424 19.8885 40.8032 19.8308 40.686 19.7154C40.5688 19.6 40.5102 19.463 40.5102 19.3043V5.10962C40.5102 4.95094 40.5688 4.8139 40.686 4.6985C40.8032 4.58309 40.9424 4.52539 41.1035 4.52539H41.9164C42.0776 4.52539 42.2167 4.58309 42.3339 4.6985C42.4511 4.8139 42.5097 4.95094 42.5097 5.10962V19.3043Z",
          fill: r ? "#FBFDFF" : "#020617",
        }),
        W.jsx("path", {
          d: "M50.4241 18.244C51.8889 18.244 52.8776 17.6814 53.3903 16.5562C53.4929 16.3399 53.5954 16.1884 53.6979 16.1018C53.8005 16.0153 53.9396 15.972 54.1154 15.972H54.7745C54.9357 15.972 55.0748 16.0297 55.192 16.1451C55.3092 16.2461 55.3678 16.3687 55.3678 16.513C55.3678 17.0034 55.17 17.53 54.7745 18.0926C54.3791 18.6552 53.8078 19.1312 53.0607 19.5207C52.3137 19.9102 51.4348 20.1049 50.4241 20.1049C49.3841 20.1049 48.4833 19.8885 47.7216 19.4558C46.9599 19.023 46.374 18.4316 45.9639 17.6814C45.5537 16.9169 45.3267 16.0658 45.2827 15.1281C45.2681 14.955 45.2608 14.6232 45.2608 14.1328C45.2608 13.7866 45.2681 13.5413 45.2827 13.3971C45.4146 11.9257 45.9199 10.7284 46.7988 9.80512C47.6777 8.88189 48.8861 8.42027 50.4241 8.42027C51.4348 8.42027 52.3064 8.61502 53.0388 9.00451C53.7858 9.37957 54.3498 9.8484 54.7306 10.411C55.1261 10.9592 55.3385 11.4785 55.3678 11.9689C55.3824 12.1276 55.3238 12.2647 55.192 12.3801C55.0748 12.4955 54.9357 12.5532 54.7745 12.5532H54.1154C53.9396 12.5532 53.8005 12.5099 53.6979 12.4233C53.5954 12.3368 53.4929 12.1853 53.3903 11.9689C52.8776 10.8438 51.8889 10.2812 50.4241 10.2812C49.6185 10.2812 48.9154 10.548 48.3148 11.0818C47.7143 11.6155 47.3701 12.4233 47.2822 13.5053C47.2675 13.6639 47.2602 13.9236 47.2602 14.2842C47.2602 14.616 47.2675 14.8613 47.2822 15.0199C47.3847 16.1018 47.7289 16.9097 48.3148 17.4434C48.9154 17.9772 49.6185 18.244 50.4241 18.244Z",
          fill: r ? "#FBFDFF" : "#020617",
        }),
        W.jsx("path", {
          d: "M68.1485 19.3043C68.1485 19.463 68.0899 19.6 67.9727 19.7154C67.8555 19.8308 67.7164 19.8885 67.5552 19.8885H66.7423C66.5812 19.8885 66.442 19.8308 66.3248 19.7154C66.2076 19.6 66.149 19.463 66.149 19.3043V13.5918C66.149 12.5099 65.8781 11.6876 65.3361 11.1251C64.7941 10.5625 64.0398 10.2812 63.073 10.2812C62.1209 10.2812 61.3665 10.5625 60.8099 11.1251C60.2679 11.6876 59.997 12.5099 59.997 13.5918V19.3043C59.997 19.463 59.9384 19.6 59.8212 19.7154C59.704 19.8308 59.5648 19.8885 59.4037 19.8885H58.5908C58.4296 19.8885 58.2905 19.8308 58.1733 19.7154C58.0561 19.6 57.9975 19.463 57.9975 19.3043V5.10962C57.9975 4.95094 58.0561 4.8139 58.1733 4.6985C58.2905 4.58309 58.4296 4.52539 58.5908 4.52539H59.4037C59.5648 4.52539 59.704 4.58309 59.8212 4.6985C59.9384 4.8139 59.997 4.95094 59.997 5.10962V9.89167C60.3192 9.47333 60.7586 9.12712 61.3153 8.85304C61.8865 8.56453 62.5823 8.42027 63.4026 8.42027C64.3254 8.42027 65.1457 8.61502 65.8634 9.00451C66.5812 9.39399 67.1378 9.95659 67.5333 10.6923C67.9434 11.4136 68.1485 12.2719 68.1485 13.2672V19.3043Z",
          fill: r ? "#FBFDFF" : "#020617",
        }),
        W.jsx("path", {
          d: "M75.8478 8.42027C77.4152 8.42027 78.6529 8.91074 79.5611 9.89167C80.4692 10.8726 80.9233 12.207 80.9233 13.8947V14.479C80.9233 14.6377 80.8647 14.7747 80.7476 14.8901C80.6304 15.0055 80.4912 15.0632 80.3301 15.0632H72.7718V15.193C72.8011 16.1451 73.0941 16.8952 73.6507 17.4434C74.2219 17.9772 74.9543 18.244 75.8478 18.244C76.5802 18.244 77.1442 18.1503 77.5397 17.9627C77.9498 17.7752 78.316 17.5083 78.6383 17.1621C78.7554 17.0467 78.858 16.9674 78.9459 16.9241C79.0484 16.8808 79.1802 16.8592 79.3414 16.8592H80.0005C80.1763 16.8592 80.3228 16.9169 80.4399 17.0323C80.5571 17.1477 80.6084 17.2847 80.5937 17.4434C80.5352 17.8329 80.3154 18.2368 79.9346 18.6552C79.5684 19.0591 79.0337 19.4053 78.3307 19.6938C77.6422 19.9679 76.8146 20.1049 75.8478 20.1049C74.9104 20.1049 74.0755 19.8957 73.3431 19.4774C72.6107 19.0446 72.0248 18.4532 71.5853 17.7031C71.1605 16.9529 70.9042 16.1091 70.8163 15.1714C70.787 14.7386 70.7724 14.4069 70.7724 14.176C70.7724 13.9452 70.787 13.6134 70.8163 13.1807C70.9042 12.2863 71.1605 11.4785 71.5853 10.7572C72.0248 10.0359 72.6034 9.46612 73.3211 9.04778C74.0535 8.62944 74.8957 8.42027 75.8478 8.42027ZM78.9459 13.2456V13.1807C78.9459 12.3007 78.6602 11.6011 78.089 11.0818C77.5324 10.548 76.7853 10.2812 75.8478 10.2812C74.9983 10.2812 74.2732 10.548 73.6726 11.0818C73.0867 11.6155 72.7865 12.3152 72.7718 13.1807V13.2456H78.9459Z",
          fill: r ? "#FBFDFF" : "#020617",
        }),
        W.jsx("path", {
          d: "M85.5734 9.89167C85.925 9.44448 86.3205 9.09106 86.7599 8.8314C87.1993 8.55731 87.7853 8.42027 88.5177 8.42027C90.2314 8.42027 91.4326 9.04778 92.121 10.3028C92.5458 9.69693 93.0292 9.23531 93.5712 8.91795C94.1131 8.58617 94.8235 8.42027 95.7024 8.42027C97.1379 8.42027 98.1999 8.84582 98.8883 9.69693C99.5914 10.548 99.943 11.7526 99.943 13.3105V19.3043C99.943 19.463 99.8844 19.6 99.7672 19.7154C99.65 19.8308 99.5108 19.8885 99.3497 19.8885H98.5368C98.3756 19.8885 98.2365 19.8308 98.1193 19.7154C98.0021 19.6 97.9435 19.463 97.9435 19.3043V13.5269C97.9435 11.3631 97.0793 10.2812 95.3509 10.2812C94.5599 10.2812 93.93 10.5408 93.4613 11.0601C92.9926 11.5795 92.7582 12.3512 92.7582 13.3754V19.3043C92.7582 19.463 92.6996 19.6 92.5824 19.7154C92.4652 19.8308 92.3261 19.8885 92.165 19.8885H91.352C91.1909 19.8885 91.0517 19.8308 90.9345 19.7154C90.8174 19.6 90.7588 19.463 90.7588 19.3043V13.5269C90.7588 11.3631 89.8945 10.2812 88.1661 10.2812C87.3751 10.2812 86.7453 10.5408 86.2765 11.0601C85.8078 11.5795 85.5734 12.3512 85.5734 13.3754V19.3043C85.5734 19.463 85.5148 19.6 85.3977 19.7154C85.2805 19.8308 85.1413 19.8885 84.9802 19.8885H84.1672C84.0061 19.8885 83.867 19.8308 83.7498 19.7154C83.6326 19.6 83.574 19.463 83.574 19.3043V9.22089C83.574 9.06221 83.6326 8.92516 83.7498 8.80976C83.867 8.69436 84.0061 8.63665 84.1672 8.63665H84.9802C85.1413 8.63665 85.2805 8.69436 85.3977 8.80976C85.5148 8.92516 85.5734 9.06221 85.5734 9.22089V9.89167Z",
          fill: r ? "#FBFDFF" : "#020617",
        }),
        W.jsx("path", {
          d: "M106.097 23.4805C105.965 23.8267 105.752 23.9998 105.459 23.9998H104.559C104.412 23.9998 104.288 23.9493 104.185 23.8483C104.083 23.7474 104.031 23.6247 104.031 23.4805C104.031 23.4228 104.039 23.3723 104.053 23.329L106.163 18.8066L101.812 9.30744C101.797 9.26416 101.79 9.21368 101.79 9.15597C101.79 9.01172 101.841 8.8891 101.944 8.78812C102.046 8.68714 102.171 8.63665 102.317 8.63665H103.218C103.511 8.63665 103.724 8.80976 103.855 9.15597L107.239 16.513L110.667 9.15597C110.799 8.80976 111.011 8.63665 111.304 8.63665H112.205C112.351 8.63665 112.476 8.68714 112.578 8.78812C112.681 8.8891 112.732 9.01172 112.732 9.15597C112.732 9.21368 112.725 9.26416 112.71 9.30744L106.097 23.4805Z",
          fill: r ? "#FBFDFF" : "#020617",
        }),
        W.jsx("path", {
          d: "M19.3958 12.7306L12.0181 0.205008C11.9824 0.143159 11.9306 0.0916386 11.8681 0.0556463C11.8056 0.019654 11.7345 0.000462384 11.662 8.25127e-06C11.5895 -0.000445881 11.5181 0.0178533 11.4551 0.0530595C11.3922 0.0882657 11.3398 0.139134 11.3033 0.200531L9.09371 3.95372C9.02135 4.07658 8.98326 4.21595 8.98326 4.35781C8.98326 4.49967 9.02135 4.63904 9.09371 4.7619L13.9044 12.9332C13.9769 13.0562 14.0811 13.1583 14.2066 13.2292C14.3321 13.3001 14.4744 13.3374 14.6193 13.3373H19.0384C19.1107 13.3371 19.1817 13.3182 19.2443 13.2827C19.3069 13.2471 19.3589 13.1961 19.3951 13.1347C19.4313 13.0733 19.4504 13.0036 19.4505 12.9327C19.4506 12.8618 19.4317 12.7921 19.3958 12.7306Z",
          fill: r ? "#FBFDFF" : "#020617",
        }),
        W.jsx("path", {
          d: "M0.0568897 19.2769L7.43458 6.75134C7.47078 6.68998 7.52283 6.63904 7.58546 6.60362C7.64809 6.5682 7.71911 6.54956 7.79142 6.54956C7.86373 6.54956 7.93478 6.5682 7.99741 6.60362C8.06004 6.63904 8.11206 6.68998 8.14826 6.75134L10.359 10.5012C10.4313 10.6242 10.4694 10.7638 10.4694 10.9058C10.4694 11.0479 10.4313 11.1874 10.359 11.3105L5.54819 19.4818C5.47604 19.6047 5.37206 19.7068 5.24675 19.7778C5.12144 19.8487 4.97923 19.886 4.83452 19.8858H0.414299C0.341483 19.8862 0.269874 19.8676 0.206748 19.8321C0.143622 19.7965 0.0912388 19.7451 0.0549242 19.6833C0.0186097 19.6214 -0.000341874 19.5512 4.66863e-06 19.4798C0.000351211 19.4085 0.019976 19.3384 0.0568897 19.2769Z",
          fill: r ? "#FBFDFF" : "#020617",
        }),
        W.jsx("path", {
          d: "M8.1472 19.8832H22.9026C22.975 19.8831 23.0461 19.8643 23.1087 19.8288C23.1714 19.7933 23.2233 19.7422 23.2595 19.6807C23.2956 19.6192 23.3145 19.5494 23.3144 19.4785C23.3143 19.4075 23.2952 19.3379 23.2589 19.2765L21.0516 15.5244C20.9792 15.4014 20.875 15.2993 20.7495 15.2284C20.624 15.1574 20.4816 15.1202 20.3368 15.1203H10.7153C10.5704 15.1202 10.4281 15.1574 10.3026 15.2284C10.1771 15.2993 10.0729 15.4014 10.0005 15.5244L7.79095 19.2765C7.75466 19.3379 7.7355 19.4075 7.73539 19.4785C7.73529 19.5494 7.75423 19.6192 7.79034 19.6807C7.82645 19.7422 7.87846 19.7933 7.9411 19.8288C8.00375 19.8643 8.07482 19.8831 8.1472 19.8832Z",
          fill: r ? "#FBFDFF" : "#020617",
        }),
      ],
    }),
  _b = ({ isDark: r = !1 }) =>
    W.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: [
        W.jsx("path", {
          d: "M14.8223 13.4397V2.00037L12.3848 2V3.07335H13.4866V12.3663H12.3848V13.4397H14.8223Z",
          fill: r ? "#FBFDFF" : "#475569",
        }),
        W.jsx("path", {
          d: "M2.00227 12.3667V3.07333L3.09827 3.07369V2.00035H0.666626V13.44H3.09827V12.3667H2.00227Z",
          fill: r ? "#FBFDFF" : "#475569",
        }),
        W.jsx("path", {
          d: "M7.79621 4.21892L10.4846 8.74039C10.4979 8.76271 10.5047 8.78796 10.5047 8.81344C10.5045 8.83892 10.4975 8.86417 10.4844 8.88626C10.4711 8.90836 10.4522 8.92685 10.4294 8.9397C10.4066 8.95255 10.3807 8.95931 10.3543 8.95931H8.74406C8.6913 8.95931 8.63944 8.94579 8.59367 8.92031C8.54813 8.89461 8.51003 8.85786 8.48365 8.81344L6.73067 5.86391C6.70429 5.81949 6.69031 5.76922 6.69031 5.71804C6.69031 5.66685 6.70429 5.61658 6.73067 5.57216L7.5358 4.21734C7.5491 4.19525 7.56804 4.17676 7.59104 4.16413C7.61403 4.15151 7.63996 4.14497 7.66634 4.14497C7.69272 4.14497 7.71865 4.15196 7.74165 4.16504C7.76442 4.17789 7.78313 4.1966 7.79621 4.21892Z",
          fill: r ? "#FBFDFF" : "#475569",
        }),
        W.jsx("path", {
          d: "M6.1246 6.58215L3.43617 11.1036C3.42264 11.1259 3.41565 11.1512 3.41565 11.1769C3.41565 11.2028 3.42241 11.2281 3.43572 11.2504C3.44879 11.2727 3.46796 11.2912 3.49095 11.3041C3.51395 11.3169 3.53988 11.3235 3.56648 11.3235H5.17742C5.23018 11.3235 5.28181 11.3101 5.32758 11.2844C5.37313 11.2587 5.41101 11.222 5.43738 11.1776L7.19037 8.22804C7.21675 8.18363 7.2305 8.13335 7.2305 8.08194C7.2305 8.03054 7.21675 7.98026 7.19037 7.93584L6.38478 6.58215C6.37148 6.56006 6.35254 6.54179 6.32977 6.52894C6.307 6.51609 6.28107 6.50933 6.25469 6.50933C6.22831 6.50933 6.20238 6.51609 6.17961 6.52894C6.15684 6.54157 6.1379 6.56006 6.1246 6.58215Z",
          fill: r ? "#FBFDFF" : "#475569",
        }),
        W.jsx("path", {
          d: "M6.386 11.3223H11.7629C11.7892 11.3223 11.8152 11.3155 11.8379 11.3027C11.8607 11.2898 11.8797 11.2713 11.893 11.2492C11.906 11.2269 11.913 11.2019 11.913 11.1762C11.913 11.1505 11.906 11.1255 11.8927 11.1031L11.0885 9.74877C11.0621 9.70435 11.0242 9.6676 10.9785 9.6419C10.9327 9.6162 10.8808 9.6029 10.8281 9.6029H7.32167C7.26892 9.6029 7.21706 9.6162 7.17129 9.6419C7.12552 9.6676 7.08764 9.70435 7.06126 9.74877L6.25613 11.1031C6.24283 11.1252 6.23584 11.1505 6.23584 11.1762C6.23584 11.2019 6.2426 11.2269 6.25591 11.2492C6.26898 11.2713 6.28792 11.2898 6.31092 11.3027C6.33369 11.3155 6.35962 11.3223 6.386 11.3223Z",
          fill: r ? "#FBFDFF" : "#475569",
        }),
      ],
    }),
  xb = We.a`
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
    fill: ${({ theme: r }) => (r.mode === "dark" ? "#FFFFFF !important" : "#000000 !important")};
    stroke: ${({ theme: r }) => (r.mode === "dark" ? "#FFFFFF !important" : "#000000 !important")};
  }
`,
  Sb = () =>
    W.jsxs(xb, {
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
  Cb = ({ isDark: r = !1 }) =>
    W.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: W.jsx("path", {
        d: "M12.6556 3.56509C11.7258 3.13937 10.7441 2.83735 9.73575 2.66675C9.59776 2.91342 9.47291 3.16721 9.36172 3.42705C8.28762 3.2652 7.19533 3.2652 6.12123 3.42705C6.00998 3.16723 5.88513 2.91345 5.7472 2.66675C4.73819 2.83879 3.75589 3.14153 2.82508 3.56732C0.977194 6.3013 0.47626 8.96738 0.726727 11.5956C1.8089 12.3952 3.02016 13.0033 4.30785 13.3934C4.5978 13.0034 4.85437 12.5897 5.07484 12.1567C4.65609 12.0003 4.25193 11.8073 3.86703 11.58C3.96833 11.5066 4.0674 11.4309 4.16314 11.3574C5.28311 11.8841 6.50551 12.1572 7.74314 12.1572C8.98079 12.1572 10.2032 11.8841 11.3232 11.3574C11.42 11.4364 11.5191 11.5121 11.6193 11.58C11.2336 11.8077 10.8287 12.001 10.4092 12.1578C10.6294 12.5906 10.886 13.004 11.1762 13.3934C12.465 13.0048 13.6772 12.397 14.7596 11.5967C15.0534 8.54883 14.2575 5.90723 12.6556 3.56509ZM5.39209 9.97927C4.69413 9.97927 4.1175 9.34587 4.1175 8.56664C4.1175 7.78741 4.67409 7.14844 5.38987 7.14844C6.10565 7.14844 6.67782 7.78741 6.66558 8.56664C6.65334 9.34587 6.10342 9.97927 5.39209 9.97927ZM10.0942 9.97927C9.39511 9.97927 8.82071 9.34587 8.82071 8.56664C8.82071 7.78741 9.3773 7.14844 10.0942 7.14844C10.8111 7.14844 11.3788 7.78741 11.3666 8.56664C11.3543 9.34587 10.8055 9.97927 10.0942 9.97927Z",
        fill: r ? "#FBFDFF" : "#475569",
      }),
    }),
  wb = ({ isDark: r = !1 }) =>
    W.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: W.jsx("path", {
        d: "M2.79998 4.39995L7.54461 7.6847C7.81856 7.87436 8.18139 7.87436 8.45534 7.6847L13.2 4.39995M3.19998 12.8H12.8C13.6836 12.8 14.4 12.0836 14.4 11.2V4.79995C14.4 3.9163 13.6836 3.19995 12.8 3.19995H3.19998C2.31632 3.19995 1.59998 3.9163 1.59998 4.79995V11.2C1.59998 12.0836 2.31632 12.8 3.19998 12.8Z",
        stroke: r ? "#FBFDFF" : "#475569",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  kb = ({ isDark: r = !1 }) =>
    W.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      children: W.jsx("path", {
        d: "M4.875 3.75012C3 3.75012 1.5 5.25012 1.5 7.12512V12.7501C1.5 13.1479 1.65804 13.5295 1.93934 13.8108C2.22064 14.0921 2.60218 14.2501 3 14.2501H15C15.3978 14.2501 15.7794 14.0921 16.0607 13.8108C16.342 13.5295 16.5 13.1479 16.5 12.7501V6.75012C16.5 5.10012 15.15 3.75012 13.5 3.75012H4.875ZM4.875 3.75012C6.75 3.75012 8.25 5.25012 8.25 7.12512V12.7501C8.25 13.1479 8.09196 13.5295 7.81066 13.8108C7.52936 14.0921 7.14782 14.2501 6.75 14.2501M11.25 6.75012H13.5V8.25012M4.5 7.50012H5.25",
        stroke: r ? "#FBFDFF" : "#475569",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  Ob = ({ isDark: r = !1 }) =>
    W.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      children: W.jsx("path", {
        d: "M9 6.00012V3.00012H6M1.5 10.5001H3M15 10.5001H16.5M11.25 9.75012V11.2501M6.75 9.75012V11.2501M4.5 6.00012H13.5C14.3284 6.00012 15 6.67169 15 7.50012V13.5001C15 14.3285 14.3284 15.0001 13.5 15.0001H4.5C3.67157 15.0001 3 14.3285 3 13.5001V7.50012C3 6.67169 3.67157 6.00012 4.5 6.00012Z",
        stroke: r ? "#FBFDFF" : "#475569",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  Pb = ({ isDark: r = !1 }) =>
    W.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: W.jsx("path", {
        d: "M1.59998 7.73277H4.79998L6.43233 2.3999L9.95051 13.5999L11.1922 7.73277H14.4",
        stroke: r ? "#FBFDFF" : "#475569",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  Eb = ({ isDark: r = !1 }) =>
    W.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: W.jsx("path", {
        d: "M9.69706 9.69712C8.7598 10.6344 7.2402 10.6344 6.30294 9.69712M9.69706 9.69712C10.6343 8.75986 10.6343 7.24026 9.69706 6.30301M9.69706 9.69712L12.2426 12.2427M6.30294 9.69712C5.36569 8.75986 5.36569 7.24026 6.30294 6.30301M6.30294 9.69712L3.75736 12.2427M6.30294 6.30301C7.2402 5.36575 8.7598 5.36575 9.69706 6.30301M6.30294 6.30301L3.75736 3.75742M9.69706 6.30301L12.2426 3.75742M12.5255 12.5255C10.0261 15.0249 5.97387 15.0249 3.47452 12.5255C0.975162 10.0262 0.975162 5.97394 3.47452 3.47458C5.97387 0.975224 10.0261 0.975224 12.5255 3.47458C15.0248 5.97394 15.0248 10.0262 12.5255 12.5255Z",
        stroke: r ? "#FBFDFF" : "#475569",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  Tb = ({ isDark: r = !1 }) =>
    W.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: W.jsx("path", {
        d: "M9.15275 6.92804L14.2525 1H13.044L8.61591 6.14724L5.07919 1H1L6.34821 8.78354L1 15H2.20855L6.88474 9.56434L10.6198 15H14.699L9.15245 6.92804H9.15275ZM7.49748 8.85211L6.95559 8.07705L2.644 1.90978H4.50026L7.97976 6.88696L8.52165 7.66202L13.0446 14.1316H11.1883L7.49748 8.85241V8.85211Z",
        fill: r ? "#FBFDFF" : "#475569",
      }),
    }),
  Fb = [
    {
      title: "Support & platform",
      links: [
        {
          href: "https://www.alchemy.com/support",
          text: "FAQs and support",
          Icon: Eb,
        },
        {
          href: "https://status.alchemy.com",
          text: "Platform status",
          Icon: Pb,
        },
        {
          href: "https://www.alchemy.com/contact-sales",
          text: "Contact sales",
          Icon: wb,
        },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          href: "https://www.alchemy.com/docs/llms.txt",
          text: "llms.txt for AI builders",
          Icon: Ob,
        },
        {
          href: "https://www.alchemy.com/university",
          text: "Alchemy University",
          Icon: _b,
        },
      ],
    },
    {
      title: "Stay updated",
      links: [
        {
          href: "https://alchemysupercharged.substack.com/subscribe?just_signed_up=true&skip_redirect_check=true&utm_medium=web&utm_source=embed",
          text: "Subscribe to our newsletter",
          Icon: kb,
        },
        { href: "https://x.com/alchemy", text: "Follow us on X", Icon: Tb },
        {
          href: "https://discord.gg/alchemy-builders",
          text: "Join our discord",
          Icon: Cb,
        },
      ],
    },
  ],
  jb = We.div`
  padding: 48px 24px 54px;
  color: ${({ theme: r }) => (r.mode === "dark" ? "#FBFDFF" : "#020617")};
`,
  Rb = We.div`
  max-width: 1010px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
`,
  Ib = We.div`
  padding: 48px 0px;
  border-top: 1px solid
    ${({ theme: r }) => (r.mode === "dark" ? "#3f3f40" : "#d4d4e8")};
  border-bottom: 1px solid
    ${({ theme: r }) => (r.mode === "dark" ? "#3f3f40" : "#d4d4e8")};
  display: flex;
`,
  Bb = We.div`
  display: flex;
  flex-direction: column;
  row-gap: 36px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 64px;
    justify-content: space-between;
  }
`,
  Mb = We.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 14px;
`,
  Nb = We.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.32px;
  color: ${({ theme: r }) => (r.mode === "dark" ? "#FFFFFF" : "#000000")};
  margin: 0;
`,
  Lb = We.a`
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
  $b = We.div`
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
  Ab = We.div`
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
  Db = We.div`
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
  Hb = We.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    justify-content: flex-end;
  }
`,
  zb = We.a`
  text-decoration: none;
  &:hover {
    color: #5167ff;
  }
`,
  Vb = We.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 14px;

  @media screen and (max-width: 768px) {
    margin-bottom: 12px;
  }
`,
  Gb = () => {
    const [r, t] = V.useState(
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
    const o = { mode: r ? "dark" : "light" };
    return W.jsx(Ah, {
      theme: o,
      children: W.jsx(jb, {
        children: W.jsxs(Rb, {
          children: [
            W.jsx(Ib, {
              children: W.jsxs(Bb, {
                children: [
                  W.jsx(Vb, { children: W.jsx(yb, { isDark: r }) }),
                  Fb.map(({ title: a, links: i }) =>
                    W.jsxs(
                      Mb,
                      {
                        children: [
                          W.jsx(Nb, { children: a }),
                          i.map(({ href: c, text: d, Icon: h }) =>
                            W.jsxs(
                              Lb,
                              {
                                href: c,
                                children: [
                                  W.jsx(h, { isDark: r }),
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
            W.jsx($b, {
              children: W.jsxs(Ab, {
                children: [
                  W.jsxs(Db, {
                    children: [
                      W.jsx(zb, {
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
                  W.jsx(Hb, { children: W.jsx(Sb, {}) }),
                ],
              }),
            }),
          ],
        }),
      }),
    });
  },
  Ub = "modulepreload",
  qb = function (r) {
    return "/" + r;
  },
  cp = {},
  xa = function (t, o, a) {
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
          if (((m = qb(m)), m in cp)) return;
          cp[m] = !0;
          const b = m.endsWith(".css"),
            v = b ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${m}"]${v}`)) return;
          const y = document.createElement("link");
          if (
            ((y.rel = b ? "stylesheet" : Ub),
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
function Wb(r) {
  return Cc(r);
}
function Cc(r) {
  return Array.isArray(r)
    ? Kb(r)
    : r instanceof RegExp
      ? r
      : typeof r == "object"
        ? Xb(r)
        : r;
}
function Kb(r) {
  let t = [];
  for (let o = 0, a = r.length; o < a; o++) t[o] = Cc(r[o]);
  return t;
}
function Xb(r) {
  let t = {};
  for (let o in r) t[o] = Cc(r[o]);
  return t;
}
function Hh(r, ...t) {
  return (
    t.forEach((o) => {
      for (let a in o) r[a] = o[a];
    }),
    r
  );
}
function zh(r) {
  const t = ~r.lastIndexOf("/") || ~r.lastIndexOf("\\");
  return t === 0
    ? r
    : ~t === r.length - 1
      ? zh(r.substring(0, r.length - 1))
      : r.substr(~t + 1);
}
var Pl = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g,
  Sa = class {
    static hasCaptures(r) {
      return r === null ? !1 : ((Pl.lastIndex = 0), Pl.test(r));
    }
    static replaceCaptures(r, t, o) {
      return r.replace(Pl, (a, i, c, d) => {
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
function Vh(r, t) {
  return r < t ? -1 : r > t ? 1 : 0;
}
function Gh(r, t) {
  if (r === null && t === null) return 0;
  if (!r) return -1;
  if (!t) return 1;
  let o = r.length,
    a = t.length;
  if (o === a) {
    for (let i = 0; i < o; i++) {
      let c = Vh(r[i], t[i]);
      if (c !== 0) return c;
    }
    return 0;
  }
  return o - a;
}
function up(r) {
  return !!(
    /^#[0-9a-f]{6}$/i.test(r) ||
    /^#[0-9a-f]{8}$/i.test(r) ||
    /^#[0-9a-f]{3}$/i.test(r) ||
    /^#[0-9a-f]{4}$/i.test(r)
  );
}
function Uh(r) {
  return r.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&");
}
var qh = class {
    constructor(r) {
      L(this, "cache", new Map());
      this.fn = r;
    }
    get(r) {
      if (this.cache.has(r)) return this.cache.get(r);
      const t = this.fn(r);
      return this.cache.set(r, t), t;
    }
  },
  Ka = class {
    constructor(r, t, o) {
      L(this, "_cachedMatchRoot", new qh((r) => this._root.match(r)));
      (this._colorMap = r), (this._defaults = t), (this._root = o);
    }
    static createFromRawTheme(r, t) {
      return this.createFromParsedTheme(Zb(r), t);
    }
    static createFromParsedTheme(r, t) {
      return e5(r, t);
    }
    getColorMap() {
      return this._colorMap.getColorMap();
    }
    getDefaults() {
      return this._defaults;
    }
    match(r) {
      if (r === null) return this._defaults;
      const t = r.scopeName,
        a = this._cachedMatchRoot
          .get(t)
          .find((i) => Qb(r.parent, i.parentScopes));
      return a ? new Wh(a.fontStyle, a.foreground, a.background) : null;
    }
  },
  El = class Na {
    constructor(t, o) {
      (this.parent = t), (this.scopeName = o);
    }
    static push(t, o) {
      for (const a of o) t = new Na(t, a);
      return t;
    }
    static from(...t) {
      let o = null;
      for (let a = 0; a < t.length; a++) o = new Na(o, t[a]);
      return o;
    }
    push(t) {
      return new Na(this, t);
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
function Qb(r, t) {
  if (t.length === 0) return !0;
  for (let o = 0; o < t.length; o++) {
    let a = t[o],
      i = !1;
    if (a === ">") {
      if (o === t.length - 1) return !1;
      (a = t[++o]), (i = !0);
    }
    for (; r && !Yb(r.scopeName, a); ) {
      if (i) return !1;
      r = r.parent;
    }
    if (!r) return !1;
    r = r.parent;
  }
  return !0;
}
function Yb(r, t) {
  return t === r || (r.startsWith(t) && r[t.length] === ".");
}
var Wh = class {
  constructor(r, t, o) {
    (this.fontStyle = r), (this.foregroundId = t), (this.backgroundId = o);
  }
};
function Zb(r) {
  if (!r) return [];
  if (!r.settings || !Array.isArray(r.settings)) return [];
  let t = r.settings,
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
      up(d.settings.foreground) &&
      (m = d.settings.foreground);
    let b = null;
    typeof d.settings.background == "string" &&
      up(d.settings.background) &&
      (b = d.settings.background);
    for (let v = 0, y = h.length; v < y; v++) {
      let S = h[v].trim().split(" "),
        P = S[S.length - 1],
        k = null;
      S.length > 1 && ((k = S.slice(0, S.length - 1)), k.reverse()),
        (o[a++] = new Jb(P, k, i, f, m, b));
    }
  }
  return o;
}
var Jb = class {
    constructor(r, t, o, a, i, c) {
      (this.scope = r),
        (this.parentScopes = t),
        (this.index = o),
        (this.fontStyle = a),
        (this.foreground = i),
        (this.background = c);
    }
  },
  mt = ((r) => (
    (r[(r.NotSet = -1)] = "NotSet"),
    (r[(r.None = 0)] = "None"),
    (r[(r.Italic = 1)] = "Italic"),
    (r[(r.Bold = 2)] = "Bold"),
    (r[(r.Underline = 4)] = "Underline"),
    (r[(r.Strikethrough = 8)] = "Strikethrough"),
    r
  ))(mt || {});
function e5(r, t) {
  r.sort((f, m) => {
    let b = Vh(f.scope, m.scope);
    return b !== 0 || ((b = Gh(f.parentScopes, m.parentScopes)), b !== 0)
      ? b
      : f.index - m.index;
  });
  let o = 0,
    a = "#000000",
    i = "#ffffff";
  for (; r.length >= 1 && r[0].scope === ""; ) {
    let f = r.shift();
    f.fontStyle !== -1 && (o = f.fontStyle),
      f.foreground !== null && (a = f.foreground),
      f.background !== null && (i = f.background);
  }
  let c = new t5(t),
    d = new Wh(o, c.getId(a), c.getId(i)),
    h = new r5(new Yl(0, null, -1, 0, 0), []);
  for (let f = 0, m = r.length; f < m; f++) {
    let b = r[f];
    h.insert(
      0,
      b.scope,
      b.parentScopes,
      b.fontStyle,
      c.getId(b.foreground),
      c.getId(b.background),
    );
  }
  return new Ka(c, d, h);
}
var t5 = class {
    constructor(r) {
      L(this, "_isFrozen");
      L(this, "_lastColorId");
      L(this, "_id2color");
      L(this, "_color2id");
      if (
        ((this._lastColorId = 0),
        (this._id2color = []),
        (this._color2id = Object.create(null)),
        Array.isArray(r))
      ) {
        this._isFrozen = !0;
        for (let t = 0, o = r.length; t < o; t++)
          (this._color2id[r[t]] = t), (this._id2color[t] = r[t]);
      } else this._isFrozen = !1;
    }
    getId(r) {
      if (r === null) return 0;
      r = r.toUpperCase();
      let t = this._color2id[r];
      if (t) return t;
      if (this._isFrozen) throw new Error(`Missing color in color map - ${r}`);
      return (
        (t = ++this._lastColorId),
        (this._color2id[r] = t),
        (this._id2color[t] = r),
        t
      );
    }
    getColorMap() {
      return this._id2color.slice(0);
    }
  },
  n5 = Object.freeze([]),
  Yl = class Kh {
    constructor(t, o, a, i, c) {
      L(this, "scopeDepth");
      L(this, "parentScopes");
      L(this, "fontStyle");
      L(this, "foreground");
      L(this, "background");
      (this.scopeDepth = t),
        (this.parentScopes = o || n5),
        (this.fontStyle = a),
        (this.foreground = i),
        (this.background = c);
    }
    clone() {
      return new Kh(
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
  r5 = class Zl {
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
      return o.sort(Zl._cmpBySpecificity), o;
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
        : ((b = new Zl(
            this._mainRule.clone(),
            Yl.cloneArr(this._rulesWithParentScopes),
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
        if (Gh(f.parentScopes, o) === 0) {
          f.acceptOverwrite(t, a, i, c);
          return;
        }
      }
      a === -1 && (a = this._mainRule.fontStyle),
        i === 0 && (i = this._mainRule.foreground),
        c === 0 && (c = this._mainRule.background),
        this._rulesWithParentScopes.push(new Yl(t, o, a, i, c));
    }
  },
  Q0 = class zt {
    static toBinaryStr(t) {
      return t.toString(2).padStart(32, "0");
    }
    static print(t) {
      const o = zt.getLanguageId(t),
        a = zt.getTokenType(t),
        i = zt.getFontStyle(t),
        c = zt.getForeground(t),
        d = zt.getBackground(t);
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
      let f = zt.getLanguageId(t),
        m = zt.getTokenType(t),
        b = zt.containsBalancedBrackets(t) ? 1 : 0,
        v = zt.getFontStyle(t),
        y = zt.getForeground(t),
        x = zt.getBackground(t);
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
function Xa(r, t) {
  const o = [],
    a = o5(r);
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
    if (dp(i)) {
      const f = [];
      do f.push(i), (i = a.next());
      while (dp(i));
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
function dp(r) {
  return !!r && !!r.match(/[\w\.:]+/);
}
function o5(r) {
  let t = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g,
    o = t.exec(r);
  return {
    next: () => {
      if (!o) return null;
      const a = o[0];
      return (o = t.exec(r)), a;
    },
  };
}
function Xh(r) {
  typeof r.dispose == "function" && r.dispose();
}
var Yr = class {
    constructor(r) {
      this.scopeName = r;
    }
    toKey() {
      return this.scopeName;
    }
  },
  a5 = class {
    constructor(r, t) {
      (this.scopeName = r), (this.ruleName = t);
    }
    toKey() {
      return `${this.scopeName}#${this.ruleName}`;
    }
  },
  i5 = class {
    constructor() {
      L(this, "_references", []);
      L(this, "_seenReferenceKeys", new Set());
      L(this, "visitedRule", new Set());
    }
    get references() {
      return this._references;
    }
    add(r) {
      const t = r.toKey();
      this._seenReferenceKeys.has(t) ||
        (this._seenReferenceKeys.add(t), this._references.push(r));
    }
  },
  s5 = class {
    constructor(r, t) {
      L(this, "seenFullScopeRequests", new Set());
      L(this, "seenPartialScopeRequests", new Set());
      L(this, "Q");
      (this.repo = r),
        (this.initialScopeName = t),
        this.seenFullScopeRequests.add(this.initialScopeName),
        (this.Q = [new Yr(this.initialScopeName)]);
    }
    processQueue() {
      const r = this.Q;
      this.Q = [];
      const t = new i5();
      for (const o of r) l5(o, this.initialScopeName, this.repo, t);
      for (const o of t.references)
        if (o instanceof Yr) {
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
function l5(r, t, o, a) {
  const i = o.lookup(r.scopeName);
  if (!i) {
    if (r.scopeName === t) throw new Error(`No grammar provided for <${t}>`);
    return;
  }
  const c = o.lookup(t);
  r instanceof Yr
    ? La({ baseGrammar: c, selfGrammar: i }, a)
    : Jl(
        r.ruleName,
        { baseGrammar: c, selfGrammar: i, repository: i.repository },
        a,
      );
  const d = o.injections(r.scopeName);
  if (d) for (const h of d) a.add(new Yr(h));
}
function Jl(r, t, o) {
  if (t.repository && t.repository[r]) {
    const a = t.repository[r];
    Qa([a], t, o);
  }
}
function La(r, t) {
  r.selfGrammar.patterns &&
    Array.isArray(r.selfGrammar.patterns) &&
    Qa(
      r.selfGrammar.patterns,
      { ...r, repository: r.selfGrammar.repository },
      t,
    ),
    r.selfGrammar.injections &&
      Qa(
        Object.values(r.selfGrammar.injections),
        { ...r, repository: r.selfGrammar.repository },
        t,
      );
}
function Qa(r, t, o) {
  for (const a of r) {
    if (o.visitedRule.has(a)) continue;
    o.visitedRule.add(a);
    const i = a.repository ? Hh({}, t.repository, a.repository) : t.repository;
    Array.isArray(a.patterns) && Qa(a.patterns, { ...t, repository: i }, o);
    const c = a.include;
    if (!c) continue;
    const d = Qh(c);
    switch (d.kind) {
      case 0:
        La({ ...t, selfGrammar: t.baseGrammar }, o);
        break;
      case 1:
        La(t, o);
        break;
      case 2:
        Jl(d.ruleName, { ...t, repository: i }, o);
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
          d.kind === 4 ? Jl(d.ruleName, f, o) : La(f, o);
        } else
          d.kind === 4
            ? o.add(new a5(d.scopeName, d.ruleName))
            : o.add(new Yr(d.scopeName));
        break;
    }
  }
}
var c5 = class {
    constructor() {
      L(this, "kind", 0);
    }
  },
  u5 = class {
    constructor() {
      L(this, "kind", 1);
    }
  },
  d5 = class {
    constructor(r) {
      L(this, "kind", 2);
      this.ruleName = r;
    }
  },
  f5 = class {
    constructor(r) {
      L(this, "kind", 3);
      this.scopeName = r;
    }
  },
  p5 = class {
    constructor(r, t) {
      L(this, "kind", 4);
      (this.scopeName = r), (this.ruleName = t);
    }
  };
function Qh(r) {
  if (r === "$base") return new c5();
  if (r === "$self") return new u5();
  const t = r.indexOf("#");
  if (t === -1) return new f5(r);
  if (t === 0) return new d5(r.substring(1));
  {
    const o = r.substring(0, t),
      a = r.substring(t + 1);
    return new p5(o, a);
  }
}
var h5 = /\\(\d+)/,
  fp = /\\(\d+)/g,
  m5 = -1,
  Yh = -2;
var ao = class {
    constructor(r, t, o, a) {
      L(this, "$location");
      L(this, "id");
      L(this, "_nameIsCapturing");
      L(this, "_name");
      L(this, "_contentNameIsCapturing");
      L(this, "_contentName");
      (this.$location = r),
        (this.id = t),
        (this._name = o || null),
        (this._nameIsCapturing = Sa.hasCaptures(this._name)),
        (this._contentName = a || null),
        (this._contentNameIsCapturing = Sa.hasCaptures(this._contentName));
    }
    get debugName() {
      const r = this.$location
        ? `${zh(this.$location.filename)}:${this.$location.line}`
        : "unknown";
      return `${this.constructor.name}#${this.id} @ ${r}`;
    }
    getName(r, t) {
      return !this._nameIsCapturing ||
        this._name === null ||
        r === null ||
        t === null
        ? this._name
        : Sa.replaceCaptures(this._name, r, t);
    }
    getContentName(r, t) {
      return !this._contentNameIsCapturing || this._contentName === null
        ? this._contentName
        : Sa.replaceCaptures(this._contentName, r, t);
    }
  },
  g5 = class extends ao {
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
  b5 = class extends ao {
    constructor(t, o, a, i, c) {
      super(t, o, a, null);
      L(this, "_match");
      L(this, "captures");
      L(this, "_cachedCompiledPatterns");
      (this._match = new Zr(i, this.id)),
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
          ((this._cachedCompiledPatterns = new Jr()),
          this.collectPatterns(t, this._cachedCompiledPatterns)),
        this._cachedCompiledPatterns
      );
    }
  },
  pp = class extends ao {
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
          ((this._cachedCompiledPatterns = new Jr()),
          this.collectPatterns(t, this._cachedCompiledPatterns)),
        this._cachedCompiledPatterns
      );
    }
  },
  ec = class extends ao {
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
      (this._begin = new Zr(c, this.id)),
        (this.beginCaptures = d),
        (this._end = new Zr(h || "￿", -1)),
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
        this._cachedCompiledPatterns = new Jr();
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
  Ya = class extends ao {
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
      (this._begin = new Zr(c, this.id)),
        (this.beginCaptures = d),
        (this.whileCaptures = f),
        (this._while = new Zr(h, Yh)),
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
        this._cachedCompiledPatterns = new Jr();
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
          ((this._cachedCompiledWhilePatterns = new Jr()),
          this._cachedCompiledWhilePatterns.push(
            this._while.hasBackReferences ? this._while.clone() : this._while,
          )),
        this._while.hasBackReferences &&
          this._cachedCompiledWhilePatterns.setSource(0, o || "￿"),
        this._cachedCompiledWhilePatterns
      );
    }
  },
  Zh = class pt {
    static createCaptureRule(t, o, a, i, c) {
      return t.registerRule((d) => new g5(o, d, a, i, c));
    }
    static getCompiledRuleId(t, o, a) {
      return (
        t.id ||
          o.registerRule((i) => {
            if (((t.id = i), t.match))
              return new b5(
                t.$vscodeTextmateLocation,
                t.id,
                t.name,
                t.match,
                pt._compileCaptures(t.captures, o, a),
              );
            if (typeof t.begin > "u") {
              t.repository && (a = Hh({}, a, t.repository));
              let c = t.patterns;
              return (
                typeof c > "u" && t.include && (c = [{ include: t.include }]),
                new pp(
                  t.$vscodeTextmateLocation,
                  t.id,
                  t.name,
                  t.contentName,
                  pt._compilePatterns(c, o, a),
                )
              );
            }
            return t.while
              ? new Ya(
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
              : new ec(
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
            const m = Qh(h.include);
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
              ((m instanceof pp || m instanceof ec || m instanceof Ya) &&
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
  Zr = class Jh {
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
          ? (this.hasBackReferences = h5.test(this.source))
          : (this.hasBackReferences = !1);
    }
    clone() {
      return new Jh(this.source, this.ruleId);
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
        (fp.lastIndex = 0),
        this.source.replace(fp, (i, c) => Uh(a[parseInt(c, 10)] || ""))
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
  Jr = class {
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
    push(r) {
      this._items.push(r), (this._hasAnchors = this._hasAnchors || r.hasAnchor);
    }
    unshift(r) {
      this._items.unshift(r),
        (this._hasAnchors = this._hasAnchors || r.hasAnchor);
    }
    length() {
      return this._items.length;
    }
    setSource(r, t) {
      this._items[r].source !== t &&
        (this._disposeCaches(), this._items[r].setSource(t));
    }
    compile(r) {
      if (!this._cached) {
        let t = this._items.map((o) => o.source);
        this._cached = new hp(
          r,
          t,
          this._items.map((o) => o.ruleId),
        );
      }
      return this._cached;
    }
    compileAG(r, t, o) {
      return this._hasAnchors
        ? t
          ? o
            ? (this._anchorCache.A1_G1 ||
                (this._anchorCache.A1_G1 = this._resolveAnchors(r, t, o)),
              this._anchorCache.A1_G1)
            : (this._anchorCache.A1_G0 ||
                (this._anchorCache.A1_G0 = this._resolveAnchors(r, t, o)),
              this._anchorCache.A1_G0)
          : o
            ? (this._anchorCache.A0_G1 ||
                (this._anchorCache.A0_G1 = this._resolveAnchors(r, t, o)),
              this._anchorCache.A0_G1)
            : (this._anchorCache.A0_G0 ||
                (this._anchorCache.A0_G0 = this._resolveAnchors(r, t, o)),
              this._anchorCache.A0_G0)
        : this.compile(r);
    }
    _resolveAnchors(r, t, o) {
      let a = this._items.map((i) => i.resolveAnchors(t, o));
      return new hp(
        r,
        a,
        this._items.map((i) => i.ruleId),
      );
    }
  },
  hp = class {
    constructor(r, t, o) {
      L(this, "scanner");
      (this.regExps = t),
        (this.rules = o),
        (this.scanner = r.createOnigScanner(t));
    }
    dispose() {
      typeof this.scanner.dispose == "function" && this.scanner.dispose();
    }
    toString() {
      const r = [];
      for (let t = 0, o = this.rules.length; t < o; t++)
        r.push("   - " + this.rules[t] + ": " + this.regExps[t]);
      return r.join(`
`);
    }
    findNextMatchSync(r, t, o) {
      const a = this.scanner.findNextMatchSync(r, t, o);
      return a
        ? { ruleId: this.rules[a.index], captureIndices: a.captureIndices }
        : null;
    }
  },
  Tl = class {
    constructor(r, t) {
      (this.languageId = r), (this.tokenType = t);
    }
  },
  yn,
  v5 =
    ((yn = class {
      constructor(t, o) {
        L(this, "_defaultAttributes");
        L(this, "_embeddedLanguagesMatcher");
        L(
          this,
          "_getBasicScopeAttributes",
          new qh((t) => {
            const o = this._scopeToLanguage(t),
              a = this._toStandardTokenType(t);
            return new Tl(o, a);
          }),
        );
        (this._defaultAttributes = new Tl(t, 8)),
          (this._embeddedLanguagesMatcher = new y5(Object.entries(o || {})));
      }
      getDefaultAttributes() {
        return this._defaultAttributes;
      }
      getBasicScopeAttributes(t) {
        return t === null
          ? yn._NULL_SCOPE_METADATA
          : this._getBasicScopeAttributes.get(t);
      }
      _scopeToLanguage(t) {
        return this._embeddedLanguagesMatcher.match(t) || 0;
      }
      _toStandardTokenType(t) {
        const o = t.match(yn.STANDARD_TOKEN_TYPE_REGEXP);
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
    L(yn, "_NULL_SCOPE_METADATA", new Tl(0, 0)),
    L(
      yn,
      "STANDARD_TOKEN_TYPE_REGEXP",
      /\b(comment|string|regex|meta\.embedded)\b/,
    ),
    yn),
  y5 = class {
    constructor(r) {
      L(this, "values");
      L(this, "scopesRegExp");
      if (r.length === 0) (this.values = null), (this.scopesRegExp = null);
      else {
        this.values = new Map(r);
        const t = r.map(([o, a]) => Uh(o));
        t.sort(),
          t.reverse(),
          (this.scopesRegExp = new RegExp(`^((${t.join(")|(")}))($|\\.)`, ""));
      }
    }
    match(r) {
      if (!this.scopesRegExp) return;
      const t = r.match(this.scopesRegExp);
      if (t) return this.values.get(t[1]);
    }
  },
  mp = class {
    constructor(r, t) {
      (this.stack = r), (this.stoppedEarly = t);
    }
  };
function em(r, t, o, a, i, c, d, h) {
  const f = t.content.length;
  let m = !1,
    b = -1;
  if (d) {
    const x = _5(r, t, o, a, i, c);
    (i = x.stack), (a = x.linePos), (o = x.isFirstLine), (b = x.anchorPosition);
  }
  const v = Date.now();
  for (; !m; ) {
    if (h !== 0 && Date.now() - v > h) return new mp(i, !0);
    y();
  }
  return new mp(i, !1);
  function y() {
    const x = x5(r, t, o, a, i, b);
    if (!x) {
      c.produce(i, f), (m = !0);
      return;
    }
    const S = x.captureIndices,
      P = x.matchedRuleId,
      k = S && S.length > 0 ? S[0].end > a : !1;
    if (P === m5) {
      const O = i.getRule(r);
      c.produce(i, S[0].start),
        (i = i.withContentNameScopesList(i.nameScopesList)),
        qr(r, t, o, i, c, O.endCaptures, S),
        c.produce(i, S[0].end);
      const T = i;
      if (
        ((i = i.parent), (b = T.getAnchorPos()), !k && T.getEnterPos() === a)
      ) {
        (i = T), c.produce(i, f), (m = !0);
        return;
      }
    } else {
      const O = r.getRule(P);
      c.produce(i, S[0].start);
      const T = i,
        I = O.getName(t.content, S),
        N = i.contentNameScopesList.pushAttributed(I, r);
      if (
        ((i = i.push(P, a, b, S[0].end === f, null, N, N)), O instanceof ec)
      ) {
        const F = O;
        qr(r, t, o, i, c, F.beginCaptures, S),
          c.produce(i, S[0].end),
          (b = S[0].end);
        const $ = F.getContentName(t.content, S),
          M = N.pushAttributed($, r);
        if (
          ((i = i.withContentNameScopesList(M)),
          F.endHasBackReferences &&
            (i = i.withEndRule(
              F.getEndWithResolvedBackReferences(t.content, S),
            )),
          !k && T.hasSameRuleAs(i))
        ) {
          (i = i.pop()), c.produce(i, f), (m = !0);
          return;
        }
      } else if (O instanceof Ya) {
        const F = O;
        qr(r, t, o, i, c, F.beginCaptures, S),
          c.produce(i, S[0].end),
          (b = S[0].end);
        const $ = F.getContentName(t.content, S),
          M = N.pushAttributed($, r);
        if (
          ((i = i.withContentNameScopesList(M)),
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
        (qr(r, t, o, i, c, O.captures, S),
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
function _5(r, t, o, a, i, c) {
  let d = i.beginRuleCapturedEOL ? 0 : -1;
  const h = [];
  for (let f = i; f; f = f.pop()) {
    const m = f.getRule(r);
    m instanceof Ya && h.push({ rule: m, stack: f });
  }
  for (let f = h.pop(); f; f = h.pop()) {
    const { ruleScanner: m, findOptions: b } = w5(
        f.rule,
        r,
        f.stack.endRule,
        o,
        a === d,
      ),
      v = m.findNextMatchSync(t, a, b);
    if (v) {
      if (v.ruleId !== Yh) {
        i = f.stack.pop();
        break;
      }
      v.captureIndices &&
        v.captureIndices.length &&
        (c.produce(f.stack, v.captureIndices[0].start),
        qr(r, t, o, f.stack, c, f.rule.whileCaptures, v.captureIndices),
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
function x5(r, t, o, a, i, c) {
  const d = S5(r, t, o, a, i, c),
    h = r.getInjections();
  if (h.length === 0) return d;
  const f = C5(h, r, t, o, a, i, c);
  if (!f) return d;
  if (!d) return f;
  const m = d.captureIndices[0].start,
    b = f.captureIndices[0].start;
  return b < m || (f.priorityMatch && b === m) ? f : d;
}
function S5(r, t, o, a, i, c) {
  const d = i.getRule(r),
    { ruleScanner: h, findOptions: f } = tm(d, r, i.endRule, o, a === c),
    m = h.findNextMatchSync(t, a, f);
  return m
    ? { captureIndices: m.captureIndices, matchedRuleId: m.ruleId }
    : null;
}
function C5(r, t, o, a, i, c, d) {
  let h = Number.MAX_VALUE,
    f = null,
    m,
    b = 0;
  const v = c.contentNameScopesList.getScopeNames();
  for (let y = 0, x = r.length; y < x; y++) {
    const S = r[y];
    if (!S.matcher(v)) continue;
    const P = t.getRule(S.ruleId),
      { ruleScanner: k, findOptions: O } = tm(P, t, null, a, i === d),
      T = k.findNextMatchSync(o, i, O);
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
function tm(r, t, o, a, i) {
  return { ruleScanner: r.compileAG(t, o, a, i), findOptions: 0 };
}
function w5(r, t, o, a, i) {
  return { ruleScanner: r.compileWhileAG(t, o, a, i), findOptions: 0 };
}
function qr(r, t, o, a, i, c, d) {
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
      const P = y.getName(h, d),
        k = a.contentNameScopesList.pushAttributed(P, r),
        O = y.getContentName(h, d),
        T = k.pushAttributed(O, r),
        I = a.push(y.retokenizeCapturedWithRuleId, x.start, -1, !1, null, k, T),
        N = r.createOnigString(h.substring(0, x.end));
      em(r, N, o && x.start === 0, x.start, I, i, !1, 0), Xh(N);
      continue;
    }
    const S = y.getName(h, d);
    if (S !== null) {
      const k = (
        m.length > 0 ? m[m.length - 1].scopes : a.contentNameScopesList
      ).pushAttributed(S, r);
      m.push(new k5(k, x.end));
    }
  }
  for (; m.length > 0; )
    i.produceFromScopes(m[m.length - 1].scopes, m[m.length - 1].endPos),
      m.pop();
}
var k5 = class {
  constructor(r, t) {
    L(this, "scopes");
    L(this, "endPos");
    (this.scopes = r), (this.endPos = t);
  }
};
function O5(r, t, o, a, i, c, d, h) {
  return new E5(r, t, o, a, i, c, d, h);
}
function gp(r, t, o, a, i) {
  const c = Xa(t, Za),
    d = Zh.getCompiledRuleId(o, a, i.repository);
  for (const h of c)
    r.push({
      debugSelector: t,
      matcher: h.matcher,
      ruleId: d,
      grammar: i,
      priority: h.priority,
    });
}
function Za(r, t) {
  if (t.length < r.length) return !1;
  let o = 0;
  return r.every((a) => {
    for (let i = o; i < t.length; i++) if (P5(t[i], a)) return (o = i + 1), !0;
    return !1;
  });
}
function P5(r, t) {
  if (!r) return !1;
  if (r === t) return !0;
  const o = t.length;
  return r.length > o && r.substr(0, o) === t && r[o] === ".";
}
var E5 = class {
  constructor(r, t, o, a, i, c, d, h) {
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
      ((this._rootScopeName = r),
      (this.balancedBracketSelectors = c),
      (this._onigLib = h),
      (this._basicScopeAttributesProvider = new v5(o, a)),
      (this._rootId = -1),
      (this._lastRuleId = 0),
      (this._ruleId2desc = [null]),
      (this._includedGrammars = {}),
      (this._grammarRepository = d),
      (this._grammar = bp(t, null)),
      (this._injections = null),
      (this._tokenTypeMatchers = []),
      i)
    )
      for (const f of Object.keys(i)) {
        const m = Xa(f, Za);
        for (const b of m)
          this._tokenTypeMatchers.push({ matcher: b.matcher, type: i[f] });
      }
  }
  get themeProvider() {
    return this._grammarRepository;
  }
  dispose() {
    for (const r of this._ruleId2desc) r && r.dispose();
  }
  createOnigScanner(r) {
    return this._onigLib.createOnigScanner(r);
  }
  createOnigString(r) {
    return this._onigLib.createOnigString(r);
  }
  getMetadataForScope(r) {
    return this._basicScopeAttributesProvider.getBasicScopeAttributes(r);
  }
  _collectInjections() {
    const r = {
        lookup: (i) =>
          i === this._rootScopeName
            ? this._grammar
            : this.getExternalGrammar(i),
        injections: (i) => this._grammarRepository.injections(i),
      },
      t = [],
      o = this._rootScopeName,
      a = r.lookup(o);
    if (a) {
      const i = a.injections;
      if (i) for (let d in i) gp(t, d, i[d], this, a);
      const c = this._grammarRepository.injections(o);
      c &&
        c.forEach((d) => {
          const h = this.getExternalGrammar(d);
          if (h) {
            const f = h.injectionSelector;
            f && gp(t, f, h, this, h);
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
  registerRule(r) {
    const t = ++this._lastRuleId,
      o = r(t);
    return (this._ruleId2desc[t] = o), o;
  }
  getRule(r) {
    return this._ruleId2desc[r];
  }
  getExternalGrammar(r, t) {
    if (this._includedGrammars[r]) return this._includedGrammars[r];
    if (this._grammarRepository) {
      const o = this._grammarRepository.lookup(r);
      if (o)
        return (
          (this._includedGrammars[r] = bp(o, t && t.$base)),
          this._includedGrammars[r]
        );
    }
  }
  tokenizeLine(r, t, o = 0) {
    const a = this._tokenize(r, t, !1, o);
    return {
      tokens: a.lineTokens.getResult(a.ruleStack, a.lineLength),
      ruleStack: a.ruleStack,
      stoppedEarly: a.stoppedEarly,
    };
  }
  tokenizeLine2(r, t, o = 0) {
    const a = this._tokenize(r, t, !0, o);
    return {
      tokens: a.lineTokens.getBinaryResult(a.ruleStack, a.lineLength),
      ruleStack: a.ruleStack,
      stoppedEarly: a.stoppedEarly,
    };
  }
  _tokenize(r, t, o, a) {
    this._rootId === -1 &&
      ((this._rootId = Zh.getCompiledRuleId(
        this._grammar.repository.$self,
        this,
        this._grammar.repository,
      )),
      this.getInjections());
    let i;
    if (!t || t === tc.NULL) {
      i = !0;
      const m = this._basicScopeAttributesProvider.getDefaultAttributes(),
        b = this.themeProvider.getDefaults(),
        v = Q0.set(
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
        ? (x = Xr.createRootAndLookUpScopeName(y, v, this))
        : (x = Xr.createRoot("unknown", v)),
        (t = new tc(null, this._rootId, -1, -1, !1, null, x, x));
    } else (i = !1), t.reset();
    r =
      r +
      `
`;
    const c = this.createOnigString(r),
      d = c.content.length,
      h = new F5(o, r, this._tokenTypeMatchers, this.balancedBracketSelectors),
      f = em(this, c, i, 0, t, h, !0, a);
    return (
      Xh(c),
      {
        lineLength: d,
        lineTokens: h,
        ruleStack: f.stack,
        stoppedEarly: f.stoppedEarly,
      }
    );
  }
};
function bp(r, t) {
  return (
    (r = Wb(r)),
    (r.repository = r.repository || {}),
    (r.repository.$self = {
      $vscodeTextmateLocation: r.$vscodeTextmateLocation,
      patterns: r.patterns,
      name: r.scopeName,
    }),
    (r.repository.$base = t || r.repository.$self),
    r
  );
}
var Xr = class on {
    constructor(t, o, a) {
      (this.parent = t), (this.scopePath = o), (this.tokenAttributes = a);
    }
    static fromExtension(t, o) {
      let a = t,
        i = (t == null ? void 0 : t.scopePath) ?? null;
      for (const c of o)
        (i = El.push(i, c.scopeNames)),
          (a = new on(a, i, c.encodedTokenAttributes));
      return a;
    }
    static createRoot(t, o) {
      return new on(null, new El(null, t), o);
    }
    static createRootAndLookUpScopeName(t, o, a) {
      const i = a.getMetadataForScope(t),
        c = new El(null, t),
        d = a.themeProvider.themeMatch(c),
        h = on.mergeAttributes(o, i, d);
      return new on(null, c, h);
    }
    get scopeName() {
      return this.scopePath.scopeName;
    }
    toString() {
      return this.getScopeNames().join(" ");
    }
    equals(t) {
      return on.equals(this, t);
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
        Q0.set(t, o.languageId, o.tokenType, null, i, c, d)
      );
    }
    pushAttributed(t, o) {
      if (t === null) return this;
      if (t.indexOf(" ") === -1) return on._pushAttributed(this, t, o);
      const a = t.split(/ /g);
      let i = this;
      for (const c of a) i = on._pushAttributed(i, c, o);
      return i;
    }
    static _pushAttributed(t, o, a) {
      const i = a.getMetadataForScope(o),
        c = t.scopePath.push(o),
        d = a.themeProvider.themeMatch(c),
        h = on.mergeAttributes(t.tokenAttributes, i, d);
      return new on(t, c, h);
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
  Vt,
  tc =
    ((Vt = class {
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
        return t === null ? !1 : Vt._equals(this, t);
      }
      static _equals(t, o) {
        return t === o
          ? !0
          : this._structuralEquals(t, o)
            ? Xr.equals(t.contentNameScopesList, o.contentNameScopesList)
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
        Vt._reset(this);
      }
      pop() {
        return this.parent;
      }
      safePop() {
        return this.parent ? this.parent : this;
      }
      push(t, o, a, i, c, d, h) {
        return new Vt(this, t, o, a, i, c, d, h);
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
          : new Vt(
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
        const a = Xr.fromExtension(
          (t == null ? void 0 : t.nameScopesList) ?? null,
          o.nameScopesList,
        );
        return new Vt(
          t,
          o.ruleId,
          o.enterPos ?? -1,
          o.anchorPos ?? -1,
          o.beginRuleCapturedEOL,
          o.endRule,
          a,
          Xr.fromExtension(a, o.contentNameScopesList),
        );
      }
    }),
    L(Vt, "NULL", new Vt(null, 0, 0, 0, !1, null, null, null)),
    Vt),
  T5 = class {
    constructor(r, t) {
      L(this, "balancedBracketScopes");
      L(this, "unbalancedBracketScopes");
      L(this, "allowAny", !1);
      (this.balancedBracketScopes = r.flatMap((o) =>
        o === "*"
          ? ((this.allowAny = !0), [])
          : Xa(o, Za).map((a) => a.matcher),
      )),
        (this.unbalancedBracketScopes = t.flatMap((o) =>
          Xa(o, Za).map((a) => a.matcher),
        ));
    }
    get matchesAlways() {
      return this.allowAny && this.unbalancedBracketScopes.length === 0;
    }
    get matchesNever() {
      return this.balancedBracketScopes.length === 0 && !this.allowAny;
    }
    match(r) {
      for (const t of this.unbalancedBracketScopes) if (t(r)) return !1;
      for (const t of this.balancedBracketScopes) if (t(r)) return !0;
      return this.allowAny;
    }
  },
  F5 = class {
    constructor(r, t, o, a) {
      L(this, "_emitBinaryTokens");
      L(this, "_lineText");
      L(this, "_tokens");
      L(this, "_binaryTokens");
      L(this, "_lastTokenEndIndex");
      L(this, "_tokenTypeOverrides");
      (this.balancedBracketSelectors = a),
        (this._emitBinaryTokens = r),
        (this._tokenTypeOverrides = o),
        (this._lineText = null),
        (this._tokens = []),
        (this._binaryTokens = []),
        (this._lastTokenEndIndex = 0);
    }
    produce(r, t) {
      this.produceFromScopes(r.contentNameScopesList, t);
    }
    produceFromScopes(r, t) {
      var a;
      if (this._lastTokenEndIndex >= t) return;
      if (this._emitBinaryTokens) {
        let i = (r == null ? void 0 : r.tokenAttributes) ?? 0,
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
          const d = (r == null ? void 0 : r.getScopeNames()) ?? [];
          for (const h of this._tokenTypeOverrides)
            h.matcher(d) && (i = Q0.set(i, 0, h.type, null, -1, 0, 0));
          this.balancedBracketSelectors &&
            (c = this.balancedBracketSelectors.match(d));
        }
        if (
          (c && (i = Q0.set(i, 0, 8, c, -1, 0, 0)),
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
      const o = (r == null ? void 0 : r.getScopeNames()) ?? [];
      this._tokens.push({
        startIndex: this._lastTokenEndIndex,
        endIndex: t,
        scopes: o,
      }),
        (this._lastTokenEndIndex = t);
    }
    getResult(r, t) {
      return (
        this._tokens.length > 0 &&
          this._tokens[this._tokens.length - 1].startIndex === t - 1 &&
          this._tokens.pop(),
        this._tokens.length === 0 &&
          ((this._lastTokenEndIndex = -1),
          this.produce(r, t),
          (this._tokens[this._tokens.length - 1].startIndex = 0)),
        this._tokens
      );
    }
    getBinaryResult(r, t) {
      this._binaryTokens.length > 0 &&
        this._binaryTokens[this._binaryTokens.length - 2] === t - 1 &&
        (this._binaryTokens.pop(), this._binaryTokens.pop()),
        this._binaryTokens.length === 0 &&
          ((this._lastTokenEndIndex = -1),
          this.produce(r, t),
          (this._binaryTokens[this._binaryTokens.length - 2] = 0));
      const o = new Uint32Array(this._binaryTokens.length);
      for (let a = 0, i = this._binaryTokens.length; a < i; a++)
        o[a] = this._binaryTokens[a];
      return o;
    }
  },
  j5 = class {
    constructor(r, t) {
      L(this, "_grammars", new Map());
      L(this, "_rawGrammars", new Map());
      L(this, "_injectionGrammars", new Map());
      L(this, "_theme");
      (this._onigLib = t), (this._theme = r);
    }
    dispose() {
      for (const r of this._grammars.values()) r.dispose();
    }
    setTheme(r) {
      this._theme = r;
    }
    getColorMap() {
      return this._theme.getColorMap();
    }
    addGrammar(r, t) {
      this._rawGrammars.set(r.scopeName, r),
        t && this._injectionGrammars.set(r.scopeName, t);
    }
    lookup(r) {
      return this._rawGrammars.get(r);
    }
    injections(r) {
      return this._injectionGrammars.get(r);
    }
    getDefaults() {
      return this._theme.getDefaults();
    }
    themeMatch(r) {
      return this._theme.match(r);
    }
    grammarForScopeName(r, t, o, a, i) {
      if (!this._grammars.has(r)) {
        let c = this._rawGrammars.get(r);
        if (!c) return null;
        this._grammars.set(r, O5(r, c, t, o, a, i, this, this._onigLib));
      }
      return this._grammars.get(r);
    }
  },
  R5 = class {
    constructor(t) {
      L(this, "_options");
      L(this, "_syncRegistry");
      L(this, "_ensureGrammarCache");
      (this._options = t),
        (this._syncRegistry = new j5(
          Ka.createFromRawTheme(t.theme, t.colorMap),
          t.onigLib,
        )),
        (this._ensureGrammarCache = new Map());
    }
    dispose() {
      this._syncRegistry.dispose();
    }
    setTheme(t, o) {
      this._syncRegistry.setTheme(Ka.createFromRawTheme(t, o));
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
        new T5(
          a.balancedBracketSelectors || [],
          a.unbalancedBracketSelectors || [],
        ),
      );
    }
    loadGrammar(t) {
      return this._loadGrammar(t, 0, null, null, null);
    }
    _loadGrammar(t, o, a, i, c) {
      const d = new s5(this._syncRegistry, t);
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
  nc = tc.NULL;
const I5 = [
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
class io {
  constructor(t, o, a) {
    (this.normal = o), (this.property = t), a && (this.space = a);
  }
}
io.prototype.normal = {};
io.prototype.property = {};
io.prototype.space = void 0;
function nm(r, t) {
  const o = {},
    a = {};
  for (const i of r) Object.assign(o, i.property), Object.assign(a, i.normal);
  return new io(o, a, t);
}
function rc(r) {
  return r.toLowerCase();
}
class Pt {
  constructor(t, o) {
    (this.attribute = o), (this.property = t);
  }
}
Pt.prototype.attribute = "";
Pt.prototype.booleanish = !1;
Pt.prototype.boolean = !1;
Pt.prototype.commaOrSpaceSeparated = !1;
Pt.prototype.commaSeparated = !1;
Pt.prototype.defined = !1;
Pt.prototype.mustUseProperty = !1;
Pt.prototype.number = !1;
Pt.prototype.overloadedBoolean = !1;
Pt.prototype.property = "";
Pt.prototype.spaceSeparated = !1;
Pt.prototype.space = void 0;
let B5 = 0;
const ve = d0(),
  Xe = d0(),
  oc = d0(),
  G = d0(),
  Me = d0(),
  V0 = d0(),
  Rt = d0();
function d0() {
  return 2 ** ++B5;
}
const ac = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: ve,
        booleanish: Xe,
        commaOrSpaceSeparated: Rt,
        commaSeparated: V0,
        number: G,
        overloadedBoolean: oc,
        spaceSeparated: Me,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Fl = Object.keys(ac);
class wc extends Pt {
  constructor(t, o, a, i) {
    let c = -1;
    if ((super(t, o), vp(this, "space", i), typeof a == "number"))
      for (; ++c < Fl.length; ) {
        const d = Fl[c];
        vp(this, Fl[c], (a & ac[d]) === ac[d]);
      }
  }
}
wc.prototype.defined = !0;
function vp(r, t, o) {
  o && (r[t] = o);
}
function J0(r) {
  const t = {},
    o = {};
  for (const [a, i] of Object.entries(r.properties)) {
    const c = new wc(a, r.transform(r.attributes || {}, a), i, r.space);
    r.mustUseProperty &&
      r.mustUseProperty.includes(a) &&
      (c.mustUseProperty = !0),
      (t[a] = c),
      (o[rc(a)] = a),
      (o[rc(c.attribute)] = a);
  }
  return new io(t, o, r.space);
}
const rm = J0({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Xe,
    ariaAutoComplete: null,
    ariaBusy: Xe,
    ariaChecked: Xe,
    ariaColCount: G,
    ariaColIndex: G,
    ariaColSpan: G,
    ariaControls: Me,
    ariaCurrent: null,
    ariaDescribedBy: Me,
    ariaDetails: null,
    ariaDisabled: Xe,
    ariaDropEffect: Me,
    ariaErrorMessage: null,
    ariaExpanded: Xe,
    ariaFlowTo: Me,
    ariaGrabbed: Xe,
    ariaHasPopup: null,
    ariaHidden: Xe,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Me,
    ariaLevel: G,
    ariaLive: null,
    ariaModal: Xe,
    ariaMultiLine: Xe,
    ariaMultiSelectable: Xe,
    ariaOrientation: null,
    ariaOwns: Me,
    ariaPlaceholder: null,
    ariaPosInSet: G,
    ariaPressed: Xe,
    ariaReadOnly: Xe,
    ariaRelevant: null,
    ariaRequired: Xe,
    ariaRoleDescription: Me,
    ariaRowCount: G,
    ariaRowIndex: G,
    ariaRowSpan: G,
    ariaSelected: Xe,
    ariaSetSize: G,
    ariaSort: null,
    ariaValueMax: G,
    ariaValueMin: G,
    ariaValueNow: G,
    ariaValueText: null,
    role: null,
  },
  transform(r, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  },
});
function om(r, t) {
  return t in r ? r[t] : t;
}
function am(r, t) {
  return om(r, t.toLowerCase());
}
const M5 = J0({
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv",
    },
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      abbr: null,
      accept: V0,
      acceptCharset: Me,
      accessKey: Me,
      action: null,
      allow: null,
      allowFullScreen: ve,
      allowPaymentRequest: ve,
      allowUserMedia: ve,
      alt: null,
      as: null,
      async: ve,
      autoCapitalize: null,
      autoComplete: Me,
      autoFocus: ve,
      autoPlay: ve,
      blocking: Me,
      capture: null,
      charSet: null,
      checked: ve,
      cite: null,
      className: Me,
      cols: G,
      colSpan: null,
      content: null,
      contentEditable: Xe,
      controls: ve,
      controlsList: Me,
      coords: G | V0,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: ve,
      defer: ve,
      dir: null,
      dirName: null,
      disabled: ve,
      download: oc,
      draggable: Xe,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: ve,
      formTarget: null,
      headers: Me,
      height: G,
      hidden: oc,
      high: G,
      href: null,
      hrefLang: null,
      htmlFor: Me,
      httpEquiv: Me,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: ve,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: ve,
      itemId: null,
      itemProp: Me,
      itemRef: Me,
      itemScope: ve,
      itemType: Me,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: ve,
      low: G,
      manifest: null,
      max: null,
      maxLength: G,
      media: null,
      method: null,
      min: null,
      minLength: G,
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
      optimum: G,
      pattern: null,
      ping: Me,
      placeholder: null,
      playsInline: ve,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: ve,
      referrerPolicy: null,
      rel: Me,
      required: ve,
      reversed: ve,
      rows: G,
      rowSpan: G,
      sandbox: Me,
      scope: null,
      scoped: ve,
      seamless: ve,
      selected: ve,
      shadowRootClonable: ve,
      shadowRootDelegatesFocus: ve,
      shadowRootMode: null,
      shape: null,
      size: G,
      sizes: null,
      slot: null,
      span: G,
      spellCheck: Xe,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: G,
      step: null,
      style: null,
      tabIndex: G,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: ve,
      useMap: null,
      value: Xe,
      width: G,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: Me,
      axis: null,
      background: null,
      bgColor: null,
      border: G,
      borderColor: null,
      bottomMargin: G,
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
      hSpace: G,
      leftMargin: G,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: G,
      marginWidth: G,
      noResize: ve,
      noHref: ve,
      noShade: ve,
      noWrap: ve,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: G,
      rules: null,
      scheme: null,
      scrolling: Xe,
      standby: null,
      summary: null,
      text: null,
      topMargin: G,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: G,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: ve,
      disableRemotePlayback: ve,
      prefix: null,
      property: null,
      results: G,
      security: null,
      unselectable: null,
    },
    space: "html",
    transform: am,
  }),
  N5 = J0({
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
      accentHeight: G,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: G,
      amplitude: G,
      arabicForm: null,
      ascent: G,
      attributeName: null,
      attributeType: null,
      azimuth: G,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: G,
      by: null,
      calcMode: null,
      capHeight: G,
      className: Me,
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
      descent: G,
      diffuseConstant: G,
      direction: null,
      display: null,
      dur: null,
      divisor: G,
      dominantBaseline: null,
      download: ve,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: G,
      enableBackground: null,
      end: null,
      event: null,
      exponent: G,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: G,
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
      g1: V0,
      g2: V0,
      glyphName: V0,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: G,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: G,
      horizOriginX: G,
      horizOriginY: G,
      id: null,
      ideographic: G,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: G,
      k: G,
      k1: G,
      k2: G,
      k3: G,
      k4: G,
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
      limitingConeAngle: G,
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
      mediaSize: G,
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
      overlinePosition: G,
      overlineThickness: G,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: G,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: Me,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: G,
      pointsAtY: G,
      pointsAtZ: G,
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
      specularConstant: G,
      specularExponent: G,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: G,
      strikethroughThickness: G,
      string: null,
      stroke: null,
      strokeDashArray: Rt,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: G,
      strokeOpacity: G,
      strokeWidth: null,
      style: null,
      surfaceScale: G,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: Rt,
      tabIndex: G,
      tableValues: null,
      target: null,
      targetX: G,
      targetY: G,
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
      underlinePosition: G,
      underlineThickness: G,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: G,
      values: null,
      vAlphabetic: G,
      vMathematical: G,
      vectorEffect: null,
      vHanging: G,
      vIdeographic: G,
      version: null,
      vertAdvY: G,
      vertOriginX: G,
      vertOriginY: G,
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
      xHeight: G,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
    space: "svg",
    transform: om,
  }),
  im = J0({
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
    transform(r, t) {
      return "xlink:" + t.slice(5).toLowerCase();
    },
  }),
  sm = J0({
    attributes: { xmlnsxlink: "xmlns:xlink" },
    properties: { xmlnsXLink: null, xmlns: null },
    space: "xmlns",
    transform: am,
  }),
  lm = J0({
    properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
    space: "xml",
    transform(r, t) {
      return "xml:" + t.slice(3).toLowerCase();
    },
  }),
  L5 = /[A-Z]/g,
  yp = /-[a-z]/g,
  $5 = /^data[-\w.:]+$/i;
function A5(r, t) {
  const o = rc(t);
  let a = t,
    i = Pt;
  if (o in r.normal) return r.property[r.normal[o]];
  if (o.length > 4 && o.slice(0, 4) === "data" && $5.test(t)) {
    if (t.charAt(4) === "-") {
      const c = t.slice(5).replace(yp, H5);
      a = "data" + c.charAt(0).toUpperCase() + c.slice(1);
    } else {
      const c = t.slice(4);
      if (!yp.test(c)) {
        let d = c.replace(L5, D5);
        d.charAt(0) !== "-" && (d = "-" + d), (t = "data" + d);
      }
    }
    i = wc;
  }
  return new i(a, t);
}
function D5(r) {
  return "-" + r.toLowerCase();
}
function H5(r) {
  return r.charAt(1).toUpperCase();
}
const z5 = nm([rm, M5, im, sm, lm], "html"),
  cm = nm([rm, N5, im, sm, lm], "svg"),
  _p = {}.hasOwnProperty;
function V5(r, t) {
  const o = t || {};
  function a(i, ...c) {
    let d = a.invalid;
    const h = a.handlers;
    if (i && _p.call(i, r)) {
      const f = String(i[r]);
      d = _p.call(h, f) ? h[f] : a.unknown;
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
const G5 = /["&'<>`]/g,
  U5 = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  q5 = /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
  W5 = /[|\\{}()[\]^$+*?.]/g,
  xp = new WeakMap();
function K5(r, t) {
  if (
    ((r = r.replace(t.subset ? X5(t.subset) : G5, a)), t.subset || t.escapeOnly)
  )
    return r;
  return r.replace(U5, o).replace(q5, a);
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
function X5(r) {
  let t = xp.get(r);
  return t || ((t = Q5(r)), xp.set(r, t)), t;
}
function Q5(r) {
  const t = [];
  let o = -1;
  for (; ++o < r.length; ) t.push(r[o].replace(W5, "\\$&"));
  return new RegExp("(?:" + t.join("|") + ")", "g");
}
const Y5 = /[\dA-Fa-f]/;
function Z5(r, t, o) {
  const a = "&#x" + r.toString(16).toUpperCase();
  return o && t && !Y5.test(String.fromCharCode(t)) ? a : a + ";";
}
const J5 = /\d/;
function ev(r, t, o) {
  const a = "&#" + String(r);
  return o && t && !J5.test(String.fromCharCode(t)) ? a : a + ";";
}
const tv = [
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
  jl = {
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
  nv = ["cent", "copy", "divide", "gt", "lt", "not", "para", "times"],
  um = {}.hasOwnProperty,
  ic = {};
let Ca;
for (Ca in jl) um.call(jl, Ca) && (ic[jl[Ca]] = Ca);
const rv = /[^\dA-Za-z]/;
function ov(r, t, o, a) {
  const i = String.fromCharCode(r);
  if (um.call(ic, i)) {
    const c = ic[i],
      d = "&" + c;
    return o &&
      tv.includes(c) &&
      !nv.includes(c) &&
      (!a || (t && t !== 61 && rv.test(String.fromCharCode(t))))
      ? d
      : d + ";";
  }
  return "";
}
function av(r, t, o) {
  let a = Z5(r, t, o.omitOptionalSemicolons),
    i;
  if (
    ((o.useNamedReferences || o.useShortestReferences) &&
      (i = ov(r, t, o.omitOptionalSemicolons, o.attribute)),
    (o.useShortestReferences || !i) && o.useShortestReferences)
  ) {
    const c = ev(r, t, o.omitOptionalSemicolons);
    c.length < a.length && (a = c);
  }
  return i && (!o.useShortestReferences || i.length < a.length) ? i : a;
}
function G0(r, t) {
  return K5(r, Object.assign({ format: av }, t));
}
const iv = /^>|^->|<!--|-->|--!>|<!-$/g,
  sv = [">"],
  lv = ["<", ">"];
function cv(r, t, o, a) {
  return a.settings.bogusComments
    ? "<?" +
        G0(
          r.value,
          Object.assign({}, a.settings.characterReferences, { subset: sv }),
        ) +
        ">"
    : "<!--" + r.value.replace(iv, i) + "-->";
  function i(c) {
    return G0(
      c,
      Object.assign({}, a.settings.characterReferences, { subset: lv }),
    );
  }
}
function uv(r, t, o, a) {
  return (
    "<!" +
    (a.settings.upperDoctype ? "DOCTYPE" : "doctype") +
    (a.settings.tightDoctype ? "" : " ") +
    "html>"
  );
}
function Sp(r, t) {
  const o = String(r);
  if (typeof t != "string") throw new TypeError("Expected character");
  let a = 0,
    i = o.indexOf(t);
  for (; i !== -1; ) a++, (i = o.indexOf(t, i + t.length));
  return a;
}
function dv(r, t) {
  const o = t || {};
  return (r[r.length - 1] === "" ? [...r, ""] : r)
    .join((o.padRight ? " " : "") + "," + (o.padLeft === !1 ? "" : " "))
    .trim();
}
function fv(r) {
  return r.join(" ").trim();
}
const pv = /[ \t\n\f\r]/g;
function kc(r) {
  return typeof r == "object" ? (r.type === "text" ? Cp(r.value) : !1) : Cp(r);
}
function Cp(r) {
  return r.replace(pv, "") === "";
}
const et = fm(1),
  dm = fm(-1),
  hv = [];
function fm(r) {
  return t;
  function t(o, a, i) {
    const c = o ? o.children : hv;
    let d = (a || 0) + r,
      h = c[d];
    if (!i) for (; h && kc(h); ) (d += r), (h = c[d]);
    return h;
  }
}
const mv = {}.hasOwnProperty;
function pm(r) {
  return t;
  function t(o, a, i) {
    return mv.call(r, o.tagName) && r[o.tagName](o, a, i);
  }
}
const Oc = pm({
  body: bv,
  caption: Rl,
  colgroup: Rl,
  dd: xv,
  dt: _v,
  head: Rl,
  html: gv,
  li: yv,
  optgroup: Sv,
  option: Cv,
  p: vv,
  rp: wp,
  rt: wp,
  tbody: kv,
  td: kp,
  tfoot: Ov,
  th: kp,
  thead: wv,
  tr: Pv,
});
function Rl(r, t, o) {
  const a = et(o, t, !0);
  return (
    !a ||
    (a.type !== "comment" && !(a.type === "text" && kc(a.value.charAt(0))))
  );
}
function gv(r, t, o) {
  const a = et(o, t);
  return !a || a.type !== "comment";
}
function bv(r, t, o) {
  const a = et(o, t);
  return !a || a.type !== "comment";
}
function vv(r, t, o) {
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
function yv(r, t, o) {
  const a = et(o, t);
  return !a || (a.type === "element" && a.tagName === "li");
}
function _v(r, t, o) {
  const a = et(o, t);
  return !!(
    a &&
    a.type === "element" &&
    (a.tagName === "dt" || a.tagName === "dd")
  );
}
function xv(r, t, o) {
  const a = et(o, t);
  return (
    !a || (a.type === "element" && (a.tagName === "dt" || a.tagName === "dd"))
  );
}
function wp(r, t, o) {
  const a = et(o, t);
  return (
    !a || (a.type === "element" && (a.tagName === "rp" || a.tagName === "rt"))
  );
}
function Sv(r, t, o) {
  const a = et(o, t);
  return !a || (a.type === "element" && a.tagName === "optgroup");
}
function Cv(r, t, o) {
  const a = et(o, t);
  return (
    !a ||
    (a.type === "element" &&
      (a.tagName === "option" || a.tagName === "optgroup"))
  );
}
function wv(r, t, o) {
  const a = et(o, t);
  return !!(
    a &&
    a.type === "element" &&
    (a.tagName === "tbody" || a.tagName === "tfoot")
  );
}
function kv(r, t, o) {
  const a = et(o, t);
  return (
    !a ||
    (a.type === "element" && (a.tagName === "tbody" || a.tagName === "tfoot"))
  );
}
function Ov(r, t, o) {
  return !et(o, t);
}
function Pv(r, t, o) {
  const a = et(o, t);
  return !a || (a.type === "element" && a.tagName === "tr");
}
function kp(r, t, o) {
  const a = et(o, t);
  return (
    !a || (a.type === "element" && (a.tagName === "td" || a.tagName === "th"))
  );
}
const Ev = pm({ body: jv, colgroup: Rv, head: Fv, html: Tv, tbody: Iv });
function Tv(r) {
  const t = et(r, -1);
  return !t || t.type !== "comment";
}
function Fv(r) {
  const t = new Set();
  for (const a of r.children)
    if (
      a.type === "element" &&
      (a.tagName === "base" || a.tagName === "title")
    ) {
      if (t.has(a.tagName)) return !1;
      t.add(a.tagName);
    }
  const o = r.children[0];
  return !o || o.type === "element";
}
function jv(r) {
  const t = et(r, -1, !0);
  return (
    !t ||
    (t.type !== "comment" &&
      !(t.type === "text" && kc(t.value.charAt(0))) &&
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
function Rv(r, t, o) {
  const a = dm(o, t),
    i = et(r, -1, !0);
  return o &&
    a &&
    a.type === "element" &&
    a.tagName === "colgroup" &&
    Oc(a, o.children.indexOf(a), o)
    ? !1
    : !!(i && i.type === "element" && i.tagName === "col");
}
function Iv(r, t, o) {
  const a = dm(o, t),
    i = et(r, -1);
  return o &&
    a &&
    a.type === "element" &&
    (a.tagName === "thead" || a.tagName === "tbody") &&
    Oc(a, o.children.indexOf(a), o)
    ? !1
    : !!(i && i.type === "element" && i.tagName === "tr");
}
const wa = {
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
function Bv(r, t, o, a) {
  const i = a.schema,
    c = i.space === "svg" ? !1 : a.settings.omitOptionalTags;
  let d =
    i.space === "svg"
      ? a.settings.closeEmptyElements
      : a.settings.voids.includes(r.tagName.toLowerCase());
  const h = [];
  let f;
  i.space === "html" && r.tagName === "svg" && (a.schema = cm);
  const m = Mv(a, r.properties),
    b = a.all(i.space === "html" && r.tagName === "template" ? r.content : r);
  return (
    (a.schema = i),
    b && (d = !1),
    (m || !c || !Ev(r, t, o)) &&
      (h.push("<", r.tagName, m ? " " + m : ""),
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
    !d && (!c || !Oc(r, t, o)) && h.push("</" + r.tagName + ">"),
    h.join("")
  );
}
function Mv(r, t) {
  const o = [];
  let a = -1,
    i;
  if (t) {
    for (i in t)
      if (t[i] !== null && t[i] !== void 0) {
        const c = Nv(r, i, t[i]);
        c && o.push(c);
      }
  }
  for (; ++a < o.length; ) {
    const c = r.settings.tightAttributes
      ? o[a].charAt(o[a].length - 1)
      : void 0;
    a !== o.length - 1 && c !== '"' && c !== "'" && (o[a] += " ");
  }
  return o.join("");
}
function Nv(r, t, o) {
  const a = A5(r.schema, t),
    i = r.settings.allowParseErrors && r.schema.space === "html" ? 0 : 1,
    c = r.settings.allowDangerousCharacters ? 0 : 1;
  let d = r.quote,
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
  const f = G0(
    a.attribute,
    Object.assign({}, r.settings.characterReferences, {
      subset: wa.name[i][c],
    }),
  );
  return o === !0 ||
    ((o = Array.isArray(o)
      ? (a.commaSeparated ? dv : fv)(o, {
          padLeft: !r.settings.tightCommaSeparatedLists,
        })
      : String(o)),
    r.settings.collapseEmptyAttributes && !o)
    ? f
    : (r.settings.preferUnquoted &&
        (h = G0(
          o,
          Object.assign({}, r.settings.characterReferences, {
            attribute: !0,
            subset: wa.unquoted[i][c],
          }),
        )),
      h !== o &&
        (r.settings.quoteSmart &&
          Sp(o, d) > Sp(o, r.alternative) &&
          (d = r.alternative),
        (h =
          d +
          G0(
            o,
            Object.assign({}, r.settings.characterReferences, {
              subset: (d === "'" ? wa.single : wa.double)[i][c],
              attribute: !0,
            }),
          ) +
          d)),
      f + (h && "=" + h));
}
const Lv = ["<", "&"];
function hm(r, t, o, a) {
  return o &&
    o.type === "element" &&
    (o.tagName === "script" || o.tagName === "style")
    ? r.value
    : G0(
        r.value,
        Object.assign({}, a.settings.characterReferences, { subset: Lv }),
      );
}
function $v(r, t, o, a) {
  return a.settings.allowDangerousHtml ? r.value : hm(r, t, o, a);
}
function Av(r, t, o, a) {
  return a.all(r);
}
const Dv = V5("type", {
  invalid: Hv,
  unknown: zv,
  handlers: {
    comment: cv,
    doctype: uv,
    element: Bv,
    raw: $v,
    root: Av,
    text: hm,
  },
});
function Hv(r) {
  throw new Error("Expected node, not `" + r + "`");
}
function zv(r) {
  const t = r;
  throw new Error("Cannot compile unknown node `" + t.type + "`");
}
const Vv = {},
  Gv = {},
  Uv = [];
function qv(r, t) {
  const o = t || Vv,
    a = o.quote || '"',
    i = a === '"' ? "'" : '"';
  if (a !== '"' && a !== "'")
    throw new Error("Invalid quote `" + a + "`, expected `'` or `\"`");
  return {
    one: Wv,
    all: Kv,
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
      voids: o.voids || I5,
      characterReferences: o.characterReferences || Gv,
      closeSelfClosing: o.closeSelfClosing || !1,
      closeEmptyElements: o.closeEmptyElements || !1,
    },
    schema: o.space === "svg" ? cm : z5,
    quote: a,
    alternative: i,
  }.one(Array.isArray(r) ? { type: "root", children: r } : r, void 0, void 0);
}
function Wv(r, t, o) {
  return Dv(r, t, o, this);
}
function Kv(r) {
  const t = [],
    o = (r && r.children) || Uv;
  let a = -1;
  for (; ++a < o.length; ) t[a] = this.one(o[a], a, r);
  return t.join("");
}
function Ja(r, t) {
  const o = typeof r == "string" ? {} : { ...r.colorReplacements },
    a = typeof r == "string" ? r : r.name;
  for (const [i, c] of Object.entries(
    (t == null ? void 0 : t.colorReplacements) || {},
  ))
    typeof c == "string" ? (o[i] = c) : i === a && Object.assign(o, c);
  return o;
}
function Vn(r, t) {
  return (
    r && ((t == null ? void 0 : t[r == null ? void 0 : r.toLowerCase()]) || r)
  );
}
function Xv(r) {
  return Array.isArray(r) ? r : [r];
}
async function mm(r) {
  return Promise.resolve(typeof r == "function" ? r() : r).then(
    (t) => t.default || t,
  );
}
function Pc(r) {
  return !r || ["plaintext", "txt", "text", "plain"].includes(r);
}
function Qv(r) {
  return r === "ansi" || Pc(r);
}
function Ec(r) {
  return r === "none";
}
function Yv(r) {
  return Ec(r);
}
function gm(r, t) {
  var a;
  if (!t) return r;
  r.properties || (r.properties = {}),
    (a = r.properties).class || (a.class = []),
    typeof r.properties.class == "string" &&
      (r.properties.class = r.properties.class.split(/\s+/g)),
    Array.isArray(r.properties.class) || (r.properties.class = []);
  const o = Array.isArray(t) ? t : t.split(/\s+/g);
  for (const i of o)
    i && !r.properties.class.includes(i) && r.properties.class.push(i);
  return r;
}
function yi(r, t = !1) {
  var c;
  const o = r.split(/(\r?\n)/g);
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
function Zv(r) {
  const t = yi(r, !0).map(([i]) => i);
  function o(i) {
    if (i === r.length)
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
const Tc = "light-dark()";
function Jv(r, t) {
  let o = 0;
  const a = [];
  for (const i of t)
    i > o &&
      a.push({ ...r, content: r.content.slice(o, i), offset: r.offset + o }),
      (o = i);
  return (
    o < r.content.length &&
      a.push({ ...r, content: r.content.slice(o), offset: r.offset + o }),
    a
  );
}
function e4(r, t) {
  const o = Array.from(t instanceof Set ? t : new Set(t)).sort((a, i) => a - i);
  return o.length
    ? r.map((a) =>
        a.flatMap((i) => {
          const c = o
            .filter((d) => i.offset < d && d < i.offset + i.content.length)
            .map((d) => d - i.offset)
            .sort((d, h) => d - h);
          return c.length ? Jv(i, c) : i;
        }),
      )
    : r;
}
function t4(r, t, o, a, i = "css-vars") {
  const c = {
      content: r.content,
      explanation: r.explanation,
      offset: r.offset,
    },
    d = t.map((b) => ei(r.variants[b])),
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
          if (a === Tc && d.length > 1) {
            const S = t.findIndex((T) => T === "light"),
              P = t.findIndex((T) => T === "dark");
            if (S === -1 || P === -1)
              throw new at(
                'When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes',
              );
            const k = d[S][y] || "inherit",
              O = d[P][y] || "inherit";
            (f[y] = `light-dark(${k}, ${O})`),
              i === "css-vars" && (f[m(v, y)] = x);
          } else f[y] = x;
        else i === "css-vars" && (f[m(v, y)] = x);
      }
    }),
    (c.htmlStyle = f),
    c
  );
}
function ei(r) {
  const t = {};
  if (
    (r.color && (t.color = r.color),
    r.bgColor && (t["background-color"] = r.bgColor),
    r.fontStyle)
  ) {
    r.fontStyle & mt.Italic && (t["font-style"] = "italic"),
      r.fontStyle & mt.Bold && (t["font-weight"] = "bold");
    const o = [];
    r.fontStyle & mt.Underline && o.push("underline"),
      r.fontStyle & mt.Strikethrough && o.push("line-through"),
      o.length && (t["text-decoration"] = o.join(" "));
  }
  return t;
}
function sc(r) {
  return typeof r == "string"
    ? r
    : Object.entries(r)
        .map(([t, o]) => `${t}:${o}`)
        .join(";");
}
const bm = new WeakMap();
function _i(r, t) {
  bm.set(r, t);
}
function eo(r) {
  return bm.get(r);
}
class er {
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
    return new er(Object.fromEntries(Xv(o).map((a) => [a, nc])), t);
  }
  getInternalStack(t = this.theme) {
    return this._stacks[t];
  }
  getScopes(t = this.theme) {
    return n4(this._stacks[t]);
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
function n4(r) {
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
  return a(r), t;
}
function r4(r, t) {
  if (!(r instanceof er)) throw new at("Invalid grammar state");
  return r.getInternalStack(t);
}
function o4() {
  const r = new WeakMap();
  function t(o) {
    if (!r.has(o.meta)) {
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
      const i = Zv(o.source),
        c = (o.options.decorations || []).map((d) => ({
          ...d,
          start: a(d.start),
          end: a(d.end),
        }));
      a4(c), r.set(o.meta, { decorations: c, converter: i, source: o.source });
    }
    return r.get(o.meta);
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
      return e4(o, i);
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
        const P = i[v];
        let k = "",
          O = -1,
          T = -1;
        if (
          (y === 0 && (O = 0),
          x === 0 && (T = 0),
          x === Number.POSITIVE_INFINITY && (T = P.children.length),
          O === -1 || T === -1)
        )
          for (let N = 0; N < P.children.length; N++)
            (k += vm(P.children[N])),
              O === -1 && k.length === y && (O = N + 1),
              T === -1 && k.length === x && (T = N + 1);
        if (O === -1)
          throw new at(
            `Failed to find start index for decoration ${JSON.stringify(S.start)}`,
          );
        if (T === -1)
          throw new at(
            `Failed to find end index for decoration ${JSON.stringify(S.end)}`,
          );
        const I = P.children.slice(O, T);
        if (!S.alwaysWrap && I.length === P.children.length) h(P, S, "line");
        else if (!S.alwaysWrap && I.length === 1 && I[0].type === "element")
          h(I[0], S, "token");
        else {
          const N = {
            type: "element",
            tagName: "span",
            properties: {},
            children: I,
          };
          h(N, S, "wrapper"), P.children.splice(O, I.length, N);
        }
      }
      function d(v, y) {
        i[v] = h(i[v], y, "line");
      }
      function h(v, y, x) {
        var k;
        const S = y.properties || {},
          P = y.transform || ((O) => O);
        return (
          (v.tagName = y.tagName || "span"),
          (v.properties = { ...v.properties, ...S, class: v.properties.class }),
          (k = y.properties) != null && k.class && gm(v, y.properties.class),
          (v = P(v, x) || v),
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
function a4(r) {
  for (let t = 0; t < r.length; t++) {
    const o = r[t];
    if (o.start.offset > o.end.offset)
      throw new at(
        `Invalid decoration range: ${JSON.stringify(o.start)} - ${JSON.stringify(o.end)}`,
      );
    for (let a = t + 1; a < r.length; a++) {
      const i = r[a],
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
function vm(r) {
  return r.type === "text"
    ? r.value
    : r.type === "element"
      ? r.children.map(vm).join("")
      : "";
}
const i4 = [o4()];
function ti(r) {
  return [...(r.transformers || []), ...i4];
}
var a0 = [
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
  Il = {
    1: "bold",
    2: "dim",
    3: "italic",
    4: "underline",
    7: "reverse",
    8: "hidden",
    9: "strikethrough",
  };
function s4(r, t) {
  const o = r.indexOf("\x1B", t);
  if (o !== -1 && r[o + 1] === "[") {
    const a = r.indexOf("m", o);
    if (a !== -1)
      return {
        sequence: r.substring(o + 2, a).split(";"),
        startPosition: o,
        position: a + 1,
      };
  }
  return { position: r.length };
}
function Op(r) {
  const t = r.shift();
  if (t === "2") {
    const o = r.splice(0, 3).map((a) => Number.parseInt(a));
    return o.length !== 3 || o.some((a) => Number.isNaN(a))
      ? void 0
      : { type: "rgb", rgb: o };
  } else if (t === "5") {
    const o = r.shift();
    if (o) return { type: "table", index: Number(o) };
  }
}
function l4(r) {
  const t = [];
  for (; r.length > 0; ) {
    const o = r.shift();
    if (!o) continue;
    const a = Number.parseInt(o);
    if (!Number.isNaN(a))
      if (a === 0) t.push({ type: "resetAll" });
      else if (a <= 9) Il[a] && t.push({ type: "setDecoration", value: Il[a] });
      else if (a <= 29) {
        const i = Il[a - 20];
        i &&
          (t.push({ type: "resetDecoration", value: i }),
          i === "dim" && t.push({ type: "resetDecoration", value: "bold" }));
      } else if (a <= 37)
        t.push({
          type: "setForegroundColor",
          value: { type: "named", name: a0[a - 30] },
        });
      else if (a === 38) {
        const i = Op(r);
        i && t.push({ type: "setForegroundColor", value: i });
      } else if (a === 39) t.push({ type: "resetForegroundColor" });
      else if (a <= 47)
        t.push({
          type: "setBackgroundColor",
          value: { type: "named", name: a0[a - 40] },
        });
      else if (a === 48) {
        const i = Op(r);
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
                    value: { type: "named", name: a0[a - 90 + 8] },
                  })
                : a >= 100 &&
                  a <= 107 &&
                  t.push({
                    type: "setBackgroundColor",
                    value: { type: "named", name: a0[a - 100 + 8] },
                  });
  }
  return t;
}
function c4() {
  let r = null,
    t = null,
    o = new Set();
  return {
    parse(a) {
      const i = [];
      let c = 0;
      do {
        const d = s4(a, c),
          h = d.sequence ? a.substring(c, d.startPosition) : a.substring(c);
        if (
          (h.length > 0 &&
            i.push({
              value: h,
              foreground: r,
              background: t,
              decorations: new Set(o),
            }),
          d.sequence)
        ) {
          const f = l4(d.sequence);
          for (const m of f)
            m.type === "resetAll"
              ? ((r = null), (t = null), o.clear())
              : m.type === "resetForegroundColor"
                ? (r = null)
                : m.type === "resetBackgroundColor"
                  ? (t = null)
                  : m.type === "resetDecoration" && o.delete(m.value);
          for (const m of f)
            m.type === "setForegroundColor"
              ? (r = m.value)
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
var u4 = {
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
function d4(r = u4) {
  function t(h) {
    return r[h];
  }
  function o(h) {
    return `#${h.map((f) => Math.max(0, Math.min(f, 255)).toString(16).padStart(2, "0")).join("")}`;
  }
  let a;
  function i() {
    if (a) return a;
    a = [];
    for (let m = 0; m < a0.length; m++) a.push(t(a0[m]));
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
function f4(r, t, o) {
  const a = Ja(r, o),
    i = yi(t),
    c = d4(
      Object.fromEntries(
        a0.map((h) => {
          var f;
          return [
            h,
            (f = r.colors) == null
              ? void 0
              : f[`terminal.ansi${h[0].toUpperCase()}${h.substring(1)}`],
          ];
        }),
      ),
    ),
    d = c4();
  return i.map((h) =>
    d.parse(h[0]).map((f) => {
      let m, b;
      f.decorations.has("reverse")
        ? ((m = f.background ? c.value(f.background) : r.bg),
          (b = f.foreground ? c.value(f.foreground) : r.fg))
        : ((m = f.foreground ? c.value(f.foreground) : r.fg),
          (b = f.background ? c.value(f.background) : void 0)),
        (m = Vn(m, a)),
        (b = Vn(b, a)),
        f.decorations.has("dim") && (m = p4(m));
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
function p4(r) {
  const t = r.match(/#([0-9a-f]{3})([0-9a-f]{3})?([0-9a-f]{2})?/);
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
  const o = r.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);
  return o ? `var(${o[1]}-dim)` : r;
}
function Fc(r, t, o = {}) {
  const { lang: a = "text", theme: i = r.getLoadedThemes()[0] } = o;
  if (Pc(a) || Ec(i))
    return yi(t).map((f) => [{ content: f[0], offset: f[1] }]);
  const { theme: c, colorMap: d } = r.setTheme(i);
  if (a === "ansi") return f4(c, t, o);
  const h = r.getLanguage(a);
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
  return m4(t, h, c, d, o);
}
function h4(...r) {
  if (r.length === 2) return eo(r[1]);
  const [t, o, a = {}] = r,
    { lang: i = "text", theme: c = t.getLoadedThemes()[0] } = a;
  if (Pc(i) || Ec(c))
    throw new at("Plain language does not have grammar state");
  if (i === "ansi") throw new at("ANSI language does not have grammar state");
  const { theme: d, colorMap: h } = t.setTheme(c),
    f = t.getLanguage(i);
  return new er(ni(o, f, d, h, a).stateStack, f.name, d.name);
}
function m4(r, t, o, a, i) {
  const c = ni(r, t, o, a, i),
    d = new er(ni(r, t, o, a, i).stateStack, t.name, o.name);
  return _i(c.tokens, d), c.tokens;
}
function ni(r, t, o, a, i) {
  const c = Ja(o, i),
    { tokenizeMaxLineLength: d = 0, tokenizeTimeLimit: h = 500 } = i,
    f = yi(r);
  let m = i.grammarState
      ? (r4(i.grammarState, o.name) ?? nc)
      : i.grammarContextCode != null
        ? ni(i.grammarContextCode, t, o, a, {
            ...i,
            grammarState: void 0,
            grammarContextCode: void 0,
          }).stateStack
        : nc,
    b = [];
  const v = [];
  for (let y = 0, x = f.length; y < x; y++) {
    const [S, P] = f[y];
    if (S === "") {
      (b = []), v.push([]);
      continue;
    }
    if (d > 0 && S.length >= d) {
      (b = []), v.push([{ content: S, offset: P, color: "", fontStyle: 0 }]);
      continue;
    }
    let k, O, T;
    i.includeExplanation &&
      ((k = t.tokenizeLine(S, m, h)), (O = k.tokens), (T = 0));
    const I = t.tokenizeLine2(S, m, h),
      N = I.tokens.length / 2;
    for (let F = 0; F < N; F++) {
      const $ = I.tokens[2 * F],
        M = F + 1 < N ? I.tokens[2 * F + 2] : S.length;
      if ($ === M) continue;
      const X = I.tokens[2 * F + 1],
        he = Vn(a[Q0.getForeground(X)], c),
        Ce = Q0.getFontStyle(X),
        te = {
          content: S.substring($, M),
          offset: P + $,
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
        for (; $ + ye < M; ) {
          const Se = O[T],
            ge = S.substring(Se.startIndex, Se.endIndex);
          (ye += ge.length),
            te.explanation.push({
              content: ge,
              scopes:
                i.includeExplanation === "scopeName"
                  ? g4(Se.scopes)
                  : b4(ce, Se.scopes),
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
function g4(r) {
  return r.map((t) => ({ scopeName: t }));
}
function b4(r, t) {
  const o = [];
  for (let a = 0, i = t.length; a < i; a++) {
    const c = t[a];
    o[a] = { scopeName: c, themeMatches: y4(r, c, t.slice(0, a)) };
  }
  return o;
}
function Pp(r, t) {
  return r === t || (t.substring(0, r.length) === r && t[r.length] === ".");
}
function v4(r, t, o) {
  if (!Pp(r[r.length - 1], t)) return !1;
  let a = r.length - 2,
    i = o.length - 1;
  for (; a >= 0 && i >= 0; ) Pp(r[a], o[i]) && (a -= 1), (i -= 1);
  return a === -1;
}
function y4(r, t, o) {
  const a = [];
  for (const { selectors: i, settings: c } of r)
    for (const d of i)
      if (v4(d, t, o)) {
        a.push(c);
        break;
      }
  return a;
}
function ym(r, t, o) {
  const a = Object.entries(o.themes)
      .filter((f) => f[1])
      .map((f) => ({ color: f[0], theme: f[1] })),
    i = a.map((f) => {
      const m = Fc(r, t, { ...o, theme: f.theme }),
        b = eo(m),
        v = typeof f.theme == "string" ? f.theme : f.theme.name;
      return { tokens: m, state: b, theme: v };
    }),
    c = _4(...i.map((f) => f.tokens)),
    d = c[0].map((f, m) =>
      f.map((b, v) => {
        const y = { content: b.content, variants: {}, offset: b.offset };
        return (
          "includeExplanation" in o &&
            o.includeExplanation &&
            (y.explanation = b.explanation),
          c.forEach((x, S) => {
            const { content: P, explanation: k, offset: O, ...T } = x[m][v];
            y.variants[a[S].color] = T;
          }),
          y
        );
      }),
    ),
    h = i[0].state
      ? new er(
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
  return h && _i(d, h), d;
}
function _4(...r) {
  const t = r.map(() => []),
    o = r.length;
  for (let a = 0; a < r[0].length; a++) {
    const i = r.map((f) => f[a]),
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
function ri(r, t, o) {
  let a, i, c, d, h, f;
  if ("themes" in o) {
    const {
        defaultColor: m = "light",
        cssVariablePrefix: b = "--shiki-",
        colorsRendering: v = "css-vars",
      } = o,
      y = Object.entries(o.themes)
        .filter((O) => O[1])
        .map((O) => ({ color: O[0], theme: O[1] }))
        .sort((O, T) => (O.color === m ? -1 : T.color === m ? 1 : 0));
    if (y.length === 0) throw new at("`themes` option must not be empty");
    const x = ym(r, t, o);
    if (((f = eo(x)), m && Tc !== m && !y.find((O) => O.color === m)))
      throw new at(
        `\`themes\` option must contain the defaultColor key \`${m}\``,
      );
    const S = y.map((O) => r.getTheme(O.theme)),
      P = y.map((O) => O.color);
    (c = x.map((O) => O.map((T) => t4(T, P, b, m, v)))), f && _i(c, f);
    const k = y.map((O) => Ja(O.theme, o));
    (i = Ep(y, S, k, b, m, "fg", v)),
      (a = Ep(y, S, k, b, m, "bg", v)),
      (d = `shiki-themes ${S.map((O) => O.name).join(" ")}`),
      (h = m ? void 0 : [i, a].join(";"));
  } else if ("theme" in o) {
    const m = Ja(o.theme, o);
    c = Fc(r, t, o);
    const b = r.getTheme(o.theme);
    (a = Vn(b.bg, m)), (i = Vn(b.fg, m)), (d = b.name), (f = eo(c));
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
function Ep(r, t, o, a, i, c, d) {
  return r
    .map((h, f) => {
      const m = Vn(t[f][c], o[f]) || "inherit",
        b = `${a + h.color}${c === "bg" ? "-bg" : ""}:${m}`;
      if (f === 0 && i) {
        if (i === Tc && r.length > 1) {
          const v = r.findIndex((P) => P.color === "light"),
            y = r.findIndex((P) => P.color === "dark");
          if (v === -1 || y === -1)
            throw new at(
              'When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes',
            );
          const x = Vn(t[v][c], o[v]) || "inherit",
            S = Vn(t[y][c], o[y]) || "inherit";
          return `light-dark(${x}, ${S});${b}`;
        }
        return m;
      }
      return d === "css-vars" ? b : null;
    })
    .filter((h) => !!h)
    .join(";");
}
function oi(
  r,
  t,
  o,
  a = {
    meta: {},
    options: o,
    codeToHast: (i, c) => oi(r, i, c),
    codeToTokens: (i, c) => ri(r, i, c),
  },
) {
  var S, P;
  let i = t;
  for (const k of ti(o))
    i = ((S = k.preprocess) == null ? void 0 : S.call(a, i, o)) || i;
  let {
    tokens: c,
    fg: d,
    bg: h,
    themeName: f,
    rootStyle: m,
    grammarState: b,
  } = ri(r, i, o);
  const { mergeWhitespaces: v = !0, mergeSameStyleTokens: y = !1 } = o;
  v === !0 ? (c = S4(c)) : v === "never" && (c = C4(c)), y && (c = w4(c));
  const x = {
    ...a,
    get source() {
      return i;
    },
  };
  for (const k of ti(o))
    c = ((P = k.tokens) == null ? void 0 : P.call(x, c)) || c;
  return x4(c, { ...o, fg: d, bg: h, themeName: f, rootStyle: m }, x, b);
}
function x4(r, t, o, a = eo(r)) {
  var S, P, k;
  const i = ti(t),
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
            ([O]) => !O.startsWith("_"),
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
      addClassToHast: gm,
      get source() {
        return o.source;
      },
      get tokens() {
        return r;
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
    (r.forEach((O, T) => {
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
        N = 0;
      for (const M of O) {
        let X = {
          type: "element",
          tagName: "span",
          properties: { ...M.htmlAttrs },
          children: [{ type: "text", value: M.content }],
        };
        const he = sc(M.htmlStyle || ei(M));
        he && (X.properties.style = he);
        for (const Ce of i)
          X =
            ((F = Ce == null ? void 0 : Ce.span) == null
              ? void 0
              : F.call(y, X, T + 1, N, I, M)) || X;
        h === "inline"
          ? d.children.push(X)
          : h === "classic" && I.children.push(X),
          (N += M.content.length);
      }
      if (h === "classic") {
        for (const M of i)
          I =
            (($ = M == null ? void 0 : M.line) == null
              ? void 0
              : $.call(y, I, T + 1)) || I;
        v.push(I), c.push(I);
      }
    }),
    h === "classic")
  ) {
    for (const O of i)
      b =
        ((S = O == null ? void 0 : O.code) == null ? void 0 : S.call(y, b)) ||
        b;
    m.children.push(b);
    for (const O of i)
      m =
        ((P = O == null ? void 0 : O.pre) == null ? void 0 : P.call(y, m)) || m;
    d.children.push(m);
  }
  let x = d;
  for (const O of i)
    x =
      ((k = O == null ? void 0 : O.root) == null ? void 0 : k.call(y, x)) || x;
  return a && _i(x, a), x;
}
function S4(r) {
  return r.map((t) => {
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
function C4(r) {
  return r.map((t) =>
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
function w4(r) {
  return r.map((t) => {
    const o = [];
    for (const a of t) {
      if (o.length === 0) {
        o.push({ ...a });
        continue;
      }
      const i = o[o.length - 1],
        c = sc(i.htmlStyle || ei(i)),
        d = sc(a.htmlStyle || ei(a)),
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
const k4 = qv;
function O4(r, t, o) {
  var c;
  const a = {
    meta: {},
    options: o,
    codeToHast: (d, h) => oi(r, d, h),
    codeToTokens: (d, h) => ri(r, d, h),
  };
  let i = k4(oi(r, t, o, a));
  for (const d of ti(o))
    i = ((c = d.postprocess) == null ? void 0 : c.call(a, i, o)) || i;
  return i;
}
const Tp = { light: "#333333", dark: "#bbbbbb" },
  Fp = { light: "#fffffe", dark: "#1e1e1e" },
  jp = "__shiki_resolved";
function jc(r) {
  var h, f, m, b, v;
  if (r != null && r[jp]) return r;
  const t = { ...r };
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
      a || (a = t.type === "light" ? Tp.light : Tp.dark),
      o || (o = t.type === "light" ? Fp.light : Fp.dark),
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
    var k, O;
    const x =
        ((k = y.settings) == null ? void 0 : k.foreground) &&
        !y.settings.foreground.startsWith("#"),
      S =
        ((O = y.settings) == null ? void 0 : O.background) &&
        !y.settings.background.startsWith("#");
    if (!x && !S) return y;
    const P = { ...y, settings: { ...y.settings } };
    if (x) {
      const T = d(y.settings.foreground);
      (t.colorReplacements[T] = y.settings.foreground),
        (P.settings.foreground = T);
    }
    if (S) {
      const T = d(y.settings.background);
      (t.colorReplacements[T] = y.settings.background),
        (P.settings.background = T);
    }
    return P;
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
    Object.defineProperty(t, jp, { enumerable: !1, writable: !1, value: !0 }), t
  );
}
async function _m(r) {
  return Array.from(
    new Set(
      (
        await Promise.all(
          r
            .filter((t) => !Qv(t))
            .map(
              async (t) =>
                await mm(t).then((o) => (Array.isArray(o) ? o : [o])),
            ),
        )
      ).flat(),
    ),
  );
}
async function xm(r) {
  return (
    await Promise.all(r.map(async (o) => (Yv(o) ? null : jc(await mm(o)))))
  ).filter((o) => !!o);
}
let P4 = 3;
function E4(r, t = 3) {
  t > P4 || console.trace(`[SHIKI DEPRECATE]: ${r}`);
}
class z0 extends Error {
  constructor(t) {
    super(t), (this.name = "ShikiError");
  }
}
class T4 extends R5 {
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
    const a = jc(o);
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
    a || ((a = Ka.createFromRawTheme(o)), this._textmateThemeCache.set(o, a)),
      this._syncRegistry.setTheme(a);
  }
  getGrammar(o) {
    if (this._alias[o]) {
      const a = new Set([o]);
      for (; this._alias[o]; ) {
        if (((o = this._alias[o]), a.has(o)))
          throw new z0(
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
      throw new z0(
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
class F4 {
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
let zr = 0;
function j4(r) {
  (zr += 1),
    r.warnings !== !1 &&
      zr >= 10 &&
      zr % 10 === 0 &&
      console.warn(
        `[Shiki] ${zr} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`,
      );
  let t = !1;
  if (!r.engine)
    throw new z0("`engine` option is required for synchronous mode");
  const o = (r.langs || []).flat(1),
    a = (r.themes || []).flat(1).map(jc),
    i = new F4(r.engine, o),
    c = new T4(i, a, o, r.langAlias);
  let d;
  function h(T) {
    k();
    const I = c.getGrammar(typeof T == "string" ? T : T.name);
    if (!I)
      throw new z0(
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
      throw new z0(`Theme \`${T}\` not found, you may need to load it first`);
    return I;
  }
  function m(T) {
    k();
    const I = f(T);
    d !== T && (c.setTheme(I), (d = T));
    const N = c.getColorMap();
    return { theme: I, colorMap: N };
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
    return y(await _m(T));
  }
  function S(...T) {
    k();
    for (const I of T.flat(1)) c.loadTheme(I);
  }
  async function P(...T) {
    return k(), S(await xm(T));
  }
  function k() {
    if (t) throw new z0("Shiki instance has been disposed");
  }
  function O() {
    t || ((t = !0), c.dispose(), (zr -= 1));
  }
  return {
    setTheme: m,
    getTheme: f,
    getLanguage: h,
    getLoadedThemes: b,
    getLoadedLanguages: v,
    loadLanguage: x,
    loadLanguageSync: y,
    loadTheme: P,
    loadThemeSync: S,
    dispose: O,
    [Symbol.dispose]: O,
  };
}
async function R4(r) {
  r.engine ||
    E4(
      "`engine` option is required. Use `createOnigurumaEngine` or `createJavaScriptRegexEngine` to create an engine.",
    );
  const [t, o, a] = await Promise.all([
    xm(r.themes || []),
    _m(r.langs || []),
    r.engine,
  ]);
  return j4({ ...r, themes: t, langs: o, engine: a });
}
async function I4(r) {
  const t = await R4(r);
  return {
    getLastGrammarState: (...o) => h4(t, ...o),
    codeToTokensBase: (o, a) => Fc(t, o, a),
    codeToTokensWithThemes: (o, a) => ym(t, o, a),
    codeToTokens: (o, a) => ri(t, o, a),
    codeToHast: (o, a) => oi(t, o, a),
    codeToHtml: (o, a) => O4(t, o, a),
    getBundledLanguages: () => ({}),
    getBundledThemes: () => ({}),
    ...t,
    getInternalContext: () => t,
  };
}
const Rp = 4294967295;
class B4 {
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
            ? { start: Rp, end: Rp, length: 0 }
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
function M4() {
  const r = {
    cache: new Map(),
    regexConstructor: () => {
      throw new Error("JavaScriptRawEngine: only support precompiled grammar");
    },
  };
  return {
    createScanner(t) {
      return new B4(t, r);
    },
    createString(t) {
      return { content: t };
    },
  };
}
function u0(r) {
  "@babel/helpers - typeof";
  return (
    (u0 =
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
    u0(r)
  );
}
function N4(r, t) {
  if (u0(r) != "object" || !r) return r;
  var o = r[Symbol.toPrimitive];
  if (o !== void 0) {
    var a = o.call(r, t);
    if (u0(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(r);
}
function Sm(r) {
  var t = N4(r, "string");
  return u0(t) == "symbol" ? t : t + "";
}
function Wr(r, t, o) {
  return (
    (t = Sm(t)) in r
      ? Object.defineProperty(r, t, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (r[t] = o),
    r
  );
}
function Ip(r, t) {
  var o = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(r);
    t &&
      (a = a.filter(function (i) {
        return Object.getOwnPropertyDescriptor(r, i).enumerable;
      })),
      o.push.apply(o, a);
  }
  return o;
}
function se(r) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ip(Object(o), !0).forEach(function (a) {
          Wr(r, a, o[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
        : Ip(Object(o)).forEach(function (a) {
            Object.defineProperty(r, a, Object.getOwnPropertyDescriptor(o, a));
          });
  }
  return r;
}
function L4(r) {
  if (Array.isArray(r)) return r;
}
function $4(r, t) {
  var o =
    r == null
      ? null
      : (typeof Symbol < "u" && r[Symbol.iterator]) || r["@@iterator"];
  if (o != null) {
    var a,
      i,
      c,
      d,
      h = [],
      f = !0,
      m = !1;
    try {
      if (((c = (o = o.call(r)).next), t === 0)) {
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
function lc(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var o = 0, a = Array(t); o < t; o++) a[o] = r[o];
  return a;
}
function Cm(r, t) {
  if (r) {
    if (typeof r == "string") return lc(r, t);
    var o = {}.toString.call(r).slice(8, -1);
    return (
      o === "Object" && r.constructor && (o = r.constructor.name),
      o === "Map" || o === "Set"
        ? Array.from(r)
        : o === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
          ? lc(r, t)
          : void 0
    );
  }
}
function A4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _n(r, t) {
  return L4(r) || $4(r, t) || Cm(r, t) || A4();
}
function D4(r, t) {
  if (r == null) return {};
  var o = {};
  for (var a in r)
    if ({}.hasOwnProperty.call(r, a)) {
      if (t.indexOf(a) !== -1) continue;
      o[a] = r[a];
    }
  return o;
}
function Sn(r, t) {
  if (r == null) return {};
  var o,
    a,
    i = D4(r, t);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(r);
    for (a = 0; a < c.length; a++)
      (o = c[a]),
        t.indexOf(o) === -1 &&
          {}.propertyIsEnumerable.call(r, o) &&
          (i[o] = r[o]);
  }
  return i;
}
var H4 = [
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
function z4(r) {
  var t = r.defaultInputValue,
    o = t === void 0 ? "" : t,
    a = r.defaultMenuIsOpen,
    i = a === void 0 ? !1 : a,
    c = r.defaultValue,
    d = c === void 0 ? null : c,
    h = r.inputValue,
    f = r.menuIsOpen,
    m = r.onChange,
    b = r.onInputChange,
    v = r.onMenuClose,
    y = r.onMenuOpen,
    x = r.value,
    S = Sn(r, H4),
    P = V.useState(h !== void 0 ? h : o),
    k = _n(P, 2),
    O = k[0],
    T = k[1],
    I = V.useState(f !== void 0 ? f : i),
    N = _n(I, 2),
    F = N[0],
    $ = N[1],
    M = V.useState(x !== void 0 ? x : d),
    X = _n(M, 2),
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
    ge = h !== void 0 ? h : O,
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
      : function (r) {
          for (var t = 1; t < arguments.length; t++) {
            var o = arguments[t];
            for (var a in o) ({}).hasOwnProperty.call(o, a) && (r[a] = o[a]);
          }
          return r;
        }),
    ue.apply(null, arguments)
  );
}
function V4(r, t) {
  if (!(r instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Bp(r, t) {
  for (var o = 0; o < t.length; o++) {
    var a = t[o];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      "value" in a && (a.writable = !0),
      Object.defineProperty(r, Sm(a.key), a);
  }
}
function G4(r, t, o) {
  return (
    t && Bp(r.prototype, t),
    o && Bp(r, o),
    Object.defineProperty(r, "prototype", { writable: !1 }),
    r
  );
}
function cc(r, t) {
  return (
    (cc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (o, a) {
          return (o.__proto__ = a), o;
        }),
    cc(r, t)
  );
}
function U4(r, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (r.prototype = Object.create(t && t.prototype, {
    constructor: { value: r, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(r, "prototype", { writable: !1 }),
    t && cc(r, t);
}
function ai(r) {
  return (
    (ai = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    ai(r)
  );
}
function wm() {
  try {
    var r = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (wm = function () {
    return !!r;
  })();
}
function q4(r) {
  if (r === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return r;
}
function W4(r, t) {
  if (t && (u0(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return q4(r);
}
function K4(r) {
  var t = wm();
  return function () {
    var o,
      a = ai(r);
    if (t) {
      var i = ai(this).constructor;
      o = Reflect.construct(a, arguments, i);
    } else o = a.apply(this, arguments);
    return W4(this, o);
  };
}
function X4(r) {
  if (Array.isArray(r)) return lc(r);
}
function Q4(r) {
  if (
    (typeof Symbol < "u" && r[Symbol.iterator] != null) ||
    r["@@iterator"] != null
  )
    return Array.from(r);
}
function Y4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rc(r) {
  return X4(r) || Q4(r) || Cm(r) || Y4();
}
function Z4(r) {
  if (r.sheet) return r.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === r) return document.styleSheets[t];
}
function J4(r) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", r.key),
    r.nonce !== void 0 && t.setAttribute("nonce", r.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var ey = (function () {
    function r(o) {
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
    var t = r.prototype;
    return (
      (t.hydrate = function (a) {
        a.forEach(this._insertTag);
      }),
      (t.insert = function (a) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(J4(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var c = Z4(i);
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
      r
    );
  })(),
  ht = "-ms-",
  ii = "-moz-",
  Ee = "-webkit-",
  km = "comm",
  Ic = "rule",
  Bc = "decl",
  ty = "@import",
  Om = "@keyframes",
  ny = "@layer",
  ry = Math.abs,
  xi = String.fromCharCode,
  oy = Object.assign;
function ay(r, t) {
  return lt(r, 0) ^ 45
    ? (((((((t << 2) ^ lt(r, 0)) << 2) ^ lt(r, 1)) << 2) ^ lt(r, 2)) << 2) ^
        lt(r, 3)
    : 0;
}
function Pm(r) {
  return r.trim();
}
function iy(r, t) {
  return (r = t.exec(r)) ? r[0] : r;
}
function Te(r, t, o) {
  return r.replace(t, o);
}
function uc(r, t) {
  return r.indexOf(t);
}
function lt(r, t) {
  return r.charCodeAt(t) | 0;
}
function to(r, t, o) {
  return r.slice(t, o);
}
function sn(r) {
  return r.length;
}
function Mc(r) {
  return r.length;
}
function ka(r, t) {
  return t.push(r), r;
}
function sy(r, t) {
  return r.map(t).join("");
}
var Si = 1,
  Y0 = 1,
  Em = 0,
  Ot = 0,
  Ye = 0,
  tr = "";
function Ci(r, t, o, a, i, c, d) {
  return {
    value: r,
    root: t,
    parent: o,
    type: a,
    props: i,
    children: c,
    line: Si,
    column: Y0,
    length: d,
    return: "",
  };
}
function Vr(r, t) {
  return oy(Ci("", null, null, "", null, null, 0), r, { length: -r.length }, t);
}
function ly() {
  return Ye;
}
function cy() {
  return (
    (Ye = Ot > 0 ? lt(tr, --Ot) : 0), Y0--, Ye === 10 && ((Y0 = 1), Si--), Ye
  );
}
function Bt() {
  return (
    (Ye = Ot < Em ? lt(tr, Ot++) : 0), Y0++, Ye === 10 && ((Y0 = 1), Si++), Ye
  );
}
function cn() {
  return lt(tr, Ot);
}
function $a() {
  return Ot;
}
function so(r, t) {
  return to(tr, r, t);
}
function no(r) {
  switch (r) {
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
function Tm(r) {
  return (Si = Y0 = 1), (Em = sn((tr = r))), (Ot = 0), [];
}
function Fm(r) {
  return (tr = ""), r;
}
function Aa(r) {
  return Pm(so(Ot - 1, dc(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function uy(r) {
  for (; (Ye = cn()) && Ye < 33; ) Bt();
  return no(r) > 2 || no(Ye) > 3 ? "" : " ";
}
function dy(r, t) {
  for (
    ;
    --t &&
    Bt() &&
    !(Ye < 48 || Ye > 102 || (Ye > 57 && Ye < 65) || (Ye > 70 && Ye < 97));

  );
  return so(r, $a() + (t < 6 && cn() == 32 && Bt() == 32));
}
function dc(r) {
  for (; Bt(); )
    switch (Ye) {
      case r:
        return Ot;
      case 34:
      case 39:
        r !== 34 && r !== 39 && dc(Ye);
        break;
      case 40:
        r === 41 && dc(r);
        break;
      case 92:
        Bt();
        break;
    }
  return Ot;
}
function fy(r, t) {
  for (; Bt() && r + Ye !== 57; ) if (r + Ye === 84 && cn() === 47) break;
  return "/*" + so(t, Ot - 1) + "*" + xi(r === 47 ? r : Bt());
}
function py(r) {
  for (; !no(cn()); ) Bt();
  return so(r, Ot);
}
function hy(r) {
  return Fm(Da("", null, null, null, [""], (r = Tm(r)), 0, [0], r));
}
function Da(r, t, o, a, i, c, d, h, f) {
  for (
    var m = 0,
      b = 0,
      v = d,
      y = 0,
      x = 0,
      S = 0,
      P = 1,
      k = 1,
      O = 1,
      T = 0,
      I = "",
      N = i,
      F = c,
      $ = a,
      M = I;
    k;

  )
    switch (((S = T), (T = Bt()))) {
      case 40:
        if (S != 108 && lt(M, v - 1) == 58) {
          uc((M += Te(Aa(T), "&", "&\f")), "&\f") != -1 && (O = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        M += Aa(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        M += uy(S);
        break;
      case 92:
        M += dy($a() - 1, 7);
        continue;
      case 47:
        switch (cn()) {
          case 42:
          case 47:
            ka(my(fy(Bt(), $a()), t, o), f);
            break;
          default:
            M += "/";
        }
        break;
      case 123 * P:
        h[m++] = sn(M) * O;
      case 125 * P:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            k = 0;
          case 59 + b:
            O == -1 && (M = Te(M, /\f/g, "")),
              x > 0 &&
                sn(M) - v &&
                ka(
                  x > 32
                    ? Np(M + ";", a, o, v - 1)
                    : Np(Te(M, " ", "") + ";", a, o, v - 2),
                  f,
                );
            break;
          case 59:
            M += ";";
          default:
            if (
              (ka(($ = Mp(M, t, o, m, b, i, h, I, (N = []), (F = []), v)), c),
              T === 123)
            )
              if (b === 0) Da(M, t, $, $, N, c, v, h, F);
              else
                switch (y === 99 && lt(M, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Da(
                      r,
                      $,
                      $,
                      a && ka(Mp(r, $, $, 0, 0, i, h, I, i, (N = []), v), F),
                      i,
                      F,
                      v,
                      h,
                      a ? N : F,
                    );
                    break;
                  default:
                    Da(M, $, $, $, [""], F, 0, h, F);
                }
        }
        (m = b = x = 0), (P = O = 1), (I = M = ""), (v = d);
        break;
      case 58:
        (v = 1 + sn(M)), (x = S);
      default:
        if (P < 1) {
          if (T == 123) --P;
          else if (T == 125 && P++ == 0 && cy() == 125) continue;
        }
        switch (((M += xi(T)), T * P)) {
          case 38:
            O = b > 0 ? 1 : ((M += "\f"), -1);
            break;
          case 44:
            (h[m++] = (sn(M) - 1) * O), (O = 1);
            break;
          case 64:
            cn() === 45 && (M += Aa(Bt())),
              (y = cn()),
              (b = v = sn((I = M += py($a())))),
              T++;
            break;
          case 45:
            S === 45 && sn(M) == 2 && (P = 0);
        }
    }
  return c;
}
function Mp(r, t, o, a, i, c, d, h, f, m, b) {
  for (
    var v = i - 1, y = i === 0 ? c : [""], x = Mc(y), S = 0, P = 0, k = 0;
    S < a;
    ++S
  )
    for (var O = 0, T = to(r, v + 1, (v = ry((P = d[S])))), I = r; O < x; ++O)
      (I = Pm(P > 0 ? y[O] + " " + T : Te(T, /&\f/g, y[O]))) && (f[k++] = I);
  return Ci(r, t, o, i === 0 ? Ic : h, f, m, b);
}
function my(r, t, o) {
  return Ci(r, t, o, km, xi(ly()), to(r, 2, -2), 0);
}
function Np(r, t, o, a) {
  return Ci(r, t, o, Bc, to(r, 0, a), to(r, a + 1, -1), a);
}
function U0(r, t) {
  for (var o = "", a = Mc(r), i = 0; i < a; i++) o += t(r[i], i, r, t) || "";
  return o;
}
function gy(r, t, o, a) {
  switch (r.type) {
    case ny:
      if (r.children.length) break;
    case ty:
    case Bc:
      return (r.return = r.return || r.value);
    case km:
      return "";
    case Om:
      return (r.return = r.value + "{" + U0(r.children, a) + "}");
    case Ic:
      r.value = r.props.join(",");
  }
  return sn((o = U0(r.children, a)))
    ? (r.return = r.value + "{" + o + "}")
    : "";
}
function by(r) {
  var t = Mc(r);
  return function (o, a, i, c) {
    for (var d = "", h = 0; h < t; h++) d += r[h](o, a, i, c) || "";
    return d;
  };
}
function vy(r) {
  return function (t) {
    t.root || ((t = t.return) && r(t));
  };
}
function yy(r) {
  var t = Object.create(null);
  return function (o) {
    return t[o] === void 0 && (t[o] = r(o)), t[o];
  };
}
var _y = function (t, o, a) {
    for (
      var i = 0, c = 0;
      (i = c), (c = cn()), i === 38 && c === 12 && (o[a] = 1), !no(c);

    )
      Bt();
    return so(t, Ot);
  },
  xy = function (t, o) {
    var a = -1,
      i = 44;
    do
      switch (no(i)) {
        case 0:
          i === 38 && cn() === 12 && (o[a] = 1), (t[a] += _y(Ot - 1, o, a));
          break;
        case 2:
          t[a] += Aa(i);
          break;
        case 4:
          if (i === 44) {
            (t[++a] = cn() === 58 ? "&\f" : ""), (o[a] = t[a].length);
            break;
          }
        default:
          t[a] += xi(i);
      }
    while ((i = Bt()));
    return t;
  },
  Sy = function (t, o) {
    return Fm(xy(Tm(t), o));
  },
  Lp = new WeakMap(),
  Cy = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var o = t.value,
          a = t.parent,
          i = t.column === a.column && t.line === a.line;
        a.type !== "rule";

      )
        if (((a = a.parent), !a)) return;
      if (
        !(t.props.length === 1 && o.charCodeAt(0) !== 58 && !Lp.get(a)) &&
        !i
      ) {
        Lp.set(t, !0);
        for (
          var c = [], d = Sy(o, c), h = a.props, f = 0, m = 0;
          f < d.length;
          f++
        )
          for (var b = 0; b < h.length; b++, m++)
            t.props[m] = c[f] ? d[f].replace(/&\f/g, h[b]) : h[b] + " " + d[f];
      }
    }
  },
  wy = function (t) {
    if (t.type === "decl") {
      var o = t.value;
      o.charCodeAt(0) === 108 &&
        o.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function jm(r, t) {
  switch (ay(r, t)) {
    case 5103:
      return Ee + "print-" + r + r;
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
      return Ee + r + r;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ee + r + ii + r + ht + r + r;
    case 6828:
    case 4268:
      return Ee + r + ht + r + r;
    case 6165:
      return Ee + r + ht + "flex-" + r + r;
    case 5187:
      return (
        Ee + r + Te(r, /(\w+).+(:[^]+)/, Ee + "box-$1$2" + ht + "flex-$1$2") + r
      );
    case 5443:
      return Ee + r + ht + "flex-item-" + Te(r, /flex-|-self/, "") + r;
    case 4675:
      return (
        Ee +
        r +
        ht +
        "flex-line-pack" +
        Te(r, /align-content|flex-|-self/, "") +
        r
      );
    case 5548:
      return Ee + r + ht + Te(r, "shrink", "negative") + r;
    case 5292:
      return Ee + r + ht + Te(r, "basis", "preferred-size") + r;
    case 6060:
      return (
        Ee +
        "box-" +
        Te(r, "-grow", "") +
        Ee +
        r +
        ht +
        Te(r, "grow", "positive") +
        r
      );
    case 4554:
      return Ee + Te(r, /([^-])(transform)/g, "$1" + Ee + "$2") + r;
    case 6187:
      return (
        Te(
          Te(Te(r, /(zoom-|grab)/, Ee + "$1"), /(image-set)/, Ee + "$1"),
          r,
          "",
        ) + r
      );
    case 5495:
    case 3959:
      return Te(r, /(image-set\([^]*)/, Ee + "$1$`$1");
    case 4968:
      return (
        Te(
          Te(r, /(.+:)(flex-)?(.*)/, Ee + "box-pack:$3" + ht + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        Ee +
        r +
        r
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Te(r, /(.+)-inline(.+)/, Ee + "$1$2") + r;
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
      if (sn(r) - 1 - t > 6)
        switch (lt(r, t + 1)) {
          case 109:
            if (lt(r, t + 4) !== 45) break;
          case 102:
            return (
              Te(
                r,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Ee +
                  "$2-$3$1" +
                  ii +
                  (lt(r, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + r
            );
          case 115:
            return ~uc(r, "stretch")
              ? jm(Te(r, "stretch", "fill-available"), t) + r
              : r;
        }
      break;
    case 4949:
      if (lt(r, t + 1) !== 115) break;
    case 6444:
      switch (lt(r, sn(r) - 3 - (~uc(r, "!important") && 10))) {
        case 107:
          return Te(r, ":", ":" + Ee) + r;
        case 101:
          return (
            Te(
              r,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Ee +
                (lt(r, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Ee +
                "$2$3$1" +
                ht +
                "$2box$3",
            ) + r
          );
      }
      break;
    case 5936:
      switch (lt(r, t + 11)) {
        case 114:
          return Ee + r + ht + Te(r, /[svh]\w+-[tblr]{2}/, "tb") + r;
        case 108:
          return Ee + r + ht + Te(r, /[svh]\w+-[tblr]{2}/, "tb-rl") + r;
        case 45:
          return Ee + r + ht + Te(r, /[svh]\w+-[tblr]{2}/, "lr") + r;
      }
      return Ee + r + ht + r + r;
  }
  return r;
}
var ky = function (t, o, a, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Bc:
          t.return = jm(t.value, t.length);
          break;
        case Om:
          return U0([Vr(t, { value: Te(t.value, "@", "@" + Ee) })], i);
        case Ic:
          if (t.length)
            return sy(t.props, function (c) {
              switch (iy(c, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return U0(
                    [Vr(t, { props: [Te(c, /:(read-\w+)/, ":" + ii + "$1")] })],
                    i,
                  );
                case "::placeholder":
                  return U0(
                    [
                      Vr(t, {
                        props: [Te(c, /:(plac\w+)/, ":" + Ee + "input-$1")],
                      }),
                      Vr(t, { props: [Te(c, /:(plac\w+)/, ":" + ii + "$1")] }),
                      Vr(t, { props: [Te(c, /:(plac\w+)/, ht + "input-$1")] }),
                    ],
                    i,
                  );
              }
              return "";
            });
      }
  },
  Oy = [ky],
  Py = function (t) {
    var o = t.key;
    if (o === "css") {
      var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(a, function (P) {
        var k = P.getAttribute("data-emotion");
        k.indexOf(" ") !== -1 &&
          (document.head.appendChild(P), P.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || Oy,
      c = {},
      d,
      h = [];
    (d = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + o + ' "]'),
        function (P) {
          for (
            var k = P.getAttribute("data-emotion").split(" "), O = 1;
            O < k.length;
            O++
          )
            c[k[O]] = !0;
          h.push(P);
        },
      );
    var f,
      m = [Cy, wy];
    {
      var b,
        v = [
          gy,
          vy(function (P) {
            b.insert(P);
          }),
        ],
        y = by(m.concat(i, v)),
        x = function (k) {
          return U0(hy(k), y);
        };
      f = function (k, O, T, I) {
        (b = T),
          x(k ? k + "{" + O.styles + "}" : O.styles),
          I && (S.inserted[O.name] = !0);
      };
    }
    var S = {
      key: o,
      sheet: new ey({
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
  Bl = { exports: {} },
  Fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $p;
function Ey() {
  if ($p) return Fe;
  $p = 1;
  var r = typeof Symbol == "function" && Symbol.for,
    t = r ? Symbol.for("react.element") : 60103,
    o = r ? Symbol.for("react.portal") : 60106,
    a = r ? Symbol.for("react.fragment") : 60107,
    i = r ? Symbol.for("react.strict_mode") : 60108,
    c = r ? Symbol.for("react.profiler") : 60114,
    d = r ? Symbol.for("react.provider") : 60109,
    h = r ? Symbol.for("react.context") : 60110,
    f = r ? Symbol.for("react.async_mode") : 60111,
    m = r ? Symbol.for("react.concurrent_mode") : 60111,
    b = r ? Symbol.for("react.forward_ref") : 60112,
    v = r ? Symbol.for("react.suspense") : 60113,
    y = r ? Symbol.for("react.suspense_list") : 60120,
    x = r ? Symbol.for("react.memo") : 60115,
    S = r ? Symbol.for("react.lazy") : 60116,
    P = r ? Symbol.for("react.block") : 60121,
    k = r ? Symbol.for("react.fundamental") : 60117,
    O = r ? Symbol.for("react.responder") : 60118,
    T = r ? Symbol.for("react.scope") : 60119;
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
  function N(F) {
    return I(F) === m;
  }
  return (
    (Fe.AsyncMode = f),
    (Fe.ConcurrentMode = m),
    (Fe.ContextConsumer = h),
    (Fe.ContextProvider = d),
    (Fe.Element = t),
    (Fe.ForwardRef = b),
    (Fe.Fragment = a),
    (Fe.Lazy = S),
    (Fe.Memo = x),
    (Fe.Portal = o),
    (Fe.Profiler = c),
    (Fe.StrictMode = i),
    (Fe.Suspense = v),
    (Fe.isAsyncMode = function (F) {
      return N(F) || I(F) === f;
    }),
    (Fe.isConcurrentMode = N),
    (Fe.isContextConsumer = function (F) {
      return I(F) === h;
    }),
    (Fe.isContextProvider = function (F) {
      return I(F) === d;
    }),
    (Fe.isElement = function (F) {
      return typeof F == "object" && F !== null && F.$$typeof === t;
    }),
    (Fe.isForwardRef = function (F) {
      return I(F) === b;
    }),
    (Fe.isFragment = function (F) {
      return I(F) === a;
    }),
    (Fe.isLazy = function (F) {
      return I(F) === S;
    }),
    (Fe.isMemo = function (F) {
      return I(F) === x;
    }),
    (Fe.isPortal = function (F) {
      return I(F) === o;
    }),
    (Fe.isProfiler = function (F) {
      return I(F) === c;
    }),
    (Fe.isStrictMode = function (F) {
      return I(F) === i;
    }),
    (Fe.isSuspense = function (F) {
      return I(F) === v;
    }),
    (Fe.isValidElementType = function (F) {
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
            F.$$typeof === O ||
            F.$$typeof === T ||
            F.$$typeof === P))
      );
    }),
    (Fe.typeOf = I),
    Fe
  );
}
var Ap;
function Ty() {
  return Ap || ((Ap = 1), (Bl.exports = Ey())), Bl.exports;
}
var Ml, Dp;
function Fy() {
  if (Dp) return Ml;
  Dp = 1;
  var r = Ty(),
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
  (c[r.ForwardRef] = a), (c[r.Memo] = i);
  function d(S) {
    return r.isMemo(S) ? i : c[S.$$typeof] || t;
  }
  var h = Object.defineProperty,
    f = Object.getOwnPropertyNames,
    m = Object.getOwnPropertySymbols,
    b = Object.getOwnPropertyDescriptor,
    v = Object.getPrototypeOf,
    y = Object.prototype;
  function x(S, P, k) {
    if (typeof P != "string") {
      if (y) {
        var O = v(P);
        O && O !== y && x(S, O, k);
      }
      var T = f(P);
      m && (T = T.concat(m(P)));
      for (var I = d(S), N = d(P), F = 0; F < T.length; ++F) {
        var $ = T[F];
        if (!o[$] && !(k && k[$]) && !(N && N[$]) && !(I && I[$])) {
          var M = b(P, $);
          try {
            h(S, $, M);
          } catch {}
        }
      }
    }
    return S;
  }
  return (Ml = x), Ml;
}
Fy();
var jy = !0;
function Ry(r, t, o) {
  var a = "";
  return (
    o.split(" ").forEach(function (i) {
      r[i] !== void 0 ? t.push(r[i] + ";") : i && (a += i + " ");
    }),
    a
  );
}
var Rm = function (t, o, a) {
    var i = t.key + "-" + o.name;
    (a === !1 || jy === !1) &&
      t.registered[i] === void 0 &&
      (t.registered[i] = o.styles);
  },
  Iy = function (t, o, a) {
    Rm(t, o, a);
    var i = t.key + "-" + o.name;
    if (t.inserted[o.name] === void 0) {
      var c = o;
      do t.insert(o === c ? "." + i : "", c, t.sheet, !0), (c = c.next);
      while (c !== void 0);
    }
  };
function By(r) {
  for (var t = 0, o, a = 0, i = r.length; i >= 4; ++a, i -= 4)
    (o =
      (r.charCodeAt(a) & 255) |
      ((r.charCodeAt(++a) & 255) << 8) |
      ((r.charCodeAt(++a) & 255) << 16) |
      ((r.charCodeAt(++a) & 255) << 24)),
      (o = (o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16)),
      (o ^= o >>> 24),
      (t =
        ((o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (i) {
    case 3:
      t ^= (r.charCodeAt(a + 2) & 255) << 16;
    case 2:
      t ^= (r.charCodeAt(a + 1) & 255) << 8;
    case 1:
      (t ^= r.charCodeAt(a) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var My = {
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
  Ny = /[A-Z]|^ms/g,
  Ly = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Im = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Hp = function (t) {
    return t != null && typeof t != "boolean";
  },
  Nl = yy(function (r) {
    return Im(r) ? r : r.replace(Ny, "-$&").toLowerCase();
  }),
  zp = function (t, o) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof o == "string")
          return o.replace(Ly, function (a, i, c) {
            return (ln = { name: i, styles: c, next: ln }), i;
          });
    }
    return My[t] !== 1 && !Im(t) && typeof o == "number" && o !== 0
      ? o + "px"
      : o;
  };
function ro(r, t, o) {
  if (o == null) return "";
  var a = o;
  if (a.__emotion_styles !== void 0) return a;
  switch (typeof o) {
    case "boolean":
      return "";
    case "object": {
      var i = o;
      if (i.anim === 1)
        return (ln = { name: i.name, styles: i.styles, next: ln }), i.name;
      var c = o;
      if (c.styles !== void 0) {
        var d = c.next;
        if (d !== void 0)
          for (; d !== void 0; )
            (ln = { name: d.name, styles: d.styles, next: ln }), (d = d.next);
        var h = c.styles + ";";
        return h;
      }
      return $y(r, t, o);
    }
    case "function": {
      if (r !== void 0) {
        var f = ln,
          m = o(r);
        return (ln = f), ro(r, t, m);
      }
      break;
    }
  }
  var b = o;
  return b;
}
function $y(r, t, o) {
  var a = "";
  if (Array.isArray(o))
    for (var i = 0; i < o.length; i++) a += ro(r, t, o[i]) + ";";
  else
    for (var c in o) {
      var d = o[c];
      if (typeof d != "object") {
        var h = d;
        Hp(h) && (a += Nl(c) + ":" + zp(c, h) + ";");
      } else if (Array.isArray(d) && typeof d[0] == "string" && t == null)
        for (var f = 0; f < d.length; f++)
          Hp(d[f]) && (a += Nl(c) + ":" + zp(c, d[f]) + ";");
      else {
        var m = ro(r, t, d);
        switch (c) {
          case "animation":
          case "animationName": {
            a += Nl(c) + ":" + m + ";";
            break;
          }
          default:
            a += c + "{" + m + "}";
        }
      }
    }
  return a;
}
var Vp = /label:\s*([^\s;{]+)\s*(;|$)/g,
  ln;
function Bm(r, t, o) {
  if (
    r.length === 1 &&
    typeof r[0] == "object" &&
    r[0] !== null &&
    r[0].styles !== void 0
  )
    return r[0];
  var a = !0,
    i = "";
  ln = void 0;
  var c = r[0];
  if (c == null || c.raw === void 0) (a = !1), (i += ro(o, t, c));
  else {
    var d = c;
    i += d[0];
  }
  for (var h = 1; h < r.length; h++)
    if (((i += ro(o, t, r[h])), a)) {
      var f = c;
      i += f[h];
    }
  Vp.lastIndex = 0;
  for (var m = "", b; (b = Vp.exec(i)) !== null; ) m += "-" + b[1];
  var v = By(i) + m;
  return { name: v, styles: i, next: ln };
}
var Ay = function (t) {
    return t();
  },
  Dy = Hf.useInsertionEffect ? Hf.useInsertionEffect : !1,
  Hy = Dy || Ay,
  Mm = V.createContext(typeof HTMLElement < "u" ? Py({ key: "css" }) : null);
Mm.Provider;
var zy = function (t) {
    return V.forwardRef(function (o, a) {
      var i = V.useContext(Mm);
      return t(o, i, a);
    });
  },
  Vy = V.createContext({}),
  Nc = {}.hasOwnProperty,
  fc = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  Gy = function (t, o) {
    var a = {};
    for (var i in o) Nc.call(o, i) && (a[i] = o[i]);
    return (a[fc] = t), a;
  },
  Uy = function (t) {
    var o = t.cache,
      a = t.serialized,
      i = t.isStringTag;
    return (
      Rm(o, a, i),
      Hy(function () {
        return Iy(o, a, i);
      }),
      null
    );
  },
  qy = zy(function (r, t, o) {
    var a = r.css;
    typeof a == "string" && t.registered[a] !== void 0 && (a = t.registered[a]);
    var i = r[fc],
      c = [a],
      d = "";
    typeof r.className == "string"
      ? (d = Ry(t.registered, c, r.className))
      : r.className != null && (d = r.className + " ");
    var h = Bm(c, void 0, V.useContext(Vy));
    d += t.key + "-" + h.name;
    var f = {};
    for (var m in r) Nc.call(r, m) && m !== "css" && m !== fc && (f[m] = r[m]);
    return (
      (f.className = d),
      o && (f.ref = o),
      V.createElement(
        V.Fragment,
        null,
        V.createElement(Uy, {
          cache: t,
          serialized: h,
          isStringTag: typeof i == "string",
        }),
        V.createElement(i, f),
      )
    );
  }),
  Wy = qy,
  re = function (t, o) {
    var a = arguments;
    if (o == null || !Nc.call(o, "css"))
      return V.createElement.apply(void 0, a);
    var i = a.length,
      c = new Array(i);
    (c[0] = Wy), (c[1] = Gy(t, o));
    for (var d = 2; d < i; d++) c[d] = a[d];
    return V.createElement.apply(null, c);
  };
(function (r) {
  var t;
  t || (t = r.JSX || (r.JSX = {}));
})(re || (re = {}));
function Lc() {
  for (var r = arguments.length, t = new Array(r), o = 0; o < r; o++)
    t[o] = arguments[o];
  return Bm(t);
}
function Ky() {
  var r = Lc.apply(void 0, arguments),
    t = "animation-" + r.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + r.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    },
  };
}
function Xy(r, t) {
  return (
    t || (t = r.slice(0)),
    Object.freeze(
      Object.defineProperties(r, { raw: { value: Object.freeze(t) } }),
    )
  );
}
var Qy = gh();
const Yy = Math.min,
  Zy = Math.max,
  si = Math.round,
  Oa = Math.floor,
  li = (r) => ({ x: r, y: r });
function Jy(r) {
  const { x: t, y: o, width: a, height: i } = r;
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
function wi() {
  return typeof window < "u";
}
function Nm(r) {
  return $m(r) ? (r.nodeName || "").toLowerCase() : "#document";
}
function xn(r) {
  var t;
  return (
    (r == null || (t = r.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Lm(r) {
  var t;
  return (t = ($m(r) ? r.ownerDocument : r.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function $m(r) {
  return wi() ? r instanceof Node || r instanceof xn(r).Node : !1;
}
function e3(r) {
  return wi() ? r instanceof Element || r instanceof xn(r).Element : !1;
}
function $c(r) {
  return wi() ? r instanceof HTMLElement || r instanceof xn(r).HTMLElement : !1;
}
function Gp(r) {
  return !wi() || typeof ShadowRoot > "u"
    ? !1
    : r instanceof ShadowRoot || r instanceof xn(r).ShadowRoot;
}
function Am(r) {
  const { overflow: t, overflowX: o, overflowY: a, display: i } = Ac(r);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + a + o) &&
    !["inline", "contents"].includes(i)
  );
}
function t3() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function n3(r) {
  return ["html", "body", "#document"].includes(Nm(r));
}
function Ac(r) {
  return xn(r).getComputedStyle(r);
}
function r3(r) {
  if (Nm(r) === "html") return r;
  const t = r.assignedSlot || r.parentNode || (Gp(r) && r.host) || Lm(r);
  return Gp(t) ? t.host : t;
}
function Dm(r) {
  const t = r3(r);
  return n3(t)
    ? r.ownerDocument
      ? r.ownerDocument.body
      : r.body
    : $c(t) && Am(t)
      ? t
      : Dm(t);
}
function ci(r, t, o) {
  var a;
  t === void 0 && (t = []), o === void 0 && (o = !0);
  const i = Dm(r),
    c = i === ((a = r.ownerDocument) == null ? void 0 : a.body),
    d = xn(i);
  if (c) {
    const h = pc(d);
    return t.concat(
      d,
      d.visualViewport || [],
      Am(i) ? i : [],
      h && o ? ci(h) : [],
    );
  }
  return t.concat(i, ci(i, [], o));
}
function pc(r) {
  return r.parent && Object.getPrototypeOf(r.parent) ? r.frameElement : null;
}
function o3(r) {
  const t = Ac(r);
  let o = parseFloat(t.width) || 0,
    a = parseFloat(t.height) || 0;
  const i = $c(r),
    c = i ? r.offsetWidth : o,
    d = i ? r.offsetHeight : a,
    h = si(o) !== c || si(a) !== d;
  return h && ((o = c), (a = d)), { width: o, height: a, $: h };
}
function Dc(r) {
  return e3(r) ? r : r.contextElement;
}
function Up(r) {
  const t = Dc(r);
  if (!$c(t)) return li(1);
  const o = t.getBoundingClientRect(),
    { width: a, height: i, $: c } = o3(t);
  let d = (c ? si(o.width) : o.width) / a,
    h = (c ? si(o.height) : o.height) / i;
  return (
    (!d || !Number.isFinite(d)) && (d = 1),
    (!h || !Number.isFinite(h)) && (h = 1),
    { x: d, y: h }
  );
}
const a3 = li(0);
function i3(r) {
  const t = xn(r);
  return !t3() || !t.visualViewport
    ? a3
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function s3(r, t, o) {
  return !1;
}
function qp(r, t, o, a) {
  t === void 0 && (t = !1);
  const i = r.getBoundingClientRect(),
    c = Dc(r);
  let d = li(1);
  t && (d = Up(r));
  const h = s3() ? i3(c) : li(0);
  let f = (i.left + h.x) / d.x,
    m = (i.top + h.y) / d.y,
    b = i.width / d.x,
    v = i.height / d.y;
  if (c) {
    const y = xn(c),
      x = a;
    let S = y,
      P = pc(S);
    for (; P && a && x !== S; ) {
      const k = Up(P),
        O = P.getBoundingClientRect(),
        T = Ac(P),
        I = O.left + (P.clientLeft + parseFloat(T.paddingLeft)) * k.x,
        N = O.top + (P.clientTop + parseFloat(T.paddingTop)) * k.y;
      (f *= k.x),
        (m *= k.y),
        (b *= k.x),
        (v *= k.y),
        (f += I),
        (m += N),
        (S = xn(P)),
        (P = pc(S));
    }
  }
  return Jy({ width: b, height: v, x: f, y: m });
}
function Hm(r, t) {
  return (
    r.x === t.x && r.y === t.y && r.width === t.width && r.height === t.height
  );
}
function l3(r, t) {
  let o = null,
    a;
  const i = Lm(r);
  function c() {
    var h;
    clearTimeout(a), (h = o) == null || h.disconnect(), (o = null);
  }
  function d(h, f) {
    h === void 0 && (h = !1), f === void 0 && (f = 1), c();
    const m = r.getBoundingClientRect(),
      { left: b, top: v, width: y, height: x } = m;
    if ((h || t(), !y || !x)) return;
    const S = Oa(v),
      P = Oa(i.clientWidth - (b + y)),
      k = Oa(i.clientHeight - (v + x)),
      O = Oa(b),
      I = {
        rootMargin: -S + "px " + -P + "px " + -k + "px " + -O + "px",
        threshold: Zy(0, Yy(1, f)) || 1,
      };
    let N = !0;
    function F($) {
      const M = $[0].intersectionRatio;
      if (M !== f) {
        if (!N) return d();
        M
          ? d(!1, M)
          : (a = setTimeout(() => {
              d(!1, 1e-7);
            }, 1e3));
      }
      M === 1 && !Hm(m, r.getBoundingClientRect()) && d(), (N = !1);
    }
    try {
      o = new IntersectionObserver(F, { ...I, root: i.ownerDocument });
    } catch {
      o = new IntersectionObserver(F, I);
    }
    o.observe(r);
  }
  return d(!0), c;
}
function c3(r, t, o, a) {
  a === void 0 && (a = {});
  const {
      ancestorScroll: i = !0,
      ancestorResize: c = !0,
      elementResize: d = typeof ResizeObserver == "function",
      layoutShift: h = typeof IntersectionObserver == "function",
      animationFrame: f = !1,
    } = a,
    m = Dc(r),
    b = i || c ? [...(m ? ci(m) : []), ...ci(t)] : [];
  b.forEach((O) => {
    i && O.addEventListener("scroll", o, { passive: !0 }),
      c && O.addEventListener("resize", o);
  });
  const v = m && h ? l3(m, o) : null;
  let y = -1,
    x = null;
  d &&
    ((x = new ResizeObserver((O) => {
      let [T] = O;
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
    P = f ? qp(r) : null;
  f && k();
  function k() {
    const O = qp(r);
    P && !Hm(P, O) && o(), (P = O), (S = requestAnimationFrame(k));
  }
  return (
    o(),
    () => {
      var O;
      b.forEach((T) => {
        i && T.removeEventListener("scroll", o),
          c && T.removeEventListener("resize", o);
      }),
        v == null || v(),
        (O = x) == null || O.disconnect(),
        (x = null),
        f && cancelAnimationFrame(S);
    }
  );
}
var hc = V.useLayoutEffect,
  u3 = [
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
  ui = function () {};
function d3(r, t) {
  return t ? (t[0] === "-" ? r + t : r + "__" + t) : r;
}
function f3(r, t) {
  for (
    var o = arguments.length, a = new Array(o > 2 ? o - 2 : 0), i = 2;
    i < o;
    i++
  )
    a[i - 2] = arguments[i];
  var c = [].concat(a);
  if (t && r)
    for (var d in t) t.hasOwnProperty(d) && t[d] && c.push("".concat(d3(r, d)));
  return c
    .filter(function (h) {
      return h;
    })
    .map(function (h) {
      return String(h).trim();
    })
    .join(" ");
}
var Wp = function (t) {
    return x3(t)
      ? t.filter(Boolean)
      : u0(t) === "object" && t !== null
        ? [t]
        : [];
  },
  zm = function (t) {
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
    var o = Sn(t, u3);
    return se({}, o);
  },
  Ge = function (t, o, a) {
    var i = t.cx,
      c = t.getStyles,
      d = t.getClassNames,
      h = t.className;
    return { css: c(o, t), className: i(a ?? {}, d(o, t), h) };
  };
function ki(r) {
  return [document.documentElement, document.body, window].indexOf(r) > -1;
}
function p3(r) {
  return ki(r) ? window.innerHeight : r.clientHeight;
}
function Vm(r) {
  return ki(r) ? window.pageYOffset : r.scrollTop;
}
function di(r, t) {
  if (ki(r)) {
    window.scrollTo(0, t);
    return;
  }
  r.scrollTop = t;
}
function h3(r) {
  var t = getComputedStyle(r),
    o = t.position === "absolute",
    a = /(auto|scroll)/;
  if (t.position === "fixed") return document.documentElement;
  for (var i = r; (i = i.parentElement); )
    if (
      ((t = getComputedStyle(i)),
      !(o && t.position === "static") &&
        a.test(t.overflow + t.overflowY + t.overflowX))
    )
      return i;
  return document.documentElement;
}
function m3(r, t, o, a) {
  return o * ((r = r / a - 1) * r * r + 1) + t;
}
function Pa(r, t) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200,
    a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ui,
    i = Vm(r),
    c = t - i,
    d = 10,
    h = 0;
  function f() {
    h += d;
    var m = m3(h, i, c, o);
    di(r, m), h < o ? window.requestAnimationFrame(f) : a(r);
  }
  f();
}
function Kp(r, t) {
  var o = r.getBoundingClientRect(),
    a = t.getBoundingClientRect(),
    i = t.offsetHeight / 3;
  a.bottom + i > o.bottom
    ? di(
        r,
        Math.min(
          t.offsetTop + t.clientHeight - r.offsetHeight + i,
          r.scrollHeight,
        ),
      )
    : a.top - i < o.top && di(r, Math.max(t.offsetTop - i, 0));
}
function g3(r) {
  var t = r.getBoundingClientRect();
  return {
    bottom: t.bottom,
    height: t.height,
    left: t.left,
    right: t.right,
    top: t.top,
    width: t.width,
  };
}
function Xp() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function b3() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  } catch {
    return !1;
  }
}
var Gm = !1,
  v3 = {
    get passive() {
      return (Gm = !0);
    },
  },
  Ea = typeof window < "u" ? window : {};
Ea.addEventListener &&
  Ea.removeEventListener &&
  (Ea.addEventListener("p", ui, v3), Ea.removeEventListener("p", ui, !1));
var y3 = Gm;
function _3(r) {
  return r != null;
}
function x3(r) {
  return Array.isArray(r);
}
function Ta(r, t, o) {
  return r ? t : o;
}
var S3 = function (t) {
    for (
      var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1;
      i < o;
      i++
    )
      a[i - 1] = arguments[i];
    var c = Object.entries(t).filter(function (d) {
      var h = _n(d, 1),
        f = h[0];
      return !a.includes(f);
    });
    return c.reduce(function (d, h) {
      var f = _n(h, 2),
        m = f[0],
        b = f[1];
      return (d[m] = b), d;
    }, {});
  },
  C3 = ["children", "innerProps"],
  w3 = ["children", "innerProps"];
function k3(r) {
  var t = r.maxHeight,
    o = r.menuEl,
    a = r.minHeight,
    i = r.placement,
    c = r.shouldScroll,
    d = r.isFixedPosition,
    h = r.controlHeight,
    f = h3(o),
    m = { placement: "bottom", maxHeight: t };
  if (!o || !o.offsetParent) return m;
  var b = f.getBoundingClientRect(),
    v = b.height,
    y = o.getBoundingClientRect(),
    x = y.bottom,
    S = y.height,
    P = y.top,
    k = o.offsetParent.getBoundingClientRect(),
    O = k.top,
    T = d ? window.innerHeight : p3(f),
    I = Vm(f),
    N = parseInt(getComputedStyle(o).marginBottom, 10),
    F = parseInt(getComputedStyle(o).marginTop, 10),
    $ = O - F,
    M = T - P,
    X = $ + I,
    he = v - I - P,
    Ce = x - T + I + N,
    te = I + P - F,
    ce = 160;
  switch (i) {
    case "auto":
    case "bottom":
      if (M >= S) return { placement: "bottom", maxHeight: t };
      if (he >= S && !d)
        return c && Pa(f, Ce, ce), { placement: "bottom", maxHeight: t };
      if ((!d && he >= a) || (d && M >= a)) {
        c && Pa(f, Ce, ce);
        var ye = d ? M - N : he - N;
        return { placement: "bottom", maxHeight: ye };
      }
      if (i === "auto" || d) {
        var Se = t,
          ge = d ? $ : X;
        return (
          ge >= a && (Se = Math.min(ge - N - h, t)),
          { placement: "top", maxHeight: Se }
        );
      }
      if (i === "bottom")
        return c && di(f, Ce), { placement: "bottom", maxHeight: t };
      break;
    case "top":
      if ($ >= S) return { placement: "top", maxHeight: t };
      if (X >= S && !d)
        return c && Pa(f, te, ce), { placement: "top", maxHeight: t };
      if ((!d && X >= a) || (d && $ >= a)) {
        var me = t;
        return (
          ((!d && X >= a) || (d && $ >= a)) && (me = d ? $ - F : X - F),
          c && Pa(f, te, ce),
          { placement: "top", maxHeight: me }
        );
      }
      return { placement: "bottom", maxHeight: t };
    default:
      throw new Error('Invalid placement provided "'.concat(i, '".'));
  }
  return m;
}
function O3(r) {
  var t = { bottom: "top", top: "bottom" };
  return r ? t[r] : "bottom";
}
var Um = function (t) {
    return t === "auto" ? "bottom" : t;
  },
  P3 = function (t, o) {
    var a,
      i = t.placement,
      c = t.theme,
      d = c.borderRadius,
      h = c.spacing,
      f = c.colors;
    return se(
      ((a = { label: "menu" }),
      Wr(a, O3(i), "100%"),
      Wr(a, "position", "absolute"),
      Wr(a, "width", "100%"),
      Wr(a, "zIndex", 1),
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
  qm = V.createContext(null),
  E3 = function (t) {
    var o = t.children,
      a = t.minMenuHeight,
      i = t.maxMenuHeight,
      c = t.menuPlacement,
      d = t.menuPosition,
      h = t.menuShouldScrollIntoView,
      f = t.theme,
      m = V.useContext(qm) || {},
      b = m.setPortalPlacement,
      v = V.useRef(null),
      y = V.useState(i),
      x = _n(y, 2),
      S = x[0],
      P = x[1],
      k = V.useState(null),
      O = _n(k, 2),
      T = O[0],
      I = O[1],
      N = f.spacing.controlHeight;
    return (
      hc(
        function () {
          var F = v.current;
          if (F) {
            var $ = d === "fixed",
              M = h && !$,
              X = k3({
                maxHeight: i,
                menuEl: F,
                minHeight: a,
                placement: c,
                shouldScroll: M,
                isFixedPosition: $,
                controlHeight: N,
              });
            P(X.maxHeight), I(X.placement), b == null || b(X.placement);
          }
        },
        [i, c, d, h, a, b, N],
      ),
      o({
        ref: v,
        placerProps: se(se({}, t), {}, { placement: T || Um(c), maxHeight: S }),
      })
    );
  },
  T3 = function (t) {
    var o = t.children,
      a = t.innerRef,
      i = t.innerProps;
    return re("div", ue({}, Ge(t, "menu", { menu: !0 }), { ref: a }, i), o);
  },
  F3 = T3,
  j3 = function (t, o) {
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
  R3 = function (t) {
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
  Wm = function (t, o) {
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
  I3 = Wm,
  B3 = Wm,
  M3 = function (t) {
    var o = t.children,
      a = o === void 0 ? "No options" : o,
      i = t.innerProps,
      c = Sn(t, C3);
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
  N3 = function (t) {
    var o = t.children,
      a = o === void 0 ? "Loading..." : o,
      i = t.innerProps,
      c = Sn(t, w3);
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
  L3 = function (t) {
    var o = t.rect,
      a = t.offset,
      i = t.position;
    return { left: o.left, position: i, top: a, width: o.width, zIndex: 1 };
  },
  $3 = function (t) {
    var o = t.appendTo,
      a = t.children,
      i = t.controlElement,
      c = t.innerProps,
      d = t.menuPlacement,
      h = t.menuPosition,
      f = V.useRef(null),
      m = V.useRef(null),
      b = V.useState(Um(d)),
      v = _n(b, 2),
      y = v[0],
      x = v[1],
      S = V.useMemo(function () {
        return { setPortalPlacement: x };
      }, []),
      P = V.useState(null),
      k = _n(P, 2),
      O = k[0],
      T = k[1],
      I = V.useCallback(
        function () {
          if (i) {
            var M = g3(i),
              X = h === "fixed" ? 0 : window.pageYOffset,
              he = M[y] + X;
            (he !== (O == null ? void 0 : O.offset) ||
              M.left !== (O == null ? void 0 : O.rect.left) ||
              M.width !== (O == null ? void 0 : O.rect.width)) &&
              T({ offset: he, rect: M });
          }
        },
        [
          i,
          h,
          y,
          O == null ? void 0 : O.offset,
          O == null ? void 0 : O.rect.left,
          O == null ? void 0 : O.rect.width,
        ],
      );
    hc(
      function () {
        I();
      },
      [I],
    );
    var N = V.useCallback(
      function () {
        typeof m.current == "function" && (m.current(), (m.current = null)),
          i &&
            f.current &&
            (m.current = c3(i, f.current, I, {
              elementResize: "ResizeObserver" in window,
            }));
      },
      [i, I],
    );
    hc(
      function () {
        N();
      },
      [N],
    );
    var F = V.useCallback(
      function (M) {
        (f.current = M), N();
      },
      [N],
    );
    if ((!o && h !== "fixed") || !O) return null;
    var $ = re(
      "div",
      ue(
        { ref: F },
        Ge(
          se(se({}, t), {}, { offset: O.offset, position: h, rect: O.rect }),
          "menuPortal",
          { "menu-portal": !0 },
        ),
        c,
      ),
      a,
    );
    return re(qm.Provider, { value: S }, o ? Qy.createPortal($, o) : $);
  },
  A3 = function (t) {
    var o = t.isDisabled,
      a = t.isRtl;
    return {
      label: "container",
      direction: a ? "rtl" : void 0,
      pointerEvents: o ? "none" : void 0,
      position: "relative",
    };
  },
  D3 = function (t) {
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
  H3 = function (t, o) {
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
  z3 = function (t) {
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
  V3 = function () {
    return {
      alignItems: "center",
      alignSelf: "stretch",
      display: "flex",
      flexShrink: 0,
    };
  },
  G3 = function (t) {
    var o = t.children,
      a = t.innerProps;
    return re(
      "div",
      ue({}, Ge(t, "indicatorsContainer", { indicators: !0 }), a),
      o,
    );
  },
  Qp,
  U3 = ["size"],
  q3 = ["innerProps", "isRtl", "size"],
  W3 = {
    name: "8mmkcg",
    styles:
      "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0",
  },
  Km = function (t) {
    var o = t.size,
      a = Sn(t, U3);
    return re(
      "svg",
      ue(
        {
          height: o,
          width: o,
          viewBox: "0 0 20 20",
          "aria-hidden": "true",
          focusable: "false",
          css: W3,
        },
        a,
      ),
    );
  },
  Hc = function (t) {
    return re(
      Km,
      ue({ size: 20 }, t),
      re("path", {
        d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z",
      }),
    );
  },
  Xm = function (t) {
    return re(
      Km,
      ue({ size: 20 }, t),
      re("path", {
        d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z",
      }),
    );
  },
  Qm = function (t, o) {
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
  K3 = Qm,
  X3 = function (t) {
    var o = t.children,
      a = t.innerProps;
    return re(
      "div",
      ue(
        {},
        Ge(t, "dropdownIndicator", { indicator: !0, "dropdown-indicator": !0 }),
        a,
      ),
      o || re(Xm, null),
    );
  },
  Q3 = Qm,
  Y3 = function (t) {
    var o = t.children,
      a = t.innerProps;
    return re(
      "div",
      ue(
        {},
        Ge(t, "clearIndicator", { indicator: !0, "clear-indicator": !0 }),
        a,
      ),
      o || re(Hc, null),
    );
  },
  Z3 = function (t, o) {
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
  J3 = function (t) {
    var o = t.innerProps;
    return re(
      "span",
      ue({}, o, Ge(t, "indicatorSeparator", { "indicator-separator": !0 })),
    );
  },
  e8 = Ky(
    Qp ||
      (Qp = Xy([
        `
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`,
      ])),
  ),
  t8 = function (t, o) {
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
  Ll = function (t) {
    var o = t.delay,
      a = t.offset;
    return re("span", {
      css: Lc(
        {
          animation: ""
            .concat(e8, " 1s ease-in-out ")
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
  n8 = function (t) {
    var o = t.innerProps,
      a = t.isRtl,
      i = t.size,
      c = i === void 0 ? 4 : i,
      d = Sn(t, q3);
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
      re(Ll, { delay: 0, offset: a }),
      re(Ll, { delay: 160, offset: !0 }),
      re(Ll, { delay: 320, offset: !a }),
    );
  },
  r8 = function (t, o) {
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
  o8 = function (t) {
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
  a8 = o8,
  i8 = ["data"],
  s8 = function (t, o) {
    var a = t.theme.spacing;
    return o
      ? {}
      : { paddingBottom: a.baseUnit * 2, paddingTop: a.baseUnit * 2 };
  },
  l8 = function (t) {
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
  c8 = function (t, o) {
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
  u8 = function (t) {
    var o = zm(t);
    o.data;
    var a = Sn(o, i8);
    return re("div", ue({}, Ge(t, "groupHeading", { "group-heading": !0 }), a));
  },
  d8 = l8,
  f8 = ["innerRef", "isDisabled", "isHidden", "inputClassName"],
  p8 = function (t, o) {
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
        h8,
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
  Ym = {
    gridArea: "1 / 2",
    font: "inherit",
    minWidth: "2px",
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0,
  },
  h8 = {
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
      Ym,
    ),
  },
  m8 = function (t) {
    return se(
      {
        label: "input",
        color: "inherit",
        background: 0,
        opacity: t ? 0 : 1,
        width: "100%",
      },
      Ym,
    );
  },
  g8 = function (t) {
    var o = t.cx,
      a = t.value,
      i = zm(t),
      c = i.innerRef,
      d = i.isDisabled,
      h = i.isHidden,
      f = i.inputClassName,
      m = Sn(i, f8);
    return re(
      "div",
      ue({}, Ge(t, "input", { "input-container": !0 }), {
        "data-value": a || "",
      }),
      re(
        "input",
        ue(
          { className: o({ input: !0 }, f), ref: c, style: m8(h), disabled: d },
          m,
        ),
      ),
    );
  },
  b8 = g8,
  v8 = function (t, o) {
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
  y8 = function (t, o) {
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
  _8 = function (t, o) {
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
  Zm = function (t) {
    var o = t.children,
      a = t.innerProps;
    return re("div", a, o);
  },
  x8 = Zm,
  S8 = Zm;
function C8(r) {
  var t = r.children,
    o = r.innerProps;
  return re("div", ue({ role: "button" }, o), t || re(Hc, { size: 14 }));
}
var w8 = function (t) {
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
  k8 = w8,
  O8 = function (t, o) {
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
  P8 = function (t) {
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
  E8 = P8,
  T8 = function (t, o) {
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
  F8 = function (t) {
    var o = t.children,
      a = t.innerProps;
    return re("div", ue({}, Ge(t, "placeholder", { placeholder: !0 }), a), o);
  },
  j8 = F8,
  R8 = function (t, o) {
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
  I8 = function (t) {
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
  B8 = I8,
  M8 = {
    ClearIndicator: Y3,
    Control: a8,
    DropdownIndicator: X3,
    DownChevron: Xm,
    CrossIcon: Hc,
    Group: d8,
    GroupHeading: u8,
    IndicatorsContainer: G3,
    IndicatorSeparator: J3,
    Input: b8,
    LoadingIndicator: n8,
    Menu: F3,
    MenuList: R3,
    MenuPortal: $3,
    LoadingMessage: N3,
    NoOptionsMessage: M3,
    MultiValue: k8,
    MultiValueContainer: x8,
    MultiValueLabel: S8,
    MultiValueRemove: C8,
    Option: E8,
    Placeholder: j8,
    SelectContainer: D3,
    SingleValue: B8,
    ValueContainer: z3,
  },
  N8 = function (t) {
    return se(se({}, M8), t.components);
  },
  Yp =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function L8(r, t) {
  return !!(r === t || (Yp(r) && Yp(t)));
}
function $8(r, t) {
  if (r.length !== t.length) return !1;
  for (var o = 0; o < r.length; o++) if (!L8(r[o], t[o])) return !1;
  return !0;
}
function A8(r, t) {
  t === void 0 && (t = $8);
  var o = null;
  function a() {
    for (var i = [], c = 0; c < arguments.length; c++) i[c] = arguments[c];
    if (o && o.lastThis === this && t(i, o.lastArgs)) return o.lastResult;
    var d = r.apply(this, i);
    return (o = { lastResult: d, lastArgs: i, lastThis: this }), d;
  }
  return (
    (a.clear = function () {
      o = null;
    }),
    a
  );
}
var D8 = {
    name: "7pg0cj-a11yText",
    styles:
      "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap",
  },
  H8 = function (t) {
    return re("span", ue({ css: D8 }, t));
  },
  Zp = H8,
  z8 = {
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
        v = function (P, k) {
          return P && P.length
            ? "".concat(P.indexOf(k) + 1, " of ").concat(P.length)
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
  V8 = function (t) {
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
      P = f.isOptionDisabled,
      k = f.isSearchable,
      O = f.menuIsOpen,
      T = f.options,
      I = f.screenReaderStatus,
      N = f.tabSelectsValue,
      F = f.isLoading,
      $ = f["aria-label"],
      M = f["aria-live"],
      X = V.useMemo(
        function () {
          return se(se({}, z8), v || {});
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
              de = se({ isDisabled: K && P(K, h), label: le, labels: _e }, o);
            ge = X.onChange(de);
          }
          return ge;
        },
        [o, X, P, h, y],
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
              isDisabled: P(me, h),
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
        [a, i, y, P, X, c, h, b],
      ),
      te = V.useMemo(
        function () {
          var ge = "";
          if (O && T.length && !F && X.onFilter) {
            var me = I({ count: c.length });
            ge = X.onFilter({ inputValue: x, resultsMessage: me });
          }
          return ge;
        },
        [c, x, O, X, T, I, F],
      ),
      ce = (o == null ? void 0 : o.action) === "initial-input-focus",
      ye = V.useMemo(
        function () {
          var ge = "";
          if (X.guidance) {
            var me = i ? "value" : O ? "menu" : "input";
            ge = X.guidance({
              "aria-label": $,
              context: me,
              isDisabled: a && P(a, h),
              isMulti: S,
              isSearchable: k,
              tabSelectsValue: N,
              isInitialFocus: ce,
            });
          }
          return ge;
        },
        [$, a, i, S, P, k, O, X, h, N, ce],
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
      re(Zp, { id: m }, ce && Se),
      re(
        Zp,
        {
          "aria-live": M,
          "aria-atomic": "false",
          "aria-relevant": "additions text",
          role: "log",
        },
        d && !ce && Se,
      ),
    );
  },
  G8 = V8,
  mc = [
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
  U8 = new RegExp(
    "[" +
      mc
        .map(function (r) {
          return r.letters;
        })
        .join("") +
      "]",
    "g",
  ),
  Jm = {};
for (var $l = 0; $l < mc.length; $l++)
  for (var Al = mc[$l], Dl = 0; Dl < Al.letters.length; Dl++)
    Jm[Al.letters[Dl]] = Al.base;
var e1 = function (t) {
    return t.replace(U8, function (o) {
      return Jm[o];
    });
  },
  q8 = A8(e1),
  Jp = function (t) {
    return t.replace(/^\s+|\s+$/g, "");
  },
  W8 = function (t) {
    return "".concat(t.label, " ").concat(t.value);
  },
  K8 = function (t) {
    return function (o, a) {
      if (o.data.__isNew__) return !0;
      var i = se(
          {
            ignoreCase: !0,
            ignoreAccents: !0,
            stringify: W8,
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
        b = f ? Jp(a) : a,
        v = f ? Jp(h(o)) : h(o);
      return (
        c && ((b = b.toLowerCase()), (v = v.toLowerCase())),
        d && ((b = q8(b)), (v = e1(v))),
        m === "start" ? v.substr(0, b.length) === b : v.indexOf(b) > -1
      );
    };
  },
  X8 = ["innerRef"];
function Q8(r) {
  var t = r.innerRef,
    o = Sn(r, X8),
    a = S3(o, "onExited", "in", "enter", "exit", "appear");
  return re(
    "input",
    ue({ ref: t }, a, {
      css: Lc(
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
var Y8 = function (t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function Z8(r) {
  var t = r.isEnabled,
    o = r.onBottomArrive,
    a = r.onBottomLeave,
    i = r.onTopArrive,
    c = r.onTopLeave,
    d = V.useRef(!1),
    h = V.useRef(!1),
    f = V.useRef(0),
    m = V.useRef(null),
    b = V.useCallback(
      function (k, O) {
        if (m.current !== null) {
          var T = m.current,
            I = T.scrollTop,
            N = T.scrollHeight,
            F = T.clientHeight,
            $ = m.current,
            M = O > 0,
            X = N - F - I,
            he = !1;
          X > O && d.current && (a && a(k), (d.current = !1)),
            M && h.current && (c && c(k), (h.current = !1)),
            M && O > X
              ? (o && !d.current && o(k),
                ($.scrollTop = N),
                (he = !0),
                (d.current = !0))
              : !M &&
                -O > I &&
                (i && !h.current && i(k),
                ($.scrollTop = 0),
                (he = !0),
                (h.current = !0)),
            he && Y8(k);
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
        var O = f.current - k.changedTouches[0].clientY;
        b(k, O);
      },
      [b],
    ),
    S = V.useCallback(
      function (k) {
        if (k) {
          var O = y3 ? { passive: !1 } : !1;
          k.addEventListener("wheel", v, O),
            k.addEventListener("touchstart", y, O),
            k.addEventListener("touchmove", x, O);
        }
      },
      [x, y, v],
    ),
    P = V.useCallback(
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
              P(k);
            }
          );
        }
      },
      [t, S, P],
    ),
    function (k) {
      m.current = k;
    }
  );
}
var eh = ["boxSizing", "height", "overflow", "paddingRight", "position"],
  th = {
    boxSizing: "border-box",
    overflow: "hidden",
    position: "relative",
    height: "100%",
  };
function nh(r) {
  r.cancelable && r.preventDefault();
}
function rh(r) {
  r.stopPropagation();
}
function oh() {
  var r = this.scrollTop,
    t = this.scrollHeight,
    o = r + this.offsetHeight;
  r === 0 ? (this.scrollTop = 1) : o === t && (this.scrollTop = r - 1);
}
function ah() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var ih = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  Gr = 0,
  D0 = { capture: !1, passive: !1 };
function J8(r) {
  var t = r.isEnabled,
    o = r.accountForScrollbars,
    a = o === void 0 ? !0 : o,
    i = V.useRef({}),
    c = V.useRef(null),
    d = V.useCallback(
      function (f) {
        if (ih) {
          var m = document.body,
            b = m && m.style;
          if (
            (a &&
              eh.forEach(function (S) {
                var P = b && b[S];
                i.current[S] = P;
              }),
            a && Gr < 1)
          ) {
            var v = parseInt(i.current.paddingRight, 10) || 0,
              y = document.body ? document.body.clientWidth : 0,
              x = window.innerWidth - y + v || 0;
            Object.keys(th).forEach(function (S) {
              var P = th[S];
              b && (b[S] = P);
            }),
              b && (b.paddingRight = "".concat(x, "px"));
          }
          m &&
            ah() &&
            (m.addEventListener("touchmove", nh, D0),
            f &&
              (f.addEventListener("touchstart", oh, D0),
              f.addEventListener("touchmove", rh, D0))),
            (Gr += 1);
        }
      },
      [a],
    ),
    h = V.useCallback(
      function (f) {
        if (ih) {
          var m = document.body,
            b = m && m.style;
          (Gr = Math.max(Gr - 1, 0)),
            a &&
              Gr < 1 &&
              eh.forEach(function (v) {
                var y = i.current[v];
                b && (b[v] = y);
              }),
            m &&
              ah() &&
              (m.removeEventListener("touchmove", nh, D0),
              f &&
                (f.removeEventListener("touchstart", oh, D0),
                f.removeEventListener("touchmove", rh, D0)));
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
var e9 = function (t) {
    var o = t.target;
    return (
      o.ownerDocument.activeElement && o.ownerDocument.activeElement.blur()
    );
  },
  t9 = {
    name: "1kfdb0e",
    styles: "position:fixed;left:0;bottom:0;right:0;top:0",
  };
function n9(r) {
  var t = r.children,
    o = r.lockEnabled,
    a = r.captureEnabled,
    i = a === void 0 ? !0 : a,
    c = r.onBottomArrive,
    d = r.onBottomLeave,
    h = r.onTopArrive,
    f = r.onTopLeave,
    m = Z8({
      isEnabled: i,
      onBottomArrive: c,
      onBottomLeave: d,
      onTopArrive: h,
      onTopLeave: f,
    }),
    b = J8({ isEnabled: o }),
    v = function (x) {
      m(x), b(x);
    };
  return re(V.Fragment, null, o && re("div", { onClick: e9, css: t9 }), t(v));
}
var r9 = {
    name: "1a0ro4n-requiredInput",
    styles:
      "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%",
  },
  o9 = function (t) {
    var o = t.name,
      a = t.onFocus;
    return re("input", {
      required: !0,
      name: o,
      tabIndex: -1,
      "aria-hidden": "true",
      onFocus: a,
      css: r9,
      value: "",
      onChange: function () {},
    });
  },
  a9 = o9;
function zc(r) {
  var t;
  return typeof window < "u" && window.navigator != null
    ? r.test(
        ((t = window.navigator.userAgentData) === null || t === void 0
          ? void 0
          : t.platform) || window.navigator.platform,
      )
    : !1;
}
function i9() {
  return zc(/^iPhone/i);
}
function t1() {
  return zc(/^Mac/i);
}
function s9() {
  return zc(/^iPad/i) || (t1() && navigator.maxTouchPoints > 1);
}
function l9() {
  return i9() || s9();
}
function c9() {
  return t1() || l9();
}
var u9 = function (t) {
    return t.label;
  },
  d9 = function (t) {
    return t.label;
  },
  f9 = function (t) {
    return t.value;
  },
  p9 = function (t) {
    return !!t.isDisabled;
  },
  h9 = {
    clearIndicator: Q3,
    container: A3,
    control: r8,
    dropdownIndicator: K3,
    group: s8,
    groupHeading: c8,
    indicatorsContainer: V3,
    indicatorSeparator: Z3,
    input: p8,
    loadingIndicator: t8,
    loadingMessage: B3,
    menu: P3,
    menuList: j3,
    menuPortal: L3,
    multiValue: v8,
    multiValueLabel: y8,
    multiValueRemove: _8,
    noOptionsMessage: I3,
    option: O8,
    placeholder: T8,
    singleValue: R8,
    valueContainer: H3,
  },
  m9 = {
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
  g9 = 4,
  n1 = 4,
  b9 = 38,
  v9 = n1 * 2,
  y9 = { baseUnit: n1, controlHeight: b9, menuGutter: v9 },
  Hl = { borderRadius: g9, colors: m9, spacing: y9 },
  _9 = {
    "aria-live": "polite",
    backspaceRemovesValue: !0,
    blurInputOnSelect: Xp(),
    captureMenuScroll: !Xp(),
    classNames: {},
    closeMenuOnSelect: !0,
    closeMenuOnScroll: !1,
    components: {},
    controlShouldRenderValue: !0,
    escapeClearsValue: !1,
    filterOption: K8(),
    formatGroupLabel: u9,
    getOptionLabel: d9,
    getOptionValue: f9,
    isDisabled: !1,
    isLoading: !1,
    isMulti: !1,
    isRtl: !1,
    isSearchable: !0,
    isOptionDisabled: p9,
    loadingMessage: function () {
      return "Loading...";
    },
    maxMenuHeight: 300,
    minMenuHeight: 140,
    menuIsOpen: !1,
    menuPlacement: "bottom",
    menuPosition: "absolute",
    menuShouldBlockScroll: !1,
    menuShouldScrollIntoView: !b3(),
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
function sh(r, t, o, a) {
  var i = a1(r, t, o),
    c = i1(r, t, o),
    d = o1(r, t),
    h = fi(r, t);
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
function Ha(r, t) {
  return r.options
    .map(function (o, a) {
      if ("options" in o) {
        var i = o.options
          .map(function (d, h) {
            return sh(r, d, t, h);
          })
          .filter(function (d) {
            return ch(r, d);
          });
        return i.length > 0
          ? { type: "group", data: o, options: i, index: a }
          : void 0;
      }
      var c = sh(r, o, t, a);
      return ch(r, c) ? c : void 0;
    })
    .filter(_3);
}
function r1(r) {
  return r.reduce(function (t, o) {
    return (
      o.type === "group"
        ? t.push.apply(
            t,
            Rc(
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
function lh(r, t) {
  return r.reduce(function (o, a) {
    return (
      a.type === "group"
        ? o.push.apply(
            o,
            Rc(
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
function x9(r, t) {
  return r1(Ha(r, t));
}
function ch(r, t) {
  var o = r.inputValue,
    a = o === void 0 ? "" : o,
    i = t.data,
    c = t.isSelected,
    d = t.label,
    h = t.value;
  return (!l1(r) || !c) && s1(r, { label: d, value: h, data: i }, a);
}
function S9(r, t) {
  var o = r.focusedValue,
    a = r.selectValue,
    i = a.indexOf(o);
  if (i > -1) {
    var c = t.indexOf(o);
    if (c > -1) return o;
    if (i < t.length) return t[i];
  }
  return null;
}
function C9(r, t) {
  var o = r.focusedOption;
  return o && t.indexOf(o) > -1 ? o : t[0];
}
var zl = function (t, o) {
    var a,
      i =
        (a = t.find(function (c) {
          return c.data === o;
        })) === null || a === void 0
          ? void 0
          : a.id;
    return i || null;
  },
  o1 = function (t, o) {
    return t.getOptionLabel(o);
  },
  fi = function (t, o) {
    return t.getOptionValue(o);
  };
function a1(r, t, o) {
  return typeof r.isOptionDisabled == "function"
    ? r.isOptionDisabled(t, o)
    : !1;
}
function i1(r, t, o) {
  if (o.indexOf(t) > -1) return !0;
  if (typeof r.isOptionSelected == "function") return r.isOptionSelected(t, o);
  var a = fi(r, t);
  return o.some(function (i) {
    return fi(r, i) === a;
  });
}
function s1(r, t, o) {
  return r.filterOption ? r.filterOption(t, o) : !0;
}
var l1 = function (t) {
    var o = t.hideSelectedOptions,
      a = t.isMulti;
    return o === void 0 ? a : o;
  },
  w9 = 1,
  c1 = (function (r) {
    U4(o, r);
    var t = K4(o);
    function o(a) {
      var i;
      if (
        (V4(this, o),
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
        (i.isAppleDevice = c9()),
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
            P = i.isOptionDisabled(f, x);
          if (S) {
            var k = i.getOptionValue(f);
            i.setValue(
              x.filter(function (O) {
                return i.getOptionValue(O) !== k;
              }),
              "deselect-option",
              f,
            );
          } else if (!P)
            v
              ? i.setValue([].concat(Rc(x), [f]), "select-option", f)
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
            x = Ta(m, y, y[0] || null);
          i.onChange(x, { action: "remove-value", removedValue: f }),
            i.focusInput();
        }),
        (i.clearValue = function () {
          var f = i.state.selectValue;
          i.onChange(Ta(i.props.isMulti, [], null), {
            action: "clear",
            removedValues: f,
          });
        }),
        (i.popValue = function () {
          var f = i.props.isMulti,
            m = i.state.selectValue,
            b = m[m.length - 1],
            v = m.slice(0, m.length - 1),
            y = Ta(f, v, v[0] || null);
          b && i.onChange(y, { action: "pop-value", removedValue: b });
        }),
        (i.getFocusedOptionId = function (f) {
          return zl(i.state.focusableOptionsWithIds, f);
        }),
        (i.getFocusableOptionsWithIds = function () {
          return lh(Ha(i.props, i.state.selectValue), i.getElementId("option"));
        }),
        (i.getValue = function () {
          return i.state.selectValue;
        }),
        (i.cx = function () {
          for (var f = arguments.length, m = new Array(f), b = 0; b < f; b++)
            m[b] = arguments[b];
          return f3.apply(void 0, [i.props.classNamePrefix].concat(m));
        }),
        (i.getOptionLabel = function (f) {
          return o1(i.props, f);
        }),
        (i.getOptionValue = function (f) {
          return fi(i.props, f);
        }),
        (i.getStyles = function (f, m) {
          var b = i.props.unstyled,
            v = h9[f](m, b);
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
          return N8(i.props);
        }),
        (i.buildCategorizedOptions = function () {
          return Ha(i.props, i.state.selectValue);
        }),
        (i.getCategorizedOptions = function () {
          return i.props.menuIsOpen ? i.buildCategorizedOptions() : [];
        }),
        (i.buildFocusableOptions = function () {
          return r1(i.buildCategorizedOptions());
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
              ki(f.target) &&
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
          return l1(i.props);
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
            P = m.isDisabled,
            k = m.menuIsOpen,
            O = m.onKeyDown,
            T = m.tabSelectsValue,
            I = m.openMenuOnFocus,
            N = i.state,
            F = N.focusedOption,
            $ = N.focusedValue,
            M = N.selectValue;
          if (!P && !(typeof O == "function" && (O(f), f.defaultPrevented))) {
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
                  (I && i.isOptionSelected(F, M))
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
          "react-select-" + (i.props.instanceId || ++w9)),
        (i.state.selectValue = Wp(a.value)),
        a.menuIsOpen && i.state.selectValue.length)
      ) {
        var c = i.getFocusableOptionsWithIds(),
          d = i.buildFocusableOptions(),
          h = d.indexOf(i.state.selectValue[0]);
        (i.state.focusableOptionsWithIds = c),
          (i.state.focusedOption = d[h]),
          (i.state.focusedOptionId = zl(c, d[h]));
      }
      return i;
    }
    return (
      G4(
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
                  Kp(this.menuListRef, this.focusedOptionRef);
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
                  (Kp(this.menuListRef, this.focusedOptionRef),
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
                  ? this.props.theme(Hl)
                  : se(se({}, Hl), this.props.theme)
                : Hl;
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
                P = this.hasValue();
              return {
                clearValue: i,
                cx: c,
                getStyles: d,
                getClassNames: h,
                getValue: f,
                hasValue: P,
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
              return a1(this.props, i, c);
            },
          },
          {
            key: "isOptionSelected",
            value: function (i, c) {
              return i1(this.props, i, c);
            },
          },
          {
            key: "filterOption",
            value: function (i, c) {
              return s1(this.props, i, c);
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
                P = this.state,
                k = P.inputIsHidden,
                O = P.ariaSelection,
                T = this.commonProps,
                I = h || this.getElementId("input"),
                N = se(
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
                    ? (O == null ? void 0 : O.action) ===
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
                      N,
                    ),
                  )
                : V.createElement(
                    Q8,
                    ue(
                      {
                        id: I,
                        innerRef: this.getInputRef,
                        onBlur: this.onInputBlur,
                        onChange: ui,
                        onFocus: this.onInputFocus,
                        disabled: c,
                        tabIndex: m,
                        inputMode: "none",
                        form: b,
                        value: "",
                      },
                      N,
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
                P = x.isDisabled,
                k = x.isMulti,
                O = x.inputValue,
                T = x.placeholder,
                I = this.state,
                N = I.selectValue,
                F = I.focusedValue,
                $ = I.isFocused;
              if (!this.hasValue() || !S)
                return O
                  ? null
                  : V.createElement(
                      v,
                      ue({}, y, {
                        key: "placeholder",
                        isDisabled: P,
                        isFocused: $,
                        innerProps: { id: this.getElementId("placeholder") },
                      }),
                      T,
                    );
              if (k)
                return N.map(function (X, he) {
                  var Ce = X === F,
                    te = ""
                      .concat(i.getOptionLabel(X), "-")
                      .concat(i.getOptionValue(X));
                  return V.createElement(
                    d,
                    ue({}, y, {
                      components: { Container: h, Label: f, Remove: m },
                      isFocused: Ce,
                      isDisabled: P,
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
              if (O) return null;
              var M = N[0];
              return V.createElement(
                b,
                ue({}, y, { data: M, isDisabled: P }),
                this.formatOptionLabel(M, "value"),
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
                P = this.state.focusedOption,
                k = this.props,
                O = k.captureMenuScroll,
                T = k.inputValue,
                I = k.isLoading,
                N = k.loadingMessage,
                F = k.minMenuHeight,
                $ = k.maxMenuHeight,
                M = k.menuIsOpen,
                X = k.menuPlacement,
                he = k.menuPosition,
                Ce = k.menuPortalTarget,
                te = k.menuShouldBlockScroll,
                ce = k.menuShouldScrollIntoView,
                ye = k.noOptionsMessage,
                Se = k.onMenuScrollToTop,
                ge = k.onMenuScrollToBottom;
              if (!M) return null;
              var me = function (le, oe) {
                  var _e = le.type,
                    de = le.data,
                    be = le.isDisabled,
                    pe = le.isSelected,
                    Ie = le.label,
                    Gn = le.value,
                    Mt = P === de,
                    yt = be
                      ? void 0
                      : function () {
                          return i.onOptionHover(de);
                        },
                    f0 = be
                      ? void 0
                      : function () {
                          return i.selectOption(de);
                        },
                    p0 = "".concat(i.getElementId("option"), "-").concat(oe),
                    lo = {
                      id: p0,
                      onClick: f0,
                      onMouseMove: yt,
                      onMouseOver: yt,
                      tabIndex: -1,
                      role: "option",
                      "aria-selected": i.isAppleDevice ? void 0 : pe,
                    };
                  return V.createElement(
                    x,
                    ue({}, S, {
                      innerProps: lo,
                      data: de,
                      isDisabled: be,
                      isSelected: pe,
                      key: p0,
                      label: Ie,
                      type: _e,
                      value: Gn,
                      isFocused: Mt,
                      innerRef: Mt ? i.getFocusedOptionRef : void 0,
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
                var q = N({ inputValue: T });
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
                A = V.createElement(E3, ue({}, S, C), function (K) {
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
                      n9,
                      {
                        captureEnabled: O,
                        onTopArrive: Se,
                        onBottomArrive: ge,
                        lockEnabled: te,
                      },
                      function (be) {
                        return V.createElement(
                          m,
                          ue({}, S, {
                            innerRef: function (Ie) {
                              i.getMenuListRef(Ie), be(Ie);
                            },
                            innerProps: {
                              role: "listbox",
                              "aria-multiselectable": S.isMulti,
                              id: i.getElementId("listbox"),
                            },
                            isLoading: I,
                            maxHeight: de,
                            focusedOption: P,
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
                return V.createElement(a9, {
                  name: m,
                  onFocus: this.onValueInputFocus,
                });
              if (!(!m || h))
                if (f)
                  if (d) {
                    var y = v
                      .map(function (P) {
                        return i.getOptionValue(P);
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
                        ? v.map(function (P, k) {
                            return V.createElement("input", {
                              key: "i-".concat(k),
                              name: m,
                              type: "hidden",
                              value: i.getOptionValue(P),
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
                G8,
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
                P = (this.commonProps = this.getCommonProps());
              return V.createElement(
                h,
                ue({}, P, {
                  className: b,
                  innerProps: { id: v, onKeyDown: this.onKeyDown },
                  isDisabled: y,
                  isFocused: S,
                }),
                this.renderLiveRegion(),
                V.createElement(
                  c,
                  ue({}, P, {
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
                    ue({}, P, { isDisabled: y }),
                    this.renderPlaceholderOrValue(),
                    this.renderInput(),
                  ),
                  V.createElement(
                    d,
                    ue({}, P, { isDisabled: y }),
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
                P = i.menuIsOpen,
                k = i.inputValue,
                O = i.isMulti,
                T = Wp(S),
                I = {};
              if (
                d &&
                (S !== d.value ||
                  x !== d.options ||
                  P !== d.menuIsOpen ||
                  k !== d.inputValue)
              ) {
                var N = P ? x9(i, T) : [],
                  F = P ? lh(Ha(i, T), "".concat(y, "-option")) : [],
                  $ = h ? S9(c, T) : null,
                  M = C9(c, N),
                  X = zl(F, M);
                I = {
                  selectValue: T,
                  focusedOption: M,
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
                    value: Ta(O, T, T[0] || null),
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
c1.defaultProps = _9;
var k9 = V.forwardRef(function (r, t) {
    var o = z4(r);
    return V.createElement(c1, ue({ ref: t }, o));
  }),
  O9 = k9;
function uh({ isDark: r, context: t, isFocused: o = !1, isSelected: a = !1 }) {
  if (t === "control")
    return o ? (r ? "#222222" : "#E8E8E8") : r ? "#383838" : "#F1F1F1";
  if (t === "option")
    return a ? (r ? "#111111" : "#FCFCFC") : r ? "#222222" : "#F1F1F1";
  if (t === "menu" || t === "menuList") return r ? "#222222" : "#F1F1F1";
}
const Vl = ({ isDark: r, options: t, selectedOption: o, onChange: a }) =>
    W.jsx(O9, {
      styles: {
        control: (i, c) => ({
          ...i,
          backgroundColor: uh({
            isDark: r,
            context: "control",
            isFocused: c.isFocused,
          }),
          borderRadius: "6px",
          border: `1px solid ${r ? "#383838" : "#F1F1F1"}`,
          fontFamily: "monospace",
          fontSize: "14px",
          minHeight: "initial",
          padding: "3px 0px",
        }),
        indicatorSeparator: () => ({ display: "none" }),
        container: (i) => ({ ...i }),
        singleValue: (i) => ({
          ...i,
          color: r ? "#EDEDED" : "black",
          borderRadius: "6px",
        }),
        menu: (i) => ({
          ...i,
          width: "max-content",
          minWidth: "100%",
          borderRadius: "6px",
          backgroundColor: r ? "#222222" : "#F1F1F1",
        }),
        dropdownIndicator: (i) => ({
          ...i,
          color: r ? "#EDEDED" : "black",
          padding: "0px 2px",
        }),
        menuList: (i) => ({
          ...i,
          backgroundColor: r ? "#222222" : "#F1F1F1",
          padding: "4px",
          border: `1px solid ${r ? "#222222" : "#F1F1F1"}`,
          borderRadius: "6px",
          fontSize: "14px",
        }),
        option: (i, c) => ({
          ...i,
          padding: "4px 8px",
          fontFamily: "monospace",
          borderRadius: "6px",
          backgroundColor: uh({
            isDark: r,
            context: "option",
            isSelected: c.isSelected,
          }),
          color: r ? "#EDEDED" : "black",
          ":hover": { backgroundColor: r ? "#181818" : "#F6F6F6" },
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
  P9 = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  E9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: P9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  T9 = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  F9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: T9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  j9 = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_blockNumber",
  "params": [],
  "id": 1
}'`,
  R9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: j9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  I9 = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_blockNumber",
  "params": [],
  "id": 1
}'`,
  B9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: I9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  M9 = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_blockNumber",
  "params": [],
  "id": 1
}'`,
  N9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: M9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  L9 = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_blockNumber",
  "params": [],
  "id": 1
}'`,
  $9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: L9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  A9 = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_blockNumber",
  "params": [],
  "id": 1
}'`,
  D9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: A9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  H9 = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_chainId",
  "params": [],
  "id": 1
}'`,
  z9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: H9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  V9 = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_chainId",
  "params": [],
  "id": 1
}'`,
  G9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: V9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  U9 = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_chainId",
  "params": [],
  "id": 1
}'`,
  q9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: U9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  W9 = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_chainId",
  "params": [],
  "id": 1
}'`,
  K9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: W9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  X9 = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_chainId",
  "params": [],
  "id": 1
}'`,
  Q9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: X9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Y9 = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  Z9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Y9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  J9 = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  e6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: J9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  t6 = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  n6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: t6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  r6 = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  o6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: r6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  a6 = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  "method": "eth_gasPrice",
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
  "method": "eth_gasPrice",
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
  "method": "eth_gasPrice",
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
  "method": "eth_gasPrice",
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
  "method": "eth_gasPrice",
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
  "method": "eth_getBalance",
  "params": [
    "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",
    "latest"
  ],
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
  "method": "eth_getBalance",
  "params": [
    "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",
    "latest"
  ],
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
  "method": "eth_getBalance",
  "params": [
    "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",
    "latest"
  ],
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
  "method": "eth_getBalance",
  "params": [
    "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",
    "latest"
  ],
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
  "method": "eth_getBalance",
  "params": [
    "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",
    "latest"
  ],
  "id": 1
}'`,
  O6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: k6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  P6 = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  E6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: P6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  T6 = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  "method": "eth_getBlockByNumber",
  "params": [
    "0x68b3",
    false
  ],
  "id": 1
}'`,
  R6 = Object.freeze(
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
  "method": "eth_getBlockByNumber",
  "params": [
    "0x68b3",
    false
  ],
  "id": 1
}'`,
  B6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: I6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  M6 = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  N6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: M6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  L6 = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getBlockReceipts",
  "params": [
    "latest"
  ],
  "id": 1
}'`,
  $6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: L6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  A6 = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getBlockReceipts",
  "params": [
    "latest"
  ],
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
  "method": "eth_getBlockReceipts",
  "params": [
    "latest"
  ],
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
  "method": "eth_getBlockReceipts",
  "params": [
    "latest"
  ],
  "id": 1
}'`,
  G6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: V6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  U6 = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getBlockReceipts",
  "params": [
    "latest"
  ],
  "id": 1
}'`,
  q6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: U6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  W6 = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  e7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: J6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  t7 = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  n7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: t7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  r7 = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionByHash",
  "params": [
    "0x1058fd1f920b95591f7d937b03d6e66c5d88bdf606284c51e42e5c4b7efb2b73"
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
  a7 = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionByHash",
  "params": [
    "0xca5320b77a4321c83865bbd5b59bae521ad26fa42c079c317bec60a6e639b045"
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
  s7 = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionByHash",
  "params": [
    "0xf8b955c1b95e0ce539ded4baf94a54035d36020decb904fce95b33707217d02a"
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
  c7 = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionByHash",
  "params": [
    "0x4400d8e9c86da035f9a4fc5a2c4a0b7b3b0fc79540c705fe92abd08b10078866"
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
  d7 = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionByHash",
  "params": [
    "0x9a05c39f9d682f5660ccc0feda8f8d1ff233e67b2bdb5550a9faf0ae50330e4b"
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
  p7 = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  h7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: p7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  m7 = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  g7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: m7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  b7 = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  v7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: b7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  y7 = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionCount",
  "params": [
    "0x67A7334BD35b99310f3EDe2111B65B654B76DF43"
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
  x7 = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionCount",
  "params": [
    "0xE4f575e07D7c9E31BB2900e1B23C3584b4a6fa2d"
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
  C7 = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionReceipt",
  "params": [
    "0x1058fd1f920b95591f7d937b03d6e66c5d88bdf606284c51e42e5c4b7efb2b73"
  ],
  "id": 1
}'`,
  w7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: C7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  k7 = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionReceipt",
  "params": [
    "0xca5320b77a4321c83865bbd5b59bae521ad26fa42c079c317bec60a6e639b045"
  ],
  "id": 1
}'`,
  O7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: k7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  P7 = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionReceipt",
  "params": [
    "0xf8b955c1b95e0ce539ded4baf94a54035d36020decb904fce95b33707217d02a"
  ],
  "id": 1
}'`,
  E7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: P7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  T7 = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionReceipt",
  "params": [
    "0x4400d8e9c86da035f9a4fc5a2c4a0b7b3b0fc79540c705fe92abd08b10078866"
  ],
  "id": 1
}'`,
  F7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: T7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  j7 = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionReceipt",
  "params": [
    "0x9a05c39f9d682f5660ccc0feda8f8d1ff233e67b2bdb5550a9faf0ae50330e4b"
  ],
  "id": 1
}'`,
  R7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: j7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  I7 = `curl -X POST https://solana-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "getAccountInfo",
  "params": [
    "5s749uxx2gcdUL9WaDRhLt3Du2KUREhPT1H8QAXrBZzm"
  ],
  "id": 1
}'`,
  B7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: I7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  M7 = `curl -X POST https://solana-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "getBalance",
  "params": [
    "5s749uxx2gcdUL9WaDRhLt3Du2KUREhPT1H8QAXrBZzm"
  ],
  "id": 1
}'`,
  N7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: M7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  L7 = `curl -X POST https://solana-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "getLatestBlockhash",
  "params": [],
  "id": 1
}'`,
  $7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: L7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  A7 = `curl -X POST https://solana-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  D7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: A7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  H7 = `curl -X POST https://solana-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "getTokenAccountBalance",
  "params": [
    "4acnoRQj96CkGWHp5uzgF67fRJCUtdFR66ZAHh2mohNB"
  ],
  "id": 1
}'`,
  z7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: H7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  V7 = `curl -X POST https://solana-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  G7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: V7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  U7 = `curl -X POST https://solana-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  q7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: U7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  W7 = `{
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
  "result": "0x14c3bbfa"
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
  "result": "0x1e3a66b"
}`,
  e_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: J7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  t_ = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x159fee5"
}`,
  n_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: t_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  r_ = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x82ee7dd"
}`,
  o_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: r_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  a_ = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x4582eef"
}`,
  i_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: a_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  s_ = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0xa4b1"
}`,
  l_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: s_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  c_ = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x2105"
}`,
  u_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: c_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  d_ = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1"
}`,
  f_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: d_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  p_ = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0xa"
}`,
  h_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: p_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  m_ = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x89"
}`,
  g_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: m_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  b_ = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x64a3"
}`,
  v_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: b_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  y_ = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x5208"
}`,
  __ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: y_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  x_ = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x5208"
}`,
  S_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: x_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  C_ = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x5208"
}`,
  w_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: C_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  k_ = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x5208"
}`,
  O_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: k_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  P_ = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x989680"
}`,
  E_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: P_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  T_ = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x4c539c"
}`,
  F_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: T_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  j_ = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x5b377580e"
}`,
  R_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: j_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  I_ = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0xf55cd"
}`,
  B_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: I_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  M_ = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x60db8841a"
}`,
  N_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: M_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  L_ = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x0"
}`,
  $_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: L_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  A_ = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x0"
}`,
  D_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: A_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  H_ = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0xcd5"
}`,
  z_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: H_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  V_ = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x0"
}`,
  G_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: V_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  U_ = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x41d6"
}`,
  q_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: U_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  W_ = `{
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
  K_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: W_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  X_ = `{
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
  Q_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: X_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Y_ = `{
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
  Z_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Y_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  J_ = `{
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
  ex = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: J_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  tx = `{
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
  ix = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ax },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  sx = `{
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
  fx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: dx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  px = `{
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
  hx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: px },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  mx = `{
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
  gx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: mx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  bx = `{
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
  vx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: bx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  yx = `{
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
  _x = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: yx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  xx = `{
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
  Ox = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: kx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Px = `{
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
  Ex = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Px },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Tx = `{
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
  Rx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: jx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Ix = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x15c29"
}`,
  Bx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ix },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Mx = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x5ae51f"
}`,
  Nx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Mx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Lx = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x21a"
}`,
  $x = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Lx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Ax = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x455ff"
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
  "result": "0x513"
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
  Gx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Vx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Ux = `{
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
  qx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ux },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Wx = `{
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
  Kx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Wx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Xx = `{
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
  Qx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Xx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Yx = `{
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
  Zx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Yx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Jx = `{
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
  eS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Jx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  tS = `{
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
  nS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: tS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  rS = `{
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
  oS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: rS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  aS = `{
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
  iS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: aS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  sS = `{
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
  lS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: sS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  cS = `{
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
  uS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: cS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  dS = `{
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
  fS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: dS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
var gc = ((r) => (
  (r.CLI = "bash"),
  (r.JavaScript = "javascript"),
  (r.Python = "python"),
  (r.JSON = "json"),
  r
))(gc || {});
const pS = [
  { value: "bash", label: "curl" },
  { value: "json", label: "JSON" },
];
var oo = ((r) => (
  (r.ethereumMainnet = "ethereum-mainnet"),
  (r.arbitrumMainnet = "arb-mainnet"),
  (r.baseMainnet = "base-mainnet"),
  (r.optimismMainnet = "opt-mainnet"),
  (r.solanaMainnet = "solana-mainnet"),
  (r.polygonMainnet = "polygon-mainnet"),
  r
))(oo || {});
const hS = [
  { value: "ethereum-mainnet", label: "Ethereum" },
  { value: "arb-mainnet", label: "Arbitrum" },
  { value: "base-mainnet", label: "Base" },
  { value: "opt-mainnet", label: "Optimism" },
  { value: "polygon-mainnet", label: "Polygon PoS" },
  { value: "solana-mainnet", label: "Solana" },
];
var za = ((r) => (
  (r.alchemy_getAssetTransfers = "alchemy_getAssetTransfers"),
  (r.alchemy_getTokenBalances = "alchemy_getTokenBalances"),
  (r.eth_blockNumber = "eth_blockNumber"),
  (r.eth_chainId = "eth_chainId"),
  (r.eth_estimateGas = "eth_estimateGas"),
  (r.eth_gasPrice = "eth_gasPrice"),
  (r.eth_getBalance = "eth_getBalance"),
  (r.eth_getBlockByNumber = "eth_getBlockByNumber"),
  (r.eth_getBlockReceipts = "eth_getBlockReceipts"),
  (r.eth_getLogs = "eth_getLogs"),
  (r.eth_getTransactionByHash = "eth_getTransactionByHash"),
  (r.eth_getTransactionCount = "eth_getTransactionCount"),
  (r.eth_getTransactionReceipt = "eth_getTransactionReceipt"),
  (r.getAccountInfo = "getAccountInfo"),
  (r.getBalance = "getBalance"),
  (r.getLatestBlockhash = "getLatestBlockhash"),
  (r.getSignaturesForAddress = "getSignaturesForAddress"),
  (r.getTokenAccountBalance = "getTokenAccountBalance"),
  (r.getTokenAccountsByOwner = "getTokenAccountsByOwner"),
  (r.getTransaction = "getTransaction"),
  r
))(za || {});
const mS = [
    "getTokenAccountsByOwner",
    "getTokenAccountBalance",
    "getLatestBlockhash",
    "getSignaturesForAddress",
    "getTransaction",
    "getAccountInfo",
    "getBalance",
  ],
  dh = [
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
  gS = ["alchemy_getAssetTransfers", "alchemy_getTokenBalances"],
  fh = Object.assign({
    "./code-samples/alchemy_getAssetTransfers/bash/ethereum-mainnet/request":
      E9,
    "./code-samples/alchemy_getTokenBalances/bash/ethereum-mainnet/request": F9,
    "./code-samples/eth_blockNumber/bash/arb-mainnet/request": R9,
    "./code-samples/eth_blockNumber/bash/base-mainnet/request": B9,
    "./code-samples/eth_blockNumber/bash/ethereum-mainnet/request": N9,
    "./code-samples/eth_blockNumber/bash/opt-mainnet/request": $9,
    "./code-samples/eth_blockNumber/bash/polygon-mainnet/request": D9,
    "./code-samples/eth_chainId/bash/arb-mainnet/request": z9,
    "./code-samples/eth_chainId/bash/base-mainnet/request": G9,
    "./code-samples/eth_chainId/bash/ethereum-mainnet/request": q9,
    "./code-samples/eth_chainId/bash/opt-mainnet/request": K9,
    "./code-samples/eth_chainId/bash/polygon-mainnet/request": Q9,
    "./code-samples/eth_estimateGas/bash/arb-mainnet/request": Z9,
    "./code-samples/eth_estimateGas/bash/base-mainnet/request": e6,
    "./code-samples/eth_estimateGas/bash/ethereum-mainnet/request": n6,
    "./code-samples/eth_estimateGas/bash/opt-mainnet/request": o6,
    "./code-samples/eth_estimateGas/bash/polygon-mainnet/request": i6,
    "./code-samples/eth_gasPrice/bash/arb-mainnet/request": l6,
    "./code-samples/eth_gasPrice/bash/base-mainnet/request": u6,
    "./code-samples/eth_gasPrice/bash/ethereum-mainnet/request": f6,
    "./code-samples/eth_gasPrice/bash/opt-mainnet/request": h6,
    "./code-samples/eth_gasPrice/bash/polygon-mainnet/request": g6,
    "./code-samples/eth_getBalance/bash/arb-mainnet/request": v6,
    "./code-samples/eth_getBalance/bash/base-mainnet/request": _6,
    "./code-samples/eth_getBalance/bash/ethereum-mainnet/request": S6,
    "./code-samples/eth_getBalance/bash/opt-mainnet/request": w6,
    "./code-samples/eth_getBalance/bash/polygon-mainnet/request": O6,
    "./code-samples/eth_getBlockByNumber/bash/arb-mainnet/request": E6,
    "./code-samples/eth_getBlockByNumber/bash/base-mainnet/request": F6,
    "./code-samples/eth_getBlockByNumber/bash/ethereum-mainnet/request": R6,
    "./code-samples/eth_getBlockByNumber/bash/opt-mainnet/request": B6,
    "./code-samples/eth_getBlockByNumber/bash/polygon-mainnet/request": N6,
    "./code-samples/eth_getBlockReceipts/bash/arb-mainnet/request": $6,
    "./code-samples/eth_getBlockReceipts/bash/base-mainnet/request": D6,
    "./code-samples/eth_getBlockReceipts/bash/ethereum-mainnet/request": z6,
    "./code-samples/eth_getBlockReceipts/bash/opt-mainnet/request": G6,
    "./code-samples/eth_getBlockReceipts/bash/polygon-mainnet/request": q6,
    "./code-samples/eth_getLogs/bash/arb-mainnet/request": K6,
    "./code-samples/eth_getLogs/bash/base-mainnet/request": Q6,
    "./code-samples/eth_getLogs/bash/ethereum-mainnet/request": Z6,
    "./code-samples/eth_getLogs/bash/opt-mainnet/request": e7,
    "./code-samples/eth_getLogs/bash/polygon-mainnet/request": n7,
    "./code-samples/eth_getTransactionByHash/bash/arb-mainnet/request": o7,
    "./code-samples/eth_getTransactionByHash/bash/base-mainnet/request": i7,
    "./code-samples/eth_getTransactionByHash/bash/ethereum-mainnet/request": l7,
    "./code-samples/eth_getTransactionByHash/bash/opt-mainnet/request": u7,
    "./code-samples/eth_getTransactionByHash/bash/polygon-mainnet/request": f7,
    "./code-samples/eth_getTransactionCount/bash/arb-mainnet/request": h7,
    "./code-samples/eth_getTransactionCount/bash/base-mainnet/request": g7,
    "./code-samples/eth_getTransactionCount/bash/ethereum-mainnet/request": v7,
    "./code-samples/eth_getTransactionCount/bash/opt-mainnet/request": _7,
    "./code-samples/eth_getTransactionCount/bash/polygon-mainnet/request": S7,
    "./code-samples/eth_getTransactionReceipt/bash/arb-mainnet/request": w7,
    "./code-samples/eth_getTransactionReceipt/bash/base-mainnet/request": O7,
    "./code-samples/eth_getTransactionReceipt/bash/ethereum-mainnet/request":
      E7,
    "./code-samples/eth_getTransactionReceipt/bash/opt-mainnet/request": F7,
    "./code-samples/eth_getTransactionReceipt/bash/polygon-mainnet/request": R7,
    "./code-samples/getAccountInfo/bash/solana-mainnet/request": B7,
    "./code-samples/getBalance/bash/solana-mainnet/request": N7,
    "./code-samples/getLatestBlockhash/bash/solana-mainnet/request": $7,
    "./code-samples/getSignaturesForAddress/bash/solana-mainnet/request": D7,
    "./code-samples/getTokenAccountBalance/bash/solana-mainnet/request": z7,
    "./code-samples/getTokenAccountsByOwner/bash/solana-mainnet/request": G7,
    "./code-samples/getTransaction/bash/solana-mainnet/request": q7,
  }),
  ph = Object.assign({
    "./code-samples/alchemy_getAssetTransfers/bash/ethereum-mainnet/response":
      K7,
    "./code-samples/alchemy_getTokenBalances/bash/ethereum-mainnet/response":
      Q7,
    "./code-samples/eth_blockNumber/bash/arb-mainnet/response": Z7,
    "./code-samples/eth_blockNumber/bash/base-mainnet/response": e_,
    "./code-samples/eth_blockNumber/bash/ethereum-mainnet/response": n_,
    "./code-samples/eth_blockNumber/bash/opt-mainnet/response": o_,
    "./code-samples/eth_blockNumber/bash/polygon-mainnet/response": i_,
    "./code-samples/eth_chainId/bash/arb-mainnet/response": l_,
    "./code-samples/eth_chainId/bash/base-mainnet/response": u_,
    "./code-samples/eth_chainId/bash/ethereum-mainnet/response": f_,
    "./code-samples/eth_chainId/bash/opt-mainnet/response": h_,
    "./code-samples/eth_chainId/bash/polygon-mainnet/response": g_,
    "./code-samples/eth_estimateGas/bash/arb-mainnet/response": v_,
    "./code-samples/eth_estimateGas/bash/base-mainnet/response": __,
    "./code-samples/eth_estimateGas/bash/ethereum-mainnet/response": S_,
    "./code-samples/eth_estimateGas/bash/opt-mainnet/response": w_,
    "./code-samples/eth_estimateGas/bash/polygon-mainnet/response": O_,
    "./code-samples/eth_gasPrice/bash/arb-mainnet/response": E_,
    "./code-samples/eth_gasPrice/bash/base-mainnet/response": F_,
    "./code-samples/eth_gasPrice/bash/ethereum-mainnet/response": R_,
    "./code-samples/eth_gasPrice/bash/opt-mainnet/response": B_,
    "./code-samples/eth_gasPrice/bash/polygon-mainnet/response": N_,
    "./code-samples/eth_getBalance/bash/arb-mainnet/response": $_,
    "./code-samples/eth_getBalance/bash/base-mainnet/response": D_,
    "./code-samples/eth_getBalance/bash/ethereum-mainnet/response": z_,
    "./code-samples/eth_getBalance/bash/opt-mainnet/response": G_,
    "./code-samples/eth_getBalance/bash/polygon-mainnet/response": q_,
    "./code-samples/eth_getBlockByNumber/bash/arb-mainnet/response": K_,
    "./code-samples/eth_getBlockByNumber/bash/base-mainnet/response": Q_,
    "./code-samples/eth_getBlockByNumber/bash/ethereum-mainnet/response": Z_,
    "./code-samples/eth_getBlockByNumber/bash/opt-mainnet/response": ex,
    "./code-samples/eth_getBlockByNumber/bash/polygon-mainnet/response": nx,
    "./code-samples/eth_getBlockReceipts/bash/arb-mainnet/response": ox,
    "./code-samples/eth_getBlockReceipts/bash/base-mainnet/response": ix,
    "./code-samples/eth_getBlockReceipts/bash/ethereum-mainnet/response": lx,
    "./code-samples/eth_getBlockReceipts/bash/opt-mainnet/response": ux,
    "./code-samples/eth_getBlockReceipts/bash/polygon-mainnet/response": fx,
    "./code-samples/eth_getLogs/bash/arb-mainnet/response": hx,
    "./code-samples/eth_getLogs/bash/base-mainnet/response": gx,
    "./code-samples/eth_getLogs/bash/ethereum-mainnet/response": vx,
    "./code-samples/eth_getLogs/bash/opt-mainnet/response": _x,
    "./code-samples/eth_getLogs/bash/polygon-mainnet/response": Sx,
    "./code-samples/eth_getTransactionByHash/bash/arb-mainnet/response": wx,
    "./code-samples/eth_getTransactionByHash/bash/base-mainnet/response": Ox,
    "./code-samples/eth_getTransactionByHash/bash/ethereum-mainnet/response":
      Ex,
    "./code-samples/eth_getTransactionByHash/bash/opt-mainnet/response": Fx,
    "./code-samples/eth_getTransactionByHash/bash/polygon-mainnet/response": Rx,
    "./code-samples/eth_getTransactionCount/bash/arb-mainnet/response": Bx,
    "./code-samples/eth_getTransactionCount/bash/base-mainnet/response": Nx,
    "./code-samples/eth_getTransactionCount/bash/ethereum-mainnet/response": $x,
    "./code-samples/eth_getTransactionCount/bash/opt-mainnet/response": Dx,
    "./code-samples/eth_getTransactionCount/bash/polygon-mainnet/response": zx,
    "./code-samples/eth_getTransactionReceipt/bash/arb-mainnet/response": Gx,
    "./code-samples/eth_getTransactionReceipt/bash/base-mainnet/response": qx,
    "./code-samples/eth_getTransactionReceipt/bash/ethereum-mainnet/response":
      Kx,
    "./code-samples/eth_getTransactionReceipt/bash/opt-mainnet/response": Qx,
    "./code-samples/eth_getTransactionReceipt/bash/polygon-mainnet/response":
      Zx,
    "./code-samples/getAccountInfo/bash/solana-mainnet/response": eS,
    "./code-samples/getBalance/bash/solana-mainnet/response": nS,
    "./code-samples/getLatestBlockhash/bash/solana-mainnet/response": oS,
    "./code-samples/getSignaturesForAddress/bash/solana-mainnet/response": iS,
    "./code-samples/getTokenAccountBalance/bash/solana-mainnet/response": lS,
    "./code-samples/getTokenAccountsByOwner/bash/solana-mainnet/response": uS,
    "./code-samples/getTransaction/bash/solana-mainnet/response": fS,
  });
function bS() {
  const r = {};
  function t(o) {
    const a = o.replace("./code-samples/", "").split("/"),
      [i, c, d] = a;
    return { apiKey: i, langKey: c, chainKey: d };
  }
  for (const o in fh) {
    const { apiKey: a, langKey: i, chainKey: c } = t(o);
    r[a] || (r[a] = {}),
      r[a][i] || (r[a][i] = {}),
      r[a][i][c] || (r[a][i][c] = { request: "", response: "" }),
      (r[a][i][c].request = fh[o].default);
  }
  for (const o in ph) {
    const { apiKey: a, langKey: i, chainKey: c } = t(o);
    r[a] || (r[a] = {}),
      r[a][i] || (r[a][i] = {}),
      r[a][i][c] || (r[a][i][c] = { request: "", response: "" }),
      (r[a][i][c].response = ph[o].default);
  }
  return r;
}
const Fa = bS(),
  vS = We.div`
  background-color: ${({ theme: r }) => (r.mode === "dark" ? "#121212" : "#FAFAFA")};
  border-radius: 24px;
  border: ${({ theme: r }) => (r.mode === "dark" ? "1px solid #383838" : "1px solid #EAEAEA")};
`,
  yS = We.div`
  margin-top: 24px;
  overflow-x: auto;
  height: 300px;

  .shiki {
    background-color: ${({ theme: r }) => (r.mode === "dark" ? "#121212" : "#FAFAFA")} !important;
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
  _S = We.button`
  background-color: ${({ theme: r }) => (r.mode === "dark" ? "#1C1C1C" : "#383838")};
  color: ${({ theme: r }) => (r.mode === "dark", "#EDEDED")};
  padding: 6px 12px;
  border-radius: 100px;
  border: none;
  cursor: ${({ disabled: r }) => (r ? "not-allowed" : "pointer")};
  font-family: monospace;
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: 8px;
`,
  xS = We.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  height: 300px;
  width: 100%;
`,
  SS = We.div`
  width: 16px;
  height: 16px;
  border: 2px solid
    ${({ theme: r }) => (r.mode === "dark" ? "#EDEDED" : "#111111")};
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
  CS = We.div`
  background-color: ${({ theme: r }) => (r.mode === "dark" ? "#131313" : "#fbfbfb")};
  border-radius: 0 0 24px 24px;
  padding: 24px 32px;
  color: ${({ theme: r }) => (r.mode === "dark" ? "#EDEDED" : "#111111")};
  display: flex;
  justify-content: space-between;
`,
  wS = (r) =>
    r === oo.solanaMainnet
      ? mS.map((o) => ({ value: o, label: o }))
      : (r === oo.ethereumMainnet ? [...gS, ...dh] : dh).map((o) => ({
          value: o,
          label: o,
        })),
  kS = () => {
    var X, he, Ce;
    const [r, t] = ze.useState(
      document.documentElement.classList.contains("dark"),
    );
    ze.useEffect(() => {
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
    const o = { mode: r ? "dark" : "light" },
      [a, i] = ze.useState(gc.CLI),
      [c, d] = ze.useState(oo.ethereumMainnet),
      [h, f] = ze.useState(za.eth_getBlockByNumber),
      [m, b] = ze.useState(a),
      [v, y] = ze.useState(!1),
      x = () => {
        var te, ce, ye;
        i(gc.JSON),
          T(),
          P(
            ((ye =
              (ce = (te = Fa[h]) == null ? void 0 : te[a]) == null
                ? void 0
                : ce[c]) == null
              ? void 0
              : ye.response) ?? "",
          ),
          y(!0);
      },
      [S, P] = ze.useState(
        ((Ce =
          (he = (X = Fa[h]) == null ? void 0 : X[a]) == null
            ? void 0
            : he[c]) == null
          ? void 0
          : Ce.request) ?? "Something went wrong",
      ),
      [k, O] = ze.useState(!1),
      T = () => {
        O(!0),
          setTimeout(
            () => {
              O(!1);
            },
            Math.floor(Math.random() * 300) + 100,
          );
      },
      I = (te, ce, ye = m) => {
        var Se, ge, me;
        i(ye),
          d(te),
          f(ce),
          P(
            ((me =
              (ge = (Se = Fa[ce]) == null ? void 0 : Se[ye]) == null
                ? void 0
                : ge[te]) == null
              ? void 0
              : me.request) ?? "Something went wrong",
          ),
          y(!1);
      },
      [N, F] = ze.useState(""),
      [$, M] = ze.useState(null);
    return (
      ze.useEffect(() => {
        (async () => {
          const ce = await I4({
            langs: [
              xa(() => Promise.resolve().then(() => ES), void 0),
              xa(() => Promise.resolve().then(() => jS), void 0),
            ],
            themes: [
              xa(() => Promise.resolve().then(() => IS), void 0),
              xa(() => Promise.resolve().then(() => MS), void 0),
            ],
            engine: M4(),
          });
          M(ce);
        })();
      }, []),
      ze.useEffect(() => {
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
      }, [S, a, r, $]),
      W.jsxs(Ah, {
        theme: o,
        children: [
          W.jsx("h3", {
            className: "mb-6",
            children: "Query the blockchain instantly",
          }),
          W.jsxs(vS, {
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
                              color: r ? "#EDEDED" : "#94A3B8",
                              minWidth: "9ch",
                              display: "inline-block",
                            },
                            children: v ? "Response" : "Request",
                          }),
                          W.jsx(Vl, {
                            isDark: r,
                            options: pS.filter((te) => {
                              var ye, Se;
                              const ce =
                                (Se =
                                  (ye = Fa[h]) == null
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
                          W.jsx(Vl, {
                            isDark: r,
                            options: hS,
                            selectedOption: c,
                            onChange: (te) => {
                              te === oo.solanaMainnet && te !== c
                                ? I(te, za.getTokenAccountsByOwner)
                                : te !== c && I(te, za.eth_getBlockByNumber);
                            },
                          }),
                          W.jsx(Vl, {
                            isDark: r,
                            options: wS(c),
                            selectedOption: h,
                            onChange: (te) => {
                              I(c, te);
                            },
                          }),
                        ],
                      }),
                      W.jsxs(_S, {
                        onMouseOver: (te) => {
                          te.currentTarget.style.backgroundColor = "#4b5563";
                        },
                        onMouseOut: (te) => {
                          te.currentTarget.style.backgroundColor = r
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
                    ? W.jsx(xS, { children: W.jsx(SS, {}) })
                    : W.jsx(yS, { dangerouslySetInnerHTML: { __html: N } }),
                ],
              }),
              W.jsxs(CS, {
                children: [
                  W.jsxs("div", {
                    style: { color: r ? "#EDEDED" : "#111111" },
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
                          color: r ? "#EDEDED" : "#383838",
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                        },
                        onMouseOver: (te) =>
                          (te.currentTarget.style.color =
                            "rgba(81, 103, 255, 1)"),
                        onMouseOut: (te) =>
                          (te.currentTarget.style.color = r
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
  hh = "fern-footer",
  mh = async () => {
    var t;
    if (!document.getElementById("alchemy-footer")) {
      const o = document.createElement("div");
      o.setAttribute("id", "alchemy-footer"),
        o.setAttribute("data-react-component", "true");
      let a = document.getElementById(hh);
      a ||
        ((a = document.createElement("div")),
        a.setAttribute("id", hh),
        document.body.appendChild(a));
      let i = document.getElementById("code-block-id");
      i ||
        ((i = document.createElement("div")),
        i.setAttribute("id", "code-block-id"),
        document.body.appendChild(i)),
        a.insertBefore(o, a.firstChild),
        Wf.createRoot(o).render(
          W.jsx(ze.StrictMode, { children: W.jsx(Gb, {}) }),
        ),
        Wf.createRoot(i).render(
          W.jsx(ze.StrictMode, { children: W.jsx(kS, {}) }),
        ),
        a && (a.style.display = "block"),
        i && (i.style.display = "block"),
        (t = document.getElementById("builtwithfern")) == null || t.remove();
    }
  };
window.addEventListener("load", async () => {
  window.location.pathname.replace(/\/+$/, "") === "/docs" && (await mh()),
    new MutationObserver(async (t) => {
      var i;
      const o = window.location.pathname.replace(/\/+$/, "");
      o === "/docs" &&
        t.some(
          (c) =>
            c.type === "childList" &&
            !document.getElementById("alchemy-footer"),
        ) &&
        (await mh()),
        o !== "/docs" &&
          document.getElementById("alchemy-footer") &&
          ((i = document.getElementById("alchemy-footer")) == null ||
            i.remove());
    }).observe(document.body, { childList: !0, subtree: !0 });
});
const OS = Object.freeze(
    JSON.parse(
      `{"displayName":"Shell","name":"shellscript","patterns":[{"include":"#initial_context"}],"repository":{"alias_statement":{"begin":"[\\\\t ]*+(alias)[\\\\t ]*+((?:((?<!\\\\w)-\\\\w+)\\\\b[\\\\t ]*+)*)[\\\\t ]*+((?<!\\\\w)[-0-9A-Z_a-z]+(?!\\\\w))(?:(\\\\[)((?:(?:\\\\$?(?<!\\\\w)[-0-9A-Z_a-z]+(?!\\\\w)|@)|\\\\*)|(-?\\\\d+))(]))?(?:(?:(=)|(\\\\+=))|(-=))","beginCaptures":{"1":{"name":"storage.type.alias.shell"},"2":{"patterns":[{"match":"(?<!\\\\w)-\\\\w+\\\\b","name":"string.unquoted.argument.shell constant.other.option.shell"}]},"3":{"name":"string.unquoted.argument.shell constant.other.option.shell"},"4":{"name":"variable.other.assignment.shell"},"5":{"name":"punctuation.definition.array.access.shell"},"6":{"name":"variable.other.assignment.shell"},"7":{"name":"constant.numeric.shell constant.numeric.integer.shell"},"8":{"name":"punctuation.definition.array.access.shell"},"9":{"name":"keyword.operator.assignment.shell"},"10":{"name":"keyword.operator.assignment.compound.shell"},"11":{"name":"keyword.operator.assignment.compound.shell"}},"end":"(?=[\\\\t ]|$)|(?:(?:(?:(;)|(&&))|(\\\\|\\\\|))|(&))","endCaptures":{"1":{"name":"punctuation.terminator.statement.semicolon.shell"},"2":{"name":"punctuation.separator.statement.and.shell"},"3":{"name":"punctuation.separator.statement.or.shell"},"4":{"name":"punctuation.separator.statement.background.shell"}},"name":"meta.expression.assignment.alias.shell","patterns":[{"include":"#normal_context"}]},"argument":{"begin":"[\\\\t ]++(?![\\\\n#\\\\&(\\\\[|]|$|;)","beginCaptures":{},"end":"(?=[\\\\t \\\\&;|]|$|[\\\\n)\`])","endCaptures":{},"name":"meta.argument.shell","patterns":[{"include":"#argument_context"},{"include":"#line_continuation"}]},"argument_context":{"patterns":[{"captures":{"1":{"name":"string.unquoted.argument.shell","patterns":[{"match":"\\\\*","name":"variable.language.special.wildcard.shell"},{"include":"#variable"},{"include":"#numeric_literal"},{"captures":{"1":{"name":"constant.language.$1.shell"}},"match":"(?<!\\\\w)\\\\b(true|false)\\\\b(?!\\\\w)"}]}},"match":"[\\\\t ]*+([^\\\\t\\\\n \\"$\\\\&-);<>\\\\\\\\\`|]+(?!>))"},{"include":"#normal_context"}]},"arithmetic_double":{"patterns":[{"begin":"\\\\(\\\\(","beginCaptures":{"0":{"name":"punctuation.section.arithmetic.double.shell"}},"end":"\\\\)\\\\s*\\\\)","endCaptures":{"0":{"name":"punctuation.section.arithmetic.double.shell"}},"name":"meta.arithmetic.shell","patterns":[{"include":"#math"},{"include":"#string"}]}]},"arithmetic_no_dollar":{"patterns":[{"begin":"\\\\(","beginCaptures":{"0":{"name":"punctuation.section.arithmetic.single.shell"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.arithmetic.single.shell"}},"name":"meta.arithmetic.shell","patterns":[{"include":"#math"},{"include":"#string"}]}]},"array_access_inline":{"captures":{"1":{"name":"punctuation.section.array.shell"},"2":{"patterns":[{"include":"#special_expansion"},{"include":"#string"},{"include":"#variable"}]},"3":{"name":"punctuation.section.array.shell"}},"match":"(\\\\[)([^]\\\\[]+)(])"},"array_value":{"begin":"[\\\\t ]*+((?<!\\\\w)[-0-9A-Z_a-z]+(?!\\\\w))(?:(\\\\[)((?:(?:\\\\$?(?<!\\\\w)[-0-9A-Z_a-z]+(?!\\\\w)|@)|\\\\*)|(-?\\\\d+))(]))?(?:(?:(=)|(\\\\+=))|(-=))[\\\\t ]*+(\\\\()","beginCaptures":{"1":{"name":"variable.other.assignment.shell"},"2":{"name":"punctuation.definition.array.access.shell"},"3":{"name":"variable.other.assignment.shell"},"4":{"name":"constant.numeric.shell constant.numeric.integer.shell"},"5":{"name":"punctuation.definition.array.access.shell"},"6":{"name":"keyword.operator.assignment.shell"},"7":{"name":"keyword.operator.assignment.compound.shell"},"8":{"name":"keyword.operator.assignment.compound.shell"},"9":{"name":"punctuation.definition.array.shell"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.array.shell"}},"patterns":[{"include":"#comment"},{"captures":{"1":{"name":"variable.other.assignment.array.shell entity.other.attribute-name.shell"},"2":{"name":"keyword.operator.assignment.shell punctuation.definition.assignment.shell"}},"match":"((?<!\\\\w)[-0-9A-Z_a-z]+(?!\\\\w))(=)"},{"captures":{"1":{"name":"punctuation.definition.bracket.named-array.shell"},"2":{"name":"string.unquoted.shell entity.other.attribute-name.bracket.shell"},"3":{"name":"punctuation.definition.bracket.named-array.shell"},"4":{"name":"punctuation.definition.assignment.shell"}},"match":"(\\\\[)(.+?)(])(=)"},{"include":"#normal_context"},{"include":"#simple_unquoted"}]},"assignment_statement":{"patterns":[{"include":"#array_value"},{"include":"#modified_assignment_statement"},{"include":"#normal_assignment_statement"}]},"basic_command_name":{"captures":{"1":{"name":"storage.modifier.$1.shell"},"2":{"name":"entity.name.function.call.shell entity.name.command.shell","patterns":[{"match":"(?<!\\\\w)(?:continue|return|break)(?!\\\\w)","name":"keyword.control.$0.shell"},{"match":"(?<!\\\\w)(?:unfunction|continue|autoload|unsetopt|bindkey|builtin|getopts|command|declare|unalias|history|unlimit|typeset|suspend|source|printf|unhash|disown|ulimit|return|which|alias|break|false|print|shift|times|umask|unset|read|type|exec|eval|wait|echo|dirs|jobs|kill|hash|stat|exit|test|trap|true|let|set|pwd|cd|fg|bg|fc|[.:])(?!/)(?!\\\\w)(?!-)","name":"support.function.builtin.shell"},{"include":"#variable"}]}},"match":"(?![\\\\n!#\\\\&()<>\\\\[{|]|$|[\\\\t ;])(?!nocorrect |nocorrect\\\\t|nocorrect$|readonly |readonly\\\\t|readonly$|function |function\\\\t|function$|foreach |foreach\\\\t|foreach$|coproc |coproc\\\\t|coproc$|logout |logout\\\\t|logout$|export |export\\\\t|export$|select |select\\\\t|select$|repeat |repeat\\\\t|repeat$|pushd |pushd\\\\t|pushd$|until |until\\\\t|until$|while |while\\\\t|while$|local |local\\\\t|local$|case |case\\\\t|case$|done |done\\\\t|done$|elif |elif\\\\t|elif$|else |else\\\\t|else$|esac |esac\\\\t|esac$|popd |popd\\\\t|popd$|then |then\\\\t|then$|time |time\\\\t|time$|for |for\\\\t|for$|end |end\\\\t|end$|fi |fi\\\\t|fi$|do |do\\\\t|do$|in |in\\\\t|in$|if |if\\\\t|if$)(?:((?<=^|[\\\\t \\\\&;])(?:readonly|declare|typeset|export|local)(?=[\\\\t \\\\&;]|$))|((?![\\"']|\\\\\\\\\\\\n?$)[^\\\\t\\\\n\\\\r !\\"'<>]+?))(?:(?=[\\\\t ])|(?=[\\\\n\\\\&);\`{|}]|[\\\\t ]*#|])(?<!\\\\\\\\))","name":"meta.statement.command.name.basic.shell"},"block_comment":{"begin":"\\\\s*+(/\\\\*)","beginCaptures":{"1":{"name":"punctuation.definition.comment.begin.shell"}},"end":"\\\\*/","endCaptures":{"0":{"name":"punctuation.definition.comment.end.shell"}},"name":"comment.block.shell"},"boolean":{"match":"\\\\b(?:true|false)\\\\b","name":"constant.language.$0.shell"},"case_statement":{"begin":"\\\\b(case)\\\\b[\\\\t ]*+(.+?)[\\\\t ]*+\\\\b(in)\\\\b","beginCaptures":{"1":{"name":"keyword.control.case.shell"},"2":{"patterns":[{"include":"#initial_context"}]},"3":{"name":"keyword.control.in.shell"}},"end":"\\\\besac\\\\b","endCaptures":{"0":{"name":"keyword.control.esac.shell"}},"name":"meta.case.shell","patterns":[{"include":"#comment"},{"captures":{"1":{"name":"keyword.operator.pattern.case.default.shell"}},"match":"[\\\\t ]*+(\\\\* *\\\\))"},{"begin":"(?<!\\\\))(?![\\\\t ]*+(?:esac\\\\b|$))","beginCaptures":{},"end":"(?=\\\\besac\\\\b)|(\\\\))","endCaptures":{"1":{"name":"keyword.operator.pattern.case.shell"}},"name":"meta.case.entry.pattern.shell","patterns":[{"include":"#case_statement_context"}]},{"begin":"(?<=\\\\))","beginCaptures":{},"end":"(;;)|(?=\\\\besac\\\\b)","endCaptures":{"1":{"name":"punctuation.terminator.statement.case.shell"}},"name":"meta.case.entry.body.shell","patterns":[{"include":"#typical_statements"},{"include":"#initial_context"}]}]},"case_statement_context":{"patterns":[{"match":"\\\\*","name":"variable.language.special.quantifier.star.shell keyword.operator.quantifier.star.shell punctuation.definition.arbitrary-repetition.shell punctuation.definition.regex.arbitrary-repetition.shell"},{"match":"\\\\+","name":"variable.language.special.quantifier.plus.shell keyword.operator.quantifier.plus.shell punctuation.definition.arbitrary-repetition.shell punctuation.definition.regex.arbitrary-repetition.shell"},{"match":"\\\\?","name":"variable.language.special.quantifier.question.shell keyword.operator.quantifier.question.shell punctuation.definition.arbitrary-repetition.shell punctuation.definition.regex.arbitrary-repetition.shell"},{"match":"@","name":"variable.language.special.at.shell keyword.operator.at.shell punctuation.definition.regex.at.shell"},{"match":"\\\\|","name":"keyword.operator.orvariable.language.special.or.shell keyword.operator.alternation.ruby.shell punctuation.definition.regex.alternation.shell punctuation.separator.regex.alternation.shell"},{"match":"\\\\\\\\.","name":"constant.character.escape.shell"},{"match":"(?<=\\\\tin| in|[\\\\t ]|;;)\\\\(","name":"keyword.operator.pattern.case.shell"},{"begin":"(?<=\\\\S)(\\\\()","beginCaptures":{"1":{"name":"punctuation.definition.group.shell punctuation.definition.regex.group.shell"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.group.shell punctuation.definition.regex.group.shell"}},"name":"meta.parenthese.shell","patterns":[{"include":"#case_statement_context"}]},{"begin":"\\\\[","beginCaptures":{"0":{"name":"punctuation.definition.character-class.shell"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.character-class.shell"}},"name":"string.regexp.character-class.shell","patterns":[{"match":"\\\\\\\\.","name":"constant.character.escape.shell"}]},{"include":"#string"},{"match":"[^\\\\t\\\\n )*?@\\\\[|]","name":"string.unquoted.pattern.shell string.regexp.unquoted.shell"}]},"command_name_range":{"begin":"\\\\G","beginCaptures":{},"end":"(?=[\\\\t \\\\&;|]|$|[\\\\n)\`])|(?=<)","endCaptures":{},"name":"meta.statement.command.name.shell","patterns":[{"match":"(?<!\\\\w)(?:continue|return|break)(?!\\\\w)","name":"entity.name.function.call.shell entity.name.command.shell keyword.control.$0.shell"},{"match":"(?<!\\\\w)(?:unfunction|continue|autoload|unsetopt|bindkey|builtin|getopts|command|declare|unalias|history|unlimit|typeset|suspend|source|printf|unhash|disown|ulimit|return|which|alias|break|false|print|shift|times|umask|unset|read|type|exec|eval|wait|echo|dirs|jobs|kill|hash|stat|exit|test|trap|true|let|set|pwd|cd|fg|bg|fc|[.:])(?!/)(?!\\\\w)(?!-)","name":"entity.name.function.call.shell entity.name.command.shell support.function.builtin.shell"},{"include":"#variable"},{"captures":{"1":{"name":"entity.name.function.call.shell entity.name.command.shell"}},"match":"(?<!\\\\w)(?<=\\\\G|[\\"')}])([^\\\\t\\\\n\\\\r \\"\\\\&');->\`{|]+)"},{"begin":"(?:\\\\G|(?<![\\\\t\\\\n #\\\\&;{|]))(\\\\$?)((\\")|('))","beginCaptures":{"1":{"name":"meta.statement.command.name.quoted.shell punctuation.definition.string.shell entity.name.function.call.shell entity.name.command.shell"},"2":{},"3":{"name":"meta.statement.command.name.quoted.shell string.quoted.double.shell punctuation.definition.string.begin.shell entity.name.function.call.shell entity.name.command.shell"},"4":{"name":"meta.statement.command.name.quoted.shell string.quoted.single.shell punctuation.definition.string.begin.shell entity.name.function.call.shell entity.name.command.shell"}},"end":"(?<!\\\\G)(?<=\\\\2)","endCaptures":{},"patterns":[{"include":"#continuation_of_single_quoted_command_name"},{"include":"#continuation_of_double_quoted_command_name"}]},{"include":"#line_continuation"},{"include":"#simple_unquoted"}]},"command_statement":{"begin":"[\\\\t ]*+(?![\\\\n!#\\\\&()<>\\\\[{|]|$|[\\\\t ;])(?!nocorrect |nocorrect\\\\t|nocorrect$|readonly |readonly\\\\t|readonly$|function |function\\\\t|function$|foreach |foreach\\\\t|foreach$|coproc |coproc\\\\t|coproc$|logout |logout\\\\t|logout$|export |export\\\\t|export$|select |select\\\\t|select$|repeat |repeat\\\\t|repeat$|pushd |pushd\\\\t|pushd$|until |until\\\\t|until$|while |while\\\\t|while$|local |local\\\\t|local$|case |case\\\\t|case$|done |done\\\\t|done$|elif |elif\\\\t|elif$|else |else\\\\t|else$|esac |esac\\\\t|esac$|popd |popd\\\\t|popd$|then |then\\\\t|then$|time |time\\\\t|time$|for |for\\\\t|for$|end |end\\\\t|end$|fi |fi\\\\t|fi$|do |do\\\\t|do$|in |in\\\\t|in$|if |if\\\\t|if$)(?!\\\\\\\\\\\\n?$)","beginCaptures":{},"end":"(?=[\\\\n\\\\&);\`{|}]|[\\\\t ]*#|])(?<!\\\\\\\\)","endCaptures":{},"name":"meta.statement.command.shell","patterns":[{"include":"#command_name_range"},{"include":"#line_continuation"},{"include":"#option"},{"include":"#argument"},{"include":"#string"},{"include":"#heredoc"}]},"comment":{"captures":{"1":{"name":"comment.line.number-sign.shell meta.shebang.shell"},"2":{"name":"punctuation.definition.comment.shebang.shell"},"3":{"name":"comment.line.number-sign.shell"},"4":{"name":"punctuation.definition.comment.shell"}},"match":"(?:^|[\\\\t ]++)(?:((#!).*)|((#).*))"},"comments":{"patterns":[{"include":"#block_comment"},{"include":"#line_comment"}]},"compound-command":{"patterns":[{"begin":"\\\\[","beginCaptures":{"0":{"name":"punctuation.definition.logical-expression.shell"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.logical-expression.shell"}},"name":"meta.scope.logical-expression.shell","patterns":[{"include":"#logical-expression"},{"include":"#initial_context"}]},{"begin":"(?<=\\\\s|^)\\\\{(?=\\\\s|$)","beginCaptures":{"0":{"name":"punctuation.definition.group.shell"}},"end":"(?<=^|;)\\\\s*(})","endCaptures":{"1":{"name":"punctuation.definition.group.shell"}},"name":"meta.scope.group.shell","patterns":[{"include":"#initial_context"}]}]},"continuation_of_double_quoted_command_name":{"begin":"\\\\G(?<=\\")","beginCaptures":{},"contentName":"meta.statement.command.name.continuation string.quoted.double entity.name.function.call entity.name.command","end":"\\"","endCaptures":{"0":{"name":"string.quoted.double.shell punctuation.definition.string.end.shell entity.name.function.call.shell entity.name.command.shell"}},"patterns":[{"match":"\\\\\\\\[\\\\n\\"$\\\\\\\\\`]","name":"constant.character.escape.shell"},{"include":"#variable"},{"include":"#interpolation"}]},"continuation_of_single_quoted_command_name":{"begin":"\\\\G(?<=')","beginCaptures":{},"contentName":"meta.statement.command.name.continuation string.quoted.single entity.name.function.call entity.name.command","end":"'","endCaptures":{"0":{"name":"string.quoted.single.shell punctuation.definition.string.end.shell entity.name.function.call.shell entity.name.command.shell"}}},"custom_command_names":{"patterns":[]},"custom_commands":{"patterns":[]},"double_quote_context":{"patterns":[{"match":"\\\\\\\\[\\\\n\\"$\\\\\\\\\`]","name":"constant.character.escape.shell"},{"include":"#variable"},{"include":"#interpolation"}]},"double_quote_escape_char":{"match":"\\\\\\\\[\\\\n\\"$\\\\\\\\\`]","name":"constant.character.escape.shell"},"floating_keyword":{"patterns":[{"match":"(?<=^|[\\\\t \\\\&;])(?:then|elif|else|done|end|do|if|fi)(?=[\\\\t \\\\&;]|$)","name":"keyword.control.$0.shell"}]},"for_statement":{"patterns":[{"begin":"\\\\b(for)\\\\b[\\\\t ]*+((?<!\\\\w)[-0-9A-Z_a-z]+(?!\\\\w))[\\\\t ]*+\\\\b(in)\\\\b","beginCaptures":{"1":{"name":"keyword.control.for.shell"},"2":{"name":"variable.other.for.shell"},"3":{"name":"keyword.control.in.shell"}},"end":"(?=[\\\\n\\\\&);\`{|}]|[\\\\t ]*#|])(?<!\\\\\\\\)","endCaptures":{},"name":"meta.for.in.shell","patterns":[{"include":"#string"},{"include":"#simple_unquoted"},{"include":"#normal_context"}]},{"begin":"\\\\b(for)\\\\b","beginCaptures":{"1":{"name":"keyword.control.for.shell"}},"end":"(?=[\\\\n\\\\&);\`{|}]|[\\\\t ]*#|])(?<!\\\\\\\\)","endCaptures":{},"name":"meta.for.shell","patterns":[{"include":"#arithmetic_double"},{"include":"#normal_context"}]}]},"function_definition":{"applyEndPatternLast":1,"begin":"[\\\\t ]*+(?:\\\\b(function)\\\\b[\\\\t ]*+([^\\\\t\\\\n\\\\r \\"'()=]+)(?:(\\\\()[\\\\t ]*+(\\\\)))?|([^\\\\t\\\\n\\\\r \\"'()=]+)[\\\\t ]*+(\\\\()[\\\\t ]*+(\\\\)))","beginCaptures":{"1":{"name":"storage.type.function.shell"},"2":{"name":"entity.name.function.shell"},"3":{"name":"punctuation.definition.arguments.shell"},"4":{"name":"punctuation.definition.arguments.shell"},"5":{"name":"entity.name.function.shell"},"6":{"name":"punctuation.definition.arguments.shell"},"7":{"name":"punctuation.definition.arguments.shell"}},"end":"(?<=[)}])","endCaptures":{},"name":"meta.function.shell","patterns":[{"match":"\\\\G[\\\\t\\\\n ]"},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.group.shell punctuation.section.function.definition.shell"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.group.shell punctuation.section.function.definition.shell"}},"name":"meta.function.body.shell","patterns":[{"include":"#initial_context"}]},{"begin":"\\\\(","beginCaptures":{"0":{"name":"punctuation.definition.group.shell punctuation.section.function.definition.shell"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.group.shell punctuation.section.function.definition.shell"}},"name":"meta.function.body.shell","patterns":[{"include":"#initial_context"}]},{"include":"#initial_context"}]},"heredoc":{"patterns":[{"begin":"((?<!<)<<-)[\\\\t ]*+([\\"'])[\\\\t ]*+([^\\"']+?)(?=[\\"\\\\&';<\\\\s])(\\\\2)(.*)","beginCaptures":{"1":{"name":"keyword.operator.heredoc.shell"},"2":{"name":"punctuation.definition.string.heredoc.quote.shell"},"3":{"name":"punctuation.definition.string.heredoc.delimiter.shell"},"4":{"name":"punctuation.definition.string.heredoc.quote.shell"},"5":{"patterns":[{"include":"#redirect_fix"},{"include":"#typical_statements"}]}},"contentName":"string.quoted.heredoc.indent.$3","end":"^\\\\t*\\\\3(?=[\\\\&;\\\\s]|$)","endCaptures":{"0":{"name":"punctuation.definition.string.heredoc.$0.shell"}},"patterns":[]},{"begin":"((?<!<)<<(?!<))[\\\\t ]*+([\\"'])[\\\\t ]*+([^\\"']+?)(?=[\\"\\\\&';<\\\\s])(\\\\2)(.*)","beginCaptures":{"1":{"name":"keyword.operator.heredoc.shell"},"2":{"name":"punctuation.definition.string.heredoc.quote.shell"},"3":{"name":"punctuation.definition.string.heredoc.delimiter.shell"},"4":{"name":"punctuation.definition.string.heredoc.quote.shell"},"5":{"patterns":[{"include":"#redirect_fix"},{"include":"#typical_statements"}]}},"contentName":"string.quoted.heredoc.no-indent.$3","end":"^\\\\3(?=[\\\\&;\\\\s]|$)","endCaptures":{"0":{"name":"punctuation.definition.string.heredoc.delimiter.shell"}},"patterns":[]},{"begin":"((?<!<)<<-)[\\\\t ]*+([^\\\\t \\"']+)(?=[\\"\\\\&';<\\\\s])(.*)","beginCaptures":{"1":{"name":"keyword.operator.heredoc.shell"},"2":{"name":"punctuation.definition.string.heredoc.delimiter.shell"},"3":{"patterns":[{"include":"#redirect_fix"},{"include":"#typical_statements"}]}},"contentName":"string.unquoted.heredoc.indent.$2","end":"^\\\\t*\\\\2(?=[\\\\&;\\\\s]|$)","endCaptures":{"0":{"name":"punctuation.definition.string.heredoc.delimiter.shell"}},"patterns":[{"include":"#double_quote_escape_char"},{"include":"#variable"},{"include":"#interpolation"}]},{"begin":"((?<!<)<<(?!<))[\\\\t ]*+([^\\\\t \\"']+)(?=[\\"\\\\&';<\\\\s])(.*)","beginCaptures":{"1":{"name":"keyword.operator.heredoc.shell"},"2":{"name":"punctuation.definition.string.heredoc.delimiter.shell"},"3":{"patterns":[{"include":"#redirect_fix"},{"include":"#typical_statements"}]}},"contentName":"string.unquoted.heredoc.no-indent.$2","end":"^\\\\2(?=[\\\\&;\\\\s]|$)","endCaptures":{"0":{"name":"punctuation.definition.string.heredoc.delimiter.shell"}},"patterns":[{"include":"#double_quote_escape_char"},{"include":"#variable"},{"include":"#interpolation"}]}]},"herestring":{"patterns":[{"begin":"(<<<)\\\\s*(('))","beginCaptures":{"1":{"name":"keyword.operator.herestring.shell"},"2":{"name":"string.quoted.single.shell"},"3":{"name":"punctuation.definition.string.begin.shell"}},"contentName":"string.quoted.single.shell","end":"(')","endCaptures":{"0":{"name":"string.quoted.single.shell"},"1":{"name":"punctuation.definition.string.end.shell"}},"name":"meta.herestring.shell"},{"begin":"(<<<)\\\\s*((\\"))","beginCaptures":{"1":{"name":"keyword.operator.herestring.shell"},"2":{"name":"string.quoted.double.shell"},"3":{"name":"punctuation.definition.string.begin.shell"}},"contentName":"string.quoted.double.shell","end":"(\\")","endCaptures":{"0":{"name":"string.quoted.double.shell"},"1":{"name":"punctuation.definition.string.end.shell"}},"name":"meta.herestring.shell","patterns":[{"include":"#double_quote_context"}]},{"captures":{"1":{"name":"keyword.operator.herestring.shell"},"2":{"name":"string.unquoted.herestring.shell","patterns":[{"include":"#initial_context"}]}},"match":"(<<<)\\\\s*(([^)\\\\\\\\\\\\s]|\\\\\\\\.)+)","name":"meta.herestring.shell"}]},"initial_context":{"patterns":[{"include":"#comment"},{"include":"#pipeline"},{"include":"#normal_statement_seperator"},{"include":"#logical_expression_double"},{"include":"#logical_expression_single"},{"include":"#assignment_statement"},{"include":"#case_statement"},{"include":"#for_statement"},{"include":"#loop"},{"include":"#function_definition"},{"include":"#line_continuation"},{"include":"#arithmetic_double"},{"include":"#misc_ranges"},{"include":"#variable"},{"include":"#interpolation"},{"include":"#heredoc"},{"include":"#herestring"},{"include":"#redirection"},{"include":"#pathname"},{"include":"#floating_keyword"},{"include":"#alias_statement"},{"include":"#normal_statement"},{"include":"#string"},{"include":"#support"}]},"inline_comment":{"captures":{"1":{"name":"comment.block.shell punctuation.definition.comment.begin.shell"},"2":{"name":"comment.block.shell"},"3":{"patterns":[{"match":"\\\\*/","name":"comment.block.shell punctuation.definition.comment.end.shell"},{"match":"\\\\*","name":"comment.block.shell"}]}},"match":"(/\\\\*)((?:[^*]|\\\\*++[^/])*+(\\\\*++/))"},"interpolation":{"patterns":[{"include":"#arithmetic_dollar"},{"include":"#subshell_dollar"},{"begin":"\`","beginCaptures":{"0":{"name":"punctuation.definition.evaluation.backticks.shell"}},"end":"\`","endCaptures":{"0":{"name":"punctuation.definition.evaluation.backticks.shell"}},"name":"string.interpolated.backtick.shell","patterns":[{"match":"\\\\\\\\[$\\\\\\\\\`]","name":"constant.character.escape.shell"},{"begin":"(?<=\\\\W)(?=#)(?!#\\\\{)","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.shell"}},"end":"(?!\\\\G)","patterns":[{"begin":"#","beginCaptures":{"0":{"name":"punctuation.definition.comment.shell"}},"end":"(?=\`)","name":"comment.line.number-sign.shell"}]},{"include":"#initial_context"}]}]},"keyword":{"patterns":[{"match":"(?<=^|[\\\\&;\\\\s])(then|else|elif|fi|for|in|do|done|select|continue|esac|while|until|return)(?=[\\\\&;\\\\s]|$)","name":"keyword.control.shell"},{"match":"(?<=^|[\\\\&;\\\\s])(?:export|declare|typeset|local|readonly)(?=[\\\\&;\\\\s]|$)","name":"storage.modifier.shell"}]},"line_comment":{"begin":"\\\\s*+(//)","beginCaptures":{"1":{"name":"punctuation.definition.comment.shell"}},"end":"(?<=\\\\n)(?<!\\\\\\\\\\\\n)","endCaptures":{},"name":"comment.line.double-slash.shell","patterns":[{"include":"#line_continuation_character"}]},"line_continuation":{"match":"\\\\\\\\(?=\\\\n)","name":"constant.character.escape.line-continuation.shell"},"logical-expression":{"patterns":[{"include":"#arithmetic_no_dollar"},{"match":"=[=~]?|!=?|[<>]|&&|\\\\|\\\\|","name":"keyword.operator.logical.shell"},{"match":"(?<!\\\\S)-(nt|ot|ef|eq|ne|l[et]|g[et]|[GLNOSa-hknopr-uwxz])\\\\b","name":"keyword.operator.logical.shell"}]},"logical_expression_context":{"patterns":[{"include":"#regex_comparison"},{"include":"#arithmetic_no_dollar"},{"include":"#logical-expression"},{"include":"#logical_expression_single"},{"include":"#logical_expression_double"},{"include":"#comment"},{"include":"#boolean"},{"include":"#redirect_number"},{"include":"#numeric_literal"},{"include":"#pipeline"},{"include":"#normal_statement_seperator"},{"include":"#string"},{"include":"#variable"},{"include":"#interpolation"},{"include":"#heredoc"},{"include":"#herestring"},{"include":"#pathname"},{"include":"#floating_keyword"},{"include":"#support"}]},"logical_expression_double":{"begin":"\\\\[\\\\[","beginCaptures":{"0":{"name":"punctuation.definition.logical-expression.shell"}},"end":"]]","endCaptures":{"0":{"name":"punctuation.definition.logical-expression.shell"}},"name":"meta.scope.logical-expression.shell","patterns":[{"include":"#logical_expression_context"}]},"logical_expression_single":{"begin":"\\\\[","beginCaptures":{"0":{"name":"punctuation.definition.logical-expression.shell"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.logical-expression.shell"}},"name":"meta.scope.logical-expression.shell","patterns":[{"include":"#logical_expression_context"}]},"loop":{"patterns":[{"begin":"(?<=^|[\\\\&;\\\\s])(for)\\\\s+(.+?)\\\\s+(in)(?=[\\\\&;\\\\s]|$)","beginCaptures":{"1":{"name":"keyword.control.shell"},"2":{"name":"variable.other.loop.shell","patterns":[{"include":"#string"}]},"3":{"name":"keyword.control.shell"}},"end":"(?<=^|[\\\\&;\\\\s])done(?=[\\\\&;\\\\s]|$|\\\\))","endCaptures":{"0":{"name":"keyword.control.shell"}},"name":"meta.scope.for-in-loop.shell","patterns":[{"include":"#initial_context"}]},{"begin":"(?<=^|[\\\\&;\\\\s])(while|until)(?=[\\\\&;\\\\s]|$)","beginCaptures":{"1":{"name":"keyword.control.shell"}},"end":"(?<=^|[\\\\&;\\\\s])done(?=[\\\\&;\\\\s]|$|\\\\))","endCaptures":{"0":{"name":"keyword.control.shell"}},"name":"meta.scope.while-loop.shell","patterns":[{"include":"#initial_context"}]},{"begin":"(?<=^|[\\\\&;\\\\s])(select)\\\\s+((?:[^\\\\\\\\\\\\s]|\\\\\\\\.)+)(?=[\\\\&;\\\\s]|$)","beginCaptures":{"1":{"name":"keyword.control.shell"},"2":{"name":"variable.other.loop.shell"}},"end":"(?<=^|[\\\\&;\\\\s])(done)(?=[\\\\&;\\\\s]|$|\\\\))","endCaptures":{"1":{"name":"keyword.control.shell"}},"name":"meta.scope.select-block.shell","patterns":[{"include":"#initial_context"}]},{"begin":"(?<=^|[\\\\&;\\\\s])if(?=[\\\\&;\\\\s]|$)","beginCaptures":{"0":{"name":"keyword.control.if.shell"}},"end":"(?<=^|[\\\\&;\\\\s])fi(?=[\\\\&;\\\\s]|$)","endCaptures":{"0":{"name":"keyword.control.fi.shell"}},"name":"meta.scope.if-block.shell","patterns":[{"include":"#initial_context"}]}]},"math":{"patterns":[{"include":"#variable"},{"match":"\\\\+{1,2}|-{1,2}|[!~]|\\\\*{1,2}|[%/]|<[<=]?|>[=>]?|==|!=|^|\\\\|{1,2}|&{1,2}|[,:=?]|[-%\\\\&*+/^|]=|<<=|>>=","name":"keyword.operator.arithmetic.shell"},{"match":"0[Xx]\\\\h+","name":"constant.numeric.hex.shell"},{"match":";","name":"punctuation.separator.semicolon.range"},{"match":"0\\\\d+","name":"constant.numeric.octal.shell"},{"match":"\\\\d{1,2}#[0-9@-Z_a-z]+","name":"constant.numeric.other.shell"},{"match":"\\\\d+","name":"constant.numeric.integer.shell"},{"match":"(?<!\\\\w)[0-9A-Z_a-z]+(?!\\\\w)","name":"variable.other.normal.shell"}]},"math_operators":{"patterns":[{"match":"\\\\+{1,2}|-{1,2}|[!~]|\\\\*{1,2}|[%/]|<[<=]?|>[=>]?|==|!=|^|\\\\|{1,2}|&{1,2}|[,:=?]|[-%\\\\&*+/^|]=|<<=|>>=","name":"keyword.operator.arithmetic.shell"},{"match":"0[Xx]\\\\h+","name":"constant.numeric.hex.shell"},{"match":"0\\\\d+","name":"constant.numeric.octal.shell"},{"match":"\\\\d{1,2}#[0-9@-Z_a-z]+","name":"constant.numeric.other.shell"},{"match":"\\\\d+","name":"constant.numeric.integer.shell"}]},"misc_ranges":{"patterns":[{"include":"#logical_expression_single"},{"include":"#logical_expression_double"},{"include":"#subshell_dollar"},{"begin":"(?<![^\\\\t ])(\\\\{)(?![$\\\\w])","beginCaptures":{"1":{"name":"punctuation.definition.group.shell"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.group.shell"}},"name":"meta.scope.group.shell","patterns":[{"include":"#initial_context"}]}]},"modified_assignment_statement":{"begin":"(?<=^|[\\\\t \\\\&;])(?:readonly|declare|typeset|export|local)(?=[\\\\t \\\\&;]|$)","beginCaptures":{"0":{"name":"storage.modifier.$0.shell"}},"end":"(?=[\\\\n\\\\&);\`{|}]|[\\\\t ]*#|])(?<!\\\\\\\\)","endCaptures":{},"name":"meta.statement.shell meta.expression.assignment.modified.shell","patterns":[{"match":"(?<!\\\\w)-\\\\w+\\\\b","name":"string.unquoted.argument.shell constant.other.option.shell"},{"include":"#array_value"},{"captures":{"1":{"name":"variable.other.assignment.shell"},"2":{"name":"punctuation.definition.array.access.shell"},"3":{"name":"variable.other.assignment.shell"},"4":{"name":"constant.numeric.shell constant.numeric.integer.shell"},"5":{"name":"punctuation.definition.array.access.shell"},"6":{"name":"keyword.operator.assignment.shell"},"7":{"name":"keyword.operator.assignment.compound.shell"},"8":{"name":"keyword.operator.assignment.compound.shell"},"9":{"name":"constant.numeric.shell constant.numeric.hex.shell"},"10":{"name":"constant.numeric.shell constant.numeric.octal.shell"},"11":{"name":"constant.numeric.shell constant.numeric.other.shell"},"12":{"name":"constant.numeric.shell constant.numeric.decimal.shell"},"13":{"name":"constant.numeric.shell constant.numeric.version.shell"},"14":{"name":"constant.numeric.shell constant.numeric.integer.shell"}},"match":"((?<!\\\\w)[-0-9A-Z_a-z]+(?!\\\\w))(?:(\\\\[)((?:(?:\\\\$?(?<!\\\\w)[-0-9A-Z_a-z]+(?!\\\\w)|@)|\\\\*)|(-?\\\\d+))(]))?(?:(?:(=)|(\\\\+=))|(-=))?(?:(?<=[\\\\t =]|^|[(\\\\[{])(?:(?:(?:(?:(?:(0[Xx]\\\\h+)|(0\\\\d+))|(\\\\d{1,2}#[0-9@-Z_a-z]+))|(-?\\\\d+\\\\.\\\\d+))|(-?\\\\d+(?:\\\\.\\\\d+)+))|(-?\\\\d+))(?=[\\\\t ]|$|[);}]))?"},{"include":"#normal_context"}]},"modifiers":{"match":"(?<=^|[\\\\t \\\\&;])(?:readonly|declare|typeset|export|local)(?=[\\\\t \\\\&;]|$)","name":"storage.modifier.$0.shell"},"normal_assignment_statement":{"begin":"[\\\\t ]*+((?<!\\\\w)[-0-9A-Z_a-z]+(?!\\\\w))(?:(\\\\[)((?:(?:\\\\$?(?<!\\\\w)[-0-9A-Z_a-z]+(?!\\\\w)|@)|\\\\*)|(-?\\\\d+))(]))?(?:(?:(=)|(\\\\+=))|(-=))","beginCaptures":{"1":{"name":"variable.other.assignment.shell"},"2":{"name":"punctuation.definition.array.access.shell"},"3":{"name":"variable.other.assignment.shell"},"4":{"name":"constant.numeric.shell constant.numeric.integer.shell"},"5":{"name":"punctuation.definition.array.access.shell"},"6":{"name":"keyword.operator.assignment.shell"},"7":{"name":"keyword.operator.assignment.compound.shell"},"8":{"name":"keyword.operator.assignment.compound.shell"}},"end":"(?=[\\\\n\\\\&);\`{|}]|[\\\\t ]*#|])(?<!\\\\\\\\)","endCaptures":{},"name":"meta.expression.assignment.shell","patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#normal_assignment_statement"},{"begin":"(?<=[\\\\t ])(?![\\\\t ]|\\\\w+=)","beginCaptures":{},"end":"(?=[\\\\n\\\\&);\`{|}]|[\\\\t ]*#|])(?<!\\\\\\\\)","endCaptures":{},"name":"meta.statement.command.env.shell","patterns":[{"include":"#command_name_range"},{"include":"#line_continuation"},{"include":"#option"},{"include":"#argument"},{"include":"#string"}]},{"include":"#simple_unquoted"},{"include":"#normal_context"}]},"normal_context":{"patterns":[{"include":"#comment"},{"include":"#pipeline"},{"include":"#normal_statement_seperator"},{"include":"#misc_ranges"},{"include":"#boolean"},{"include":"#redirect_number"},{"include":"#numeric_literal"},{"include":"#string"},{"include":"#variable"},{"include":"#interpolation"},{"include":"#heredoc"},{"include":"#herestring"},{"include":"#redirection"},{"include":"#pathname"},{"include":"#floating_keyword"},{"include":"#support"},{"include":"#parenthese"}]},"normal_statement":{"begin":"(?!^[\\\\t ]*+$)(?:(?<=(?:^until| until|\\\\tuntil|^while| while|\\\\twhile|^elif| elif|\\\\telif|^else| else|\\\\telse|^then| then|\\\\tthen|^do| do|\\\\tdo|^if| if|\\\\tif) )|(?<=^|[!\\\\&(;\`{|]))[\\\\t ]*+(?!nocorrect\\\\W|nocorrect\\\\$|function\\\\W|function\\\\$|foreach\\\\W|foreach\\\\$|repeat\\\\W|repeat\\\\$|logout\\\\W|logout\\\\$|coproc\\\\W|coproc\\\\$|select\\\\W|select\\\\$|while\\\\W|while\\\\$|pushd\\\\W|pushd\\\\$|until\\\\W|until\\\\$|case\\\\W|case\\\\$|done\\\\W|done\\\\$|elif\\\\W|elif\\\\$|else\\\\W|else\\\\$|esac\\\\W|esac\\\\$|popd\\\\W|popd\\\\$|then\\\\W|then\\\\$|time\\\\W|time\\\\$|for\\\\W|for\\\\$|end\\\\W|end\\\\$|fi\\\\W|fi\\\\$|do\\\\W|do\\\\$|in\\\\W|in\\\\$|if\\\\W|if\\\\$)","beginCaptures":{},"end":"(?=[\\\\n\\\\&);\`{|}]|[\\\\t ]*#|])(?<!\\\\\\\\)","endCaptures":{},"name":"meta.statement.shell","patterns":[{"include":"#typical_statements"}]},"normal_statement_seperator":{"captures":{"1":{"name":"punctuation.terminator.statement.semicolon.shell"},"2":{"name":"punctuation.separator.statement.and.shell"},"3":{"name":"punctuation.separator.statement.or.shell"},"4":{"name":"punctuation.separator.statement.background.shell"}},"match":"(?:(?:(;)|(&&))|(\\\\|\\\\|))|(&)"},"numeric_literal":{"captures":{"1":{"name":"constant.numeric.shell constant.numeric.hex.shell"},"2":{"name":"constant.numeric.shell constant.numeric.octal.shell"},"3":{"name":"constant.numeric.shell constant.numeric.other.shell"},"4":{"name":"constant.numeric.shell constant.numeric.decimal.shell"},"5":{"name":"constant.numeric.shell constant.numeric.version.shell"},"6":{"name":"constant.numeric.shell constant.numeric.integer.shell"}},"match":"(?<=[\\\\t =]|^|[(\\\\[{])(?:(?:(?:(?:(?:(0[Xx]\\\\h+)|(0\\\\d+))|(\\\\d{1,2}#[0-9@-Z_a-z]+))|(-?\\\\d+\\\\.\\\\d+))|(-?\\\\d+(?:\\\\.\\\\d+)+))|(-?\\\\d+))(?=[\\\\t ]|$|[);}])"},"option":{"begin":"[\\\\t ]++(-)((?![\\\\n!#\\\\&()<>\\\\[{|]|$|[\\\\t ;]))","beginCaptures":{"1":{"name":"string.unquoted.argument.shell constant.other.option.dash.shell"},"2":{"name":"string.unquoted.argument.shell constant.other.option.shell"}},"contentName":"string.unquoted.argument constant.other.option","end":"(?=[\\\\t ])|(?=[\\\\n\\\\&);\`{|}]|[\\\\t ]*#|])(?<!\\\\\\\\)","endCaptures":{},"patterns":[{"include":"#option_context"}]},"option_context":{"patterns":[{"include":"#misc_ranges"},{"include":"#string"},{"include":"#variable"},{"include":"#interpolation"},{"include":"#heredoc"},{"include":"#herestring"},{"include":"#redirection"},{"include":"#pathname"},{"include":"#floating_keyword"},{"include":"#support"}]},"parenthese":{"patterns":[{"begin":"\\\\(","beginCaptures":{"0":{"name":"punctuation.section.parenthese.shell"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.parenthese.shell"}},"name":"meta.parenthese.group.shell","patterns":[{"include":"#initial_context"}]}]},"pathname":{"patterns":[{"match":"(?<=[:=\\\\s]|^)~","name":"keyword.operator.tilde.shell"},{"match":"[*?]","name":"keyword.operator.glob.shell"},{"begin":"([!*+?@])(\\\\()","beginCaptures":{"1":{"name":"keyword.operator.extglob.shell"},"2":{"name":"punctuation.definition.extglob.shell"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.extglob.shell"}},"name":"meta.structure.extglob.shell","patterns":[{"include":"#initial_context"}]}]},"pipeline":{"patterns":[{"match":"(?<=^|[\\\\&;\\\\s])(time)(?=[\\\\&;\\\\s]|$)","name":"keyword.other.shell"},{"match":"[!|]","name":"keyword.operator.pipe.shell"}]},"redirect_fix":{"captures":{"1":{"name":"keyword.operator.redirect.shell"},"2":{"name":"string.unquoted.argument.shell"}},"match":"(>>?)[\\\\t ]*+([^\\\\t\\\\n \\"$\\\\&-);<>\\\\\\\\\`|]+)"},"redirect_number":{"captures":{"1":{"name":"keyword.operator.redirect.stdout.shell"},"2":{"name":"keyword.operator.redirect.stderr.shell"},"3":{"name":"keyword.operator.redirect.$3.shell"}},"match":"(?<=[\\\\t ])(?:(1)|(2)|(\\\\d+))(?=>)"},"redirection":{"patterns":[{"begin":"[<>]\\\\(","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.shell"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.string.end.shell"}},"name":"string.interpolated.process-substitution.shell","patterns":[{"include":"#initial_context"}]},{"match":"(?<![<>])(&>|\\\\d*>&\\\\d*|\\\\d*(>>|[<>])|\\\\d*<&|\\\\d*<>)(?![<>])","name":"keyword.operator.redirect.shell"}]},"regex_comparison":{"match":"=~","name":"keyword.operator.logical.regex.shell"},"regexp":{"patterns":[{"match":".+"}]},"simple_options":{"captures":{"0":{"patterns":[{"captures":{"1":{"name":"string.unquoted.argument.shell constant.other.option.dash.shell"},"2":{"name":"string.unquoted.argument.shell constant.other.option.shell"}},"match":"[\\\\t ]++(-)(\\\\w+)"}]}},"match":"(?:[\\\\t ]++-\\\\w+)*"},"simple_unquoted":{"match":"[^\\\\t\\\\n \\"$\\\\&-);<>\\\\\\\\\`|]","name":"string.unquoted.shell"},"special_expansion":{"match":"!|:[-=?]?|[*@]|##?|%%|[%/]","name":"keyword.operator.expansion.shell"},"start_of_command":{"match":"[\\\\t ]*+(?![\\\\n!#\\\\&()<>\\\\[{|]|$|[\\\\t ;])(?!nocorrect |nocorrect\\\\t|nocorrect$|readonly |readonly\\\\t|readonly$|function |function\\\\t|function$|foreach |foreach\\\\t|foreach$|coproc |coproc\\\\t|coproc$|logout |logout\\\\t|logout$|export |export\\\\t|export$|select |select\\\\t|select$|repeat |repeat\\\\t|repeat$|pushd |pushd\\\\t|pushd$|until |until\\\\t|until$|while |while\\\\t|while$|local |local\\\\t|local$|case |case\\\\t|case$|done |done\\\\t|done$|elif |elif\\\\t|elif$|else |else\\\\t|else$|esac |esac\\\\t|esac$|popd |popd\\\\t|popd$|then |then\\\\t|then$|time |time\\\\t|time$|for |for\\\\t|for$|end |end\\\\t|end$|fi |fi\\\\t|fi$|do |do\\\\t|do$|in |in\\\\t|in$|if |if\\\\t|if$)(?!\\\\\\\\\\\\n?$)"},"string":{"patterns":[{"match":"\\\\\\\\.","name":"constant.character.escape.shell"},{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.shell"}},"end":"'","endCaptures":{"0":{"name":"punctuation.definition.string.end.shell"}},"name":"string.quoted.single.shell"},{"begin":"\\\\$?\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.shell"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.shell"}},"name":"string.quoted.double.shell","patterns":[{"match":"\\\\\\\\[\\\\n\\"$\\\\\\\\\`]","name":"constant.character.escape.shell"},{"include":"#variable"},{"include":"#interpolation"}]},{"begin":"\\\\$'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.shell"}},"end":"'","endCaptures":{"0":{"name":"punctuation.definition.string.end.shell"}},"name":"string.quoted.single.dollar.shell","patterns":[{"match":"\\\\\\\\['\\\\\\\\abefnrtv]","name":"constant.character.escape.ansi-c.shell"},{"match":"\\\\\\\\[0-9]{3}\\"","name":"constant.character.escape.octal.shell"},{"match":"\\\\\\\\x\\\\h{2}\\"","name":"constant.character.escape.hex.shell"},{"match":"\\\\\\\\c.\\"","name":"constant.character.escape.control-char.shell"}]}]},"subshell_dollar":{"patterns":[{"begin":"\\\\$\\\\(","beginCaptures":{"0":{"name":"punctuation.definition.subshell.single.shell"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.subshell.single.shell"}},"name":"meta.scope.subshell","patterns":[{"include":"#parenthese"},{"include":"#initial_context"}]}]},"support":{"patterns":[{"match":"(?<=^|[\\\\&;\\\\s])[.:](?=[\\\\&;\\\\s]|$)","name":"support.function.builtin.shell"}]},"typical_statements":{"patterns":[{"include":"#assignment_statement"},{"include":"#case_statement"},{"include":"#for_statement"},{"include":"#while_statement"},{"include":"#function_definition"},{"include":"#command_statement"},{"include":"#line_continuation"},{"include":"#arithmetic_double"},{"include":"#normal_context"}]},"variable":{"patterns":[{"captures":{"1":{"name":"punctuation.definition.variable.shell variable.parameter.positional.all.shell"},"2":{"name":"variable.parameter.positional.all.shell"}},"match":"(\\\\$)(@(?!\\\\w))"},{"captures":{"1":{"name":"punctuation.definition.variable.shell variable.parameter.positional.shell"},"2":{"name":"variable.parameter.positional.shell"}},"match":"(\\\\$)([0-9](?!\\\\w))"},{"captures":{"1":{"name":"punctuation.definition.variable.shell variable.language.special.shell"},"2":{"name":"variable.language.special.shell"}},"match":"(\\\\$)([-!#$*0?_](?!\\\\w))"},{"begin":"(\\\\$)(\\\\{)[\\\\t ]*+(?=\\\\d)","beginCaptures":{"1":{"name":"punctuation.definition.variable.shell variable.parameter.positional.shell"},"2":{"name":"punctuation.section.bracket.curly.variable.begin.shell punctuation.definition.variable.shell variable.parameter.positional.shell"}},"contentName":"meta.parameter-expansion","end":"}","endCaptures":{"0":{"name":"punctuation.section.bracket.curly.variable.end.shell punctuation.definition.variable.shell variable.parameter.positional.shell"}},"patterns":[{"include":"#special_expansion"},{"include":"#array_access_inline"},{"match":"[0-9]+","name":"variable.parameter.positional.shell"},{"match":"(?<!\\\\w)[-0-9A-Z_a-z]+(?!\\\\w)","name":"variable.other.normal.shell"},{"include":"#variable"},{"include":"#string"}]},{"begin":"(\\\\$)(\\\\{)","beginCaptures":{"1":{"name":"punctuation.definition.variable.shell"},"2":{"name":"punctuation.section.bracket.curly.variable.begin.shell punctuation.definition.variable.shell"}},"contentName":"meta.parameter-expansion","end":"}","endCaptures":{"0":{"name":"punctuation.section.bracket.curly.variable.end.shell punctuation.definition.variable.shell"}},"patterns":[{"include":"#special_expansion"},{"include":"#array_access_inline"},{"match":"(?<!\\\\w)[-0-9A-Z_a-z]+(?!\\\\w)","name":"variable.other.normal.shell"},{"include":"#variable"},{"include":"#string"}]},{"captures":{"1":{"name":"punctuation.definition.variable.shell variable.other.normal.shell"},"2":{"name":"variable.other.normal.shell"}},"match":"(\\\\$)(\\\\w+(?!\\\\w))"}]},"while_statement":{"patterns":[{"begin":"\\\\b(while)\\\\b","beginCaptures":{"1":{"name":"keyword.control.while.shell"}},"end":"(?=[\\\\n\\\\&);\`{|}]|[\\\\t ]*#|])(?<!\\\\\\\\)","endCaptures":{},"name":"meta.while.shell","patterns":[{"include":"#line_continuation"},{"include":"#math_operators"},{"include":"#option"},{"include":"#simple_unquoted"},{"include":"#normal_context"},{"include":"#string"}]}]}},"scopeName":"source.shell","aliases":["bash","sh","shell","zsh"]}`,
    ),
  ),
  PS = [OS],
  ES = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: PS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  TS = Object.freeze(
    JSON.parse(
      '{"displayName":"JSON","name":"json","patterns":[{"include":"#value"}],"repository":{"array":{"begin":"\\\\[","beginCaptures":{"0":{"name":"punctuation.definition.array.begin.json"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.array.end.json"}},"name":"meta.structure.array.json","patterns":[{"include":"#value"},{"match":",","name":"punctuation.separator.array.json"},{"match":"[^]\\\\s]","name":"invalid.illegal.expected-array-separator.json"}]},"comments":{"patterns":[{"begin":"/\\\\*\\\\*(?!/)","captures":{"0":{"name":"punctuation.definition.comment.json"}},"end":"\\\\*/","name":"comment.block.documentation.json"},{"begin":"/\\\\*","captures":{"0":{"name":"punctuation.definition.comment.json"}},"end":"\\\\*/","name":"comment.block.json"},{"captures":{"1":{"name":"punctuation.definition.comment.json"}},"match":"(//).*$\\\\n?","name":"comment.line.double-slash.js"}]},"constant":{"match":"\\\\b(?:true|false|null)\\\\b","name":"constant.language.json"},"number":{"match":"-?(?:0|[1-9]\\\\d*)(?:(?:\\\\.\\\\d+)?(?:[Ee][-+]?\\\\d+)?)?","name":"constant.numeric.json"},"object":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.dictionary.begin.json"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.dictionary.end.json"}},"name":"meta.structure.dictionary.json","patterns":[{"include":"#objectkey"},{"include":"#comments"},{"begin":":","beginCaptures":{"0":{"name":"punctuation.separator.dictionary.key-value.json"}},"end":"(,)|(?=})","endCaptures":{"1":{"name":"punctuation.separator.dictionary.pair.json"}},"name":"meta.structure.dictionary.value.json","patterns":[{"include":"#value"},{"match":"[^,\\\\s]","name":"invalid.illegal.expected-dictionary-separator.json"}]},{"match":"[^}\\\\s]","name":"invalid.illegal.expected-dictionary-separator.json"}]},"objectkey":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.support.type.property-name.begin.json"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.support.type.property-name.end.json"}},"name":"string.json support.type.property-name.json","patterns":[{"include":"#stringcontent"}]},"string":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.json"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.json"}},"name":"string.quoted.double.json","patterns":[{"include":"#stringcontent"}]},"stringcontent":{"patterns":[{"match":"\\\\\\\\(?:[\\"/\\\\\\\\bfnrt]|u\\\\h{4})","name":"constant.character.escape.json"},{"match":"\\\\\\\\.","name":"invalid.illegal.unrecognized-string-escape.json"}]},"value":{"patterns":[{"include":"#constant"},{"include":"#number"},{"include":"#string"},{"include":"#array"},{"include":"#object"},{"include":"#comments"}]}},"scopeName":"source.json"}',
    ),
  ),
  FS = [TS],
  jS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: FS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  RS = Object.freeze(
    JSON.parse(
      '{"colors":{"activityBar.activeBorder":"#f9826c","activityBar.background":"#fff","activityBar.border":"#e1e4e8","activityBar.foreground":"#2f363d","activityBar.inactiveForeground":"#959da5","activityBarBadge.background":"#2188ff","activityBarBadge.foreground":"#fff","badge.background":"#dbedff","badge.foreground":"#005cc5","breadcrumb.activeSelectionForeground":"#586069","breadcrumb.focusForeground":"#2f363d","breadcrumb.foreground":"#6a737d","breadcrumbPicker.background":"#fafbfc","button.background":"#159739","button.foreground":"#fff","button.hoverBackground":"#138934","button.secondaryBackground":"#e1e4e8","button.secondaryForeground":"#1b1f23","button.secondaryHoverBackground":"#d1d5da","checkbox.background":"#fafbfc","checkbox.border":"#d1d5da","debugToolBar.background":"#fff","descriptionForeground":"#6a737d","diffEditor.insertedTextBackground":"#34d05822","diffEditor.removedTextBackground":"#d73a4922","dropdown.background":"#fafbfc","dropdown.border":"#e1e4e8","dropdown.foreground":"#2f363d","dropdown.listBackground":"#fff","editor.background":"#fff","editor.findMatchBackground":"#ffdf5d","editor.findMatchHighlightBackground":"#ffdf5d66","editor.focusedStackFrameHighlightBackground":"#28a74525","editor.foldBackground":"#d1d5da11","editor.foreground":"#24292e","editor.inactiveSelectionBackground":"#0366d611","editor.lineHighlightBackground":"#f6f8fa","editor.linkedEditingBackground":"#0366d611","editor.selectionBackground":"#0366d625","editor.selectionHighlightBackground":"#34d05840","editor.selectionHighlightBorder":"#34d05800","editor.stackFrameHighlightBackground":"#ffd33d33","editor.wordHighlightBackground":"#34d05800","editor.wordHighlightBorder":"#24943e99","editor.wordHighlightStrongBackground":"#34d05800","editor.wordHighlightStrongBorder":"#24943e50","editorBracketHighlight.foreground1":"#005cc5","editorBracketHighlight.foreground2":"#e36209","editorBracketHighlight.foreground3":"#5a32a3","editorBracketHighlight.foreground4":"#005cc5","editorBracketHighlight.foreground5":"#e36209","editorBracketHighlight.foreground6":"#5a32a3","editorBracketMatch.background":"#34d05840","editorBracketMatch.border":"#34d05800","editorCursor.foreground":"#044289","editorError.foreground":"#cb2431","editorGroup.border":"#e1e4e8","editorGroupHeader.tabsBackground":"#f6f8fa","editorGroupHeader.tabsBorder":"#e1e4e8","editorGutter.addedBackground":"#28a745","editorGutter.deletedBackground":"#d73a49","editorGutter.modifiedBackground":"#2188ff","editorIndentGuide.activeBackground":"#d7dbe0","editorIndentGuide.background":"#eff2f6","editorLineNumber.activeForeground":"#24292e","editorLineNumber.foreground":"#1b1f234d","editorOverviewRuler.border":"#fff","editorWarning.foreground":"#f9c513","editorWhitespace.foreground":"#d1d5da","editorWidget.background":"#f6f8fa","errorForeground":"#cb2431","focusBorder":"#2188ff","foreground":"#444d56","gitDecoration.addedResourceForeground":"#28a745","gitDecoration.conflictingResourceForeground":"#e36209","gitDecoration.deletedResourceForeground":"#d73a49","gitDecoration.ignoredResourceForeground":"#959da5","gitDecoration.modifiedResourceForeground":"#005cc5","gitDecoration.submoduleResourceForeground":"#959da5","gitDecoration.untrackedResourceForeground":"#28a745","input.background":"#fafbfc","input.border":"#e1e4e8","input.foreground":"#2f363d","input.placeholderForeground":"#959da5","list.activeSelectionBackground":"#e2e5e9","list.activeSelectionForeground":"#2f363d","list.focusBackground":"#cce5ff","list.hoverBackground":"#ebf0f4","list.hoverForeground":"#2f363d","list.inactiveFocusBackground":"#dbedff","list.inactiveSelectionBackground":"#e8eaed","list.inactiveSelectionForeground":"#2f363d","notificationCenterHeader.background":"#e1e4e8","notificationCenterHeader.foreground":"#6a737d","notifications.background":"#fafbfc","notifications.border":"#e1e4e8","notifications.foreground":"#2f363d","notificationsErrorIcon.foreground":"#d73a49","notificationsInfoIcon.foreground":"#005cc5","notificationsWarningIcon.foreground":"#e36209","panel.background":"#f6f8fa","panel.border":"#e1e4e8","panelInput.border":"#e1e4e8","panelTitle.activeBorder":"#f9826c","panelTitle.activeForeground":"#2f363d","panelTitle.inactiveForeground":"#6a737d","pickerGroup.border":"#e1e4e8","pickerGroup.foreground":"#2f363d","progressBar.background":"#2188ff","quickInput.background":"#fafbfc","quickInput.foreground":"#2f363d","scrollbar.shadow":"#6a737d33","scrollbarSlider.activeBackground":"#959da588","scrollbarSlider.background":"#959da533","scrollbarSlider.hoverBackground":"#959da544","settings.headerForeground":"#2f363d","settings.modifiedItemIndicator":"#2188ff","sideBar.background":"#f6f8fa","sideBar.border":"#e1e4e8","sideBar.foreground":"#586069","sideBarSectionHeader.background":"#f6f8fa","sideBarSectionHeader.border":"#e1e4e8","sideBarSectionHeader.foreground":"#2f363d","sideBarTitle.foreground":"#2f363d","statusBar.background":"#fff","statusBar.border":"#e1e4e8","statusBar.debuggingBackground":"#f9826c","statusBar.debuggingForeground":"#fff","statusBar.foreground":"#586069","statusBar.noFolderBackground":"#fff","statusBarItem.prominentBackground":"#e8eaed","statusBarItem.remoteBackground":"#fff","statusBarItem.remoteForeground":"#586069","tab.activeBackground":"#fff","tab.activeBorder":"#fff","tab.activeBorderTop":"#f9826c","tab.activeForeground":"#2f363d","tab.border":"#e1e4e8","tab.hoverBackground":"#fff","tab.inactiveBackground":"#f6f8fa","tab.inactiveForeground":"#6a737d","tab.unfocusedActiveBorder":"#fff","tab.unfocusedActiveBorderTop":"#e1e4e8","tab.unfocusedHoverBackground":"#fff","terminal.ansiBlack":"#24292e","terminal.ansiBlue":"#0366d6","terminal.ansiBrightBlack":"#959da5","terminal.ansiBrightBlue":"#005cc5","terminal.ansiBrightCyan":"#3192aa","terminal.ansiBrightGreen":"#22863a","terminal.ansiBrightMagenta":"#5a32a3","terminal.ansiBrightRed":"#cb2431","terminal.ansiBrightWhite":"#d1d5da","terminal.ansiBrightYellow":"#b08800","terminal.ansiCyan":"#1b7c83","terminal.ansiGreen":"#28a745","terminal.ansiMagenta":"#5a32a3","terminal.ansiRed":"#d73a49","terminal.ansiWhite":"#6a737d","terminal.ansiYellow":"#dbab09","terminal.foreground":"#586069","terminal.tab.activeBorder":"#f9826c","terminalCursor.background":"#d1d5da","terminalCursor.foreground":"#005cc5","textBlockQuote.background":"#fafbfc","textBlockQuote.border":"#e1e4e8","textCodeBlock.background":"#f6f8fa","textLink.activeForeground":"#005cc5","textLink.foreground":"#0366d6","textPreformat.foreground":"#586069","textSeparator.foreground":"#d1d5da","titleBar.activeBackground":"#fff","titleBar.activeForeground":"#2f363d","titleBar.border":"#e1e4e8","titleBar.inactiveBackground":"#f6f8fa","titleBar.inactiveForeground":"#6a737d","tree.indentGuidesStroke":"#e1e4e8","welcomePage.buttonBackground":"#f6f8fa","welcomePage.buttonHoverBackground":"#e1e4e8"},"displayName":"GitHub Light","name":"github-light","semanticHighlighting":true,"tokenColors":[{"scope":["comment","punctuation.definition.comment","string.comment"],"settings":{"foreground":"#6a737d"}},{"scope":["constant","entity.name.constant","variable.other.constant","variable.other.enummember","variable.language"],"settings":{"foreground":"#005cc5"}},{"scope":["entity","entity.name"],"settings":{"foreground":"#6f42c1"}},{"scope":"variable.parameter.function","settings":{"foreground":"#24292e"}},{"scope":"entity.name.tag","settings":{"foreground":"#22863a"}},{"scope":"keyword","settings":{"foreground":"#d73a49"}},{"scope":["storage","storage.type"],"settings":{"foreground":"#d73a49"}},{"scope":["storage.modifier.package","storage.modifier.import","storage.type.java"],"settings":{"foreground":"#24292e"}},{"scope":["string","punctuation.definition.string","string punctuation.section.embedded source"],"settings":{"foreground":"#032f62"}},{"scope":"support","settings":{"foreground":"#005cc5"}},{"scope":"meta.property-name","settings":{"foreground":"#005cc5"}},{"scope":"variable","settings":{"foreground":"#e36209"}},{"scope":"variable.other","settings":{"foreground":"#24292e"}},{"scope":"invalid.broken","settings":{"fontStyle":"italic","foreground":"#b31d28"}},{"scope":"invalid.deprecated","settings":{"fontStyle":"italic","foreground":"#b31d28"}},{"scope":"invalid.illegal","settings":{"fontStyle":"italic","foreground":"#b31d28"}},{"scope":"invalid.unimplemented","settings":{"fontStyle":"italic","foreground":"#b31d28"}},{"scope":"carriage-return","settings":{"background":"#d73a49","content":"^M","fontStyle":"italic underline","foreground":"#fafbfc"}},{"scope":"message.error","settings":{"foreground":"#b31d28"}},{"scope":"string variable","settings":{"foreground":"#005cc5"}},{"scope":["source.regexp","string.regexp"],"settings":{"foreground":"#032f62"}},{"scope":["string.regexp.character-class","string.regexp constant.character.escape","string.regexp source.ruby.embedded","string.regexp string.regexp.arbitrary-repitition"],"settings":{"foreground":"#032f62"}},{"scope":"string.regexp constant.character.escape","settings":{"fontStyle":"bold","foreground":"#22863a"}},{"scope":"support.constant","settings":{"foreground":"#005cc5"}},{"scope":"support.variable","settings":{"foreground":"#005cc5"}},{"scope":"meta.module-reference","settings":{"foreground":"#005cc5"}},{"scope":"punctuation.definition.list.begin.markdown","settings":{"foreground":"#e36209"}},{"scope":["markup.heading","markup.heading entity.name"],"settings":{"fontStyle":"bold","foreground":"#005cc5"}},{"scope":"markup.quote","settings":{"foreground":"#22863a"}},{"scope":"markup.italic","settings":{"fontStyle":"italic","foreground":"#24292e"}},{"scope":"markup.bold","settings":{"fontStyle":"bold","foreground":"#24292e"}},{"scope":["markup.underline"],"settings":{"fontStyle":"underline"}},{"scope":["markup.strikethrough"],"settings":{"fontStyle":"strikethrough"}},{"scope":"markup.inline.raw","settings":{"foreground":"#005cc5"}},{"scope":["markup.deleted","meta.diff.header.from-file","punctuation.definition.deleted"],"settings":{"background":"#ffeef0","foreground":"#b31d28"}},{"scope":["markup.inserted","meta.diff.header.to-file","punctuation.definition.inserted"],"settings":{"background":"#f0fff4","foreground":"#22863a"}},{"scope":["markup.changed","punctuation.definition.changed"],"settings":{"background":"#ffebda","foreground":"#e36209"}},{"scope":["markup.ignored","markup.untracked"],"settings":{"background":"#005cc5","foreground":"#f6f8fa"}},{"scope":"meta.diff.range","settings":{"fontStyle":"bold","foreground":"#6f42c1"}},{"scope":"meta.diff.header","settings":{"foreground":"#005cc5"}},{"scope":"meta.separator","settings":{"fontStyle":"bold","foreground":"#005cc5"}},{"scope":"meta.output","settings":{"foreground":"#005cc5"}},{"scope":["brackethighlighter.tag","brackethighlighter.curly","brackethighlighter.round","brackethighlighter.square","brackethighlighter.angle","brackethighlighter.quote"],"settings":{"foreground":"#586069"}},{"scope":"brackethighlighter.unmatched","settings":{"foreground":"#b31d28"}},{"scope":["constant.other.reference.link","string.other.link"],"settings":{"fontStyle":"underline","foreground":"#032f62"}}],"type":"light"}',
    ),
  ),
  IS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: RS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  BS = Object.freeze(
    JSON.parse(
      '{"colors":{"activityBar.activeBorder":"#80CBC4","activityBar.background":"#212121","activityBar.border":"#21212160","activityBar.dropBackground":"#f0717880","activityBar.foreground":"#EEFFFF","activityBarBadge.background":"#80CBC4","activityBarBadge.foreground":"#000000","badge.background":"#00000030","badge.foreground":"#545454","breadcrumb.activeSelectionForeground":"#80CBC4","breadcrumb.background":"#212121","breadcrumb.focusForeground":"#EEFFFF","breadcrumb.foreground":"#676767","breadcrumbPicker.background":"#212121","button.background":"#61616150","button.foreground":"#ffffff","debugConsole.errorForeground":"#f07178","debugConsole.infoForeground":"#89DDFF","debugConsole.warningForeground":"#FFCB6B","debugToolBar.background":"#212121","diffEditor.insertedTextBackground":"#89DDFF20","diffEditor.removedTextBackground":"#ff9cac20","dropdown.background":"#212121","dropdown.border":"#FFFFFF10","editor.background":"#212121","editor.findMatchBackground":"#000000","editor.findMatchBorder":"#80CBC4","editor.findMatchHighlight":"#EEFFFF","editor.findMatchHighlightBackground":"#00000050","editor.findMatchHighlightBorder":"#ffffff30","editor.findRangeHighlightBackground":"#FFCB6B30","editor.foreground":"#EEFFFF","editor.lineHighlightBackground":"#00000050","editor.lineHighlightBorder":"#00000000","editor.rangeHighlightBackground":"#FFFFFF0d","editor.selectionBackground":"#61616150","editor.selectionHighlightBackground":"#FFCC0020","editor.wordHighlightBackground":"#ff9cac30","editor.wordHighlightStrongBackground":"#C3E88D30","editorBracketMatch.background":"#212121","editorBracketMatch.border":"#FFCC0050","editorCursor.foreground":"#FFCC00","editorError.foreground":"#f0717870","editorGroup.border":"#00000030","editorGroup.dropBackground":"#f0717880","editorGroup.focusedEmptyBorder":"#f07178","editorGroupHeader.tabsBackground":"#212121","editorGutter.addedBackground":"#C3E88D60","editorGutter.deletedBackground":"#f0717860","editorGutter.modifiedBackground":"#82AAFF60","editorHoverWidget.background":"#212121","editorHoverWidget.border":"#FFFFFF10","editorIndentGuide.activeBackground":"#424242","editorIndentGuide.background":"#42424270","editorInfo.foreground":"#82AAFF70","editorLineNumber.activeForeground":"#676767","editorLineNumber.foreground":"#424242","editorLink.activeForeground":"#EEFFFF","editorMarkerNavigation.background":"#EEFFFF05","editorOverviewRuler.border":"#212121","editorOverviewRuler.errorForeground":"#f0717840","editorOverviewRuler.findMatchForeground":"#80CBC4","editorOverviewRuler.infoForeground":"#82AAFF40","editorOverviewRuler.warningForeground":"#FFCB6B40","editorRuler.foreground":"#424242","editorSuggestWidget.background":"#212121","editorSuggestWidget.border":"#FFFFFF10","editorSuggestWidget.foreground":"#EEFFFF","editorSuggestWidget.highlightForeground":"#80CBC4","editorSuggestWidget.selectedBackground":"#00000050","editorWarning.foreground":"#FFCB6B70","editorWhitespace.foreground":"#EEFFFF40","editorWidget.background":"#212121","editorWidget.border":"#80CBC4","editorWidget.resizeBorder":"#80CBC4","extensionBadge.remoteForeground":"#EEFFFF","extensionButton.prominentBackground":"#C3E88D90","extensionButton.prominentForeground":"#EEFFFF","extensionButton.prominentHoverBackground":"#C3E88D","focusBorder":"#FFFFFF00","foreground":"#EEFFFF","gitDecoration.conflictingResourceForeground":"#FFCB6B90","gitDecoration.deletedResourceForeground":"#f0717890","gitDecoration.ignoredResourceForeground":"#67676790","gitDecoration.modifiedResourceForeground":"#82AAFF90","gitDecoration.untrackedResourceForeground":"#C3E88D90","input.background":"#2B2B2B","input.border":"#FFFFFF10","input.foreground":"#EEFFFF","input.placeholderForeground":"#EEFFFF60","inputOption.activeBackground":"#EEFFFF30","inputOption.activeBorder":"#EEFFFF30","inputValidation.errorBorder":"#f07178","inputValidation.infoBorder":"#82AAFF","inputValidation.warningBorder":"#FFCB6B","list.activeSelectionBackground":"#212121","list.activeSelectionForeground":"#80CBC4","list.dropBackground":"#f0717880","list.focusBackground":"#EEFFFF20","list.focusForeground":"#EEFFFF","list.highlightForeground":"#80CBC4","list.hoverBackground":"#212121","list.hoverForeground":"#FFFFFF","list.inactiveSelectionBackground":"#00000030","list.inactiveSelectionForeground":"#80CBC4","listFilterWidget.background":"#00000030","listFilterWidget.noMatchesOutline":"#00000030","listFilterWidget.outline":"#00000030","menu.background":"#212121","menu.foreground":"#EEFFFF","menu.selectionBackground":"#00000050","menu.selectionBorder":"#00000030","menu.selectionForeground":"#80CBC4","menu.separatorBackground":"#EEFFFF","menubar.selectionBackground":"#00000030","menubar.selectionBorder":"#00000030","menubar.selectionForeground":"#80CBC4","notebook.focusedCellBorder":"#80CBC4","notebook.inactiveFocusedCellBorder":"#80CBC450","notificationLink.foreground":"#80CBC4","notifications.background":"#212121","notifications.foreground":"#EEFFFF","panel.background":"#212121","panel.border":"#21212160","panel.dropBackground":"#EEFFFF","panelTitle.activeBorder":"#80CBC4","panelTitle.activeForeground":"#FFFFFF","panelTitle.inactiveForeground":"#EEFFFF","peekView.border":"#00000030","peekViewEditor.background":"#2B2B2B","peekViewEditor.matchHighlightBackground":"#61616150","peekViewEditorGutter.background":"#2B2B2B","peekViewResult.background":"#2B2B2B","peekViewResult.matchHighlightBackground":"#61616150","peekViewResult.selectionBackground":"#67676770","peekViewTitle.background":"#2B2B2B","peekViewTitleDescription.foreground":"#EEFFFF60","pickerGroup.border":"#FFFFFF1a","pickerGroup.foreground":"#80CBC4","progressBar.background":"#80CBC4","quickInput.background":"#212121","quickInput.foreground":"#676767","quickInput.list.focusBackground":"#EEFFFF20","sash.hoverBorder":"#80CBC450","scrollbar.shadow":"#00000030","scrollbarSlider.activeBackground":"#80CBC4","scrollbarSlider.background":"#EEFFFF20","scrollbarSlider.hoverBackground":"#EEFFFF10","selection.background":"#00000080","settings.checkboxBackground":"#212121","settings.checkboxForeground":"#EEFFFF","settings.dropdownBackground":"#212121","settings.dropdownForeground":"#EEFFFF","settings.headerForeground":"#80CBC4","settings.modifiedItemIndicator":"#80CBC4","settings.numberInputBackground":"#212121","settings.numberInputForeground":"#EEFFFF","settings.textInputBackground":"#212121","settings.textInputForeground":"#EEFFFF","sideBar.background":"#212121","sideBar.border":"#21212160","sideBar.foreground":"#676767","sideBarSectionHeader.background":"#212121","sideBarSectionHeader.border":"#21212160","sideBarTitle.foreground":"#EEFFFF","statusBar.background":"#212121","statusBar.border":"#21212160","statusBar.debuggingBackground":"#C792EA","statusBar.debuggingForeground":"#ffffff","statusBar.foreground":"#616161","statusBar.noFolderBackground":"#212121","statusBarItem.activeBackground":"#f0717880","statusBarItem.hoverBackground":"#54545420","statusBarItem.remoteBackground":"#80CBC4","statusBarItem.remoteForeground":"#000000","tab.activeBackground":"#212121","tab.activeBorder":"#80CBC4","tab.activeForeground":"#FFFFFF","tab.activeModifiedBorder":"#676767","tab.border":"#212121","tab.inactiveBackground":"#212121","tab.inactiveForeground":"#676767","tab.inactiveModifiedBorder":"#904348","tab.unfocusedActiveBorder":"#545454","tab.unfocusedActiveForeground":"#EEFFFF","tab.unfocusedActiveModifiedBorder":"#c05a60","tab.unfocusedInactiveModifiedBorder":"#904348","terminal.ansiBlack":"#000000","terminal.ansiBlue":"#82AAFF","terminal.ansiBrightBlack":"#545454","terminal.ansiBrightBlue":"#82AAFF","terminal.ansiBrightCyan":"#89DDFF","terminal.ansiBrightGreen":"#C3E88D","terminal.ansiBrightMagenta":"#C792EA","terminal.ansiBrightRed":"#f07178","terminal.ansiBrightWhite":"#ffffff","terminal.ansiBrightYellow":"#FFCB6B","terminal.ansiCyan":"#89DDFF","terminal.ansiGreen":"#C3E88D","terminal.ansiMagenta":"#C792EA","terminal.ansiRed":"#f07178","terminal.ansiWhite":"#ffffff","terminal.ansiYellow":"#FFCB6B","terminalCursor.background":"#000000","terminalCursor.foreground":"#FFCB6B","textLink.activeForeground":"#EEFFFF","textLink.foreground":"#80CBC4","titleBar.activeBackground":"#212121","titleBar.activeForeground":"#EEFFFF","titleBar.border":"#21212160","titleBar.inactiveBackground":"#212121","titleBar.inactiveForeground":"#676767","tree.indentGuidesStroke":"#424242","widget.shadow":"#00000030"},"displayName":"Material Theme Darker","name":"material-theme-darker","semanticHighlighting":true,"tokenColors":[{"settings":{"background":"#212121","foreground":"#EEFFFF"}},{"scope":"string","settings":{"foreground":"#C3E88D"}},{"scope":"punctuation, constant.other.symbol","settings":{"foreground":"#89DDFF"}},{"scope":"constant.character.escape, text.html constant.character.entity.named","settings":{"foreground":"#EEFFFF"}},{"scope":"constant.language.boolean","settings":{"foreground":"#ff9cac"}},{"scope":"constant.numeric","settings":{"foreground":"#F78C6C"}},{"scope":"variable, variable.parameter, support.variable, variable.language, support.constant, meta.definition.variable entity.name.function, meta.function-call.arguments","settings":{"foreground":"#EEFFFF"}},{"scope":"keyword.other","settings":{"foreground":"#F78C6C"}},{"scope":"keyword, modifier, variable.language.this, support.type.object, constant.language","settings":{"foreground":"#89DDFF"}},{"scope":"entity.name.function, support.function","settings":{"foreground":"#82AAFF"}},{"scope":"storage.type, storage.modifier, storage.control","settings":{"foreground":"#C792EA"}},{"scope":"support.module, support.node","settings":{"fontStyle":"italic","foreground":"#f07178"}},{"scope":"support.type, constant.other.key","settings":{"foreground":"#FFCB6B"}},{"scope":"entity.name.type, entity.other.inherited-class, entity.other","settings":{"foreground":"#FFCB6B"}},{"scope":"comment","settings":{"fontStyle":"italic","foreground":"#545454"}},{"scope":"comment punctuation.definition.comment, string.quoted.docstring","settings":{"fontStyle":"italic","foreground":"#545454"}},{"scope":"punctuation","settings":{"foreground":"#89DDFF"}},{"scope":"entity.name, entity.name.type.class, support.type, support.class, meta.use","settings":{"foreground":"#FFCB6B"}},{"scope":"variable.object.property, meta.field.declaration entity.name.function","settings":{"foreground":"#f07178"}},{"scope":"meta.definition.method entity.name.function","settings":{"foreground":"#f07178"}},{"scope":"meta.function entity.name.function","settings":{"foreground":"#82AAFF"}},{"scope":"template.expression.begin, template.expression.end, punctuation.definition.template-expression.begin, punctuation.definition.template-expression.end","settings":{"foreground":"#89DDFF"}},{"scope":"meta.embedded, source.groovy.embedded, meta.template.expression","settings":{"foreground":"#EEFFFF"}},{"scope":"entity.name.tag.yaml","settings":{"foreground":"#f07178"}},{"scope":"meta.object-literal.key, meta.object-literal.key string, support.type.property-name.json","settings":{"foreground":"#f07178"}},{"scope":"constant.language.json","settings":{"foreground":"#89DDFF"}},{"scope":"entity.other.attribute-name.class","settings":{"foreground":"#FFCB6B"}},{"scope":"entity.other.attribute-name.id","settings":{"foreground":"#F78C6C"}},{"scope":"source.css entity.name.tag","settings":{"foreground":"#FFCB6B"}},{"scope":"support.type.property-name.css","settings":{"foreground":"#B2CCD6"}},{"scope":"meta.tag, punctuation.definition.tag","settings":{"foreground":"#89DDFF"}},{"scope":"entity.name.tag","settings":{"foreground":"#f07178"}},{"scope":"entity.other.attribute-name","settings":{"foreground":"#C792EA"}},{"scope":"punctuation.definition.entity.html","settings":{"foreground":"#EEFFFF"}},{"scope":"markup.heading","settings":{"foreground":"#89DDFF"}},{"scope":"text.html.markdown meta.link.inline, meta.link.reference","settings":{"foreground":"#f07178"}},{"scope":"text.html.markdown beginning.punctuation.definition.list","settings":{"foreground":"#89DDFF"}},{"scope":"markup.italic","settings":{"fontStyle":"italic","foreground":"#f07178"}},{"scope":"markup.bold","settings":{"fontStyle":"bold","foreground":"#f07178"}},{"scope":"markup.bold markup.italic, markup.italic markup.bold","settings":{"fontStyle":"italic bold","foreground":"#f07178"}},{"scope":"markup.fenced_code.block.markdown punctuation.definition.markdown","settings":{"foreground":"#C3E88D"}},{"scope":"markup.inline.raw.string.markdown","settings":{"foreground":"#C3E88D"}},{"scope":"keyword.other.definition.ini","settings":{"foreground":"#f07178"}},{"scope":"entity.name.section.group-title.ini","settings":{"foreground":"#89DDFF"}},{"scope":"source.cs meta.class.identifier storage.type","settings":{"foreground":"#FFCB6B"}},{"scope":"source.cs meta.method.identifier entity.name.function","settings":{"foreground":"#f07178"}},{"scope":"source.cs meta.method-call meta.method, source.cs entity.name.function","settings":{"foreground":"#82AAFF"}},{"scope":"source.cs storage.type","settings":{"foreground":"#FFCB6B"}},{"scope":"source.cs meta.method.return-type","settings":{"foreground":"#FFCB6B"}},{"scope":"source.cs meta.preprocessor","settings":{"foreground":"#545454"}},{"scope":"source.cs entity.name.type.namespace","settings":{"foreground":"#EEFFFF"}},{"scope":"meta.jsx.children, SXNested","settings":{"foreground":"#EEFFFF"}},{"scope":"support.class.component","settings":{"foreground":"#FFCB6B"}},{"scope":"source.cpp meta.block variable.other","settings":{"foreground":"#EEFFFF"}},{"scope":"source.python meta.member.access.python","settings":{"foreground":"#f07178"}},{"scope":"source.python meta.function-call.python, meta.function-call.arguments","settings":{"foreground":"#82AAFF"}},{"scope":"meta.block","settings":{"foreground":"#f07178"}},{"scope":"entity.name.function.call","settings":{"foreground":"#82AAFF"}},{"scope":"source.php support.other.namespace, source.php meta.use support.class","settings":{"foreground":"#EEFFFF"}},{"scope":"constant.keyword","settings":{"fontStyle":"italic","foreground":"#89DDFF"}},{"scope":"entity.name.function","settings":{"foreground":"#82AAFF"}},{"settings":{"background":"#212121","foreground":"#EEFFFF"}},{"scope":["constant.other.placeholder"],"settings":{"foreground":"#f07178"}},{"scope":["markup.deleted"],"settings":{"foreground":"#f07178"}},{"scope":["markup.inserted"],"settings":{"foreground":"#C3E88D"}},{"scope":["markup.underline"],"settings":{"fontStyle":"underline"}},{"scope":["keyword.control"],"settings":{"fontStyle":"italic","foreground":"#89DDFF"}},{"scope":["variable.parameter"],"settings":{"fontStyle":"italic"}},{"scope":["variable.parameter.function.language.special.self.python"],"settings":{"fontStyle":"italic","foreground":"#f07178"}},{"scope":["constant.character.format.placeholder.other.python"],"settings":{"foreground":"#F78C6C"}},{"scope":["markup.quote"],"settings":{"fontStyle":"italic","foreground":"#89DDFF"}},{"scope":["markup.fenced_code.block"],"settings":{"foreground":"#EEFFFF90"}},{"scope":["punctuation.definition.quote"],"settings":{"foreground":"#ff9cac"}},{"scope":["meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#C792EA"}},{"scope":["meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#FFCB6B"}},{"scope":["meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#F78C6C"}},{"scope":["meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#f07178"}},{"scope":["meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#916b53"}},{"scope":["meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#82AAFF"}},{"scope":["meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#ff9cac"}},{"scope":["meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#C792EA"}},{"scope":["meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#C3E88D"}}],"type":"dark"}',
    ),
  ),
  MS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: BS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
