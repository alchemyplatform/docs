(function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const y of document.querySelectorAll('link[rel="modulepreload"]')) d(y);
  new MutationObserver((y) => {
    for (const w of y)
      if (w.type === "childList")
        for (const _ of w.addedNodes)
          _.tagName === "LINK" && _.rel === "modulepreload" && d(_);
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
function _d(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var gu = { exports: {} },
  Kr = {},
  wu = { exports: {} },
  ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ic;
function Pd() {
  if (Ic) return ee;
  Ic = 1;
  var i = Symbol.for("react.element"),
    a = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    d = Symbol.for("react.strict_mode"),
    y = Symbol.for("react.profiler"),
    w = Symbol.for("react.provider"),
    _ = Symbol.for("react.context"),
    T = Symbol.for("react.forward_ref"),
    N = Symbol.for("react.suspense"),
    Q = Symbol.for("react.memo"),
    U = Symbol.for("react.lazy"),
    O = Symbol.iterator;
  function D(h) {
    return h === null || typeof h != "object"
      ? null
      : ((h = (O && h[O]) || h["@@iterator"]),
        typeof h == "function" ? h : null);
  }
  var K = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ne = Object.assign,
    W = {};
  function G(h, C, Z) {
    (this.props = h),
      (this.context = C),
      (this.refs = W),
      (this.updater = Z || K);
  }
  (G.prototype.isReactComponent = {}),
    (G.prototype.setState = function (h, C) {
      if (typeof h != "object" && typeof h != "function" && h != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, h, C, "setState");
    }),
    (G.prototype.forceUpdate = function (h) {
      this.updater.enqueueForceUpdate(this, h, "forceUpdate");
    });
  function fe() {}
  fe.prototype = G.prototype;
  function oe(h, C, Z) {
    (this.props = h),
      (this.context = C),
      (this.refs = W),
      (this.updater = Z || K);
  }
  var re = (oe.prototype = new fe());
  (re.constructor = oe), ne(re, G.prototype), (re.isPureReactComponent = !0);
  var q = Array.isArray,
    ae = Object.prototype.hasOwnProperty,
    Y = { current: null },
    B = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ne(h, C, Z) {
    var X,
      te = {},
      b = null,
      ce = null;
    if (C != null)
      for (X in (C.ref !== void 0 && (ce = C.ref),
      C.key !== void 0 && (b = "" + C.key),
      C))
        ae.call(C, X) && !B.hasOwnProperty(X) && (te[X] = C[X]);
    var le = arguments.length - 2;
    if (le === 1) te.children = Z;
    else if (1 < le) {
      for (var ue = Array(le), Me = 0; Me < le; Me++)
        ue[Me] = arguments[Me + 2];
      te.children = ue;
    }
    if (h && h.defaultProps)
      for (X in ((le = h.defaultProps), le))
        te[X] === void 0 && (te[X] = le[X]);
    return {
      $$typeof: i,
      type: h,
      key: b,
      ref: ce,
      props: te,
      _owner: Y.current,
    };
  }
  function qe(h, C) {
    return {
      $$typeof: i,
      type: h.type,
      key: C,
      ref: h.ref,
      props: h.props,
      _owner: h._owner,
    };
  }
  function ht(h) {
    return typeof h == "object" && h !== null && h.$$typeof === i;
  }
  function Rt(h) {
    var C = { "=": "=0", ":": "=2" };
    return (
      "$" +
      h.replace(/[=:]/g, function (Z) {
        return C[Z];
      })
    );
  }
  var ot = /\/+/g;
  function Ue(h, C) {
    return typeof h == "object" && h !== null && h.key != null
      ? Rt("" + h.key)
      : C.toString(36);
  }
  function be(h, C, Z, X, te) {
    var b = typeof h;
    (b === "undefined" || b === "boolean") && (h = null);
    var ce = !1;
    if (h === null) ce = !0;
    else
      switch (b) {
        case "string":
        case "number":
          ce = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case i:
            case a:
              ce = !0;
          }
      }
    if (ce)
      return (
        (ce = h),
        (te = te(ce)),
        (h = X === "" ? "." + Ue(ce, 0) : X),
        q(te)
          ? ((Z = ""),
            h != null && (Z = h.replace(ot, "$&/") + "/"),
            be(te, C, Z, "", function (Me) {
              return Me;
            }))
          : te != null &&
            (ht(te) &&
              (te = qe(
                te,
                Z +
                  (!te.key || (ce && ce.key === te.key)
                    ? ""
                    : ("" + te.key).replace(ot, "$&/") + "/") +
                  h,
              )),
            C.push(te)),
        1
      );
    if (((ce = 0), (X = X === "" ? "." : X + ":"), q(h)))
      for (var le = 0; le < h.length; le++) {
        b = h[le];
        var ue = X + Ue(b, le);
        ce += be(b, C, Z, ue, te);
      }
    else if (((ue = D(h)), typeof ue == "function"))
      for (h = ue.call(h), le = 0; !(b = h.next()).done; )
        (b = b.value), (ue = X + Ue(b, le++)), (ce += be(b, C, Z, ue, te));
    else if (b === "object")
      throw (
        ((C = String(h)),
        Error(
          "Objects are not valid as a React child (found: " +
            (C === "[object Object]"
              ? "object with keys {" + Object.keys(h).join(", ") + "}"
              : C) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    return ce;
  }
  function it(h, C, Z) {
    if (h == null) return h;
    var X = [],
      te = 0;
    return (
      be(h, X, "", "", function (b) {
        return C.call(Z, b, te++);
      }),
      X
    );
  }
  function De(h) {
    if (h._status === -1) {
      var C = h._result;
      (C = C()),
        C.then(
          function (Z) {
            (h._status === 0 || h._status === -1) &&
              ((h._status = 1), (h._result = Z));
          },
          function (Z) {
            (h._status === 0 || h._status === -1) &&
              ((h._status = 2), (h._result = Z));
          },
        ),
        h._status === -1 && ((h._status = 0), (h._result = C));
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var he = { current: null },
    P = { transition: null },
    j = {
      ReactCurrentDispatcher: he,
      ReactCurrentBatchConfig: P,
      ReactCurrentOwner: Y,
    };
  function L() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ee.Children = {
      map: it,
      forEach: function (h, C, Z) {
        it(
          h,
          function () {
            C.apply(this, arguments);
          },
          Z,
        );
      },
      count: function (h) {
        var C = 0;
        return (
          it(h, function () {
            C++;
          }),
          C
        );
      },
      toArray: function (h) {
        return (
          it(h, function (C) {
            return C;
          }) || []
        );
      },
      only: function (h) {
        if (!ht(h))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return h;
      },
    }),
    (ee.Component = G),
    (ee.Fragment = s),
    (ee.Profiler = y),
    (ee.PureComponent = oe),
    (ee.StrictMode = d),
    (ee.Suspense = N),
    (ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j),
    (ee.act = L),
    (ee.cloneElement = function (h, C, Z) {
      if (h == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            h +
            ".",
        );
      var X = ne({}, h.props),
        te = h.key,
        b = h.ref,
        ce = h._owner;
      if (C != null) {
        if (
          (C.ref !== void 0 && ((b = C.ref), (ce = Y.current)),
          C.key !== void 0 && (te = "" + C.key),
          h.type && h.type.defaultProps)
        )
          var le = h.type.defaultProps;
        for (ue in C)
          ae.call(C, ue) &&
            !B.hasOwnProperty(ue) &&
            (X[ue] = C[ue] === void 0 && le !== void 0 ? le[ue] : C[ue]);
      }
      var ue = arguments.length - 2;
      if (ue === 1) X.children = Z;
      else if (1 < ue) {
        le = Array(ue);
        for (var Me = 0; Me < ue; Me++) le[Me] = arguments[Me + 2];
        X.children = le;
      }
      return {
        $$typeof: i,
        type: h.type,
        key: te,
        ref: b,
        props: X,
        _owner: ce,
      };
    }),
    (ee.createContext = function (h) {
      return (
        (h = {
          $$typeof: _,
          _currentValue: h,
          _currentValue2: h,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (h.Provider = { $$typeof: w, _context: h }),
        (h.Consumer = h)
      );
    }),
    (ee.createElement = Ne),
    (ee.createFactory = function (h) {
      var C = Ne.bind(null, h);
      return (C.type = h), C;
    }),
    (ee.createRef = function () {
      return { current: null };
    }),
    (ee.forwardRef = function (h) {
      return { $$typeof: T, render: h };
    }),
    (ee.isValidElement = ht),
    (ee.lazy = function (h) {
      return { $$typeof: U, _payload: { _status: -1, _result: h }, _init: De };
    }),
    (ee.memo = function (h, C) {
      return { $$typeof: Q, type: h, compare: C === void 0 ? null : C };
    }),
    (ee.startTransition = function (h) {
      var C = P.transition;
      P.transition = {};
      try {
        h();
      } finally {
        P.transition = C;
      }
    }),
    (ee.unstable_act = L),
    (ee.useCallback = function (h, C) {
      return he.current.useCallback(h, C);
    }),
    (ee.useContext = function (h) {
      return he.current.useContext(h);
    }),
    (ee.useDebugValue = function () {}),
    (ee.useDeferredValue = function (h) {
      return he.current.useDeferredValue(h);
    }),
    (ee.useEffect = function (h, C) {
      return he.current.useEffect(h, C);
    }),
    (ee.useId = function () {
      return he.current.useId();
    }),
    (ee.useImperativeHandle = function (h, C, Z) {
      return he.current.useImperativeHandle(h, C, Z);
    }),
    (ee.useInsertionEffect = function (h, C) {
      return he.current.useInsertionEffect(h, C);
    }),
    (ee.useLayoutEffect = function (h, C) {
      return he.current.useLayoutEffect(h, C);
    }),
    (ee.useMemo = function (h, C) {
      return he.current.useMemo(h, C);
    }),
    (ee.useReducer = function (h, C, Z) {
      return he.current.useReducer(h, C, Z);
    }),
    (ee.useRef = function (h) {
      return he.current.useRef(h);
    }),
    (ee.useState = function (h) {
      return he.current.useState(h);
    }),
    (ee.useSyncExternalStore = function (h, C, Z) {
      return he.current.useSyncExternalStore(h, C, Z);
    }),
    (ee.useTransition = function () {
      return he.current.useTransition();
    }),
    (ee.version = "18.3.1"),
    ee
  );
}
var Mc;
function Mu() {
  return Mc || ((Mc = 1), (wu.exports = Pd())), wu.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jc;
function Nd() {
  if (jc) return Kr;
  jc = 1;
  var i = Mu(),
    a = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    d = Object.prototype.hasOwnProperty,
    y = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(T, N, Q) {
    var U,
      O = {},
      D = null,
      K = null;
    Q !== void 0 && (D = "" + Q),
      N.key !== void 0 && (D = "" + N.key),
      N.ref !== void 0 && (K = N.ref);
    for (U in N) d.call(N, U) && !w.hasOwnProperty(U) && (O[U] = N[U]);
    if (T && T.defaultProps)
      for (U in ((N = T.defaultProps), N)) O[U] === void 0 && (O[U] = N[U]);
    return {
      $$typeof: a,
      type: T,
      key: D,
      ref: K,
      props: O,
      _owner: y.current,
    };
  }
  return (Kr.Fragment = s), (Kr.jsx = _), (Kr.jsxs = _), Kr;
}
var Oc;
function Ld() {
  return Oc || ((Oc = 1), (gu.exports = Nd())), gu.exports;
}
var V = Ld(),
  tr = Mu();
const an = _d(tr);
var oo = {},
  Cu = { exports: {} },
  Je = {},
  Su = { exports: {} },
  ku = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dc;
function Fd() {
  return (
    Dc ||
      ((Dc = 1),
      (function (i) {
        function a(P, j) {
          var L = P.length;
          P.push(j);
          e: for (; 0 < L; ) {
            var h = (L - 1) >>> 1,
              C = P[h];
            if (0 < y(C, j)) (P[h] = j), (P[L] = C), (L = h);
            else break e;
          }
        }
        function s(P) {
          return P.length === 0 ? null : P[0];
        }
        function d(P) {
          if (P.length === 0) return null;
          var j = P[0],
            L = P.pop();
          if (L !== j) {
            P[0] = L;
            e: for (var h = 0, C = P.length, Z = C >>> 1; h < Z; ) {
              var X = 2 * (h + 1) - 1,
                te = P[X],
                b = X + 1,
                ce = P[b];
              if (0 > y(te, L))
                b < C && 0 > y(ce, te)
                  ? ((P[h] = ce), (P[b] = L), (h = b))
                  : ((P[h] = te), (P[X] = L), (h = X));
              else if (b < C && 0 > y(ce, L)) (P[h] = ce), (P[b] = L), (h = b);
              else break e;
            }
          }
          return j;
        }
        function y(P, j) {
          var L = P.sortIndex - j.sortIndex;
          return L !== 0 ? L : P.id - j.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var w = performance;
          i.unstable_now = function () {
            return w.now();
          };
        } else {
          var _ = Date,
            T = _.now();
          i.unstable_now = function () {
            return _.now() - T;
          };
        }
        var N = [],
          Q = [],
          U = 1,
          O = null,
          D = 3,
          K = !1,
          ne = !1,
          W = !1,
          G = typeof setTimeout == "function" ? setTimeout : null,
          fe = typeof clearTimeout == "function" ? clearTimeout : null,
          oe = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function re(P) {
          for (var j = s(Q); j !== null; ) {
            if (j.callback === null) d(Q);
            else if (j.startTime <= P)
              d(Q), (j.sortIndex = j.expirationTime), a(N, j);
            else break;
            j = s(Q);
          }
        }
        function q(P) {
          if (((W = !1), re(P), !ne))
            if (s(N) !== null) (ne = !0), De(ae);
            else {
              var j = s(Q);
              j !== null && he(q, j.startTime - P);
            }
        }
        function ae(P, j) {
          (ne = !1), W && ((W = !1), fe(Ne), (Ne = -1)), (K = !0);
          var L = D;
          try {
            for (
              re(j), O = s(N);
              O !== null && (!(O.expirationTime > j) || (P && !Rt()));

            ) {
              var h = O.callback;
              if (typeof h == "function") {
                (O.callback = null), (D = O.priorityLevel);
                var C = h(O.expirationTime <= j);
                (j = i.unstable_now()),
                  typeof C == "function"
                    ? (O.callback = C)
                    : O === s(N) && d(N),
                  re(j);
              } else d(N);
              O = s(N);
            }
            if (O !== null) var Z = !0;
            else {
              var X = s(Q);
              X !== null && he(q, X.startTime - j), (Z = !1);
            }
            return Z;
          } finally {
            (O = null), (D = L), (K = !1);
          }
        }
        var Y = !1,
          B = null,
          Ne = -1,
          qe = 5,
          ht = -1;
        function Rt() {
          return !(i.unstable_now() - ht < qe);
        }
        function ot() {
          if (B !== null) {
            var P = i.unstable_now();
            ht = P;
            var j = !0;
            try {
              j = B(!0, P);
            } finally {
              j ? Ue() : ((Y = !1), (B = null));
            }
          } else Y = !1;
        }
        var Ue;
        if (typeof oe == "function")
          Ue = function () {
            oe(ot);
          };
        else if (typeof MessageChannel < "u") {
          var be = new MessageChannel(),
            it = be.port2;
          (be.port1.onmessage = ot),
            (Ue = function () {
              it.postMessage(null);
            });
        } else
          Ue = function () {
            G(ot, 0);
          };
        function De(P) {
          (B = P), Y || ((Y = !0), Ue());
        }
        function he(P, j) {
          Ne = G(function () {
            P(i.unstable_now());
          }, j);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (P) {
            P.callback = null;
          }),
          (i.unstable_continueExecution = function () {
            ne || K || ((ne = !0), De(ae));
          }),
          (i.unstable_forceFrameRate = function (P) {
            0 > P || 125 < P
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (qe = 0 < P ? Math.floor(1e3 / P) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return D;
          }),
          (i.unstable_getFirstCallbackNode = function () {
            return s(N);
          }),
          (i.unstable_next = function (P) {
            switch (D) {
              case 1:
              case 2:
              case 3:
                var j = 3;
                break;
              default:
                j = D;
            }
            var L = D;
            D = j;
            try {
              return P();
            } finally {
              D = L;
            }
          }),
          (i.unstable_pauseExecution = function () {}),
          (i.unstable_requestPaint = function () {}),
          (i.unstable_runWithPriority = function (P, j) {
            switch (P) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                P = 3;
            }
            var L = D;
            D = P;
            try {
              return j();
            } finally {
              D = L;
            }
          }),
          (i.unstable_scheduleCallback = function (P, j, L) {
            var h = i.unstable_now();
            switch (
              (typeof L == "object" && L !== null
                ? ((L = L.delay),
                  (L = typeof L == "number" && 0 < L ? h + L : h))
                : (L = h),
              P)
            ) {
              case 1:
                var C = -1;
                break;
              case 2:
                C = 250;
                break;
              case 5:
                C = 1073741823;
                break;
              case 4:
                C = 1e4;
                break;
              default:
                C = 5e3;
            }
            return (
              (C = L + C),
              (P = {
                id: U++,
                callback: j,
                priorityLevel: P,
                startTime: L,
                expirationTime: C,
                sortIndex: -1,
              }),
              L > h
                ? ((P.sortIndex = L),
                  a(Q, P),
                  s(N) === null &&
                    P === s(Q) &&
                    (W ? (fe(Ne), (Ne = -1)) : (W = !0), he(q, L - h)))
                : ((P.sortIndex = C), a(N, P), ne || K || ((ne = !0), De(ae))),
              P
            );
          }),
          (i.unstable_shouldYield = Rt),
          (i.unstable_wrapCallback = function (P) {
            var j = D;
            return function () {
              var L = D;
              D = j;
              try {
                return P.apply(this, arguments);
              } finally {
                D = L;
              }
            };
          });
      })(ku)),
    ku
  );
}
var Ac;
function zd() {
  return Ac || ((Ac = 1), (Su.exports = Fd())), Su.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hc;
function Rd() {
  if (Hc) return Je;
  Hc = 1;
  var i = Mu(),
    a = zd();
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
    _(e, t), _(e + "Capture", t);
  }
  function _(e, t) {
    for (y[e] = t, e = 0; e < t.length; e++) d.add(t[e]);
  }
  var T = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    N = Object.prototype.hasOwnProperty,
    Q =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    U = {},
    O = {};
  function D(e) {
    return N.call(O, e)
      ? !0
      : N.call(U, e)
        ? !1
        : Q.test(e)
          ? (O[e] = !0)
          : ((U[e] = !0), !1);
  }
  function K(e, t, n, r) {
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
    if (t === null || typeof t > "u" || K(e, t, n, r)) return !0;
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
  function W(e, t, n, r, l, o, u) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = u);
  }
  var G = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      G[e] = new W(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      G[t] = new W(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        G[e] = new W(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      G[e] = new W(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        G[e] = new W(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      G[e] = new W(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      G[e] = new W(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      G[e] = new W(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      G[e] = new W(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var fe = /[\-:]([a-z])/g;
  function oe(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(fe, oe);
      G[t] = new W(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(fe, oe);
        G[t] = new W(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(fe, oe);
      G[t] = new W(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      G[e] = new W(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (G.xlinkHref = new W(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      G[e] = new W(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function re(e, t, n, r) {
    var l = G.hasOwnProperty(t) ? G[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (ne(t, n, l, r) && (n = null),
      r || l === null
        ? D(t) &&
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
  var q = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ae = Symbol.for("react.element"),
    Y = Symbol.for("react.portal"),
    B = Symbol.for("react.fragment"),
    Ne = Symbol.for("react.strict_mode"),
    qe = Symbol.for("react.profiler"),
    ht = Symbol.for("react.provider"),
    Rt = Symbol.for("react.context"),
    ot = Symbol.for("react.forward_ref"),
    Ue = Symbol.for("react.suspense"),
    be = Symbol.for("react.suspense_list"),
    it = Symbol.for("react.memo"),
    De = Symbol.for("react.lazy"),
    he = Symbol.for("react.offscreen"),
    P = Symbol.iterator;
  function j(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (P && e[P]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var L = Object.assign,
    h;
  function C(e) {
    if (h === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        h = (t && t[1]) || "";
      }
    return (
      `
` +
      h +
      e
    );
  }
  var Z = !1;
  function X(e, t) {
    if (!e || Z) return "";
    Z = !0;
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
          } catch (g) {
            var r = g;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (g) {
            r = g;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (g) {
          r = g;
        }
        e();
      }
    } catch (g) {
      if (g && r && typeof g.stack == "string") {
        for (
          var l = g.stack.split(`
`),
            o = r.stack.split(`
`),
            u = l.length - 1,
            c = o.length - 1;
          1 <= u && 0 <= c && l[u] !== o[c];

        )
          c--;
        for (; 1 <= u && 0 <= c; u--, c--)
          if (l[u] !== o[c]) {
            if (u !== 1 || c !== 1)
              do
                if ((u--, c--, 0 > c || l[u] !== o[c])) {
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
      (Z = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? C(e) : "";
  }
  function te(e) {
    switch (e.tag) {
      case 5:
        return C(e.type);
      case 16:
        return C("Lazy");
      case 13:
        return C("Suspense");
      case 19:
        return C("SuspenseList");
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
      case B:
        return "Fragment";
      case Y:
        return "Portal";
      case qe:
        return "Profiler";
      case Ne:
        return "StrictMode";
      case Ue:
        return "Suspense";
      case be:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Rt:
          return (e.displayName || "Context") + ".Consumer";
        case ht:
          return (e._context.displayName || "Context") + ".Provider";
        case ot:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case it:
          return (
            (t = e.displayName || null), t !== null ? t : b(e.type) || "Memo"
          );
        case De:
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
        return t === Ne ? "StrictMode" : "Mode";
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
  function Me(e) {
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
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (u) {
            (r = "" + u), o.call(this, u);
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
  function Tt(e) {
    e._valueTracker || (e._valueTracker = Me(e));
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
  function _o(e, t) {
    var n = t.checked;
    return L({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Bu(e, t) {
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
  function Vu(e, t) {
    (t = t.checked), t != null && re(e, "checked", t, !1);
  }
  function Po(e, t) {
    Vu(e, t);
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
      ? No(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && No(e, t.type, le(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function $u(e, t, n) {
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
  function No(e, t, n) {
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
  function Lo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return L({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Uu(e, t) {
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
  function Wu(e, t) {
    var n = le(t.value),
      r = le(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function Qu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Ku(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Fo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Ku(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Jr,
    Yu = (function (e) {
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
    Ff = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ar).forEach(function (e) {
    Ff.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ar[t] = ar[e]);
    });
  });
  function Zu(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (ar.hasOwnProperty(e) && ar[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Gu(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Zu(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var zf = L(
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
  function zo(e, t) {
    if (t) {
      if (zf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function Ro(e, t) {
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
  var To = null;
  function Io(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Mo = null,
    Fn = null,
    zn = null;
  function Xu(e) {
    if ((e = Rr(e))) {
      if (typeof Mo != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = Cl(t)), Mo(e.stateNode, e.type, t));
    }
  }
  function Ju(e) {
    Fn ? (zn ? zn.push(e) : (zn = [e])) : (Fn = e);
  }
  function qu() {
    if (Fn) {
      var e = Fn,
        t = zn;
      if (((zn = Fn = null), Xu(e), t)) for (e = 0; e < t.length; e++) Xu(t[e]);
    }
  }
  function bu(e, t) {
    return e(t);
  }
  function es() {}
  var jo = !1;
  function ts(e, t, n) {
    if (jo) return e(t, n);
    jo = !0;
    try {
      return bu(e, t, n);
    } finally {
      (jo = !1), (Fn !== null || zn !== null) && (es(), qu());
    }
  }
  function cr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Cl(n);
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
  var Oo = !1;
  if (T)
    try {
      var fr = {};
      Object.defineProperty(fr, "passive", {
        get: function () {
          Oo = !0;
        },
      }),
        window.addEventListener("test", fr, fr),
        window.removeEventListener("test", fr, fr);
    } catch {
      Oo = !1;
    }
  function Rf(e, t, n, r, l, o, u, c, f) {
    var g = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, g);
    } catch (k) {
      this.onError(k);
    }
  }
  var dr = !1,
    qr = null,
    br = !1,
    Do = null,
    Tf = {
      onError: function (e) {
        (dr = !0), (qr = e);
      },
    };
  function If(e, t, n, r, l, o, u, c, f) {
    (dr = !1), (qr = null), Rf.apply(Tf, arguments);
  }
  function Mf(e, t, n, r, l, o, u, c, f) {
    if ((If.apply(this, arguments), dr)) {
      if (dr) {
        var g = qr;
        (dr = !1), (qr = null);
      } else throw Error(s(198));
      br || ((br = !0), (Do = g));
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
  function ns(e) {
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
  function rs(e) {
    if (cn(e) !== e) throw Error(s(188));
  }
  function jf(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = cn(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return rs(l), e;
          if (o === r) return rs(l), t;
          o = o.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return) (n = l), (r = o);
      else {
        for (var u = !1, c = l.child; c; ) {
          if (c === n) {
            (u = !0), (n = l), (r = o);
            break;
          }
          if (c === r) {
            (u = !0), (r = l), (n = o);
            break;
          }
          c = c.sibling;
        }
        if (!u) {
          for (c = o.child; c; ) {
            if (c === n) {
              (u = !0), (n = o), (r = l);
              break;
            }
            if (c === r) {
              (u = !0), (r = o), (n = l);
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
  function ls(e) {
    return (e = jf(e)), e !== null ? os(e) : null;
  }
  function os(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = os(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var is = a.unstable_scheduleCallback,
    us = a.unstable_cancelCallback,
    Of = a.unstable_shouldYield,
    Df = a.unstable_requestPaint,
    xe = a.unstable_now,
    Af = a.unstable_getCurrentPriorityLevel,
    Ao = a.unstable_ImmediatePriority,
    ss = a.unstable_UserBlockingPriority,
    el = a.unstable_NormalPriority,
    Hf = a.unstable_LowPriority,
    as = a.unstable_IdlePriority,
    tl = null,
    _t = null;
  function Bf(e) {
    if (_t && typeof _t.onCommitFiberRoot == "function")
      try {
        _t.onCommitFiberRoot(tl, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var vt = Math.clz32 ? Math.clz32 : Uf,
    Vf = Math.log,
    $f = Math.LN2;
  function Uf(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Vf(e) / $f) | 0)) | 0;
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
      o = e.pingedLanes,
      u = n & 268435455;
    if (u !== 0) {
      var c = u & ~l;
      c !== 0 ? (r = pr(c)) : ((o &= u), o !== 0 && (r = pr(o)));
    } else (u = n & ~l), u !== 0 ? (r = pr(u)) : o !== 0 && (r = pr(o));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - vt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function Wf(e, t) {
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
  function Qf(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var u = 31 - vt(o),
        c = 1 << u,
        f = l[u];
      f === -1
        ? ((c & n) === 0 || (c & r) !== 0) && (l[u] = Wf(c, t))
        : f <= t && (e.expiredLanes |= c),
        (o &= ~c);
    }
  }
  function Ho(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function cs() {
    var e = nl;
    return (nl <<= 1), (nl & 4194240) === 0 && (nl = 64), e;
  }
  function Bo(e) {
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
  function Kf(e, t) {
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
        o = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
    }
  }
  function Vo(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - vt(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var pe = 0;
  function fs(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var ds,
    $o,
    ps,
    hs,
    ms,
    Uo = !1,
    ol = [],
    $t = null,
    Ut = null,
    Wt = null,
    mr = new Map(),
    vr = new Map(),
    Qt = [],
    Yf =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function vs(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        $t = null;
        break;
      case "dragenter":
      case "dragleave":
        Ut = null;
        break;
      case "mouseover":
      case "mouseout":
        Wt = null;
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
  function yr(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = Rr(t)), t !== null && $o(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Zf(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ($t = yr($t, e, t, n, r, l)), !0;
      case "dragenter":
        return (Ut = yr(Ut, e, t, n, r, l)), !0;
      case "mouseover":
        return (Wt = yr(Wt, e, t, n, r, l)), !0;
      case "pointerover":
        var o = l.pointerId;
        return mr.set(o, yr(mr.get(o) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (o = l.pointerId), vr.set(o, yr(vr.get(o) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function ys(e) {
    var t = fn(e.target);
    if (t !== null) {
      var n = cn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = ns(n)), t !== null)) {
            (e.blockedOn = t),
              ms(e.priority, function () {
                ps(n);
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
  function il(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Qo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (To = r), n.target.dispatchEvent(r), (To = null);
      } else return (t = Rr(n)), t !== null && $o(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function gs(e, t, n) {
    il(e) && n.delete(t);
  }
  function Gf() {
    (Uo = !1),
      $t !== null && il($t) && ($t = null),
      Ut !== null && il(Ut) && (Ut = null),
      Wt !== null && il(Wt) && (Wt = null),
      mr.forEach(gs),
      vr.forEach(gs);
  }
  function gr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Uo ||
        ((Uo = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, Gf)));
  }
  function wr(e) {
    function t(l) {
      return gr(l, e);
    }
    if (0 < ol.length) {
      gr(ol[0], e);
      for (var n = 1; n < ol.length; n++) {
        var r = ol[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      $t !== null && gr($t, e),
        Ut !== null && gr(Ut, e),
        Wt !== null && gr(Wt, e),
        mr.forEach(t),
        vr.forEach(t),
        n = 0;
      n < Qt.length;
      n++
    )
      (r = Qt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Qt.length && ((n = Qt[0]), n.blockedOn === null); )
      ys(n), n.blockedOn === null && Qt.shift();
  }
  var Rn = q.ReactCurrentBatchConfig,
    ul = !0;
  function Xf(e, t, n, r) {
    var l = pe,
      o = Rn.transition;
    Rn.transition = null;
    try {
      (pe = 1), Wo(e, t, n, r);
    } finally {
      (pe = l), (Rn.transition = o);
    }
  }
  function Jf(e, t, n, r) {
    var l = pe,
      o = Rn.transition;
    Rn.transition = null;
    try {
      (pe = 4), Wo(e, t, n, r);
    } finally {
      (pe = l), (Rn.transition = o);
    }
  }
  function Wo(e, t, n, r) {
    if (ul) {
      var l = Qo(e, t, n, r);
      if (l === null) si(e, t, r, sl, n), vs(e, r);
      else if (Zf(l, e, t, n, r)) r.stopPropagation();
      else if ((vs(e, r), t & 4 && -1 < Yf.indexOf(e))) {
        for (; l !== null; ) {
          var o = Rr(l);
          if (
            (o !== null && ds(o),
            (o = Qo(e, t, n, r)),
            o === null && si(e, t, r, sl, n),
            o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else si(e, t, r, null, n);
    }
  }
  var sl = null;
  function Qo(e, t, n, r) {
    if (((sl = null), (e = Io(r)), (e = fn(e)), e !== null))
      if (((t = cn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = ns(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (sl = e), null;
  }
  function ws(e) {
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
        switch (Af()) {
          case Ao:
            return 1;
          case ss:
            return 4;
          case el:
          case Hf:
            return 16;
          case as:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Kt = null,
    Ko = null,
    al = null;
  function Cs() {
    if (al) return al;
    var e,
      t = Ko,
      n = t.length,
      r,
      l = "value" in Kt ? Kt.value : Kt.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[o - r]; r++);
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
  function Ss() {
    return !1;
  }
  function et(e) {
    function t(n, r, l, o, u) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = u),
        (this.currentTarget = null);
      for (var c in e)
        e.hasOwnProperty(c) && ((n = e[c]), (this[c] = n ? n(o) : o[c]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? fl
          : Ss),
        (this.isPropagationStopped = Ss),
        this
      );
    }
    return (
      L(t.prototype, {
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
  var Tn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Yo = et(Tn),
    Cr = L({}, Tn, { view: 0, detail: 0 }),
    qf = et(Cr),
    Zo,
    Go,
    Sr,
    dl = L({}, Cr, {
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
      getModifierState: Jo,
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
          : (e !== Sr &&
              (Sr && e.type === "mousemove"
                ? ((Zo = e.screenX - Sr.screenX), (Go = e.screenY - Sr.screenY))
                : (Go = Zo = 0),
              (Sr = e)),
            Zo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Go;
      },
    }),
    ks = et(dl),
    bf = L({}, dl, { dataTransfer: 0 }),
    e1 = et(bf),
    t1 = L({}, Cr, { relatedTarget: 0 }),
    Xo = et(t1),
    n1 = L({}, Tn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    r1 = et(n1),
    l1 = L({}, Tn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    o1 = et(l1),
    i1 = L({}, Tn, { data: 0 }),
    xs = et(i1),
    u1 = {
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
    a1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function c1(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = a1[e])
        ? !!t[e]
        : !1;
  }
  function Jo() {
    return c1;
  }
  var f1 = L({}, Cr, {
      key: function (e) {
        if (e.key) {
          var t = u1[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = cl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
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
      getModifierState: Jo,
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
    d1 = et(f1),
    p1 = L({}, dl, {
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
    Es = et(p1),
    h1 = L({}, Cr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Jo,
    }),
    m1 = et(h1),
    v1 = L({}, Tn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    y1 = et(v1),
    g1 = L({}, dl, {
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
    w1 = et(g1),
    C1 = [9, 13, 27, 32],
    qo = T && "CompositionEvent" in window,
    kr = null;
  T && "documentMode" in document && (kr = document.documentMode);
  var S1 = T && "TextEvent" in window && !kr,
    _s = T && (!qo || (kr && 8 < kr && 11 >= kr)),
    Ps = " ",
    Ns = !1;
  function Ls(e, t) {
    switch (e) {
      case "keyup":
        return C1.indexOf(t.keyCode) !== -1;
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
  function Fs(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var In = !1;
  function k1(e, t) {
    switch (e) {
      case "compositionend":
        return Fs(t);
      case "keypress":
        return t.which !== 32 ? null : ((Ns = !0), Ps);
      case "textInput":
        return (e = t.data), e === Ps && Ns ? null : e;
      default:
        return null;
    }
  }
  function x1(e, t) {
    if (In)
      return e === "compositionend" || (!qo && Ls(e, t))
        ? ((e = Cs()), (al = Ko = Kt = null), (In = !1), e)
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
        return _s && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var E1 = {
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
  function zs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!E1[e.type] : t === "textarea";
  }
  function Rs(e, t, n, r) {
    Ju(r),
      (t = yl(t, "onChange")),
      0 < t.length &&
        ((n = new Yo("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var xr = null,
    Er = null;
  function _1(e) {
    Gs(e, 0);
  }
  function pl(e) {
    var t = An(e);
    if (mt(t)) return e;
  }
  function P1(e, t) {
    if (e === "change") return t;
  }
  var Ts = !1;
  if (T) {
    var bo;
    if (T) {
      var ei = "oninput" in document;
      if (!ei) {
        var Is = document.createElement("div");
        Is.setAttribute("oninput", "return;"),
          (ei = typeof Is.oninput == "function");
      }
      bo = ei;
    } else bo = !1;
    Ts = bo && (!document.documentMode || 9 < document.documentMode);
  }
  function Ms() {
    xr && (xr.detachEvent("onpropertychange", js), (Er = xr = null));
  }
  function js(e) {
    if (e.propertyName === "value" && pl(Er)) {
      var t = [];
      Rs(t, Er, e, Io(e)), ts(_1, t);
    }
  }
  function N1(e, t, n) {
    e === "focusin"
      ? (Ms(), (xr = t), (Er = n), xr.attachEvent("onpropertychange", js))
      : e === "focusout" && Ms();
  }
  function L1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return pl(Er);
  }
  function F1(e, t) {
    if (e === "click") return pl(t);
  }
  function z1(e, t) {
    if (e === "input" || e === "change") return pl(t);
  }
  function R1(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var yt = typeof Object.is == "function" ? Object.is : R1;
  function _r(e, t) {
    if (yt(e, t)) return !0;
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
      if (!N.call(t, l) || !yt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Os(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ds(e, t) {
    var n = Os(e);
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
      n = Os(n);
    }
  }
  function As(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? As(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Hs() {
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
  function ti(e) {
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
  function T1(e) {
    var t = Hs(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      As(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && ti(n)) {
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
            o = Math.min(r.start, l);
          (r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = Ds(n, o));
          var u = Ds(n, r);
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
            o > r
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
  var I1 = T && "documentMode" in document && 11 >= document.documentMode,
    Mn = null,
    ni = null,
    Pr = null,
    ri = !1;
  function Bs(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ri ||
      Mn == null ||
      Mn !== Xr(r) ||
      ((r = Mn),
      "selectionStart" in r && ti(r)
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
      (Pr && _r(Pr, r)) ||
        ((Pr = r),
        (r = yl(ni, "onSelect")),
        0 < r.length &&
          ((t = new Yo("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Mn))));
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
  var jn = {
      animationend: hl("Animation", "AnimationEnd"),
      animationiteration: hl("Animation", "AnimationIteration"),
      animationstart: hl("Animation", "AnimationStart"),
      transitionend: hl("Transition", "TransitionEnd"),
    },
    li = {},
    Vs = {};
  T &&
    ((Vs = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete jn.animationend.animation,
      delete jn.animationiteration.animation,
      delete jn.animationstart.animation),
    "TransitionEvent" in window || delete jn.transitionend.transition);
  function ml(e) {
    if (li[e]) return li[e];
    if (!jn[e]) return e;
    var t = jn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Vs) return (li[e] = t[n]);
    return e;
  }
  var $s = ml("animationend"),
    Us = ml("animationiteration"),
    Ws = ml("animationstart"),
    Qs = ml("transitionend"),
    Ks = new Map(),
    Ys =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Yt(e, t) {
    Ks.set(e, t), w(t, [e]);
  }
  for (var oi = 0; oi < Ys.length; oi++) {
    var ii = Ys[oi],
      M1 = ii.toLowerCase(),
      j1 = ii[0].toUpperCase() + ii.slice(1);
    Yt(M1, "on" + j1);
  }
  Yt($s, "onAnimationEnd"),
    Yt(Us, "onAnimationIteration"),
    Yt(Ws, "onAnimationStart"),
    Yt("dblclick", "onDoubleClick"),
    Yt("focusin", "onFocus"),
    Yt("focusout", "onBlur"),
    Yt(Qs, "onTransitionEnd"),
    _("onMouseEnter", ["mouseout", "mouseover"]),
    _("onMouseLeave", ["mouseout", "mouseover"]),
    _("onPointerEnter", ["pointerout", "pointerover"]),
    _("onPointerLeave", ["pointerout", "pointerover"]),
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
  var Nr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    O1 = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Nr),
    );
  function Zs(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Mf(r, t, void 0, e), (e.currentTarget = null);
  }
  function Gs(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var u = r.length - 1; 0 <= u; u--) {
            var c = r[u],
              f = c.instance,
              g = c.currentTarget;
            if (((c = c.listener), f !== o && l.isPropagationStopped()))
              break e;
            Zs(l, c, g), (o = f);
          }
        else
          for (u = 0; u < r.length; u++) {
            if (
              ((c = r[u]),
              (f = c.instance),
              (g = c.currentTarget),
              (c = c.listener),
              f !== o && l.isPropagationStopped())
            )
              break e;
            Zs(l, c, g), (o = f);
          }
      }
    }
    if (br) throw ((e = Do), (br = !1), (Do = null), e);
  }
  function ve(e, t) {
    var n = t[hi];
    n === void 0 && (n = t[hi] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Xs(t, e, 2, !1), n.add(r));
  }
  function ui(e, t, n) {
    var r = 0;
    t && (r |= 4), Xs(n, e, r, t);
  }
  var vl = "_reactListening" + Math.random().toString(36).slice(2);
  function Lr(e) {
    if (!e[vl]) {
      (e[vl] = !0),
        d.forEach(function (n) {
          n !== "selectionchange" && (O1.has(n) || ui(n, !1, e), ui(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[vl] || ((t[vl] = !0), ui("selectionchange", !1, t));
    }
  }
  function Xs(e, t, n, r) {
    switch (ws(t)) {
      case 1:
        var l = Xf;
        break;
      case 4:
        l = Jf;
        break;
      default:
        l = Wo;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !Oo ||
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
  function si(e, t, n, r, l) {
    var o = r;
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
              r = o = u;
              continue e;
            }
            c = c.parentNode;
          }
        }
        r = r.return;
      }
    ts(function () {
      var g = o,
        k = Io(n),
        x = [];
      e: {
        var S = Ks.get(e);
        if (S !== void 0) {
          var F = Yo,
            R = e;
          switch (e) {
            case "keypress":
              if (cl(n) === 0) break e;
            case "keydown":
            case "keyup":
              F = d1;
              break;
            case "focusin":
              (R = "focus"), (F = Xo);
              break;
            case "focusout":
              (R = "blur"), (F = Xo);
              break;
            case "beforeblur":
            case "afterblur":
              F = Xo;
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
              F = ks;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              F = e1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              F = m1;
              break;
            case $s:
            case Us:
            case Ws:
              F = r1;
              break;
            case Qs:
              F = y1;
              break;
            case "scroll":
              F = qf;
              break;
            case "wheel":
              F = w1;
              break;
            case "copy":
            case "cut":
            case "paste":
              F = o1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              F = Es;
          }
          var I = (t & 4) !== 0,
            Ee = !I && e === "scroll",
            m = I ? (S !== null ? S + "Capture" : null) : S;
          I = [];
          for (var p = g, v; p !== null; ) {
            v = p;
            var E = v.stateNode;
            if (
              (v.tag === 5 &&
                E !== null &&
                ((v = E),
                m !== null &&
                  ((E = cr(p, m)), E != null && I.push(Fr(p, E, v)))),
              Ee)
            )
              break;
            p = p.return;
          }
          0 < I.length &&
            ((S = new F(S, R, null, n, k)), x.push({ event: S, listeners: I }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((S = e === "mouseover" || e === "pointerover"),
            (F = e === "mouseout" || e === "pointerout"),
            S &&
              n !== To &&
              (R = n.relatedTarget || n.fromElement) &&
              (fn(R) || R[It]))
          )
            break e;
          if (
            (F || S) &&
            ((S =
              k.window === k
                ? k
                : (S = k.ownerDocument)
                  ? S.defaultView || S.parentWindow
                  : window),
            F
              ? ((R = n.relatedTarget || n.toElement),
                (F = g),
                (R = R ? fn(R) : null),
                R !== null &&
                  ((Ee = cn(R)), R !== Ee || (R.tag !== 5 && R.tag !== 6)) &&
                  (R = null))
              : ((F = null), (R = g)),
            F !== R)
          ) {
            if (
              ((I = ks),
              (E = "onMouseLeave"),
              (m = "onMouseEnter"),
              (p = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((I = Es),
                (E = "onPointerLeave"),
                (m = "onPointerEnter"),
                (p = "pointer")),
              (Ee = F == null ? S : An(F)),
              (v = R == null ? S : An(R)),
              (S = new I(E, p + "leave", F, n, k)),
              (S.target = Ee),
              (S.relatedTarget = v),
              (E = null),
              fn(k) === g &&
                ((I = new I(m, p + "enter", R, n, k)),
                (I.target = v),
                (I.relatedTarget = Ee),
                (E = I)),
              (Ee = E),
              F && R)
            )
              t: {
                for (I = F, m = R, p = 0, v = I; v; v = On(v)) p++;
                for (v = 0, E = m; E; E = On(E)) v++;
                for (; 0 < p - v; ) (I = On(I)), p--;
                for (; 0 < v - p; ) (m = On(m)), v--;
                for (; p--; ) {
                  if (I === m || (m !== null && I === m.alternate)) break t;
                  (I = On(I)), (m = On(m));
                }
                I = null;
              }
            else I = null;
            F !== null && Js(x, S, F, I, !1),
              R !== null && Ee !== null && Js(x, Ee, R, I, !0);
          }
        }
        e: {
          if (
            ((S = g ? An(g) : window),
            (F = S.nodeName && S.nodeName.toLowerCase()),
            F === "select" || (F === "input" && S.type === "file"))
          )
            var M = P1;
          else if (zs(S))
            if (Ts) M = z1;
            else {
              M = L1;
              var A = N1;
            }
          else
            (F = S.nodeName) &&
              F.toLowerCase() === "input" &&
              (S.type === "checkbox" || S.type === "radio") &&
              (M = F1);
          if (M && (M = M(e, g))) {
            Rs(x, M, n, k);
            break e;
          }
          A && A(e, S, g),
            e === "focusout" &&
              (A = S._wrapperState) &&
              A.controlled &&
              S.type === "number" &&
              No(S, "number", S.value);
        }
        switch (((A = g ? An(g) : window), e)) {
          case "focusin":
            (zs(A) || A.contentEditable === "true") &&
              ((Mn = A), (ni = g), (Pr = null));
            break;
          case "focusout":
            Pr = ni = Mn = null;
            break;
          case "mousedown":
            ri = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (ri = !1), Bs(x, n, k);
            break;
          case "selectionchange":
            if (I1) break;
          case "keydown":
          case "keyup":
            Bs(x, n, k);
        }
        var H;
        if (qo)
          e: {
            switch (e) {
              case "compositionstart":
                var $ = "onCompositionStart";
                break e;
              case "compositionend":
                $ = "onCompositionEnd";
                break e;
              case "compositionupdate":
                $ = "onCompositionUpdate";
                break e;
            }
            $ = void 0;
          }
        else
          In
            ? Ls(e, n) && ($ = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              ($ = "onCompositionStart");
        $ &&
          (_s &&
            n.locale !== "ko" &&
            (In || $ !== "onCompositionStart"
              ? $ === "onCompositionEnd" && In && (H = Cs())
              : ((Kt = k),
                (Ko = "value" in Kt ? Kt.value : Kt.textContent),
                (In = !0))),
          (A = yl(g, $)),
          0 < A.length &&
            (($ = new xs($, e, null, n, k)),
            x.push({ event: $, listeners: A }),
            H ? ($.data = H) : ((H = Fs(n)), H !== null && ($.data = H)))),
          (H = S1 ? k1(e, n) : x1(e, n)) &&
            ((g = yl(g, "onBeforeInput")),
            0 < g.length &&
              ((k = new xs("onBeforeInput", "beforeinput", null, n, k)),
              x.push({ event: k, listeners: g }),
              (k.data = H)));
      }
      Gs(x, t);
    });
  }
  function Fr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function yl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = cr(e, n)),
        o != null && r.unshift(Fr(e, o, l)),
        (o = cr(e, t)),
        o != null && r.push(Fr(e, o, l))),
        (e = e.return);
    }
    return r;
  }
  function On(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Js(e, t, n, r, l) {
    for (var o = t._reactName, u = []; n !== null && n !== r; ) {
      var c = n,
        f = c.alternate,
        g = c.stateNode;
      if (f !== null && f === r) break;
      c.tag === 5 &&
        g !== null &&
        ((c = g),
        l
          ? ((f = cr(n, o)), f != null && u.unshift(Fr(n, f, c)))
          : l || ((f = cr(n, o)), f != null && u.push(Fr(n, f, c)))),
        (n = n.return);
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var D1 = /\r\n?/g,
    A1 = /\u0000|\uFFFD/g;
  function qs(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        D1,
        `
`,
      )
      .replace(A1, "");
  }
  function gl(e, t, n) {
    if (((t = qs(t)), qs(e) !== t && n)) throw Error(s(425));
  }
  function wl() {}
  var ai = null,
    ci = null;
  function fi(e, t) {
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
  var di = typeof setTimeout == "function" ? setTimeout : void 0,
    H1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    bs = typeof Promise == "function" ? Promise : void 0,
    B1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof bs < "u"
          ? function (e) {
              return bs.resolve(null).then(e).catch(V1);
            }
          : di;
  function V1(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function pi(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), wr(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    wr(t);
  }
  function Zt(e) {
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
  function ea(e) {
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
  var Dn = Math.random().toString(36).slice(2),
    Pt = "__reactFiber$" + Dn,
    zr = "__reactProps$" + Dn,
    It = "__reactContainer$" + Dn,
    hi = "__reactEvents$" + Dn,
    $1 = "__reactListeners$" + Dn,
    U1 = "__reactHandles$" + Dn;
  function fn(e) {
    var t = e[Pt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[It] || n[Pt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = ea(e); e !== null; ) {
            if ((n = e[Pt])) return n;
            e = ea(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function Rr(e) {
    return (
      (e = e[Pt] || e[It]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function An(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Cl(e) {
    return e[zr] || null;
  }
  var mi = [],
    Hn = -1;
  function Gt(e) {
    return { current: e };
  }
  function ye(e) {
    0 > Hn || ((e.current = mi[Hn]), (mi[Hn] = null), Hn--);
  }
  function me(e, t) {
    Hn++, (mi[Hn] = e.current), (e.current = t);
  }
  var Xt = {},
    Ae = Gt(Xt),
    Ke = Gt(!1),
    dn = Xt;
  function Bn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Xt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in n) l[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Ye(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Sl() {
    ye(Ke), ye(Ae);
  }
  function ta(e, t, n) {
    if (Ae.current !== Xt) throw Error(s(168));
    me(Ae, t), me(Ke, n);
  }
  function na(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(s(108, ce(e) || "Unknown", l));
    return L({}, n, r);
  }
  function kl(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Xt),
      (dn = Ae.current),
      me(Ae, e),
      me(Ke, Ke.current),
      !0
    );
  }
  function ra(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n
      ? ((e = na(e, t, dn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ye(Ke),
        ye(Ae),
        me(Ae, e))
      : ye(Ke),
      me(Ke, n);
  }
  var Mt = null,
    xl = !1,
    vi = !1;
  function la(e) {
    Mt === null ? (Mt = [e]) : Mt.push(e);
  }
  function W1(e) {
    (xl = !0), la(e);
  }
  function Jt() {
    if (!vi && Mt !== null) {
      vi = !0;
      var e = 0,
        t = pe;
      try {
        var n = Mt;
        for (pe = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Mt = null), (xl = !1);
      } catch (l) {
        throw (Mt !== null && (Mt = Mt.slice(e + 1)), is(Ao, Jt), l);
      } finally {
        (pe = t), (vi = !1);
      }
    }
    return null;
  }
  var Vn = [],
    $n = 0,
    El = null,
    _l = 0,
    ut = [],
    st = 0,
    pn = null,
    jt = 1,
    Ot = "";
  function hn(e, t) {
    (Vn[$n++] = _l), (Vn[$n++] = El), (El = e), (_l = t);
  }
  function oa(e, t, n) {
    (ut[st++] = jt), (ut[st++] = Ot), (ut[st++] = pn), (pn = e);
    var r = jt;
    e = Ot;
    var l = 32 - vt(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var o = 32 - vt(t) + l;
    if (30 < o) {
      var u = l - (l % 5);
      (o = (r & ((1 << u) - 1)).toString(32)),
        (r >>= u),
        (l -= u),
        (jt = (1 << (32 - vt(t) + l)) | (n << l) | r),
        (Ot = o + e);
    } else (jt = (1 << o) | (n << l) | r), (Ot = e);
  }
  function yi(e) {
    e.return !== null && (hn(e, 1), oa(e, 1, 0));
  }
  function gi(e) {
    for (; e === El; )
      (El = Vn[--$n]), (Vn[$n] = null), (_l = Vn[--$n]), (Vn[$n] = null);
    for (; e === pn; )
      (pn = ut[--st]),
        (ut[st] = null),
        (Ot = ut[--st]),
        (ut[st] = null),
        (jt = ut[--st]),
        (ut[st] = null);
  }
  var tt = null,
    nt = null,
    we = !1,
    gt = null;
  function ia(e, t) {
    var n = dt(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function ua(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (tt = e), (nt = Zt(t.firstChild)), !0)
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
            ? ((n = pn !== null ? { id: jt, overflow: Ot } : null),
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
  function wi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ci(e) {
    if (we) {
      var t = nt;
      if (t) {
        var n = t;
        if (!ua(e, t)) {
          if (wi(e)) throw Error(s(418));
          t = Zt(n.nextSibling);
          var r = tt;
          t && ua(e, t)
            ? ia(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (we = !1), (tt = e));
        }
      } else {
        if (wi(e)) throw Error(s(418));
        (e.flags = (e.flags & -4097) | 2), (we = !1), (tt = e);
      }
    }
  }
  function sa(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    tt = e;
  }
  function Pl(e) {
    if (e !== tt) return !1;
    if (!we) return sa(e), (we = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !fi(e.type, e.memoizedProps))),
      t && (t = nt))
    ) {
      if (wi(e)) throw (aa(), Error(s(418)));
      for (; t; ) ia(e, t), (t = Zt(t.nextSibling));
    }
    if ((sa(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                nt = Zt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        nt = null;
      }
    } else nt = tt ? Zt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function aa() {
    for (var e = nt; e; ) e = Zt(e.nextSibling);
  }
  function Un() {
    (nt = tt = null), (we = !1);
  }
  function Si(e) {
    gt === null ? (gt = [e]) : gt.push(e);
  }
  var Q1 = q.ReactCurrentBatchConfig;
  function Tr(e, t, n) {
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
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (u) {
              var c = l.refs;
              u === null ? delete c[o] : (c[o] = u);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function Nl(e, t) {
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
  function ca(e) {
    var t = e._init;
    return t(e._payload);
  }
  function fa(e) {
    function t(m, p) {
      if (e) {
        var v = m.deletions;
        v === null ? ((m.deletions = [p]), (m.flags |= 16)) : v.push(p);
      }
    }
    function n(m, p) {
      if (!e) return null;
      for (; p !== null; ) t(m, p), (p = p.sibling);
      return null;
    }
    function r(m, p) {
      for (m = new Map(); p !== null; )
        p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
      return m;
    }
    function l(m, p) {
      return (m = on(m, p)), (m.index = 0), (m.sibling = null), m;
    }
    function o(m, p, v) {
      return (
        (m.index = v),
        e
          ? ((v = m.alternate),
            v !== null
              ? ((v = v.index), v < p ? ((m.flags |= 2), p) : v)
              : ((m.flags |= 2), p))
          : ((m.flags |= 1048576), p)
      );
    }
    function u(m) {
      return e && m.alternate === null && (m.flags |= 2), m;
    }
    function c(m, p, v, E) {
      return p === null || p.tag !== 6
        ? ((p = du(v, m.mode, E)), (p.return = m), p)
        : ((p = l(p, v)), (p.return = m), p);
    }
    function f(m, p, v, E) {
      var M = v.type;
      return M === B
        ? k(m, p, v.props.children, E, v.key)
        : p !== null &&
            (p.elementType === M ||
              (typeof M == "object" &&
                M !== null &&
                M.$$typeof === De &&
                ca(M) === p.type))
          ? ((E = l(p, v.props)), (E.ref = Tr(m, p, v)), (E.return = m), E)
          : ((E = Jl(v.type, v.key, v.props, null, m.mode, E)),
            (E.ref = Tr(m, p, v)),
            (E.return = m),
            E);
    }
    function g(m, p, v, E) {
      return p === null ||
        p.tag !== 4 ||
        p.stateNode.containerInfo !== v.containerInfo ||
        p.stateNode.implementation !== v.implementation
        ? ((p = pu(v, m.mode, E)), (p.return = m), p)
        : ((p = l(p, v.children || [])), (p.return = m), p);
    }
    function k(m, p, v, E, M) {
      return p === null || p.tag !== 7
        ? ((p = kn(v, m.mode, E, M)), (p.return = m), p)
        : ((p = l(p, v)), (p.return = m), p);
    }
    function x(m, p, v) {
      if ((typeof p == "string" && p !== "") || typeof p == "number")
        return (p = du("" + p, m.mode, v)), (p.return = m), p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case ae:
            return (
              (v = Jl(p.type, p.key, p.props, null, m.mode, v)),
              (v.ref = Tr(m, null, p)),
              (v.return = m),
              v
            );
          case Y:
            return (p = pu(p, m.mode, v)), (p.return = m), p;
          case De:
            var E = p._init;
            return x(m, E(p._payload), v);
        }
        if (ur(p) || j(p))
          return (p = kn(p, m.mode, v, null)), (p.return = m), p;
        Nl(m, p);
      }
      return null;
    }
    function S(m, p, v, E) {
      var M = p !== null ? p.key : null;
      if ((typeof v == "string" && v !== "") || typeof v == "number")
        return M !== null ? null : c(m, p, "" + v, E);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case ae:
            return v.key === M ? f(m, p, v, E) : null;
          case Y:
            return v.key === M ? g(m, p, v, E) : null;
          case De:
            return (M = v._init), S(m, p, M(v._payload), E);
        }
        if (ur(v) || j(v)) return M !== null ? null : k(m, p, v, E, null);
        Nl(m, v);
      }
      return null;
    }
    function F(m, p, v, E, M) {
      if ((typeof E == "string" && E !== "") || typeof E == "number")
        return (m = m.get(v) || null), c(p, m, "" + E, M);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case ae:
            return (
              (m = m.get(E.key === null ? v : E.key) || null), f(p, m, E, M)
            );
          case Y:
            return (
              (m = m.get(E.key === null ? v : E.key) || null), g(p, m, E, M)
            );
          case De:
            var A = E._init;
            return F(m, p, v, A(E._payload), M);
        }
        if (ur(E) || j(E)) return (m = m.get(v) || null), k(p, m, E, M, null);
        Nl(p, E);
      }
      return null;
    }
    function R(m, p, v, E) {
      for (
        var M = null, A = null, H = p, $ = (p = 0), Te = null;
        H !== null && $ < v.length;
        $++
      ) {
        H.index > $ ? ((Te = H), (H = null)) : (Te = H.sibling);
        var se = S(m, H, v[$], E);
        if (se === null) {
          H === null && (H = Te);
          break;
        }
        e && H && se.alternate === null && t(m, H),
          (p = o(se, p, $)),
          A === null ? (M = se) : (A.sibling = se),
          (A = se),
          (H = Te);
      }
      if ($ === v.length) return n(m, H), we && hn(m, $), M;
      if (H === null) {
        for (; $ < v.length; $++)
          (H = x(m, v[$], E)),
            H !== null &&
              ((p = o(H, p, $)),
              A === null ? (M = H) : (A.sibling = H),
              (A = H));
        return we && hn(m, $), M;
      }
      for (H = r(m, H); $ < v.length; $++)
        (Te = F(H, m, $, v[$], E)),
          Te !== null &&
            (e &&
              Te.alternate !== null &&
              H.delete(Te.key === null ? $ : Te.key),
            (p = o(Te, p, $)),
            A === null ? (M = Te) : (A.sibling = Te),
            (A = Te));
      return (
        e &&
          H.forEach(function (un) {
            return t(m, un);
          }),
        we && hn(m, $),
        M
      );
    }
    function I(m, p, v, E) {
      var M = j(v);
      if (typeof M != "function") throw Error(s(150));
      if (((v = M.call(v)), v == null)) throw Error(s(151));
      for (
        var A = (M = null), H = p, $ = (p = 0), Te = null, se = v.next();
        H !== null && !se.done;
        $++, se = v.next()
      ) {
        H.index > $ ? ((Te = H), (H = null)) : (Te = H.sibling);
        var un = S(m, H, se.value, E);
        if (un === null) {
          H === null && (H = Te);
          break;
        }
        e && H && un.alternate === null && t(m, H),
          (p = o(un, p, $)),
          A === null ? (M = un) : (A.sibling = un),
          (A = un),
          (H = Te);
      }
      if (se.done) return n(m, H), we && hn(m, $), M;
      if (H === null) {
        for (; !se.done; $++, se = v.next())
          (se = x(m, se.value, E)),
            se !== null &&
              ((p = o(se, p, $)),
              A === null ? (M = se) : (A.sibling = se),
              (A = se));
        return we && hn(m, $), M;
      }
      for (H = r(m, H); !se.done; $++, se = v.next())
        (se = F(H, m, $, se.value, E)),
          se !== null &&
            (e &&
              se.alternate !== null &&
              H.delete(se.key === null ? $ : se.key),
            (p = o(se, p, $)),
            A === null ? (M = se) : (A.sibling = se),
            (A = se));
      return (
        e &&
          H.forEach(function (Ed) {
            return t(m, Ed);
          }),
        we && hn(m, $),
        M
      );
    }
    function Ee(m, p, v, E) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === B &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case ae:
            e: {
              for (var M = v.key, A = p; A !== null; ) {
                if (A.key === M) {
                  if (((M = v.type), M === B)) {
                    if (A.tag === 7) {
                      n(m, A.sibling),
                        (p = l(A, v.props.children)),
                        (p.return = m),
                        (m = p);
                      break e;
                    }
                  } else if (
                    A.elementType === M ||
                    (typeof M == "object" &&
                      M !== null &&
                      M.$$typeof === De &&
                      ca(M) === A.type)
                  ) {
                    n(m, A.sibling),
                      (p = l(A, v.props)),
                      (p.ref = Tr(m, A, v)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                  n(m, A);
                  break;
                } else t(m, A);
                A = A.sibling;
              }
              v.type === B
                ? ((p = kn(v.props.children, m.mode, E, v.key)),
                  (p.return = m),
                  (m = p))
                : ((E = Jl(v.type, v.key, v.props, null, m.mode, E)),
                  (E.ref = Tr(m, p, v)),
                  (E.return = m),
                  (m = E));
            }
            return u(m);
          case Y:
            e: {
              for (A = v.key; p !== null; ) {
                if (p.key === A)
                  if (
                    p.tag === 4 &&
                    p.stateNode.containerInfo === v.containerInfo &&
                    p.stateNode.implementation === v.implementation
                  ) {
                    n(m, p.sibling),
                      (p = l(p, v.children || [])),
                      (p.return = m),
                      (m = p);
                    break e;
                  } else {
                    n(m, p);
                    break;
                  }
                else t(m, p);
                p = p.sibling;
              }
              (p = pu(v, m.mode, E)), (p.return = m), (m = p);
            }
            return u(m);
          case De:
            return (A = v._init), Ee(m, p, A(v._payload), E);
        }
        if (ur(v)) return R(m, p, v, E);
        if (j(v)) return I(m, p, v, E);
        Nl(m, v);
      }
      return (typeof v == "string" && v !== "") || typeof v == "number"
        ? ((v = "" + v),
          p !== null && p.tag === 6
            ? (n(m, p.sibling), (p = l(p, v)), (p.return = m), (m = p))
            : (n(m, p), (p = du(v, m.mode, E)), (p.return = m), (m = p)),
          u(m))
        : n(m, p);
    }
    return Ee;
  }
  var Wn = fa(!0),
    da = fa(!1),
    Ll = Gt(null),
    Fl = null,
    Qn = null,
    ki = null;
  function xi() {
    ki = Qn = Fl = null;
  }
  function Ei(e) {
    var t = Ll.current;
    ye(Ll), (e._currentValue = t);
  }
  function _i(e, t, n) {
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
  function Kn(e, t) {
    (Fl = e),
      (ki = Qn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ze = !0), (e.firstContext = null));
  }
  function at(e) {
    var t = e._currentValue;
    if (ki !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Qn === null)) {
        if (Fl === null) throw Error(s(308));
        (Qn = e), (Fl.dependencies = { lanes: 0, firstContext: e });
      } else Qn = Qn.next = e;
    return t;
  }
  var mn = null;
  function Pi(e) {
    mn === null ? (mn = [e]) : mn.push(e);
  }
  function pa(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Pi(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Dt(e, r)
    );
  }
  function Dt(e, t) {
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
  function Ni(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function ha(e, t) {
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
  function At(e, t) {
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
    if (((r = r.shared), (ie & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Dt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Pi(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Dt(e, n)
    );
  }
  function zl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vo(e, n);
    }
  }
  function ma(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
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
          o === null ? (l = o = u) : (o = o.next = u), (n = n.next);
        } while (n !== null);
        o === null ? (l = o = t) : (o = o.next = t);
      } else l = o = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
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
  function Rl(e, t, n, r) {
    var l = e.updateQueue;
    qt = !1;
    var o = l.firstBaseUpdate,
      u = l.lastBaseUpdate,
      c = l.shared.pending;
    if (c !== null) {
      l.shared.pending = null;
      var f = c,
        g = f.next;
      (f.next = null), u === null ? (o = g) : (u.next = g), (u = f);
      var k = e.alternate;
      k !== null &&
        ((k = k.updateQueue),
        (c = k.lastBaseUpdate),
        c !== u &&
          (c === null ? (k.firstBaseUpdate = g) : (c.next = g),
          (k.lastBaseUpdate = f)));
    }
    if (o !== null) {
      var x = l.baseState;
      (u = 0), (k = g = f = null), (c = o);
      do {
        var S = c.lane,
          F = c.eventTime;
        if ((r & S) === S) {
          k !== null &&
            (k = k.next =
              {
                eventTime: F,
                lane: 0,
                tag: c.tag,
                payload: c.payload,
                callback: c.callback,
                next: null,
              });
          e: {
            var R = e,
              I = c;
            switch (((S = t), (F = n), I.tag)) {
              case 1:
                if (((R = I.payload), typeof R == "function")) {
                  x = R.call(F, x, S);
                  break e;
                }
                x = R;
                break e;
              case 3:
                R.flags = (R.flags & -65537) | 128;
              case 0:
                if (
                  ((R = I.payload),
                  (S = typeof R == "function" ? R.call(F, x, S) : R),
                  S == null)
                )
                  break e;
                x = L({}, x, S);
                break e;
              case 2:
                qt = !0;
            }
          }
          c.callback !== null &&
            c.lane !== 0 &&
            ((e.flags |= 64),
            (S = l.effects),
            S === null ? (l.effects = [c]) : S.push(c));
        } else
          (F = {
            eventTime: F,
            lane: S,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            k === null ? ((g = k = F), (f = x)) : (k = k.next = F),
            (u |= S);
        if (((c = c.next), c === null)) {
          if (((c = l.shared.pending), c === null)) break;
          (S = c),
            (c = S.next),
            (S.next = null),
            (l.lastBaseUpdate = S),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (k === null && (f = x),
        (l.baseState = f),
        (l.firstBaseUpdate = g),
        (l.lastBaseUpdate = k),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (u |= l.lane), (l = l.next);
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      (gn |= u), (e.lanes = u), (e.memoizedState = x);
    }
  }
  function va(e, t, n) {
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
  var Ir = {},
    Nt = Gt(Ir),
    Mr = Gt(Ir),
    jr = Gt(Ir);
  function vn(e) {
    if (e === Ir) throw Error(s(174));
    return e;
  }
  function Li(e, t) {
    switch ((me(jr, t), me(Mr, e), me(Nt, Ir), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Fo(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Fo(t, e));
    }
    ye(Nt), me(Nt, t);
  }
  function Yn() {
    ye(Nt), ye(Mr), ye(jr);
  }
  function ya(e) {
    vn(jr.current);
    var t = vn(Nt.current),
      n = Fo(t, e.type);
    t !== n && (me(Mr, e), me(Nt, n));
  }
  function Fi(e) {
    Mr.current === e && (ye(Nt), ye(Mr));
  }
  var Ce = Gt(0);
  function Tl(e) {
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
  var zi = [];
  function Ri() {
    for (var e = 0; e < zi.length; e++)
      zi[e]._workInProgressVersionPrimary = null;
    zi.length = 0;
  }
  var Il = q.ReactCurrentDispatcher,
    Ti = q.ReactCurrentBatchConfig,
    yn = 0,
    Se = null,
    Le = null,
    ze = null,
    Ml = !1,
    Or = !1,
    Dr = 0,
    K1 = 0;
  function He() {
    throw Error(s(321));
  }
  function Ii(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!yt(e[n], t[n])) return !1;
    return !0;
  }
  function Mi(e, t, n, r, l, o) {
    if (
      ((yn = o),
      (Se = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Il.current = e === null || e.memoizedState === null ? X1 : J1),
      (e = n(r, l)),
      Or)
    ) {
      o = 0;
      do {
        if (((Or = !1), (Dr = 0), 25 <= o)) throw Error(s(301));
        (o += 1),
          (ze = Le = null),
          (t.updateQueue = null),
          (Il.current = q1),
          (e = n(r, l));
      } while (Or);
    }
    if (
      ((Il.current = Dl),
      (t = Le !== null && Le.next !== null),
      (yn = 0),
      (ze = Le = Se = null),
      (Ml = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function ji() {
    var e = Dr !== 0;
    return (Dr = 0), e;
  }
  function Lt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ze === null ? (Se.memoizedState = ze = e) : (ze = ze.next = e), ze;
  }
  function ct() {
    if (Le === null) {
      var e = Se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = ze === null ? Se.memoizedState : ze.next;
    if (t !== null) (ze = t), (Le = e);
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
        ze === null ? (Se.memoizedState = ze = e) : (ze = ze.next = e);
    }
    return ze;
  }
  function Ar(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Oi(e) {
    var t = ct(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = Le,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var u = l.next;
        (l.next = o.next), (o.next = u);
      }
      (r.baseQueue = l = o), (n.pending = null);
    }
    if (l !== null) {
      (o = l.next), (r = r.baseState);
      var c = (u = null),
        f = null,
        g = o;
      do {
        var k = g.lane;
        if ((yn & k) === k)
          f !== null &&
            (f = f.next =
              {
                lane: 0,
                action: g.action,
                hasEagerState: g.hasEagerState,
                eagerState: g.eagerState,
                next: null,
              }),
            (r = g.hasEagerState ? g.eagerState : e(r, g.action));
        else {
          var x = {
            lane: k,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null,
          };
          f === null ? ((c = f = x), (u = r)) : (f = f.next = x),
            (Se.lanes |= k),
            (gn |= k);
        }
        g = g.next;
      } while (g !== null && g !== o);
      f === null ? (u = r) : (f.next = c),
        yt(r, t.memoizedState) || (Ze = !0),
        (t.memoizedState = r),
        (t.baseState = u),
        (t.baseQueue = f),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (o = l.lane), (Se.lanes |= o), (gn |= o), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Di(e) {
    var t = ct(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = (l = l.next);
      do (o = e(o, u.action)), (u = u.next);
      while (u !== l);
      yt(o, t.memoizedState) || (Ze = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function ga() {}
  function wa(e, t) {
    var n = Se,
      r = ct(),
      l = t(),
      o = !yt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (Ze = !0)),
      (r = r.queue),
      Ai(ka.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (ze !== null && ze.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Hr(9, Sa.bind(null, n, r, l, t), void 0, null),
        Re === null)
      )
        throw Error(s(349));
      (yn & 30) !== 0 || Ca(n, t, l);
    }
    return l;
  }
  function Ca(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Se.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Se.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Sa(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), xa(t) && Ea(e);
  }
  function ka(e, t, n) {
    return n(function () {
      xa(t) && Ea(e);
    });
  }
  function xa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !yt(e, n);
    } catch {
      return !0;
    }
  }
  function Ea(e) {
    var t = Dt(e, 1);
    t !== null && kt(t, e, 1, -1);
  }
  function _a(e) {
    var t = Lt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ar,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = G1.bind(null, Se, e)),
      [t.memoizedState, e]
    );
  }
  function Hr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Se.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Se.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Pa() {
    return ct().memoizedState;
  }
  function jl(e, t, n, r) {
    var l = Lt();
    (Se.flags |= e),
      (l.memoizedState = Hr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Ol(e, t, n, r) {
    var l = ct();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Le !== null) {
      var u = Le.memoizedState;
      if (((o = u.destroy), r !== null && Ii(r, u.deps))) {
        l.memoizedState = Hr(t, n, o, r);
        return;
      }
    }
    (Se.flags |= e), (l.memoizedState = Hr(1 | t, n, o, r));
  }
  function Na(e, t) {
    return jl(8390656, 8, e, t);
  }
  function Ai(e, t) {
    return Ol(2048, 8, e, t);
  }
  function La(e, t) {
    return Ol(4, 2, e, t);
  }
  function Fa(e, t) {
    return Ol(4, 4, e, t);
  }
  function za(e, t) {
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
  function Ra(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Ol(4, 4, za.bind(null, t, e), n)
    );
  }
  function Hi() {}
  function Ta(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ii(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Ia(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ii(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ma(e, t, n) {
    return (yn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ze = !0)), (e.memoizedState = n))
      : (yt(n, t) ||
          ((n = cs()), (Se.lanes |= n), (gn |= n), (e.baseState = !0)),
        t);
  }
  function Y1(e, t) {
    var n = pe;
    (pe = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Ti.transition;
    Ti.transition = {};
    try {
      e(!1), t();
    } finally {
      (pe = n), (Ti.transition = r);
    }
  }
  function ja() {
    return ct().memoizedState;
  }
  function Z1(e, t, n) {
    var r = rn(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Oa(e))
    )
      Da(t, n);
    else if (((n = pa(e, t, n, r)), n !== null)) {
      var l = Qe();
      kt(n, e, r, l), Aa(n, t, r);
    }
  }
  function G1(e, t, n) {
    var r = rn(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Oa(e)) Da(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var u = t.lastRenderedState,
            c = o(u, n);
          if (((l.hasEagerState = !0), (l.eagerState = c), yt(c, u))) {
            var f = t.interleaved;
            f === null
              ? ((l.next = l), Pi(t))
              : ((l.next = f.next), (f.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = pa(e, t, l, r)),
        n !== null && ((l = Qe()), kt(n, e, r, l), Aa(n, t, r));
    }
  }
  function Oa(e) {
    var t = e.alternate;
    return e === Se || (t !== null && t === Se);
  }
  function Da(e, t) {
    Or = Ml = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Aa(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vo(e, n);
    }
  }
  var Dl = {
      readContext: at,
      useCallback: He,
      useContext: He,
      useEffect: He,
      useImperativeHandle: He,
      useInsertionEffect: He,
      useLayoutEffect: He,
      useMemo: He,
      useReducer: He,
      useRef: He,
      useState: He,
      useDebugValue: He,
      useDeferredValue: He,
      useTransition: He,
      useMutableSource: He,
      useSyncExternalStore: He,
      useId: He,
      unstable_isNewReconciler: !1,
    },
    X1 = {
      readContext: at,
      useCallback: function (e, t) {
        return (Lt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: at,
      useEffect: Na,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          jl(4194308, 4, za.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return jl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return jl(4, 2, e, t);
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
          (e = e.dispatch = Z1.bind(null, Se, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Lt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: _a,
      useDebugValue: Hi,
      useDeferredValue: function (e) {
        return (Lt().memoizedState = e);
      },
      useTransition: function () {
        var e = _a(!1),
          t = e[0];
        return (e = Y1.bind(null, e[1])), (Lt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Se,
          l = Lt();
        if (we) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = t()), Re === null)) throw Error(s(349));
          (yn & 30) !== 0 || Ca(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Na(ka.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          Hr(9, Sa.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Lt(),
          t = Re.identifierPrefix;
        if (we) {
          var n = Ot,
            r = jt;
          (n = (r & ~(1 << (32 - vt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Dr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = K1++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    J1 = {
      readContext: at,
      useCallback: Ta,
      useContext: at,
      useEffect: Ai,
      useImperativeHandle: Ra,
      useInsertionEffect: La,
      useLayoutEffect: Fa,
      useMemo: Ia,
      useReducer: Oi,
      useRef: Pa,
      useState: function () {
        return Oi(Ar);
      },
      useDebugValue: Hi,
      useDeferredValue: function (e) {
        var t = ct();
        return Ma(t, Le.memoizedState, e);
      },
      useTransition: function () {
        var e = Oi(Ar)[0],
          t = ct().memoizedState;
        return [e, t];
      },
      useMutableSource: ga,
      useSyncExternalStore: wa,
      useId: ja,
      unstable_isNewReconciler: !1,
    },
    q1 = {
      readContext: at,
      useCallback: Ta,
      useContext: at,
      useEffect: Ai,
      useImperativeHandle: Ra,
      useInsertionEffect: La,
      useLayoutEffect: Fa,
      useMemo: Ia,
      useReducer: Di,
      useRef: Pa,
      useState: function () {
        return Di(Ar);
      },
      useDebugValue: Hi,
      useDeferredValue: function (e) {
        var t = ct();
        return Le === null ? (t.memoizedState = e) : Ma(t, Le.memoizedState, e);
      },
      useTransition: function () {
        var e = Di(Ar)[0],
          t = ct().memoizedState;
        return [e, t];
      },
      useMutableSource: ga,
      useSyncExternalStore: wa,
      useId: ja,
      unstable_isNewReconciler: !1,
    };
  function wt(e, t) {
    if (e && e.defaultProps) {
      (t = L({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Bi(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : L({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Al = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? cn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Qe(),
        l = rn(e),
        o = At(r, l);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = bt(e, o, l)),
        t !== null && (kt(t, e, l, r), zl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Qe(),
        l = rn(e),
        o = At(r, l);
      (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = bt(e, o, l)),
        t !== null && (kt(t, e, l, r), zl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Qe(),
        r = rn(e),
        l = At(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = bt(e, l, r)),
        t !== null && (kt(t, e, r, n), zl(t, e, r));
    },
  };
  function Ha(e, t, n, r, l, o, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, u)
        : t.prototype && t.prototype.isPureReactComponent
          ? !_r(n, r) || !_r(l, o)
          : !0
    );
  }
  function Ba(e, t, n) {
    var r = !1,
      l = Xt,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = at(o))
        : ((l = Ye(t) ? dn : Ae.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? Bn(e, l) : Xt)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Al),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function Va(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Al.enqueueReplaceState(t, t.state, null);
  }
  function Vi(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ni(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
      ? (l.context = at(o))
      : ((o = Ye(t) ? dn : Ae.current), (l.context = Bn(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (Bi(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && Al.enqueueReplaceState(l, l.state, null),
        Rl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Zn(e, t) {
    try {
      var n = "",
        r = t;
      do (n += te(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function $i(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ui(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var b1 = typeof WeakMap == "function" ? WeakMap : Map;
  function $a(e, t, n) {
    (n = At(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Ql || ((Ql = !0), (lu = r)), Ui(e, t);
      }),
      n
    );
  }
  function Ua(e, t, n) {
    (n = At(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Ui(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          Ui(e, t),
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
  function Wa(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new b1();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = pd.bind(null, e, t, n)), t.then(e, e));
  }
  function Qa(e) {
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
  function Ka(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = At(-1, 1)), (t.tag = 2), bt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var ed = q.ReactCurrentOwner,
    Ze = !1;
  function We(e, t, n, r) {
    t.child = e === null ? da(t, null, n, r) : Wn(t, e.child, n, r);
  }
  function Ya(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      Kn(t, l),
      (r = Mi(e, t, n, r, o, l)),
      (n = ji()),
      e !== null && !Ze
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Ht(e, t, l))
        : (we && n && yi(t), (t.flags |= 1), We(e, t, r, l), t.child)
    );
  }
  function Za(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !fu(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), Ga(e, t, o, r, l))
        : ((e = Jl(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var u = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : _r), n(u, r) && e.ref === t.ref)
      )
        return Ht(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = on(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ga(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (_r(o, r) && e.ref === t.ref)
        if (((Ze = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Ze = !0);
        else return (t.lanes = e.lanes), Ht(e, t, l);
    }
    return Wi(e, t, n, r, l);
  }
  function Xa(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
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
            (e = o !== null ? o.baseLanes | n : n),
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
          (r = o !== null ? o.baseLanes : n),
          me(Xn, rt),
          (rt |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        me(Xn, rt),
        (rt |= r);
    return We(e, t, l, n), t.child;
  }
  function Ja(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Wi(e, t, n, r, l) {
    var o = Ye(n) ? dn : Ae.current;
    return (
      (o = Bn(t, o)),
      Kn(t, l),
      (n = Mi(e, t, n, r, o, l)),
      (r = ji()),
      e !== null && !Ze
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Ht(e, t, l))
        : (we && r && yi(t), (t.flags |= 1), We(e, t, n, l), t.child)
    );
  }
  function qa(e, t, n, r, l) {
    if (Ye(n)) {
      var o = !0;
      kl(t);
    } else o = !1;
    if ((Kn(t, l), t.stateNode === null))
      Bl(e, t), Ba(t, n, r), Vi(t, n, r, l), (r = !0);
    else if (e === null) {
      var u = t.stateNode,
        c = t.memoizedProps;
      u.props = c;
      var f = u.context,
        g = n.contextType;
      typeof g == "object" && g !== null
        ? (g = at(g))
        : ((g = Ye(n) ? dn : Ae.current), (g = Bn(t, g)));
      var k = n.getDerivedStateFromProps,
        x =
          typeof k == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function";
      x ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((c !== r || f !== g) && Va(t, u, r, g)),
        (qt = !1);
      var S = t.memoizedState;
      (u.state = S),
        Rl(t, r, u, l),
        (f = t.memoizedState),
        c !== r || S !== f || Ke.current || qt
          ? (typeof k == "function" && (Bi(t, n, k, r), (f = t.memoizedState)),
            (c = qt || Ha(t, n, c, r, S, f, g))
              ? (x ||
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
            (u.context = g),
            (r = c))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (u = t.stateNode),
        ha(e, t),
        (c = t.memoizedProps),
        (g = t.type === t.elementType ? c : wt(t.type, c)),
        (u.props = g),
        (x = t.pendingProps),
        (S = u.context),
        (f = n.contextType),
        typeof f == "object" && f !== null
          ? (f = at(f))
          : ((f = Ye(n) ? dn : Ae.current), (f = Bn(t, f)));
      var F = n.getDerivedStateFromProps;
      (k =
        typeof F == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function") ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((c !== x || S !== f) && Va(t, u, r, f)),
        (qt = !1),
        (S = t.memoizedState),
        (u.state = S),
        Rl(t, r, u, l);
      var R = t.memoizedState;
      c !== x || S !== R || Ke.current || qt
        ? (typeof F == "function" && (Bi(t, n, F, r), (R = t.memoizedState)),
          (g = qt || Ha(t, n, g, r, S, R, f) || !1)
            ? (k ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(r, R, f),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(r, R, f)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (c === e.memoizedProps && S === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (c === e.memoizedProps && S === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = R)),
          (u.props = r),
          (u.state = R),
          (u.context = f),
          (r = g))
        : (typeof u.componentDidUpdate != "function" ||
            (c === e.memoizedProps && S === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (c === e.memoizedProps && S === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Qi(e, t, n, r, o, l);
  }
  function Qi(e, t, n, r, l, o) {
    Ja(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return l && ra(t, n, !1), Ht(e, t, o);
    (r = t.stateNode), (ed.current = t);
    var c =
      u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && u
        ? ((t.child = Wn(t, e.child, null, o)), (t.child = Wn(t, null, c, o)))
        : We(e, t, c, o),
      (t.memoizedState = r.state),
      l && ra(t, n, !0),
      t.child
    );
  }
  function ba(e) {
    var t = e.stateNode;
    t.pendingContext
      ? ta(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && ta(e, t.context, !1),
      Li(e, t.containerInfo);
  }
  function ec(e, t, n, r, l) {
    return Un(), Si(l), (t.flags |= 256), We(e, t, n, r), t.child;
  }
  var Ki = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Yi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function tc(e, t, n) {
    var r = t.pendingProps,
      l = Ce.current,
      o = !1,
      u = (t.flags & 128) !== 0,
      c;
    if (
      ((c = u) ||
        (c = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      c
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      me(Ce, l & 1),
      e === null)
    )
      return (
        Ci(t),
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
            o
              ? ((r = t.mode),
                (o = t.child),
                (u = { mode: "hidden", children: u }),
                (r & 1) === 0 && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = u))
                  : (o = ql(u, r, 0, null)),
                (e = kn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = Yi(n)),
                (t.memoizedState = Ki),
                e)
              : Zi(t, u))
      );
    if (((l = e.memoizedState), l !== null && ((c = l.dehydrated), c !== null)))
      return td(e, t, u, r, c, l, n);
    if (o) {
      (o = r.fallback), (u = t.mode), (l = e.child), (c = l.sibling);
      var f = { mode: "hidden", children: r.children };
      return (
        (u & 1) === 0 && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = f),
            (t.deletions = null))
          : ((r = on(l, f)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        c !== null ? (o = on(c, o)) : ((o = kn(o, u, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (u = e.child.memoizedState),
        (u =
          u === null
            ? Yi(n)
            : {
                baseLanes: u.baseLanes | n,
                cachePool: null,
                transitions: u.transitions,
              }),
        (o.memoizedState = u),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = Ki),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = on(o, { mode: "visible", children: r.children })),
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
  function Zi(e, t) {
    return (
      (t = ql({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Hl(e, t, n, r) {
    return (
      r !== null && Si(r),
      Wn(t, e.child, null, n),
      (e = Zi(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function td(e, t, n, r, l, o, u) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = $i(Error(s(422)))), Hl(e, t, u, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = ql({ mode: "visible", children: r.children }, l, 0, null)),
            (o = kn(o, l, u, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            (t.mode & 1) !== 0 && Wn(t, e.child, null, u),
            (t.child.memoizedState = Yi(u)),
            (t.memoizedState = Ki),
            o);
    if ((t.mode & 1) === 0) return Hl(e, t, u, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var c = r.dgst;
      return (
        (r = c), (o = Error(s(419))), (r = $i(o, r, void 0)), Hl(e, t, u, r)
      );
    }
    if (((c = (u & e.childLanes) !== 0), Ze || c)) {
      if (((r = Re), r !== null)) {
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
            l !== o.retryLane &&
            ((o.retryLane = l), Dt(e, l), kt(r, e, l, -1));
      }
      return cu(), (r = $i(Error(s(421)))), Hl(e, t, u, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = hd.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (nt = Zt(l.nextSibling)),
        (tt = t),
        (we = !0),
        (gt = null),
        e !== null &&
          ((ut[st++] = jt),
          (ut[st++] = Ot),
          (ut[st++] = pn),
          (jt = e.id),
          (Ot = e.overflow),
          (pn = t)),
        (t = Zi(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function nc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), _i(e.return, t, n);
  }
  function Gi(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l));
  }
  function rc(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((We(e, t, r.children, n), (r = Ce.current), (r & 2) !== 0))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && nc(e, n, t);
          else if (e.tag === 19) nc(e, n, t);
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
    if ((me(Ce, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && Tl(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            Gi(t, !1, l, n, o);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && Tl(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          Gi(t, !0, n, null, o);
          break;
        case "together":
          Gi(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Bl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Ht(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (gn |= t.lanes),
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
  function nd(e, t, n) {
    switch (t.tag) {
      case 3:
        ba(t), Un();
        break;
      case 5:
        ya(t);
        break;
      case 1:
        Ye(t.type) && kl(t);
        break;
      case 4:
        Li(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        me(Ll, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (me(Ce, Ce.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? tc(e, t, n)
              : (me(Ce, Ce.current & 1),
                (e = Ht(e, t, n)),
                e !== null ? e.sibling : null);
        me(Ce, Ce.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return rc(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          me(Ce, Ce.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Xa(e, t, n);
    }
    return Ht(e, t, n);
  }
  var lc, Xi, oc, ic;
  (lc = function (e, t) {
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
    (Xi = function () {}),
    (oc = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), vn(Nt.current);
        var o = null;
        switch (n) {
          case "input":
            (l = _o(e, l)), (r = _o(e, r)), (o = []);
            break;
          case "select":
            (l = L({}, l, { value: void 0 })),
              (r = L({}, r, { value: void 0 })),
              (o = []);
            break;
          case "textarea":
            (l = Lo(e, l)), (r = Lo(e, r)), (o = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = wl);
        }
        zo(n, r);
        var u;
        n = null;
        for (g in l)
          if (!r.hasOwnProperty(g) && l.hasOwnProperty(g) && l[g] != null)
            if (g === "style") {
              var c = l[g];
              for (u in c) c.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
            } else
              g !== "dangerouslySetInnerHTML" &&
                g !== "children" &&
                g !== "suppressContentEditableWarning" &&
                g !== "suppressHydrationWarning" &&
                g !== "autoFocus" &&
                (y.hasOwnProperty(g)
                  ? o || (o = [])
                  : (o = o || []).push(g, null));
        for (g in r) {
          var f = r[g];
          if (
            ((c = l != null ? l[g] : void 0),
            r.hasOwnProperty(g) && f !== c && (f != null || c != null))
          )
            if (g === "style")
              if (c) {
                for (u in c)
                  !c.hasOwnProperty(u) ||
                    (f && f.hasOwnProperty(u)) ||
                    (n || (n = {}), (n[u] = ""));
                for (u in f)
                  f.hasOwnProperty(u) &&
                    c[u] !== f[u] &&
                    (n || (n = {}), (n[u] = f[u]));
              } else n || (o || (o = []), o.push(g, n)), (n = f);
            else
              g === "dangerouslySetInnerHTML"
                ? ((f = f ? f.__html : void 0),
                  (c = c ? c.__html : void 0),
                  f != null && c !== f && (o = o || []).push(g, f))
                : g === "children"
                  ? (typeof f != "string" && typeof f != "number") ||
                    (o = o || []).push(g, "" + f)
                  : g !== "suppressContentEditableWarning" &&
                    g !== "suppressHydrationWarning" &&
                    (y.hasOwnProperty(g)
                      ? (f != null && g === "onScroll" && ve("scroll", e),
                        o || c === f || (o = []))
                      : (o = o || []).push(g, f));
        }
        n && (o = o || []).push("style", n);
        var g = o;
        (t.updateQueue = g) && (t.flags |= 4);
      }
    }),
    (ic = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function Br(e, t) {
    if (!we)
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
  function Be(e) {
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
  function rd(e, t, n) {
    var r = t.pendingProps;
    switch ((gi(t), t.tag)) {
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
        return Be(t), null;
      case 1:
        return Ye(t.type) && Sl(), Be(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Yn(),
          ye(Ke),
          ye(Ae),
          Ri(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Pl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), gt !== null && (uu(gt), (gt = null)))),
          Xi(e, t),
          Be(t),
          null
        );
      case 5:
        Fi(t);
        var l = vn(jr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          oc(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return Be(t), null;
          }
          if (((e = vn(Nt.current)), Pl(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[Pt] = t), (r[zr] = o), (e = (t.mode & 1) !== 0), n)) {
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
                for (l = 0; l < Nr.length; l++) ve(Nr[l], r);
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
                Bu(r, o), ve("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!o.multiple }),
                  ve("invalid", r);
                break;
              case "textarea":
                Uu(r, o), ve("invalid", r);
            }
            zo(n, o), (l = null);
            for (var u in o)
              if (o.hasOwnProperty(u)) {
                var c = o[u];
                u === "children"
                  ? typeof c == "string"
                    ? r.textContent !== c &&
                      (o.suppressHydrationWarning !== !0 &&
                        gl(r.textContent, c, e),
                      (l = ["children", c]))
                    : typeof c == "number" &&
                      r.textContent !== "" + c &&
                      (o.suppressHydrationWarning !== !0 &&
                        gl(r.textContent, c, e),
                      (l = ["children", "" + c]))
                  : y.hasOwnProperty(u) &&
                    c != null &&
                    u === "onScroll" &&
                    ve("scroll", r);
              }
            switch (n) {
              case "input":
                Tt(r), $u(r, o, !0);
                break;
              case "textarea":
                Tt(r), Qu(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = wl);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (u = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Ku(n)),
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
              (e[Pt] = t),
              (e[zr] = r),
              lc(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((u = Ro(n, r)), n)) {
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
                  for (l = 0; l < Nr.length; l++) ve(Nr[l], e);
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
                  Bu(e, r), (l = _o(e, r)), ve("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = L({}, r, { value: void 0 })),
                    ve("invalid", e);
                  break;
                case "textarea":
                  Uu(e, r), (l = Lo(e, r)), ve("invalid", e);
                  break;
                default:
                  l = r;
              }
              zo(n, l), (c = l);
              for (o in c)
                if (c.hasOwnProperty(o)) {
                  var f = c[o];
                  o === "style"
                    ? Gu(e, f)
                    : o === "dangerouslySetInnerHTML"
                      ? ((f = f ? f.__html : void 0), f != null && Yu(e, f))
                      : o === "children"
                        ? typeof f == "string"
                          ? (n !== "textarea" || f !== "") && sr(e, f)
                          : typeof f == "number" && sr(e, "" + f)
                        : o !== "suppressContentEditableWarning" &&
                          o !== "suppressHydrationWarning" &&
                          o !== "autoFocus" &&
                          (y.hasOwnProperty(o)
                            ? f != null && o === "onScroll" && ve("scroll", e)
                            : f != null && re(e, o, f, u));
                }
              switch (n) {
                case "input":
                  Tt(e), $u(e, r, !1);
                  break;
                case "textarea":
                  Tt(e), Qu(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + le(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? Ln(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        Ln(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = wl);
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
        return Be(t), null;
      case 6:
        if (e && t.stateNode != null) ic(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (((n = vn(jr.current)), vn(Nt.current), Pl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Pt] = t),
              (o = r.nodeValue !== n) && ((e = tt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  gl(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    gl(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Pt] = t),
              (t.stateNode = r);
        }
        return Be(t), null;
      case 13:
        if (
          (ye(Ce),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (we && nt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            aa(), Un(), (t.flags |= 98560), (o = !1);
          else if (((o = Pl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(s(317));
              o[Pt] = t;
            } else
              Un(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Be(t), (o = !1);
          } else gt !== null && (uu(gt), (gt = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Ce.current & 1) !== 0
                  ? Fe === 0 && (Fe = 3)
                  : cu())),
            t.updateQueue !== null && (t.flags |= 4),
            Be(t),
            null);
      case 4:
        return (
          Yn(),
          Xi(e, t),
          e === null && Lr(t.stateNode.containerInfo),
          Be(t),
          null
        );
      case 10:
        return Ei(t.type._context), Be(t), null;
      case 17:
        return Ye(t.type) && Sl(), Be(t), null;
      case 19:
        if ((ye(Ce), (o = t.memoizedState), o === null)) return Be(t), null;
        if (((r = (t.flags & 128) !== 0), (u = o.rendering), u === null))
          if (r) Br(o, !1);
          else {
            if (Fe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = Tl(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      Br(o, !1),
                      r = u.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (u = o.alternate),
                      u === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = u.childLanes),
                          (o.lanes = u.lanes),
                          (o.child = u.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = u.memoizedProps),
                          (o.memoizedState = u.memoizedState),
                          (o.updateQueue = u.updateQueue),
                          (o.type = u.type),
                          (e = u.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return me(Ce, (Ce.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              xe() > Jn &&
              ((t.flags |= 128), (r = !0), Br(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Tl(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Br(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !u.alternate &&
                  !we)
              )
                return Be(t), null;
            } else
              2 * xe() - o.renderingStartTime > Jn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Br(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((n = o.last),
              n !== null ? (n.sibling = u) : (t.child = u),
              (o.last = u));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = xe()),
            (t.sibling = null),
            (n = Ce.current),
            me(Ce, r ? (n & 1) | 2 : n & 1),
            t)
          : (Be(t), null);
      case 22:
      case 23:
        return (
          au(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (rt & 1073741824) !== 0 &&
              (Be(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Be(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function ld(e, t) {
    switch ((gi(t), t.tag)) {
      case 1:
        return (
          Ye(t.type) && Sl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Yn(),
          ye(Ke),
          ye(Ae),
          Ri(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return Fi(t), null;
      case 13:
        if (
          (ye(Ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          Un();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ye(Ce), null;
      case 4:
        return Yn(), null;
      case 10:
        return Ei(t.type._context), null;
      case 22:
      case 23:
        return au(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Vl = !1,
    Ve = !1,
    od = typeof WeakSet == "function" ? WeakSet : Set,
    z = null;
  function Gn(e, t) {
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
  function Ji(e, t, n) {
    try {
      n();
    } catch (r) {
      ke(e, t, r);
    }
  }
  var uc = !1;
  function id(e, t) {
    if (((ai = ul), (e = Hs()), ti(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var u = 0,
              c = -1,
              f = -1,
              g = 0,
              k = 0,
              x = e,
              S = null;
            t: for (;;) {
              for (
                var F;
                x !== n || (l !== 0 && x.nodeType !== 3) || (c = u + l),
                  x !== o || (r !== 0 && x.nodeType !== 3) || (f = u + r),
                  x.nodeType === 3 && (u += x.nodeValue.length),
                  (F = x.firstChild) !== null;

              )
                (S = x), (x = F);
              for (;;) {
                if (x === e) break t;
                if (
                  (S === n && ++g === l && (c = u),
                  S === o && ++k === r && (f = u),
                  (F = x.nextSibling) !== null)
                )
                  break;
                (x = S), (S = x.parentNode);
              }
              x = F;
            }
            n = c === -1 || f === -1 ? null : { start: c, end: f };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      ci = { focusedElem: e, selectionRange: n }, ul = !1, z = t;
      z !== null;

    )
      if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (z = e);
      else
        for (; z !== null; ) {
          t = z;
          try {
            var R = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (R !== null) {
                    var I = R.memoizedProps,
                      Ee = R.memoizedState,
                      m = t.stateNode,
                      p = m.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? I : wt(t.type, I),
                        Ee,
                      );
                    m.__reactInternalSnapshotBeforeUpdate = p;
                  }
                  break;
                case 3:
                  var v = t.stateNode.containerInfo;
                  v.nodeType === 1
                    ? (v.textContent = "")
                    : v.nodeType === 9 &&
                      v.documentElement &&
                      v.removeChild(v.documentElement);
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
            (e.return = t.return), (z = e);
            break;
          }
          z = t.return;
        }
    return (R = uc), (uc = !1), R;
  }
  function Vr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          (l.destroy = void 0), o !== void 0 && Ji(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function $l(e, t) {
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
  function qi(e) {
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
  function sc(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), sc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Pt],
          delete t[zr],
          delete t[hi],
          delete t[$1],
          delete t[U1])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function ac(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function cc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ac(e.return)) return null;
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
  function bi(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = wl));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (bi(e, t, n), e = e.sibling; e !== null; )
        bi(e, t, n), (e = e.sibling);
  }
  function eu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (eu(e, t, n), e = e.sibling; e !== null; )
        eu(e, t, n), (e = e.sibling);
  }
  var je = null,
    Ct = !1;
  function en(e, t, n) {
    for (n = n.child; n !== null; ) fc(e, t, n), (n = n.sibling);
  }
  function fc(e, t, n) {
    if (_t && typeof _t.onCommitFiberUnmount == "function")
      try {
        _t.onCommitFiberUnmount(tl, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ve || Gn(n, t);
      case 6:
        var r = je,
          l = Ct;
        (je = null),
          en(e, t, n),
          (je = r),
          (Ct = l),
          je !== null &&
            (Ct
              ? ((e = je),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : je.removeChild(n.stateNode));
        break;
      case 18:
        je !== null &&
          (Ct
            ? ((e = je),
              (n = n.stateNode),
              e.nodeType === 8
                ? pi(e.parentNode, n)
                : e.nodeType === 1 && pi(e, n),
              wr(e))
            : pi(je, n.stateNode));
        break;
      case 4:
        (r = je),
          (l = Ct),
          (je = n.stateNode.containerInfo),
          (Ct = !0),
          en(e, t, n),
          (je = r),
          (Ct = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ve &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var o = l,
              u = o.destroy;
            (o = o.tag),
              u !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Ji(n, t, u),
              (l = l.next);
          } while (l !== r);
        }
        en(e, t, n);
        break;
      case 1:
        if (
          !Ve &&
          (Gn(n, t),
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
          ? ((Ve = (r = Ve) || n.memoizedState !== null), en(e, t, n), (Ve = r))
          : en(e, t, n);
        break;
      default:
        en(e, t, n);
    }
  }
  function dc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new od()),
        t.forEach(function (r) {
          var l = md.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function St(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            u = t,
            c = u;
          e: for (; c !== null; ) {
            switch (c.tag) {
              case 5:
                (je = c.stateNode), (Ct = !1);
                break e;
              case 3:
                (je = c.stateNode.containerInfo), (Ct = !0);
                break e;
              case 4:
                (je = c.stateNode.containerInfo), (Ct = !0);
                break e;
            }
            c = c.return;
          }
          if (je === null) throw Error(s(160));
          fc(o, u, l), (je = null), (Ct = !1);
          var f = l.alternate;
          f !== null && (f.return = null), (l.return = null);
        } catch (g) {
          ke(l, t, g);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) pc(t, e), (t = t.sibling);
  }
  function pc(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((St(t, e), Ft(e), r & 4)) {
          try {
            Vr(3, e, e.return), $l(3, e);
          } catch (I) {
            ke(e, e.return, I);
          }
          try {
            Vr(5, e, e.return);
          } catch (I) {
            ke(e, e.return, I);
          }
        }
        break;
      case 1:
        St(t, e), Ft(e), r & 512 && n !== null && Gn(n, n.return);
        break;
      case 5:
        if (
          (St(t, e),
          Ft(e),
          r & 512 && n !== null && Gn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            sr(l, "");
          } catch (I) {
            ke(e, e.return, I);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            u = n !== null ? n.memoizedProps : o,
            c = e.type,
            f = e.updateQueue;
          if (((e.updateQueue = null), f !== null))
            try {
              c === "input" && o.type === "radio" && o.name != null && Vu(l, o),
                Ro(c, u);
              var g = Ro(c, o);
              for (u = 0; u < f.length; u += 2) {
                var k = f[u],
                  x = f[u + 1];
                k === "style"
                  ? Gu(l, x)
                  : k === "dangerouslySetInnerHTML"
                    ? Yu(l, x)
                    : k === "children"
                      ? sr(l, x)
                      : re(l, k, x, g);
              }
              switch (c) {
                case "input":
                  Po(l, o);
                  break;
                case "textarea":
                  Wu(l, o);
                  break;
                case "select":
                  var S = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var F = o.value;
                  F != null
                    ? Ln(l, !!o.multiple, F, !1)
                    : S !== !!o.multiple &&
                      (o.defaultValue != null
                        ? Ln(l, !!o.multiple, o.defaultValue, !0)
                        : Ln(l, !!o.multiple, o.multiple ? [] : "", !1));
              }
              l[zr] = o;
            } catch (I) {
              ke(e, e.return, I);
            }
        }
        break;
      case 6:
        if ((St(t, e), Ft(e), r & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (l = e.stateNode), (o = e.memoizedProps);
          try {
            l.nodeValue = o;
          } catch (I) {
            ke(e, e.return, I);
          }
        }
        break;
      case 3:
        if (
          (St(t, e), Ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            wr(t.containerInfo);
          } catch (I) {
            ke(e, e.return, I);
          }
        break;
      case 4:
        St(t, e), Ft(e);
        break;
      case 13:
        St(t, e),
          Ft(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (ru = xe())),
          r & 4 && dc(e);
        break;
      case 22:
        if (
          ((k = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ve = (g = Ve) || k), St(t, e), (Ve = g)) : St(t, e),
          Ft(e),
          r & 8192)
        ) {
          if (
            ((g = e.memoizedState !== null),
            (e.stateNode.isHidden = g) && !k && (e.mode & 1) !== 0)
          )
            for (z = e, k = e.child; k !== null; ) {
              for (x = z = k; z !== null; ) {
                switch (((S = z), (F = S.child), S.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Vr(4, S, S.return);
                    break;
                  case 1:
                    Gn(S, S.return);
                    var R = S.stateNode;
                    if (typeof R.componentWillUnmount == "function") {
                      (r = S), (n = S.return);
                      try {
                        (t = r),
                          (R.props = t.memoizedProps),
                          (R.state = t.memoizedState),
                          R.componentWillUnmount();
                      } catch (I) {
                        ke(r, n, I);
                      }
                    }
                    break;
                  case 5:
                    Gn(S, S.return);
                    break;
                  case 22:
                    if (S.memoizedState !== null) {
                      vc(x);
                      continue;
                    }
                }
                F !== null ? ((F.return = S), (z = F)) : vc(x);
              }
              k = k.sibling;
            }
          e: for (k = null, x = e; ; ) {
            if (x.tag === 5) {
              if (k === null) {
                k = x;
                try {
                  (l = x.stateNode),
                    g
                      ? ((o = l.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((c = x.stateNode),
                        (f = x.memoizedProps.style),
                        (u =
                          f != null && f.hasOwnProperty("display")
                            ? f.display
                            : null),
                        (c.style.display = Zu("display", u)));
                } catch (I) {
                  ke(e, e.return, I);
                }
              }
            } else if (x.tag === 6) {
              if (k === null)
                try {
                  x.stateNode.nodeValue = g ? "" : x.memoizedProps;
                } catch (I) {
                  ke(e, e.return, I);
                }
            } else if (
              ((x.tag !== 22 && x.tag !== 23) ||
                x.memoizedState === null ||
                x === e) &&
              x.child !== null
            ) {
              (x.child.return = x), (x = x.child);
              continue;
            }
            if (x === e) break e;
            for (; x.sibling === null; ) {
              if (x.return === null || x.return === e) break e;
              k === x && (k = null), (x = x.return);
            }
            k === x && (k = null),
              (x.sibling.return = x.return),
              (x = x.sibling);
          }
        }
        break;
      case 19:
        St(t, e), Ft(e), r & 4 && dc(e);
        break;
      case 21:
        break;
      default:
        St(t, e), Ft(e);
    }
  }
  function Ft(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (ac(n)) {
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
            var o = cc(e);
            eu(e, o, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo,
              c = cc(e);
            bi(e, c, u);
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
  function ud(e, t, n) {
    (z = e), hc(e);
  }
  function hc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null; ) {
      var l = z,
        o = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || Vl;
        if (!u) {
          var c = l.alternate,
            f = (c !== null && c.memoizedState !== null) || Ve;
          c = Vl;
          var g = Ve;
          if (((Vl = u), (Ve = f) && !g))
            for (z = l; z !== null; )
              (u = z),
                (f = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? yc(l)
                  : f !== null
                    ? ((f.return = u), (z = f))
                    : yc(l);
          for (; o !== null; ) (z = o), hc(o), (o = o.sibling);
          (z = l), (Vl = c), (Ve = g);
        }
        mc(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && o !== null
          ? ((o.return = l), (z = o))
          : mc(e);
    }
  }
  function mc(e) {
    for (; z !== null; ) {
      var t = z;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ve || $l(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ve)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : wt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var o = t.updateQueue;
                o !== null && va(t, o, r);
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
                  va(t, u, n);
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
                  var g = t.alternate;
                  if (g !== null) {
                    var k = g.memoizedState;
                    if (k !== null) {
                      var x = k.dehydrated;
                      x !== null && wr(x);
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
          Ve || (t.flags & 512 && qi(t));
        } catch (S) {
          ke(t, t.return, S);
        }
      }
      if (t === e) {
        z = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (z = n);
        break;
      }
      z = t.return;
    }
  }
  function vc(e) {
    for (; z !== null; ) {
      var t = z;
      if (t === e) {
        z = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (z = n);
        break;
      }
      z = t.return;
    }
  }
  function yc(e) {
    for (; z !== null; ) {
      var t = z;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              $l(4, t);
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
            var o = t.return;
            try {
              qi(t);
            } catch (f) {
              ke(t, o, f);
            }
            break;
          case 5:
            var u = t.return;
            try {
              qi(t);
            } catch (f) {
              ke(t, u, f);
            }
        }
      } catch (f) {
        ke(t, t.return, f);
      }
      if (t === e) {
        z = null;
        break;
      }
      var c = t.sibling;
      if (c !== null) {
        (c.return = t.return), (z = c);
        break;
      }
      z = t.return;
    }
  }
  var sd = Math.ceil,
    Ul = q.ReactCurrentDispatcher,
    tu = q.ReactCurrentOwner,
    ft = q.ReactCurrentBatchConfig,
    ie = 0,
    Re = null,
    _e = null,
    Oe = 0,
    rt = 0,
    Xn = Gt(0),
    Fe = 0,
    $r = null,
    gn = 0,
    Wl = 0,
    nu = 0,
    Ur = null,
    Ge = null,
    ru = 0,
    Jn = 1 / 0,
    Bt = null,
    Ql = !1,
    lu = null,
    tn = null,
    Kl = !1,
    nn = null,
    Yl = 0,
    Wr = 0,
    ou = null,
    Zl = -1,
    Gl = 0;
  function Qe() {
    return (ie & 6) !== 0 ? xe() : Zl !== -1 ? Zl : (Zl = xe());
  }
  function rn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ie & 2) !== 0 && Oe !== 0
        ? Oe & -Oe
        : Q1.transition !== null
          ? (Gl === 0 && (Gl = cs()), Gl)
          : ((e = pe),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : ws(e.type))),
            e);
  }
  function kt(e, t, n, r) {
    if (50 < Wr) throw ((Wr = 0), (ou = null), Error(s(185)));
    hr(e, n, r),
      ((ie & 2) === 0 || e !== Re) &&
        (e === Re && ((ie & 2) === 0 && (Wl |= n), Fe === 4 && ln(e, Oe)),
        Xe(e, r),
        n === 1 &&
          ie === 0 &&
          (t.mode & 1) === 0 &&
          ((Jn = xe() + 500), xl && Jt()));
  }
  function Xe(e, t) {
    var n = e.callbackNode;
    Qf(e, t);
    var r = ll(e, e === Re ? Oe : 0);
    if (r === 0)
      n !== null && us(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && us(n), t === 1))
        e.tag === 0 ? W1(wc.bind(null, e)) : la(wc.bind(null, e)),
          B1(function () {
            (ie & 6) === 0 && Jt();
          }),
          (n = null);
      else {
        switch (fs(r)) {
          case 1:
            n = Ao;
            break;
          case 4:
            n = ss;
            break;
          case 16:
            n = el;
            break;
          case 536870912:
            n = as;
            break;
          default:
            n = el;
        }
        n = Nc(n, gc.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function gc(e, t) {
    if (((Zl = -1), (Gl = 0), (ie & 6) !== 0)) throw Error(s(327));
    var n = e.callbackNode;
    if (qn() && e.callbackNode !== n) return null;
    var r = ll(e, e === Re ? Oe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Xl(e, r);
    else {
      t = r;
      var l = ie;
      ie |= 2;
      var o = Sc();
      (Re !== e || Oe !== t) && ((Bt = null), (Jn = xe() + 500), Cn(e, t));
      do
        try {
          fd();
          break;
        } catch (c) {
          Cc(e, c);
        }
      while (!0);
      xi(),
        (Ul.current = o),
        (ie = l),
        _e !== null ? (t = 0) : ((Re = null), (Oe = 0), (t = Fe));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Ho(e)), l !== 0 && ((r = l), (t = iu(e, l)))),
        t === 1)
      )
        throw ((n = $r), Cn(e, 0), ln(e, r), Xe(e, xe()), n);
      if (t === 6) ln(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !ad(l) &&
            ((t = Xl(e, r)),
            t === 2 && ((o = Ho(e)), o !== 0 && ((r = o), (t = iu(e, o)))),
            t === 1))
        )
          throw ((n = $r), Cn(e, 0), ln(e, r), Xe(e, xe()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Sn(e, Ge, Bt);
            break;
          case 3:
            if (
              (ln(e, r),
              (r & 130023424) === r && ((t = ru + 500 - xe()), 10 < t))
            ) {
              if (ll(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Qe(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = di(Sn.bind(null, e, Ge, Bt), t);
              break;
            }
            Sn(e, Ge, Bt);
            break;
          case 4:
            if ((ln(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - vt(r);
              (o = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~o);
            }
            if (
              ((r = l),
              (r = xe() - r),
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
                            : 1960 * sd(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = di(Sn.bind(null, e, Ge, Bt), r);
              break;
            }
            Sn(e, Ge, Bt);
            break;
          case 5:
            Sn(e, Ge, Bt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return Xe(e, xe()), e.callbackNode === n ? gc.bind(null, e) : null;
  }
  function iu(e, t) {
    var n = Ur;
    return (
      e.current.memoizedState.isDehydrated && (Cn(e, t).flags |= 256),
      (e = Xl(e, t)),
      e !== 2 && ((t = Ge), (Ge = n), t !== null && uu(t)),
      e
    );
  }
  function uu(e) {
    Ge === null ? (Ge = e) : Ge.push.apply(Ge, e);
  }
  function ad(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!yt(o(), l)) return !1;
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
      t &= ~nu,
        t &= ~Wl,
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
  function wc(e) {
    if ((ie & 6) !== 0) throw Error(s(327));
    qn();
    var t = ll(e, 0);
    if ((t & 1) === 0) return Xe(e, xe()), null;
    var n = Xl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ho(e);
      r !== 0 && ((t = r), (n = iu(e, r)));
    }
    if (n === 1) throw ((n = $r), Cn(e, 0), ln(e, t), Xe(e, xe()), n);
    if (n === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Sn(e, Ge, Bt),
      Xe(e, xe()),
      null
    );
  }
  function su(e, t) {
    var n = ie;
    ie |= 1;
    try {
      return e(t);
    } finally {
      (ie = n), ie === 0 && ((Jn = xe() + 500), xl && Jt());
    }
  }
  function wn(e) {
    nn !== null && nn.tag === 0 && (ie & 6) === 0 && qn();
    var t = ie;
    ie |= 1;
    var n = ft.transition,
      r = pe;
    try {
      if (((ft.transition = null), (pe = 1), e)) return e();
    } finally {
      (pe = r), (ft.transition = n), (ie = t), (ie & 6) === 0 && Jt();
    }
  }
  function au() {
    (rt = Xn.current), ye(Xn);
  }
  function Cn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), H1(n)), _e !== null))
      for (n = _e.return; n !== null; ) {
        var r = n;
        switch ((gi(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Sl();
            break;
          case 3:
            Yn(), ye(Ke), ye(Ae), Ri();
            break;
          case 5:
            Fi(r);
            break;
          case 4:
            Yn();
            break;
          case 13:
            ye(Ce);
            break;
          case 19:
            ye(Ce);
            break;
          case 10:
            Ei(r.type._context);
            break;
          case 22:
          case 23:
            au();
        }
        n = n.return;
      }
    if (
      ((Re = e),
      (_e = e = on(e.current, null)),
      (Oe = rt = t),
      (Fe = 0),
      ($r = null),
      (nu = Wl = gn = 0),
      (Ge = Ur = null),
      mn !== null)
    ) {
      for (t = 0; t < mn.length; t++)
        if (((n = mn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var u = o.next;
            (o.next = l), (r.next = u);
          }
          n.pending = r;
        }
      mn = null;
    }
    return e;
  }
  function Cc(e, t) {
    do {
      var n = _e;
      try {
        if ((xi(), (Il.current = Dl), Ml)) {
          for (var r = Se.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          Ml = !1;
        }
        if (
          ((yn = 0),
          (ze = Le = Se = null),
          (Or = !1),
          (Dr = 0),
          (tu.current = null),
          n === null || n.return === null)
        ) {
          (Fe = 1), ($r = t), (_e = null);
          break;
        }
        e: {
          var o = e,
            u = n.return,
            c = n,
            f = t;
          if (
            ((t = Oe),
            (c.flags |= 32768),
            f !== null && typeof f == "object" && typeof f.then == "function")
          ) {
            var g = f,
              k = c,
              x = k.tag;
            if ((k.mode & 1) === 0 && (x === 0 || x === 11 || x === 15)) {
              var S = k.alternate;
              S
                ? ((k.updateQueue = S.updateQueue),
                  (k.memoizedState = S.memoizedState),
                  (k.lanes = S.lanes))
                : ((k.updateQueue = null), (k.memoizedState = null));
            }
            var F = Qa(u);
            if (F !== null) {
              (F.flags &= -257),
                Ka(F, u, c, o, t),
                F.mode & 1 && Wa(o, g, t),
                (t = F),
                (f = g);
              var R = t.updateQueue;
              if (R === null) {
                var I = new Set();
                I.add(f), (t.updateQueue = I);
              } else R.add(f);
              break e;
            } else {
              if ((t & 1) === 0) {
                Wa(o, g, t), cu();
                break e;
              }
              f = Error(s(426));
            }
          } else if (we && c.mode & 1) {
            var Ee = Qa(u);
            if (Ee !== null) {
              (Ee.flags & 65536) === 0 && (Ee.flags |= 256),
                Ka(Ee, u, c, o, t),
                Si(Zn(f, c));
              break e;
            }
          }
          (o = f = Zn(f, c)),
            Fe !== 4 && (Fe = 2),
            Ur === null ? (Ur = [o]) : Ur.push(o),
            (o = u);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var m = $a(o, f, t);
                ma(o, m);
                break e;
              case 1:
                c = f;
                var p = o.type,
                  v = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof p.getDerivedStateFromError == "function" ||
                    (v !== null &&
                      typeof v.componentDidCatch == "function" &&
                      (tn === null || !tn.has(v))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var E = Ua(o, c, t);
                  ma(o, E);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        xc(n);
      } catch (M) {
        (t = M), _e === n && n !== null && (_e = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Sc() {
    var e = Ul.current;
    return (Ul.current = Dl), e === null ? Dl : e;
  }
  function cu() {
    (Fe === 0 || Fe === 3 || Fe === 2) && (Fe = 4),
      Re === null ||
        ((gn & 268435455) === 0 && (Wl & 268435455) === 0) ||
        ln(Re, Oe);
  }
  function Xl(e, t) {
    var n = ie;
    ie |= 2;
    var r = Sc();
    (Re !== e || Oe !== t) && ((Bt = null), Cn(e, t));
    do
      try {
        cd();
        break;
      } catch (l) {
        Cc(e, l);
      }
    while (!0);
    if ((xi(), (ie = n), (Ul.current = r), _e !== null)) throw Error(s(261));
    return (Re = null), (Oe = 0), Fe;
  }
  function cd() {
    for (; _e !== null; ) kc(_e);
  }
  function fd() {
    for (; _e !== null && !Of(); ) kc(_e);
  }
  function kc(e) {
    var t = Pc(e.alternate, e, rt);
    (e.memoizedProps = e.pendingProps),
      t === null ? xc(e) : (_e = t),
      (tu.current = null);
  }
  function xc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = rd(n, t, rt)), n !== null)) {
          _e = n;
          return;
        }
      } else {
        if (((n = ld(n, t)), n !== null)) {
          (n.flags &= 32767), (_e = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Fe = 6), (_e = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        _e = t;
        return;
      }
      _e = t = e;
    } while (t !== null);
    Fe === 0 && (Fe = 5);
  }
  function Sn(e, t, n) {
    var r = pe,
      l = ft.transition;
    try {
      (ft.transition = null), (pe = 1), dd(e, t, n, r);
    } finally {
      (ft.transition = l), (pe = r);
    }
    return null;
  }
  function dd(e, t, n, r) {
    do qn();
    while (nn !== null);
    if ((ie & 6) !== 0) throw Error(s(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(s(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
      (Kf(e, o),
      e === Re && ((_e = Re = null), (Oe = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Kl ||
        ((Kl = !0),
        Nc(el, function () {
          return qn(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      (o = ft.transition), (ft.transition = null);
      var u = pe;
      pe = 1;
      var c = ie;
      (ie |= 4),
        (tu.current = null),
        id(e, n),
        pc(n, e),
        T1(ci),
        (ul = !!ai),
        (ci = ai = null),
        (e.current = n),
        ud(n),
        Df(),
        (ie = c),
        (pe = u),
        (ft.transition = o);
    } else e.current = n;
    if (
      (Kl && ((Kl = !1), (nn = e), (Yl = l)),
      (o = e.pendingLanes),
      o === 0 && (tn = null),
      Bf(n.stateNode),
      Xe(e, xe()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Ql) throw ((Ql = !1), (e = lu), (lu = null), e);
    return (
      (Yl & 1) !== 0 && e.tag !== 0 && qn(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === ou ? Wr++ : ((Wr = 0), (ou = e))) : (Wr = 0),
      Jt(),
      null
    );
  }
  function qn() {
    if (nn !== null) {
      var e = fs(Yl),
        t = ft.transition,
        n = pe;
      try {
        if (((ft.transition = null), (pe = 16 > e ? 16 : e), nn === null))
          var r = !1;
        else {
          if (((e = nn), (nn = null), (Yl = 0), (ie & 6) !== 0))
            throw Error(s(331));
          var l = ie;
          for (ie |= 4, z = e.current; z !== null; ) {
            var o = z,
              u = o.child;
            if ((z.flags & 16) !== 0) {
              var c = o.deletions;
              if (c !== null) {
                for (var f = 0; f < c.length; f++) {
                  var g = c[f];
                  for (z = g; z !== null; ) {
                    var k = z;
                    switch (k.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Vr(8, k, o);
                    }
                    var x = k.child;
                    if (x !== null) (x.return = k), (z = x);
                    else
                      for (; z !== null; ) {
                        k = z;
                        var S = k.sibling,
                          F = k.return;
                        if ((sc(k), k === g)) {
                          z = null;
                          break;
                        }
                        if (S !== null) {
                          (S.return = F), (z = S);
                          break;
                        }
                        z = F;
                      }
                  }
                }
                var R = o.alternate;
                if (R !== null) {
                  var I = R.child;
                  if (I !== null) {
                    R.child = null;
                    do {
                      var Ee = I.sibling;
                      (I.sibling = null), (I = Ee);
                    } while (I !== null);
                  }
                }
                z = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && u !== null)
              (u.return = o), (z = u);
            else
              e: for (; z !== null; ) {
                if (((o = z), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vr(9, o, o.return);
                  }
                var m = o.sibling;
                if (m !== null) {
                  (m.return = o.return), (z = m);
                  break e;
                }
                z = o.return;
              }
          }
          var p = e.current;
          for (z = p; z !== null; ) {
            u = z;
            var v = u.child;
            if ((u.subtreeFlags & 2064) !== 0 && v !== null)
              (v.return = u), (z = v);
            else
              e: for (u = p; z !== null; ) {
                if (((c = z), (c.flags & 2048) !== 0))
                  try {
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $l(9, c);
                    }
                  } catch (M) {
                    ke(c, c.return, M);
                  }
                if (c === u) {
                  z = null;
                  break e;
                }
                var E = c.sibling;
                if (E !== null) {
                  (E.return = c.return), (z = E);
                  break e;
                }
                z = c.return;
              }
          }
          if (
            ((ie = l),
            Jt(),
            _t && typeof _t.onPostCommitFiberRoot == "function")
          )
            try {
              _t.onPostCommitFiberRoot(tl, e);
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
  function Ec(e, t, n) {
    (t = Zn(n, t)),
      (t = $a(e, t, 1)),
      (e = bt(e, t, 1)),
      (t = Qe()),
      e !== null && (hr(e, 1, t), Xe(e, t));
  }
  function ke(e, t, n) {
    if (e.tag === 3) Ec(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ec(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (tn === null || !tn.has(r)))
          ) {
            (e = Zn(n, e)),
              (e = Ua(t, e, 1)),
              (t = bt(t, e, 1)),
              (e = Qe()),
              t !== null && (hr(t, 1, e), Xe(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function pd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Qe()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Re === e &&
        (Oe & n) === n &&
        (Fe === 4 || (Fe === 3 && (Oe & 130023424) === Oe && 500 > xe() - ru)
          ? Cn(e, 0)
          : (nu |= n)),
      Xe(e, t);
  }
  function _c(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = rl), (rl <<= 1), (rl & 130023424) === 0 && (rl = 4194304)));
    var n = Qe();
    (e = Dt(e, t)), e !== null && (hr(e, t, n), Xe(e, n));
  }
  function hd(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), _c(e, n);
  }
  function md(e, t) {
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
    r !== null && r.delete(t), _c(e, n);
  }
  var Pc;
  Pc = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ke.current) Ze = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return (Ze = !1), nd(e, t, n);
        Ze = (e.flags & 131072) !== 0;
      }
    else (Ze = !1), we && (t.flags & 1048576) !== 0 && oa(t, _l, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Bl(e, t), (e = t.pendingProps);
        var l = Bn(t, Ae.current);
        Kn(t, n), (l = Mi(null, t, r, e, l, n));
        var o = ji();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ye(r) ? ((o = !0), kl(t)) : (o = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Ni(t),
              (l.updater = Al),
              (t.stateNode = l),
              (l._reactInternals = t),
              Vi(t, r, e, n),
              (t = Qi(null, t, r, !0, o, n)))
            : ((t.tag = 0), we && o && yi(t), We(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Bl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = yd(r)),
            (e = wt(r, e)),
            l)
          ) {
            case 0:
              t = Wi(null, t, r, e, n);
              break e;
            case 1:
              t = qa(null, t, r, e, n);
              break e;
            case 11:
              t = Ya(null, t, r, e, n);
              break e;
            case 14:
              t = Za(null, t, r, wt(r.type, e), n);
              break e;
          }
          throw Error(s(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : wt(r, l)),
          Wi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : wt(r, l)),
          qa(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((ba(t), e === null)) throw Error(s(387));
          (r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            ha(e, t),
            Rl(t, r, null, n);
          var u = t.memoizedState;
          if (((r = u.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (l = Zn(Error(s(423)), t)), (t = ec(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = Zn(Error(s(424)), t)), (t = ec(e, t, r, n, l));
              break e;
            } else
              for (
                nt = Zt(t.stateNode.containerInfo.firstChild),
                  tt = t,
                  we = !0,
                  gt = null,
                  n = da(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Un(), r === l)) {
              t = Ht(e, t, n);
              break e;
            }
            We(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          ya(t),
          e === null && Ci(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (u = l.children),
          fi(r, l) ? (u = null) : o !== null && fi(r, o) && (t.flags |= 32),
          Ja(e, t),
          We(e, t, u, n),
          t.child
        );
      case 6:
        return e === null && Ci(t), null;
      case 13:
        return tc(e, t, n);
      case 4:
        return (
          Li(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Wn(t, null, r, n)) : We(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : wt(r, l)),
          Ya(e, t, r, l, n)
        );
      case 7:
        return We(e, t, t.pendingProps, n), t.child;
      case 8:
        return We(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return We(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (u = l.value),
            me(Ll, r._currentValue),
            (r._currentValue = u),
            o !== null)
          )
            if (yt(o.value, u)) {
              if (o.children === l.children && !Ke.current) {
                t = Ht(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var c = o.dependencies;
                if (c !== null) {
                  u = o.child;
                  for (var f = c.firstContext; f !== null; ) {
                    if (f.context === r) {
                      if (o.tag === 1) {
                        (f = At(-1, n & -n)), (f.tag = 2);
                        var g = o.updateQueue;
                        if (g !== null) {
                          g = g.shared;
                          var k = g.pending;
                          k === null
                            ? (f.next = f)
                            : ((f.next = k.next), (k.next = f)),
                            (g.pending = f);
                        }
                      }
                      (o.lanes |= n),
                        (f = o.alternate),
                        f !== null && (f.lanes |= n),
                        _i(o.return, n, t),
                        (c.lanes |= n);
                      break;
                    }
                    f = f.next;
                  }
                } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((u = o.return), u === null)) throw Error(s(341));
                  (u.lanes |= n),
                    (c = u.alternate),
                    c !== null && (c.lanes |= n),
                    _i(u, n, t),
                    (u = o.sibling);
                } else u = o.child;
                if (u !== null) u.return = o;
                else
                  for (u = o; u !== null; ) {
                    if (u === t) {
                      u = null;
                      break;
                    }
                    if (((o = u.sibling), o !== null)) {
                      (o.return = u.return), (u = o);
                      break;
                    }
                    u = u.return;
                  }
                o = u;
              }
          We(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Kn(t, n),
          (l = at(l)),
          (r = r(l)),
          (t.flags |= 1),
          We(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = wt(r, t.pendingProps)),
          (l = wt(r.type, l)),
          Za(e, t, r, l, n)
        );
      case 15:
        return Ga(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : wt(r, l)),
          Bl(e, t),
          (t.tag = 1),
          Ye(r) ? ((e = !0), kl(t)) : (e = !1),
          Kn(t, n),
          Ba(t, r, l),
          Vi(t, r, l, n),
          Qi(null, t, r, !0, e, n)
        );
      case 19:
        return rc(e, t, n);
      case 22:
        return Xa(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function Nc(e, t) {
    return is(e, t);
  }
  function vd(e, t, n, r) {
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
    return new vd(e, t, n, r);
  }
  function fu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function yd(e) {
    if (typeof e == "function") return fu(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ot)) return 11;
      if (e === it) return 14;
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
  function Jl(e, t, n, r, l, o) {
    var u = 2;
    if (((r = e), typeof e == "function")) fu(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else
      e: switch (e) {
        case B:
          return kn(n.children, l, o, t);
        case Ne:
          (u = 8), (l |= 8);
          break;
        case qe:
          return (
            (e = dt(12, n, t, l | 2)), (e.elementType = qe), (e.lanes = o), e
          );
        case Ue:
          return (e = dt(13, n, t, l)), (e.elementType = Ue), (e.lanes = o), e;
        case be:
          return (e = dt(19, n, t, l)), (e.elementType = be), (e.lanes = o), e;
        case he:
          return ql(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ht:
                u = 10;
                break e;
              case Rt:
                u = 9;
                break e;
              case ot:
                u = 11;
                break e;
              case it:
                u = 14;
                break e;
              case De:
                (u = 16), (r = null);
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = dt(u, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
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
  function du(e, t, n) {
    return (e = dt(6, e, null, t)), (e.lanes = n), e;
  }
  function pu(e, t, n) {
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
  function gd(e, t, n, r, l) {
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
      (this.eventTimes = Bo(0)),
      (this.expirationTimes = Bo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Bo(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function hu(e, t, n, r, l, o, u, c, f) {
    return (
      (e = new gd(e, t, n, c, f)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = dt(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ni(o),
      e
    );
  }
  function wd(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Y,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Lc(e) {
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
            if (Ye(t.type)) {
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
      if (Ye(n)) return na(e, n, t);
    }
    return t;
  }
  function Fc(e, t, n, r, l, o, u, c, f) {
    return (
      (e = hu(n, r, !0, e, l, o, u, c, f)),
      (e.context = Lc(null)),
      (n = e.current),
      (r = Qe()),
      (l = rn(n)),
      (o = At(r, l)),
      (o.callback = t ?? null),
      bt(n, o, l),
      (e.current.lanes = l),
      hr(e, l, r),
      Xe(e, r),
      e
    );
  }
  function bl(e, t, n, r) {
    var l = t.current,
      o = Qe(),
      u = rn(l);
    return (
      (n = Lc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = At(o, u)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = bt(l, t, u)),
      e !== null && (kt(e, l, u, o), zl(e, l, u)),
      u
    );
  }
  function eo(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function zc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function mu(e, t) {
    zc(e, t), (e = e.alternate) && zc(e, t);
  }
  function Cd() {
    return null;
  }
  var Rc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function vu(e) {
    this._internalRoot = e;
  }
  (to.prototype.render = vu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      bl(e, t, null, null);
    }),
    (to.prototype.unmount = vu.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          wn(function () {
            bl(null, e, null, null);
          }),
            (t[It] = null);
        }
      });
  function to(e) {
    this._internalRoot = e;
  }
  to.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = hs();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++);
      Qt.splice(n, 0, e), n === 0 && ys(e);
    }
  };
  function yu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function no(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Tc() {}
  function Sd(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var g = eo(u);
          o.call(g);
        };
      }
      var u = Fc(t, r, e, 0, null, !1, !1, "", Tc);
      return (
        (e._reactRootContainer = u),
        (e[It] = u.current),
        Lr(e.nodeType === 8 ? e.parentNode : e),
        wn(),
        u
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var c = r;
      r = function () {
        var g = eo(f);
        c.call(g);
      };
    }
    var f = hu(e, 0, !1, null, null, !1, !1, "", Tc);
    return (
      (e._reactRootContainer = f),
      (e[It] = f.current),
      Lr(e.nodeType === 8 ? e.parentNode : e),
      wn(function () {
        bl(t, f, n, r);
      }),
      f
    );
  }
  function ro(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var u = o;
      if (typeof l == "function") {
        var c = l;
        l = function () {
          var f = eo(u);
          c.call(f);
        };
      }
      bl(t, u, e, l);
    } else u = Sd(n, t, e, l, r);
    return eo(u);
  }
  (ds = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = pr(t.pendingLanes);
          n !== 0 &&
            (Vo(t, n | 1),
            Xe(t, xe()),
            (ie & 6) === 0 && ((Jn = xe() + 500), Jt()));
        }
        break;
      case 13:
        wn(function () {
          var r = Dt(e, 1);
          if (r !== null) {
            var l = Qe();
            kt(r, e, 1, l);
          }
        }),
          mu(e, 1);
    }
  }),
    ($o = function (e) {
      if (e.tag === 13) {
        var t = Dt(e, 134217728);
        if (t !== null) {
          var n = Qe();
          kt(t, e, 134217728, n);
        }
        mu(e, 134217728);
      }
    }),
    (ps = function (e) {
      if (e.tag === 13) {
        var t = rn(e),
          n = Dt(e, t);
        if (n !== null) {
          var r = Qe();
          kt(n, e, t, r);
        }
        mu(e, t);
      }
    }),
    (hs = function () {
      return pe;
    }),
    (ms = function (e, t) {
      var n = pe;
      try {
        return (pe = e), t();
      } finally {
        pe = n;
      }
    }),
    (Mo = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Po(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
                var l = Cl(r);
                if (!l) throw Error(s(90));
                mt(r), Po(r, l);
              }
            }
          }
          break;
        case "textarea":
          Wu(e, n);
          break;
        case "select":
          (t = n.value), t != null && Ln(e, !!n.multiple, t, !1);
      }
    }),
    (bu = su),
    (es = wn);
  var kd = { usingClientEntryPoint: !1, Events: [Rr, An, Cl, Ju, qu, su] },
    Qr = {
      findFiberByHostInstance: fn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    xd = {
      bundleType: Qr.bundleType,
      version: Qr.version,
      rendererPackageName: Qr.rendererPackageName,
      rendererConfig: Qr.rendererConfig,
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
        return (e = ls(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Qr.findFiberByHostInstance || Cd,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var lo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!lo.isDisabled && lo.supportsFiber)
      try {
        (tl = lo.inject(xd)), (_t = lo);
      } catch {}
  }
  return (
    (Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kd),
    (Je.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!yu(t)) throw Error(s(200));
      return wd(e, t, null, n);
    }),
    (Je.createRoot = function (e, t) {
      if (!yu(e)) throw Error(s(299));
      var n = !1,
        r = "",
        l = Rc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = hu(e, 1, !1, null, null, n, !1, r, l)),
        (e[It] = t.current),
        Lr(e.nodeType === 8 ? e.parentNode : e),
        new vu(t)
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
      return (e = ls(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Je.flushSync = function (e) {
      return wn(e);
    }),
    (Je.hydrate = function (e, t, n) {
      if (!no(t)) throw Error(s(200));
      return ro(null, e, t, !0, n);
    }),
    (Je.hydrateRoot = function (e, t, n) {
      if (!yu(e)) throw Error(s(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = "",
        u = Rc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (t = Fc(t, null, e, 1, n ?? null, l, !1, o, u)),
        (e[It] = t.current),
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
      return new to(t);
    }),
    (Je.render = function (e, t, n) {
      if (!no(t)) throw Error(s(200));
      return ro(null, e, t, !1, n);
    }),
    (Je.unmountComponentAtNode = function (e) {
      if (!no(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (wn(function () {
            ro(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[It] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Je.unstable_batchedUpdates = su),
    (Je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!no(n)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return ro(e, t, n, !1, r);
    }),
    (Je.version = "18.3.1-next-f1338f8080-20240426"),
    Je
  );
}
var Bc;
function Td() {
  if (Bc) return Cu.exports;
  Bc = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (a) {
        console.error(a);
      }
  }
  return i(), (Cu.exports = Rd()), Cu.exports;
}
var Vc;
function Id() {
  if (Vc) return oo;
  Vc = 1;
  var i = Td();
  return (oo.createRoot = i.createRoot), (oo.hydrateRoot = i.hydrateRoot), oo;
}
var Md = Id(),
  $e = function () {
    return (
      ($e =
        Object.assign ||
        function (a) {
          for (var s, d = 1, y = arguments.length; d < y; d++) {
            s = arguments[d];
            for (var w in s)
              Object.prototype.hasOwnProperty.call(s, w) && (a[w] = s[w]);
          }
          return a;
        }),
      $e.apply(this, arguments)
    );
  };
function ho(i, a, s) {
  if (s || arguments.length === 2)
    for (var d = 0, y = a.length, w; d < y; d++)
      (w || !(d in a)) &&
        (w || (w = Array.prototype.slice.call(a, 0, d)), (w[d] = a[d]));
  return i.concat(w || Array.prototype.slice.call(a));
}
var ge = "-ms-",
  Zr = "-moz-",
  de = "-webkit-",
  of = "comm",
  wo = "rule",
  ju = "decl",
  jd = "@import",
  uf = "@keyframes",
  Od = "@layer",
  sf = Math.abs,
  Ou = String.fromCharCode,
  Nu = Object.assign;
function Dd(i, a) {
  return Ie(i, 0) ^ 45
    ? (((((((a << 2) ^ Ie(i, 0)) << 2) ^ Ie(i, 1)) << 2) ^ Ie(i, 2)) << 2) ^
        Ie(i, 3)
    : 0;
}
function af(i) {
  return i.trim();
}
function Vt(i, a) {
  return (i = a.exec(i)) ? i[0] : i;
}
function J(i, a, s) {
  return i.replace(a, s);
}
function so(i, a, s) {
  return i.indexOf(a, s);
}
function Ie(i, a) {
  return i.charCodeAt(a) | 0;
}
function nr(i, a, s) {
  return i.slice(a, s);
}
function zt(i) {
  return i.length;
}
function cf(i) {
  return i.length;
}
function Yr(i, a) {
  return a.push(i), i;
}
function Ad(i, a) {
  return i.map(a).join("");
}
function $c(i, a) {
  return i.filter(function (s) {
    return !Vt(s, a);
  });
}
var Co = 1,
  rr = 1,
  ff = 0,
  pt = 0,
  Pe = 0,
  ir = "";
function So(i, a, s, d, y, w, _, T) {
  return {
    value: i,
    root: a,
    parent: s,
    type: d,
    props: y,
    children: w,
    line: Co,
    column: rr,
    length: _,
    return: "",
    siblings: T,
  };
}
function sn(i, a) {
  return Nu(
    So("", null, null, "", null, null, 0, i.siblings),
    i,
    { length: -i.length },
    a,
  );
}
function bn(i) {
  for (; i.root; ) i = sn(i.root, { children: [i] });
  Yr(i, i.siblings);
}
function Hd() {
  return Pe;
}
function Bd() {
  return (
    (Pe = pt > 0 ? Ie(ir, --pt) : 0), rr--, Pe === 10 && ((rr = 1), Co--), Pe
  );
}
function xt() {
  return (
    (Pe = pt < ff ? Ie(ir, pt++) : 0), rr++, Pe === 10 && ((rr = 1), Co++), Pe
  );
}
function En() {
  return Ie(ir, pt);
}
function ao() {
  return pt;
}
function ko(i, a) {
  return nr(ir, i, a);
}
function Lu(i) {
  switch (i) {
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
function Vd(i) {
  return (Co = rr = 1), (ff = zt((ir = i))), (pt = 0), [];
}
function $d(i) {
  return (ir = ""), i;
}
function xu(i) {
  return af(ko(pt - 1, Fu(i === 91 ? i + 2 : i === 40 ? i + 1 : i)));
}
function Ud(i) {
  for (; (Pe = En()) && Pe < 33; ) xt();
  return Lu(i) > 2 || Lu(Pe) > 3 ? "" : " ";
}
function Wd(i, a) {
  for (
    ;
    --a &&
    xt() &&
    !(Pe < 48 || Pe > 102 || (Pe > 57 && Pe < 65) || (Pe > 70 && Pe < 97));

  );
  return ko(i, ao() + (a < 6 && En() == 32 && xt() == 32));
}
function Fu(i) {
  for (; xt(); )
    switch (Pe) {
      case i:
        return pt;
      case 34:
      case 39:
        i !== 34 && i !== 39 && Fu(Pe);
        break;
      case 40:
        i === 41 && Fu(i);
        break;
      case 92:
        xt();
        break;
    }
  return pt;
}
function Qd(i, a) {
  for (; xt() && i + Pe !== 57; ) if (i + Pe === 84 && En() === 47) break;
  return "/*" + ko(a, pt - 1) + "*" + Ou(i === 47 ? i : xt());
}
function Kd(i) {
  for (; !Lu(En()); ) xt();
  return ko(i, pt);
}
function Yd(i) {
  return $d(co("", null, null, null, [""], (i = Vd(i)), 0, [0], i));
}
function co(i, a, s, d, y, w, _, T, N) {
  for (
    var Q = 0,
      U = 0,
      O = _,
      D = 0,
      K = 0,
      ne = 0,
      W = 1,
      G = 1,
      fe = 1,
      oe = 0,
      re = "",
      q = y,
      ae = w,
      Y = d,
      B = re;
    G;

  )
    switch (((ne = oe), (oe = xt()))) {
      case 40:
        if (ne != 108 && Ie(B, O - 1) == 58) {
          so((B += J(xu(oe), "&", "&\f")), "&\f", sf(Q ? T[Q - 1] : 0)) != -1 &&
            (fe = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        B += xu(oe);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        B += Ud(ne);
        break;
      case 92:
        B += Wd(ao() - 1, 7);
        continue;
      case 47:
        switch (En()) {
          case 42:
          case 47:
            Yr(Zd(Qd(xt(), ao()), a, s, N), N);
            break;
          default:
            B += "/";
        }
        break;
      case 123 * W:
        T[Q++] = zt(B) * fe;
      case 125 * W:
      case 59:
      case 0:
        switch (oe) {
          case 0:
          case 125:
            G = 0;
          case 59 + U:
            fe == -1 && (B = J(B, /\f/g, "")),
              K > 0 &&
                zt(B) - O &&
                Yr(
                  K > 32
                    ? Wc(B + ";", d, s, O - 1, N)
                    : Wc(J(B, " ", "") + ";", d, s, O - 2, N),
                  N,
                );
            break;
          case 59:
            B += ";";
          default:
            if (
              (Yr(
                (Y = Uc(B, a, s, Q, U, y, T, re, (q = []), (ae = []), O, w)),
                w,
              ),
              oe === 123)
            )
              if (U === 0) co(B, a, Y, Y, q, w, O, T, ae);
              else
                switch (D === 99 && Ie(B, 3) === 110 ? 100 : D) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    co(
                      i,
                      Y,
                      Y,
                      d &&
                        Yr(Uc(i, Y, Y, 0, 0, y, T, re, y, (q = []), O, ae), ae),
                      y,
                      ae,
                      O,
                      T,
                      d ? q : ae,
                    );
                    break;
                  default:
                    co(B, Y, Y, Y, [""], ae, 0, T, ae);
                }
        }
        (Q = U = K = 0), (W = fe = 1), (re = B = ""), (O = _);
        break;
      case 58:
        (O = 1 + zt(B)), (K = ne);
      default:
        if (W < 1) {
          if (oe == 123) --W;
          else if (oe == 125 && W++ == 0 && Bd() == 125) continue;
        }
        switch (((B += Ou(oe)), oe * W)) {
          case 38:
            fe = U > 0 ? 1 : ((B += "\f"), -1);
            break;
          case 44:
            (T[Q++] = (zt(B) - 1) * fe), (fe = 1);
            break;
          case 64:
            En() === 45 && (B += xu(xt())),
              (D = En()),
              (U = O = zt((re = B += Kd(ao())))),
              oe++;
            break;
          case 45:
            ne === 45 && zt(B) == 2 && (W = 0);
        }
    }
  return w;
}
function Uc(i, a, s, d, y, w, _, T, N, Q, U, O) {
  for (
    var D = y - 1, K = y === 0 ? w : [""], ne = cf(K), W = 0, G = 0, fe = 0;
    W < d;
    ++W
  )
    for (
      var oe = 0, re = nr(i, D + 1, (D = sf((G = _[W])))), q = i;
      oe < ne;
      ++oe
    )
      (q = af(G > 0 ? K[oe] + " " + re : J(re, /&\f/g, K[oe]))) &&
        (N[fe++] = q);
  return So(i, a, s, y === 0 ? wo : T, N, Q, U, O);
}
function Zd(i, a, s, d) {
  return So(i, a, s, of, Ou(Hd()), nr(i, 2, -2), 0, d);
}
function Wc(i, a, s, d, y) {
  return So(i, a, s, ju, nr(i, 0, d), nr(i, d + 1, -1), d, y);
}
function df(i, a, s) {
  switch (Dd(i, a)) {
    case 5103:
      return de + "print-" + i + i;
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
      return de + i + i;
    case 4789:
      return Zr + i + i;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return de + i + Zr + i + ge + i + i;
    case 5936:
      switch (Ie(i, a + 11)) {
        case 114:
          return de + i + ge + J(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case 108:
          return de + i + ge + J(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case 45:
          return de + i + ge + J(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case 6828:
    case 4268:
    case 2903:
      return de + i + ge + i + i;
    case 6165:
      return de + i + ge + "flex-" + i + i;
    case 5187:
      return (
        de + i + J(i, /(\w+).+(:[^]+)/, de + "box-$1$2" + ge + "flex-$1$2") + i
      );
    case 5443:
      return (
        de +
        i +
        ge +
        "flex-item-" +
        J(i, /flex-|-self/g, "") +
        (Vt(i, /flex-|baseline/)
          ? ""
          : ge + "grid-row-" + J(i, /flex-|-self/g, "")) +
        i
      );
    case 4675:
      return (
        de +
        i +
        ge +
        "flex-line-pack" +
        J(i, /align-content|flex-|-self/g, "") +
        i
      );
    case 5548:
      return de + i + ge + J(i, "shrink", "negative") + i;
    case 5292:
      return de + i + ge + J(i, "basis", "preferred-size") + i;
    case 6060:
      return (
        de +
        "box-" +
        J(i, "-grow", "") +
        de +
        i +
        ge +
        J(i, "grow", "positive") +
        i
      );
    case 4554:
      return de + J(i, /([^-])(transform)/g, "$1" + de + "$2") + i;
    case 6187:
      return (
        J(J(J(i, /(zoom-|grab)/, de + "$1"), /(image-set)/, de + "$1"), i, "") +
        i
      );
    case 5495:
    case 3959:
      return J(i, /(image-set\([^]*)/, de + "$1$`$1");
    case 4968:
      return (
        J(
          J(i, /(.+:)(flex-)?(.*)/, de + "box-pack:$3" + ge + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        de +
        i +
        i
      );
    case 4200:
      if (!Vt(i, /flex-|baseline/))
        return ge + "grid-column-align" + nr(i, a) + i;
      break;
    case 2592:
    case 3360:
      return ge + J(i, "template-", "") + i;
    case 4384:
    case 3616:
      return s &&
        s.some(function (d, y) {
          return (a = y), Vt(d.props, /grid-\w+-end/);
        })
        ? ~so(i + (s = s[a].value), "span", 0)
          ? i
          : ge +
            J(i, "-start", "") +
            i +
            ge +
            "grid-row-span:" +
            (~so(s, "span", 0) ? Vt(s, /\d+/) : +Vt(s, /\d+/) - +Vt(i, /\d+/)) +
            ";"
        : ge + J(i, "-start", "") + i;
    case 4896:
    case 4128:
      return s &&
        s.some(function (d) {
          return Vt(d.props, /grid-\w+-start/);
        })
        ? i
        : ge + J(J(i, "-end", "-span"), "span ", "") + i;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return J(i, /(.+)-inline(.+)/, de + "$1$2") + i;
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
      if (zt(i) - 1 - a > 6)
        switch (Ie(i, a + 1)) {
          case 109:
            if (Ie(i, a + 4) !== 45) break;
          case 102:
            return (
              J(
                i,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  de +
                  "$2-$3$1" +
                  Zr +
                  (Ie(i, a + 3) == 108 ? "$3" : "$2-$3"),
              ) + i
            );
          case 115:
            return ~so(i, "stretch", 0)
              ? df(J(i, "stretch", "fill-available"), a, s) + i
              : i;
        }
      break;
    case 5152:
    case 5920:
      return J(
        i,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (d, y, w, _, T, N, Q) {
          return (
            ge +
            y +
            ":" +
            w +
            Q +
            (_ ? ge + y + "-span:" + (T ? N : +N - +w) + Q : "") +
            i
          );
        },
      );
    case 4949:
      if (Ie(i, a + 6) === 121) return J(i, ":", ":" + de) + i;
      break;
    case 6444:
      switch (Ie(i, Ie(i, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            J(
              i,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                de +
                (Ie(i, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                de +
                "$2$3$1" +
                ge +
                "$2box$3",
            ) + i
          );
        case 100:
          return J(i, ":", ":" + ge) + i;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return J(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function mo(i, a) {
  for (var s = "", d = 0; d < i.length; d++) s += a(i[d], d, i, a) || "";
  return s;
}
function Gd(i, a, s, d) {
  switch (i.type) {
    case Od:
      if (i.children.length) break;
    case jd:
    case ju:
      return (i.return = i.return || i.value);
    case of:
      return "";
    case uf:
      return (i.return = i.value + "{" + mo(i.children, d) + "}");
    case wo:
      if (!zt((i.value = i.props.join(",")))) return "";
  }
  return zt((s = mo(i.children, d)))
    ? (i.return = i.value + "{" + s + "}")
    : "";
}
function Xd(i) {
  var a = cf(i);
  return function (s, d, y, w) {
    for (var _ = "", T = 0; T < a; T++) _ += i[T](s, d, y, w) || "";
    return _;
  };
}
function Jd(i) {
  return function (a) {
    a.root || ((a = a.return) && i(a));
  };
}
function qd(i, a, s, d) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case ju:
        i.return = df(i.value, i.length, s);
        return;
      case uf:
        return mo([sn(i, { value: J(i.value, "@", "@" + de) })], d);
      case wo:
        if (i.length)
          return Ad((s = i.props), function (y) {
            switch (Vt(y, (d = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                bn(sn(i, { props: [J(y, /:(read-\w+)/, ":" + Zr + "$1")] })),
                  bn(sn(i, { props: [y] })),
                  Nu(i, { props: $c(s, d) });
                break;
              case "::placeholder":
                bn(
                  sn(i, { props: [J(y, /:(plac\w+)/, ":" + de + "input-$1")] }),
                ),
                  bn(sn(i, { props: [J(y, /:(plac\w+)/, ":" + Zr + "$1")] })),
                  bn(sn(i, { props: [J(y, /:(plac\w+)/, ge + "input-$1")] })),
                  bn(sn(i, { props: [y] })),
                  Nu(i, { props: $c(s, d) });
                break;
            }
            return "";
          });
    }
}
var bd = {
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
  pf = "active",
  hf = "data-styled-version",
  xo = "6.1.17",
  Du = `/*!sc*/
`,
  vo = typeof window < "u" && "HTMLElement" in window,
  ep = !!(typeof SC_DISABLE_SPEEDY == "boolean"
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
  Eo = Object.freeze([]),
  or = Object.freeze({});
function tp(i, a, s) {
  return (
    s === void 0 && (s = or), (i.theme !== s.theme && i.theme) || a || s.theme
  );
}
var mf = new Set([
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
  np = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  rp = /(^-|-$)/g;
function Qc(i) {
  return i.replace(np, "-").replace(rp, "");
}
var lp = /(a)(d)/gi,
  io = 52,
  Kc = function (i) {
    return String.fromCharCode(i + (i > 25 ? 39 : 97));
  };
function zu(i) {
  var a,
    s = "";
  for (a = Math.abs(i); a > io; a = (a / io) | 0) s = Kc(a % io) + s;
  return (Kc(a % io) + s).replace(lp, "$1-$2");
}
var Eu,
  vf = 5381,
  er = function (i, a) {
    for (var s = a.length; s; ) i = (33 * i) ^ a.charCodeAt(--s);
    return i;
  },
  yf = function (i) {
    return er(vf, i);
  };
function op(i) {
  return zu(yf(i) >>> 0);
}
function ip(i) {
  return i.displayName || i.name || "Component";
}
function _u(i) {
  return typeof i == "string" && !0;
}
var gf = typeof Symbol == "function" && Symbol.for,
  wf = gf ? Symbol.for("react.memo") : 60115,
  up = gf ? Symbol.for("react.forward_ref") : 60112,
  sp = {
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
  ap = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  Cf = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  cp =
    (((Eu = {})[up] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (Eu[wf] = Cf),
    Eu);
function Yc(i) {
  return ("type" in (a = i) && a.type.$$typeof) === wf
    ? Cf
    : "$$typeof" in i
      ? cp[i.$$typeof]
      : sp;
  var a;
}
var fp = Object.defineProperty,
  dp = Object.getOwnPropertyNames,
  Zc = Object.getOwnPropertySymbols,
  pp = Object.getOwnPropertyDescriptor,
  hp = Object.getPrototypeOf,
  Gc = Object.prototype;
function Sf(i, a, s) {
  if (typeof a != "string") {
    if (Gc) {
      var d = hp(a);
      d && d !== Gc && Sf(i, d, s);
    }
    var y = dp(a);
    Zc && (y = y.concat(Zc(a)));
    for (var w = Yc(i), _ = Yc(a), T = 0; T < y.length; ++T) {
      var N = y[T];
      if (!(N in ap || (s && s[N]) || (_ && N in _) || (w && N in w))) {
        var Q = pp(a, N);
        try {
          fp(i, N, Q);
        } catch {}
      }
    }
  }
  return i;
}
function Pn(i) {
  return typeof i == "function";
}
function Au(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function xn(i, a) {
  return i && a ? "".concat(i, " ").concat(a) : i || a || "";
}
function Xc(i, a) {
  if (i.length === 0) return "";
  for (var s = i[0], d = 1; d < i.length; d++) s += i[d];
  return s;
}
function Gr(i) {
  return (
    i !== null &&
    typeof i == "object" &&
    i.constructor.name === Object.name &&
    !("props" in i && i.$$typeof)
  );
}
function Ru(i, a, s) {
  if ((s === void 0 && (s = !1), !s && !Gr(i) && !Array.isArray(i))) return a;
  if (Array.isArray(a))
    for (var d = 0; d < a.length; d++) i[d] = Ru(i[d], a[d]);
  else if (Gr(a)) for (var d in a) i[d] = Ru(i[d], a[d]);
  return i;
}
function Hu(i, a) {
  Object.defineProperty(i, "toString", { value: a });
}
function Nn(i) {
  for (var a = [], s = 1; s < arguments.length; s++) a[s - 1] = arguments[s];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(i, " for more information.")
      .concat(a.length > 0 ? " Args: ".concat(a.join(", ")) : ""),
  );
}
var mp = (function () {
    function i(a) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = a);
    }
    return (
      (i.prototype.indexOfGroup = function (a) {
        for (var s = 0, d = 0; d < a; d++) s += this.groupSizes[d];
        return s;
      }),
      (i.prototype.insertRules = function (a, s) {
        if (a >= this.groupSizes.length) {
          for (var d = this.groupSizes, y = d.length, w = y; a >= w; )
            if ((w <<= 1) < 0) throw Nn(16, "".concat(a));
          (this.groupSizes = new Uint32Array(w)),
            this.groupSizes.set(d),
            (this.length = w);
          for (var _ = y; _ < w; _++) this.groupSizes[_] = 0;
        }
        for (
          var T = this.indexOfGroup(a + 1), N = ((_ = 0), s.length);
          _ < N;
          _++
        )
          this.tag.insertRule(T, s[_]) && (this.groupSizes[a]++, T++);
      }),
      (i.prototype.clearGroup = function (a) {
        if (a < this.length) {
          var s = this.groupSizes[a],
            d = this.indexOfGroup(a),
            y = d + s;
          this.groupSizes[a] = 0;
          for (var w = d; w < y; w++) this.tag.deleteRule(d);
        }
      }),
      (i.prototype.getGroup = function (a) {
        var s = "";
        if (a >= this.length || this.groupSizes[a] === 0) return s;
        for (
          var d = this.groupSizes[a],
            y = this.indexOfGroup(a),
            w = y + d,
            _ = y;
          _ < w;
          _++
        )
          s += "".concat(this.tag.getRule(_)).concat(Du);
        return s;
      }),
      i
    );
  })(),
  fo = new Map(),
  yo = new Map(),
  po = 1,
  uo = function (i) {
    if (fo.has(i)) return fo.get(i);
    for (; yo.has(po); ) po++;
    var a = po++;
    return fo.set(i, a), yo.set(a, i), a;
  },
  vp = function (i, a) {
    (po = a + 1), fo.set(i, a), yo.set(a, i);
  },
  yp = "style[".concat(lr, "][").concat(hf, '="').concat(xo, '"]'),
  gp = new RegExp(
    "^".concat(lr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  ),
  wp = function (i, a, s) {
    for (var d, y = s.split(","), w = 0, _ = y.length; w < _; w++)
      (d = y[w]) && i.registerName(a, d);
  },
  Cp = function (i, a) {
    for (
      var s,
        d = ((s = a.textContent) !== null && s !== void 0 ? s : "").split(Du),
        y = [],
        w = 0,
        _ = d.length;
      w < _;
      w++
    ) {
      var T = d[w].trim();
      if (T) {
        var N = T.match(gp);
        if (N) {
          var Q = 0 | parseInt(N[1], 10),
            U = N[2];
          Q !== 0 && (vp(U, Q), wp(i, U, N[3]), i.getTag().insertRules(Q, y)),
            (y.length = 0);
        } else y.push(T);
      }
    }
  },
  Jc = function (i) {
    for (
      var a = document.querySelectorAll(yp), s = 0, d = a.length;
      s < d;
      s++
    ) {
      var y = a[s];
      y &&
        y.getAttribute(lr) !== pf &&
        (Cp(i, y), y.parentNode && y.parentNode.removeChild(y));
    }
  };
function Sp() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var kf = function (i) {
    var a = document.head,
      s = i || a,
      d = document.createElement("style"),
      y = (function (T) {
        var N = Array.from(T.querySelectorAll("style[".concat(lr, "]")));
        return N[N.length - 1];
      })(s),
      w = y !== void 0 ? y.nextSibling : null;
    d.setAttribute(lr, pf), d.setAttribute(hf, xo);
    var _ = Sp();
    return _ && d.setAttribute("nonce", _), s.insertBefore(d, w), d;
  },
  kp = (function () {
    function i(a) {
      (this.element = kf(a)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (s) {
          if (s.sheet) return s.sheet;
          for (var d = document.styleSheets, y = 0, w = d.length; y < w; y++) {
            var _ = d[y];
            if (_.ownerNode === s) return _;
          }
          throw Nn(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (i.prototype.insertRule = function (a, s) {
        try {
          return this.sheet.insertRule(s, a), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (i.prototype.deleteRule = function (a) {
        this.sheet.deleteRule(a), this.length--;
      }),
      (i.prototype.getRule = function (a) {
        var s = this.sheet.cssRules[a];
        return s && s.cssText ? s.cssText : "";
      }),
      i
    );
  })(),
  xp = (function () {
    function i(a) {
      (this.element = kf(a)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (i.prototype.insertRule = function (a, s) {
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
      (i.prototype.deleteRule = function (a) {
        this.element.removeChild(this.nodes[a]), this.length--;
      }),
      (i.prototype.getRule = function (a) {
        return a < this.length ? this.nodes[a].textContent : "";
      }),
      i
    );
  })(),
  Ep = (function () {
    function i(a) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (i.prototype.insertRule = function (a, s) {
        return (
          a <= this.length && (this.rules.splice(a, 0, s), this.length++, !0)
        );
      }),
      (i.prototype.deleteRule = function (a) {
        this.rules.splice(a, 1), this.length--;
      }),
      (i.prototype.getRule = function (a) {
        return a < this.length ? this.rules[a] : "";
      }),
      i
    );
  })(),
  qc = vo,
  _p = { isServer: !vo, useCSSOMInjection: !ep },
  xf = (function () {
    function i(a, s, d) {
      a === void 0 && (a = or), s === void 0 && (s = {});
      var y = this;
      (this.options = $e($e({}, _p), a)),
        (this.gs = s),
        (this.names = new Map(d)),
        (this.server = !!a.isServer),
        !this.server && vo && qc && ((qc = !1), Jc(this)),
        Hu(this, function () {
          return (function (w) {
            for (
              var _ = w.getTag(),
                T = _.length,
                N = "",
                Q = function (O) {
                  var D = (function (fe) {
                    return yo.get(fe);
                  })(O);
                  if (D === void 0) return "continue";
                  var K = w.names.get(D),
                    ne = _.getGroup(O);
                  if (K === void 0 || !K.size || ne.length === 0)
                    return "continue";
                  var W = ""
                      .concat(lr, ".g")
                      .concat(O, '[id="')
                      .concat(D, '"]'),
                    G = "";
                  K !== void 0 &&
                    K.forEach(function (fe) {
                      fe.length > 0 && (G += "".concat(fe, ","));
                    }),
                    (N += ""
                      .concat(ne)
                      .concat(W, '{content:"')
                      .concat(G, '"}')
                      .concat(Du));
                },
                U = 0;
              U < T;
              U++
            )
              Q(U);
            return N;
          })(y);
        });
    }
    return (
      (i.registerId = function (a) {
        return uo(a);
      }),
      (i.prototype.rehydrate = function () {
        !this.server && vo && Jc(this);
      }),
      (i.prototype.reconstructWithOptions = function (a, s) {
        return (
          s === void 0 && (s = !0),
          new i(
            $e($e({}, this.options), a),
            this.gs,
            (s && this.names) || void 0,
          )
        );
      }),
      (i.prototype.allocateGSInstance = function (a) {
        return (this.gs[a] = (this.gs[a] || 0) + 1);
      }),
      (i.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((a = (function (s) {
              var d = s.useCSSOMInjection,
                y = s.target;
              return s.isServer ? new Ep(y) : d ? new kp(y) : new xp(y);
            })(this.options)),
            new mp(a)))
        );
        var a;
      }),
      (i.prototype.hasNameForId = function (a, s) {
        return this.names.has(a) && this.names.get(a).has(s);
      }),
      (i.prototype.registerName = function (a, s) {
        if ((uo(a), this.names.has(a))) this.names.get(a).add(s);
        else {
          var d = new Set();
          d.add(s), this.names.set(a, d);
        }
      }),
      (i.prototype.insertRules = function (a, s, d) {
        this.registerName(a, s), this.getTag().insertRules(uo(a), d);
      }),
      (i.prototype.clearNames = function (a) {
        this.names.has(a) && this.names.get(a).clear();
      }),
      (i.prototype.clearRules = function (a) {
        this.getTag().clearGroup(uo(a)), this.clearNames(a);
      }),
      (i.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      i
    );
  })(),
  Pp = /&/g,
  Np = /^\s*\/\/.*$/gm;
function Ef(i, a) {
  return i.map(function (s) {
    return (
      s.type === "rule" &&
        ((s.value = "".concat(a, " ").concat(s.value)),
        (s.value = s.value.replaceAll(",", ",".concat(a, " "))),
        (s.props = s.props.map(function (d) {
          return "".concat(a, " ").concat(d);
        }))),
      Array.isArray(s.children) &&
        s.type !== "@keyframes" &&
        (s.children = Ef(s.children, a)),
      s
    );
  });
}
function Lp(i) {
  var a,
    s,
    d,
    y = or,
    w = y.options,
    _ = w === void 0 ? or : w,
    T = y.plugins,
    N = T === void 0 ? Eo : T,
    Q = function (D, K, ne) {
      return ne.startsWith(s) &&
        ne.endsWith(s) &&
        ne.replaceAll(s, "").length > 0
        ? ".".concat(a)
        : D;
    },
    U = N.slice();
  U.push(function (D) {
    D.type === wo &&
      D.value.includes("&") &&
      (D.props[0] = D.props[0].replace(Pp, s).replace(d, Q));
  }),
    _.prefix && U.push(qd),
    U.push(Gd);
  var O = function (D, K, ne, W) {
    K === void 0 && (K = ""),
      ne === void 0 && (ne = ""),
      W === void 0 && (W = "&"),
      (a = W),
      (s = K),
      (d = new RegExp("\\".concat(s, "\\b"), "g"));
    var G = D.replace(Np, ""),
      fe = Yd(
        ne || K ? "".concat(ne, " ").concat(K, " { ").concat(G, " }") : G,
      );
    _.namespace && (fe = Ef(fe, _.namespace));
    var oe = [];
    return (
      mo(
        fe,
        Xd(
          U.concat(
            Jd(function (re) {
              return oe.push(re);
            }),
          ),
        ),
      ),
      oe
    );
  };
  return (
    (O.hash = N.length
      ? N.reduce(function (D, K) {
          return K.name || Nn(15), er(D, K.name);
        }, vf).toString()
      : ""),
    O
  );
}
var Fp = new xf(),
  Tu = Lp(),
  _f = an.createContext({
    shouldForwardProp: void 0,
    styleSheet: Fp,
    stylis: Tu,
  });
_f.Consumer;
an.createContext(void 0);
function bc() {
  return tr.useContext(_f);
}
var zp = (function () {
    function i(a, s) {
      var d = this;
      (this.inject = function (y, w) {
        w === void 0 && (w = Tu);
        var _ = d.name + w.hash;
        y.hasNameForId(d.id, _) ||
          y.insertRules(d.id, _, w(d.rules, _, "@keyframes"));
      }),
        (this.name = a),
        (this.id = "sc-keyframes-".concat(a)),
        (this.rules = s),
        Hu(this, function () {
          throw Nn(12, String(d.name));
        });
    }
    return (
      (i.prototype.getName = function (a) {
        return a === void 0 && (a = Tu), this.name + a.hash;
      }),
      i
    );
  })(),
  Rp = function (i) {
    return i >= "A" && i <= "Z";
  };
function ef(i) {
  for (var a = "", s = 0; s < i.length; s++) {
    var d = i[s];
    if (s === 1 && d === "-" && i[0] === "-") return i;
    Rp(d) ? (a += "-" + d.toLowerCase()) : (a += d);
  }
  return a.startsWith("ms-") ? "-" + a : a;
}
var Pf = function (i) {
    return i == null || i === !1 || i === "";
  },
  Nf = function (i) {
    var a,
      s,
      d = [];
    for (var y in i) {
      var w = i[y];
      i.hasOwnProperty(y) &&
        !Pf(w) &&
        ((Array.isArray(w) && w.isCss) || Pn(w)
          ? d.push("".concat(ef(y), ":"), w, ";")
          : Gr(w)
            ? d.push.apply(
                d,
                ho(ho(["".concat(y, " {")], Nf(w), !1), ["}"], !1),
              )
            : d.push(
                ""
                  .concat(ef(y), ": ")
                  .concat(
                    ((a = y),
                    (s = w) == null || typeof s == "boolean" || s === ""
                      ? ""
                      : typeof s != "number" ||
                          s === 0 ||
                          a in bd ||
                          a.startsWith("--")
                        ? String(s).trim()
                        : "".concat(s, "px")),
                    ";",
                  ),
              ));
    }
    return d;
  };
function _n(i, a, s, d) {
  if (Pf(i)) return [];
  if (Au(i)) return [".".concat(i.styledComponentId)];
  if (Pn(i)) {
    if (!Pn((w = i)) || (w.prototype && w.prototype.isReactComponent) || !a)
      return [i];
    var y = i(a);
    return _n(y, a, s, d);
  }
  var w;
  return i instanceof zp
    ? s
      ? (i.inject(s, d), [i.getName(d)])
      : [i]
    : Gr(i)
      ? Nf(i)
      : Array.isArray(i)
        ? Array.prototype.concat.apply(
            Eo,
            i.map(function (_) {
              return _n(_, a, s, d);
            }),
          )
        : [i.toString()];
}
function Tp(i) {
  for (var a = 0; a < i.length; a += 1) {
    var s = i[a];
    if (Pn(s) && !Au(s)) return !1;
  }
  return !0;
}
var Ip = yf(xo),
  Mp = (function () {
    function i(a, s, d) {
      (this.rules = a),
        (this.staticRulesId = ""),
        (this.isStatic = (d === void 0 || d.isStatic) && Tp(a)),
        (this.componentId = s),
        (this.baseHash = er(Ip, s)),
        (this.baseStyle = d),
        xf.registerId(s);
    }
    return (
      (i.prototype.generateAndInjectStyles = function (a, s, d) {
        var y = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(a, s, d)
          : "";
        if (this.isStatic && !d.hash)
          if (
            this.staticRulesId &&
            s.hasNameForId(this.componentId, this.staticRulesId)
          )
            y = xn(y, this.staticRulesId);
          else {
            var w = Xc(_n(this.rules, a, s, d)),
              _ = zu(er(this.baseHash, w) >>> 0);
            if (!s.hasNameForId(this.componentId, _)) {
              var T = d(w, ".".concat(_), void 0, this.componentId);
              s.insertRules(this.componentId, _, T);
            }
            (y = xn(y, _)), (this.staticRulesId = _);
          }
        else {
          for (
            var N = er(this.baseHash, d.hash), Q = "", U = 0;
            U < this.rules.length;
            U++
          ) {
            var O = this.rules[U];
            if (typeof O == "string") Q += O;
            else if (O) {
              var D = Xc(_n(O, a, s, d));
              (N = er(N, D + U)), (Q += D);
            }
          }
          if (Q) {
            var K = zu(N >>> 0);
            s.hasNameForId(this.componentId, K) ||
              s.insertRules(
                this.componentId,
                K,
                d(Q, ".".concat(K), void 0, this.componentId),
              ),
              (y = xn(y, K));
          }
        }
        return y;
      }),
      i
    );
  })(),
  go = an.createContext(void 0);
go.Consumer;
function jp(i) {
  var a = an.useContext(go),
    s = tr.useMemo(
      function () {
        return (function (d, y) {
          if (!d) throw Nn(14);
          if (Pn(d)) {
            var w = d(y);
            return w;
          }
          if (Array.isArray(d) || typeof d != "object") throw Nn(8);
          return y ? $e($e({}, y), d) : d;
        })(i.theme, a);
      },
      [i.theme, a],
    );
  return i.children
    ? an.createElement(go.Provider, { value: s }, i.children)
    : null;
}
var Pu = {};
function Op(i, a, s) {
  var d = Au(i),
    y = i,
    w = !_u(i),
    _ = a.attrs,
    T = _ === void 0 ? Eo : _,
    N = a.componentId,
    Q =
      N === void 0
        ? (function (q, ae) {
            var Y = typeof q != "string" ? "sc" : Qc(q);
            Pu[Y] = (Pu[Y] || 0) + 1;
            var B = "".concat(Y, "-").concat(op(xo + Y + Pu[Y]));
            return ae ? "".concat(ae, "-").concat(B) : B;
          })(a.displayName, a.parentComponentId)
        : N,
    U = a.displayName,
    O =
      U === void 0
        ? (function (q) {
            return _u(q) ? "styled.".concat(q) : "Styled(".concat(ip(q), ")");
          })(i)
        : U,
    D =
      a.displayName && a.componentId
        ? "".concat(Qc(a.displayName), "-").concat(a.componentId)
        : a.componentId || Q,
    K = d && y.attrs ? y.attrs.concat(T).filter(Boolean) : T,
    ne = a.shouldForwardProp;
  if (d && y.shouldForwardProp) {
    var W = y.shouldForwardProp;
    if (a.shouldForwardProp) {
      var G = a.shouldForwardProp;
      ne = function (q, ae) {
        return W(q, ae) && G(q, ae);
      };
    } else ne = W;
  }
  var fe = new Mp(s, D, d ? y.componentStyle : void 0);
  function oe(q, ae) {
    return (function (Y, B, Ne) {
      var qe = Y.attrs,
        ht = Y.componentStyle,
        Rt = Y.defaultProps,
        ot = Y.foldedComponentIds,
        Ue = Y.styledComponentId,
        be = Y.target,
        it = an.useContext(go),
        De = bc(),
        he = Y.shouldForwardProp || De.shouldForwardProp,
        P = tp(B, it, Rt) || or,
        j = (function (te, b, ce) {
          for (
            var le,
              ue = $e($e({}, b), { className: void 0, theme: ce }),
              Me = 0;
            Me < te.length;
            Me += 1
          ) {
            var Tt = Pn((le = te[Me])) ? le(ue) : le;
            for (var mt in Tt)
              ue[mt] =
                mt === "className"
                  ? xn(ue[mt], Tt[mt])
                  : mt === "style"
                    ? $e($e({}, ue[mt]), Tt[mt])
                    : Tt[mt];
          }
          return (
            b.className && (ue.className = xn(ue.className, b.className)), ue
          );
        })(qe, B, P),
        L = j.as || be,
        h = {};
      for (var C in j)
        j[C] === void 0 ||
          C[0] === "$" ||
          C === "as" ||
          (C === "theme" && j.theme === P) ||
          (C === "forwardedAs"
            ? (h.as = j.forwardedAs)
            : (he && !he(C, L)) || (h[C] = j[C]));
      var Z = (function (te, b) {
          var ce = bc(),
            le = te.generateAndInjectStyles(b, ce.styleSheet, ce.stylis);
          return le;
        })(ht, j),
        X = xn(ot, Ue);
      return (
        Z && (X += " " + Z),
        j.className && (X += " " + j.className),
        (h[_u(L) && !mf.has(L) ? "class" : "className"] = X),
        Ne && (h.ref = Ne),
        tr.createElement(L, h)
      );
    })(re, q, ae);
  }
  oe.displayName = O;
  var re = an.forwardRef(oe);
  return (
    (re.attrs = K),
    (re.componentStyle = fe),
    (re.displayName = O),
    (re.shouldForwardProp = ne),
    (re.foldedComponentIds = d
      ? xn(y.foldedComponentIds, y.styledComponentId)
      : ""),
    (re.styledComponentId = D),
    (re.target = d ? y.target : i),
    Object.defineProperty(re, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (q) {
        this._foldedDefaultProps = d
          ? (function (ae) {
              for (var Y = [], B = 1; B < arguments.length; B++)
                Y[B - 1] = arguments[B];
              for (var Ne = 0, qe = Y; Ne < qe.length; Ne++) Ru(ae, qe[Ne], !0);
              return ae;
            })({}, y.defaultProps, q)
          : q;
      },
    }),
    Hu(re, function () {
      return ".".concat(re.styledComponentId);
    }),
    w &&
      Sf(re, i, {
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
function tf(i, a) {
  for (var s = [i[0]], d = 0, y = a.length; d < y; d += 1)
    s.push(a[d], i[d + 1]);
  return s;
}
var nf = function (i) {
  return Object.assign(i, { isCss: !0 });
};
function Dp(i) {
  for (var a = [], s = 1; s < arguments.length; s++) a[s - 1] = arguments[s];
  if (Pn(i) || Gr(i)) return nf(_n(tf(Eo, ho([i], a, !0))));
  var d = i;
  return a.length === 0 && d.length === 1 && typeof d[0] == "string"
    ? _n(d)
    : nf(_n(tf(d, a)));
}
function Iu(i, a, s) {
  if ((s === void 0 && (s = or), !a)) throw Nn(1, a);
  var d = function (y) {
    for (var w = [], _ = 1; _ < arguments.length; _++) w[_ - 1] = arguments[_];
    return i(a, s, Dp.apply(void 0, ho([y], w, !1)));
  };
  return (
    (d.attrs = function (y) {
      return Iu(
        i,
        a,
        $e($e({}, s), {
          attrs: Array.prototype.concat(s.attrs, y).filter(Boolean),
        }),
      );
    }),
    (d.withConfig = function (y) {
      return Iu(i, a, $e($e({}, s), y));
    }),
    d
  );
}
var Lf = function (i) {
    return Iu(Op, i);
  },
  Et = Lf;
mf.forEach(function (i) {
  Et[i] = Lf(i);
});
const Ap = ({ isDark: i = !1 }) =>
    V.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "113",
      height: "24",
      viewBox: "0 0 113 24",
      fill: "none",
      children: [
        V.jsx("path", {
          d: "M35.3052 12.7696V12.4883C35.3052 11.7814 35.0635 11.2405 34.5801 10.8654C34.1114 10.4759 33.4962 10.2812 32.7345 10.2812C32.1486 10.2812 31.6872 10.3821 31.3503 10.5841C31.028 10.7716 30.7204 11.0601 30.4274 11.4496C30.3396 11.565 30.2443 11.6444 30.1418 11.6876C30.0393 11.7309 29.9001 11.7526 29.7243 11.7526H29.0652C28.9041 11.7526 28.7576 11.6949 28.6258 11.5795C28.5086 11.4641 28.4573 11.327 28.472 11.1683C28.5159 10.7356 28.7283 10.31 29.1091 9.89167C29.5046 9.45891 30.0246 9.10548 30.6691 8.8314C31.3136 8.55731 32.0021 8.42027 32.7345 8.42027C34.0967 8.42027 35.1953 8.79534 36.0302 9.54546C36.8798 10.2956 37.3046 11.3486 37.3046 12.7046V19.3043C37.3046 19.463 37.246 19.6 37.1288 19.7154C37.0116 19.8308 36.8725 19.8885 36.7114 19.8885H35.8984C35.7373 19.8885 35.5981 19.8308 35.4809 19.7154C35.3638 19.6 35.3052 19.463 35.3052 19.3043V18.4171C35.0708 18.9365 34.5728 19.3476 33.8111 19.6505C33.0494 19.9535 32.2877 20.1049 31.526 20.1049C30.779 20.1049 30.1125 19.9751 29.5266 19.7154C28.9407 19.4413 28.4866 19.0735 28.1643 18.6119C27.8567 18.1503 27.7029 17.6309 27.7029 17.0539C27.7029 15.972 28.1131 15.1281 28.9334 14.5223C29.7536 13.902 30.8449 13.4836 32.2071 13.2672L35.3052 12.7696ZM35.3052 14.5006L32.7125 14.9117C31.7604 15.056 31.0207 15.294 30.4934 15.6258C29.966 15.9432 29.7024 16.3471 29.7024 16.8375C29.7024 17.1982 29.8708 17.5228 30.2077 17.8113C30.5446 18.0998 31.0573 18.244 31.7457 18.244C32.8004 18.244 33.6573 17.9483 34.3164 17.3569C34.9756 16.7654 35.3052 15.9937 35.3052 15.0416V14.5006Z",
          fill: i ? "#FBFDFF" : "#020617",
        }),
        V.jsx("path", {
          d: "M42.5097 19.3043C42.5097 19.463 42.4511 19.6 42.3339 19.7154C42.2167 19.8308 42.0776 19.8885 41.9164 19.8885H41.1035C40.9424 19.8885 40.8032 19.8308 40.686 19.7154C40.5688 19.6 40.5102 19.463 40.5102 19.3043V5.10962C40.5102 4.95094 40.5688 4.8139 40.686 4.6985C40.8032 4.58309 40.9424 4.52539 41.1035 4.52539H41.9164C42.0776 4.52539 42.2167 4.58309 42.3339 4.6985C42.4511 4.8139 42.5097 4.95094 42.5097 5.10962V19.3043Z",
          fill: i ? "#FBFDFF" : "#020617",
        }),
        V.jsx("path", {
          d: "M50.4241 18.244C51.8889 18.244 52.8776 17.6814 53.3903 16.5562C53.4929 16.3399 53.5954 16.1884 53.6979 16.1018C53.8005 16.0153 53.9396 15.972 54.1154 15.972H54.7745C54.9357 15.972 55.0748 16.0297 55.192 16.1451C55.3092 16.2461 55.3678 16.3687 55.3678 16.513C55.3678 17.0034 55.17 17.53 54.7745 18.0926C54.3791 18.6552 53.8078 19.1312 53.0607 19.5207C52.3137 19.9102 51.4348 20.1049 50.4241 20.1049C49.3841 20.1049 48.4833 19.8885 47.7216 19.4558C46.9599 19.023 46.374 18.4316 45.9639 17.6814C45.5537 16.9169 45.3267 16.0658 45.2827 15.1281C45.2681 14.955 45.2608 14.6232 45.2608 14.1328C45.2608 13.7866 45.2681 13.5413 45.2827 13.3971C45.4146 11.9257 45.9199 10.7284 46.7988 9.80512C47.6777 8.88189 48.8861 8.42027 50.4241 8.42027C51.4348 8.42027 52.3064 8.61502 53.0388 9.00451C53.7858 9.37957 54.3498 9.8484 54.7306 10.411C55.1261 10.9592 55.3385 11.4785 55.3678 11.9689C55.3824 12.1276 55.3238 12.2647 55.192 12.3801C55.0748 12.4955 54.9357 12.5532 54.7745 12.5532H54.1154C53.9396 12.5532 53.8005 12.5099 53.6979 12.4233C53.5954 12.3368 53.4929 12.1853 53.3903 11.9689C52.8776 10.8438 51.8889 10.2812 50.4241 10.2812C49.6185 10.2812 48.9154 10.548 48.3148 11.0818C47.7143 11.6155 47.3701 12.4233 47.2822 13.5053C47.2675 13.6639 47.2602 13.9236 47.2602 14.2842C47.2602 14.616 47.2675 14.8613 47.2822 15.0199C47.3847 16.1018 47.7289 16.9097 48.3148 17.4434C48.9154 17.9772 49.6185 18.244 50.4241 18.244Z",
          fill: i ? "#FBFDFF" : "#020617",
        }),
        V.jsx("path", {
          d: "M68.1485 19.3043C68.1485 19.463 68.0899 19.6 67.9727 19.7154C67.8555 19.8308 67.7164 19.8885 67.5552 19.8885H66.7423C66.5812 19.8885 66.442 19.8308 66.3248 19.7154C66.2076 19.6 66.149 19.463 66.149 19.3043V13.5918C66.149 12.5099 65.8781 11.6876 65.3361 11.1251C64.7941 10.5625 64.0398 10.2812 63.073 10.2812C62.1209 10.2812 61.3665 10.5625 60.8099 11.1251C60.2679 11.6876 59.997 12.5099 59.997 13.5918V19.3043C59.997 19.463 59.9384 19.6 59.8212 19.7154C59.704 19.8308 59.5648 19.8885 59.4037 19.8885H58.5908C58.4296 19.8885 58.2905 19.8308 58.1733 19.7154C58.0561 19.6 57.9975 19.463 57.9975 19.3043V5.10962C57.9975 4.95094 58.0561 4.8139 58.1733 4.6985C58.2905 4.58309 58.4296 4.52539 58.5908 4.52539H59.4037C59.5648 4.52539 59.704 4.58309 59.8212 4.6985C59.9384 4.8139 59.997 4.95094 59.997 5.10962V9.89167C60.3192 9.47333 60.7586 9.12712 61.3153 8.85304C61.8865 8.56453 62.5823 8.42027 63.4026 8.42027C64.3254 8.42027 65.1457 8.61502 65.8634 9.00451C66.5812 9.39399 67.1378 9.95659 67.5333 10.6923C67.9434 11.4136 68.1485 12.2719 68.1485 13.2672V19.3043Z",
          fill: i ? "#FBFDFF" : "#020617",
        }),
        V.jsx("path", {
          d: "M75.8478 8.42027C77.4152 8.42027 78.6529 8.91074 79.5611 9.89167C80.4692 10.8726 80.9233 12.207 80.9233 13.8947V14.479C80.9233 14.6377 80.8647 14.7747 80.7476 14.8901C80.6304 15.0055 80.4912 15.0632 80.3301 15.0632H72.7718V15.193C72.8011 16.1451 73.0941 16.8952 73.6507 17.4434C74.2219 17.9772 74.9543 18.244 75.8478 18.244C76.5802 18.244 77.1442 18.1503 77.5397 17.9627C77.9498 17.7752 78.316 17.5083 78.6383 17.1621C78.7554 17.0467 78.858 16.9674 78.9459 16.9241C79.0484 16.8808 79.1802 16.8592 79.3414 16.8592H80.0005C80.1763 16.8592 80.3228 16.9169 80.4399 17.0323C80.5571 17.1477 80.6084 17.2847 80.5937 17.4434C80.5352 17.8329 80.3154 18.2368 79.9346 18.6552C79.5684 19.0591 79.0337 19.4053 78.3307 19.6938C77.6422 19.9679 76.8146 20.1049 75.8478 20.1049C74.9104 20.1049 74.0755 19.8957 73.3431 19.4774C72.6107 19.0446 72.0248 18.4532 71.5853 17.7031C71.1605 16.9529 70.9042 16.1091 70.8163 15.1714C70.787 14.7386 70.7724 14.4069 70.7724 14.176C70.7724 13.9452 70.787 13.6134 70.8163 13.1807C70.9042 12.2863 71.1605 11.4785 71.5853 10.7572C72.0248 10.0359 72.6034 9.46612 73.3211 9.04778C74.0535 8.62944 74.8957 8.42027 75.8478 8.42027ZM78.9459 13.2456V13.1807C78.9459 12.3007 78.6602 11.6011 78.089 11.0818C77.5324 10.548 76.7853 10.2812 75.8478 10.2812C74.9983 10.2812 74.2732 10.548 73.6726 11.0818C73.0867 11.6155 72.7865 12.3152 72.7718 13.1807V13.2456H78.9459Z",
          fill: i ? "#FBFDFF" : "#020617",
        }),
        V.jsx("path", {
          d: "M85.5734 9.89167C85.925 9.44448 86.3205 9.09106 86.7599 8.8314C87.1993 8.55731 87.7853 8.42027 88.5177 8.42027C90.2314 8.42027 91.4326 9.04778 92.121 10.3028C92.5458 9.69693 93.0292 9.23531 93.5712 8.91795C94.1131 8.58617 94.8235 8.42027 95.7024 8.42027C97.1379 8.42027 98.1999 8.84582 98.8883 9.69693C99.5914 10.548 99.943 11.7526 99.943 13.3105V19.3043C99.943 19.463 99.8844 19.6 99.7672 19.7154C99.65 19.8308 99.5108 19.8885 99.3497 19.8885H98.5368C98.3756 19.8885 98.2365 19.8308 98.1193 19.7154C98.0021 19.6 97.9435 19.463 97.9435 19.3043V13.5269C97.9435 11.3631 97.0793 10.2812 95.3509 10.2812C94.5599 10.2812 93.93 10.5408 93.4613 11.0601C92.9926 11.5795 92.7582 12.3512 92.7582 13.3754V19.3043C92.7582 19.463 92.6996 19.6 92.5824 19.7154C92.4652 19.8308 92.3261 19.8885 92.165 19.8885H91.352C91.1909 19.8885 91.0517 19.8308 90.9345 19.7154C90.8174 19.6 90.7588 19.463 90.7588 19.3043V13.5269C90.7588 11.3631 89.8945 10.2812 88.1661 10.2812C87.3751 10.2812 86.7453 10.5408 86.2765 11.0601C85.8078 11.5795 85.5734 12.3512 85.5734 13.3754V19.3043C85.5734 19.463 85.5148 19.6 85.3977 19.7154C85.2805 19.8308 85.1413 19.8885 84.9802 19.8885H84.1672C84.0061 19.8885 83.867 19.8308 83.7498 19.7154C83.6326 19.6 83.574 19.463 83.574 19.3043V9.22089C83.574 9.06221 83.6326 8.92516 83.7498 8.80976C83.867 8.69436 84.0061 8.63665 84.1672 8.63665H84.9802C85.1413 8.63665 85.2805 8.69436 85.3977 8.80976C85.5148 8.92516 85.5734 9.06221 85.5734 9.22089V9.89167Z",
          fill: i ? "#FBFDFF" : "#020617",
        }),
        V.jsx("path", {
          d: "M106.097 23.4805C105.965 23.8267 105.752 23.9998 105.459 23.9998H104.559C104.412 23.9998 104.288 23.9493 104.185 23.8483C104.083 23.7474 104.031 23.6247 104.031 23.4805C104.031 23.4228 104.039 23.3723 104.053 23.329L106.163 18.8066L101.812 9.30744C101.797 9.26416 101.79 9.21368 101.79 9.15597C101.79 9.01172 101.841 8.8891 101.944 8.78812C102.046 8.68714 102.171 8.63665 102.317 8.63665H103.218C103.511 8.63665 103.724 8.80976 103.855 9.15597L107.239 16.513L110.667 9.15597C110.799 8.80976 111.011 8.63665 111.304 8.63665H112.205C112.351 8.63665 112.476 8.68714 112.578 8.78812C112.681 8.8891 112.732 9.01172 112.732 9.15597C112.732 9.21368 112.725 9.26416 112.71 9.30744L106.097 23.4805Z",
          fill: i ? "#FBFDFF" : "#020617",
        }),
        V.jsx("path", {
          d: "M19.3958 12.7306L12.0181 0.205008C11.9824 0.143159 11.9306 0.0916386 11.8681 0.0556463C11.8056 0.019654 11.7345 0.000462384 11.662 8.25127e-06C11.5895 -0.000445881 11.5181 0.0178533 11.4551 0.0530595C11.3922 0.0882657 11.3398 0.139134 11.3033 0.200531L9.09371 3.95372C9.02135 4.07658 8.98326 4.21595 8.98326 4.35781C8.98326 4.49967 9.02135 4.63904 9.09371 4.7619L13.9044 12.9332C13.9769 13.0562 14.0811 13.1583 14.2066 13.2292C14.3321 13.3001 14.4744 13.3374 14.6193 13.3373H19.0384C19.1107 13.3371 19.1817 13.3182 19.2443 13.2827C19.3069 13.2471 19.3589 13.1961 19.3951 13.1347C19.4313 13.0733 19.4504 13.0036 19.4505 12.9327C19.4506 12.8618 19.4317 12.7921 19.3958 12.7306Z",
          fill: i ? "#FBFDFF" : "#020617",
        }),
        V.jsx("path", {
          d: "M0.0568897 19.2769L7.43458 6.75134C7.47078 6.68998 7.52283 6.63904 7.58546 6.60362C7.64809 6.5682 7.71911 6.54956 7.79142 6.54956C7.86373 6.54956 7.93478 6.5682 7.99741 6.60362C8.06004 6.63904 8.11206 6.68998 8.14826 6.75134L10.359 10.5012C10.4313 10.6242 10.4694 10.7638 10.4694 10.9058C10.4694 11.0479 10.4313 11.1874 10.359 11.3105L5.54819 19.4818C5.47604 19.6047 5.37206 19.7068 5.24675 19.7778C5.12144 19.8487 4.97923 19.886 4.83452 19.8858H0.414299C0.341483 19.8862 0.269874 19.8676 0.206748 19.8321C0.143622 19.7965 0.0912388 19.7451 0.0549242 19.6833C0.0186097 19.6214 -0.000341874 19.5512 4.66863e-06 19.4798C0.000351211 19.4085 0.019976 19.3384 0.0568897 19.2769Z",
          fill: i ? "#FBFDFF" : "#020617",
        }),
        V.jsx("path", {
          d: "M8.1472 19.8832H22.9026C22.975 19.8831 23.0461 19.8643 23.1087 19.8288C23.1714 19.7933 23.2233 19.7422 23.2595 19.6807C23.2956 19.6192 23.3145 19.5494 23.3144 19.4785C23.3143 19.4075 23.2952 19.3379 23.2589 19.2765L21.0516 15.5244C20.9792 15.4014 20.875 15.2993 20.7495 15.2284C20.624 15.1574 20.4816 15.1202 20.3368 15.1203H10.7153C10.5704 15.1202 10.4281 15.1574 10.3026 15.2284C10.1771 15.2993 10.0729 15.4014 10.0005 15.5244L7.79095 19.2765C7.75466 19.3379 7.7355 19.4075 7.73539 19.4785C7.73529 19.5494 7.75423 19.6192 7.79034 19.6807C7.82645 19.7422 7.87846 19.7933 7.9411 19.8288C8.00375 19.8643 8.07482 19.8831 8.1472 19.8832Z",
          fill: i ? "#FBFDFF" : "#020617",
        }),
      ],
    }),
  Hp = ({ isDark: i = !1 }) =>
    V.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: [
        V.jsx("path", {
          d: "M14.8223 13.4397V2.00037L12.3848 2V3.07335H13.4866V12.3663H12.3848V13.4397H14.8223Z",
          fill: i ? "#FBFDFF" : "#475569",
        }),
        V.jsx("path", {
          d: "M2.00227 12.3667V3.07333L3.09827 3.07369V2.00035H0.666626V13.44H3.09827V12.3667H2.00227Z",
          fill: i ? "#FBFDFF" : "#475569",
        }),
        V.jsx("path", {
          d: "M7.79621 4.21892L10.4846 8.74039C10.4979 8.76271 10.5047 8.78796 10.5047 8.81344C10.5045 8.83892 10.4975 8.86417 10.4844 8.88626C10.4711 8.90836 10.4522 8.92685 10.4294 8.9397C10.4066 8.95255 10.3807 8.95931 10.3543 8.95931H8.74406C8.6913 8.95931 8.63944 8.94579 8.59367 8.92031C8.54813 8.89461 8.51003 8.85786 8.48365 8.81344L6.73067 5.86391C6.70429 5.81949 6.69031 5.76922 6.69031 5.71804C6.69031 5.66685 6.70429 5.61658 6.73067 5.57216L7.5358 4.21734C7.5491 4.19525 7.56804 4.17676 7.59104 4.16413C7.61403 4.15151 7.63996 4.14497 7.66634 4.14497C7.69272 4.14497 7.71865 4.15196 7.74165 4.16504C7.76442 4.17789 7.78313 4.1966 7.79621 4.21892Z",
          fill: i ? "#FBFDFF" : "#475569",
        }),
        V.jsx("path", {
          d: "M6.1246 6.58215L3.43617 11.1036C3.42264 11.1259 3.41565 11.1512 3.41565 11.1769C3.41565 11.2028 3.42241 11.2281 3.43572 11.2504C3.44879 11.2727 3.46796 11.2912 3.49095 11.3041C3.51395 11.3169 3.53988 11.3235 3.56648 11.3235H5.17742C5.23018 11.3235 5.28181 11.3101 5.32758 11.2844C5.37313 11.2587 5.41101 11.222 5.43738 11.1776L7.19037 8.22804C7.21675 8.18363 7.2305 8.13335 7.2305 8.08194C7.2305 8.03054 7.21675 7.98026 7.19037 7.93584L6.38478 6.58215C6.37148 6.56006 6.35254 6.54179 6.32977 6.52894C6.307 6.51609 6.28107 6.50933 6.25469 6.50933C6.22831 6.50933 6.20238 6.51609 6.17961 6.52894C6.15684 6.54157 6.1379 6.56006 6.1246 6.58215Z",
          fill: i ? "#FBFDFF" : "#475569",
        }),
        V.jsx("path", {
          d: "M6.386 11.3223H11.7629C11.7892 11.3223 11.8152 11.3155 11.8379 11.3027C11.8607 11.2898 11.8797 11.2713 11.893 11.2492C11.906 11.2269 11.913 11.2019 11.913 11.1762C11.913 11.1505 11.906 11.1255 11.8927 11.1031L11.0885 9.74877C11.0621 9.70435 11.0242 9.6676 10.9785 9.6419C10.9327 9.6162 10.8808 9.6029 10.8281 9.6029H7.32167C7.26892 9.6029 7.21706 9.6162 7.17129 9.6419C7.12552 9.6676 7.08764 9.70435 7.06126 9.74877L6.25613 11.1031C6.24283 11.1252 6.23584 11.1505 6.23584 11.1762C6.23584 11.2019 6.2426 11.2269 6.25591 11.2492C6.26898 11.2713 6.28792 11.2898 6.31092 11.3027C6.33369 11.3155 6.35962 11.3223 6.386 11.3223Z",
          fill: i ? "#FBFDFF" : "#475569",
        }),
      ],
    }),
  Bp = ({ isDark: i = !1 }) =>
    V.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: V.jsx("path", {
        d: "M12.6556 3.56509C11.7258 3.13937 10.7441 2.83735 9.73575 2.66675C9.59776 2.91342 9.47291 3.16721 9.36172 3.42705C8.28762 3.2652 7.19533 3.2652 6.12123 3.42705C6.00998 3.16723 5.88513 2.91345 5.7472 2.66675C4.73819 2.83879 3.75589 3.14153 2.82508 3.56732C0.977194 6.3013 0.47626 8.96738 0.726727 11.5956C1.8089 12.3952 3.02016 13.0033 4.30785 13.3934C4.5978 13.0034 4.85437 12.5897 5.07484 12.1567C4.65609 12.0003 4.25193 11.8073 3.86703 11.58C3.96833 11.5066 4.0674 11.4309 4.16314 11.3574C5.28311 11.8841 6.50551 12.1572 7.74314 12.1572C8.98079 12.1572 10.2032 11.8841 11.3232 11.3574C11.42 11.4364 11.5191 11.5121 11.6193 11.58C11.2336 11.8077 10.8287 12.001 10.4092 12.1578C10.6294 12.5906 10.886 13.004 11.1762 13.3934C12.465 13.0048 13.6772 12.397 14.7596 11.5967C15.0534 8.54883 14.2575 5.90723 12.6556 3.56509ZM5.39209 9.97927C4.69413 9.97927 4.1175 9.34587 4.1175 8.56664C4.1175 7.78741 4.67409 7.14844 5.38987 7.14844C6.10565 7.14844 6.67782 7.78741 6.66558 8.56664C6.65334 9.34587 6.10342 9.97927 5.39209 9.97927ZM10.0942 9.97927C9.39511 9.97927 8.82071 9.34587 8.82071 8.56664C8.82071 7.78741 9.3773 7.14844 10.0942 7.14844C10.8111 7.14844 11.3788 7.78741 11.3666 8.56664C11.3543 9.34587 10.8055 9.97927 10.0942 9.97927Z",
        fill: i ? "#FBFDFF" : "#475569",
      }),
    }),
  Vp = ({ isDark: i = !1 }) =>
    V.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: V.jsx("path", {
        d: "M2.79998 4.39995L7.54461 7.6847C7.81856 7.87436 8.18139 7.87436 8.45534 7.6847L13.2 4.39995M3.19998 12.8H12.8C13.6836 12.8 14.4 12.0836 14.4 11.2V4.79995C14.4 3.9163 13.6836 3.19995 12.8 3.19995H3.19998C2.31632 3.19995 1.59998 3.9163 1.59998 4.79995V11.2C1.59998 12.0836 2.31632 12.8 3.19998 12.8Z",
        stroke: i ? "#FBFDFF" : "#475569",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    }),
  $p = ({ isDark: i = !1 }) =>
    V.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      children: V.jsx("path", {
        d: "M4.875 3.75012C3 3.75012 1.5 5.25012 1.5 7.12512V12.7501C1.5 13.1479 1.65804 13.5295 1.93934 13.8108C2.22064 14.0921 2.60218 14.2501 3 14.2501H15C15.3978 14.2501 15.7794 14.0921 16.0607 13.8108C16.342 13.5295 16.5 13.1479 16.5 12.7501V6.75012C16.5 5.10012 15.15 3.75012 13.5 3.75012H4.875ZM4.875 3.75012C6.75 3.75012 8.25 5.25012 8.25 7.12512V12.7501C8.25 13.1479 8.09196 13.5295 7.81066 13.8108C7.52936 14.0921 7.14782 14.2501 6.75 14.2501M11.25 6.75012H13.5V8.25012M4.5 7.50012H5.25",
        stroke: i ? "#FBFDFF" : "#475569",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    }),
  Up = ({ isDark: i = !1 }) =>
    V.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      children: V.jsx("path", {
        d: "M9 6.00012V3.00012H6M1.5 10.5001H3M15 10.5001H16.5M11.25 9.75012V11.2501M6.75 9.75012V11.2501M4.5 6.00012H13.5C14.3284 6.00012 15 6.67169 15 7.50012V13.5001C15 14.3285 14.3284 15.0001 13.5 15.0001H4.5C3.67157 15.0001 3 14.3285 3 13.5001V7.50012C3 6.67169 3.67157 6.00012 4.5 6.00012Z",
        stroke: i ? "#FBFDFF" : "#475569",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    }),
  Wp = ({ isDark: i = !1 }) =>
    V.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: V.jsx("path", {
        d: "M1.59998 7.73277H4.79998L6.43233 2.3999L9.95051 13.5999L11.1922 7.73277H14.4",
        stroke: i ? "#FBFDFF" : "#475569",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    }),
  Qp = ({ isDark: i = !1 }) =>
    V.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: V.jsx("path", {
        d: "M9.69706 9.69712C8.7598 10.6344 7.2402 10.6344 6.30294 9.69712M9.69706 9.69712C10.6343 8.75986 10.6343 7.24026 9.69706 6.30301M9.69706 9.69712L12.2426 12.2427M6.30294 9.69712C5.36569 8.75986 5.36569 7.24026 6.30294 6.30301M6.30294 9.69712L3.75736 12.2427M6.30294 6.30301C7.2402 5.36575 8.7598 5.36575 9.69706 6.30301M6.30294 6.30301L3.75736 3.75742M9.69706 6.30301L12.2426 3.75742M12.5255 12.5255C10.0261 15.0249 5.97387 15.0249 3.47452 12.5255C0.975162 10.0262 0.975162 5.97394 3.47452 3.47458C5.97387 0.975224 10.0261 0.975224 12.5255 3.47458C15.0248 5.97394 15.0248 10.0262 12.5255 12.5255Z",
        stroke: i ? "#FBFDFF" : "#475569",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    }),
  Kp = ({ isDark: i = !1 }) =>
    V.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: V.jsx("path", {
        d: "M9.15275 6.92804L14.2525 1H13.044L8.61591 6.14724L5.07919 1H1L6.34821 8.78354L1 15H2.20855L6.88474 9.56434L10.6198 15H14.699L9.15245 6.92804H9.15275ZM7.49748 8.85211L6.95559 8.07705L2.644 1.90978H4.50026L7.97976 6.88696L8.52165 7.66202L13.0446 14.1316H11.1883L7.49748 8.85241V8.85211Z",
        fill: i ? "#FBFDFF" : "#475569",
      }),
    }),
  Yp = [
    {
      title: "Support & Platform",
      links: [
        { href: "#", text: "Get help on our support hub", Icon: Qp },
        { href: "#", text: "Questions? Contact sales", Icon: Vp },
        {
          href: "https://status.alchemy.com",
          text: "Checkout our platform status",
          Icon: Wp,
        },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "#", text: "Using AI? View our llms.txt", Icon: Up },
        { href: "#", text: "Learn more on Alchemy University", Icon: Hp },
      ],
    },
    {
      title: "Stay updated",
      links: [
        { href: "#", text: "Subscribe to our Newsletter", Icon: $p },
        { href: "#", text: "Follow us on X", Icon: Kp },
        {
          href: "https://discord.gg/9GnAcXQYZ6",
          text: "Join our discord",
          Icon: Bp,
        },
      ],
    },
  ],
  Zp = Et.div`
  padding: 48px 24px;
  font-family: 'Inter', sans-serif;
  color: ${({ theme: i }) => (i.mode === "dark" ? "#FBFDFF" : "#020617")};
`,
  Gp = Et.div`
  max-width: 1010px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,
  Xp = Et.div`
  display: flex;
  gap: 32px;
  padding-bottom: 48px;
  border-bottom: 1px solid
    ${({ theme: i }) => (i.mode === "dark" ? "#383838" : "#E2E8F0")};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`,
  Jp = Et.div`
  display: flex;
  column-gap: 36px;
  flex: 1;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    column-gap: 64px;
  }
`,
  qp = Et.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 14px;
`,
  bp = Et.h3`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: i }) => (i.mode === "dark" ? "#FFFFFF" : "#0F172A")};
  margin: 0;
`,
  e0 = Et.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: inherit;
  text-decoration: none;
`,
  t0 = Et.div`
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`,
  n0 = Et.div`
  display: flex;
  gap: 24px;
  align-items: center;
  font-size: 14px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`,
  r0 = Et.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: #5167ff;
  }
`,
  l0 = () => {
    const [i, a] = tr.useState(
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
    const s = { mode: i ? "dark" : "light" };
    return V.jsx(jp, {
      theme: s,
      children: V.jsx(Zp, {
        children: V.jsxs(Gp, {
          children: [
            V.jsx(Xp, {
              children: V.jsx(Jp, {
                children: Yp.map(({ title: d, links: y }) =>
                  V.jsxs(
                    qp,
                    {
                      children: [
                        V.jsx(bp, { children: d }),
                        y.map(({ href: w, text: _, Icon: T }) =>
                          V.jsxs(
                            e0,
                            {
                              href: w,
                              children: [
                                V.jsx(T, { isDark: i }),
                                V.jsx("span", { children: _ }),
                              ],
                            },
                            _,
                          ),
                        ),
                      ],
                    },
                    d,
                  ),
                ),
              }),
            }),
            V.jsxs(t0, {
              children: [
                V.jsx(Ap, { isDark: i }),
                V.jsxs(n0, {
                  children: [
                    V.jsx(r0, {
                      href: "https://legal.alchemy.com/#contract-kduihkaqm",
                      children: "Terms & Conditions",
                    }),
                    V.jsxs("span", {
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
  rf = "fern-footer",
  lf = async () => {
    if (!document.getElementById("alchemy-footer")) {
      const a = document.createElement("div");
      a.setAttribute("id", "alchemy-footer"),
        a.setAttribute("data-react-component", "true");
      let s = document.getElementById(rf);
      s ||
        ((s = document.createElement("div")),
        s.setAttribute("id", rf),
        document.body.appendChild(s)),
        s.insertBefore(a, s.firstChild),
        Md.createRoot(a).render(
          V.jsx(an.StrictMode, { children: V.jsx(l0, {}) }),
        ),
        s && (s.style.display = "block");
    }
  };
window.addEventListener("load", async () => {
  window.location.pathname === "/docs" && (await lf()),
    new MutationObserver(async (i) => {
      var s;
      window.location.pathname === "/docs" &&
        i.some(
          (d) =>
            d.type === "childList" &&
            !document.getElementById("alchemy-footer"),
        ) &&
        (await lf()),
        window.location.pathname !== "/docs" &&
          document.getElementById("alchemy-footer") &&
          ((s = document.getElementById("alchemy-footer")) == null ||
            s.remove());
    }).observe(document.body, { childList: !0, subtree: !0 });
});
