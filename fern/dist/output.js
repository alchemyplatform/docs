(function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const y of document.querySelectorAll('link[rel="modulepreload"]')) d(y);
  new MutationObserver((y) => {
    for (const w of y)
      if (w.type === "childList")
        for (const j of w.addedNodes)
          j.tagName === "LINK" && j.rel === "modulepreload" && d(j);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(y) {
    const w = {};
    return (
      y.integrity && (w.integrity = y.integrity),
      y.referrerPolicy && (w.referrerPolicy = y.referrerPolicy),
      y.crossOrigin === "use-credentials"
        ? (w.credentials = "include")
        : y.crossOrigin === "anonymous"
          ? (w.credentials = "omit")
          : (w.credentials = "same-origin"),
      w
    );
  }
  function d(y) {
    if (y.ep) return;
    y.ep = !0;
    const w = s(y);
    fetch(y.href, w);
  }
})();
function _c(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default")
    ? o.default
    : o;
}
var y1 = { exports: {} },
  Qr = {},
  C1 = { exports: {} },
  ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Na;
function Ec() {
  if (Na) return ee;
  Na = 1;
  var o = Symbol.for("react.element"),
    a = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    d = Symbol.for("react.strict_mode"),
    y = Symbol.for("react.profiler"),
    w = Symbol.for("react.provider"),
    j = Symbol.for("react.context"),
    N = Symbol.for("react.forward_ref"),
    L = Symbol.for("react.suspense"),
    W = Symbol.for("react.memo"),
    U = Symbol.for("react.lazy"),
    T = Symbol.iterator;
  function O(m) {
    return m === null || typeof m != "object"
      ? null
      : ((m = (T && m[T]) || m["@@iterator"]),
        typeof m == "function" ? m : null);
  }
  var Q = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ne = Object.assign,
    $ = {};
  function Y(m, x, K) {
    (this.props = m),
      (this.context = x),
      (this.refs = $),
      (this.updater = K || Q);
  }
  (Y.prototype.isReactComponent = {}),
    (Y.prototype.setState = function (m, x) {
      if (typeof m != "object" && typeof m != "function" && m != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, m, x, "setState");
    }),
    (Y.prototype.forceUpdate = function (m) {
      this.updater.enqueueForceUpdate(this, m, "forceUpdate");
    });
  function fe() {}
  fe.prototype = Y.prototype;
  function ie(m, x, K) {
    (this.props = m),
      (this.context = x),
      (this.refs = $),
      (this.updater = K || Q);
  }
  var re = (ie.prototype = new fe());
  (re.constructor = ie), ne(re, Y.prototype), (re.isPureReactComponent = !0);
  var q = Array.isArray,
    ae = Object.prototype.hasOwnProperty,
    G = { current: null },
    Z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Me(m, x, K) {
    var X,
      te = {},
      b = null,
      ce = null;
    if (x != null)
      for (X in (x.ref !== void 0 && (ce = x.ref),
      x.key !== void 0 && (b = "" + x.key),
      x))
        ae.call(x, X) && !Z.hasOwnProperty(X) && (te[X] = x[X]);
    var le = arguments.length - 2;
    if (le === 1) te.children = K;
    else if (1 < le) {
      for (var ue = Array(le), Re = 0; Re < le; Re++)
        ue[Re] = arguments[Re + 2];
      te.children = ue;
    }
    if (m && m.defaultProps)
      for (X in ((le = m.defaultProps), le))
        te[X] === void 0 && (te[X] = le[X]);
    return {
      $$typeof: o,
      type: m,
      key: b,
      ref: ce,
      props: te,
      _owner: G.current,
    };
  }
  function qe(m, x) {
    return {
      $$typeof: o,
      type: m.type,
      key: x,
      ref: m.ref,
      props: m.props,
      _owner: m._owner,
    };
  }
  function ht(m) {
    return typeof m == "object" && m !== null && m.$$typeof === o;
  }
  function Pt(m) {
    var x = { "=": "=0", ":": "=2" };
    return (
      "$" +
      m.replace(/[=:]/g, function (K) {
        return x[K];
      })
    );
  }
  var it = /\/+/g;
  function Ue(m, x) {
    return typeof m == "object" && m !== null && m.key != null
      ? Pt("" + m.key)
      : x.toString(36);
  }
  function be(m, x, K, X, te) {
    var b = typeof m;
    (b === "undefined" || b === "boolean") && (m = null);
    var ce = !1;
    if (m === null) ce = !0;
    else
      switch (b) {
        case "string":
        case "number":
          ce = !0;
          break;
        case "object":
          switch (m.$$typeof) {
            case o:
            case a:
              ce = !0;
          }
      }
    if (ce)
      return (
        (ce = m),
        (te = te(ce)),
        (m = X === "" ? "." + Ue(ce, 0) : X),
        q(te)
          ? ((K = ""),
            m != null && (K = m.replace(it, "$&/") + "/"),
            be(te, x, K, "", function (Re) {
              return Re;
            }))
          : te != null &&
            (ht(te) &&
              (te = qe(
                te,
                K +
                  (!te.key || (ce && ce.key === te.key)
                    ? ""
                    : ("" + te.key).replace(it, "$&/") + "/") +
                  m,
              )),
            x.push(te)),
        1
      );
    if (((ce = 0), (X = X === "" ? "." : X + ":"), q(m)))
      for (var le = 0; le < m.length; le++) {
        b = m[le];
        var ue = X + Ue(b, le);
        ce += be(b, x, K, ue, te);
      }
    else if (((ue = O(m)), typeof ue == "function"))
      for (m = ue.call(m), le = 0; !(b = m.next()).done; )
        (b = b.value), (ue = X + Ue(b, le++)), (ce += be(b, x, K, ue, te));
    else if (b === "object")
      throw (
        ((x = String(m)),
        Error(
          "Objects are not valid as a React child (found: " +
            (x === "[object Object]"
              ? "object with keys {" + Object.keys(m).join(", ") + "}"
              : x) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    return ce;
  }
  function ot(m, x, K) {
    if (m == null) return m;
    var X = [],
      te = 0;
    return (
      be(m, X, "", "", function (b) {
        return x.call(K, b, te++);
      }),
      X
    );
  }
  function Te(m) {
    if (m._status === -1) {
      var x = m._result;
      (x = x()),
        x.then(
          function (K) {
            (m._status === 0 || m._status === -1) &&
              ((m._status = 1), (m._result = K));
          },
          function (K) {
            (m._status === 0 || m._status === -1) &&
              ((m._status = 2), (m._result = K));
          },
        ),
        m._status === -1 && ((m._status = 0), (m._result = x));
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var he = { current: null },
    M = { transition: null },
    I = {
      ReactCurrentDispatcher: he,
      ReactCurrentBatchConfig: M,
      ReactCurrentOwner: G,
    };
  function V() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ee.Children = {
      map: ot,
      forEach: function (m, x, K) {
        ot(
          m,
          function () {
            x.apply(this, arguments);
          },
          K,
        );
      },
      count: function (m) {
        var x = 0;
        return (
          ot(m, function () {
            x++;
          }),
          x
        );
      },
      toArray: function (m) {
        return (
          ot(m, function (x) {
            return x;
          }) || []
        );
      },
      only: function (m) {
        if (!ht(m))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return m;
      },
    }),
    (ee.Component = Y),
    (ee.Fragment = s),
    (ee.Profiler = y),
    (ee.PureComponent = ie),
    (ee.StrictMode = d),
    (ee.Suspense = L),
    (ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
    (ee.act = V),
    (ee.cloneElement = function (m, x, K) {
      if (m == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            m +
            ".",
        );
      var X = ne({}, m.props),
        te = m.key,
        b = m.ref,
        ce = m._owner;
      if (x != null) {
        if (
          (x.ref !== void 0 && ((b = x.ref), (ce = G.current)),
          x.key !== void 0 && (te = "" + x.key),
          m.type && m.type.defaultProps)
        )
          var le = m.type.defaultProps;
        for (ue in x)
          ae.call(x, ue) &&
            !Z.hasOwnProperty(ue) &&
            (X[ue] = x[ue] === void 0 && le !== void 0 ? le[ue] : x[ue]);
      }
      var ue = arguments.length - 2;
      if (ue === 1) X.children = K;
      else if (1 < ue) {
        le = Array(ue);
        for (var Re = 0; Re < ue; Re++) le[Re] = arguments[Re + 2];
        X.children = le;
      }
      return {
        $$typeof: o,
        type: m.type,
        key: te,
        ref: b,
        props: X,
        _owner: ce,
      };
    }),
    (ee.createContext = function (m) {
      return (
        (m = {
          $$typeof: j,
          _currentValue: m,
          _currentValue2: m,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (m.Provider = { $$typeof: w, _context: m }),
        (m.Consumer = m)
      );
    }),
    (ee.createElement = Me),
    (ee.createFactory = function (m) {
      var x = Me.bind(null, m);
      return (x.type = m), x;
    }),
    (ee.createRef = function () {
      return { current: null };
    }),
    (ee.forwardRef = function (m) {
      return { $$typeof: N, render: m };
    }),
    (ee.isValidElement = ht),
    (ee.lazy = function (m) {
      return { $$typeof: U, _payload: { _status: -1, _result: m }, _init: Te };
    }),
    (ee.memo = function (m, x) {
      return { $$typeof: W, type: m, compare: x === void 0 ? null : x };
    }),
    (ee.startTransition = function (m) {
      var x = M.transition;
      M.transition = {};
      try {
        m();
      } finally {
        M.transition = x;
      }
    }),
    (ee.unstable_act = V),
    (ee.useCallback = function (m, x) {
      return he.current.useCallback(m, x);
    }),
    (ee.useContext = function (m) {
      return he.current.useContext(m);
    }),
    (ee.useDebugValue = function () {}),
    (ee.useDeferredValue = function (m) {
      return he.current.useDeferredValue(m);
    }),
    (ee.useEffect = function (m, x) {
      return he.current.useEffect(m, x);
    }),
    (ee.useId = function () {
      return he.current.useId();
    }),
    (ee.useImperativeHandle = function (m, x, K) {
      return he.current.useImperativeHandle(m, x, K);
    }),
    (ee.useInsertionEffect = function (m, x) {
      return he.current.useInsertionEffect(m, x);
    }),
    (ee.useLayoutEffect = function (m, x) {
      return he.current.useLayoutEffect(m, x);
    }),
    (ee.useMemo = function (m, x) {
      return he.current.useMemo(m, x);
    }),
    (ee.useReducer = function (m, x, K) {
      return he.current.useReducer(m, x, K);
    }),
    (ee.useRef = function (m) {
      return he.current.useRef(m);
    }),
    (ee.useState = function (m) {
      return he.current.useState(m);
    }),
    (ee.useSyncExternalStore = function (m, x, K) {
      return he.current.useSyncExternalStore(m, x, K);
    }),
    (ee.useTransition = function () {
      return he.current.useTransition();
    }),
    (ee.version = "18.3.1"),
    ee
  );
}
var Ra;
function R1() {
  return Ra || ((Ra = 1), (C1.exports = Ec())), C1.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var za;
function jc() {
  if (za) return Qr;
  za = 1;
  var o = R1(),
    a = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    d = Object.prototype.hasOwnProperty,
    y = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(N, L, W) {
    var U,
      T = {},
      O = null,
      Q = null;
    W !== void 0 && (O = "" + W),
      L.key !== void 0 && (O = "" + L.key),
      L.ref !== void 0 && (Q = L.ref);
    for (U in L) d.call(L, U) && !w.hasOwnProperty(U) && (T[U] = L[U]);
    if (N && N.defaultProps)
      for (U in ((L = N.defaultProps), L)) T[U] === void 0 && (T[U] = L[U]);
    return {
      $$typeof: a,
      type: N,
      key: O,
      ref: Q,
      props: T,
      _owner: y.current,
    };
  }
  return (Qr.Fragment = s), (Qr.jsx = j), (Qr.jsxs = j), Qr;
}
var Ia;
function Mc() {
  return Ia || ((Ia = 1), (y1.exports = jc())), y1.exports;
}
var p = Mc(),
  tr = R1();
const an = _c(tr);
var ii = {},
  w1 = { exports: {} },
  Je = {},
  x1 = { exports: {} },
  k1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ta;
function Lc() {
  return (
    Ta ||
      ((Ta = 1),
      (function (o) {
        function a(M, I) {
          var V = M.length;
          M.push(I);
          e: for (; 0 < V; ) {
            var m = (V - 1) >>> 1,
              x = M[m];
            if (0 < y(x, I)) (M[m] = I), (M[V] = x), (V = m);
            else break e;
          }
        }
        function s(M) {
          return M.length === 0 ? null : M[0];
        }
        function d(M) {
          if (M.length === 0) return null;
          var I = M[0],
            V = M.pop();
          if (V !== I) {
            M[0] = V;
            e: for (var m = 0, x = M.length, K = x >>> 1; m < K; ) {
              var X = 2 * (m + 1) - 1,
                te = M[X],
                b = X + 1,
                ce = M[b];
              if (0 > y(te, V))
                b < x && 0 > y(ce, te)
                  ? ((M[m] = ce), (M[b] = V), (m = b))
                  : ((M[m] = te), (M[X] = V), (m = X));
              else if (b < x && 0 > y(ce, V)) (M[m] = ce), (M[b] = V), (m = b);
              else break e;
            }
          }
          return I;
        }
        function y(M, I) {
          var V = M.sortIndex - I.sortIndex;
          return V !== 0 ? V : M.id - I.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var w = performance;
          o.unstable_now = function () {
            return w.now();
          };
        } else {
          var j = Date,
            N = j.now();
          o.unstable_now = function () {
            return j.now() - N;
          };
        }
        var L = [],
          W = [],
          U = 1,
          T = null,
          O = 3,
          Q = !1,
          ne = !1,
          $ = !1,
          Y = typeof setTimeout == "function" ? setTimeout : null,
          fe = typeof clearTimeout == "function" ? clearTimeout : null,
          ie = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function re(M) {
          for (var I = s(W); I !== null; ) {
            if (I.callback === null) d(W);
            else if (I.startTime <= M)
              d(W), (I.sortIndex = I.expirationTime), a(L, I);
            else break;
            I = s(W);
          }
        }
        function q(M) {
          if ((($ = !1), re(M), !ne))
            if (s(L) !== null) (ne = !0), Te(ae);
            else {
              var I = s(W);
              I !== null && he(q, I.startTime - M);
            }
        }
        function ae(M, I) {
          (ne = !1), $ && (($ = !1), fe(Me), (Me = -1)), (Q = !0);
          var V = O;
          try {
            for (
              re(I), T = s(L);
              T !== null && (!(T.expirationTime > I) || (M && !Pt()));

            ) {
              var m = T.callback;
              if (typeof m == "function") {
                (T.callback = null), (O = T.priorityLevel);
                var x = m(T.expirationTime <= I);
                (I = o.unstable_now()),
                  typeof x == "function"
                    ? (T.callback = x)
                    : T === s(L) && d(L),
                  re(I);
              } else d(L);
              T = s(L);
            }
            if (T !== null) var K = !0;
            else {
              var X = s(W);
              X !== null && he(q, X.startTime - I), (K = !1);
            }
            return K;
          } finally {
            (T = null), (O = V), (Q = !1);
          }
        }
        var G = !1,
          Z = null,
          Me = -1,
          qe = 5,
          ht = -1;
        function Pt() {
          return !(o.unstable_now() - ht < qe);
        }
        function it() {
          if (Z !== null) {
            var M = o.unstable_now();
            ht = M;
            var I = !0;
            try {
              I = Z(!0, M);
            } finally {
              I ? Ue() : ((G = !1), (Z = null));
            }
          } else G = !1;
        }
        var Ue;
        if (typeof ie == "function")
          Ue = function () {
            ie(it);
          };
        else if (typeof MessageChannel < "u") {
          var be = new MessageChannel(),
            ot = be.port2;
          (be.port1.onmessage = it),
            (Ue = function () {
              ot.postMessage(null);
            });
        } else
          Ue = function () {
            Y(it, 0);
          };
        function Te(M) {
          (Z = M), G || ((G = !0), Ue());
        }
        function he(M, I) {
          Me = Y(function () {
            M(o.unstable_now());
          }, I);
        }
        (o.unstable_IdlePriority = 5),
          (o.unstable_ImmediatePriority = 1),
          (o.unstable_LowPriority = 4),
          (o.unstable_NormalPriority = 3),
          (o.unstable_Profiling = null),
          (o.unstable_UserBlockingPriority = 2),
          (o.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (o.unstable_continueExecution = function () {
            ne || Q || ((ne = !0), Te(ae));
          }),
          (o.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (qe = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (o.unstable_getCurrentPriorityLevel = function () {
            return O;
          }),
          (o.unstable_getFirstCallbackNode = function () {
            return s(L);
          }),
          (o.unstable_next = function (M) {
            switch (O) {
              case 1:
              case 2:
              case 3:
                var I = 3;
                break;
              default:
                I = O;
            }
            var V = O;
            O = I;
            try {
              return M();
            } finally {
              O = V;
            }
          }),
          (o.unstable_pauseExecution = function () {}),
          (o.unstable_requestPaint = function () {}),
          (o.unstable_runWithPriority = function (M, I) {
            switch (M) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                M = 3;
            }
            var V = O;
            O = M;
            try {
              return I();
            } finally {
              O = V;
            }
          }),
          (o.unstable_scheduleCallback = function (M, I, V) {
            var m = o.unstable_now();
            switch (
              (typeof V == "object" && V !== null
                ? ((V = V.delay),
                  (V = typeof V == "number" && 0 < V ? m + V : m))
                : (V = m),
              M)
            ) {
              case 1:
                var x = -1;
                break;
              case 2:
                x = 250;
                break;
              case 5:
                x = 1073741823;
                break;
              case 4:
                x = 1e4;
                break;
              default:
                x = 5e3;
            }
            return (
              (x = V + x),
              (M = {
                id: U++,
                callback: I,
                priorityLevel: M,
                startTime: V,
                expirationTime: x,
                sortIndex: -1,
              }),
              V > m
                ? ((M.sortIndex = V),
                  a(W, M),
                  s(L) === null &&
                    M === s(W) &&
                    ($ ? (fe(Me), (Me = -1)) : ($ = !0), he(q, V - m)))
                : ((M.sortIndex = x), a(L, M), ne || Q || ((ne = !0), Te(ae))),
              M
            );
          }),
          (o.unstable_shouldYield = Pt),
          (o.unstable_wrapCallback = function (M) {
            var I = O;
            return function () {
              var V = O;
              O = I;
              try {
                return M.apply(this, arguments);
              } finally {
                O = V;
              }
            };
          });
      })(k1)),
    k1
  );
}
var Oa;
function Vc() {
  return Oa || ((Oa = 1), (x1.exports = Lc())), x1.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Da;
function Hc() {
  if (Da) return Je;
  Da = 1;
  var o = R1(),
    a = Vc();
  function s(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var d = new Set(),
    y = {};
  function w(e, t) {
    j(e, t), j(e + "Capture", t);
  }
  function j(e, t) {
    for (y[e] = t, e = 0; e < t.length; e++) d.add(t[e]);
  }
  var N = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    L = Object.prototype.hasOwnProperty,
    W =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    U = {},
    T = {};
  function O(e) {
    return L.call(T, e)
      ? !0
      : L.call(U, e)
        ? !1
        : W.test(e)
          ? (T[e] = !0)
          : ((U[e] = !0), !1);
  }
  function Q(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function ne(e, t, n, r) {
    if (t === null || typeof t > "u" || Q(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function $(e, t, n, r, l, i, u) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = u);
  }
  var Y = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      Y[e] = new $(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      Y[t] = new $(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        Y[e] = new $(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      Y[e] = new $(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        Y[e] = new $(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      Y[e] = new $(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      Y[e] = new $(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      Y[e] = new $(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      Y[e] = new $(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var fe = /[\-:]([a-z])/g;
  function ie(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(fe, ie);
      Y[t] = new $(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(fe, ie);
        Y[t] = new $(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(fe, ie);
      Y[t] = new $(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      Y[e] = new $(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Y.xlinkHref = new $(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      Y[e] = new $(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function re(e, t, n, r) {
    var l = Y.hasOwnProperty(t) ? Y[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (ne(t, n, l, r) && (n = null),
      r || l === null
        ? O(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var q = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ae = Symbol.for("react.element"),
    G = Symbol.for("react.portal"),
    Z = Symbol.for("react.fragment"),
    Me = Symbol.for("react.strict_mode"),
    qe = Symbol.for("react.profiler"),
    ht = Symbol.for("react.provider"),
    Pt = Symbol.for("react.context"),
    it = Symbol.for("react.forward_ref"),
    Ue = Symbol.for("react.suspense"),
    be = Symbol.for("react.suspense_list"),
    ot = Symbol.for("react.memo"),
    Te = Symbol.for("react.lazy"),
    he = Symbol.for("react.offscreen"),
    M = Symbol.iterator;
  function I(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (M && e[M]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var V = Object.assign,
    m;
  function x(e) {
    if (m === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        m = (t && t[1]) || "";
      }
    return (
      `
` +
      m +
      e
    );
  }
  var K = !1;
  function X(e, t) {
    if (!e || K) return "";
    K = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (C) {
            var r = C;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (C) {
            r = C;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (C) {
          r = C;
        }
        e();
      }
    } catch (C) {
      if (C && r && typeof C.stack == "string") {
        for (
          var l = C.stack.split(`
`),
            i = r.stack.split(`
`),
            u = l.length - 1,
            c = i.length - 1;
          1 <= u && 0 <= c && l[u] !== i[c];

        )
          c--;
        for (; 1 <= u && 0 <= c; u--, c--)
          if (l[u] !== i[c]) {
            if (u !== 1 || c !== 1)
              do
                if ((u--, c--, 0 > c || l[u] !== i[c])) {
                  var f =
                    `
` + l[u].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      f.includes("<anonymous>") &&
                      (f = f.replace("<anonymous>", e.displayName)),
                    f
                  );
                }
              while (1 <= u && 0 <= c);
            break;
          }
      }
    } finally {
      (K = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? x(e) : "";
  }
  function te(e) {
    switch (e.tag) {
      case 5:
        return x(e.type);
      case 16:
        return x("Lazy");
      case 13:
        return x("Suspense");
      case 19:
        return x("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = X(e.type, !1)), e;
      case 11:
        return (e = X(e.type.render, !1)), e;
      case 1:
        return (e = X(e.type, !0)), e;
      default:
        return "";
    }
  }
  function b(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Z:
        return "Fragment";
      case G:
        return "Portal";
      case qe:
        return "Profiler";
      case Me:
        return "StrictMode";
      case Ue:
        return "Suspense";
      case be:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Pt:
          return (e.displayName || "Context") + ".Consumer";
        case ht:
          return (e._context.displayName || "Context") + ".Provider";
        case it:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ot:
          return (
            (t = e.displayName || null), t !== null ? t : b(e.type) || "Memo"
          );
        case Te:
          (t = e._payload), (e = e._init);
          try {
            return b(e(t));
          } catch {}
      }
    return null;
  }
  function ce(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return b(t);
      case 8:
        return t === Me ? "StrictMode" : "Mode";
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
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function le(e) {
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
  function ue(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Re(e) {
    var t = ue(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (u) {
            (r = "" + u), i.call(this, u);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (u) {
            r = "" + u;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Ft(e) {
    e._valueTracker || (e._valueTracker = Re(e));
  }
  function mt(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = ue(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Xr(e) {
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
  function _i(e, t) {
    var n = t.checked;
    return V({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function A1(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = le(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Z1(e, t) {
    (t = t.checked), t != null && re(e, "checked", t, !1);
  }
  function Ei(e, t) {
    Z1(e, t);
    var n = le(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? ji(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && ji(e, t.type, le(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function B1(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function ji(e, t, n) {
    (t !== "number" || Xr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var ur = Array.isArray;
  function Ln(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + le(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Mi(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return V({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function U1(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(s(92));
        if (ur(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: le(n) };
  }
  function $1(e, t) {
    var n = le(t.value),
      r = le(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function W1(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Q1(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Li(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Q1(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Jr,
    G1 = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Jr = Jr || document.createElement("div"),
            Jr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Jr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function sr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var ar = {
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
    L0 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ar).forEach(function (e) {
    L0.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ar[t] = ar[e]);
    });
  });
  function K1(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (ar.hasOwnProperty(e) && ar[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Y1(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = K1(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var V0 = V(
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
  function Vi(e, t) {
    if (t) {
      if (V0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function Hi(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
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
  var Pi = null;
  function Fi(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ni = null,
    Vn = null,
    Hn = null;
  function X1(e) {
    if ((e = Pr(e))) {
      if (typeof Ni != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = wl(t)), Ni(e.stateNode, e.type, t));
    }
  }
  function J1(e) {
    Vn ? (Hn ? Hn.push(e) : (Hn = [e])) : (Vn = e);
  }
  function q1() {
    if (Vn) {
      var e = Vn,
        t = Hn;
      if (((Hn = Vn = null), X1(e), t)) for (e = 0; e < t.length; e++) X1(t[e]);
    }
  }
  function b1(e, t) {
    return e(t);
  }
  function eu() {}
  var Ri = !1;
  function tu(e, t, n) {
    if (Ri) return e(t, n);
    Ri = !0;
    try {
      return b1(e, t, n);
    } finally {
      (Ri = !1), (Vn !== null || Hn !== null) && (eu(), q1());
    }
  }
  function cr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = wl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
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
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var zi = !1;
  if (N)
    try {
      var fr = {};
      Object.defineProperty(fr, "passive", {
        get: function () {
          zi = !0;
        },
      }),
        window.addEventListener("test", fr, fr),
        window.removeEventListener("test", fr, fr);
    } catch {
      zi = !1;
    }
  function H0(e, t, n, r, l, i, u, c, f) {
    var C = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, C);
    } catch (S) {
      this.onError(S);
    }
  }
  var dr = !1,
    qr = null,
    br = !1,
    Ii = null,
    P0 = {
      onError: function (e) {
        (dr = !0), (qr = e);
      },
    };
  function F0(e, t, n, r, l, i, u, c, f) {
    (dr = !1), (qr = null), H0.apply(P0, arguments);
  }
  function N0(e, t, n, r, l, i, u, c, f) {
    if ((F0.apply(this, arguments), dr)) {
      if (dr) {
        var C = qr;
        (dr = !1), (qr = null);
      } else throw Error(s(198));
      br || ((br = !0), (Ii = C));
    }
  }
  function cn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function nu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function ru(e) {
    if (cn(e) !== e) throw Error(s(188));
  }
  function R0(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = cn(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return ru(l), e;
          if (i === r) return ru(l), t;
          i = i.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return) (n = l), (r = i);
      else {
        for (var u = !1, c = l.child; c; ) {
          if (c === n) {
            (u = !0), (n = l), (r = i);
            break;
          }
          if (c === r) {
            (u = !0), (r = l), (n = i);
            break;
          }
          c = c.sibling;
        }
        if (!u) {
          for (c = i.child; c; ) {
            if (c === n) {
              (u = !0), (n = i), (r = l);
              break;
            }
            if (c === r) {
              (u = !0), (r = i), (n = l);
              break;
            }
            c = c.sibling;
          }
          if (!u) throw Error(s(189));
        }
      }
      if (n.alternate !== r) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function lu(e) {
    return (e = R0(e)), e !== null ? iu(e) : null;
  }
  function iu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = iu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ou = a.unstable_scheduleCallback,
    uu = a.unstable_cancelCallback,
    z0 = a.unstable_shouldYield,
    I0 = a.unstable_requestPaint,
    Se = a.unstable_now,
    T0 = a.unstable_getCurrentPriorityLevel,
    Ti = a.unstable_ImmediatePriority,
    su = a.unstable_UserBlockingPriority,
    el = a.unstable_NormalPriority,
    O0 = a.unstable_LowPriority,
    au = a.unstable_IdlePriority,
    tl = null,
    Et = null;
  function D0(e) {
    if (Et && typeof Et.onCommitFiberRoot == "function")
      try {
        Et.onCommitFiberRoot(tl, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var vt = Math.clz32 ? Math.clz32 : B0,
    A0 = Math.log,
    Z0 = Math.LN2;
  function B0(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((A0(e) / Z0) | 0)) | 0;
  }
  var nl = 64,
    rl = 4194304;
  function pr(e) {
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
  function ll(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      u = n & 268435455;
    if (u !== 0) {
      var c = u & ~l;
      c !== 0 ? (r = pr(c)) : ((i &= u), i !== 0 && (r = pr(i)));
    } else (u = n & ~l), u !== 0 ? (r = pr(u)) : i !== 0 && (r = pr(i));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - vt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function U0(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
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
        return t + 5e3;
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
  function $0(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;

    ) {
      var u = 31 - vt(i),
        c = 1 << u,
        f = l[u];
      f === -1
        ? ((c & n) === 0 || (c & r) !== 0) && (l[u] = U0(c, t))
        : f <= t && (e.expiredLanes |= c),
        (i &= ~c);
    }
  }
  function Oi(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function cu() {
    var e = nl;
    return (nl <<= 1), (nl & 4194240) === 0 && (nl = 64), e;
  }
  function Di(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function hr(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - vt(t)),
      (e[t] = n);
  }
  function W0(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - vt(n),
        i = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
    }
  }
  function Ai(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - vt(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var pe = 0;
  function fu(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var du,
    Zi,
    pu,
    hu,
    mu,
    Bi = !1,
    il = [],
    Bt = null,
    Ut = null,
    $t = null,
    mr = new Map(),
    vr = new Map(),
    Wt = [],
    Q0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function vu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Bt = null;
        break;
      case "dragenter":
      case "dragleave":
        Ut = null;
        break;
      case "mouseover":
      case "mouseout":
        $t = null;
        break;
      case "pointerover":
      case "pointerout":
        mr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        vr.delete(t.pointerId);
    }
  }
  function gr(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = Pr(t)), t !== null && Zi(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function G0(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (Bt = gr(Bt, e, t, n, r, l)), !0;
      case "dragenter":
        return (Ut = gr(Ut, e, t, n, r, l)), !0;
      case "mouseover":
        return ($t = gr($t, e, t, n, r, l)), !0;
      case "pointerover":
        var i = l.pointerId;
        return mr.set(i, gr(mr.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (i = l.pointerId), vr.set(i, gr(vr.get(i) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function gu(e) {
    var t = fn(e.target);
    if (t !== null) {
      var n = cn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = nu(n)), t !== null)) {
            (e.blockedOn = t),
              mu(e.priority, function () {
                pu(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ol(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = $i(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Pi = r), n.target.dispatchEvent(r), (Pi = null);
      } else return (t = Pr(n)), t !== null && Zi(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function yu(e, t, n) {
    ol(e) && n.delete(t);
  }
  function K0() {
    (Bi = !1),
      Bt !== null && ol(Bt) && (Bt = null),
      Ut !== null && ol(Ut) && (Ut = null),
      $t !== null && ol($t) && ($t = null),
      mr.forEach(yu),
      vr.forEach(yu);
  }
  function yr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Bi ||
        ((Bi = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, K0)));
  }
  function Cr(e) {
    function t(l) {
      return yr(l, e);
    }
    if (0 < il.length) {
      yr(il[0], e);
      for (var n = 1; n < il.length; n++) {
        var r = il[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Bt !== null && yr(Bt, e),
        Ut !== null && yr(Ut, e),
        $t !== null && yr($t, e),
        mr.forEach(t),
        vr.forEach(t),
        n = 0;
      n < Wt.length;
      n++
    )
      (r = Wt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Wt.length && ((n = Wt[0]), n.blockedOn === null); )
      gu(n), n.blockedOn === null && Wt.shift();
  }
  var Pn = q.ReactCurrentBatchConfig,
    ul = !0;
  function Y0(e, t, n, r) {
    var l = pe,
      i = Pn.transition;
    Pn.transition = null;
    try {
      (pe = 1), Ui(e, t, n, r);
    } finally {
      (pe = l), (Pn.transition = i);
    }
  }
  function X0(e, t, n, r) {
    var l = pe,
      i = Pn.transition;
    Pn.transition = null;
    try {
      (pe = 4), Ui(e, t, n, r);
    } finally {
      (pe = l), (Pn.transition = i);
    }
  }
  function Ui(e, t, n, r) {
    if (ul) {
      var l = $i(e, t, n, r);
      if (l === null) uo(e, t, r, sl, n), vu(e, r);
      else if (G0(l, e, t, n, r)) r.stopPropagation();
      else if ((vu(e, r), t & 4 && -1 < Q0.indexOf(e))) {
        for (; l !== null; ) {
          var i = Pr(l);
          if (
            (i !== null && du(i),
            (i = $i(e, t, n, r)),
            i === null && uo(e, t, r, sl, n),
            i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else uo(e, t, r, null, n);
    }
  }
  var sl = null;
  function $i(e, t, n, r) {
    if (((sl = null), (e = Fi(r)), (e = fn(e)), e !== null))
      if (((t = cn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = nu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (sl = e), null;
  }
  function Cu(e) {
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
        switch (T0()) {
          case Ti:
            return 1;
          case su:
            return 4;
          case el:
          case O0:
            return 16;
          case au:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Qt = null,
    Wi = null,
    al = null;
  function wu() {
    if (al) return al;
    var e,
      t = Wi,
      n = t.length,
      r,
      l = "value" in Qt ? Qt.value : Qt.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[i - r]; r++);
    return (al = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function cl(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function fl() {
    return !0;
  }
  function xu() {
    return !1;
  }
  function et(e) {
    function t(n, r, l, i, u) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = u),
        (this.currentTarget = null);
      for (var c in e)
        e.hasOwnProperty(c) && ((n = e[c]), (this[c] = n ? n(i) : i[c]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? fl
          : xu),
        (this.isPropagationStopped = xu),
        this
      );
    }
    return (
      V(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = fl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = fl));
        },
        persist: function () {},
        isPersistent: fl,
      }),
      t
    );
  }
  var Fn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Qi = et(Fn),
    wr = V({}, Fn, { view: 0, detail: 0 }),
    J0 = et(wr),
    Gi,
    Ki,
    xr,
    dl = V({}, wr, {
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
      getModifierState: Xi,
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
          : (e !== xr &&
              (xr && e.type === "mousemove"
                ? ((Gi = e.screenX - xr.screenX), (Ki = e.screenY - xr.screenY))
                : (Ki = Gi = 0),
              (xr = e)),
            Gi);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ki;
      },
    }),
    ku = et(dl),
    q0 = V({}, dl, { dataTransfer: 0 }),
    b0 = et(q0),
    e2 = V({}, wr, { relatedTarget: 0 }),
    Yi = et(e2),
    t2 = V({}, Fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    n2 = et(t2),
    r2 = V({}, Fn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    l2 = et(r2),
    i2 = V({}, Fn, { data: 0 }),
    Su = et(i2),
    o2 = {
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
    u2 = {
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
    s2 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function a2(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = s2[e])
        ? !!t[e]
        : !1;
  }
  function Xi() {
    return a2;
  }
  var c2 = V({}, wr, {
      key: function (e) {
        if (e.key) {
          var t = o2[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = cl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? u2[e.keyCode] || "Unidentified"
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
      getModifierState: Xi,
      charCode: function (e) {
        return e.type === "keypress" ? cl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? cl(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    f2 = et(c2),
    d2 = V({}, dl, {
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
    _u = et(d2),
    p2 = V({}, wr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Xi,
    }),
    h2 = et(p2),
    m2 = V({}, Fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    v2 = et(m2),
    g2 = V({}, dl, {
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
    y2 = et(g2),
    C2 = [9, 13, 27, 32],
    Ji = N && "CompositionEvent" in window,
    kr = null;
  N && "documentMode" in document && (kr = document.documentMode);
  var w2 = N && "TextEvent" in window && !kr,
    Eu = N && (!Ji || (kr && 8 < kr && 11 >= kr)),
    ju = " ",
    Mu = !1;
  function Lu(e, t) {
    switch (e) {
      case "keyup":
        return C2.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Vu(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Nn = !1;
  function x2(e, t) {
    switch (e) {
      case "compositionend":
        return Vu(t);
      case "keypress":
        return t.which !== 32 ? null : ((Mu = !0), ju);
      case "textInput":
        return (e = t.data), e === ju && Mu ? null : e;
      default:
        return null;
    }
  }
  function k2(e, t) {
    if (Nn)
      return e === "compositionend" || (!Ji && Lu(e, t))
        ? ((e = wu()), (al = Wi = Qt = null), (Nn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Eu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var S2 = {
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
  function Hu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!S2[e.type] : t === "textarea";
  }
  function Pu(e, t, n, r) {
    J1(r),
      (t = gl(t, "onChange")),
      0 < t.length &&
        ((n = new Qi("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var Sr = null,
    _r = null;
  function _2(e) {
    Yu(e, 0);
  }
  function pl(e) {
    var t = On(e);
    if (mt(t)) return e;
  }
  function E2(e, t) {
    if (e === "change") return t;
  }
  var Fu = !1;
  if (N) {
    var qi;
    if (N) {
      var bi = "oninput" in document;
      if (!bi) {
        var Nu = document.createElement("div");
        Nu.setAttribute("oninput", "return;"),
          (bi = typeof Nu.oninput == "function");
      }
      qi = bi;
    } else qi = !1;
    Fu = qi && (!document.documentMode || 9 < document.documentMode);
  }
  function Ru() {
    Sr && (Sr.detachEvent("onpropertychange", zu), (_r = Sr = null));
  }
  function zu(e) {
    if (e.propertyName === "value" && pl(_r)) {
      var t = [];
      Pu(t, _r, e, Fi(e)), tu(_2, t);
    }
  }
  function j2(e, t, n) {
    e === "focusin"
      ? (Ru(), (Sr = t), (_r = n), Sr.attachEvent("onpropertychange", zu))
      : e === "focusout" && Ru();
  }
  function M2(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return pl(_r);
  }
  function L2(e, t) {
    if (e === "click") return pl(t);
  }
  function V2(e, t) {
    if (e === "input" || e === "change") return pl(t);
  }
  function H2(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var gt = typeof Object.is == "function" ? Object.is : H2;
  function Er(e, t) {
    if (gt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!L.call(t, l) || !gt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Iu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Tu(e, t) {
    var n = Iu(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Iu(n);
    }
  }
  function Ou(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Ou(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Du() {
    for (var e = window, t = Xr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Xr(e.document);
    }
    return t;
  }
  function eo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function P2(e) {
    var t = Du(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Ou(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && eo(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            i = Math.min(r.start, l);
          (r = r.end === void 0 ? i : Math.min(r.end, l)),
            !e.extend && i > r && ((l = r), (r = i), (i = l)),
            (l = Tu(n, i));
          var u = Tu(n, r);
          l &&
            u &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== u.node ||
              e.focusOffset !== u.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(u.node, u.offset))
              : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var F2 = N && "documentMode" in document && 11 >= document.documentMode,
    Rn = null,
    to = null,
    jr = null,
    no = !1;
  function Au(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    no ||
      Rn == null ||
      Rn !== Xr(r) ||
      ((r = Rn),
      "selectionStart" in r && eo(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (jr && Er(jr, r)) ||
        ((jr = r),
        (r = gl(to, "onSelect")),
        0 < r.length &&
          ((t = new Qi("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Rn))));
  }
  function hl(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var zn = {
      animationend: hl("Animation", "AnimationEnd"),
      animationiteration: hl("Animation", "AnimationIteration"),
      animationstart: hl("Animation", "AnimationStart"),
      transitionend: hl("Transition", "TransitionEnd"),
    },
    ro = {},
    Zu = {};
  N &&
    ((Zu = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete zn.animationend.animation,
      delete zn.animationiteration.animation,
      delete zn.animationstart.animation),
    "TransitionEvent" in window || delete zn.transitionend.transition);
  function ml(e) {
    if (ro[e]) return ro[e];
    if (!zn[e]) return e;
    var t = zn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Zu) return (ro[e] = t[n]);
    return e;
  }
  var Bu = ml("animationend"),
    Uu = ml("animationiteration"),
    $u = ml("animationstart"),
    Wu = ml("transitionend"),
    Qu = new Map(),
    Gu =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Gt(e, t) {
    Qu.set(e, t), w(t, [e]);
  }
  for (var lo = 0; lo < Gu.length; lo++) {
    var io = Gu[lo],
      N2 = io.toLowerCase(),
      R2 = io[0].toUpperCase() + io.slice(1);
    Gt(N2, "on" + R2);
  }
  Gt(Bu, "onAnimationEnd"),
    Gt(Uu, "onAnimationIteration"),
    Gt($u, "onAnimationStart"),
    Gt("dblclick", "onDoubleClick"),
    Gt("focusin", "onFocus"),
    Gt("focusout", "onBlur"),
    Gt(Wu, "onTransitionEnd"),
    j("onMouseEnter", ["mouseout", "mouseover"]),
    j("onMouseLeave", ["mouseout", "mouseover"]),
    j("onPointerEnter", ["pointerout", "pointerover"]),
    j("onPointerLeave", ["pointerout", "pointerover"]),
    w(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    w(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    w("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    w(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    w(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    w(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var Mr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    z2 = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Mr),
    );
  function Ku(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), N0(r, t, void 0, e), (e.currentTarget = null);
  }
  function Yu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var u = r.length - 1; 0 <= u; u--) {
            var c = r[u],
              f = c.instance,
              C = c.currentTarget;
            if (((c = c.listener), f !== i && l.isPropagationStopped()))
              break e;
            Ku(l, c, C), (i = f);
          }
        else
          for (u = 0; u < r.length; u++) {
            if (
              ((c = r[u]),
              (f = c.instance),
              (C = c.currentTarget),
              (c = c.listener),
              f !== i && l.isPropagationStopped())
            )
              break e;
            Ku(l, c, C), (i = f);
          }
      }
    }
    if (br) throw ((e = Ii), (br = !1), (Ii = null), e);
  }
  function ve(e, t) {
    var n = t[ho];
    n === void 0 && (n = t[ho] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Xu(t, e, 2, !1), n.add(r));
  }
  function oo(e, t, n) {
    var r = 0;
    t && (r |= 4), Xu(n, e, r, t);
  }
  var vl = "_reactListening" + Math.random().toString(36).slice(2);
  function Lr(e) {
    if (!e[vl]) {
      (e[vl] = !0),
        d.forEach(function (n) {
          n !== "selectionchange" && (z2.has(n) || oo(n, !1, e), oo(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[vl] || ((t[vl] = !0), oo("selectionchange", !1, t));
    }
  }
  function Xu(e, t, n, r) {
    switch (Cu(t)) {
      case 1:
        var l = Y0;
        break;
      case 4:
        l = X0;
        break;
      default:
        l = Ui;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !zi ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1);
  }
  function uo(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var c = r.stateNode.containerInfo;
          if (c === l || (c.nodeType === 8 && c.parentNode === l)) break;
          if (u === 4)
            for (u = r.return; u !== null; ) {
              var f = u.tag;
              if (
                (f === 3 || f === 4) &&
                ((f = u.stateNode.containerInfo),
                f === l || (f.nodeType === 8 && f.parentNode === l))
              )
                return;
              u = u.return;
            }
          for (; c !== null; ) {
            if (((u = fn(c)), u === null)) return;
            if (((f = u.tag), f === 5 || f === 6)) {
              r = i = u;
              continue e;
            }
            c = c.parentNode;
          }
        }
        r = r.return;
      }
    tu(function () {
      var C = i,
        S = Fi(n),
        _ = [];
      e: {
        var k = Qu.get(e);
        if (k !== void 0) {
          var H = Qi,
            F = e;
          switch (e) {
            case "keypress":
              if (cl(n) === 0) break e;
            case "keydown":
            case "keyup":
              H = f2;
              break;
            case "focusin":
              (F = "focus"), (H = Yi);
              break;
            case "focusout":
              (F = "blur"), (H = Yi);
              break;
            case "beforeblur":
            case "afterblur":
              H = Yi;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = ku;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = b0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = h2;
              break;
            case Bu:
            case Uu:
            case $u:
              H = n2;
              break;
            case Wu:
              H = v2;
              break;
            case "scroll":
              H = J0;
              break;
            case "wheel":
              H = y2;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = l2;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = _u;
          }
          var R = (t & 4) !== 0,
            _e = !R && e === "scroll",
            v = R ? (k !== null ? k + "Capture" : null) : k;
          R = [];
          for (var h = C, g; h !== null; ) {
            g = h;
            var E = g.stateNode;
            if (
              (g.tag === 5 &&
                E !== null &&
                ((g = E),
                v !== null &&
                  ((E = cr(h, v)), E != null && R.push(Vr(h, E, g)))),
              _e)
            )
              break;
            h = h.return;
          }
          0 < R.length &&
            ((k = new H(k, F, null, n, S)), _.push({ event: k, listeners: R }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((k = e === "mouseover" || e === "pointerover"),
            (H = e === "mouseout" || e === "pointerout"),
            k &&
              n !== Pi &&
              (F = n.relatedTarget || n.fromElement) &&
              (fn(F) || F[Nt]))
          )
            break e;
          if (
            (H || k) &&
            ((k =
              S.window === S
                ? S
                : (k = S.ownerDocument)
                  ? k.defaultView || k.parentWindow
                  : window),
            H
              ? ((F = n.relatedTarget || n.toElement),
                (H = C),
                (F = F ? fn(F) : null),
                F !== null &&
                  ((_e = cn(F)), F !== _e || (F.tag !== 5 && F.tag !== 6)) &&
                  (F = null))
              : ((H = null), (F = C)),
            H !== F)
          ) {
            if (
              ((R = ku),
              (E = "onMouseLeave"),
              (v = "onMouseEnter"),
              (h = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((R = _u),
                (E = "onPointerLeave"),
                (v = "onPointerEnter"),
                (h = "pointer")),
              (_e = H == null ? k : On(H)),
              (g = F == null ? k : On(F)),
              (k = new R(E, h + "leave", H, n, S)),
              (k.target = _e),
              (k.relatedTarget = g),
              (E = null),
              fn(S) === C &&
                ((R = new R(v, h + "enter", F, n, S)),
                (R.target = g),
                (R.relatedTarget = _e),
                (E = R)),
              (_e = E),
              H && F)
            )
              t: {
                for (R = H, v = F, h = 0, g = R; g; g = In(g)) h++;
                for (g = 0, E = v; E; E = In(E)) g++;
                for (; 0 < h - g; ) (R = In(R)), h--;
                for (; 0 < g - h; ) (v = In(v)), g--;
                for (; h--; ) {
                  if (R === v || (v !== null && R === v.alternate)) break t;
                  (R = In(R)), (v = In(v));
                }
                R = null;
              }
            else R = null;
            H !== null && Ju(_, k, H, R, !1),
              F !== null && _e !== null && Ju(_, _e, F, R, !0);
          }
        }
        e: {
          if (
            ((k = C ? On(C) : window),
            (H = k.nodeName && k.nodeName.toLowerCase()),
            H === "select" || (H === "input" && k.type === "file"))
          )
            var z = E2;
          else if (Hu(k))
            if (Fu) z = V2;
            else {
              z = M2;
              var D = j2;
            }
          else
            (H = k.nodeName) &&
              H.toLowerCase() === "input" &&
              (k.type === "checkbox" || k.type === "radio") &&
              (z = L2);
          if (z && (z = z(e, C))) {
            Pu(_, z, n, S);
            break e;
          }
          D && D(e, k, C),
            e === "focusout" &&
              (D = k._wrapperState) &&
              D.controlled &&
              k.type === "number" &&
              ji(k, "number", k.value);
        }
        switch (((D = C ? On(C) : window), e)) {
          case "focusin":
            (Hu(D) || D.contentEditable === "true") &&
              ((Rn = D), (to = C), (jr = null));
            break;
          case "focusout":
            jr = to = Rn = null;
            break;
          case "mousedown":
            no = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (no = !1), Au(_, n, S);
            break;
          case "selectionchange":
            if (F2) break;
          case "keydown":
          case "keyup":
            Au(_, n, S);
        }
        var A;
        if (Ji)
          e: {
            switch (e) {
              case "compositionstart":
                var B = "onCompositionStart";
                break e;
              case "compositionend":
                B = "onCompositionEnd";
                break e;
              case "compositionupdate":
                B = "onCompositionUpdate";
                break e;
            }
            B = void 0;
          }
        else
          Nn
            ? Lu(e, n) && (B = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (B = "onCompositionStart");
        B &&
          (Eu &&
            n.locale !== "ko" &&
            (Nn || B !== "onCompositionStart"
              ? B === "onCompositionEnd" && Nn && (A = wu())
              : ((Qt = S),
                (Wi = "value" in Qt ? Qt.value : Qt.textContent),
                (Nn = !0))),
          (D = gl(C, B)),
          0 < D.length &&
            ((B = new Su(B, e, null, n, S)),
            _.push({ event: B, listeners: D }),
            A ? (B.data = A) : ((A = Vu(n)), A !== null && (B.data = A)))),
          (A = w2 ? x2(e, n) : k2(e, n)) &&
            ((C = gl(C, "onBeforeInput")),
            0 < C.length &&
              ((S = new Su("onBeforeInput", "beforeinput", null, n, S)),
              _.push({ event: S, listeners: C }),
              (S.data = A)));
      }
      Yu(_, t);
    });
  }
  function Vr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function gl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        i = l.stateNode;
      l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = cr(e, n)),
        i != null && r.unshift(Vr(e, i, l)),
        (i = cr(e, t)),
        i != null && r.push(Vr(e, i, l))),
        (e = e.return);
    }
    return r;
  }
  function In(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ju(e, t, n, r, l) {
    for (var i = t._reactName, u = []; n !== null && n !== r; ) {
      var c = n,
        f = c.alternate,
        C = c.stateNode;
      if (f !== null && f === r) break;
      c.tag === 5 &&
        C !== null &&
        ((c = C),
        l
          ? ((f = cr(n, i)), f != null && u.unshift(Vr(n, f, c)))
          : l || ((f = cr(n, i)), f != null && u.push(Vr(n, f, c)))),
        (n = n.return);
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var I2 = /\r\n?/g,
    T2 = /\u0000|\uFFFD/g;
  function qu(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        I2,
        `
`,
      )
      .replace(T2, "");
  }
  function yl(e, t, n) {
    if (((t = qu(t)), qu(e) !== t && n)) throw Error(s(425));
  }
  function Cl() {}
  var so = null,
    ao = null;
  function co(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var fo = typeof setTimeout == "function" ? setTimeout : void 0,
    O2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    bu = typeof Promise == "function" ? Promise : void 0,
    D2 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof bu < "u"
          ? function (e) {
              return bu.resolve(null).then(e).catch(A2);
            }
          : fo;
  function A2(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function po(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), Cr(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Cr(t);
  }
  function Kt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function es(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Tn = Math.random().toString(36).slice(2),
    jt = "__reactFiber$" + Tn,
    Hr = "__reactProps$" + Tn,
    Nt = "__reactContainer$" + Tn,
    ho = "__reactEvents$" + Tn,
    Z2 = "__reactListeners$" + Tn,
    B2 = "__reactHandles$" + Tn;
  function fn(e) {
    var t = e[jt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Nt] || n[jt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = es(e); e !== null; ) {
            if ((n = e[jt])) return n;
            e = es(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function Pr(e) {
    return (
      (e = e[jt] || e[Nt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function On(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function wl(e) {
    return e[Hr] || null;
  }
  var mo = [],
    Dn = -1;
  function Yt(e) {
    return { current: e };
  }
  function ge(e) {
    0 > Dn || ((e.current = mo[Dn]), (mo[Dn] = null), Dn--);
  }
  function me(e, t) {
    Dn++, (mo[Dn] = e.current), (e.current = t);
  }
  var Xt = {},
    Oe = Yt(Xt),
    Qe = Yt(!1),
    dn = Xt;
  function An(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Xt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      i;
    for (i in n) l[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Ge(e) {
    return (e = e.childContextTypes), e != null;
  }
  function xl() {
    ge(Qe), ge(Oe);
  }
  function ts(e, t, n) {
    if (Oe.current !== Xt) throw Error(s(168));
    me(Oe, t), me(Qe, n);
  }
  function ns(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(s(108, ce(e) || "Unknown", l));
    return V({}, n, r);
  }
  function kl(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Xt),
      (dn = Oe.current),
      me(Oe, e),
      me(Qe, Qe.current),
      !0
    );
  }
  function rs(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n
      ? ((e = ns(e, t, dn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ge(Qe),
        ge(Oe),
        me(Oe, e))
      : ge(Qe),
      me(Qe, n);
  }
  var Rt = null,
    Sl = !1,
    vo = !1;
  function ls(e) {
    Rt === null ? (Rt = [e]) : Rt.push(e);
  }
  function U2(e) {
    (Sl = !0), ls(e);
  }
  function Jt() {
    if (!vo && Rt !== null) {
      vo = !0;
      var e = 0,
        t = pe;
      try {
        var n = Rt;
        for (pe = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Rt = null), (Sl = !1);
      } catch (l) {
        throw (Rt !== null && (Rt = Rt.slice(e + 1)), ou(Ti, Jt), l);
      } finally {
        (pe = t), (vo = !1);
      }
    }
    return null;
  }
  var Zn = [],
    Bn = 0,
    _l = null,
    El = 0,
    ut = [],
    st = 0,
    pn = null,
    zt = 1,
    It = "";
  function hn(e, t) {
    (Zn[Bn++] = El), (Zn[Bn++] = _l), (_l = e), (El = t);
  }
  function is(e, t, n) {
    (ut[st++] = zt), (ut[st++] = It), (ut[st++] = pn), (pn = e);
    var r = zt;
    e = It;
    var l = 32 - vt(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var i = 32 - vt(t) + l;
    if (30 < i) {
      var u = l - (l % 5);
      (i = (r & ((1 << u) - 1)).toString(32)),
        (r >>= u),
        (l -= u),
        (zt = (1 << (32 - vt(t) + l)) | (n << l) | r),
        (It = i + e);
    } else (zt = (1 << i) | (n << l) | r), (It = e);
  }
  function go(e) {
    e.return !== null && (hn(e, 1), is(e, 1, 0));
  }
  function yo(e) {
    for (; e === _l; )
      (_l = Zn[--Bn]), (Zn[Bn] = null), (El = Zn[--Bn]), (Zn[Bn] = null);
    for (; e === pn; )
      (pn = ut[--st]),
        (ut[st] = null),
        (It = ut[--st]),
        (ut[st] = null),
        (zt = ut[--st]),
        (ut[st] = null);
  }
  var tt = null,
    nt = null,
    Ce = !1,
    yt = null;
  function os(e, t) {
    var n = dt(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function us(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (tt = e), (nt = Kt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (tt = e), (nt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = pn !== null ? { id: zt, overflow: It } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = dt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (tt = e),
              (nt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Co(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function wo(e) {
    if (Ce) {
      var t = nt;
      if (t) {
        var n = t;
        if (!us(e, t)) {
          if (Co(e)) throw Error(s(418));
          t = Kt(n.nextSibling);
          var r = tt;
          t && us(e, t)
            ? os(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (Ce = !1), (tt = e));
        }
      } else {
        if (Co(e)) throw Error(s(418));
        (e.flags = (e.flags & -4097) | 2), (Ce = !1), (tt = e);
      }
    }
  }
  function ss(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    tt = e;
  }
  function jl(e) {
    if (e !== tt) return !1;
    if (!Ce) return ss(e), (Ce = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !co(e.type, e.memoizedProps))),
      t && (t = nt))
    ) {
      if (Co(e)) throw (as(), Error(s(418)));
      for (; t; ) os(e, t), (t = Kt(t.nextSibling));
    }
    if ((ss(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                nt = Kt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        nt = null;
      }
    } else nt = tt ? Kt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function as() {
    for (var e = nt; e; ) e = Kt(e.nextSibling);
  }
  function Un() {
    (nt = tt = null), (Ce = !1);
  }
  function xo(e) {
    yt === null ? (yt = [e]) : yt.push(e);
  }
  var $2 = q.ReactCurrentBatchConfig;
  function Fr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(s(147, e));
        var l = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (u) {
              var c = l.refs;
              u === null ? delete c[i] : (c[i] = u);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function Ml(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        s(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      ))
    );
  }
  function cs(e) {
    var t = e._init;
    return t(e._payload);
  }
  function fs(e) {
    function t(v, h) {
      if (e) {
        var g = v.deletions;
        g === null ? ((v.deletions = [h]), (v.flags |= 16)) : g.push(h);
      }
    }
    function n(v, h) {
      if (!e) return null;
      for (; h !== null; ) t(v, h), (h = h.sibling);
      return null;
    }
    function r(v, h) {
      for (v = new Map(); h !== null; )
        h.key !== null ? v.set(h.key, h) : v.set(h.index, h), (h = h.sibling);
      return v;
    }
    function l(v, h) {
      return (v = on(v, h)), (v.index = 0), (v.sibling = null), v;
    }
    function i(v, h, g) {
      return (
        (v.index = g),
        e
          ? ((g = v.alternate),
            g !== null
              ? ((g = g.index), g < h ? ((v.flags |= 2), h) : g)
              : ((v.flags |= 2), h))
          : ((v.flags |= 1048576), h)
      );
    }
    function u(v) {
      return e && v.alternate === null && (v.flags |= 2), v;
    }
    function c(v, h, g, E) {
      return h === null || h.tag !== 6
        ? ((h = d1(g, v.mode, E)), (h.return = v), h)
        : ((h = l(h, g)), (h.return = v), h);
    }
    function f(v, h, g, E) {
      var z = g.type;
      return z === Z
        ? S(v, h, g.props.children, E, g.key)
        : h !== null &&
            (h.elementType === z ||
              (typeof z == "object" &&
                z !== null &&
                z.$$typeof === Te &&
                cs(z) === h.type))
          ? ((E = l(h, g.props)), (E.ref = Fr(v, h, g)), (E.return = v), E)
          : ((E = Jl(g.type, g.key, g.props, null, v.mode, E)),
            (E.ref = Fr(v, h, g)),
            (E.return = v),
            E);
    }
    function C(v, h, g, E) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== g.containerInfo ||
        h.stateNode.implementation !== g.implementation
        ? ((h = p1(g, v.mode, E)), (h.return = v), h)
        : ((h = l(h, g.children || [])), (h.return = v), h);
    }
    function S(v, h, g, E, z) {
      return h === null || h.tag !== 7
        ? ((h = kn(g, v.mode, E, z)), (h.return = v), h)
        : ((h = l(h, g)), (h.return = v), h);
    }
    function _(v, h, g) {
      if ((typeof h == "string" && h !== "") || typeof h == "number")
        return (h = d1("" + h, v.mode, g)), (h.return = v), h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case ae:
            return (
              (g = Jl(h.type, h.key, h.props, null, v.mode, g)),
              (g.ref = Fr(v, null, h)),
              (g.return = v),
              g
            );
          case G:
            return (h = p1(h, v.mode, g)), (h.return = v), h;
          case Te:
            var E = h._init;
            return _(v, E(h._payload), g);
        }
        if (ur(h) || I(h))
          return (h = kn(h, v.mode, g, null)), (h.return = v), h;
        Ml(v, h);
      }
      return null;
    }
    function k(v, h, g, E) {
      var z = h !== null ? h.key : null;
      if ((typeof g == "string" && g !== "") || typeof g == "number")
        return z !== null ? null : c(v, h, "" + g, E);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case ae:
            return g.key === z ? f(v, h, g, E) : null;
          case G:
            return g.key === z ? C(v, h, g, E) : null;
          case Te:
            return (z = g._init), k(v, h, z(g._payload), E);
        }
        if (ur(g) || I(g)) return z !== null ? null : S(v, h, g, E, null);
        Ml(v, g);
      }
      return null;
    }
    function H(v, h, g, E, z) {
      if ((typeof E == "string" && E !== "") || typeof E == "number")
        return (v = v.get(g) || null), c(h, v, "" + E, z);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case ae:
            return (
              (v = v.get(E.key === null ? g : E.key) || null), f(h, v, E, z)
            );
          case G:
            return (
              (v = v.get(E.key === null ? g : E.key) || null), C(h, v, E, z)
            );
          case Te:
            var D = E._init;
            return H(v, h, g, D(E._payload), z);
        }
        if (ur(E) || I(E)) return (v = v.get(g) || null), S(h, v, E, z, null);
        Ml(h, E);
      }
      return null;
    }
    function F(v, h, g, E) {
      for (
        var z = null, D = null, A = h, B = (h = 0), Fe = null;
        A !== null && B < g.length;
        B++
      ) {
        A.index > B ? ((Fe = A), (A = null)) : (Fe = A.sibling);
        var se = k(v, A, g[B], E);
        if (se === null) {
          A === null && (A = Fe);
          break;
        }
        e && A && se.alternate === null && t(v, A),
          (h = i(se, h, B)),
          D === null ? (z = se) : (D.sibling = se),
          (D = se),
          (A = Fe);
      }
      if (B === g.length) return n(v, A), Ce && hn(v, B), z;
      if (A === null) {
        for (; B < g.length; B++)
          (A = _(v, g[B], E)),
            A !== null &&
              ((h = i(A, h, B)),
              D === null ? (z = A) : (D.sibling = A),
              (D = A));
        return Ce && hn(v, B), z;
      }
      for (A = r(v, A); B < g.length; B++)
        (Fe = H(A, v, B, g[B], E)),
          Fe !== null &&
            (e &&
              Fe.alternate !== null &&
              A.delete(Fe.key === null ? B : Fe.key),
            (h = i(Fe, h, B)),
            D === null ? (z = Fe) : (D.sibling = Fe),
            (D = Fe));
      return (
        e &&
          A.forEach(function (un) {
            return t(v, un);
          }),
        Ce && hn(v, B),
        z
      );
    }
    function R(v, h, g, E) {
      var z = I(g);
      if (typeof z != "function") throw Error(s(150));
      if (((g = z.call(g)), g == null)) throw Error(s(151));
      for (
        var D = (z = null), A = h, B = (h = 0), Fe = null, se = g.next();
        A !== null && !se.done;
        B++, se = g.next()
      ) {
        A.index > B ? ((Fe = A), (A = null)) : (Fe = A.sibling);
        var un = k(v, A, se.value, E);
        if (un === null) {
          A === null && (A = Fe);
          break;
        }
        e && A && un.alternate === null && t(v, A),
          (h = i(un, h, B)),
          D === null ? (z = un) : (D.sibling = un),
          (D = un),
          (A = Fe);
      }
      if (se.done) return n(v, A), Ce && hn(v, B), z;
      if (A === null) {
        for (; !se.done; B++, se = g.next())
          (se = _(v, se.value, E)),
            se !== null &&
              ((h = i(se, h, B)),
              D === null ? (z = se) : (D.sibling = se),
              (D = se));
        return Ce && hn(v, B), z;
      }
      for (A = r(v, A); !se.done; B++, se = g.next())
        (se = H(A, v, B, se.value, E)),
          se !== null &&
            (e &&
              se.alternate !== null &&
              A.delete(se.key === null ? B : se.key),
            (h = i(se, h, B)),
            D === null ? (z = se) : (D.sibling = se),
            (D = se));
      return (
        e &&
          A.forEach(function (Sc) {
            return t(v, Sc);
          }),
        Ce && hn(v, B),
        z
      );
    }
    function _e(v, h, g, E) {
      if (
        (typeof g == "object" &&
          g !== null &&
          g.type === Z &&
          g.key === null &&
          (g = g.props.children),
        typeof g == "object" && g !== null)
      ) {
        switch (g.$$typeof) {
          case ae:
            e: {
              for (var z = g.key, D = h; D !== null; ) {
                if (D.key === z) {
                  if (((z = g.type), z === Z)) {
                    if (D.tag === 7) {
                      n(v, D.sibling),
                        (h = l(D, g.props.children)),
                        (h.return = v),
                        (v = h);
                      break e;
                    }
                  } else if (
                    D.elementType === z ||
                    (typeof z == "object" &&
                      z !== null &&
                      z.$$typeof === Te &&
                      cs(z) === D.type)
                  ) {
                    n(v, D.sibling),
                      (h = l(D, g.props)),
                      (h.ref = Fr(v, D, g)),
                      (h.return = v),
                      (v = h);
                    break e;
                  }
                  n(v, D);
                  break;
                } else t(v, D);
                D = D.sibling;
              }
              g.type === Z
                ? ((h = kn(g.props.children, v.mode, E, g.key)),
                  (h.return = v),
                  (v = h))
                : ((E = Jl(g.type, g.key, g.props, null, v.mode, E)),
                  (E.ref = Fr(v, h, g)),
                  (E.return = v),
                  (v = E));
            }
            return u(v);
          case G:
            e: {
              for (D = g.key; h !== null; ) {
                if (h.key === D)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === g.containerInfo &&
                    h.stateNode.implementation === g.implementation
                  ) {
                    n(v, h.sibling),
                      (h = l(h, g.children || [])),
                      (h.return = v),
                      (v = h);
                    break e;
                  } else {
                    n(v, h);
                    break;
                  }
                else t(v, h);
                h = h.sibling;
              }
              (h = p1(g, v.mode, E)), (h.return = v), (v = h);
            }
            return u(v);
          case Te:
            return (D = g._init), _e(v, h, D(g._payload), E);
        }
        if (ur(g)) return F(v, h, g, E);
        if (I(g)) return R(v, h, g, E);
        Ml(v, g);
      }
      return (typeof g == "string" && g !== "") || typeof g == "number"
        ? ((g = "" + g),
          h !== null && h.tag === 6
            ? (n(v, h.sibling), (h = l(h, g)), (h.return = v), (v = h))
            : (n(v, h), (h = d1(g, v.mode, E)), (h.return = v), (v = h)),
          u(v))
        : n(v, h);
    }
    return _e;
  }
  var $n = fs(!0),
    ds = fs(!1),
    Ll = Yt(null),
    Vl = null,
    Wn = null,
    ko = null;
  function So() {
    ko = Wn = Vl = null;
  }
  function _o(e) {
    var t = Ll.current;
    ge(Ll), (e._currentValue = t);
  }
  function Eo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Qn(e, t) {
    (Vl = e),
      (ko = Wn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ke = !0), (e.firstContext = null));
  }
  function at(e) {
    var t = e._currentValue;
    if (ko !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Wn === null)) {
        if (Vl === null) throw Error(s(308));
        (Wn = e), (Vl.dependencies = { lanes: 0, firstContext: e });
      } else Wn = Wn.next = e;
    return t;
  }
  var mn = null;
  function jo(e) {
    mn === null ? (mn = [e]) : mn.push(e);
  }
  function ps(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), jo(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Tt(e, r)
    );
  }
  function Tt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var qt = !1;
  function Mo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function hs(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Ot(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function bt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (oe & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Tt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), jo(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Tt(e, n)
    );
  }
  function Hl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ai(e, n);
    }
  }
  function ms(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var u = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          i === null ? (l = i = u) : (i = i.next = u), (n = n.next);
        } while (n !== null);
        i === null ? (l = i = t) : (i = i.next = t);
      } else l = i = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function Pl(e, t, n, r) {
    var l = e.updateQueue;
    qt = !1;
    var i = l.firstBaseUpdate,
      u = l.lastBaseUpdate,
      c = l.shared.pending;
    if (c !== null) {
      l.shared.pending = null;
      var f = c,
        C = f.next;
      (f.next = null), u === null ? (i = C) : (u.next = C), (u = f);
      var S = e.alternate;
      S !== null &&
        ((S = S.updateQueue),
        (c = S.lastBaseUpdate),
        c !== u &&
          (c === null ? (S.firstBaseUpdate = C) : (c.next = C),
          (S.lastBaseUpdate = f)));
    }
    if (i !== null) {
      var _ = l.baseState;
      (u = 0), (S = C = f = null), (c = i);
      do {
        var k = c.lane,
          H = c.eventTime;
        if ((r & k) === k) {
          S !== null &&
            (S = S.next =
              {
                eventTime: H,
                lane: 0,
                tag: c.tag,
                payload: c.payload,
                callback: c.callback,
                next: null,
              });
          e: {
            var F = e,
              R = c;
            switch (((k = t), (H = n), R.tag)) {
              case 1:
                if (((F = R.payload), typeof F == "function")) {
                  _ = F.call(H, _, k);
                  break e;
                }
                _ = F;
                break e;
              case 3:
                F.flags = (F.flags & -65537) | 128;
              case 0:
                if (
                  ((F = R.payload),
                  (k = typeof F == "function" ? F.call(H, _, k) : F),
                  k == null)
                )
                  break e;
                _ = V({}, _, k);
                break e;
              case 2:
                qt = !0;
            }
          }
          c.callback !== null &&
            c.lane !== 0 &&
            ((e.flags |= 64),
            (k = l.effects),
            k === null ? (l.effects = [c]) : k.push(c));
        } else
          (H = {
            eventTime: H,
            lane: k,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            S === null ? ((C = S = H), (f = _)) : (S = S.next = H),
            (u |= k);
        if (((c = c.next), c === null)) {
          if (((c = l.shared.pending), c === null)) break;
          (k = c),
            (c = k.next),
            (k.next = null),
            (l.lastBaseUpdate = k),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (S === null && (f = _),
        (l.baseState = f),
        (l.firstBaseUpdate = C),
        (l.lastBaseUpdate = S),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (u |= l.lane), (l = l.next);
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      (yn |= u), (e.lanes = u), (e.memoizedState = _);
    }
  }
  function vs(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(s(191, l));
          l.call(r);
        }
      }
  }
  var Nr = {},
    Mt = Yt(Nr),
    Rr = Yt(Nr),
    zr = Yt(Nr);
  function vn(e) {
    if (e === Nr) throw Error(s(174));
    return e;
  }
  function Lo(e, t) {
    switch ((me(zr, t), me(Rr, e), me(Mt, Nr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Li(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Li(t, e));
    }
    ge(Mt), me(Mt, t);
  }
  function Gn() {
    ge(Mt), ge(Rr), ge(zr);
  }
  function gs(e) {
    vn(zr.current);
    var t = vn(Mt.current),
      n = Li(t, e.type);
    t !== n && (me(Rr, e), me(Mt, n));
  }
  function Vo(e) {
    Rr.current === e && (ge(Mt), ge(Rr));
  }
  var we = Yt(0);
  function Fl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Ho = [];
  function Po() {
    for (var e = 0; e < Ho.length; e++)
      Ho[e]._workInProgressVersionPrimary = null;
    Ho.length = 0;
  }
  var Nl = q.ReactCurrentDispatcher,
    Fo = q.ReactCurrentBatchConfig,
    gn = 0,
    xe = null,
    Le = null,
    He = null,
    Rl = !1,
    Ir = !1,
    Tr = 0,
    W2 = 0;
  function De() {
    throw Error(s(321));
  }
  function No(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!gt(e[n], t[n])) return !1;
    return !0;
  }
  function Ro(e, t, n, r, l, i) {
    if (
      ((gn = i),
      (xe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Nl.current = e === null || e.memoizedState === null ? Y2 : X2),
      (e = n(r, l)),
      Ir)
    ) {
      i = 0;
      do {
        if (((Ir = !1), (Tr = 0), 25 <= i)) throw Error(s(301));
        (i += 1),
          (He = Le = null),
          (t.updateQueue = null),
          (Nl.current = J2),
          (e = n(r, l));
      } while (Ir);
    }
    if (
      ((Nl.current = Tl),
      (t = Le !== null && Le.next !== null),
      (gn = 0),
      (He = Le = xe = null),
      (Rl = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function zo() {
    var e = Tr !== 0;
    return (Tr = 0), e;
  }
  function Lt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return He === null ? (xe.memoizedState = He = e) : (He = He.next = e), He;
  }
  function ct() {
    if (Le === null) {
      var e = xe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = He === null ? xe.memoizedState : He.next;
    if (t !== null) (He = t), (Le = e);
    else {
      if (e === null) throw Error(s(310));
      (Le = e),
        (e = {
          memoizedState: Le.memoizedState,
          baseState: Le.baseState,
          baseQueue: Le.baseQueue,
          queue: Le.queue,
          next: null,
        }),
        He === null ? (xe.memoizedState = He = e) : (He = He.next = e);
    }
    return He;
  }
  function Or(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Io(e) {
    var t = ct(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = Le,
      l = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var u = l.next;
        (l.next = i.next), (i.next = u);
      }
      (r.baseQueue = l = i), (n.pending = null);
    }
    if (l !== null) {
      (i = l.next), (r = r.baseState);
      var c = (u = null),
        f = null,
        C = i;
      do {
        var S = C.lane;
        if ((gn & S) === S)
          f !== null &&
            (f = f.next =
              {
                lane: 0,
                action: C.action,
                hasEagerState: C.hasEagerState,
                eagerState: C.eagerState,
                next: null,
              }),
            (r = C.hasEagerState ? C.eagerState : e(r, C.action));
        else {
          var _ = {
            lane: S,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null,
          };
          f === null ? ((c = f = _), (u = r)) : (f = f.next = _),
            (xe.lanes |= S),
            (yn |= S);
        }
        C = C.next;
      } while (C !== null && C !== i);
      f === null ? (u = r) : (f.next = c),
        gt(r, t.memoizedState) || (Ke = !0),
        (t.memoizedState = r),
        (t.baseState = u),
        (t.baseQueue = f),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (i = l.lane), (xe.lanes |= i), (yn |= i), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function To(e) {
    var t = ct(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = (l = l.next);
      do (i = e(i, u.action)), (u = u.next);
      while (u !== l);
      gt(i, t.memoizedState) || (Ke = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i);
    }
    return [i, r];
  }
  function ys() {}
  function Cs(e, t) {
    var n = xe,
      r = ct(),
      l = t(),
      i = !gt(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (Ke = !0)),
      (r = r.queue),
      Oo(ks.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (He !== null && He.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Dr(9, xs.bind(null, n, r, l, t), void 0, null),
        Pe === null)
      )
        throw Error(s(349));
      (gn & 30) !== 0 || ws(n, t, l);
    }
    return l;
  }
  function ws(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = xe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (xe.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function xs(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Ss(t) && _s(e);
  }
  function ks(e, t, n) {
    return n(function () {
      Ss(t) && _s(e);
    });
  }
  function Ss(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !gt(e, n);
    } catch {
      return !0;
    }
  }
  function _s(e) {
    var t = Tt(e, 1);
    t !== null && kt(t, e, 1, -1);
  }
  function Es(e) {
    var t = Lt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Or,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = K2.bind(null, xe, e)),
      [t.memoizedState, e]
    );
  }
  function Dr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = xe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (xe.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function js() {
    return ct().memoizedState;
  }
  function zl(e, t, n, r) {
    var l = Lt();
    (xe.flags |= e),
      (l.memoizedState = Dr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Il(e, t, n, r) {
    var l = ct();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Le !== null) {
      var u = Le.memoizedState;
      if (((i = u.destroy), r !== null && No(r, u.deps))) {
        l.memoizedState = Dr(t, n, i, r);
        return;
      }
    }
    (xe.flags |= e), (l.memoizedState = Dr(1 | t, n, i, r));
  }
  function Ms(e, t) {
    return zl(8390656, 8, e, t);
  }
  function Oo(e, t) {
    return Il(2048, 8, e, t);
  }
  function Ls(e, t) {
    return Il(4, 2, e, t);
  }
  function Vs(e, t) {
    return Il(4, 4, e, t);
  }
  function Hs(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Ps(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Il(4, 4, Hs.bind(null, t, e), n)
    );
  }
  function Do() {}
  function Fs(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && No(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Ns(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && No(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Rs(e, t, n) {
    return (gn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ke = !0)), (e.memoizedState = n))
      : (gt(n, t) ||
          ((n = cu()), (xe.lanes |= n), (yn |= n), (e.baseState = !0)),
        t);
  }
  function Q2(e, t) {
    var n = pe;
    (pe = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Fo.transition;
    Fo.transition = {};
    try {
      e(!1), t();
    } finally {
      (pe = n), (Fo.transition = r);
    }
  }
  function zs() {
    return ct().memoizedState;
  }
  function G2(e, t, n) {
    var r = rn(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Is(e))
    )
      Ts(t, n);
    else if (((n = ps(e, t, n, r)), n !== null)) {
      var l = We();
      kt(n, e, r, l), Os(n, t, r);
    }
  }
  function K2(e, t, n) {
    var r = rn(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Is(e)) Ts(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var u = t.lastRenderedState,
            c = i(u, n);
          if (((l.hasEagerState = !0), (l.eagerState = c), gt(c, u))) {
            var f = t.interleaved;
            f === null
              ? ((l.next = l), jo(t))
              : ((l.next = f.next), (f.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = ps(e, t, l, r)),
        n !== null && ((l = We()), kt(n, e, r, l), Os(n, t, r));
    }
  }
  function Is(e) {
    var t = e.alternate;
    return e === xe || (t !== null && t === xe);
  }
  function Ts(e, t) {
    Ir = Rl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Os(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ai(e, n);
    }
  }
  var Tl = {
      readContext: at,
      useCallback: De,
      useContext: De,
      useEffect: De,
      useImperativeHandle: De,
      useInsertionEffect: De,
      useLayoutEffect: De,
      useMemo: De,
      useReducer: De,
      useRef: De,
      useState: De,
      useDebugValue: De,
      useDeferredValue: De,
      useTransition: De,
      useMutableSource: De,
      useSyncExternalStore: De,
      useId: De,
      unstable_isNewReconciler: !1,
    },
    Y2 = {
      readContext: at,
      useCallback: function (e, t) {
        return (Lt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: at,
      useEffect: Ms,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          zl(4194308, 4, Hs.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return zl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return zl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Lt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Lt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = G2.bind(null, xe, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Lt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Es,
      useDebugValue: Do,
      useDeferredValue: function (e) {
        return (Lt().memoizedState = e);
      },
      useTransition: function () {
        var e = Es(!1),
          t = e[0];
        return (e = Q2.bind(null, e[1])), (Lt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = xe,
          l = Lt();
        if (Ce) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = t()), Pe === null)) throw Error(s(349));
          (gn & 30) !== 0 || ws(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          Ms(ks.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          Dr(9, xs.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Lt(),
          t = Pe.identifierPrefix;
        if (Ce) {
          var n = It,
            r = zt;
          (n = (r & ~(1 << (32 - vt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Tr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = W2++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    X2 = {
      readContext: at,
      useCallback: Fs,
      useContext: at,
      useEffect: Oo,
      useImperativeHandle: Ps,
      useInsertionEffect: Ls,
      useLayoutEffect: Vs,
      useMemo: Ns,
      useReducer: Io,
      useRef: js,
      useState: function () {
        return Io(Or);
      },
      useDebugValue: Do,
      useDeferredValue: function (e) {
        var t = ct();
        return Rs(t, Le.memoizedState, e);
      },
      useTransition: function () {
        var e = Io(Or)[0],
          t = ct().memoizedState;
        return [e, t];
      },
      useMutableSource: ys,
      useSyncExternalStore: Cs,
      useId: zs,
      unstable_isNewReconciler: !1,
    },
    J2 = {
      readContext: at,
      useCallback: Fs,
      useContext: at,
      useEffect: Oo,
      useImperativeHandle: Ps,
      useInsertionEffect: Ls,
      useLayoutEffect: Vs,
      useMemo: Ns,
      useReducer: To,
      useRef: js,
      useState: function () {
        return To(Or);
      },
      useDebugValue: Do,
      useDeferredValue: function (e) {
        var t = ct();
        return Le === null ? (t.memoizedState = e) : Rs(t, Le.memoizedState, e);
      },
      useTransition: function () {
        var e = To(Or)[0],
          t = ct().memoizedState;
        return [e, t];
      },
      useMutableSource: ys,
      useSyncExternalStore: Cs,
      useId: zs,
      unstable_isNewReconciler: !1,
    };
  function Ct(e, t) {
    if (e && e.defaultProps) {
      (t = V({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ao(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : V({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ol = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? cn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = We(),
        l = rn(e),
        i = Ot(r, l);
      (i.payload = t),
        n != null && (i.callback = n),
        (t = bt(e, i, l)),
        t !== null && (kt(t, e, l, r), Hl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = We(),
        l = rn(e),
        i = Ot(r, l);
      (i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = bt(e, i, l)),
        t !== null && (kt(t, e, l, r), Hl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = We(),
        r = rn(e),
        l = Ot(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = bt(e, l, r)),
        t !== null && (kt(t, e, r, n), Hl(t, e, r));
    },
  };
  function Ds(e, t, n, r, l, i, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, u)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Er(n, r) || !Er(l, i)
          : !0
    );
  }
  function As(e, t, n) {
    var r = !1,
      l = Xt,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = at(i))
        : ((l = Ge(t) ? dn : Oe.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? An(e, l) : Xt)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Ol),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Zs(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Ol.enqueueReplaceState(t, t.state, null);
  }
  function Zo(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Mo(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
      ? (l.context = at(i))
      : ((i = Ge(t) ? dn : Oe.current), (l.context = An(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (Ao(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && Ol.enqueueReplaceState(l, l.state, null),
        Pl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Kn(e, t) {
    try {
      var n = "",
        r = t;
      do (n += te(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (i) {
      l =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Bo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Uo(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var q2 = typeof WeakMap == "function" ? WeakMap : Map;
  function Bs(e, t, n) {
    (n = Ot(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Wl || ((Wl = !0), (l1 = r)), Uo(e, t);
      }),
      n
    );
  }
  function Us(e, t, n) {
    (n = Ot(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Uo(e, t);
        });
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          Uo(e, t),
            typeof r != "function" &&
              (tn === null ? (tn = new Set([this])) : tn.add(this));
          var u = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: u !== null ? u : "",
          });
        }),
      n
    );
  }
  function $s(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new q2();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = dc.bind(null, e, t, n)), t.then(e, e));
  }
  function Ws(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Qs(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Ot(-1, 1)), (t.tag = 2), bt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var b2 = q.ReactCurrentOwner,
    Ke = !1;
  function $e(e, t, n, r) {
    t.child = e === null ? ds(t, null, n, r) : $n(t, e.child, n, r);
  }
  function Gs(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      Qn(t, l),
      (r = Ro(e, t, n, r, i, l)),
      (n = zo()),
      e !== null && !Ke
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Dt(e, t, l))
        : (Ce && n && go(t), (t.flags |= 1), $e(e, t, r, l), t.child)
    );
  }
  function Ks(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !f1(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Ys(e, t, i, r, l))
        : ((e = Jl(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), (e.lanes & l) === 0)) {
      var u = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Er), n(u, r) && e.ref === t.ref)
      )
        return Dt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = on(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ys(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Er(i, r) && e.ref === t.ref)
        if (((Ke = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Ke = !0);
        else return (t.lanes = e.lanes), Dt(e, t, l);
    }
    return $o(e, t, n, r, l);
  }
  function Xs(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          me(Xn, rt),
          (rt |= n);
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            me(Xn, rt),
            (rt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          me(Xn, rt),
          (rt |= r);
      }
    else
      i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        me(Xn, rt),
        (rt |= r);
    return $e(e, t, l, n), t.child;
  }
  function Js(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function $o(e, t, n, r, l) {
    var i = Ge(n) ? dn : Oe.current;
    return (
      (i = An(t, i)),
      Qn(t, l),
      (n = Ro(e, t, n, r, i, l)),
      (r = zo()),
      e !== null && !Ke
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Dt(e, t, l))
        : (Ce && r && go(t), (t.flags |= 1), $e(e, t, n, l), t.child)
    );
  }
  function qs(e, t, n, r, l) {
    if (Ge(n)) {
      var i = !0;
      kl(t);
    } else i = !1;
    if ((Qn(t, l), t.stateNode === null))
      Al(e, t), As(t, n, r), Zo(t, n, r, l), (r = !0);
    else if (e === null) {
      var u = t.stateNode,
        c = t.memoizedProps;
      u.props = c;
      var f = u.context,
        C = n.contextType;
      typeof C == "object" && C !== null
        ? (C = at(C))
        : ((C = Ge(n) ? dn : Oe.current), (C = An(t, C)));
      var S = n.getDerivedStateFromProps,
        _ =
          typeof S == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function";
      _ ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((c !== r || f !== C) && Zs(t, u, r, C)),
        (qt = !1);
      var k = t.memoizedState;
      (u.state = k),
        Pl(t, r, u, l),
        (f = t.memoizedState),
        c !== r || k !== f || Qe.current || qt
          ? (typeof S == "function" && (Ao(t, n, S, r), (f = t.memoizedState)),
            (c = qt || Ds(t, n, c, r, k, f, C))
              ? (_ ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = f)),
            (u.props = r),
            (u.state = f),
            (u.context = C),
            (r = c))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (u = t.stateNode),
        hs(e, t),
        (c = t.memoizedProps),
        (C = t.type === t.elementType ? c : Ct(t.type, c)),
        (u.props = C),
        (_ = t.pendingProps),
        (k = u.context),
        (f = n.contextType),
        typeof f == "object" && f !== null
          ? (f = at(f))
          : ((f = Ge(n) ? dn : Oe.current), (f = An(t, f)));
      var H = n.getDerivedStateFromProps;
      (S =
        typeof H == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function") ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((c !== _ || k !== f) && Zs(t, u, r, f)),
        (qt = !1),
        (k = t.memoizedState),
        (u.state = k),
        Pl(t, r, u, l);
      var F = t.memoizedState;
      c !== _ || k !== F || Qe.current || qt
        ? (typeof H == "function" && (Ao(t, n, H, r), (F = t.memoizedState)),
          (C = qt || Ds(t, n, C, r, k, F, f) || !1)
            ? (S ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(r, F, f),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(r, F, f)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (c === e.memoizedProps && k === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (c === e.memoizedProps && k === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = F)),
          (u.props = r),
          (u.state = F),
          (u.context = f),
          (r = C))
        : (typeof u.componentDidUpdate != "function" ||
            (c === e.memoizedProps && k === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (c === e.memoizedProps && k === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Wo(e, t, n, r, i, l);
  }
  function Wo(e, t, n, r, l, i) {
    Js(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return l && rs(t, n, !1), Dt(e, t, i);
    (r = t.stateNode), (b2.current = t);
    var c =
      u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && u
        ? ((t.child = $n(t, e.child, null, i)), (t.child = $n(t, null, c, i)))
        : $e(e, t, c, i),
      (t.memoizedState = r.state),
      l && rs(t, n, !0),
      t.child
    );
  }
  function bs(e) {
    var t = e.stateNode;
    t.pendingContext
      ? ts(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && ts(e, t.context, !1),
      Lo(e, t.containerInfo);
  }
  function ea(e, t, n, r, l) {
    return Un(), xo(l), (t.flags |= 256), $e(e, t, n, r), t.child;
  }
  var Qo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Go(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ta(e, t, n) {
    var r = t.pendingProps,
      l = we.current,
      i = !1,
      u = (t.flags & 128) !== 0,
      c;
    if (
      ((c = u) ||
        (c = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      c
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      me(we, l & 1),
      e === null)
    )
      return (
        wo(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((u = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (u = { mode: "hidden", children: u }),
                (r & 1) === 0 && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = u))
                  : (i = ql(u, r, 0, null)),
                (e = kn(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = Go(n)),
                (t.memoizedState = Qo),
                e)
              : Ko(t, u))
      );
    if (((l = e.memoizedState), l !== null && ((c = l.dehydrated), c !== null)))
      return ec(e, t, u, r, c, l, n);
    if (i) {
      (i = r.fallback), (u = t.mode), (l = e.child), (c = l.sibling);
      var f = { mode: "hidden", children: r.children };
      return (
        (u & 1) === 0 && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = f),
            (t.deletions = null))
          : ((r = on(l, f)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        c !== null ? (i = on(c, i)) : ((i = kn(i, u, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (u = e.child.memoizedState),
        (u =
          u === null
            ? Go(n)
            : {
                baseLanes: u.baseLanes | n,
                cachePool: null,
                transitions: u.transitions,
              }),
        (i.memoizedState = u),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = Qo),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = on(i, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Ko(e, t) {
    return (
      (t = ql({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Dl(e, t, n, r) {
    return (
      r !== null && xo(r),
      $n(t, e.child, null, n),
      (e = Ko(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function ec(e, t, n, r, l, i, u) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Bo(Error(s(422)))), Dl(e, t, u, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (l = t.mode),
            (r = ql({ mode: "visible", children: r.children }, l, 0, null)),
            (i = kn(i, l, u, null)),
            (i.flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            (t.mode & 1) !== 0 && $n(t, e.child, null, u),
            (t.child.memoizedState = Go(u)),
            (t.memoizedState = Qo),
            i);
    if ((t.mode & 1) === 0) return Dl(e, t, u, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var c = r.dgst;
      return (
        (r = c), (i = Error(s(419))), (r = Bo(i, r, void 0)), Dl(e, t, u, r)
      );
    }
    if (((c = (u & e.childLanes) !== 0), Ke || c)) {
      if (((r = Pe), r !== null)) {
        switch (u & -u) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
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
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = (l & (r.suspendedLanes | u)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== i.retryLane &&
            ((i.retryLane = l), Tt(e, l), kt(r, e, l, -1));
      }
      return c1(), (r = Bo(Error(s(421)))), Dl(e, t, u, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = pc.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (nt = Kt(l.nextSibling)),
        (tt = t),
        (Ce = !0),
        (yt = null),
        e !== null &&
          ((ut[st++] = zt),
          (ut[st++] = It),
          (ut[st++] = pn),
          (zt = e.id),
          (It = e.overflow),
          (pn = t)),
        (t = Ko(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function na(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Eo(e.return, t, n);
  }
  function Yo(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = l));
  }
  function ra(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if (($e(e, t, r.children, n), (r = we.current), (r & 2) !== 0))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && na(e, n, t);
          else if (e.tag === 19) na(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((me(we, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && Fl(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            Yo(t, !1, l, n, i);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && Fl(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          Yo(t, !0, n, null, i);
          break;
        case "together":
          Yo(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Al(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Dt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (yn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, n = on(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = on(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function tc(e, t, n) {
    switch (t.tag) {
      case 3:
        bs(t), Un();
        break;
      case 5:
        gs(t);
        break;
      case 1:
        Ge(t.type) && kl(t);
        break;
      case 4:
        Lo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        me(Ll, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (me(we, we.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? ta(e, t, n)
              : (me(we, we.current & 1),
                (e = Dt(e, t, n)),
                e !== null ? e.sibling : null);
        me(we, we.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return ra(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          me(we, we.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Xs(e, t, n);
    }
    return Dt(e, t, n);
  }
  var la, Xo, ia, oa;
  (la = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Xo = function () {}),
    (ia = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), vn(Mt.current);
        var i = null;
        switch (n) {
          case "input":
            (l = _i(e, l)), (r = _i(e, r)), (i = []);
            break;
          case "select":
            (l = V({}, l, { value: void 0 })),
              (r = V({}, r, { value: void 0 })),
              (i = []);
            break;
          case "textarea":
            (l = Mi(e, l)), (r = Mi(e, r)), (i = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Cl);
        }
        Vi(n, r);
        var u;
        n = null;
        for (C in l)
          if (!r.hasOwnProperty(C) && l.hasOwnProperty(C) && l[C] != null)
            if (C === "style") {
              var c = l[C];
              for (u in c) c.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
            } else
              C !== "dangerouslySetInnerHTML" &&
                C !== "children" &&
                C !== "suppressContentEditableWarning" &&
                C !== "suppressHydrationWarning" &&
                C !== "autoFocus" &&
                (y.hasOwnProperty(C)
                  ? i || (i = [])
                  : (i = i || []).push(C, null));
        for (C in r) {
          var f = r[C];
          if (
            ((c = l != null ? l[C] : void 0),
            r.hasOwnProperty(C) && f !== c && (f != null || c != null))
          )
            if (C === "style")
              if (c) {
                for (u in c)
                  !c.hasOwnProperty(u) ||
                    (f && f.hasOwnProperty(u)) ||
                    (n || (n = {}), (n[u] = ""));
                for (u in f)
                  f.hasOwnProperty(u) &&
                    c[u] !== f[u] &&
                    (n || (n = {}), (n[u] = f[u]));
              } else n || (i || (i = []), i.push(C, n)), (n = f);
            else
              C === "dangerouslySetInnerHTML"
                ? ((f = f ? f.__html : void 0),
                  (c = c ? c.__html : void 0),
                  f != null && c !== f && (i = i || []).push(C, f))
                : C === "children"
                  ? (typeof f != "string" && typeof f != "number") ||
                    (i = i || []).push(C, "" + f)
                  : C !== "suppressContentEditableWarning" &&
                    C !== "suppressHydrationWarning" &&
                    (y.hasOwnProperty(C)
                      ? (f != null && C === "onScroll" && ve("scroll", e),
                        i || c === f || (i = []))
                      : (i = i || []).push(C, f));
        }
        n && (i = i || []).push("style", n);
        var C = i;
        (t.updateQueue = C) && (t.flags |= 4);
      }
    }),
    (oa = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function Ar(e, t) {
    if (!Ce)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ae(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function nc(e, t, n) {
    var r = t.pendingProps;
    switch ((yo(t), t.tag)) {
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
        return Ae(t), null;
      case 1:
        return Ge(t.type) && xl(), Ae(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Gn(),
          ge(Qe),
          ge(Oe),
          Po(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (jl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), yt !== null && (u1(yt), (yt = null)))),
          Xo(e, t),
          Ae(t),
          null
        );
      case 5:
        Vo(t);
        var l = vn(zr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          ia(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return Ae(t), null;
          }
          if (((e = vn(Mt.current)), jl(t))) {
            (r = t.stateNode), (n = t.type);
            var i = t.memoizedProps;
            switch (((r[jt] = t), (r[Hr] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                ve("cancel", r), ve("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ve("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Mr.length; l++) ve(Mr[l], r);
                break;
              case "source":
                ve("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ve("error", r), ve("load", r);
                break;
              case "details":
                ve("toggle", r);
                break;
              case "input":
                A1(r, i), ve("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!i.multiple }),
                  ve("invalid", r);
                break;
              case "textarea":
                U1(r, i), ve("invalid", r);
            }
            Vi(n, i), (l = null);
            for (var u in i)
              if (i.hasOwnProperty(u)) {
                var c = i[u];
                u === "children"
                  ? typeof c == "string"
                    ? r.textContent !== c &&
                      (i.suppressHydrationWarning !== !0 &&
                        yl(r.textContent, c, e),
                      (l = ["children", c]))
                    : typeof c == "number" &&
                      r.textContent !== "" + c &&
                      (i.suppressHydrationWarning !== !0 &&
                        yl(r.textContent, c, e),
                      (l = ["children", "" + c]))
                  : y.hasOwnProperty(u) &&
                    c != null &&
                    u === "onScroll" &&
                    ve("scroll", r);
              }
            switch (n) {
              case "input":
                Ft(r), B1(r, i, !0);
                break;
              case "textarea":
                Ft(r), W1(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Cl);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (u = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Q1(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = u.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = u.createElement(n, { is: r.is }))
                    : ((e = u.createElement(n)),
                      n === "select" &&
                        ((u = e),
                        r.multiple
                          ? (u.multiple = !0)
                          : r.size && (u.size = r.size)))
                : (e = u.createElementNS(e, n)),
              (e[jt] = t),
              (e[Hr] = r),
              la(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((u = Hi(n, r)), n)) {
                case "dialog":
                  ve("cancel", e), ve("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ve("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Mr.length; l++) ve(Mr[l], e);
                  l = r;
                  break;
                case "source":
                  ve("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  ve("error", e), ve("load", e), (l = r);
                  break;
                case "details":
                  ve("toggle", e), (l = r);
                  break;
                case "input":
                  A1(e, r), (l = _i(e, r)), ve("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = V({}, r, { value: void 0 })),
                    ve("invalid", e);
                  break;
                case "textarea":
                  U1(e, r), (l = Mi(e, r)), ve("invalid", e);
                  break;
                default:
                  l = r;
              }
              Vi(n, l), (c = l);
              for (i in c)
                if (c.hasOwnProperty(i)) {
                  var f = c[i];
                  i === "style"
                    ? Y1(e, f)
                    : i === "dangerouslySetInnerHTML"
                      ? ((f = f ? f.__html : void 0), f != null && G1(e, f))
                      : i === "children"
                        ? typeof f == "string"
                          ? (n !== "textarea" || f !== "") && sr(e, f)
                          : typeof f == "number" && sr(e, "" + f)
                        : i !== "suppressContentEditableWarning" &&
                          i !== "suppressHydrationWarning" &&
                          i !== "autoFocus" &&
                          (y.hasOwnProperty(i)
                            ? f != null && i === "onScroll" && ve("scroll", e)
                            : f != null && re(e, i, f, u));
                }
              switch (n) {
                case "input":
                  Ft(e), B1(e, r, !1);
                  break;
                case "textarea":
                  Ft(e), W1(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + le(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? Ln(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        Ln(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Cl);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Ae(t), null;
      case 6:
        if (e && t.stateNode != null) oa(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (((n = vn(zr.current)), vn(Mt.current), jl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[jt] = t),
              (i = r.nodeValue !== n) && ((e = tt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  yl(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    yl(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[jt] = t),
              (t.stateNode = r);
        }
        return Ae(t), null;
      case 13:
        if (
          (ge(we),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ce && nt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            as(), Un(), (t.flags |= 98560), (i = !1);
          else if (((i = jl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(s(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(s(317));
              i[jt] = t;
            } else
              Un(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Ae(t), (i = !1);
          } else yt !== null && (u1(yt), (yt = null)), (i = !0);
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (we.current & 1) !== 0
                  ? Ve === 0 && (Ve = 3)
                  : c1())),
            t.updateQueue !== null && (t.flags |= 4),
            Ae(t),
            null);
      case 4:
        return (
          Gn(),
          Xo(e, t),
          e === null && Lr(t.stateNode.containerInfo),
          Ae(t),
          null
        );
      case 10:
        return _o(t.type._context), Ae(t), null;
      case 17:
        return Ge(t.type) && xl(), Ae(t), null;
      case 19:
        if ((ge(we), (i = t.memoizedState), i === null)) return Ae(t), null;
        if (((r = (t.flags & 128) !== 0), (u = i.rendering), u === null))
          if (r) Ar(i, !1);
          else {
            if (Ve !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = Fl(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      Ar(i, !1),
                      r = u.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (u = i.alternate),
                      u === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = u.childLanes),
                          (i.lanes = u.lanes),
                          (i.child = u.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = u.memoizedProps),
                          (i.memoizedState = u.memoizedState),
                          (i.updateQueue = u.updateQueue),
                          (i.type = u.type),
                          (e = u.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return me(we, (we.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              Se() > Jn &&
              ((t.flags |= 128), (r = !0), Ar(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Fl(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Ar(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !u.alternate &&
                  !Ce)
              )
                return Ae(t), null;
            } else
              2 * Se() - i.renderingStartTime > Jn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Ar(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((n = i.last),
              n !== null ? (n.sibling = u) : (t.child = u),
              (i.last = u));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = Se()),
            (t.sibling = null),
            (n = we.current),
            me(we, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ae(t), null);
      case 22:
      case 23:
        return (
          a1(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (rt & 1073741824) !== 0 &&
              (Ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ae(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function rc(e, t) {
    switch ((yo(t), t.tag)) {
      case 1:
        return (
          Ge(t.type) && xl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Gn(),
          ge(Qe),
          ge(Oe),
          Po(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return Vo(t), null;
      case 13:
        if (
          (ge(we), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          Un();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ge(we), null;
      case 4:
        return Gn(), null;
      case 10:
        return _o(t.type._context), null;
      case 22:
      case 23:
        return a1(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Zl = !1,
    Ze = !1,
    lc = typeof WeakSet == "function" ? WeakSet : Set,
    P = null;
  function Yn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ke(e, t, r);
        }
      else n.current = null;
  }
  function Jo(e, t, n) {
    try {
      n();
    } catch (r) {
      ke(e, t, r);
    }
  }
  var ua = !1;
  function ic(e, t) {
    if (((so = ul), (e = Du()), eo(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, i.nodeType;
            } catch {
              n = null;
              break e;
            }
            var u = 0,
              c = -1,
              f = -1,
              C = 0,
              S = 0,
              _ = e,
              k = null;
            t: for (;;) {
              for (
                var H;
                _ !== n || (l !== 0 && _.nodeType !== 3) || (c = u + l),
                  _ !== i || (r !== 0 && _.nodeType !== 3) || (f = u + r),
                  _.nodeType === 3 && (u += _.nodeValue.length),
                  (H = _.firstChild) !== null;

              )
                (k = _), (_ = H);
              for (;;) {
                if (_ === e) break t;
                if (
                  (k === n && ++C === l && (c = u),
                  k === i && ++S === r && (f = u),
                  (H = _.nextSibling) !== null)
                )
                  break;
                (_ = k), (k = _.parentNode);
              }
              _ = H;
            }
            n = c === -1 || f === -1 ? null : { start: c, end: f };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      ao = { focusedElem: e, selectionRange: n }, ul = !1, P = t;
      P !== null;

    )
      if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (P = e);
      else
        for (; P !== null; ) {
          t = P;
          try {
            var F = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (F !== null) {
                    var R = F.memoizedProps,
                      _e = F.memoizedState,
                      v = t.stateNode,
                      h = v.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? R : Ct(t.type, R),
                        _e,
                      );
                    v.__reactInternalSnapshotBeforeUpdate = h;
                  }
                  break;
                case 3:
                  var g = t.stateNode.containerInfo;
                  g.nodeType === 1
                    ? (g.textContent = "")
                    : g.nodeType === 9 &&
                      g.documentElement &&
                      g.removeChild(g.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (E) {
            ke(t, t.return, E);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (P = e);
            break;
          }
          P = t.return;
        }
    return (F = ua), (ua = !1), F;
  }
  function Zr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          (l.destroy = void 0), i !== void 0 && Jo(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Bl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function qo(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function sa(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), sa(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[jt],
          delete t[Hr],
          delete t[ho],
          delete t[Z2],
          delete t[B2])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function aa(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ca(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || aa(e.return)) return null;
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
  function bo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Cl));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (bo(e, t, n), e = e.sibling; e !== null; )
        bo(e, t, n), (e = e.sibling);
  }
  function e1(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (e1(e, t, n), e = e.sibling; e !== null; )
        e1(e, t, n), (e = e.sibling);
  }
  var ze = null,
    wt = !1;
  function en(e, t, n) {
    for (n = n.child; n !== null; ) fa(e, t, n), (n = n.sibling);
  }
  function fa(e, t, n) {
    if (Et && typeof Et.onCommitFiberUnmount == "function")
      try {
        Et.onCommitFiberUnmount(tl, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ze || Yn(n, t);
      case 6:
        var r = ze,
          l = wt;
        (ze = null),
          en(e, t, n),
          (ze = r),
          (wt = l),
          ze !== null &&
            (wt
              ? ((e = ze),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : ze.removeChild(n.stateNode));
        break;
      case 18:
        ze !== null &&
          (wt
            ? ((e = ze),
              (n = n.stateNode),
              e.nodeType === 8
                ? po(e.parentNode, n)
                : e.nodeType === 1 && po(e, n),
              Cr(e))
            : po(ze, n.stateNode));
        break;
      case 4:
        (r = ze),
          (l = wt),
          (ze = n.stateNode.containerInfo),
          (wt = !0),
          en(e, t, n),
          (ze = r),
          (wt = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ze &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var i = l,
              u = i.destroy;
            (i = i.tag),
              u !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && Jo(n, t, u),
              (l = l.next);
          } while (l !== r);
        }
        en(e, t, n);
        break;
      case 1:
        if (
          !Ze &&
          (Yn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (c) {
            ke(n, t, c);
          }
        en(e, t, n);
        break;
      case 21:
        en(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ze = (r = Ze) || n.memoizedState !== null), en(e, t, n), (Ze = r))
          : en(e, t, n);
        break;
      default:
        en(e, t, n);
    }
  }
  function da(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new lc()),
        t.forEach(function (r) {
          var l = hc.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function xt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var i = e,
            u = t,
            c = u;
          e: for (; c !== null; ) {
            switch (c.tag) {
              case 5:
                (ze = c.stateNode), (wt = !1);
                break e;
              case 3:
                (ze = c.stateNode.containerInfo), (wt = !0);
                break e;
              case 4:
                (ze = c.stateNode.containerInfo), (wt = !0);
                break e;
            }
            c = c.return;
          }
          if (ze === null) throw Error(s(160));
          fa(i, u, l), (ze = null), (wt = !1);
          var f = l.alternate;
          f !== null && (f.return = null), (l.return = null);
        } catch (C) {
          ke(l, t, C);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) pa(t, e), (t = t.sibling);
  }
  function pa(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((xt(t, e), Vt(e), r & 4)) {
          try {
            Zr(3, e, e.return), Bl(3, e);
          } catch (R) {
            ke(e, e.return, R);
          }
          try {
            Zr(5, e, e.return);
          } catch (R) {
            ke(e, e.return, R);
          }
        }
        break;
      case 1:
        xt(t, e), Vt(e), r & 512 && n !== null && Yn(n, n.return);
        break;
      case 5:
        if (
          (xt(t, e),
          Vt(e),
          r & 512 && n !== null && Yn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            sr(l, "");
          } catch (R) {
            ke(e, e.return, R);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            u = n !== null ? n.memoizedProps : i,
            c = e.type,
            f = e.updateQueue;
          if (((e.updateQueue = null), f !== null))
            try {
              c === "input" && i.type === "radio" && i.name != null && Z1(l, i),
                Hi(c, u);
              var C = Hi(c, i);
              for (u = 0; u < f.length; u += 2) {
                var S = f[u],
                  _ = f[u + 1];
                S === "style"
                  ? Y1(l, _)
                  : S === "dangerouslySetInnerHTML"
                    ? G1(l, _)
                    : S === "children"
                      ? sr(l, _)
                      : re(l, S, _, C);
              }
              switch (c) {
                case "input":
                  Ei(l, i);
                  break;
                case "textarea":
                  $1(l, i);
                  break;
                case "select":
                  var k = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var H = i.value;
                  H != null
                    ? Ln(l, !!i.multiple, H, !1)
                    : k !== !!i.multiple &&
                      (i.defaultValue != null
                        ? Ln(l, !!i.multiple, i.defaultValue, !0)
                        : Ln(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[Hr] = i;
            } catch (R) {
              ke(e, e.return, R);
            }
        }
        break;
      case 6:
        if ((xt(t, e), Vt(e), r & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (l = e.stateNode), (i = e.memoizedProps);
          try {
            l.nodeValue = i;
          } catch (R) {
            ke(e, e.return, R);
          }
        }
        break;
      case 3:
        if (
          (xt(t, e), Vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Cr(t.containerInfo);
          } catch (R) {
            ke(e, e.return, R);
          }
        break;
      case 4:
        xt(t, e), Vt(e);
        break;
      case 13:
        xt(t, e),
          Vt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (r1 = Se())),
          r & 4 && da(e);
        break;
      case 22:
        if (
          ((S = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ze = (C = Ze) || S), xt(t, e), (Ze = C)) : xt(t, e),
          Vt(e),
          r & 8192)
        ) {
          if (
            ((C = e.memoizedState !== null),
            (e.stateNode.isHidden = C) && !S && (e.mode & 1) !== 0)
          )
            for (P = e, S = e.child; S !== null; ) {
              for (_ = P = S; P !== null; ) {
                switch (((k = P), (H = k.child), k.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Zr(4, k, k.return);
                    break;
                  case 1:
                    Yn(k, k.return);
                    var F = k.stateNode;
                    if (typeof F.componentWillUnmount == "function") {
                      (r = k), (n = k.return);
                      try {
                        (t = r),
                          (F.props = t.memoizedProps),
                          (F.state = t.memoizedState),
                          F.componentWillUnmount();
                      } catch (R) {
                        ke(r, n, R);
                      }
                    }
                    break;
                  case 5:
                    Yn(k, k.return);
                    break;
                  case 22:
                    if (k.memoizedState !== null) {
                      va(_);
                      continue;
                    }
                }
                H !== null ? ((H.return = k), (P = H)) : va(_);
              }
              S = S.sibling;
            }
          e: for (S = null, _ = e; ; ) {
            if (_.tag === 5) {
              if (S === null) {
                S = _;
                try {
                  (l = _.stateNode),
                    C
                      ? ((i = l.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((c = _.stateNode),
                        (f = _.memoizedProps.style),
                        (u =
                          f != null && f.hasOwnProperty("display")
                            ? f.display
                            : null),
                        (c.style.display = K1("display", u)));
                } catch (R) {
                  ke(e, e.return, R);
                }
              }
            } else if (_.tag === 6) {
              if (S === null)
                try {
                  _.stateNode.nodeValue = C ? "" : _.memoizedProps;
                } catch (R) {
                  ke(e, e.return, R);
                }
            } else if (
              ((_.tag !== 22 && _.tag !== 23) ||
                _.memoizedState === null ||
                _ === e) &&
              _.child !== null
            ) {
              (_.child.return = _), (_ = _.child);
              continue;
            }
            if (_ === e) break e;
            for (; _.sibling === null; ) {
              if (_.return === null || _.return === e) break e;
              S === _ && (S = null), (_ = _.return);
            }
            S === _ && (S = null),
              (_.sibling.return = _.return),
              (_ = _.sibling);
          }
        }
        break;
      case 19:
        xt(t, e), Vt(e), r & 4 && da(e);
        break;
      case 21:
        break;
      default:
        xt(t, e), Vt(e);
    }
  }
  function Vt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (aa(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(s(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (sr(l, ""), (r.flags &= -33));
            var i = ca(e);
            e1(e, i, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo,
              c = ca(e);
            bo(e, c, u);
            break;
          default:
            throw Error(s(161));
        }
      } catch (f) {
        ke(e, e.return, f);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function oc(e, t, n) {
    (P = e), ha(e);
  }
  function ha(e, t, n) {
    for (var r = (e.mode & 1) !== 0; P !== null; ) {
      var l = P,
        i = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || Zl;
        if (!u) {
          var c = l.alternate,
            f = (c !== null && c.memoizedState !== null) || Ze;
          c = Zl;
          var C = Ze;
          if (((Zl = u), (Ze = f) && !C))
            for (P = l; P !== null; )
              (u = P),
                (f = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? ga(l)
                  : f !== null
                    ? ((f.return = u), (P = f))
                    : ga(l);
          for (; i !== null; ) (P = i), ha(i), (i = i.sibling);
          (P = l), (Zl = c), (Ze = C);
        }
        ma(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && i !== null
          ? ((i.return = l), (P = i))
          : ma(e);
    }
  }
  function ma(e) {
    for (; P !== null; ) {
      var t = P;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ze || Bl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ze)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : Ct(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var i = t.updateQueue;
                i !== null && vs(t, i, r);
                break;
              case 3:
                var u = t.updateQueue;
                if (u !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  vs(t, u, n);
                }
                break;
              case 5:
                var c = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = c;
                  var f = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      f.autoFocus && n.focus();
                      break;
                    case "img":
                      f.src && (n.src = f.src);
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
                if (t.memoizedState === null) {
                  var C = t.alternate;
                  if (C !== null) {
                    var S = C.memoizedState;
                    if (S !== null) {
                      var _ = S.dehydrated;
                      _ !== null && Cr(_);
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
                throw Error(s(163));
            }
          Ze || (t.flags & 512 && qo(t));
        } catch (k) {
          ke(t, t.return, k);
        }
      }
      if (t === e) {
        P = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (P = n);
        break;
      }
      P = t.return;
    }
  }
  function va(e) {
    for (; P !== null; ) {
      var t = P;
      if (t === e) {
        P = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (P = n);
        break;
      }
      P = t.return;
    }
  }
  function ga(e) {
    for (; P !== null; ) {
      var t = P;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Bl(4, t);
            } catch (f) {
              ke(t, n, f);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (f) {
                ke(t, l, f);
              }
            }
            var i = t.return;
            try {
              qo(t);
            } catch (f) {
              ke(t, i, f);
            }
            break;
          case 5:
            var u = t.return;
            try {
              qo(t);
            } catch (f) {
              ke(t, u, f);
            }
        }
      } catch (f) {
        ke(t, t.return, f);
      }
      if (t === e) {
        P = null;
        break;
      }
      var c = t.sibling;
      if (c !== null) {
        (c.return = t.return), (P = c);
        break;
      }
      P = t.return;
    }
  }
  var uc = Math.ceil,
    Ul = q.ReactCurrentDispatcher,
    t1 = q.ReactCurrentOwner,
    ft = q.ReactCurrentBatchConfig,
    oe = 0,
    Pe = null,
    Ee = null,
    Ie = 0,
    rt = 0,
    Xn = Yt(0),
    Ve = 0,
    Br = null,
    yn = 0,
    $l = 0,
    n1 = 0,
    Ur = null,
    Ye = null,
    r1 = 0,
    Jn = 1 / 0,
    At = null,
    Wl = !1,
    l1 = null,
    tn = null,
    Ql = !1,
    nn = null,
    Gl = 0,
    $r = 0,
    i1 = null,
    Kl = -1,
    Yl = 0;
  function We() {
    return (oe & 6) !== 0 ? Se() : Kl !== -1 ? Kl : (Kl = Se());
  }
  function rn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (oe & 2) !== 0 && Ie !== 0
        ? Ie & -Ie
        : $2.transition !== null
          ? (Yl === 0 && (Yl = cu()), Yl)
          : ((e = pe),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Cu(e.type))),
            e);
  }
  function kt(e, t, n, r) {
    if (50 < $r) throw (($r = 0), (i1 = null), Error(s(185)));
    hr(e, n, r),
      ((oe & 2) === 0 || e !== Pe) &&
        (e === Pe && ((oe & 2) === 0 && ($l |= n), Ve === 4 && ln(e, Ie)),
        Xe(e, r),
        n === 1 &&
          oe === 0 &&
          (t.mode & 1) === 0 &&
          ((Jn = Se() + 500), Sl && Jt()));
  }
  function Xe(e, t) {
    var n = e.callbackNode;
    $0(e, t);
    var r = ll(e, e === Pe ? Ie : 0);
    if (r === 0)
      n !== null && uu(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && uu(n), t === 1))
        e.tag === 0 ? U2(Ca.bind(null, e)) : ls(Ca.bind(null, e)),
          D2(function () {
            (oe & 6) === 0 && Jt();
          }),
          (n = null);
      else {
        switch (fu(r)) {
          case 1:
            n = Ti;
            break;
          case 4:
            n = su;
            break;
          case 16:
            n = el;
            break;
          case 536870912:
            n = au;
            break;
          default:
            n = el;
        }
        n = Ma(n, ya.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function ya(e, t) {
    if (((Kl = -1), (Yl = 0), (oe & 6) !== 0)) throw Error(s(327));
    var n = e.callbackNode;
    if (qn() && e.callbackNode !== n) return null;
    var r = ll(e, e === Pe ? Ie : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Xl(e, r);
    else {
      t = r;
      var l = oe;
      oe |= 2;
      var i = xa();
      (Pe !== e || Ie !== t) && ((At = null), (Jn = Se() + 500), wn(e, t));
      do
        try {
          cc();
          break;
        } catch (c) {
          wa(e, c);
        }
      while (!0);
      So(),
        (Ul.current = i),
        (oe = l),
        Ee !== null ? (t = 0) : ((Pe = null), (Ie = 0), (t = Ve));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Oi(e)), l !== 0 && ((r = l), (t = o1(e, l)))),
        t === 1)
      )
        throw ((n = Br), wn(e, 0), ln(e, r), Xe(e, Se()), n);
      if (t === 6) ln(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !sc(l) &&
            ((t = Xl(e, r)),
            t === 2 && ((i = Oi(e)), i !== 0 && ((r = i), (t = o1(e, i)))),
            t === 1))
        )
          throw ((n = Br), wn(e, 0), ln(e, r), Xe(e, Se()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            xn(e, Ye, At);
            break;
          case 3:
            if (
              (ln(e, r),
              (r & 130023424) === r && ((t = r1 + 500 - Se()), 10 < t))
            ) {
              if (ll(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                We(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = fo(xn.bind(null, e, Ye, At), t);
              break;
            }
            xn(e, Ye, At);
            break;
          case 4:
            if ((ln(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - vt(r);
              (i = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~i);
            }
            if (
              ((r = l),
              (r = Se() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * uc(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = fo(xn.bind(null, e, Ye, At), r);
              break;
            }
            xn(e, Ye, At);
            break;
          case 5:
            xn(e, Ye, At);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return Xe(e, Se()), e.callbackNode === n ? ya.bind(null, e) : null;
  }
  function o1(e, t) {
    var n = Ur;
    return (
      e.current.memoizedState.isDehydrated && (wn(e, t).flags |= 256),
      (e = Xl(e, t)),
      e !== 2 && ((t = Ye), (Ye = n), t !== null && u1(t)),
      e
    );
  }
  function u1(e) {
    Ye === null ? (Ye = e) : Ye.push.apply(Ye, e);
  }
  function sc(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!gt(i(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function ln(e, t) {
    for (
      t &= ~n1,
        t &= ~$l,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - vt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Ca(e) {
    if ((oe & 6) !== 0) throw Error(s(327));
    qn();
    var t = ll(e, 0);
    if ((t & 1) === 0) return Xe(e, Se()), null;
    var n = Xl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Oi(e);
      r !== 0 && ((t = r), (n = o1(e, r)));
    }
    if (n === 1) throw ((n = Br), wn(e, 0), ln(e, t), Xe(e, Se()), n);
    if (n === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      xn(e, Ye, At),
      Xe(e, Se()),
      null
    );
  }
  function s1(e, t) {
    var n = oe;
    oe |= 1;
    try {
      return e(t);
    } finally {
      (oe = n), oe === 0 && ((Jn = Se() + 500), Sl && Jt());
    }
  }
  function Cn(e) {
    nn !== null && nn.tag === 0 && (oe & 6) === 0 && qn();
    var t = oe;
    oe |= 1;
    var n = ft.transition,
      r = pe;
    try {
      if (((ft.transition = null), (pe = 1), e)) return e();
    } finally {
      (pe = r), (ft.transition = n), (oe = t), (oe & 6) === 0 && Jt();
    }
  }
  function a1() {
    (rt = Xn.current), ge(Xn);
  }
  function wn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), O2(n)), Ee !== null))
      for (n = Ee.return; n !== null; ) {
        var r = n;
        switch ((yo(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && xl();
            break;
          case 3:
            Gn(), ge(Qe), ge(Oe), Po();
            break;
          case 5:
            Vo(r);
            break;
          case 4:
            Gn();
            break;
          case 13:
            ge(we);
            break;
          case 19:
            ge(we);
            break;
          case 10:
            _o(r.type._context);
            break;
          case 22:
          case 23:
            a1();
        }
        n = n.return;
      }
    if (
      ((Pe = e),
      (Ee = e = on(e.current, null)),
      (Ie = rt = t),
      (Ve = 0),
      (Br = null),
      (n1 = $l = yn = 0),
      (Ye = Ur = null),
      mn !== null)
    ) {
      for (t = 0; t < mn.length; t++)
        if (((n = mn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var u = i.next;
            (i.next = l), (r.next = u);
          }
          n.pending = r;
        }
      mn = null;
    }
    return e;
  }
  function wa(e, t) {
    do {
      var n = Ee;
      try {
        if ((So(), (Nl.current = Tl), Rl)) {
          for (var r = xe.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          Rl = !1;
        }
        if (
          ((gn = 0),
          (He = Le = xe = null),
          (Ir = !1),
          (Tr = 0),
          (t1.current = null),
          n === null || n.return === null)
        ) {
          (Ve = 1), (Br = t), (Ee = null);
          break;
        }
        e: {
          var i = e,
            u = n.return,
            c = n,
            f = t;
          if (
            ((t = Ie),
            (c.flags |= 32768),
            f !== null && typeof f == "object" && typeof f.then == "function")
          ) {
            var C = f,
              S = c,
              _ = S.tag;
            if ((S.mode & 1) === 0 && (_ === 0 || _ === 11 || _ === 15)) {
              var k = S.alternate;
              k
                ? ((S.updateQueue = k.updateQueue),
                  (S.memoizedState = k.memoizedState),
                  (S.lanes = k.lanes))
                : ((S.updateQueue = null), (S.memoizedState = null));
            }
            var H = Ws(u);
            if (H !== null) {
              (H.flags &= -257),
                Qs(H, u, c, i, t),
                H.mode & 1 && $s(i, C, t),
                (t = H),
                (f = C);
              var F = t.updateQueue;
              if (F === null) {
                var R = new Set();
                R.add(f), (t.updateQueue = R);
              } else F.add(f);
              break e;
            } else {
              if ((t & 1) === 0) {
                $s(i, C, t), c1();
                break e;
              }
              f = Error(s(426));
            }
          } else if (Ce && c.mode & 1) {
            var _e = Ws(u);
            if (_e !== null) {
              (_e.flags & 65536) === 0 && (_e.flags |= 256),
                Qs(_e, u, c, i, t),
                xo(Kn(f, c));
              break e;
            }
          }
          (i = f = Kn(f, c)),
            Ve !== 4 && (Ve = 2),
            Ur === null ? (Ur = [i]) : Ur.push(i),
            (i = u);
          do {
            switch (i.tag) {
              case 3:
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var v = Bs(i, f, t);
                ms(i, v);
                break e;
              case 1:
                c = f;
                var h = i.type,
                  g = i.stateNode;
                if (
                  (i.flags & 128) === 0 &&
                  (typeof h.getDerivedStateFromError == "function" ||
                    (g !== null &&
                      typeof g.componentDidCatch == "function" &&
                      (tn === null || !tn.has(g))))
                ) {
                  (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                  var E = Us(i, c, t);
                  ms(i, E);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        Sa(n);
      } catch (z) {
        (t = z), Ee === n && n !== null && (Ee = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function xa() {
    var e = Ul.current;
    return (Ul.current = Tl), e === null ? Tl : e;
  }
  function c1() {
    (Ve === 0 || Ve === 3 || Ve === 2) && (Ve = 4),
      Pe === null ||
        ((yn & 268435455) === 0 && ($l & 268435455) === 0) ||
        ln(Pe, Ie);
  }
  function Xl(e, t) {
    var n = oe;
    oe |= 2;
    var r = xa();
    (Pe !== e || Ie !== t) && ((At = null), wn(e, t));
    do
      try {
        ac();
        break;
      } catch (l) {
        wa(e, l);
      }
    while (!0);
    if ((So(), (oe = n), (Ul.current = r), Ee !== null)) throw Error(s(261));
    return (Pe = null), (Ie = 0), Ve;
  }
  function ac() {
    for (; Ee !== null; ) ka(Ee);
  }
  function cc() {
    for (; Ee !== null && !z0(); ) ka(Ee);
  }
  function ka(e) {
    var t = ja(e.alternate, e, rt);
    (e.memoizedProps = e.pendingProps),
      t === null ? Sa(e) : (Ee = t),
      (t1.current = null);
  }
  function Sa(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = nc(n, t, rt)), n !== null)) {
          Ee = n;
          return;
        }
      } else {
        if (((n = rc(n, t)), n !== null)) {
          (n.flags &= 32767), (Ee = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Ve = 6), (Ee = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ee = t;
        return;
      }
      Ee = t = e;
    } while (t !== null);
    Ve === 0 && (Ve = 5);
  }
  function xn(e, t, n) {
    var r = pe,
      l = ft.transition;
    try {
      (ft.transition = null), (pe = 1), fc(e, t, n, r);
    } finally {
      (ft.transition = l), (pe = r);
    }
    return null;
  }
  function fc(e, t, n, r) {
    do qn();
    while (nn !== null);
    if ((oe & 6) !== 0) throw Error(s(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(s(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
      (W0(e, i),
      e === Pe && ((Ee = Pe = null), (Ie = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Ql ||
        ((Ql = !0),
        Ma(el, function () {
          return qn(), null;
        })),
      (i = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || i)
    ) {
      (i = ft.transition), (ft.transition = null);
      var u = pe;
      pe = 1;
      var c = oe;
      (oe |= 4),
        (t1.current = null),
        ic(e, n),
        pa(n, e),
        P2(ao),
        (ul = !!so),
        (ao = so = null),
        (e.current = n),
        oc(n),
        I0(),
        (oe = c),
        (pe = u),
        (ft.transition = i);
    } else e.current = n;
    if (
      (Ql && ((Ql = !1), (nn = e), (Gl = l)),
      (i = e.pendingLanes),
      i === 0 && (tn = null),
      D0(n.stateNode),
      Xe(e, Se()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Wl) throw ((Wl = !1), (e = l1), (l1 = null), e);
    return (
      (Gl & 1) !== 0 && e.tag !== 0 && qn(),
      (i = e.pendingLanes),
      (i & 1) !== 0 ? (e === i1 ? $r++ : (($r = 0), (i1 = e))) : ($r = 0),
      Jt(),
      null
    );
  }
  function qn() {
    if (nn !== null) {
      var e = fu(Gl),
        t = ft.transition,
        n = pe;
      try {
        if (((ft.transition = null), (pe = 16 > e ? 16 : e), nn === null))
          var r = !1;
        else {
          if (((e = nn), (nn = null), (Gl = 0), (oe & 6) !== 0))
            throw Error(s(331));
          var l = oe;
          for (oe |= 4, P = e.current; P !== null; ) {
            var i = P,
              u = i.child;
            if ((P.flags & 16) !== 0) {
              var c = i.deletions;
              if (c !== null) {
                for (var f = 0; f < c.length; f++) {
                  var C = c[f];
                  for (P = C; P !== null; ) {
                    var S = P;
                    switch (S.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Zr(8, S, i);
                    }
                    var _ = S.child;
                    if (_ !== null) (_.return = S), (P = _);
                    else
                      for (; P !== null; ) {
                        S = P;
                        var k = S.sibling,
                          H = S.return;
                        if ((sa(S), S === C)) {
                          P = null;
                          break;
                        }
                        if (k !== null) {
                          (k.return = H), (P = k);
                          break;
                        }
                        P = H;
                      }
                  }
                }
                var F = i.alternate;
                if (F !== null) {
                  var R = F.child;
                  if (R !== null) {
                    F.child = null;
                    do {
                      var _e = R.sibling;
                      (R.sibling = null), (R = _e);
                    } while (R !== null);
                  }
                }
                P = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && u !== null)
              (u.return = i), (P = u);
            else
              e: for (; P !== null; ) {
                if (((i = P), (i.flags & 2048) !== 0))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zr(9, i, i.return);
                  }
                var v = i.sibling;
                if (v !== null) {
                  (v.return = i.return), (P = v);
                  break e;
                }
                P = i.return;
              }
          }
          var h = e.current;
          for (P = h; P !== null; ) {
            u = P;
            var g = u.child;
            if ((u.subtreeFlags & 2064) !== 0 && g !== null)
              (g.return = u), (P = g);
            else
              e: for (u = h; P !== null; ) {
                if (((c = P), (c.flags & 2048) !== 0))
                  try {
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Bl(9, c);
                    }
                  } catch (z) {
                    ke(c, c.return, z);
                  }
                if (c === u) {
                  P = null;
                  break e;
                }
                var E = c.sibling;
                if (E !== null) {
                  (E.return = c.return), (P = E);
                  break e;
                }
                P = c.return;
              }
          }
          if (
            ((oe = l),
            Jt(),
            Et && typeof Et.onPostCommitFiberRoot == "function")
          )
            try {
              Et.onPostCommitFiberRoot(tl, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (pe = n), (ft.transition = t);
      }
    }
    return !1;
  }
  function _a(e, t, n) {
    (t = Kn(n, t)),
      (t = Bs(e, t, 1)),
      (e = bt(e, t, 1)),
      (t = We()),
      e !== null && (hr(e, 1, t), Xe(e, t));
  }
  function ke(e, t, n) {
    if (e.tag === 3) _a(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          _a(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (tn === null || !tn.has(r)))
          ) {
            (e = Kn(n, e)),
              (e = Us(t, e, 1)),
              (t = bt(t, e, 1)),
              (e = We()),
              t !== null && (hr(t, 1, e), Xe(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function dc(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = We()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Pe === e &&
        (Ie & n) === n &&
        (Ve === 4 || (Ve === 3 && (Ie & 130023424) === Ie && 500 > Se() - r1)
          ? wn(e, 0)
          : (n1 |= n)),
      Xe(e, t);
  }
  function Ea(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = rl), (rl <<= 1), (rl & 130023424) === 0 && (rl = 4194304)));
    var n = We();
    (e = Tt(e, t)), e !== null && (hr(e, t, n), Xe(e, n));
  }
  function pc(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Ea(e, n);
  }
  function hc(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    r !== null && r.delete(t), Ea(e, n);
  }
  var ja;
  ja = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Qe.current) Ke = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return (Ke = !1), tc(e, t, n);
        Ke = (e.flags & 131072) !== 0;
      }
    else (Ke = !1), Ce && (t.flags & 1048576) !== 0 && is(t, El, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Al(e, t), (e = t.pendingProps);
        var l = An(t, Oe.current);
        Qn(t, n), (l = Ro(null, t, r, e, l, n));
        var i = zo();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ge(r) ? ((i = !0), kl(t)) : (i = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Mo(t),
              (l.updater = Ol),
              (t.stateNode = l),
              (l._reactInternals = t),
              Zo(t, r, e, n),
              (t = Wo(null, t, r, !0, i, n)))
            : ((t.tag = 0), Ce && i && go(t), $e(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Al(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = vc(r)),
            (e = Ct(r, e)),
            l)
          ) {
            case 0:
              t = $o(null, t, r, e, n);
              break e;
            case 1:
              t = qs(null, t, r, e, n);
              break e;
            case 11:
              t = Gs(null, t, r, e, n);
              break e;
            case 14:
              t = Ks(null, t, r, Ct(r.type, e), n);
              break e;
          }
          throw Error(s(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Ct(r, l)),
          $o(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Ct(r, l)),
          qs(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((bs(t), e === null)) throw Error(s(387));
          (r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            hs(e, t),
            Pl(t, r, null, n);
          var u = t.memoizedState;
          if (((r = u.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              (l = Kn(Error(s(423)), t)), (t = ea(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = Kn(Error(s(424)), t)), (t = ea(e, t, r, n, l));
              break e;
            } else
              for (
                nt = Kt(t.stateNode.containerInfo.firstChild),
                  tt = t,
                  Ce = !0,
                  yt = null,
                  n = ds(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Un(), r === l)) {
              t = Dt(e, t, n);
              break e;
            }
            $e(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          gs(t),
          e === null && wo(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (u = l.children),
          co(r, l) ? (u = null) : i !== null && co(r, i) && (t.flags |= 32),
          Js(e, t),
          $e(e, t, u, n),
          t.child
        );
      case 6:
        return e === null && wo(t), null;
      case 13:
        return ta(e, t, n);
      case 4:
        return (
          Lo(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = $n(t, null, r, n)) : $e(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Ct(r, l)),
          Gs(e, t, r, l, n)
        );
      case 7:
        return $e(e, t, t.pendingProps, n), t.child;
      case 8:
        return $e(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return $e(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (u = l.value),
            me(Ll, r._currentValue),
            (r._currentValue = u),
            i !== null)
          )
            if (gt(i.value, u)) {
              if (i.children === l.children && !Qe.current) {
                t = Dt(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var c = i.dependencies;
                if (c !== null) {
                  u = i.child;
                  for (var f = c.firstContext; f !== null; ) {
                    if (f.context === r) {
                      if (i.tag === 1) {
                        (f = Ot(-1, n & -n)), (f.tag = 2);
                        var C = i.updateQueue;
                        if (C !== null) {
                          C = C.shared;
                          var S = C.pending;
                          S === null
                            ? (f.next = f)
                            : ((f.next = S.next), (S.next = f)),
                            (C.pending = f);
                        }
                      }
                      (i.lanes |= n),
                        (f = i.alternate),
                        f !== null && (f.lanes |= n),
                        Eo(i.return, n, t),
                        (c.lanes |= n);
                      break;
                    }
                    f = f.next;
                  }
                } else if (i.tag === 10) u = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((u = i.return), u === null)) throw Error(s(341));
                  (u.lanes |= n),
                    (c = u.alternate),
                    c !== null && (c.lanes |= n),
                    Eo(u, n, t),
                    (u = i.sibling);
                } else u = i.child;
                if (u !== null) u.return = i;
                else
                  for (u = i; u !== null; ) {
                    if (u === t) {
                      u = null;
                      break;
                    }
                    if (((i = u.sibling), i !== null)) {
                      (i.return = u.return), (u = i);
                      break;
                    }
                    u = u.return;
                  }
                i = u;
              }
          $e(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Qn(t, n),
          (l = at(l)),
          (r = r(l)),
          (t.flags |= 1),
          $e(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = Ct(r, t.pendingProps)),
          (l = Ct(r.type, l)),
          Ks(e, t, r, l, n)
        );
      case 15:
        return Ys(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Ct(r, l)),
          Al(e, t),
          (t.tag = 1),
          Ge(r) ? ((e = !0), kl(t)) : (e = !1),
          Qn(t, n),
          As(t, r, l),
          Zo(t, r, l, n),
          Wo(null, t, r, !0, e, n)
        );
      case 19:
        return ra(e, t, n);
      case 22:
        return Xs(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function Ma(e, t) {
    return ou(e, t);
  }
  function mc(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function dt(e, t, n, r) {
    return new mc(e, t, n, r);
  }
  function f1(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function vc(e) {
    if (typeof e == "function") return f1(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === it)) return 11;
      if (e === ot) return 14;
    }
    return 2;
  }
  function on(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = dt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Jl(e, t, n, r, l, i) {
    var u = 2;
    if (((r = e), typeof e == "function")) f1(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else
      e: switch (e) {
        case Z:
          return kn(n.children, l, i, t);
        case Me:
          (u = 8), (l |= 8);
          break;
        case qe:
          return (
            (e = dt(12, n, t, l | 2)), (e.elementType = qe), (e.lanes = i), e
          );
        case Ue:
          return (e = dt(13, n, t, l)), (e.elementType = Ue), (e.lanes = i), e;
        case be:
          return (e = dt(19, n, t, l)), (e.elementType = be), (e.lanes = i), e;
        case he:
          return ql(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ht:
                u = 10;
                break e;
              case Pt:
                u = 9;
                break e;
              case it:
                u = 11;
                break e;
              case ot:
                u = 14;
                break e;
              case Te:
                (u = 16), (r = null);
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = dt(u, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
    );
  }
  function kn(e, t, n, r) {
    return (e = dt(7, e, r, t)), (e.lanes = n), e;
  }
  function ql(e, t, n, r) {
    return (
      (e = dt(22, e, r, t)),
      (e.elementType = he),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function d1(e, t, n) {
    return (e = dt(6, e, null, t)), (e.lanes = n), e;
  }
  function p1(e, t, n) {
    return (
      (t = dt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function gc(e, t, n, r, l) {
    (this.tag = t),
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
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function h1(e, t, n, r, l, i, u, c, f) {
    return (
      (e = new gc(e, t, n, c, f)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = dt(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Mo(i),
      e
    );
  }
  function yc(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: G,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function La(e) {
    if (!e) return Xt;
    e = e._reactInternals;
    e: {
      if (cn(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ge(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ge(n)) return ns(e, n, t);
    }
    return t;
  }
  function Va(e, t, n, r, l, i, u, c, f) {
    return (
      (e = h1(n, r, !0, e, l, i, u, c, f)),
      (e.context = La(null)),
      (n = e.current),
      (r = We()),
      (l = rn(n)),
      (i = Ot(r, l)),
      (i.callback = t ?? null),
      bt(n, i, l),
      (e.current.lanes = l),
      hr(e, l, r),
      Xe(e, r),
      e
    );
  }
  function bl(e, t, n, r) {
    var l = t.current,
      i = We(),
      u = rn(l);
    return (
      (n = La(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Ot(i, u)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = bt(l, t, u)),
      e !== null && (kt(e, l, u, i), Hl(e, l, u)),
      u
    );
  }
  function ei(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ha(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function m1(e, t) {
    Ha(e, t), (e = e.alternate) && Ha(e, t);
  }
  function Cc() {
    return null;
  }
  var Pa =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function v1(e) {
    this._internalRoot = e;
  }
  (ti.prototype.render = v1.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      bl(e, t, null, null);
    }),
    (ti.prototype.unmount = v1.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Cn(function () {
            bl(null, e, null, null);
          }),
            (t[Nt] = null);
        }
      });
  function ti(e) {
    this._internalRoot = e;
  }
  ti.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = hu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Wt.length && t !== 0 && t < Wt[n].priority; n++);
      Wt.splice(n, 0, e), n === 0 && gu(e);
    }
  };
  function g1(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function ni(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Fa() {}
  function wc(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var C = ei(u);
          i.call(C);
        };
      }
      var u = Va(t, r, e, 0, null, !1, !1, "", Fa);
      return (
        (e._reactRootContainer = u),
        (e[Nt] = u.current),
        Lr(e.nodeType === 8 ? e.parentNode : e),
        Cn(),
        u
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var c = r;
      r = function () {
        var C = ei(f);
        c.call(C);
      };
    }
    var f = h1(e, 0, !1, null, null, !1, !1, "", Fa);
    return (
      (e._reactRootContainer = f),
      (e[Nt] = f.current),
      Lr(e.nodeType === 8 ? e.parentNode : e),
      Cn(function () {
        bl(t, f, n, r);
      }),
      f
    );
  }
  function ri(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var u = i;
      if (typeof l == "function") {
        var c = l;
        l = function () {
          var f = ei(u);
          c.call(f);
        };
      }
      bl(t, u, e, l);
    } else u = wc(n, t, e, l, r);
    return ei(u);
  }
  (du = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = pr(t.pendingLanes);
          n !== 0 &&
            (Ai(t, n | 1),
            Xe(t, Se()),
            (oe & 6) === 0 && ((Jn = Se() + 500), Jt()));
        }
        break;
      case 13:
        Cn(function () {
          var r = Tt(e, 1);
          if (r !== null) {
            var l = We();
            kt(r, e, 1, l);
          }
        }),
          m1(e, 1);
    }
  }),
    (Zi = function (e) {
      if (e.tag === 13) {
        var t = Tt(e, 134217728);
        if (t !== null) {
          var n = We();
          kt(t, e, 134217728, n);
        }
        m1(e, 134217728);
      }
    }),
    (pu = function (e) {
      if (e.tag === 13) {
        var t = rn(e),
          n = Tt(e, t);
        if (n !== null) {
          var r = We();
          kt(n, e, t, r);
        }
        m1(e, t);
      }
    }),
    (hu = function () {
      return pe;
    }),
    (mu = function (e, t) {
      var n = pe;
      try {
        return (pe = e), t();
      } finally {
        pe = n;
      }
    }),
    (Ni = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Ei(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = wl(r);
                if (!l) throw Error(s(90));
                mt(r), Ei(r, l);
              }
            }
          }
          break;
        case "textarea":
          $1(e, n);
          break;
        case "select":
          (t = n.value), t != null && Ln(e, !!n.multiple, t, !1);
      }
    }),
    (b1 = s1),
    (eu = Cn);
  var xc = { usingClientEntryPoint: !1, Events: [Pr, On, wl, J1, q1, s1] },
    Wr = {
      findFiberByHostInstance: fn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    kc = {
      bundleType: Wr.bundleType,
      version: Wr.version,
      rendererPackageName: Wr.rendererPackageName,
      rendererConfig: Wr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: q.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = lu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Wr.findFiberByHostInstance || Cc,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var li = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!li.isDisabled && li.supportsFiber)
      try {
        (tl = li.inject(kc)), (Et = li);
      } catch {}
  }
  return (
    (Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xc),
    (Je.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g1(t)) throw Error(s(200));
      return yc(e, t, null, n);
    }),
    (Je.createRoot = function (e, t) {
      if (!g1(e)) throw Error(s(299));
      var n = !1,
        r = "",
        l = Pa;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = h1(e, 1, !1, null, null, n, !1, r, l)),
        (e[Nt] = t.current),
        Lr(e.nodeType === 8 ? e.parentNode : e),
        new v1(t)
      );
    }),
    (Je.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(s(188))
          : ((e = Object.keys(e).join(",")), Error(s(268, e)));
      return (e = lu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Je.flushSync = function (e) {
      return Cn(e);
    }),
    (Je.hydrate = function (e, t, n) {
      if (!ni(t)) throw Error(s(200));
      return ri(null, e, t, !0, n);
    }),
    (Je.hydrateRoot = function (e, t, n) {
      if (!g1(e)) throw Error(s(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        u = Pa;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (t = Va(t, null, e, 1, n ?? null, l, !1, i, u)),
        (e[Nt] = t.current),
        Lr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new ti(t);
    }),
    (Je.render = function (e, t, n) {
      if (!ni(t)) throw Error(s(200));
      return ri(null, e, t, !1, n);
    }),
    (Je.unmountComponentAtNode = function (e) {
      if (!ni(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (Cn(function () {
            ri(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Nt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Je.unstable_batchedUpdates = s1),
    (Je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!ni(n)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return ri(e, t, n, !1, r);
    }),
    (Je.version = "18.3.1-next-f1338f8080-20240426"),
    Je
  );
}
var Aa;
function Pc() {
  if (Aa) return w1.exports;
  Aa = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (a) {
        console.error(a);
      }
  }
  return o(), (w1.exports = Hc()), w1.exports;
}
var Za;
function Fc() {
  if (Za) return ii;
  Za = 1;
  var o = Pc();
  return (ii.createRoot = o.createRoot), (ii.hydrateRoot = o.hydrateRoot), ii;
}
var Nc = Fc(),
  Be = function () {
    return (
      (Be =
        Object.assign ||
        function (a) {
          for (var s, d = 1, y = arguments.length; d < y; d++) {
            s = arguments[d];
            for (var w in s)
              Object.prototype.hasOwnProperty.call(s, w) && (a[w] = s[w]);
          }
          return a;
        }),
      Be.apply(this, arguments)
    );
  };
function pi(o, a, s) {
  if (s || arguments.length === 2)
    for (var d = 0, y = a.length, w; d < y; d++)
      (w || !(d in a)) &&
        (w || (w = Array.prototype.slice.call(a, 0, d)), (w[d] = a[d]));
  return o.concat(w || Array.prototype.slice.call(a));
}
var ye = "-ms-",
  Kr = "-moz-",
  de = "-webkit-",
  i0 = "comm",
  yi = "rule",
  z1 = "decl",
  Rc = "@import",
  o0 = "@keyframes",
  zc = "@layer",
  u0 = Math.abs,
  I1 = String.fromCharCode,
  M1 = Object.assign;
function Ic(o, a) {
  return Ne(o, 0) ^ 45
    ? (((((((a << 2) ^ Ne(o, 0)) << 2) ^ Ne(o, 1)) << 2) ^ Ne(o, 2)) << 2) ^
        Ne(o, 3)
    : 0;
}
function s0(o) {
  return o.trim();
}
function Zt(o, a) {
  return (o = a.exec(o)) ? o[0] : o;
}
function J(o, a, s) {
  return o.replace(a, s);
}
function si(o, a, s) {
  return o.indexOf(a, s);
}
function Ne(o, a) {
  return o.charCodeAt(a) | 0;
}
function nr(o, a, s) {
  return o.slice(a, s);
}
function Ht(o) {
  return o.length;
}
function a0(o) {
  return o.length;
}
function Gr(o, a) {
  return a.push(o), o;
}
function Tc(o, a) {
  return o.map(a).join("");
}
function Ba(o, a) {
  return o.filter(function (s) {
    return !Zt(s, a);
  });
}
var Ci = 1,
  rr = 1,
  c0 = 0,
  pt = 0,
  je = 0,
  or = "";
function wi(o, a, s, d, y, w, j, N) {
  return {
    value: o,
    root: a,
    parent: s,
    type: d,
    props: y,
    children: w,
    line: Ci,
    column: rr,
    length: j,
    return: "",
    siblings: N,
  };
}
function sn(o, a) {
  return M1(
    wi("", null, null, "", null, null, 0, o.siblings),
    o,
    { length: -o.length },
    a,
  );
}
function bn(o) {
  for (; o.root; ) o = sn(o.root, { children: [o] });
  Gr(o, o.siblings);
}
function Oc() {
  return je;
}
function Dc() {
  return (
    (je = pt > 0 ? Ne(or, --pt) : 0), rr--, je === 10 && ((rr = 1), Ci--), je
  );
}
function St() {
  return (
    (je = pt < c0 ? Ne(or, pt++) : 0), rr++, je === 10 && ((rr = 1), Ci++), je
  );
}
function _n() {
  return Ne(or, pt);
}
function ai() {
  return pt;
}
function xi(o, a) {
  return nr(or, o, a);
}
function L1(o) {
  switch (o) {
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
function Ac(o) {
  return (Ci = rr = 1), (c0 = Ht((or = o))), (pt = 0), [];
}
function Zc(o) {
  return (or = ""), o;
}
function S1(o) {
  return s0(xi(pt - 1, V1(o === 91 ? o + 2 : o === 40 ? o + 1 : o)));
}
function Bc(o) {
  for (; (je = _n()) && je < 33; ) St();
  return L1(o) > 2 || L1(je) > 3 ? "" : " ";
}
function Uc(o, a) {
  for (
    ;
    --a &&
    St() &&
    !(je < 48 || je > 102 || (je > 57 && je < 65) || (je > 70 && je < 97));

  );
  return xi(o, ai() + (a < 6 && _n() == 32 && St() == 32));
}
function V1(o) {
  for (; St(); )
    switch (je) {
      case o:
        return pt;
      case 34:
      case 39:
        o !== 34 && o !== 39 && V1(je);
        break;
      case 40:
        o === 41 && V1(o);
        break;
      case 92:
        St();
        break;
    }
  return pt;
}
function $c(o, a) {
  for (; St() && o + je !== 57; ) if (o + je === 84 && _n() === 47) break;
  return "/*" + xi(a, pt - 1) + "*" + I1(o === 47 ? o : St());
}
function Wc(o) {
  for (; !L1(_n()); ) St();
  return xi(o, pt);
}
function Qc(o) {
  return Zc(ci("", null, null, null, [""], (o = Ac(o)), 0, [0], o));
}
function ci(o, a, s, d, y, w, j, N, L) {
  for (
    var W = 0,
      U = 0,
      T = j,
      O = 0,
      Q = 0,
      ne = 0,
      $ = 1,
      Y = 1,
      fe = 1,
      ie = 0,
      re = "",
      q = y,
      ae = w,
      G = d,
      Z = re;
    Y;

  )
    switch (((ne = ie), (ie = St()))) {
      case 40:
        if (ne != 108 && Ne(Z, T - 1) == 58) {
          si((Z += J(S1(ie), "&", "&\f")), "&\f", u0(W ? N[W - 1] : 0)) != -1 &&
            (fe = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        Z += S1(ie);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        Z += Bc(ne);
        break;
      case 92:
        Z += Uc(ai() - 1, 7);
        continue;
      case 47:
        switch (_n()) {
          case 42:
          case 47:
            Gr(Gc($c(St(), ai()), a, s, L), L);
            break;
          default:
            Z += "/";
        }
        break;
      case 123 * $:
        N[W++] = Ht(Z) * fe;
      case 125 * $:
      case 59:
      case 0:
        switch (ie) {
          case 0:
          case 125:
            Y = 0;
          case 59 + U:
            fe == -1 && (Z = J(Z, /\f/g, "")),
              Q > 0 &&
                Ht(Z) - T &&
                Gr(
                  Q > 32
                    ? $a(Z + ";", d, s, T - 1, L)
                    : $a(J(Z, " ", "") + ";", d, s, T - 2, L),
                  L,
                );
            break;
          case 59:
            Z += ";";
          default:
            if (
              (Gr(
                (G = Ua(Z, a, s, W, U, y, N, re, (q = []), (ae = []), T, w)),
                w,
              ),
              ie === 123)
            )
              if (U === 0) ci(Z, a, G, G, q, w, T, N, ae);
              else
                switch (O === 99 && Ne(Z, 3) === 110 ? 100 : O) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ci(
                      o,
                      G,
                      G,
                      d &&
                        Gr(Ua(o, G, G, 0, 0, y, N, re, y, (q = []), T, ae), ae),
                      y,
                      ae,
                      T,
                      N,
                      d ? q : ae,
                    );
                    break;
                  default:
                    ci(Z, G, G, G, [""], ae, 0, N, ae);
                }
        }
        (W = U = Q = 0), ($ = fe = 1), (re = Z = ""), (T = j);
        break;
      case 58:
        (T = 1 + Ht(Z)), (Q = ne);
      default:
        if ($ < 1) {
          if (ie == 123) --$;
          else if (ie == 125 && $++ == 0 && Dc() == 125) continue;
        }
        switch (((Z += I1(ie)), ie * $)) {
          case 38:
            fe = U > 0 ? 1 : ((Z += "\f"), -1);
            break;
          case 44:
            (N[W++] = (Ht(Z) - 1) * fe), (fe = 1);
            break;
          case 64:
            _n() === 45 && (Z += S1(St())),
              (O = _n()),
              (U = T = Ht((re = Z += Wc(ai())))),
              ie++;
            break;
          case 45:
            ne === 45 && Ht(Z) == 2 && ($ = 0);
        }
    }
  return w;
}
function Ua(o, a, s, d, y, w, j, N, L, W, U, T) {
  for (
    var O = y - 1, Q = y === 0 ? w : [""], ne = a0(Q), $ = 0, Y = 0, fe = 0;
    $ < d;
    ++$
  )
    for (
      var ie = 0, re = nr(o, O + 1, (O = u0((Y = j[$])))), q = o;
      ie < ne;
      ++ie
    )
      (q = s0(Y > 0 ? Q[ie] + " " + re : J(re, /&\f/g, Q[ie]))) &&
        (L[fe++] = q);
  return wi(o, a, s, y === 0 ? yi : N, L, W, U, T);
}
function Gc(o, a, s, d) {
  return wi(o, a, s, i0, I1(Oc()), nr(o, 2, -2), 0, d);
}
function $a(o, a, s, d, y) {
  return wi(o, a, s, z1, nr(o, 0, d), nr(o, d + 1, -1), d, y);
}
function f0(o, a, s) {
  switch (Ic(o, a)) {
    case 5103:
      return de + "print-" + o + o;
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
      return de + o + o;
    case 4789:
      return Kr + o + o;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return de + o + Kr + o + ye + o + o;
    case 5936:
      switch (Ne(o, a + 11)) {
        case 114:
          return de + o + ye + J(o, /[svh]\w+-[tblr]{2}/, "tb") + o;
        case 108:
          return de + o + ye + J(o, /[svh]\w+-[tblr]{2}/, "tb-rl") + o;
        case 45:
          return de + o + ye + J(o, /[svh]\w+-[tblr]{2}/, "lr") + o;
      }
    case 6828:
    case 4268:
    case 2903:
      return de + o + ye + o + o;
    case 6165:
      return de + o + ye + "flex-" + o + o;
    case 5187:
      return (
        de + o + J(o, /(\w+).+(:[^]+)/, de + "box-$1$2" + ye + "flex-$1$2") + o
      );
    case 5443:
      return (
        de +
        o +
        ye +
        "flex-item-" +
        J(o, /flex-|-self/g, "") +
        (Zt(o, /flex-|baseline/)
          ? ""
          : ye + "grid-row-" + J(o, /flex-|-self/g, "")) +
        o
      );
    case 4675:
      return (
        de +
        o +
        ye +
        "flex-line-pack" +
        J(o, /align-content|flex-|-self/g, "") +
        o
      );
    case 5548:
      return de + o + ye + J(o, "shrink", "negative") + o;
    case 5292:
      return de + o + ye + J(o, "basis", "preferred-size") + o;
    case 6060:
      return (
        de +
        "box-" +
        J(o, "-grow", "") +
        de +
        o +
        ye +
        J(o, "grow", "positive") +
        o
      );
    case 4554:
      return de + J(o, /([^-])(transform)/g, "$1" + de + "$2") + o;
    case 6187:
      return (
        J(J(J(o, /(zoom-|grab)/, de + "$1"), /(image-set)/, de + "$1"), o, "") +
        o
      );
    case 5495:
    case 3959:
      return J(o, /(image-set\([^]*)/, de + "$1$`$1");
    case 4968:
      return (
        J(
          J(o, /(.+:)(flex-)?(.*)/, de + "box-pack:$3" + ye + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        de +
        o +
        o
      );
    case 4200:
      if (!Zt(o, /flex-|baseline/))
        return ye + "grid-column-align" + nr(o, a) + o;
      break;
    case 2592:
    case 3360:
      return ye + J(o, "template-", "") + o;
    case 4384:
    case 3616:
      return s &&
        s.some(function (d, y) {
          return (a = y), Zt(d.props, /grid-\w+-end/);
        })
        ? ~si(o + (s = s[a].value), "span", 0)
          ? o
          : ye +
            J(o, "-start", "") +
            o +
            ye +
            "grid-row-span:" +
            (~si(s, "span", 0) ? Zt(s, /\d+/) : +Zt(s, /\d+/) - +Zt(o, /\d+/)) +
            ";"
        : ye + J(o, "-start", "") + o;
    case 4896:
    case 4128:
      return s &&
        s.some(function (d) {
          return Zt(d.props, /grid-\w+-start/);
        })
        ? o
        : ye + J(J(o, "-end", "-span"), "span ", "") + o;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return J(o, /(.+)-inline(.+)/, de + "$1$2") + o;
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
      if (Ht(o) - 1 - a > 6)
        switch (Ne(o, a + 1)) {
          case 109:
            if (Ne(o, a + 4) !== 45) break;
          case 102:
            return (
              J(
                o,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  de +
                  "$2-$3$1" +
                  Kr +
                  (Ne(o, a + 3) == 108 ? "$3" : "$2-$3"),
              ) + o
            );
          case 115:
            return ~si(o, "stretch", 0)
              ? f0(J(o, "stretch", "fill-available"), a, s) + o
              : o;
        }
      break;
    case 5152:
    case 5920:
      return J(
        o,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (d, y, w, j, N, L, W) {
          return (
            ye +
            y +
            ":" +
            w +
            W +
            (j ? ye + y + "-span:" + (N ? L : +L - +w) + W : "") +
            o
          );
        },
      );
    case 4949:
      if (Ne(o, a + 6) === 121) return J(o, ":", ":" + de) + o;
      break;
    case 6444:
      switch (Ne(o, Ne(o, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            J(
              o,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                de +
                (Ne(o, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                de +
                "$2$3$1" +
                ye +
                "$2box$3",
            ) + o
          );
        case 100:
          return J(o, ":", ":" + ye) + o;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return J(o, "scroll-", "scroll-snap-") + o;
  }
  return o;
}
function hi(o, a) {
  for (var s = "", d = 0; d < o.length; d++) s += a(o[d], d, o, a) || "";
  return s;
}
function Kc(o, a, s, d) {
  switch (o.type) {
    case zc:
      if (o.children.length) break;
    case Rc:
    case z1:
      return (o.return = o.return || o.value);
    case i0:
      return "";
    case o0:
      return (o.return = o.value + "{" + hi(o.children, d) + "}");
    case yi:
      if (!Ht((o.value = o.props.join(",")))) return "";
  }
  return Ht((s = hi(o.children, d)))
    ? (o.return = o.value + "{" + s + "}")
    : "";
}
function Yc(o) {
  var a = a0(o);
  return function (s, d, y, w) {
    for (var j = "", N = 0; N < a; N++) j += o[N](s, d, y, w) || "";
    return j;
  };
}
function Xc(o) {
  return function (a) {
    a.root || ((a = a.return) && o(a));
  };
}
function Jc(o, a, s, d) {
  if (o.length > -1 && !o.return)
    switch (o.type) {
      case z1:
        o.return = f0(o.value, o.length, s);
        return;
      case o0:
        return hi([sn(o, { value: J(o.value, "@", "@" + de) })], d);
      case yi:
        if (o.length)
          return Tc((s = o.props), function (y) {
            switch (Zt(y, (d = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                bn(sn(o, { props: [J(y, /:(read-\w+)/, ":" + Kr + "$1")] })),
                  bn(sn(o, { props: [y] })),
                  M1(o, { props: Ba(s, d) });
                break;
              case "::placeholder":
                bn(
                  sn(o, { props: [J(y, /:(plac\w+)/, ":" + de + "input-$1")] }),
                ),
                  bn(sn(o, { props: [J(y, /:(plac\w+)/, ":" + Kr + "$1")] })),
                  bn(sn(o, { props: [J(y, /:(plac\w+)/, ye + "input-$1")] })),
                  bn(sn(o, { props: [y] })),
                  M1(o, { props: Ba(s, d) });
                break;
            }
            return "";
          });
    }
}
var qc = {
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
  lt = {},
  lr =
    (typeof process < "u" &&
      lt !== void 0 &&
      (lt.REACT_APP_SC_ATTR || lt.SC_ATTR)) ||
    "data-styled",
  d0 = "active",
  p0 = "data-styled-version",
  ki = "6.1.17",
  T1 = `/*!sc*/
`,
  mi = typeof window < "u" && "HTMLElement" in window,
  bc = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
        lt !== void 0 &&
        lt.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
        lt.REACT_APP_SC_DISABLE_SPEEDY !== ""
      ? lt.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
        lt.REACT_APP_SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        lt !== void 0 &&
        lt.SC_DISABLE_SPEEDY !== void 0 &&
        lt.SC_DISABLE_SPEEDY !== "" &&
        lt.SC_DISABLE_SPEEDY !== "false" &&
        lt.SC_DISABLE_SPEEDY),
  Si = Object.freeze([]),
  ir = Object.freeze({});
function e4(o, a, s) {
  return (
    s === void 0 && (s = ir), (o.theme !== s.theme && o.theme) || a || s.theme
  );
}
var h0 = new Set([
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
  t4 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  n4 = /(^-|-$)/g;
function Wa(o) {
  return o.replace(t4, "-").replace(n4, "");
}
var r4 = /(a)(d)/gi,
  oi = 52,
  Qa = function (o) {
    return String.fromCharCode(o + (o > 25 ? 39 : 97));
  };
function H1(o) {
  var a,
    s = "";
  for (a = Math.abs(o); a > oi; a = (a / oi) | 0) s = Qa(a % oi) + s;
  return (Qa(a % oi) + s).replace(r4, "$1-$2");
}
var _1,
  m0 = 5381,
  er = function (o, a) {
    for (var s = a.length; s; ) o = (33 * o) ^ a.charCodeAt(--s);
    return o;
  },
  v0 = function (o) {
    return er(m0, o);
  };
function l4(o) {
  return H1(v0(o) >>> 0);
}
function i4(o) {
  return o.displayName || o.name || "Component";
}
function E1(o) {
  return typeof o == "string" && !0;
}
var g0 = typeof Symbol == "function" && Symbol.for,
  y0 = g0 ? Symbol.for("react.memo") : 60115,
  o4 = g0 ? Symbol.for("react.forward_ref") : 60112,
  u4 = {
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
  s4 = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  C0 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  a4 =
    (((_1 = {})[o4] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (_1[y0] = C0),
    _1);
function Ga(o) {
  return ("type" in (a = o) && a.type.$$typeof) === y0
    ? C0
    : "$$typeof" in o
      ? a4[o.$$typeof]
      : u4;
  var a;
}
var c4 = Object.defineProperty,
  f4 = Object.getOwnPropertyNames,
  Ka = Object.getOwnPropertySymbols,
  d4 = Object.getOwnPropertyDescriptor,
  p4 = Object.getPrototypeOf,
  Ya = Object.prototype;
function w0(o, a, s) {
  if (typeof a != "string") {
    if (Ya) {
      var d = p4(a);
      d && d !== Ya && w0(o, d, s);
    }
    var y = f4(a);
    Ka && (y = y.concat(Ka(a)));
    for (var w = Ga(o), j = Ga(a), N = 0; N < y.length; ++N) {
      var L = y[N];
      if (!(L in s4 || (s && s[L]) || (j && L in j) || (w && L in w))) {
        var W = d4(a, L);
        try {
          c4(o, L, W);
        } catch {}
      }
    }
  }
  return o;
}
function jn(o) {
  return typeof o == "function";
}
function O1(o) {
  return typeof o == "object" && "styledComponentId" in o;
}
function Sn(o, a) {
  return o && a ? "".concat(o, " ").concat(a) : o || a || "";
}
function Xa(o, a) {
  if (o.length === 0) return "";
  for (var s = o[0], d = 1; d < o.length; d++) s += o[d];
  return s;
}
function Yr(o) {
  return (
    o !== null &&
    typeof o == "object" &&
    o.constructor.name === Object.name &&
    !("props" in o && o.$$typeof)
  );
}
function P1(o, a, s) {
  if ((s === void 0 && (s = !1), !s && !Yr(o) && !Array.isArray(o))) return a;
  if (Array.isArray(a))
    for (var d = 0; d < a.length; d++) o[d] = P1(o[d], a[d]);
  else if (Yr(a)) for (var d in a) o[d] = P1(o[d], a[d]);
  return o;
}
function D1(o, a) {
  Object.defineProperty(o, "toString", { value: a });
}
function Mn(o) {
  for (var a = [], s = 1; s < arguments.length; s++) a[s - 1] = arguments[s];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(o, " for more information.")
      .concat(a.length > 0 ? " Args: ".concat(a.join(", ")) : ""),
  );
}
var h4 = (function () {
    function o(a) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = a);
    }
    return (
      (o.prototype.indexOfGroup = function (a) {
        for (var s = 0, d = 0; d < a; d++) s += this.groupSizes[d];
        return s;
      }),
      (o.prototype.insertRules = function (a, s) {
        if (a >= this.groupSizes.length) {
          for (var d = this.groupSizes, y = d.length, w = y; a >= w; )
            if ((w <<= 1) < 0) throw Mn(16, "".concat(a));
          (this.groupSizes = new Uint32Array(w)),
            this.groupSizes.set(d),
            (this.length = w);
          for (var j = y; j < w; j++) this.groupSizes[j] = 0;
        }
        for (
          var N = this.indexOfGroup(a + 1), L = ((j = 0), s.length);
          j < L;
          j++
        )
          this.tag.insertRule(N, s[j]) && (this.groupSizes[a]++, N++);
      }),
      (o.prototype.clearGroup = function (a) {
        if (a < this.length) {
          var s = this.groupSizes[a],
            d = this.indexOfGroup(a),
            y = d + s;
          this.groupSizes[a] = 0;
          for (var w = d; w < y; w++) this.tag.deleteRule(d);
        }
      }),
      (o.prototype.getGroup = function (a) {
        var s = "";
        if (a >= this.length || this.groupSizes[a] === 0) return s;
        for (
          var d = this.groupSizes[a],
            y = this.indexOfGroup(a),
            w = y + d,
            j = y;
          j < w;
          j++
        )
          s += "".concat(this.tag.getRule(j)).concat(T1);
        return s;
      }),
      o
    );
  })(),
  fi = new Map(),
  vi = new Map(),
  di = 1,
  ui = function (o) {
    if (fi.has(o)) return fi.get(o);
    for (; vi.has(di); ) di++;
    var a = di++;
    return fi.set(o, a), vi.set(a, o), a;
  },
  m4 = function (o, a) {
    (di = a + 1), fi.set(o, a), vi.set(a, o);
  },
  v4 = "style[".concat(lr, "][").concat(p0, '="').concat(ki, '"]'),
  g4 = new RegExp(
    "^".concat(lr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  ),
  y4 = function (o, a, s) {
    for (var d, y = s.split(","), w = 0, j = y.length; w < j; w++)
      (d = y[w]) && o.registerName(a, d);
  },
  C4 = function (o, a) {
    for (
      var s,
        d = ((s = a.textContent) !== null && s !== void 0 ? s : "").split(T1),
        y = [],
        w = 0,
        j = d.length;
      w < j;
      w++
    ) {
      var N = d[w].trim();
      if (N) {
        var L = N.match(g4);
        if (L) {
          var W = 0 | parseInt(L[1], 10),
            U = L[2];
          W !== 0 && (m4(U, W), y4(o, U, L[3]), o.getTag().insertRules(W, y)),
            (y.length = 0);
        } else y.push(N);
      }
    }
  },
  Ja = function (o) {
    for (
      var a = document.querySelectorAll(v4), s = 0, d = a.length;
      s < d;
      s++
    ) {
      var y = a[s];
      y &&
        y.getAttribute(lr) !== d0 &&
        (C4(o, y), y.parentNode && y.parentNode.removeChild(y));
    }
  };
function w4() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var x0 = function (o) {
    var a = document.head,
      s = o || a,
      d = document.createElement("style"),
      y = (function (N) {
        var L = Array.from(N.querySelectorAll("style[".concat(lr, "]")));
        return L[L.length - 1];
      })(s),
      w = y !== void 0 ? y.nextSibling : null;
    d.setAttribute(lr, d0), d.setAttribute(p0, ki);
    var j = w4();
    return j && d.setAttribute("nonce", j), s.insertBefore(d, w), d;
  },
  x4 = (function () {
    function o(a) {
      (this.element = x0(a)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (s) {
          if (s.sheet) return s.sheet;
          for (var d = document.styleSheets, y = 0, w = d.length; y < w; y++) {
            var j = d[y];
            if (j.ownerNode === s) return j;
          }
          throw Mn(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (o.prototype.insertRule = function (a, s) {
        try {
          return this.sheet.insertRule(s, a), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (o.prototype.deleteRule = function (a) {
        this.sheet.deleteRule(a), this.length--;
      }),
      (o.prototype.getRule = function (a) {
        var s = this.sheet.cssRules[a];
        return s && s.cssText ? s.cssText : "";
      }),
      o
    );
  })(),
  k4 = (function () {
    function o(a) {
      (this.element = x0(a)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (o.prototype.insertRule = function (a, s) {
        if (a <= this.length && a >= 0) {
          var d = document.createTextNode(s);
          return (
            this.element.insertBefore(d, this.nodes[a] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (o.prototype.deleteRule = function (a) {
        this.element.removeChild(this.nodes[a]), this.length--;
      }),
      (o.prototype.getRule = function (a) {
        return a < this.length ? this.nodes[a].textContent : "";
      }),
      o
    );
  })(),
  S4 = (function () {
    function o(a) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (o.prototype.insertRule = function (a, s) {
        return (
          a <= this.length && (this.rules.splice(a, 0, s), this.length++, !0)
        );
      }),
      (o.prototype.deleteRule = function (a) {
        this.rules.splice(a, 1), this.length--;
      }),
      (o.prototype.getRule = function (a) {
        return a < this.length ? this.rules[a] : "";
      }),
      o
    );
  })(),
  qa = mi,
  _4 = { isServer: !mi, useCSSOMInjection: !bc },
  k0 = (function () {
    function o(a, s, d) {
      a === void 0 && (a = ir), s === void 0 && (s = {});
      var y = this;
      (this.options = Be(Be({}, _4), a)),
        (this.gs = s),
        (this.names = new Map(d)),
        (this.server = !!a.isServer),
        !this.server && mi && qa && ((qa = !1), Ja(this)),
        D1(this, function () {
          return (function (w) {
            for (
              var j = w.getTag(),
                N = j.length,
                L = "",
                W = function (T) {
                  var O = (function (fe) {
                    return vi.get(fe);
                  })(T);
                  if (O === void 0) return "continue";
                  var Q = w.names.get(O),
                    ne = j.getGroup(T);
                  if (Q === void 0 || !Q.size || ne.length === 0)
                    return "continue";
                  var $ = ""
                      .concat(lr, ".g")
                      .concat(T, '[id="')
                      .concat(O, '"]'),
                    Y = "";
                  Q !== void 0 &&
                    Q.forEach(function (fe) {
                      fe.length > 0 && (Y += "".concat(fe, ","));
                    }),
                    (L += ""
                      .concat(ne)
                      .concat($, '{content:"')
                      .concat(Y, '"}')
                      .concat(T1));
                },
                U = 0;
              U < N;
              U++
            )
              W(U);
            return L;
          })(y);
        });
    }
    return (
      (o.registerId = function (a) {
        return ui(a);
      }),
      (o.prototype.rehydrate = function () {
        !this.server && mi && Ja(this);
      }),
      (o.prototype.reconstructWithOptions = function (a, s) {
        return (
          s === void 0 && (s = !0),
          new o(
            Be(Be({}, this.options), a),
            this.gs,
            (s && this.names) || void 0,
          )
        );
      }),
      (o.prototype.allocateGSInstance = function (a) {
        return (this.gs[a] = (this.gs[a] || 0) + 1);
      }),
      (o.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((a = (function (s) {
              var d = s.useCSSOMInjection,
                y = s.target;
              return s.isServer ? new S4(y) : d ? new x4(y) : new k4(y);
            })(this.options)),
            new h4(a)))
        );
        var a;
      }),
      (o.prototype.hasNameForId = function (a, s) {
        return this.names.has(a) && this.names.get(a).has(s);
      }),
      (o.prototype.registerName = function (a, s) {
        if ((ui(a), this.names.has(a))) this.names.get(a).add(s);
        else {
          var d = new Set();
          d.add(s), this.names.set(a, d);
        }
      }),
      (o.prototype.insertRules = function (a, s, d) {
        this.registerName(a, s), this.getTag().insertRules(ui(a), d);
      }),
      (o.prototype.clearNames = function (a) {
        this.names.has(a) && this.names.get(a).clear();
      }),
      (o.prototype.clearRules = function (a) {
        this.getTag().clearGroup(ui(a)), this.clearNames(a);
      }),
      (o.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      o
    );
  })(),
  E4 = /&/g,
  j4 = /^\s*\/\/.*$/gm;
function S0(o, a) {
  return o.map(function (s) {
    return (
      s.type === "rule" &&
        ((s.value = "".concat(a, " ").concat(s.value)),
        (s.value = s.value.replaceAll(",", ",".concat(a, " "))),
        (s.props = s.props.map(function (d) {
          return "".concat(a, " ").concat(d);
        }))),
      Array.isArray(s.children) &&
        s.type !== "@keyframes" &&
        (s.children = S0(s.children, a)),
      s
    );
  });
}
function M4(o) {
  var a,
    s,
    d,
    y = ir,
    w = y.options,
    j = w === void 0 ? ir : w,
    N = y.plugins,
    L = N === void 0 ? Si : N,
    W = function (O, Q, ne) {
      return ne.startsWith(s) &&
        ne.endsWith(s) &&
        ne.replaceAll(s, "").length > 0
        ? ".".concat(a)
        : O;
    },
    U = L.slice();
  U.push(function (O) {
    O.type === yi &&
      O.value.includes("&") &&
      (O.props[0] = O.props[0].replace(E4, s).replace(d, W));
  }),
    j.prefix && U.push(Jc),
    U.push(Kc);
  var T = function (O, Q, ne, $) {
    Q === void 0 && (Q = ""),
      ne === void 0 && (ne = ""),
      $ === void 0 && ($ = "&"),
      (a = $),
      (s = Q),
      (d = new RegExp("\\".concat(s, "\\b"), "g"));
    var Y = O.replace(j4, ""),
      fe = Qc(
        ne || Q ? "".concat(ne, " ").concat(Q, " { ").concat(Y, " }") : Y,
      );
    j.namespace && (fe = S0(fe, j.namespace));
    var ie = [];
    return (
      hi(
        fe,
        Yc(
          U.concat(
            Xc(function (re) {
              return ie.push(re);
            }),
          ),
        ),
      ),
      ie
    );
  };
  return (
    (T.hash = L.length
      ? L.reduce(function (O, Q) {
          return Q.name || Mn(15), er(O, Q.name);
        }, m0).toString()
      : ""),
    T
  );
}
var L4 = new k0(),
  F1 = M4(),
  _0 = an.createContext({
    shouldForwardProp: void 0,
    styleSheet: L4,
    stylis: F1,
  });
_0.Consumer;
an.createContext(void 0);
function ba() {
  return tr.useContext(_0);
}
var V4 = (function () {
    function o(a, s) {
      var d = this;
      (this.inject = function (y, w) {
        w === void 0 && (w = F1);
        var j = d.name + w.hash;
        y.hasNameForId(d.id, j) ||
          y.insertRules(d.id, j, w(d.rules, j, "@keyframes"));
      }),
        (this.name = a),
        (this.id = "sc-keyframes-".concat(a)),
        (this.rules = s),
        D1(this, function () {
          throw Mn(12, String(d.name));
        });
    }
    return (
      (o.prototype.getName = function (a) {
        return a === void 0 && (a = F1), this.name + a.hash;
      }),
      o
    );
  })(),
  H4 = function (o) {
    return o >= "A" && o <= "Z";
  };
function e0(o) {
  for (var a = "", s = 0; s < o.length; s++) {
    var d = o[s];
    if (s === 1 && d === "-" && o[0] === "-") return o;
    H4(d) ? (a += "-" + d.toLowerCase()) : (a += d);
  }
  return a.startsWith("ms-") ? "-" + a : a;
}
var E0 = function (o) {
    return o == null || o === !1 || o === "";
  },
  j0 = function (o) {
    var a,
      s,
      d = [];
    for (var y in o) {
      var w = o[y];
      o.hasOwnProperty(y) &&
        !E0(w) &&
        ((Array.isArray(w) && w.isCss) || jn(w)
          ? d.push("".concat(e0(y), ":"), w, ";")
          : Yr(w)
            ? d.push.apply(
                d,
                pi(pi(["".concat(y, " {")], j0(w), !1), ["}"], !1),
              )
            : d.push(
                ""
                  .concat(e0(y), ": ")
                  .concat(
                    ((a = y),
                    (s = w) == null || typeof s == "boolean" || s === ""
                      ? ""
                      : typeof s != "number" ||
                          s === 0 ||
                          a in qc ||
                          a.startsWith("--")
                        ? String(s).trim()
                        : "".concat(s, "px")),
                    ";",
                  ),
              ));
    }
    return d;
  };
function En(o, a, s, d) {
  if (E0(o)) return [];
  if (O1(o)) return [".".concat(o.styledComponentId)];
  if (jn(o)) {
    if (!jn((w = o)) || (w.prototype && w.prototype.isReactComponent) || !a)
      return [o];
    var y = o(a);
    return En(y, a, s, d);
  }
  var w;
  return o instanceof V4
    ? s
      ? (o.inject(s, d), [o.getName(d)])
      : [o]
    : Yr(o)
      ? j0(o)
      : Array.isArray(o)
        ? Array.prototype.concat.apply(
            Si,
            o.map(function (j) {
              return En(j, a, s, d);
            }),
          )
        : [o.toString()];
}
function P4(o) {
  for (var a = 0; a < o.length; a += 1) {
    var s = o[a];
    if (jn(s) && !O1(s)) return !1;
  }
  return !0;
}
var F4 = v0(ki),
  N4 = (function () {
    function o(a, s, d) {
      (this.rules = a),
        (this.staticRulesId = ""),
        (this.isStatic = (d === void 0 || d.isStatic) && P4(a)),
        (this.componentId = s),
        (this.baseHash = er(F4, s)),
        (this.baseStyle = d),
        k0.registerId(s);
    }
    return (
      (o.prototype.generateAndInjectStyles = function (a, s, d) {
        var y = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(a, s, d)
          : "";
        if (this.isStatic && !d.hash)
          if (
            this.staticRulesId &&
            s.hasNameForId(this.componentId, this.staticRulesId)
          )
            y = Sn(y, this.staticRulesId);
          else {
            var w = Xa(En(this.rules, a, s, d)),
              j = H1(er(this.baseHash, w) >>> 0);
            if (!s.hasNameForId(this.componentId, j)) {
              var N = d(w, ".".concat(j), void 0, this.componentId);
              s.insertRules(this.componentId, j, N);
            }
            (y = Sn(y, j)), (this.staticRulesId = j);
          }
        else {
          for (
            var L = er(this.baseHash, d.hash), W = "", U = 0;
            U < this.rules.length;
            U++
          ) {
            var T = this.rules[U];
            if (typeof T == "string") W += T;
            else if (T) {
              var O = Xa(En(T, a, s, d));
              (L = er(L, O + U)), (W += O);
            }
          }
          if (W) {
            var Q = H1(L >>> 0);
            s.hasNameForId(this.componentId, Q) ||
              s.insertRules(
                this.componentId,
                Q,
                d(W, ".".concat(Q), void 0, this.componentId),
              ),
              (y = Sn(y, Q));
          }
        }
        return y;
      }),
      o
    );
  })(),
  gi = an.createContext(void 0);
gi.Consumer;
function R4(o) {
  var a = an.useContext(gi),
    s = tr.useMemo(
      function () {
        return (function (d, y) {
          if (!d) throw Mn(14);
          if (jn(d)) {
            var w = d(y);
            return w;
          }
          if (Array.isArray(d) || typeof d != "object") throw Mn(8);
          return y ? Be(Be({}, y), d) : d;
        })(o.theme, a);
      },
      [o.theme, a],
    );
  return o.children
    ? an.createElement(gi.Provider, { value: s }, o.children)
    : null;
}
var j1 = {};
function z4(o, a, s) {
  var d = O1(o),
    y = o,
    w = !E1(o),
    j = a.attrs,
    N = j === void 0 ? Si : j,
    L = a.componentId,
    W =
      L === void 0
        ? (function (q, ae) {
            var G = typeof q != "string" ? "sc" : Wa(q);
            j1[G] = (j1[G] || 0) + 1;
            var Z = "".concat(G, "-").concat(l4(ki + G + j1[G]));
            return ae ? "".concat(ae, "-").concat(Z) : Z;
          })(a.displayName, a.parentComponentId)
        : L,
    U = a.displayName,
    T =
      U === void 0
        ? (function (q) {
            return E1(q) ? "styled.".concat(q) : "Styled(".concat(i4(q), ")");
          })(o)
        : U,
    O =
      a.displayName && a.componentId
        ? "".concat(Wa(a.displayName), "-").concat(a.componentId)
        : a.componentId || W,
    Q = d && y.attrs ? y.attrs.concat(N).filter(Boolean) : N,
    ne = a.shouldForwardProp;
  if (d && y.shouldForwardProp) {
    var $ = y.shouldForwardProp;
    if (a.shouldForwardProp) {
      var Y = a.shouldForwardProp;
      ne = function (q, ae) {
        return $(q, ae) && Y(q, ae);
      };
    } else ne = $;
  }
  var fe = new N4(s, O, d ? y.componentStyle : void 0);
  function ie(q, ae) {
    return (function (G, Z, Me) {
      var qe = G.attrs,
        ht = G.componentStyle,
        Pt = G.defaultProps,
        it = G.foldedComponentIds,
        Ue = G.styledComponentId,
        be = G.target,
        ot = an.useContext(gi),
        Te = ba(),
        he = G.shouldForwardProp || Te.shouldForwardProp,
        M = e4(Z, ot, Pt) || ir,
        I = (function (te, b, ce) {
          for (
            var le,
              ue = Be(Be({}, b), { className: void 0, theme: ce }),
              Re = 0;
            Re < te.length;
            Re += 1
          ) {
            var Ft = jn((le = te[Re])) ? le(ue) : le;
            for (var mt in Ft)
              ue[mt] =
                mt === "className"
                  ? Sn(ue[mt], Ft[mt])
                  : mt === "style"
                    ? Be(Be({}, ue[mt]), Ft[mt])
                    : Ft[mt];
          }
          return (
            b.className && (ue.className = Sn(ue.className, b.className)), ue
          );
        })(qe, Z, M),
        V = I.as || be,
        m = {};
      for (var x in I)
        I[x] === void 0 ||
          x[0] === "$" ||
          x === "as" ||
          (x === "theme" && I.theme === M) ||
          (x === "forwardedAs"
            ? (m.as = I.forwardedAs)
            : (he && !he(x, V)) || (m[x] = I[x]));
      var K = (function (te, b) {
          var ce = ba(),
            le = te.generateAndInjectStyles(b, ce.styleSheet, ce.stylis);
          return le;
        })(ht, I),
        X = Sn(it, Ue);
      return (
        K && (X += " " + K),
        I.className && (X += " " + I.className),
        (m[E1(V) && !h0.has(V) ? "class" : "className"] = X),
        Me && (m.ref = Me),
        tr.createElement(V, m)
      );
    })(re, q, ae);
  }
  ie.displayName = T;
  var re = an.forwardRef(ie);
  return (
    (re.attrs = Q),
    (re.componentStyle = fe),
    (re.displayName = T),
    (re.shouldForwardProp = ne),
    (re.foldedComponentIds = d
      ? Sn(y.foldedComponentIds, y.styledComponentId)
      : ""),
    (re.styledComponentId = O),
    (re.target = d ? y.target : o),
    Object.defineProperty(re, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (q) {
        this._foldedDefaultProps = d
          ? (function (ae) {
              for (var G = [], Z = 1; Z < arguments.length; Z++)
                G[Z - 1] = arguments[Z];
              for (var Me = 0, qe = G; Me < qe.length; Me++) P1(ae, qe[Me], !0);
              return ae;
            })({}, y.defaultProps, q)
          : q;
      },
    }),
    D1(re, function () {
      return ".".concat(re.styledComponentId);
    }),
    w &&
      w0(re, o, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    re
  );
}
function t0(o, a) {
  for (var s = [o[0]], d = 0, y = a.length; d < y; d += 1)
    s.push(a[d], o[d + 1]);
  return s;
}
var n0 = function (o) {
  return Object.assign(o, { isCss: !0 });
};
function I4(o) {
  for (var a = [], s = 1; s < arguments.length; s++) a[s - 1] = arguments[s];
  if (jn(o) || Yr(o)) return n0(En(t0(Si, pi([o], a, !0))));
  var d = o;
  return a.length === 0 && d.length === 1 && typeof d[0] == "string"
    ? En(d)
    : n0(En(t0(d, a)));
}
function N1(o, a, s) {
  if ((s === void 0 && (s = ir), !a)) throw Mn(1, a);
  var d = function (y) {
    for (var w = [], j = 1; j < arguments.length; j++) w[j - 1] = arguments[j];
    return o(a, s, I4.apply(void 0, pi([y], w, !1)));
  };
  return (
    (d.attrs = function (y) {
      return N1(
        o,
        a,
        Be(Be({}, s), {
          attrs: Array.prototype.concat(s.attrs, y).filter(Boolean),
        }),
      );
    }),
    (d.withConfig = function (y) {
      return N1(o, a, Be(Be({}, s), y));
    }),
    d
  );
}
var M0 = function (o) {
    return N1(z4, o);
  },
  _t = M0;
h0.forEach(function (o) {
  _t[o] = M0(o);
});
const T4 = () =>
    p.jsxs("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        p.jsx("foreignObject", {
          x: "-3.73842",
          y: "-0.47145",
          width: "21.6779",
          height: "20.2168",
          children: p.jsx("div", {
            style: {
              backdropFilter: "blur(3.68px)",
              clipPath: "url(#bgblur_0_9452_35062_clip_path)",
              height: "100%",
              width: "100%",
            },
          }),
        }),
        p.jsx("g", {
          filter: "url(#filter0_i_9452_35062)",
          "data-figma-bg-blur-radius": "7.3694",
          children: p.jsx("path", {
            d: "M3.67898 11.5003L4.9162 9.42472C5.96476 7.66563 7.89812 6.69481 9.87689 6.93377C10.4213 6.99951 10.7339 7.61093 10.4813 8.11611L8.49356 12.0919C8.36469 12.3497 8.05931 12.4506 7.8107 12.3176C7.01131 11.8899 6.10616 11.7231 5.21389 11.8389L3.98654 11.9982C3.72332 12.0324 3.53935 11.7346 3.67898 11.5003Z",
            fill: "url(#paint0_linear_9452_35062)",
          }),
        }),
        p.jsx("foreignObject", {
          x: "4.29637",
          y: "5.73753",
          width: "20.2171",
          height: "22.043",
          children: p.jsx("div", {
            style: {
              backdropFilter: "blur(3.68px)",
              clipPath: "url(#bgblur_1_9452_35062_clip_path)",
              height: "100%",
              width: "100%",
            },
          }),
        }),
        p.jsx("g", {
          filter: "url(#filter1_i_9452_35062)",
          "data-figma-bg-blur-radius": "7.3694",
          children: p.jsx("path", {
            d: "M12.5416 20.3608L14.6173 19.0584C16.3764 17.9547 17.3472 15.9196 17.1082 13.8366C17.0425 13.2636 16.4311 12.9345 15.9259 13.2004L11.9501 15.2928C11.6923 15.4284 11.5914 15.7499 11.7244 16.0116C12.1521 16.853 12.3189 17.8058 12.2031 18.7451L12.0438 20.037C12.0096 20.3141 12.3074 20.5077 12.5416 20.3608Z",
            fill: "url(#paint1_linear_9452_35062)",
          }),
        }),
        p.jsx("foreignObject", {
          x: "0.135118",
          y: "-3.69459",
          width: "27.6078",
          height: "27.6016",
          children: p.jsx("div", {
            style: {
              backdropFilter: "blur(3.68px)",
              clipPath: "url(#bgblur_2_9452_35062_clip_path)",
              height: "100%",
              width: "100%",
            },
          }),
        }),
        p.jsxs("g", {
          filter: "url(#filter2_i_9452_35062)",
          "data-figma-bg-blur-radius": "7.3694",
          children: [
            p.jsx("path", {
              d: "M16.6235 13.699C13.4328 16.8782 10.7829 17.3455 8.73864 15.3086C6.6944 13.2718 7.16132 10.6335 10.352 7.45433C13.5427 4.27516 17.8593 3.22446 20.2442 3.84462C20.751 6.10573 19.8142 10.5199 16.6235 13.699Z",
              fill: "#F1F1F1",
              "fill-opacity": "0.1",
            }),
            p.jsx("path", {
              d: "M16.6235 13.699C13.4328 16.8782 10.7829 17.3455 8.73864 15.3086C6.6944 13.2718 7.16132 10.6335 10.352 7.45433C13.5427 4.27516 17.8593 3.22446 20.2442 3.84462C20.751 6.10573 19.8142 10.5199 16.6235 13.699Z",
              fill: "url(#paint2_linear_9452_35062)",
              "fill-opacity": "0.2",
            }),
            p.jsx("path", {
              d: "M16.4823 13.5573C14.8989 15.135 13.473 16.0151 12.2125 16.2636C10.9678 16.509 9.85997 16.1436 8.8798 15.167C7.89957 14.1903 7.53282 13.0875 7.77841 11.8487C8.02722 10.5938 8.90969 9.17379 10.4932 7.59601C12.0648 6.03012 13.9139 4.98832 15.6626 4.41476C17.3551 3.85965 18.9374 3.74808 20.0743 4.00893C20.2845 5.09296 20.172 6.66956 19.6299 8.3667C19.0686 10.1239 18.0521 11.9932 16.4823 13.5573Z",
              stroke: "#F1F1F1",
              "stroke-opacity": "0.1",
              "stroke-width": "0.4",
            }),
            p.jsx("path", {
              d: "M16.4823 13.5573C14.8989 15.135 13.473 16.0151 12.2125 16.2636C10.9678 16.509 9.85997 16.1436 8.8798 15.167C7.89957 14.1903 7.53282 13.0875 7.77841 11.8487C8.02722 10.5938 8.90969 9.17379 10.4932 7.59601C12.0648 6.03012 13.9139 4.98832 15.6626 4.41476C17.3551 3.85965 18.9374 3.74808 20.0743 4.00893C20.2845 5.09296 20.172 6.66956 19.6299 8.3667C19.0686 10.1239 18.0521 11.9932 16.4823 13.5573Z",
              stroke: "url(#paint3_linear_9452_35062)",
              "stroke-opacity": "0.2",
              "stroke-width": "0.4",
            }),
          ],
        }),
        p.jsx("foreignObject", {
          x: "-1.97499",
          y: "6.468",
          width: "19.4973",
          height: "19.4326",
          children: p.jsx("div", {
            style: {
              backdropFilter: "blur(3.68px)",
              clipPath: "url(#bgblur_3_9452_35062_clip_path)",
              height: "100%",
              width: "100%",
            },
          }),
        }),
        p.jsx("g", {
          filter: "url(#filter3_i_9452_35062)",
          "data-figma-bg-blur-radius": "7.3694",
          children: p.jsx("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M6.98609 14.3339C6.8924 14.0653 6.70973 13.7393 6.45477 13.8655C6.41747 13.884 6.3825 13.9088 6.35144 13.9398L5.51036 14.7809C5.25508 15.0362 5.45096 15.4716 5.81133 15.45L6.22472 15.4252C6.51538 15.4077 6.72312 15.7018 6.60951 15.9699L5.92931 17.5751C5.7947 17.8928 6.10617 18.2171 6.429 18.0954L8.10417 17.4637C8.37896 17.3601 8.66599 17.584 8.63237 17.8758L8.60737 18.0927C8.56482 18.462 9.01176 18.6779 9.27459 18.4151L10.0506 17.639C10.0817 17.608 10.1065 17.573 10.1249 17.5357C10.2512 17.2807 9.92516 17.0981 9.65652 17.0044C9.11182 16.8144 8.54222 16.4565 8.03809 15.9524C7.53395 15.4482 7.17604 14.8786 6.98609 14.3339Z",
            fill: "url(#paint4_linear_9452_35062)",
          }),
        }),
        p.jsx("circle", {
          cx: "15.7079",
          cy: "8.33403",
          r: "1.6",
          transform: "rotate(45 15.7079 8.33403)",
          fill: "white",
        }),
        p.jsxs("defs", {
          children: [
            p.jsxs("filter", {
              id: "filter0_i_9452_35062",
              x: "-3.73842",
              y: "-0.47145",
              width: "21.6779",
              height: "20.2168",
              filterUnits: "userSpaceOnUse",
              "color-interpolation-filters": "sRGB",
              children: [
                p.jsx("feFlood", {
                  "flood-opacity": "0",
                  result: "BackgroundImageFix",
                }),
                p.jsx("feBlend", {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "BackgroundImageFix",
                  result: "shape",
                }),
                p.jsx("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha",
                }),
                p.jsx("feOffset", { dy: "2.45647" }),
                p.jsx("feGaussianBlur", { stdDeviation: "10.55" }),
                p.jsx("feComposite", {
                  in2: "hardAlpha",
                  operator: "arithmetic",
                  k2: "-1",
                  k3: "1",
                }),
                p.jsx("feColorMatrix", {
                  type: "matrix",
                  values:
                    "0 0 0 0 0.341176 0 0 0 0 0.643137 0 0 0 0 1 0 0 0 0.4 0",
                }),
                p.jsx("feBlend", {
                  mode: "normal",
                  in2: "shape",
                  result: "effect1_innerShadow_9452_35062",
                }),
              ],
            }),
            p.jsx("clipPath", {
              id: "bgblur_0_9452_35062_clip_path",
              children: p.jsx("path", {
                transform: "translate(3.73842 0.47145)",
                d: "M3.67898 11.5003L4.9162 9.42472C5.96476 7.66563 7.89812 6.69481 9.87689 6.93377C10.4213 6.99951 10.7339 7.61093 10.4813 8.11611L8.49356 12.0919C8.36469 12.3497 8.05931 12.4506 7.8107 12.3176C7.01131 11.8899 6.10616 11.7231 5.21389 11.8389L3.98654 11.9982C3.72332 12.0324 3.53935 11.7346 3.67898 11.5003Z",
              }),
            }),
            p.jsxs("filter", {
              id: "filter1_i_9452_35062",
              x: "4.29637",
              y: "5.73753",
              width: "20.2171",
              height: "22.043",
              filterUnits: "userSpaceOnUse",
              "color-interpolation-filters": "sRGB",
              children: [
                p.jsx("feFlood", {
                  "flood-opacity": "0",
                  result: "BackgroundImageFix",
                }),
                p.jsx("feBlend", {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "BackgroundImageFix",
                  result: "shape",
                }),
                p.jsx("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha",
                }),
                p.jsx("feOffset", { dy: "2.45647" }),
                p.jsx("feGaussianBlur", { stdDeviation: "10.55" }),
                p.jsx("feComposite", {
                  in2: "hardAlpha",
                  operator: "arithmetic",
                  k2: "-1",
                  k3: "1",
                }),
                p.jsx("feColorMatrix", {
                  type: "matrix",
                  values:
                    "0 0 0 0 0.341176 0 0 0 0 0.643137 0 0 0 0 1 0 0 0 0.4 0",
                }),
                p.jsx("feBlend", {
                  mode: "normal",
                  in2: "shape",
                  result: "effect1_innerShadow_9452_35062",
                }),
              ],
            }),
            p.jsx("clipPath", {
              id: "bgblur_1_9452_35062_clip_path",
              children: p.jsx("path", {
                transform: "translate(-4.29637 -5.73753)",
                d: "M12.5416 20.3608L14.6173 19.0584C16.3764 17.9547 17.3472 15.9196 17.1082 13.8366C17.0425 13.2636 16.4311 12.9345 15.9259 13.2004L11.9501 15.2928C11.6923 15.4284 11.5914 15.7499 11.7244 16.0116C12.1521 16.853 12.3189 17.8058 12.2031 18.7451L12.0438 20.037C12.0096 20.3141 12.3074 20.5077 12.5416 20.3608Z",
              }),
            }),
            p.jsxs("filter", {
              id: "filter2_i_9452_35062",
              x: "0.135118",
              y: "-3.69459",
              width: "27.6078",
              height: "27.6016",
              filterUnits: "userSpaceOnUse",
              "color-interpolation-filters": "sRGB",
              children: [
                p.jsx("feFlood", {
                  "flood-opacity": "0",
                  result: "BackgroundImageFix",
                }),
                p.jsx("feBlend", {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "BackgroundImageFix",
                  result: "shape",
                }),
                p.jsx("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha",
                }),
                p.jsx("feOffset", { dy: "2.45647" }),
                p.jsx("feGaussianBlur", { stdDeviation: "10.55" }),
                p.jsx("feComposite", {
                  in2: "hardAlpha",
                  operator: "arithmetic",
                  k2: "-1",
                  k3: "1",
                }),
                p.jsx("feColorMatrix", {
                  type: "matrix",
                  values:
                    "0 0 0 0 0.341176 0 0 0 0 0.643137 0 0 0 0 1 0 0 0 0.4 0",
                }),
                p.jsx("feBlend", {
                  mode: "normal",
                  in2: "shape",
                  result: "effect1_innerShadow_9452_35062",
                }),
              ],
            }),
            p.jsx("clipPath", {
              id: "bgblur_2_9452_35062_clip_path",
              children: p.jsx("path", {
                transform: "translate(-0.135118 3.69459)",
                d: "M16.6235 13.699C13.4328 16.8782 10.7829 17.3455 8.73864 15.3086C6.6944 13.2718 7.16132 10.6335 10.352 7.45433C13.5427 4.27516 17.8593 3.22446 20.2442 3.84462C20.751 6.10573 19.8142 10.5199 16.6235 13.699Z",
              }),
            }),
            p.jsxs("filter", {
              id: "filter3_i_9452_35062",
              x: "-1.97499",
              y: "6.468",
              width: "19.4973",
              height: "19.4326",
              filterUnits: "userSpaceOnUse",
              "color-interpolation-filters": "sRGB",
              children: [
                p.jsx("feFlood", {
                  "flood-opacity": "0",
                  result: "BackgroundImageFix",
                }),
                p.jsx("feBlend", {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "BackgroundImageFix",
                  result: "shape",
                }),
                p.jsx("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha",
                }),
                p.jsx("feOffset", { dy: "2.45647" }),
                p.jsx("feGaussianBlur", { stdDeviation: "10.55" }),
                p.jsx("feComposite", {
                  in2: "hardAlpha",
                  operator: "arithmetic",
                  k2: "-1",
                  k3: "1",
                }),
                p.jsx("feColorMatrix", {
                  type: "matrix",
                  values:
                    "0 0 0 0 0.341176 0 0 0 0 0.643137 0 0 0 0 1 0 0 0 0.4 0",
                }),
                p.jsx("feBlend", {
                  mode: "normal",
                  in2: "shape",
                  result: "effect1_innerShadow_9452_35062",
                }),
              ],
            }),
            p.jsx("clipPath", {
              id: "bgblur_3_9452_35062_clip_path",
              children: p.jsx("path", {
                transform: "translate(1.97499 -6.468)",
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M6.98609 14.3339C6.8924 14.0653 6.70973 13.7393 6.45477 13.8655C6.41747 13.884 6.3825 13.9088 6.35144 13.9398L5.51036 14.7809C5.25508 15.0362 5.45096 15.4716 5.81133 15.45L6.22472 15.4252C6.51538 15.4077 6.72312 15.7018 6.60951 15.9699L5.92931 17.5751C5.7947 17.8928 6.10617 18.2171 6.429 18.0954L8.10417 17.4637C8.37896 17.3601 8.66599 17.584 8.63237 17.8758L8.60737 18.0927C8.56482 18.462 9.01176 18.6779 9.27459 18.4151L10.0506 17.639C10.0817 17.608 10.1065 17.573 10.1249 17.5357C10.2512 17.2807 9.92516 17.0981 9.65652 17.0044C9.11182 16.8144 8.54222 16.4565 8.03809 15.9524C7.53395 15.4482 7.17604 14.8786 6.98609 14.3339Z",
              }),
            }),
            p.jsxs("linearGradient", {
              id: "paint0_linear_9452_35062",
              x1: "3.63098",
              y1: "6.89795",
              x2: "11.3898",
              y2: "12.6203",
              gradientUnits: "userSpaceOnUse",
              children: [
                p.jsx("stop", { offset: "0.24238", "stop-color": "#5498FF" }),
                p.jsx("stop", { offset: "1", "stop-color": "#A131F9" }),
              ],
            }),
            p.jsxs("linearGradient", {
              id: "paint1_linear_9452_35062",
              x1: "11.6658",
              y1: "13.1069",
              x2: "19.6084",
              y2: "16.5754",
              gradientUnits: "userSpaceOnUse",
              children: [
                p.jsx("stop", { offset: "0.24238", "stop-color": "#5498FF" }),
                p.jsx("stop", { offset: "1", "stop-color": "#A131F9" }),
              ],
            }),
            p.jsxs("linearGradient", {
              id: "paint2_linear_9452_35062",
              x1: "8.04073",
              y1: "6.24736",
              x2: "22.0688",
              y2: "8.19666",
              gradientUnits: "userSpaceOnUse",
              children: [
                p.jsx("stop", { "stop-color": "#5498FF" }),
                p.jsx("stop", { offset: "1", "stop-color": "#8940FF" }),
              ],
            }),
            p.jsxs("linearGradient", {
              id: "paint3_linear_9452_35062",
              x1: "8.04073",
              y1: "6.24736",
              x2: "22.0688",
              y2: "8.19666",
              gradientUnits: "userSpaceOnUse",
              children: [
                p.jsx("stop", { "stop-color": "#5498FF" }),
                p.jsx("stop", { offset: "1", "stop-color": "#8940FF" }),
              ],
            }),
            p.jsxs("linearGradient", {
              id: "paint4_linear_9452_35062",
              x1: "6.56079",
              y1: "13.7305",
              x2: "6.94018",
              y2: "20.4553",
              gradientUnits: "userSpaceOnUse",
              children: [
                p.jsx("stop", { offset: "0.24238", "stop-color": "#5498FF" }),
                p.jsx("stop", { offset: "1", "stop-color": "#A131F9" }),
              ],
            }),
          ],
        }),
      ],
    }),
  O4 = () =>
    p.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "113",
      height: "24",
      viewBox: "0 0 113 24",
      fill: "none",
      children: [
        p.jsx("path", {
          d: "M35.3051 12.7698V12.4885C35.3051 11.7817 35.0634 11.2407 34.58 10.8656C34.1113 10.4761 33.4961 10.2814 32.7344 10.2814C32.1485 10.2814 31.6871 10.3824 31.3502 10.5843C31.0279 10.7719 30.7203 11.0604 30.4274 11.4499C30.3395 11.5653 30.2443 11.6446 30.1417 11.6879C30.0392 11.7312 29.9001 11.7528 29.7243 11.7528H29.0651C28.904 11.7528 28.7575 11.6951 28.6257 11.5797C28.5085 11.4643 28.4572 11.3273 28.4719 11.1686C28.5158 10.7358 28.7282 10.3103 29.1091 9.89192C29.5046 9.45915 30.0246 9.10573 30.6691 8.83164C31.3136 8.55756 32.002 8.42052 32.7344 8.42052C34.0967 8.42052 35.1952 8.79558 36.0302 9.54571C36.8797 10.2958 37.3045 11.3489 37.3045 12.7049V19.3045C37.3045 19.4632 37.2459 19.6003 37.1288 19.7157C37.0116 19.8311 36.8724 19.8888 36.7113 19.8888H35.8983C35.7372 19.8888 35.5981 19.8311 35.4809 19.7157C35.3637 19.6003 35.3051 19.4632 35.3051 19.3045V18.4174C35.0707 18.9367 34.5727 19.3478 33.811 19.6508C33.0493 19.9537 32.2877 20.1052 31.526 20.1052C30.7789 20.1052 30.1124 19.9753 29.5265 19.7157C28.9406 19.4416 28.4865 19.0737 28.1643 18.6121C27.8567 18.1505 27.7029 17.6312 27.7029 17.0542C27.7029 15.9723 28.113 15.1284 28.9333 14.5225C29.7536 13.9022 30.8448 13.4839 32.2071 13.2675L35.3051 12.7698ZM35.3051 14.5009L32.7124 14.912C31.7603 15.0562 31.0206 15.2943 30.4933 15.626C29.966 15.9434 29.7023 16.3473 29.7023 16.8378C29.7023 17.1984 29.8708 17.523 30.2077 17.8115C30.5446 18.1 31.0572 18.2443 31.7457 18.2443C32.8003 18.2443 33.6572 17.9486 34.3164 17.3571C34.9755 16.7657 35.3051 15.9939 35.3051 15.0418V14.5009Z",
          fill: "#FBFDFF",
        }),
        p.jsx("path", {
          d: "M42.5096 19.3045C42.5096 19.4632 42.451 19.6003 42.3338 19.7157C42.2167 19.8311 42.0775 19.8888 41.9164 19.8888H41.1034C40.9423 19.8888 40.8031 19.8311 40.686 19.7157C40.5688 19.6003 40.5102 19.4632 40.5102 19.3045V5.10987C40.5102 4.95119 40.5688 4.81414 40.686 4.69874C40.8031 4.58334 40.9423 4.52563 41.1034 4.52563H41.9164C42.0775 4.52563 42.2167 4.58334 42.3338 4.69874C42.451 4.81414 42.5096 4.95119 42.5096 5.10987V19.3045Z",
          fill: "#FBFDFF",
        }),
        p.jsx("path", {
          d: "M50.4241 18.2443C51.8889 18.2443 52.8776 17.6817 53.3903 16.5565C53.4928 16.3401 53.5953 16.1886 53.6979 16.1021C53.8004 16.0155 53.9396 15.9723 54.1153 15.9723H54.7745C54.9356 15.9723 55.0748 16.03 55.1919 16.1454C55.3091 16.2463 55.3677 16.369 55.3677 16.5132C55.3677 17.0037 55.17 17.5302 54.7745 18.0928C54.379 18.6554 53.8077 19.1314 53.0607 19.5209C52.3136 19.9104 51.4348 20.1052 50.4241 20.1052C49.3841 20.1052 48.4832 19.8888 47.7215 19.456C46.9599 19.0233 46.3739 18.4318 45.9638 17.6817C45.5537 16.9171 45.3266 16.066 45.2827 15.1284C45.268 14.9553 45.2607 14.6235 45.2607 14.133C45.2607 13.7868 45.268 13.5416 45.2827 13.3973C45.4145 11.9259 45.9199 10.7286 46.7987 9.80536C47.6776 8.88213 48.8861 8.42052 50.4241 8.42052C51.4348 8.42052 52.3063 8.61526 53.0387 9.00475C53.7858 9.37981 54.3497 9.84864 54.7305 10.4112C55.126 10.9594 55.3384 11.4787 55.3677 11.9692C55.3824 12.1279 55.3238 12.2649 55.1919 12.3803C55.0748 12.4957 54.9356 12.5534 54.7745 12.5534H54.1153C53.9396 12.5534 53.8004 12.5101 53.6979 12.4236C53.5953 12.337 53.4928 12.1856 53.3903 11.9692C52.8776 10.844 51.8889 10.2814 50.4241 10.2814C49.6184 10.2814 48.9153 10.5483 48.3148 11.082C47.7142 11.6158 47.37 12.4236 47.2821 13.5055C47.2675 13.6642 47.2601 13.9238 47.2601 14.2845C47.2601 14.6163 47.2675 14.8615 47.2821 15.0202C47.3846 16.1021 47.7289 16.9099 48.3148 17.4437C48.9153 17.9774 49.6184 18.2443 50.4241 18.2443Z",
          fill: "#FBFDFF",
        }),
        p.jsx("path", {
          d: "M68.1484 19.3045C68.1484 19.4632 68.0898 19.6003 67.9726 19.7157C67.8555 19.8311 67.7163 19.8888 67.5552 19.8888H66.7422C66.5811 19.8888 66.4419 19.8311 66.3248 19.7157C66.2076 19.6003 66.149 19.4632 66.149 19.3045V13.5921C66.149 12.5101 65.878 11.6879 65.336 11.1253C64.794 10.5627 64.0397 10.2814 63.0729 10.2814C62.1208 10.2814 61.3665 10.5627 60.8098 11.1253C60.2679 11.6879 59.9969 12.5101 59.9969 13.5921V19.3045C59.9969 19.4632 59.9383 19.6003 59.8211 19.7157C59.7039 19.8311 59.5648 19.8888 59.4037 19.8888H58.5907C58.4296 19.8888 58.2904 19.8311 58.1732 19.7157C58.0561 19.6003 57.9975 19.4632 57.9975 19.3045V5.10987C57.9975 4.95119 58.0561 4.81414 58.1732 4.69874C58.2904 4.58334 58.4296 4.52563 58.5907 4.52563H59.4037C59.5648 4.52563 59.7039 4.58334 59.8211 4.69874C59.9383 4.81414 59.9969 4.95119 59.9969 5.10987V9.89192C60.3191 9.47358 60.7586 9.12736 61.3152 8.85328C61.8865 8.56477 62.5822 8.42052 63.4025 8.42052C64.3253 8.42052 65.1456 8.61526 65.8633 9.00475C66.5811 9.39424 67.1377 9.95683 67.5332 10.6925C67.9433 11.4138 68.1484 12.2721 68.1484 13.2675V19.3045Z",
          fill: "#FBFDFF",
        }),
        p.jsx("path", {
          d: "M75.8478 8.42052C77.4151 8.42052 78.6528 8.91098 79.561 9.89192C80.4692 10.8729 80.9233 12.2072 80.9233 13.895V14.4792C80.9233 14.6379 80.8647 14.7749 80.7475 14.8903C80.6303 15.0058 80.4911 15.0635 80.33 15.0635H72.7717V15.1933C72.801 16.1454 73.094 16.8955 73.6506 17.4437C74.2219 17.9774 74.9543 18.2443 75.8478 18.2443C76.5802 18.2443 77.1441 18.1505 77.5396 17.963C77.9498 17.7754 78.3159 17.5086 78.6382 17.1624C78.7554 17.047 78.8579 16.9676 78.9458 16.9243C79.0483 16.8811 79.1802 16.8594 79.3413 16.8594H80.0005C80.1762 16.8594 80.3227 16.9171 80.4399 17.0325C80.5571 17.1479 80.6083 17.285 80.5937 17.4437C80.5351 17.8331 80.3154 18.2371 79.9345 18.6554C79.5683 19.0593 79.0337 19.4055 78.3306 19.694C77.6421 19.9681 76.8145 20.1052 75.8478 20.1052C74.9103 20.1052 74.0754 19.896 73.343 19.4777C72.6106 19.0449 72.0247 18.4534 71.5853 17.7033C71.1605 16.9532 70.9041 16.1093 70.8163 15.1716C70.787 14.7389 70.7723 14.4071 70.7723 14.1763C70.7723 13.9455 70.787 13.6137 70.8163 13.1809C70.9041 12.2865 71.1605 11.4787 71.5853 10.7574C72.0247 10.0362 72.6033 9.46636 73.321 9.04803C74.0534 8.62969 74.8957 8.42052 75.8478 8.42052ZM78.9458 13.2458V13.1809C78.9458 12.301 78.6602 11.6013 78.0889 11.082C77.5323 10.5483 76.7852 10.2814 75.8478 10.2814C74.9982 10.2814 74.2731 10.5483 73.6726 11.082C73.0867 11.6158 72.7864 12.3154 72.7717 13.1809V13.2458H78.9458Z",
          fill: "#FBFDFF",
        }),
        p.jsx("path", {
          d: "M85.5734 9.89192C85.9249 9.44473 86.3204 9.0913 86.7599 8.83164C87.1993 8.55756 87.7852 8.42052 88.5176 8.42052C90.2314 8.42052 91.4325 9.04802 92.121 10.303C92.5457 9.69717 93.0291 9.23556 93.5711 8.9182C94.1131 8.58641 94.8235 8.42052 95.7023 8.42052C97.1378 8.42052 98.1998 8.84607 98.8883 9.69717C99.5914 10.5483 99.9429 11.7528 99.9429 13.3108V19.3045C99.9429 19.4632 99.8843 19.6003 99.7671 19.7157C99.6499 19.8311 99.5108 19.8888 99.3497 19.8888H98.5367C98.3756 19.8888 98.2364 19.8311 98.1192 19.7157C98.0021 19.6003 97.9435 19.4632 97.9435 19.3045V13.5271C97.9435 11.3633 97.0792 10.2814 95.3508 10.2814C94.5598 10.2814 93.93 10.5411 93.4612 11.0604C92.9925 11.5797 92.7581 12.3515 92.7581 13.3757V19.3045C92.7581 19.4632 92.6996 19.6003 92.5824 19.7157C92.4652 19.8311 92.326 19.8888 92.1649 19.8888H91.3519C91.1908 19.8888 91.0517 19.8311 90.9345 19.7157C90.8173 19.6003 90.7587 19.4632 90.7587 19.3045V13.5271C90.7587 11.3633 89.8945 10.2814 88.166 10.2814C87.3751 10.2814 86.7452 10.5411 86.2765 11.0604C85.8077 11.5797 85.5734 12.3515 85.5734 13.3757V19.3045C85.5734 19.4632 85.5148 19.6003 85.3976 19.7157C85.2804 19.8311 85.1413 19.8888 84.9801 19.8888H84.1672C84.0061 19.8888 83.8669 19.8311 83.7497 19.7157C83.6325 19.6003 83.5739 19.4632 83.5739 19.3045V9.22113C83.5739 9.06245 83.6325 8.92541 83.7497 8.81C83.8669 8.6946 84.0061 8.6369 84.1672 8.6369H84.9801C85.1413 8.6369 85.2804 8.6946 85.3976 8.81C85.5148 8.92541 85.5734 9.06245 85.5734 9.22113V9.89192Z",
          fill: "#FBFDFF",
        }),
        p.jsx("path", {
          d: "M106.097 23.4807C105.965 23.8269 105.752 24 105.459 24H104.559C104.412 24 104.288 23.9496 104.185 23.8486C104.082 23.7476 104.031 23.625 104.031 23.4807C104.031 23.423 104.039 23.3725 104.053 23.3293L106.162 18.8069L101.812 9.30768C101.797 9.26441 101.79 9.21392 101.79 9.15622C101.79 9.01196 101.841 8.88935 101.944 8.78837C102.046 8.68739 102.171 8.6369 102.317 8.6369H103.218C103.511 8.6369 103.724 8.81001 103.855 9.15622L107.239 16.5132L110.667 9.15622C110.799 8.81001 111.011 8.6369 111.304 8.6369H112.205C112.351 8.6369 112.476 8.68739 112.578 8.78837C112.681 8.88935 112.732 9.01196 112.732 9.15622C112.732 9.21392 112.725 9.26441 112.71 9.30768L106.097 23.4807Z",
          fill: "#FBFDFF",
        }),
        p.jsx("path", {
          d: "M19.3958 12.7306L12.0181 0.205008C11.9824 0.143159 11.9306 0.0916386 11.8681 0.0556463C11.8056 0.019654 11.7345 0.000462384 11.662 8.25127e-06C11.5895 -0.000445881 11.5181 0.0178533 11.4551 0.0530595C11.3922 0.0882657 11.3398 0.139134 11.3033 0.200531L9.09371 3.95372C9.02135 4.07658 8.98326 4.21595 8.98326 4.35781C8.98326 4.49967 9.02135 4.63904 9.09371 4.7619L13.9044 12.9332C13.9769 13.0562 14.0811 13.1583 14.2066 13.2292C14.3321 13.3001 14.4744 13.3374 14.6193 13.3373H19.0384C19.1107 13.3371 19.1817 13.3182 19.2443 13.2827C19.3069 13.2471 19.3589 13.1961 19.3951 13.1347C19.4313 13.0733 19.4504 13.0036 19.4505 12.9327C19.4506 12.8618 19.4317 12.7921 19.3958 12.7306Z",
          fill: "#FBFDFF",
        }),
        p.jsx("path", {
          d: "M0.0568897 19.2769L7.43458 6.75134C7.47078 6.68998 7.52283 6.63904 7.58546 6.60362C7.64809 6.5682 7.71911 6.54956 7.79142 6.54956C7.86373 6.54956 7.93478 6.5682 7.99741 6.60362C8.06004 6.63904 8.11206 6.68998 8.14826 6.75134L10.359 10.5012C10.4313 10.6242 10.4694 10.7638 10.4694 10.9058C10.4694 11.0479 10.4313 11.1874 10.359 11.3105L5.54819 19.4818C5.47604 19.6047 5.37206 19.7068 5.24675 19.7778C5.12144 19.8487 4.97923 19.886 4.83452 19.8858H0.414299C0.341483 19.8862 0.269874 19.8676 0.206748 19.8321C0.143622 19.7965 0.0912388 19.7451 0.0549242 19.6833C0.0186097 19.6214 -0.000341874 19.5512 4.66863e-06 19.4798C0.000351211 19.4085 0.019976 19.3384 0.0568897 19.2769Z",
          fill: "#FBFDFF",
        }),
        p.jsx("path", {
          d: "M8.1472 19.8832H22.9026C22.975 19.8831 23.0461 19.8643 23.1087 19.8288C23.1714 19.7933 23.2233 19.7422 23.2595 19.6807C23.2956 19.6192 23.3145 19.5494 23.3144 19.4785C23.3143 19.4075 23.2952 19.3379 23.2589 19.2765L21.0516 15.5244C20.9792 15.4014 20.875 15.2993 20.7495 15.2284C20.624 15.1574 20.4816 15.1202 20.3368 15.1203H10.7153C10.5704 15.1202 10.4281 15.1574 10.3026 15.2284C10.1771 15.2993 10.0729 15.4014 10.0005 15.5244L7.79095 19.2765C7.75466 19.3379 7.7355 19.4075 7.73539 19.4785C7.73529 19.5494 7.75423 19.6192 7.79034 19.6807C7.82645 19.7422 7.87846 19.7933 7.9411 19.8288C8.00375 19.8643 8.07482 19.8831 8.1472 19.8832Z",
          fill: "#FBFDFF",
        }),
      ],
    }),
  D4 = () =>
    p.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "113",
      height: "24",
      viewBox: "0 0 113 24",
      fill: "none",
      children: [
        p.jsx("path", {
          d: "M35.3052 12.7696V12.4883C35.3052 11.7814 35.0635 11.2405 34.5801 10.8654C34.1114 10.4759 33.4962 10.2812 32.7345 10.2812C32.1486 10.2812 31.6872 10.3821 31.3503 10.5841C31.028 10.7716 30.7204 11.0601 30.4274 11.4496C30.3396 11.565 30.2443 11.6444 30.1418 11.6876C30.0393 11.7309 29.9001 11.7526 29.7243 11.7526H29.0652C28.9041 11.7526 28.7576 11.6949 28.6258 11.5795C28.5086 11.4641 28.4573 11.327 28.472 11.1683C28.5159 10.7356 28.7283 10.31 29.1091 9.89167C29.5046 9.45891 30.0246 9.10548 30.6691 8.8314C31.3136 8.55731 32.0021 8.42027 32.7345 8.42027C34.0967 8.42027 35.1953 8.79534 36.0302 9.54546C36.8798 10.2956 37.3046 11.3486 37.3046 12.7046V19.3043C37.3046 19.463 37.246 19.6 37.1288 19.7154C37.0116 19.8308 36.8725 19.8885 36.7114 19.8885H35.8984C35.7373 19.8885 35.5981 19.8308 35.4809 19.7154C35.3638 19.6 35.3052 19.463 35.3052 19.3043V18.4171C35.0708 18.9365 34.5728 19.3476 33.8111 19.6505C33.0494 19.9535 32.2877 20.1049 31.526 20.1049C30.779 20.1049 30.1125 19.9751 29.5266 19.7154C28.9407 19.4413 28.4866 19.0735 28.1643 18.6119C27.8567 18.1503 27.7029 17.6309 27.7029 17.0539C27.7029 15.972 28.1131 15.1281 28.9334 14.5223C29.7536 13.902 30.8449 13.4836 32.2071 13.2672L35.3052 12.7696ZM35.3052 14.5006L32.7125 14.9117C31.7604 15.056 31.0207 15.294 30.4934 15.6258C29.966 15.9432 29.7024 16.3471 29.7024 16.8375C29.7024 17.1982 29.8708 17.5228 30.2077 17.8113C30.5446 18.0998 31.0573 18.244 31.7457 18.244C32.8004 18.244 33.6573 17.9483 34.3164 17.3569C34.9756 16.7654 35.3052 15.9937 35.3052 15.0416V14.5006Z",
          fill: "#020617",
        }),
        p.jsx("path", {
          d: "M42.5097 19.3043C42.5097 19.463 42.4511 19.6 42.3339 19.7154C42.2167 19.8308 42.0776 19.8885 41.9164 19.8885H41.1035C40.9424 19.8885 40.8032 19.8308 40.686 19.7154C40.5688 19.6 40.5102 19.463 40.5102 19.3043V5.10962C40.5102 4.95094 40.5688 4.8139 40.686 4.6985C40.8032 4.58309 40.9424 4.52539 41.1035 4.52539H41.9164C42.0776 4.52539 42.2167 4.58309 42.3339 4.6985C42.4511 4.8139 42.5097 4.95094 42.5097 5.10962V19.3043Z",
          fill: "#020617",
        }),
        p.jsx("path", {
          d: "M50.4241 18.244C51.8889 18.244 52.8776 17.6814 53.3903 16.5562C53.4929 16.3399 53.5954 16.1884 53.6979 16.1018C53.8005 16.0153 53.9396 15.972 54.1154 15.972H54.7745C54.9357 15.972 55.0748 16.0297 55.192 16.1451C55.3092 16.2461 55.3678 16.3687 55.3678 16.513C55.3678 17.0034 55.17 17.53 54.7745 18.0926C54.3791 18.6552 53.8078 19.1312 53.0607 19.5207C52.3137 19.9102 51.4348 20.1049 50.4241 20.1049C49.3841 20.1049 48.4833 19.8885 47.7216 19.4558C46.9599 19.023 46.374 18.4316 45.9639 17.6814C45.5537 16.9169 45.3267 16.0658 45.2827 15.1281C45.2681 14.955 45.2608 14.6232 45.2608 14.1328C45.2608 13.7866 45.2681 13.5413 45.2827 13.3971C45.4146 11.9257 45.9199 10.7284 46.7988 9.80512C47.6777 8.88189 48.8861 8.42027 50.4241 8.42027C51.4348 8.42027 52.3064 8.61502 53.0388 9.00451C53.7858 9.37957 54.3498 9.8484 54.7306 10.411C55.1261 10.9592 55.3385 11.4785 55.3678 11.9689C55.3824 12.1276 55.3238 12.2647 55.192 12.3801C55.0748 12.4955 54.9357 12.5532 54.7745 12.5532H54.1154C53.9396 12.5532 53.8005 12.5099 53.6979 12.4233C53.5954 12.3368 53.4929 12.1853 53.3903 11.9689C52.8776 10.8438 51.8889 10.2812 50.4241 10.2812C49.6185 10.2812 48.9154 10.548 48.3148 11.0818C47.7143 11.6155 47.3701 12.4233 47.2822 13.5053C47.2675 13.6639 47.2602 13.9236 47.2602 14.2842C47.2602 14.616 47.2675 14.8613 47.2822 15.0199C47.3847 16.1018 47.7289 16.9097 48.3148 17.4434C48.9154 17.9772 49.6185 18.244 50.4241 18.244Z",
          fill: "#020617",
        }),
        p.jsx("path", {
          d: "M68.1485 19.3043C68.1485 19.463 68.0899 19.6 67.9727 19.7154C67.8555 19.8308 67.7164 19.8885 67.5552 19.8885H66.7423C66.5812 19.8885 66.442 19.8308 66.3248 19.7154C66.2076 19.6 66.149 19.463 66.149 19.3043V13.5918C66.149 12.5099 65.8781 11.6876 65.3361 11.1251C64.7941 10.5625 64.0398 10.2812 63.073 10.2812C62.1209 10.2812 61.3665 10.5625 60.8099 11.1251C60.2679 11.6876 59.997 12.5099 59.997 13.5918V19.3043C59.997 19.463 59.9384 19.6 59.8212 19.7154C59.704 19.8308 59.5648 19.8885 59.4037 19.8885H58.5908C58.4296 19.8885 58.2905 19.8308 58.1733 19.7154C58.0561 19.6 57.9975 19.463 57.9975 19.3043V5.10962C57.9975 4.95094 58.0561 4.8139 58.1733 4.6985C58.2905 4.58309 58.4296 4.52539 58.5908 4.52539H59.4037C59.5648 4.52539 59.704 4.58309 59.8212 4.6985C59.9384 4.8139 59.997 4.95094 59.997 5.10962V9.89167C60.3192 9.47333 60.7586 9.12712 61.3153 8.85304C61.8865 8.56453 62.5823 8.42027 63.4026 8.42027C64.3254 8.42027 65.1457 8.61502 65.8634 9.00451C66.5812 9.39399 67.1378 9.95659 67.5333 10.6923C67.9434 11.4136 68.1485 12.2719 68.1485 13.2672V19.3043Z",
          fill: "#020617",
        }),
        p.jsx("path", {
          d: "M75.8478 8.42027C77.4152 8.42027 78.6529 8.91074 79.5611 9.89167C80.4692 10.8726 80.9233 12.207 80.9233 13.8947V14.479C80.9233 14.6377 80.8647 14.7747 80.7476 14.8901C80.6304 15.0055 80.4912 15.0632 80.3301 15.0632H72.7718V15.193C72.8011 16.1451 73.0941 16.8952 73.6507 17.4434C74.2219 17.9772 74.9543 18.244 75.8478 18.244C76.5802 18.244 77.1442 18.1503 77.5397 17.9627C77.9498 17.7752 78.316 17.5083 78.6383 17.1621C78.7554 17.0467 78.858 16.9674 78.9459 16.9241C79.0484 16.8808 79.1802 16.8592 79.3414 16.8592H80.0005C80.1763 16.8592 80.3228 16.9169 80.4399 17.0323C80.5571 17.1477 80.6084 17.2847 80.5937 17.4434C80.5352 17.8329 80.3154 18.2368 79.9346 18.6552C79.5684 19.0591 79.0337 19.4053 78.3307 19.6938C77.6422 19.9679 76.8146 20.1049 75.8478 20.1049C74.9104 20.1049 74.0755 19.8957 73.3431 19.4774C72.6107 19.0446 72.0248 18.4532 71.5853 17.7031C71.1605 16.9529 70.9042 16.1091 70.8163 15.1714C70.787 14.7386 70.7724 14.4069 70.7724 14.176C70.7724 13.9452 70.787 13.6134 70.8163 13.1807C70.9042 12.2863 71.1605 11.4785 71.5853 10.7572C72.0248 10.0359 72.6034 9.46612 73.3211 9.04778C74.0535 8.62944 74.8957 8.42027 75.8478 8.42027ZM78.9459 13.2456V13.1807C78.9459 12.3007 78.6602 11.6011 78.089 11.0818C77.5324 10.548 76.7853 10.2812 75.8478 10.2812C74.9983 10.2812 74.2732 10.548 73.6726 11.0818C73.0867 11.6155 72.7865 12.3152 72.7718 13.1807V13.2456H78.9459Z",
          fill: "#020617",
        }),
        p.jsx("path", {
          d: "M85.5734 9.89167C85.925 9.44448 86.3205 9.09106 86.7599 8.8314C87.1993 8.55731 87.7853 8.42027 88.5177 8.42027C90.2314 8.42027 91.4326 9.04778 92.121 10.3028C92.5458 9.69693 93.0292 9.23531 93.5712 8.91795C94.1131 8.58617 94.8235 8.42027 95.7024 8.42027C97.1379 8.42027 98.1999 8.84582 98.8883 9.69693C99.5914 10.548 99.943 11.7526 99.943 13.3105V19.3043C99.943 19.463 99.8844 19.6 99.7672 19.7154C99.65 19.8308 99.5108 19.8885 99.3497 19.8885H98.5368C98.3756 19.8885 98.2365 19.8308 98.1193 19.7154C98.0021 19.6 97.9435 19.463 97.9435 19.3043V13.5269C97.9435 11.3631 97.0793 10.2812 95.3509 10.2812C94.5599 10.2812 93.93 10.5408 93.4613 11.0601C92.9926 11.5795 92.7582 12.3512 92.7582 13.3754V19.3043C92.7582 19.463 92.6996 19.6 92.5824 19.7154C92.4652 19.8308 92.3261 19.8885 92.165 19.8885H91.352C91.1909 19.8885 91.0517 19.8308 90.9345 19.7154C90.8174 19.6 90.7588 19.463 90.7588 19.3043V13.5269C90.7588 11.3631 89.8945 10.2812 88.1661 10.2812C87.3751 10.2812 86.7453 10.5408 86.2765 11.0601C85.8078 11.5795 85.5734 12.3512 85.5734 13.3754V19.3043C85.5734 19.463 85.5148 19.6 85.3977 19.7154C85.2805 19.8308 85.1413 19.8885 84.9802 19.8885H84.1672C84.0061 19.8885 83.867 19.8308 83.7498 19.7154C83.6326 19.6 83.574 19.463 83.574 19.3043V9.22089C83.574 9.06221 83.6326 8.92516 83.7498 8.80976C83.867 8.69436 84.0061 8.63665 84.1672 8.63665H84.9802C85.1413 8.63665 85.2805 8.69436 85.3977 8.80976C85.5148 8.92516 85.5734 9.06221 85.5734 9.22089V9.89167Z",
          fill: "#020617",
        }),
        p.jsx("path", {
          d: "M106.097 23.4805C105.965 23.8267 105.752 23.9998 105.459 23.9998H104.559C104.412 23.9998 104.288 23.9493 104.185 23.8483C104.083 23.7474 104.031 23.6247 104.031 23.4805C104.031 23.4228 104.039 23.3723 104.053 23.329L106.163 18.8066L101.812 9.30744C101.797 9.26416 101.79 9.21368 101.79 9.15597C101.79 9.01172 101.841 8.8891 101.944 8.78812C102.046 8.68714 102.171 8.63665 102.317 8.63665H103.218C103.511 8.63665 103.724 8.80976 103.855 9.15597L107.239 16.513L110.667 9.15597C110.799 8.80976 111.011 8.63665 111.304 8.63665H112.205C112.351 8.63665 112.476 8.68714 112.578 8.78812C112.681 8.8891 112.732 9.01172 112.732 9.15597C112.732 9.21368 112.725 9.26416 112.71 9.30744L106.097 23.4805Z",
          fill: "#020617",
        }),
        p.jsx("path", {
          d: "M19.3958 12.7306L12.0181 0.205008C11.9824 0.143159 11.9306 0.0916386 11.8681 0.0556463C11.8056 0.019654 11.7345 0.000462384 11.662 8.25127e-06C11.5895 -0.000445881 11.5181 0.0178533 11.4551 0.0530595C11.3922 0.0882657 11.3398 0.139134 11.3033 0.200531L9.09371 3.95372C9.02135 4.07658 8.98326 4.21595 8.98326 4.35781C8.98326 4.49967 9.02135 4.63904 9.09371 4.7619L13.9044 12.9332C13.9769 13.0562 14.0811 13.1583 14.2066 13.2292C14.3321 13.3001 14.4744 13.3374 14.6193 13.3373H19.0384C19.1107 13.3371 19.1817 13.3182 19.2443 13.2827C19.3069 13.2471 19.3589 13.1961 19.3951 13.1347C19.4313 13.0733 19.4504 13.0036 19.4505 12.9327C19.4506 12.8618 19.4317 12.7921 19.3958 12.7306Z",
          fill: "#020617",
        }),
        p.jsx("path", {
          d: "M0.0568897 19.2769L7.43458 6.75134C7.47078 6.68998 7.52283 6.63904 7.58546 6.60362C7.64809 6.5682 7.71911 6.54956 7.79142 6.54956C7.86373 6.54956 7.93478 6.5682 7.99741 6.60362C8.06004 6.63904 8.11206 6.68998 8.14826 6.75134L10.359 10.5012C10.4313 10.6242 10.4694 10.7638 10.4694 10.9058C10.4694 11.0479 10.4313 11.1874 10.359 11.3105L5.54819 19.4818C5.47604 19.6047 5.37206 19.7068 5.24675 19.7778C5.12144 19.8487 4.97923 19.886 4.83452 19.8858H0.414299C0.341483 19.8862 0.269874 19.8676 0.206748 19.8321C0.143622 19.7965 0.0912388 19.7451 0.0549242 19.6833C0.0186097 19.6214 -0.000341874 19.5512 4.66863e-06 19.4798C0.000351211 19.4085 0.019976 19.3384 0.0568897 19.2769Z",
          fill: "#020617",
        }),
        p.jsx("path", {
          d: "M8.1472 19.8832H22.9026C22.975 19.8831 23.0461 19.8643 23.1087 19.8288C23.1714 19.7933 23.2233 19.7422 23.2595 19.6807C23.2956 19.6192 23.3145 19.5494 23.3144 19.4785C23.3143 19.4075 23.2952 19.3379 23.2589 19.2765L21.0516 15.5244C20.9792 15.4014 20.875 15.2993 20.7495 15.2284C20.624 15.1574 20.4816 15.1202 20.3368 15.1203H10.7153C10.5704 15.1202 10.4281 15.1574 10.3026 15.2284C10.1771 15.2993 10.0729 15.4014 10.0005 15.5244L7.79095 19.2765C7.75466 19.3379 7.7355 19.4075 7.73539 19.4785C7.73529 19.5494 7.75423 19.6192 7.79034 19.6807C7.82645 19.7422 7.87846 19.7933 7.9411 19.8288C8.00375 19.8643 8.07482 19.8831 8.1472 19.8832Z",
          fill: "#020617",
        }),
      ],
    }),
  A4 = () =>
    p.jsxs("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        p.jsx("foreignObject", {
          x: "1.39045",
          y: "1.5998",
          width: "21.2381",
          height: "20.2286",
          children: p.jsx("div", {
            style: {
              backdropFilter: "blur(0.6px)",
              clipPath: "url(#bgblur_0_9452_35072_clip_path)",
              height: "100%",
              width: "100%",
            },
          }),
        }),
        p.jsxs("g", {
          filter: "url(#filter0_i_9452_35072)",
          "data-figma-bg-blur-radius": "1.2",
          children: [
            p.jsx("mask", {
              id: "path-1-inside-1_9452_35072",
              fill: "white",
              children: p.jsx("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M21.4286 3.39981C21.4286 3.06844 21.16 2.7998 20.8286 2.7998H17.0762C16.7448 2.7998 16.4762 3.06843 16.4762 3.3998V20.0284C16.4762 20.3597 16.7448 20.6284 17.0762 20.6284H20.8286C21.16 20.6284 21.4286 20.3597 21.4286 20.0284V3.39981ZM14.4762 9.34265C14.4762 9.01128 14.2076 8.74265 13.8762 8.74265H10.1238C9.79244 8.74265 9.52381 9.01128 9.52381 9.34265V20.0284C9.52381 20.3597 9.79244 20.6284 10.1238 20.6284H13.8762C14.2076 20.6284 14.4762 20.3597 14.4762 20.0284V9.34265ZM6.94286 11.7141C7.27423 11.7141 7.54286 11.9827 7.54286 12.3141V20.0284C7.54286 20.3597 7.27423 20.6284 6.94286 20.6284H3.19048C2.85911 20.6284 2.59048 20.3597 2.59048 20.0284V12.3141C2.59048 11.9827 2.85911 11.7141 3.19048 11.7141H6.94286Z",
              }),
            }),
            p.jsx("path", {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M21.4286 3.39981C21.4286 3.06844 21.16 2.7998 20.8286 2.7998H17.0762C16.7448 2.7998 16.4762 3.06843 16.4762 3.3998V20.0284C16.4762 20.3597 16.7448 20.6284 17.0762 20.6284H20.8286C21.16 20.6284 21.4286 20.3597 21.4286 20.0284V3.39981ZM14.4762 9.34265C14.4762 9.01128 14.2076 8.74265 13.8762 8.74265H10.1238C9.79244 8.74265 9.52381 9.01128 9.52381 9.34265V20.0284C9.52381 20.3597 9.79244 20.6284 10.1238 20.6284H13.8762C14.2076 20.6284 14.4762 20.3597 14.4762 20.0284V9.34265ZM6.94286 11.7141C7.27423 11.7141 7.54286 11.9827 7.54286 12.3141V20.0284C7.54286 20.3597 7.27423 20.6284 6.94286 20.6284H3.19048C2.85911 20.6284 2.59048 20.3597 2.59048 20.0284V12.3141C2.59048 11.9827 2.85911 11.7141 3.19048 11.7141H6.94286Z",
              fill: "#F1F1F1",
              "fill-opacity": "0.1",
            }),
            p.jsx("path", {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M21.4286 3.39981C21.4286 3.06844 21.16 2.7998 20.8286 2.7998H17.0762C16.7448 2.7998 16.4762 3.06843 16.4762 3.3998V20.0284C16.4762 20.3597 16.7448 20.6284 17.0762 20.6284H20.8286C21.16 20.6284 21.4286 20.3597 21.4286 20.0284V3.39981ZM14.4762 9.34265C14.4762 9.01128 14.2076 8.74265 13.8762 8.74265H10.1238C9.79244 8.74265 9.52381 9.01128 9.52381 9.34265V20.0284C9.52381 20.3597 9.79244 20.6284 10.1238 20.6284H13.8762C14.2076 20.6284 14.4762 20.3597 14.4762 20.0284V9.34265ZM6.94286 11.7141C7.27423 11.7141 7.54286 11.9827 7.54286 12.3141V20.0284C7.54286 20.3597 7.27423 20.6284 6.94286 20.6284H3.19048C2.85911 20.6284 2.59048 20.3597 2.59048 20.0284V12.3141C2.59048 11.9827 2.85911 11.7141 3.19048 11.7141H6.94286Z",
              fill: "url(#paint0_linear_9452_35072)",
              "fill-opacity": "0.2",
            }),
            p.jsx("path", {
              d: "M20.8286 2.3998C21.3809 2.3998 21.8286 2.84752 21.8286 3.39981H21.0286C21.0286 3.28935 20.939 3.1998 20.8286 3.1998V2.3998ZM17.0762 2.3998H20.8286V3.1998H17.0762V2.3998ZM16.0762 3.3998C16.0762 2.84752 16.5239 2.3998 17.0762 2.3998V3.1998C16.9658 3.1998 16.8762 3.28935 16.8762 3.3998H16.0762ZM16.0762 20.0284V3.3998H16.8762V20.0284H16.0762ZM17.0762 21.0284C16.5239 21.0284 16.0762 20.5807 16.0762 20.0284H16.8762C16.8762 20.1388 16.9658 20.2284 17.0762 20.2284V21.0284ZM20.8286 21.0284H17.0762V20.2284H20.8286V21.0284ZM21.8286 20.0284C21.8286 20.5807 21.3809 21.0284 20.8286 21.0284V20.2284C20.939 20.2284 21.0286 20.1388 21.0286 20.0284H21.8286ZM21.8286 3.39981V20.0284H21.0286V3.39981H21.8286ZM13.8762 8.34265C14.4285 8.34265 14.8762 8.79037 14.8762 9.34265H14.0762C14.0762 9.23219 13.9867 9.14265 13.8762 9.14265V8.34265ZM10.1238 8.34265H13.8762V9.14265H10.1238V8.34265ZM9.12381 9.34265C9.12381 8.79036 9.57153 8.34265 10.1238 8.34265V9.14265C10.0134 9.14265 9.92381 9.23219 9.92381 9.34265H9.12381ZM9.12381 20.0284V9.34265H9.92381V20.0284H9.12381ZM10.1238 21.0284C9.57153 21.0284 9.12381 20.5806 9.12381 20.0284H9.92381C9.92381 20.1388 10.0134 20.2284 10.1238 20.2284V21.0284ZM13.8762 21.0284H10.1238V20.2284H13.8762V21.0284ZM14.8762 20.0284C14.8762 20.5807 14.4285 21.0284 13.8762 21.0284V20.2284C13.9867 20.2284 14.0762 20.1388 14.0762 20.0284H14.8762ZM14.8762 9.34265V20.0284H14.0762V9.34265H14.8762ZM7.14286 12.3141C7.14286 12.2036 7.05332 12.1141 6.94286 12.1141V11.3141C7.49515 11.3141 7.94286 11.7618 7.94286 12.3141H7.14286ZM7.14286 20.0284V12.3141H7.94286V20.0284H7.14286ZM6.94286 20.2284C7.05332 20.2284 7.14286 20.1388 7.14286 20.0284H7.94286C7.94286 20.5807 7.49515 21.0284 6.94286 21.0284V20.2284ZM3.19048 20.2284H6.94286V21.0284H3.19048V20.2284ZM2.99048 20.0284C2.99048 20.1388 3.08002 20.2284 3.19048 20.2284V21.0284C2.6382 21.0284 2.19048 20.5807 2.19048 20.0284H2.99048ZM2.99048 12.3141V20.0284H2.19048V12.3141H2.99048ZM3.19048 12.1141C3.08002 12.1141 2.99048 12.2036 2.99048 12.3141H2.19048C2.19048 11.7618 2.6382 11.3141 3.19048 11.3141V12.1141ZM6.94286 12.1141H3.19048V11.3141H6.94286V12.1141Z",
              fill: "#F1F1F1",
              "fill-opacity": "0.1",
              mask: "url(#path-1-inside-1_9452_35072)",
            }),
            p.jsx("path", {
              d: "M20.8286 2.3998C21.3809 2.3998 21.8286 2.84752 21.8286 3.39981H21.0286C21.0286 3.28935 20.939 3.1998 20.8286 3.1998V2.3998ZM17.0762 2.3998H20.8286V3.1998H17.0762V2.3998ZM16.0762 3.3998C16.0762 2.84752 16.5239 2.3998 17.0762 2.3998V3.1998C16.9658 3.1998 16.8762 3.28935 16.8762 3.3998H16.0762ZM16.0762 20.0284V3.3998H16.8762V20.0284H16.0762ZM17.0762 21.0284C16.5239 21.0284 16.0762 20.5807 16.0762 20.0284H16.8762C16.8762 20.1388 16.9658 20.2284 17.0762 20.2284V21.0284ZM20.8286 21.0284H17.0762V20.2284H20.8286V21.0284ZM21.8286 20.0284C21.8286 20.5807 21.3809 21.0284 20.8286 21.0284V20.2284C20.939 20.2284 21.0286 20.1388 21.0286 20.0284H21.8286ZM21.8286 3.39981V20.0284H21.0286V3.39981H21.8286ZM13.8762 8.34265C14.4285 8.34265 14.8762 8.79037 14.8762 9.34265H14.0762C14.0762 9.23219 13.9867 9.14265 13.8762 9.14265V8.34265ZM10.1238 8.34265H13.8762V9.14265H10.1238V8.34265ZM9.12381 9.34265C9.12381 8.79036 9.57153 8.34265 10.1238 8.34265V9.14265C10.0134 9.14265 9.92381 9.23219 9.92381 9.34265H9.12381ZM9.12381 20.0284V9.34265H9.92381V20.0284H9.12381ZM10.1238 21.0284C9.57153 21.0284 9.12381 20.5806 9.12381 20.0284H9.92381C9.92381 20.1388 10.0134 20.2284 10.1238 20.2284V21.0284ZM13.8762 21.0284H10.1238V20.2284H13.8762V21.0284ZM14.8762 20.0284C14.8762 20.5807 14.4285 21.0284 13.8762 21.0284V20.2284C13.9867 20.2284 14.0762 20.1388 14.0762 20.0284H14.8762ZM14.8762 9.34265V20.0284H14.0762V9.34265H14.8762ZM7.14286 12.3141C7.14286 12.2036 7.05332 12.1141 6.94286 12.1141V11.3141C7.49515 11.3141 7.94286 11.7618 7.94286 12.3141H7.14286ZM7.14286 20.0284V12.3141H7.94286V20.0284H7.14286ZM6.94286 20.2284C7.05332 20.2284 7.14286 20.1388 7.14286 20.0284H7.94286C7.94286 20.5807 7.49515 21.0284 6.94286 21.0284V20.2284ZM3.19048 20.2284H6.94286V21.0284H3.19048V20.2284ZM2.99048 20.0284C2.99048 20.1388 3.08002 20.2284 3.19048 20.2284V21.0284C2.6382 21.0284 2.19048 20.5807 2.19048 20.0284H2.99048ZM2.99048 12.3141V20.0284H2.19048V12.3141H2.99048ZM3.19048 12.1141C3.08002 12.1141 2.99048 12.2036 2.99048 12.3141H2.19048C2.19048 11.7618 2.6382 11.3141 3.19048 11.3141V12.1141ZM6.94286 12.1141H3.19048V11.3141H6.94286V12.1141Z",
              fill: "url(#paint1_linear_9452_35072)",
              "fill-opacity": "0.1",
              mask: "url(#path-1-inside-1_9452_35072)",
            }),
          ],
        }),
        p.jsx("foreignObject", {
          x: "1.39045",
          y: "12.4001",
          width: "21.2381",
          height: "9.42881",
          children: p.jsx("div", {
            style: {
              backdropFilter: "blur(0.6px)",
              clipPath: "url(#bgblur_1_9452_35072_clip_path)",
              height: "100%",
              width: "100%",
            },
          }),
        }),
        p.jsxs("g", {
          filter: "url(#filter1_i_9452_35072)",
          "data-figma-bg-blur-radius": "1.2",
          children: [
            p.jsx("mask", {
              id: "path-3-inside-2_9452_35072",
              fill: "white",
              children: p.jsx("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M21.4286 14.2001C21.4286 13.8687 21.16 13.6001 20.8286 13.6001H17.0762C16.7448 13.6001 16.4762 13.8687 16.4762 14.2001V20.0287C16.4762 20.36 16.7448 20.6287 17.0762 20.6287H20.8286C21.16 20.6287 21.4286 20.36 21.4286 20.0287V14.2001ZM14.4762 16.543C14.4762 16.2116 14.2076 15.943 13.8762 15.943H10.1238C9.79244 15.943 9.52381 16.2116 9.52381 16.543V20.0287C9.52381 20.36 9.79244 20.6287 10.1238 20.6287H13.8762C14.2076 20.6287 14.4762 20.36 14.4762 20.0287V16.543ZM6.94287 17.1144C7.27424 17.1144 7.54287 17.383 7.54287 17.7144V20.0287C7.54287 20.36 7.27424 20.6287 6.94287 20.6287H3.19049C2.85912 20.6287 2.59049 20.36 2.59049 20.0287V17.7144C2.59049 17.383 2.85912 17.1144 3.19049 17.1144H6.94287Z",
              }),
            }),
            p.jsx("path", {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M21.4286 14.2001C21.4286 13.8687 21.16 13.6001 20.8286 13.6001H17.0762C16.7448 13.6001 16.4762 13.8687 16.4762 14.2001V20.0287C16.4762 20.36 16.7448 20.6287 17.0762 20.6287H20.8286C21.16 20.6287 21.4286 20.36 21.4286 20.0287V14.2001ZM14.4762 16.543C14.4762 16.2116 14.2076 15.943 13.8762 15.943H10.1238C9.79244 15.943 9.52381 16.2116 9.52381 16.543V20.0287C9.52381 20.36 9.79244 20.6287 10.1238 20.6287H13.8762C14.2076 20.6287 14.4762 20.36 14.4762 20.0287V16.543ZM6.94287 17.1144C7.27424 17.1144 7.54287 17.383 7.54287 17.7144V20.0287C7.54287 20.36 7.27424 20.6287 6.94287 20.6287H3.19049C2.85912 20.6287 2.59049 20.36 2.59049 20.0287V17.7144C2.59049 17.383 2.85912 17.1144 3.19049 17.1144H6.94287Z",
              fill: "url(#paint2_linear_9452_35072)",
            }),
            p.jsx("path", {
              d: "M20.8286 13.2001C21.3809 13.2001 21.8286 13.6478 21.8286 14.2001H21.0286C21.0286 14.0896 20.939 14.0001 20.8286 14.0001V13.2001ZM17.0762 13.2001H20.8286V14.0001H17.0762V13.2001ZM16.0762 14.2001C16.0762 13.6478 16.5239 13.2001 17.0762 13.2001V14.0001C16.9658 14.0001 16.8762 14.0896 16.8762 14.2001H16.0762ZM16.0762 20.0287V14.2001H16.8762V20.0287H16.0762ZM17.0762 21.0287C16.5239 21.0287 16.0762 20.581 16.0762 20.0287H16.8762C16.8762 20.1391 16.9657 20.2287 17.0762 20.2287V21.0287ZM20.8286 21.0287H17.0762V20.2287H20.8286V21.0287ZM21.8286 20.0287C21.8286 20.581 21.3809 21.0287 20.8286 21.0287V20.2287C20.939 20.2287 21.0286 20.1391 21.0286 20.0287H21.8286ZM21.8286 14.2001V20.0287H21.0286V14.2001H21.8286ZM13.8762 15.543C14.4285 15.543 14.8762 15.9907 14.8762 16.543H14.0762C14.0762 16.4325 13.9867 16.343 13.8762 16.343V15.543ZM10.1238 15.543H13.8762V16.343H10.1238V15.543ZM9.12381 16.543C9.12381 15.9907 9.57153 15.543 10.1238 15.543V16.343C10.0134 16.343 9.92381 16.4325 9.92381 16.543H9.12381ZM9.12381 20.0287V16.543H9.92381V20.0287H9.12381ZM10.1238 21.0287C9.57153 21.0287 9.12381 20.581 9.12381 20.0287H9.92381C9.92381 20.1391 10.0134 20.2287 10.1238 20.2287V21.0287ZM13.8762 21.0287H10.1238V20.2287H13.8762V21.0287ZM14.8762 20.0287C14.8762 20.581 14.4285 21.0287 13.8762 21.0287V20.2287C13.9867 20.2287 14.0762 20.1391 14.0762 20.0287H14.8762ZM14.8762 16.543V20.0287H14.0762V16.543H14.8762ZM7.14287 17.7144C7.14287 17.6039 7.05333 17.5144 6.94287 17.5144V16.7144C7.49515 16.7144 7.94287 17.1621 7.94287 17.7144H7.14287ZM7.14287 20.0287V17.7144H7.94287V20.0287H7.14287ZM6.94287 20.2287C7.05333 20.2287 7.14287 20.1391 7.14287 20.0287H7.94287C7.94287 20.5809 7.49515 21.0287 6.94287 21.0287V20.2287ZM3.19049 20.2287H6.94287V21.0287H3.19049V20.2287ZM2.99049 20.0287C2.99049 20.1391 3.08003 20.2287 3.19049 20.2287V21.0287C2.6382 21.0287 2.19049 20.5809 2.19049 20.0287H2.99049ZM2.99049 17.7144V20.0287H2.19049V17.7144H2.99049ZM3.19049 17.5144C3.08003 17.5144 2.99049 17.6039 2.99049 17.7144H2.19049C2.19049 17.1621 2.6382 16.7144 3.19049 16.7144V17.5144ZM6.94287 17.5144H3.19049V16.7144H6.94287V17.5144Z",
              fill: "#F1F1F1",
              "fill-opacity": "0.1",
              mask: "url(#path-3-inside-2_9452_35072)",
            }),
            p.jsx("path", {
              d: "M20.8286 13.2001C21.3809 13.2001 21.8286 13.6478 21.8286 14.2001H21.0286C21.0286 14.0896 20.939 14.0001 20.8286 14.0001V13.2001ZM17.0762 13.2001H20.8286V14.0001H17.0762V13.2001ZM16.0762 14.2001C16.0762 13.6478 16.5239 13.2001 17.0762 13.2001V14.0001C16.9658 14.0001 16.8762 14.0896 16.8762 14.2001H16.0762ZM16.0762 20.0287V14.2001H16.8762V20.0287H16.0762ZM17.0762 21.0287C16.5239 21.0287 16.0762 20.581 16.0762 20.0287H16.8762C16.8762 20.1391 16.9657 20.2287 17.0762 20.2287V21.0287ZM20.8286 21.0287H17.0762V20.2287H20.8286V21.0287ZM21.8286 20.0287C21.8286 20.581 21.3809 21.0287 20.8286 21.0287V20.2287C20.939 20.2287 21.0286 20.1391 21.0286 20.0287H21.8286ZM21.8286 14.2001V20.0287H21.0286V14.2001H21.8286ZM13.8762 15.543C14.4285 15.543 14.8762 15.9907 14.8762 16.543H14.0762C14.0762 16.4325 13.9867 16.343 13.8762 16.343V15.543ZM10.1238 15.543H13.8762V16.343H10.1238V15.543ZM9.12381 16.543C9.12381 15.9907 9.57153 15.543 10.1238 15.543V16.343C10.0134 16.343 9.92381 16.4325 9.92381 16.543H9.12381ZM9.12381 20.0287V16.543H9.92381V20.0287H9.12381ZM10.1238 21.0287C9.57153 21.0287 9.12381 20.581 9.12381 20.0287H9.92381C9.92381 20.1391 10.0134 20.2287 10.1238 20.2287V21.0287ZM13.8762 21.0287H10.1238V20.2287H13.8762V21.0287ZM14.8762 20.0287C14.8762 20.581 14.4285 21.0287 13.8762 21.0287V20.2287C13.9867 20.2287 14.0762 20.1391 14.0762 20.0287H14.8762ZM14.8762 16.543V20.0287H14.0762V16.543H14.8762ZM7.14287 17.7144C7.14287 17.6039 7.05333 17.5144 6.94287 17.5144V16.7144C7.49515 16.7144 7.94287 17.1621 7.94287 17.7144H7.14287ZM7.14287 20.0287V17.7144H7.94287V20.0287H7.14287ZM6.94287 20.2287C7.05333 20.2287 7.14287 20.1391 7.14287 20.0287H7.94287C7.94287 20.5809 7.49515 21.0287 6.94287 21.0287V20.2287ZM3.19049 20.2287H6.94287V21.0287H3.19049V20.2287ZM2.99049 20.0287C2.99049 20.1391 3.08003 20.2287 3.19049 20.2287V21.0287C2.6382 21.0287 2.19049 20.5809 2.19049 20.0287H2.99049ZM2.99049 17.7144V20.0287H2.19049V17.7144H2.99049ZM3.19049 17.5144C3.08003 17.5144 2.99049 17.6039 2.99049 17.7144H2.19049C2.19049 17.1621 2.6382 16.7144 3.19049 16.7144V17.5144ZM6.94287 17.5144H3.19049V16.7144H6.94287V17.5144Z",
              fill: "url(#paint3_linear_9452_35072)",
              "fill-opacity": "0.1",
              mask: "url(#path-3-inside-2_9452_35072)",
            }),
          ],
        }),
        p.jsxs("defs", {
          children: [
            p.jsxs("filter", {
              id: "filter0_i_9452_35072",
              x: "1.39045",
              y: "1.5998",
              width: "21.2381",
              height: "20.2286",
              filterUnits: "userSpaceOnUse",
              "color-interpolation-filters": "sRGB",
              children: [
                p.jsx("feFlood", {
                  "flood-opacity": "0",
                  result: "BackgroundImageFix",
                }),
                p.jsx("feBlend", {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "BackgroundImageFix",
                  result: "shape",
                }),
                p.jsx("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha",
                }),
                p.jsx("feOffset", { dy: "0.2" }),
                p.jsx("feGaussianBlur", { stdDeviation: "0.4" }),
                p.jsx("feComposite", {
                  in2: "hardAlpha",
                  operator: "arithmetic",
                  k2: "-1",
                  k3: "1",
                }),
                p.jsx("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0",
                }),
                p.jsx("feBlend", {
                  mode: "normal",
                  in2: "shape",
                  result: "effect1_innerShadow_9452_35072",
                }),
              ],
            }),
            p.jsx("clipPath", {
              id: "bgblur_0_9452_35072_clip_path",
              children: p.jsx("path", {
                transform: "translate(-1.39045 -1.5998)",
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M21.4286 3.39981C21.4286 3.06844 21.16 2.7998 20.8286 2.7998H17.0762C16.7448 2.7998 16.4762 3.06843 16.4762 3.3998V20.0284C16.4762 20.3597 16.7448 20.6284 17.0762 20.6284H20.8286C21.16 20.6284 21.4286 20.3597 21.4286 20.0284V3.39981ZM14.4762 9.34265C14.4762 9.01128 14.2076 8.74265 13.8762 8.74265H10.1238C9.79244 8.74265 9.52381 9.01128 9.52381 9.34265V20.0284C9.52381 20.3597 9.79244 20.6284 10.1238 20.6284H13.8762C14.2076 20.6284 14.4762 20.3597 14.4762 20.0284V9.34265ZM6.94286 11.7141C7.27423 11.7141 7.54286 11.9827 7.54286 12.3141V20.0284C7.54286 20.3597 7.27423 20.6284 6.94286 20.6284H3.19048C2.85911 20.6284 2.59048 20.3597 2.59048 20.0284V12.3141C2.59048 11.9827 2.85911 11.7141 3.19048 11.7141H6.94286Z",
              }),
            }),
            p.jsxs("filter", {
              id: "filter1_i_9452_35072",
              x: "1.39045",
              y: "12.4001",
              width: "21.2381",
              height: "9.42881",
              filterUnits: "userSpaceOnUse",
              "color-interpolation-filters": "sRGB",
              children: [
                p.jsx("feFlood", {
                  "flood-opacity": "0",
                  result: "BackgroundImageFix",
                }),
                p.jsx("feBlend", {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "BackgroundImageFix",
                  result: "shape",
                }),
                p.jsx("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha",
                }),
                p.jsx("feOffset", { dy: "0.2" }),
                p.jsx("feGaussianBlur", { stdDeviation: "0.4" }),
                p.jsx("feComposite", {
                  in2: "hardAlpha",
                  operator: "arithmetic",
                  k2: "-1",
                  k3: "1",
                }),
                p.jsx("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0",
                }),
                p.jsx("feBlend", {
                  mode: "normal",
                  in2: "shape",
                  result: "effect1_innerShadow_9452_35072",
                }),
              ],
            }),
            p.jsx("clipPath", {
              id: "bgblur_1_9452_35072_clip_path",
              children: p.jsx("path", {
                transform: "translate(-1.39045 -12.4001)",
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M21.4286 14.2001C21.4286 13.8687 21.16 13.6001 20.8286 13.6001H17.0762C16.7448 13.6001 16.4762 13.8687 16.4762 14.2001V20.0287C16.4762 20.36 16.7448 20.6287 17.0762 20.6287H20.8286C21.16 20.6287 21.4286 20.36 21.4286 20.0287V14.2001ZM14.4762 16.543C14.4762 16.2116 14.2076 15.943 13.8762 15.943H10.1238C9.79244 15.943 9.52381 16.2116 9.52381 16.543V20.0287C9.52381 20.36 9.79244 20.6287 10.1238 20.6287H13.8762C14.2076 20.6287 14.4762 20.36 14.4762 20.0287V16.543ZM6.94287 17.1144C7.27424 17.1144 7.54287 17.383 7.54287 17.7144V20.0287C7.54287 20.36 7.27424 20.6287 6.94287 20.6287H3.19049C2.85912 20.6287 2.59049 20.36 2.59049 20.0287V17.7144C2.59049 17.383 2.85912 17.1144 3.19049 17.1144H6.94287Z",
              }),
            }),
            p.jsxs("linearGradient", {
              id: "paint0_linear_9452_35072",
              x1: "21.6",
              y1: "0.999804",
              x2: "6.6513",
              y2: "8.18793",
              gradientUnits: "userSpaceOnUse",
              children: [
                p.jsx("stop", { "stop-color": "#83E9FF" }),
                p.jsx("stop", { offset: "1", "stop-color": "#8940FF" }),
              ],
            }),
            p.jsxs("linearGradient", {
              id: "paint1_linear_9452_35072",
              x1: "20.6437",
              y1: "6.36552",
              x2: "0.153719",
              y2: "9.37249",
              gradientUnits: "userSpaceOnUse",
              children: [
                p.jsx("stop", { "stop-color": "#5498FF" }),
                p.jsx("stop", { offset: "1", "stop-color": "#8940FF" }),
              ],
            }),
            p.jsxs("linearGradient", {
              id: "paint2_linear_9452_35072",
              x1: "-4.38397",
              y1: "10.2073",
              x2: "-4.92775",
              y2: "21.3691",
              gradientUnits: "userSpaceOnUse",
              children: [
                p.jsx("stop", { offset: "0.24238", "stop-color": "#5498FF" }),
                p.jsx("stop", {
                  offset: "1",
                  "stop-color": "#A131F9",
                  "stop-opacity": "0",
                }),
              ],
            }),
            p.jsxs("linearGradient", {
              id: "paint3_linear_9452_35072",
              x1: "20.6437",
              y1: "15.0058",
              x2: "2.25991",
              y2: "21.8492",
              gradientUnits: "userSpaceOnUse",
              children: [
                p.jsx("stop", { "stop-color": "#5498FF" }),
                p.jsx("stop", { offset: "1", "stop-color": "#8940FF" }),
              ],
            }),
          ],
        }),
      ],
    }),
  Z4 = () =>
    p.jsxs("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        p.jsx("path", {
          d: "M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        p.jsx("path", {
          d: "M6 8H10",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        p.jsx("path", {
          d: "M8 6V10",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    }),
  B4 = () =>
    p.jsxs("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        p.jsx("path", {
          d: "M2 5L8 9L14 5",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        p.jsx("path", {
          d: "M14 11V5C14 4.44772 13.5523 4 13 4H3C2.44772 4 2 4.44772 2 5V11C2 11.5523 2.44772 12 3 12H13C13.5523 12 14 11.5523 14 11Z",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinejoin: "round",
        }),
      ],
    }),
  U4 = () =>
    p.jsxs("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        p.jsx("path", {
          d: "M10 2H4C3.44772 2 3 2.44772 3 3V13C3 13.5523 3.44772 14 4 14H12C12.5523 14 13 13.5523 13 13V6L10 2Z",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        p.jsx("path", {
          d: "M10 2V6H13",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    }),
  $4 = () =>
    p.jsxs("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        p.jsx("path", {
          d: "M3 8L8 4L13 8L8 12L3 8Z",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        p.jsx("path", {
          d: "M13 8V12",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        p.jsx("path", {
          d: "M5 9.5V12C5 12.5523 6.34315 13 8 13C9.65685 13 11 12.5523 11 12V9.5",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    }),
  W4 = () =>
    p.jsxs("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        p.jsx("path", {
          d: "M3 5L8 9L13 5",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        p.jsx("path", {
          d: "M13 11V5C13 4.44772 12.5523 4 12 4H4C3.44772 4 3 4.44772 3 5V11C3 11.5523 3.44772 12 4 12H12C12.5523 12 13 11.5523 13 11Z",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinejoin: "round",
        }),
      ],
    }),
  Q4 = () =>
    p.jsxs("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        p.jsx("path", {
          d: "M4 4L12 12",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        p.jsx("path", {
          d: "M12 4L4 12",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    }),
  G4 = [
    {
      title: "Support & Platform",
      links: [
        { href: "#", text: "Get help on our support hub", Icon: Z4 },
        { href: "#", text: "Questions? Contact sales", Icon: B4 },
        {
          href: "https://status.alchemy.com",
          text: "Checkout our platform status",
          Icon: A4,
        },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "#", text: "Using AI? View our llms.txt", Icon: U4 },
        { href: "#", text: "Learn more on Alchemy University", Icon: $4 },
      ],
    },
    {
      title: "Stay updated",
      links: [
        { href: "#", text: "Subscribe to our Newsletter", Icon: W4 },
        { href: "#", text: "Follow us on X", Icon: Q4 },
        {
          href: "https://discord.gg/9GnAcXQYZ6",
          text: "Join our discord",
          Icon: T4,
        },
      ],
    },
  ],
  K4 = _t.div`
  padding: 48px 24px;
  font-family: 'Inter', sans-serif;
  color: ${({ theme: o }) => (o.mode === "dark" ? "#FBFDFF" : "#020617")};
`,
  Y4 = _t.div`
  max-width: 1010px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,
  X4 = _t.div`
  display: flex;
  gap: 32px;
  padding-bottom: 48px;
  border-bottom: 1px solid
    ${({ theme: o }) => (o.mode === "dark" ? "#383838" : "#E2E8F0")};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`,
  J4 = _t.div`
  display: flex;
  column-gap: 36px;
  flex: 1;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    column-gap: 64px;
  }
`,
  q4 = _t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 14px;
`,
  b4 = _t.h3`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: o }) => (o.mode === "dark" ? "#FFFFFF" : "#0F172A")};
  margin: 0;
`,
  e8 = _t.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: inherit;
  text-decoration: none;
`,
  t8 = _t.div`
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`,
  n8 = _t.div`
  display: flex;
  gap: 24px;
  align-items: center;
  font-size: 14px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`,
  r8 = _t.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: #5167ff;
  }
`,
  l8 = () => {
    const [o, a] = tr.useState(
      document.documentElement.classList.contains("dark"),
    );
    tr.useEffect(() => {
      const d = new MutationObserver((y) => {
        y.forEach((w) => {
          w.target === document.documentElement &&
            w.attributeName === "class" &&
            a(document.documentElement.classList.contains("dark"));
        });
      });
      return (
        d.observe(document.documentElement, {
          attributes: !0,
          attributeFilter: ["class"],
        }),
        () => d.disconnect()
      );
    }, []);
    const s = { mode: o ? "dark" : "light" };
    return p.jsx(R4, {
      theme: s,
      children: p.jsx(K4, {
        children: p.jsxs(Y4, {
          children: [
            p.jsx(X4, {
              children: p.jsx(J4, {
                children: G4.map(({ title: d, links: y }) =>
                  p.jsxs(
                    q4,
                    {
                      children: [
                        p.jsx(b4, { children: d }),
                        y.map(({ href: w, text: j, Icon: N }) =>
                          p.jsxs(
                            e8,
                            {
                              href: w,
                              children: [
                                p.jsx(N, {}),
                                p.jsx("span", { children: j }),
                              ],
                            },
                            j,
                          ),
                        ),
                      ],
                    },
                    d,
                  ),
                ),
              }),
            }),
            p.jsxs(t8, {
              children: [
                o ? p.jsx(O4, {}) : p.jsx(D4, {}),
                p.jsxs(n8, {
                  children: [
                    p.jsx(r8, {
                      href: "https://legal.alchemy.com/#contract-kduihkaqm",
                      children: "Terms & Conditions",
                    }),
                    p.jsxs("span", {
                      children: [
                        "© ",
                        new Date().getFullYear(),
                        " Alchemy Insights, Inc",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  r0 = "fern-footer",
  l0 = async () => {
    if (!document.getElementById("alchemy-footer")) {
      const a = document.createElement("div");
      a.setAttribute("id", "alchemy-footer"),
        a.setAttribute("data-react-component", "true");
      let s = document.getElementById(r0);
      s ||
        ((s = document.createElement("div")),
        s.setAttribute("id", r0),
        document.body.appendChild(s)),
        s.insertBefore(a, s.firstChild),
        Nc.createRoot(a).render(
          p.jsx(an.StrictMode, { children: p.jsx(l8, {}) }),
        ),
        s && (s.style.display = "block");
    }
  };
window.addEventListener("load", async () => {
  window.location.pathname === "/docs" && (await l0()),
    new MutationObserver(async (o) => {
      var s;
      window.location.pathname === "/docs" &&
        o.some(
          (d) =>
            d.type === "childList" &&
            !document.getElementById("alchemy-footer"),
        ) &&
        (await l0()),
        window.location.pathname !== "/docs" &&
          document.getElementById("alchemy-footer") &&
          ((s = document.getElementById("alchemy-footer")) == null ||
            s.remove());
    }).observe(document.body, { childList: !0, subtree: !0 });
});
