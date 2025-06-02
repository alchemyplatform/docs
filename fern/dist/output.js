(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function r2(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ws = { exports: {} },
  Yl = {},
  Ss = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nr = Symbol.for("react.element"),
  l2 = Symbol.for("react.portal"),
  i2 = Symbol.for("react.fragment"),
  o2 = Symbol.for("react.strict_mode"),
  u2 = Symbol.for("react.profiler"),
  s2 = Symbol.for("react.provider"),
  a2 = Symbol.for("react.context"),
  c2 = Symbol.for("react.forward_ref"),
  f2 = Symbol.for("react.suspense"),
  d2 = Symbol.for("react.memo"),
  p2 = Symbol.for("react.lazy"),
  Yo = Symbol.iterator;
function h2(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Yo && e[Yo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var _s = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ks = Object.assign,
  Es = {};
function Rn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Es),
    (this.updater = n || _s);
}
Rn.prototype.isReactComponent = {};
Rn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Rn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function js() {}
js.prototype = Rn.prototype;
function Yi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Es),
    (this.updater = n || _s);
}
var Xi = (Yi.prototype = new js());
Xi.constructor = Yi;
ks(Xi, Rn.prototype);
Xi.isPureReactComponent = !0;
var Xo = Array.isArray,
  Ms = Object.prototype.hasOwnProperty,
  Ji = { current: null },
  Ps = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vs(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Ms.call(t, r) && !Ps.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Nr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Ji.current,
  };
}
function m2(e, t) {
  return {
    $$typeof: Nr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function qi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Nr;
}
function y2(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Jo = /\/+/g;
function C1(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? y2("" + e.key)
    : t.toString(36);
}
function rl(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Nr:
          case l2:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + C1(o, 0) : r),
      Xo(l)
        ? ((n = ""),
          e != null && (n = e.replace(Jo, "$&/") + "/"),
          rl(l, t, n, "", function (f) {
            return f;
          }))
        : l != null &&
          (qi(l) &&
            (l = m2(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Jo, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Xo(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + C1(i, u);
      o += rl(i, t, n, s, l);
    }
  else if (((s = h2(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + C1(i, u++)), (o += rl(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return o;
}
function Tr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    rl(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function g2(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var pe = { current: null },
  ll = { transition: null },
  v2 = {
    ReactCurrentDispatcher: pe,
    ReactCurrentBatchConfig: ll,
    ReactCurrentOwner: Ji,
  };
function Hs() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = {
  map: Tr,
  forEach: function (e, t, n) {
    Tr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Tr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Tr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!qi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
F.Component = Rn;
F.Fragment = i2;
F.Profiler = u2;
F.PureComponent = Yi;
F.StrictMode = o2;
F.Suspense = f2;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = v2;
F.act = Hs;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = ks({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Ji.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Ms.call(t, s) &&
        !Ps.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: Nr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: a2,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: s2, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = Vs;
F.createFactory = function (e) {
  var t = Vs.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: c2, render: e };
};
F.isValidElement = qi;
F.lazy = function (e) {
  return { $$typeof: p2, _payload: { _status: -1, _result: e }, _init: g2 };
};
F.memo = function (e, t) {
  return { $$typeof: d2, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = ll.transition;
  ll.transition = {};
  try {
    e();
  } finally {
    ll.transition = t;
  }
};
F.unstable_act = Hs;
F.useCallback = function (e, t) {
  return pe.current.useCallback(e, t);
};
F.useContext = function (e) {
  return pe.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return pe.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return pe.current.useEffect(e, t);
};
F.useId = function () {
  return pe.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return pe.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return pe.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return pe.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return pe.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return pe.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return pe.current.useRef(e);
};
F.useState = function (e) {
  return pe.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return pe.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return pe.current.useTransition();
};
F.version = "18.3.1";
Ss.exports = F;
var Tn = Ss.exports;
const Je = r2(Tn);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var C2 = Tn,
  x2 = Symbol.for("react.element"),
  w2 = Symbol.for("react.fragment"),
  S2 = Object.prototype.hasOwnProperty,
  _2 = C2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  k2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ns(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) S2.call(t, r) && !k2.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: x2,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: _2.current,
  };
}
Yl.Fragment = w2;
Yl.jsx = Ns;
Yl.jsxs = Ns;
ws.exports = Yl;
var a = ws.exports,
  Ls = { exports: {} },
  Me = {},
  Fs = { exports: {} },
  zs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, P) {
    var V = E.length;
    E.push(P);
    e: for (; 0 < V; ) {
      var R = (V - 1) >>> 1,
        T = E[R];
      if (0 < l(T, P)) (E[R] = P), (E[V] = T), (V = R);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var P = E[0],
      V = E.pop();
    if (V !== P) {
      E[0] = V;
      e: for (var R = 0, T = E.length, Rt = T >>> 1; R < Rt; ) {
        var Ie = 2 * (R + 1) - 1,
          ct = E[Ie],
          we = Ie + 1,
          qe = E[we];
        if (0 > l(ct, V))
          we < T && 0 > l(qe, ct)
            ? ((E[R] = qe), (E[we] = V), (R = we))
            : ((E[R] = ct), (E[Ie] = V), (R = Ie));
        else if (we < T && 0 > l(qe, V)) (E[R] = qe), (E[we] = V), (R = we);
        else break e;
      }
    }
    return P;
  }
  function l(E, P) {
    var V = E.sortIndex - P.sortIndex;
    return V !== 0 ? V : E.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    f = [],
    y = 1,
    m = null,
    h = 3,
    v = !1,
    C = !1,
    S = !1,
    N = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(E) {
    for (var P = n(f); P !== null; ) {
      if (P.callback === null) r(f);
      else if (P.startTime <= E)
        r(f), (P.sortIndex = P.expirationTime), t(s, P);
      else break;
      P = n(f);
    }
  }
  function g(E) {
    if (((S = !1), p(E), !C))
      if (n(s) !== null) (C = !0), Zn(k);
      else {
        var P = n(f);
        P !== null && It(g, P.startTime - E);
      }
  }
  function k(E, P) {
    (C = !1), S && ((S = !1), d(M), (M = -1)), (v = !0);
    var V = h;
    try {
      for (
        p(P), m = n(s);
        m !== null && (!(m.expirationTime > P) || (E && !xe()));

      ) {
        var R = m.callback;
        if (typeof R == "function") {
          (m.callback = null), (h = m.priorityLevel);
          var T = R(m.expirationTime <= P);
          (P = e.unstable_now()),
            typeof T == "function" ? (m.callback = T) : m === n(s) && r(s),
            p(P);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var Rt = !0;
      else {
        var Ie = n(f);
        Ie !== null && It(g, Ie.startTime - P), (Rt = !1);
      }
      return Rt;
    } finally {
      (m = null), (h = V), (v = !1);
    }
  }
  var _ = !1,
    x = null,
    M = -1,
    $ = 5,
    L = -1;
  function xe() {
    return !(e.unstable_now() - L < $);
  }
  function zt() {
    if (x !== null) {
      var E = e.unstable_now();
      L = E;
      var P = !0;
      try {
        P = x(!0, E);
      } finally {
        P ? Ot() : ((_ = !1), (x = null));
      }
    } else _ = !1;
  }
  var Ot;
  if (typeof c == "function")
    Ot = function () {
      c(zt);
    };
  else if (typeof MessageChannel < "u") {
    var Ir = new MessageChannel(),
      g1 = Ir.port2;
    (Ir.port1.onmessage = zt),
      (Ot = function () {
        g1.postMessage(null);
      });
  } else
    Ot = function () {
      N(zt, 0);
    };
  function Zn(E) {
    (x = E), _ || ((_ = !0), Ot());
  }
  function It(E, P) {
    M = N(function () {
      E(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      C || v || ((C = !0), Zn(k));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : ($ = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (E) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = h;
      }
      var V = h;
      h = P;
      try {
        return E();
      } finally {
        h = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, P) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var V = h;
      h = E;
      try {
        return P();
      } finally {
        h = V;
      }
    }),
    (e.unstable_scheduleCallback = function (E, P, V) {
      var R = e.unstable_now();
      switch (
        (typeof V == "object" && V !== null
          ? ((V = V.delay), (V = typeof V == "number" && 0 < V ? R + V : R))
          : (V = R),
        E)
      ) {
        case 1:
          var T = -1;
          break;
        case 2:
          T = 250;
          break;
        case 5:
          T = 1073741823;
          break;
        case 4:
          T = 1e4;
          break;
        default:
          T = 5e3;
      }
      return (
        (T = V + T),
        (E = {
          id: y++,
          callback: P,
          priorityLevel: E,
          startTime: V,
          expirationTime: T,
          sortIndex: -1,
        }),
        V > R
          ? ((E.sortIndex = V),
            t(f, E),
            n(s) === null &&
              E === n(f) &&
              (S ? (d(M), (M = -1)) : (S = !0), It(g, V - R)))
          : ((E.sortIndex = T), t(s, E), C || v || ((C = !0), Zn(k))),
        E
      );
    }),
    (e.unstable_shouldYield = xe),
    (e.unstable_wrapCallback = function (E) {
      var P = h;
      return function () {
        var V = h;
        h = P;
        try {
          return E.apply(this, arguments);
        } finally {
          h = V;
        }
      };
    });
})(zs);
Fs.exports = zs;
var E2 = Fs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var j2 = Tn,
  je = E2;
function w(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
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
var Os = new Set(),
  pr = {};
function nn(e, t) {
  jn(e, t), jn(e + "Capture", t);
}
function jn(e, t) {
  for (pr[e] = t, e = 0; e < t.length; e++) Os.add(t[e]);
}
var it = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  X1 = Object.prototype.hasOwnProperty,
  M2 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  qo = {},
  bo = {};
function P2(e) {
  return X1.call(bo, e)
    ? !0
    : X1.call(qo, e)
      ? !1
      : M2.test(e)
        ? (bo[e] = !0)
        : ((qo[e] = !0), !1);
}
function V2(e, t, n, r) {
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
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function H2(e, t, n, r) {
  if (t === null || typeof t > "u" || V2(e, t, n, r)) return !0;
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
function he(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new he(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ie[t] = new he(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ie[e] = new he(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ie[e] = new he(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new he(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ie[e] = new he(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ie[e] = new he(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ie[e] = new he(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ie[e] = new he(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var bi = /[\-:]([a-z])/g;
function eo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(bi, eo);
    ie[t] = new he(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(bi, eo);
    ie[t] = new he(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(bi, eo);
  ie[t] = new he(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ie[e] = new he(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new he(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ie[e] = new he(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function to(e, t, n, r) {
  var l = ie.hasOwnProperty(t) ? ie[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (H2(t, n, l, r) && (n = null),
    r || l === null
      ? P2(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var at = j2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  $r = Symbol.for("react.element"),
  un = Symbol.for("react.portal"),
  sn = Symbol.for("react.fragment"),
  no = Symbol.for("react.strict_mode"),
  J1 = Symbol.for("react.profiler"),
  Is = Symbol.for("react.provider"),
  Rs = Symbol.for("react.context"),
  ro = Symbol.for("react.forward_ref"),
  q1 = Symbol.for("react.suspense"),
  b1 = Symbol.for("react.suspense_list"),
  lo = Symbol.for("react.memo"),
  ht = Symbol.for("react.lazy"),
  Ts = Symbol.for("react.offscreen"),
  eu = Symbol.iterator;
function Bn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (eu && e[eu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  x1;
function qn(e) {
  if (x1 === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      x1 = (t && t[1]) || "";
    }
  return (
    `
` +
    x1 +
    e
  );
}
var w1 = !1;
function S1(e, t) {
  if (!e || w1) return "";
  w1 = !0;
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
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          r = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (
        var l = f.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (w1 = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? qn(e) : "";
}
function N2(e) {
  switch (e.tag) {
    case 5:
      return qn(e.type);
    case 16:
      return qn("Lazy");
    case 13:
      return qn("Suspense");
    case 19:
      return qn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = S1(e.type, !1)), e;
    case 11:
      return (e = S1(e.type.render, !1)), e;
    case 1:
      return (e = S1(e.type, !0)), e;
    default:
      return "";
  }
}
function ei(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case sn:
      return "Fragment";
    case un:
      return "Portal";
    case J1:
      return "Profiler";
    case no:
      return "StrictMode";
    case q1:
      return "Suspense";
    case b1:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Rs:
        return (e.displayName || "Context") + ".Consumer";
      case Is:
        return (e._context.displayName || "Context") + ".Provider";
      case ro:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case lo:
        return (
          (t = e.displayName || null), t !== null ? t : ei(e.type) || "Memo"
        );
      case ht:
        (t = e._payload), (e = e._init);
        try {
          return ei(e(t));
        } catch {}
    }
  return null;
}
function L2(e) {
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
      return ei(t);
    case 8:
      return t === no ? "StrictMode" : "Mode";
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
function Pt(e) {
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
function $s(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function F2(e) {
  var t = $s(e) ? "checked" : "value",
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
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Dr(e) {
  e._valueTracker || (e._valueTracker = F2(e));
}
function Ds(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = $s(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function xl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ti(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function tu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Pt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function As(e, t) {
  (t = t.checked), t != null && to(e, "checked", t, !1);
}
function ni(e, t) {
  As(e, t);
  var n = Pt(t.value),
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
    ? ri(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ri(e, t.type, Pt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function nu(e, t, n) {
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
function ri(e, t, n) {
  (t !== "number" || xl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var bn = Array.isArray;
function xn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Pt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function li(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ru(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(w(92));
      if (bn(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Pt(n) };
}
function Zs(e, t) {
  var n = Pt(t.value),
    r = Pt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function lu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Us(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ii(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Us(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Ar,
  Bs = (function (e) {
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
        Ar = Ar || document.createElement("div"),
          Ar.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ar.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function hr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var rr = {
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
  z2 = ["Webkit", "ms", "Moz", "O"];
Object.keys(rr).forEach(function (e) {
  z2.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (rr[t] = rr[e]);
  });
});
function Ws(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (rr.hasOwnProperty(e) && rr[e])
      ? ("" + t).trim()
      : t + "px";
}
function Gs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Ws(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var O2 = Q(
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
function oi(e, t) {
  if (t) {
    if (O2[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
  }
}
function ui(e, t) {
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
var si = null;
function io(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ai = null,
  wn = null,
  Sn = null;
function iu(e) {
  if ((e = zr(e))) {
    if (typeof ai != "function") throw Error(w(280));
    var t = e.stateNode;
    t && ((t = e1(t)), ai(e.stateNode, e.type, t));
  }
}
function Qs(e) {
  wn ? (Sn ? Sn.push(e) : (Sn = [e])) : (wn = e);
}
function Ks() {
  if (wn) {
    var e = wn,
      t = Sn;
    if (((Sn = wn = null), iu(e), t)) for (e = 0; e < t.length; e++) iu(t[e]);
  }
}
function Ys(e, t) {
  return e(t);
}
function Xs() {}
var _1 = !1;
function Js(e, t, n) {
  if (_1) return e(t, n);
  _1 = !0;
  try {
    return Ys(e, t, n);
  } finally {
    (_1 = !1), (wn !== null || Sn !== null) && (Xs(), Ks());
  }
}
function mr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = e1(n);
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
  if (n && typeof n != "function") throw Error(w(231, t, typeof n));
  return n;
}
var ci = !1;
if (it)
  try {
    var Wn = {};
    Object.defineProperty(Wn, "passive", {
      get: function () {
        ci = !0;
      },
    }),
      window.addEventListener("test", Wn, Wn),
      window.removeEventListener("test", Wn, Wn);
  } catch {
    ci = !1;
  }
function I2(e, t, n, r, l, i, o, u, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (y) {
    this.onError(y);
  }
}
var lr = !1,
  wl = null,
  Sl = !1,
  fi = null,
  R2 = {
    onError: function (e) {
      (lr = !0), (wl = e);
    },
  };
function T2(e, t, n, r, l, i, o, u, s) {
  (lr = !1), (wl = null), I2.apply(R2, arguments);
}
function $2(e, t, n, r, l, i, o, u, s) {
  if ((T2.apply(this, arguments), lr)) {
    if (lr) {
      var f = wl;
      (lr = !1), (wl = null);
    } else throw Error(w(198));
    Sl || ((Sl = !0), (fi = f));
  }
}
function rn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function qs(e) {
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
function ou(e) {
  if (rn(e) !== e) throw Error(w(188));
}
function D2(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = rn(e)), t === null)) throw Error(w(188));
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
        if (i === n) return ou(l), e;
        if (i === r) return ou(l), t;
        i = i.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function bs(e) {
  return (e = D2(e)), e !== null ? ea(e) : null;
}
function ea(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ea(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ta = je.unstable_scheduleCallback,
  uu = je.unstable_cancelCallback,
  A2 = je.unstable_shouldYield,
  Z2 = je.unstable_requestPaint,
  Y = je.unstable_now,
  U2 = je.unstable_getCurrentPriorityLevel,
  oo = je.unstable_ImmediatePriority,
  na = je.unstable_UserBlockingPriority,
  _l = je.unstable_NormalPriority,
  B2 = je.unstable_LowPriority,
  ra = je.unstable_IdlePriority,
  Xl = null,
  Ye = null;
function W2(e) {
  if (Ye && typeof Ye.onCommitFiberRoot == "function")
    try {
      Ye.onCommitFiberRoot(Xl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ae = Math.clz32 ? Math.clz32 : K2,
  G2 = Math.log,
  Q2 = Math.LN2;
function K2(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((G2(e) / Q2) | 0)) | 0;
}
var Zr = 64,
  Ur = 4194304;
function er(e) {
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
function kl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = er(u)) : ((i &= o), i !== 0 && (r = er(i)));
  } else (o = n & ~l), o !== 0 ? (r = er(o)) : i !== 0 && (r = er(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ae(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Y2(e, t) {
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
function X2(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Ae(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = Y2(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function di(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function la() {
  var e = Zr;
  return (Zr <<= 1), !(Zr & 4194240) && (Zr = 64), e;
}
function k1(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Lr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ae(t)),
    (e[t] = n);
}
function J2(e, t) {
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
    var l = 31 - Ae(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function uo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ae(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var I = 0;
function ia(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var oa,
  so,
  ua,
  sa,
  aa,
  pi = !1,
  Br = [],
  xt = null,
  wt = null,
  St = null,
  yr = new Map(),
  gr = new Map(),
  yt = [],
  q2 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function su(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      xt = null;
      break;
    case "dragenter":
    case "dragleave":
      wt = null;
      break;
    case "mouseover":
    case "mouseout":
      St = null;
      break;
    case "pointerover":
    case "pointerout":
      yr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      gr.delete(t.pointerId);
  }
}
function Gn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = zr(t)), t !== null && so(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function b2(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (xt = Gn(xt, e, t, n, r, l)), !0;
    case "dragenter":
      return (wt = Gn(wt, e, t, n, r, l)), !0;
    case "mouseover":
      return (St = Gn(St, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return yr.set(i, Gn(yr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), gr.set(i, Gn(gr.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function ca(e) {
  var t = At(e.target);
  if (t !== null) {
    var n = rn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = qs(n)), t !== null)) {
          (e.blockedOn = t),
            aa(e.priority, function () {
              ua(n);
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
    var n = hi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (si = r), n.target.dispatchEvent(r), (si = null);
    } else return (t = zr(n)), t !== null && so(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function au(e, t, n) {
  il(e) && n.delete(t);
}
function ec() {
  (pi = !1),
    xt !== null && il(xt) && (xt = null),
    wt !== null && il(wt) && (wt = null),
    St !== null && il(St) && (St = null),
    yr.forEach(au),
    gr.forEach(au);
}
function Qn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    pi ||
      ((pi = !0),
      je.unstable_scheduleCallback(je.unstable_NormalPriority, ec)));
}
function vr(e) {
  function t(l) {
    return Qn(l, e);
  }
  if (0 < Br.length) {
    Qn(Br[0], e);
    for (var n = 1; n < Br.length; n++) {
      var r = Br[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    xt !== null && Qn(xt, e),
      wt !== null && Qn(wt, e),
      St !== null && Qn(St, e),
      yr.forEach(t),
      gr.forEach(t),
      n = 0;
    n < yt.length;
    n++
  )
    (r = yt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < yt.length && ((n = yt[0]), n.blockedOn === null); )
    ca(n), n.blockedOn === null && yt.shift();
}
var _n = at.ReactCurrentBatchConfig,
  El = !0;
function tc(e, t, n, r) {
  var l = I,
    i = _n.transition;
  _n.transition = null;
  try {
    (I = 1), ao(e, t, n, r);
  } finally {
    (I = l), (_n.transition = i);
  }
}
function nc(e, t, n, r) {
  var l = I,
    i = _n.transition;
  _n.transition = null;
  try {
    (I = 4), ao(e, t, n, r);
  } finally {
    (I = l), (_n.transition = i);
  }
}
function ao(e, t, n, r) {
  if (El) {
    var l = hi(e, t, n, r);
    if (l === null) z1(e, t, r, jl, n), su(e, r);
    else if (b2(l, e, t, n, r)) r.stopPropagation();
    else if ((su(e, r), t & 4 && -1 < q2.indexOf(e))) {
      for (; l !== null; ) {
        var i = zr(l);
        if (
          (i !== null && oa(i),
          (i = hi(e, t, n, r)),
          i === null && z1(e, t, r, jl, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else z1(e, t, r, null, n);
  }
}
var jl = null;
function hi(e, t, n, r) {
  if (((jl = null), (e = io(r)), (e = At(e)), e !== null))
    if (((t = rn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = qs(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (jl = e), null;
}
function fa(e) {
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
      switch (U2()) {
        case oo:
          return 1;
        case na:
          return 4;
        case _l:
        case B2:
          return 16;
        case ra:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var vt = null,
  co = null,
  ol = null;
function da() {
  if (ol) return ol;
  var e,
    t = co,
    n = t.length,
    r,
    l = "value" in vt ? vt.value : vt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (ol = l.slice(e, 1 < r ? 1 - r : void 0));
}
function ul(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Wr() {
  return !0;
}
function cu() {
  return !1;
}
function Pe(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Wr
        : cu),
      (this.isPropagationStopped = cu),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Wr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Wr));
      },
      persist: function () {},
      isPersistent: Wr,
    }),
    t
  );
}
var $n = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  fo = Pe($n),
  Fr = Q({}, $n, { view: 0, detail: 0 }),
  rc = Pe(Fr),
  E1,
  j1,
  Kn,
  Jl = Q({}, Fr, {
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
    getModifierState: po,
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
        : (e !== Kn &&
            (Kn && e.type === "mousemove"
              ? ((E1 = e.screenX - Kn.screenX), (j1 = e.screenY - Kn.screenY))
              : (j1 = E1 = 0),
            (Kn = e)),
          E1);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : j1;
    },
  }),
  fu = Pe(Jl),
  lc = Q({}, Jl, { dataTransfer: 0 }),
  ic = Pe(lc),
  oc = Q({}, Fr, { relatedTarget: 0 }),
  M1 = Pe(oc),
  uc = Q({}, $n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sc = Pe(uc),
  ac = Q({}, $n, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  cc = Pe(ac),
  fc = Q({}, $n, { data: 0 }),
  du = Pe(fc),
  dc = {
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
  pc = {
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
  hc = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function mc(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = hc[e]) ? !!t[e] : !1;
}
function po() {
  return mc;
}
var yc = Q({}, Fr, {
    key: function (e) {
      if (e.key) {
        var t = dc[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ul(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? pc[e.keyCode] || "Unidentified"
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
    getModifierState: po,
    charCode: function (e) {
      return e.type === "keypress" ? ul(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ul(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  gc = Pe(yc),
  vc = Q({}, Jl, {
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
  pu = Pe(vc),
  Cc = Q({}, Fr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: po,
  }),
  xc = Pe(Cc),
  wc = Q({}, $n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sc = Pe(wc),
  _c = Q({}, Jl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  kc = Pe(_c),
  Ec = [9, 13, 27, 32],
  ho = it && "CompositionEvent" in window,
  ir = null;
it && "documentMode" in document && (ir = document.documentMode);
var jc = it && "TextEvent" in window && !ir,
  pa = it && (!ho || (ir && 8 < ir && 11 >= ir)),
  hu = " ",
  mu = !1;
function ha(e, t) {
  switch (e) {
    case "keyup":
      return Ec.indexOf(t.keyCode) !== -1;
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
function ma(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var an = !1;
function Mc(e, t) {
  switch (e) {
    case "compositionend":
      return ma(t);
    case "keypress":
      return t.which !== 32 ? null : ((mu = !0), hu);
    case "textInput":
      return (e = t.data), e === hu && mu ? null : e;
    default:
      return null;
  }
}
function Pc(e, t) {
  if (an)
    return e === "compositionend" || (!ho && ha(e, t))
      ? ((e = da()), (ol = co = vt = null), (an = !1), e)
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
      return pa && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Vc = {
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
function yu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Vc[e.type] : t === "textarea";
}
function ya(e, t, n, r) {
  Qs(r),
    (t = Ml(t, "onChange")),
    0 < t.length &&
      ((n = new fo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var or = null,
  Cr = null;
function Hc(e) {
  Ma(e, 0);
}
function ql(e) {
  var t = dn(e);
  if (Ds(t)) return e;
}
function Nc(e, t) {
  if (e === "change") return t;
}
var ga = !1;
if (it) {
  var P1;
  if (it) {
    var V1 = "oninput" in document;
    if (!V1) {
      var gu = document.createElement("div");
      gu.setAttribute("oninput", "return;"),
        (V1 = typeof gu.oninput == "function");
    }
    P1 = V1;
  } else P1 = !1;
  ga = P1 && (!document.documentMode || 9 < document.documentMode);
}
function vu() {
  or && (or.detachEvent("onpropertychange", va), (Cr = or = null));
}
function va(e) {
  if (e.propertyName === "value" && ql(Cr)) {
    var t = [];
    ya(t, Cr, e, io(e)), Js(Hc, t);
  }
}
function Lc(e, t, n) {
  e === "focusin"
    ? (vu(), (or = t), (Cr = n), or.attachEvent("onpropertychange", va))
    : e === "focusout" && vu();
}
function Fc(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ql(Cr);
}
function zc(e, t) {
  if (e === "click") return ql(t);
}
function Oc(e, t) {
  if (e === "input" || e === "change") return ql(t);
}
function Ic(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Be = typeof Object.is == "function" ? Object.is : Ic;
function xr(e, t) {
  if (Be(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!X1.call(t, l) || !Be(e[l], t[l])) return !1;
  }
  return !0;
}
function Cu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function xu(e, t) {
  var n = Cu(e);
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
    n = Cu(n);
  }
}
function Ca(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Ca(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function xa() {
  for (var e = window, t = xl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = xl(e.document);
  }
  return t;
}
function mo(e) {
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
function Rc(e) {
  var t = xa(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ca(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && mo(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = xu(n, i));
        var o = xu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
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
var Tc = it && "documentMode" in document && 11 >= document.documentMode,
  cn = null,
  mi = null,
  ur = null,
  yi = !1;
function wu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  yi ||
    cn == null ||
    cn !== xl(r) ||
    ((r = cn),
    "selectionStart" in r && mo(r)
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
    (ur && xr(ur, r)) ||
      ((ur = r),
      (r = Ml(mi, "onSelect")),
      0 < r.length &&
        ((t = new fo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = cn))));
}
function Gr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var fn = {
    animationend: Gr("Animation", "AnimationEnd"),
    animationiteration: Gr("Animation", "AnimationIteration"),
    animationstart: Gr("Animation", "AnimationStart"),
    transitionend: Gr("Transition", "TransitionEnd"),
  },
  H1 = {},
  wa = {};
it &&
  ((wa = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete fn.animationend.animation,
    delete fn.animationiteration.animation,
    delete fn.animationstart.animation),
  "TransitionEvent" in window || delete fn.transitionend.transition);
function bl(e) {
  if (H1[e]) return H1[e];
  if (!fn[e]) return e;
  var t = fn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in wa) return (H1[e] = t[n]);
  return e;
}
var Sa = bl("animationend"),
  _a = bl("animationiteration"),
  ka = bl("animationstart"),
  Ea = bl("transitionend"),
  ja = new Map(),
  Su =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Ht(e, t) {
  ja.set(e, t), nn(t, [e]);
}
for (var N1 = 0; N1 < Su.length; N1++) {
  var L1 = Su[N1],
    $c = L1.toLowerCase(),
    Dc = L1[0].toUpperCase() + L1.slice(1);
  Ht($c, "on" + Dc);
}
Ht(Sa, "onAnimationEnd");
Ht(_a, "onAnimationIteration");
Ht(ka, "onAnimationStart");
Ht("dblclick", "onDoubleClick");
Ht("focusin", "onFocus");
Ht("focusout", "onBlur");
Ht(Ea, "onTransitionEnd");
jn("onMouseEnter", ["mouseout", "mouseover"]);
jn("onMouseLeave", ["mouseout", "mouseover"]);
jn("onPointerEnter", ["pointerout", "pointerover"]);
jn("onPointerLeave", ["pointerout", "pointerover"]);
nn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
nn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
nn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
nn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
nn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
nn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var tr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Ac = new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));
function _u(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), $2(r, t, void 0, e), (e.currentTarget = null);
}
function Ma(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            f = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          _u(l, u, f), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (f = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          _u(l, u, f), (i = s);
        }
    }
  }
  if (Sl) throw ((e = fi), (Sl = !1), (fi = null), e);
}
function A(e, t) {
  var n = t[wi];
  n === void 0 && (n = t[wi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Pa(t, e, 2, !1), n.add(r));
}
function F1(e, t, n) {
  var r = 0;
  t && (r |= 4), Pa(n, e, r, t);
}
var Qr = "_reactListening" + Math.random().toString(36).slice(2);
function wr(e) {
  if (!e[Qr]) {
    (e[Qr] = !0),
      Os.forEach(function (n) {
        n !== "selectionchange" && (Ac.has(n) || F1(n, !1, e), F1(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Qr] || ((t[Qr] = !0), F1("selectionchange", !1, t));
  }
}
function Pa(e, t, n, r) {
  switch (fa(t)) {
    case 1:
      var l = tc;
      break;
    case 4:
      l = nc;
      break;
    default:
      l = ao;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !ci ||
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
function z1(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = At(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Js(function () {
    var f = i,
      y = io(n),
      m = [];
    e: {
      var h = ja.get(e);
      if (h !== void 0) {
        var v = fo,
          C = e;
        switch (e) {
          case "keypress":
            if (ul(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = gc;
            break;
          case "focusin":
            (C = "focus"), (v = M1);
            break;
          case "focusout":
            (C = "blur"), (v = M1);
            break;
          case "beforeblur":
          case "afterblur":
            v = M1;
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
            v = fu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = ic;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = xc;
            break;
          case Sa:
          case _a:
          case ka:
            v = sc;
            break;
          case Ea:
            v = Sc;
            break;
          case "scroll":
            v = rc;
            break;
          case "wheel":
            v = kc;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = cc;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = pu;
        }
        var S = (t & 4) !== 0,
          N = !S && e === "scroll",
          d = S ? (h !== null ? h + "Capture" : null) : h;
        S = [];
        for (var c = f, p; c !== null; ) {
          p = c;
          var g = p.stateNode;
          if (
            (p.tag === 5 &&
              g !== null &&
              ((p = g),
              d !== null && ((g = mr(c, d)), g != null && S.push(Sr(c, g, p)))),
            N)
          )
            break;
          c = c.return;
        }
        0 < S.length &&
          ((h = new v(h, C, null, n, y)), m.push({ event: h, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          h &&
            n !== si &&
            (C = n.relatedTarget || n.fromElement) &&
            (At(C) || C[ot]))
        )
          break e;
        if (
          (v || h) &&
          ((h =
            y.window === y
              ? y
              : (h = y.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          v
            ? ((C = n.relatedTarget || n.toElement),
              (v = f),
              (C = C ? At(C) : null),
              C !== null &&
                ((N = rn(C)), C !== N || (C.tag !== 5 && C.tag !== 6)) &&
                (C = null))
            : ((v = null), (C = f)),
          v !== C)
        ) {
          if (
            ((S = fu),
            (g = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = pu),
              (g = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (N = v == null ? h : dn(v)),
            (p = C == null ? h : dn(C)),
            (h = new S(g, c + "leave", v, n, y)),
            (h.target = N),
            (h.relatedTarget = p),
            (g = null),
            At(y) === f &&
              ((S = new S(d, c + "enter", C, n, y)),
              (S.target = p),
              (S.relatedTarget = N),
              (g = S)),
            (N = g),
            v && C)
          )
            t: {
              for (S = v, d = C, c = 0, p = S; p; p = ln(p)) c++;
              for (p = 0, g = d; g; g = ln(g)) p++;
              for (; 0 < c - p; ) (S = ln(S)), c--;
              for (; 0 < p - c; ) (d = ln(d)), p--;
              for (; c--; ) {
                if (S === d || (d !== null && S === d.alternate)) break t;
                (S = ln(S)), (d = ln(d));
              }
              S = null;
            }
          else S = null;
          v !== null && ku(m, h, v, S, !1),
            C !== null && N !== null && ku(m, N, C, S, !0);
        }
      }
      e: {
        if (
          ((h = f ? dn(f) : window),
          (v = h.nodeName && h.nodeName.toLowerCase()),
          v === "select" || (v === "input" && h.type === "file"))
        )
          var k = Nc;
        else if (yu(h))
          if (ga) k = Oc;
          else {
            k = Fc;
            var _ = Lc;
          }
        else
          (v = h.nodeName) &&
            v.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (k = zc);
        if (k && (k = k(e, f))) {
          ya(m, k, n, y);
          break e;
        }
        _ && _(e, h, f),
          e === "focusout" &&
            (_ = h._wrapperState) &&
            _.controlled &&
            h.type === "number" &&
            ri(h, "number", h.value);
      }
      switch (((_ = f ? dn(f) : window), e)) {
        case "focusin":
          (yu(_) || _.contentEditable === "true") &&
            ((cn = _), (mi = f), (ur = null));
          break;
        case "focusout":
          ur = mi = cn = null;
          break;
        case "mousedown":
          yi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (yi = !1), wu(m, n, y);
          break;
        case "selectionchange":
          if (Tc) break;
        case "keydown":
        case "keyup":
          wu(m, n, y);
      }
      var x;
      if (ho)
        e: {
          switch (e) {
            case "compositionstart":
              var M = "onCompositionStart";
              break e;
            case "compositionend":
              M = "onCompositionEnd";
              break e;
            case "compositionupdate":
              M = "onCompositionUpdate";
              break e;
          }
          M = void 0;
        }
      else
        an
          ? ha(e, n) && (M = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      M &&
        (pa &&
          n.locale !== "ko" &&
          (an || M !== "onCompositionStart"
            ? M === "onCompositionEnd" && an && (x = da())
            : ((vt = y),
              (co = "value" in vt ? vt.value : vt.textContent),
              (an = !0))),
        (_ = Ml(f, M)),
        0 < _.length &&
          ((M = new du(M, e, null, n, y)),
          m.push({ event: M, listeners: _ }),
          x ? (M.data = x) : ((x = ma(n)), x !== null && (M.data = x)))),
        (x = jc ? Mc(e, n) : Pc(e, n)) &&
          ((f = Ml(f, "onBeforeInput")),
          0 < f.length &&
            ((y = new du("onBeforeInput", "beforeinput", null, n, y)),
            m.push({ event: y, listeners: f }),
            (y.data = x)));
    }
    Ma(m, t);
  });
}
function Sr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ml(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = mr(e, n)),
      i != null && r.unshift(Sr(e, i, l)),
      (i = mr(e, t)),
      i != null && r.push(Sr(e, i, l))),
      (e = e.return);
  }
  return r;
}
function ln(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ku(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      f = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      f !== null &&
      ((u = f),
      l
        ? ((s = mr(n, i)), s != null && o.unshift(Sr(n, s, u)))
        : l || ((s = mr(n, i)), s != null && o.push(Sr(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Zc = /\r\n?/g,
  Uc = /\u0000|\uFFFD/g;
function Eu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Zc,
      `
`,
    )
    .replace(Uc, "");
}
function Kr(e, t, n) {
  if (((t = Eu(t)), Eu(e) !== t && n)) throw Error(w(425));
}
function Pl() {}
var gi = null,
  vi = null;
function Ci(e, t) {
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
var xi = typeof setTimeout == "function" ? setTimeout : void 0,
  Bc = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ju = typeof Promise == "function" ? Promise : void 0,
  Wc =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ju < "u"
        ? function (e) {
            return ju.resolve(null).then(e).catch(Gc);
          }
        : xi;
function Gc(e) {
  setTimeout(function () {
    throw e;
  });
}
function O1(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), vr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  vr(t);
}
function _t(e) {
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
function Mu(e) {
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
  Ke = "__reactFiber$" + Dn,
  _r = "__reactProps$" + Dn,
  ot = "__reactContainer$" + Dn,
  wi = "__reactEvents$" + Dn,
  Qc = "__reactListeners$" + Dn,
  Kc = "__reactHandles$" + Dn;
function At(e) {
  var t = e[Ke];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ot] || n[Ke])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Mu(e); e !== null; ) {
          if ((n = e[Ke])) return n;
          e = Mu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function zr(e) {
  return (
    (e = e[Ke] || e[ot]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function dn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function e1(e) {
  return e[_r] || null;
}
var Si = [],
  pn = -1;
function Nt(e) {
  return { current: e };
}
function U(e) {
  0 > pn || ((e.current = Si[pn]), (Si[pn] = null), pn--);
}
function D(e, t) {
  pn++, (Si[pn] = e.current), (e.current = t);
}
var Vt = {},
  ce = Nt(Vt),
  ge = Nt(!1),
  Yt = Vt;
function Mn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Vt;
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
function ve(e) {
  return (e = e.childContextTypes), e != null;
}
function Vl() {
  U(ge), U(ce);
}
function Pu(e, t, n) {
  if (ce.current !== Vt) throw Error(w(168));
  D(ce, t), D(ge, n);
}
function Va(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(w(108, L2(e) || "Unknown", l));
  return Q({}, n, r);
}
function Hl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Vt),
    (Yt = ce.current),
    D(ce, e),
    D(ge, ge.current),
    !0
  );
}
function Vu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n
    ? ((e = Va(e, t, Yt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(ge),
      U(ce),
      D(ce, e))
    : U(ge),
    D(ge, n);
}
var tt = null,
  t1 = !1,
  I1 = !1;
function Ha(e) {
  tt === null ? (tt = [e]) : tt.push(e);
}
function Yc(e) {
  (t1 = !0), Ha(e);
}
function Lt() {
  if (!I1 && tt !== null) {
    I1 = !0;
    var e = 0,
      t = I;
    try {
      var n = tt;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (tt = null), (t1 = !1);
    } catch (l) {
      throw (tt !== null && (tt = tt.slice(e + 1)), ta(oo, Lt), l);
    } finally {
      (I = t), (I1 = !1);
    }
  }
  return null;
}
var hn = [],
  mn = 0,
  Nl = null,
  Ll = 0,
  Ve = [],
  He = 0,
  Xt = null,
  nt = 1,
  rt = "";
function $t(e, t) {
  (hn[mn++] = Ll), (hn[mn++] = Nl), (Nl = e), (Ll = t);
}
function Na(e, t, n) {
  (Ve[He++] = nt), (Ve[He++] = rt), (Ve[He++] = Xt), (Xt = e);
  var r = nt;
  e = rt;
  var l = 32 - Ae(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Ae(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (nt = (1 << (32 - Ae(t) + l)) | (n << l) | r),
      (rt = i + e);
  } else (nt = (1 << i) | (n << l) | r), (rt = e);
}
function yo(e) {
  e.return !== null && ($t(e, 1), Na(e, 1, 0));
}
function go(e) {
  for (; e === Nl; )
    (Nl = hn[--mn]), (hn[mn] = null), (Ll = hn[--mn]), (hn[mn] = null);
  for (; e === Xt; )
    (Xt = Ve[--He]),
      (Ve[He] = null),
      (rt = Ve[--He]),
      (Ve[He] = null),
      (nt = Ve[--He]),
      (Ve[He] = null);
}
var Ee = null,
  ke = null,
  B = !1,
  De = null;
function La(e, t) {
  var n = Ne(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Hu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ee = e), (ke = _t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ee = e), (ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Xt !== null ? { id: nt, overflow: rt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ne(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ee = e),
            (ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function _i(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ki(e) {
  if (B) {
    var t = ke;
    if (t) {
      var n = t;
      if (!Hu(e, t)) {
        if (_i(e)) throw Error(w(418));
        t = _t(n.nextSibling);
        var r = Ee;
        t && Hu(e, t)
          ? La(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (B = !1), (Ee = e));
      }
    } else {
      if (_i(e)) throw Error(w(418));
      (e.flags = (e.flags & -4097) | 2), (B = !1), (Ee = e);
    }
  }
}
function Nu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ee = e;
}
function Yr(e) {
  if (e !== Ee) return !1;
  if (!B) return Nu(e), (B = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ci(e.type, e.memoizedProps))),
    t && (t = ke))
  ) {
    if (_i(e)) throw (Fa(), Error(w(418)));
    for (; t; ) La(e, t), (t = _t(t.nextSibling));
  }
  if ((Nu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ke = _t(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ke = null;
    }
  } else ke = Ee ? _t(e.stateNode.nextSibling) : null;
  return !0;
}
function Fa() {
  for (var e = ke; e; ) e = _t(e.nextSibling);
}
function Pn() {
  (ke = Ee = null), (B = !1);
}
function vo(e) {
  De === null ? (De = [e]) : De.push(e);
}
var Xc = at.ReactCurrentBatchConfig;
function Yn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function Xr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      w(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Lu(e) {
  var t = e._init;
  return t(e._payload);
}
function za(e) {
  function t(d, c) {
    if (e) {
      var p = d.deletions;
      p === null ? ((d.deletions = [c]), (d.flags |= 16)) : p.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function l(d, c) {
    return (d = Mt(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function i(d, c, p) {
    return (
      (d.index = p),
      e
        ? ((p = d.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((d.flags |= 2), c) : p)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function o(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, c, p, g) {
    return c === null || c.tag !== 6
      ? ((c = U1(p, d.mode, g)), (c.return = d), c)
      : ((c = l(c, p)), (c.return = d), c);
  }
  function s(d, c, p, g) {
    var k = p.type;
    return k === sn
      ? y(d, c, p.props.children, g, p.key)
      : c !== null &&
          (c.elementType === k ||
            (typeof k == "object" &&
              k !== null &&
              k.$$typeof === ht &&
              Lu(k) === c.type))
        ? ((g = l(c, p.props)), (g.ref = Yn(d, c, p)), (g.return = d), g)
        : ((g = hl(p.type, p.key, p.props, null, d.mode, g)),
          (g.ref = Yn(d, c, p)),
          (g.return = d),
          g);
  }
  function f(d, c, p, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = B1(p, d.mode, g)), (c.return = d), c)
      : ((c = l(c, p.children || [])), (c.return = d), c);
  }
  function y(d, c, p, g, k) {
    return c === null || c.tag !== 7
      ? ((c = Gt(p, d.mode, g, k)), (c.return = d), c)
      : ((c = l(c, p)), (c.return = d), c);
  }
  function m(d, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = U1("" + c, d.mode, p)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case $r:
          return (
            (p = hl(c.type, c.key, c.props, null, d.mode, p)),
            (p.ref = Yn(d, null, c)),
            (p.return = d),
            p
          );
        case un:
          return (c = B1(c, d.mode, p)), (c.return = d), c;
        case ht:
          var g = c._init;
          return m(d, g(c._payload), p);
      }
      if (bn(c) || Bn(c))
        return (c = Gt(c, d.mode, p, null)), (c.return = d), c;
      Xr(d, c);
    }
    return null;
  }
  function h(d, c, p, g) {
    var k = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return k !== null ? null : u(d, c, "" + p, g);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case $r:
          return p.key === k ? s(d, c, p, g) : null;
        case un:
          return p.key === k ? f(d, c, p, g) : null;
        case ht:
          return (k = p._init), h(d, c, k(p._payload), g);
      }
      if (bn(p) || Bn(p)) return k !== null ? null : y(d, c, p, g, null);
      Xr(d, p);
    }
    return null;
  }
  function v(d, c, p, g, k) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (d = d.get(p) || null), u(c, d, "" + g, k);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case $r:
          return (d = d.get(g.key === null ? p : g.key) || null), s(c, d, g, k);
        case un:
          return (d = d.get(g.key === null ? p : g.key) || null), f(c, d, g, k);
        case ht:
          var _ = g._init;
          return v(d, c, p, _(g._payload), k);
      }
      if (bn(g) || Bn(g)) return (d = d.get(p) || null), y(c, d, g, k, null);
      Xr(c, g);
    }
    return null;
  }
  function C(d, c, p, g) {
    for (
      var k = null, _ = null, x = c, M = (c = 0), $ = null;
      x !== null && M < p.length;
      M++
    ) {
      x.index > M ? (($ = x), (x = null)) : ($ = x.sibling);
      var L = h(d, x, p[M], g);
      if (L === null) {
        x === null && (x = $);
        break;
      }
      e && x && L.alternate === null && t(d, x),
        (c = i(L, c, M)),
        _ === null ? (k = L) : (_.sibling = L),
        (_ = L),
        (x = $);
    }
    if (M === p.length) return n(d, x), B && $t(d, M), k;
    if (x === null) {
      for (; M < p.length; M++)
        (x = m(d, p[M], g)),
          x !== null &&
            ((c = i(x, c, M)), _ === null ? (k = x) : (_.sibling = x), (_ = x));
      return B && $t(d, M), k;
    }
    for (x = r(d, x); M < p.length; M++)
      ($ = v(x, d, M, p[M], g)),
        $ !== null &&
          (e && $.alternate !== null && x.delete($.key === null ? M : $.key),
          (c = i($, c, M)),
          _ === null ? (k = $) : (_.sibling = $),
          (_ = $));
    return (
      e &&
        x.forEach(function (xe) {
          return t(d, xe);
        }),
      B && $t(d, M),
      k
    );
  }
  function S(d, c, p, g) {
    var k = Bn(p);
    if (typeof k != "function") throw Error(w(150));
    if (((p = k.call(p)), p == null)) throw Error(w(151));
    for (
      var _ = (k = null), x = c, M = (c = 0), $ = null, L = p.next();
      x !== null && !L.done;
      M++, L = p.next()
    ) {
      x.index > M ? (($ = x), (x = null)) : ($ = x.sibling);
      var xe = h(d, x, L.value, g);
      if (xe === null) {
        x === null && (x = $);
        break;
      }
      e && x && xe.alternate === null && t(d, x),
        (c = i(xe, c, M)),
        _ === null ? (k = xe) : (_.sibling = xe),
        (_ = xe),
        (x = $);
    }
    if (L.done) return n(d, x), B && $t(d, M), k;
    if (x === null) {
      for (; !L.done; M++, L = p.next())
        (L = m(d, L.value, g)),
          L !== null &&
            ((c = i(L, c, M)), _ === null ? (k = L) : (_.sibling = L), (_ = L));
      return B && $t(d, M), k;
    }
    for (x = r(d, x); !L.done; M++, L = p.next())
      (L = v(x, d, M, L.value, g)),
        L !== null &&
          (e && L.alternate !== null && x.delete(L.key === null ? M : L.key),
          (c = i(L, c, M)),
          _ === null ? (k = L) : (_.sibling = L),
          (_ = L));
    return (
      e &&
        x.forEach(function (zt) {
          return t(d, zt);
        }),
      B && $t(d, M),
      k
    );
  }
  function N(d, c, p, g) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === sn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case $r:
          e: {
            for (var k = p.key, _ = c; _ !== null; ) {
              if (_.key === k) {
                if (((k = p.type), k === sn)) {
                  if (_.tag === 7) {
                    n(d, _.sibling),
                      (c = l(_, p.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  _.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === ht &&
                    Lu(k) === _.type)
                ) {
                  n(d, _.sibling),
                    (c = l(_, p.props)),
                    (c.ref = Yn(d, _, p)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, _);
                break;
              } else t(d, _);
              _ = _.sibling;
            }
            p.type === sn
              ? ((c = Gt(p.props.children, d.mode, g, p.key)),
                (c.return = d),
                (d = c))
              : ((g = hl(p.type, p.key, p.props, null, d.mode, g)),
                (g.ref = Yn(d, c, p)),
                (g.return = d),
                (d = g));
          }
          return o(d);
        case un:
          e: {
            for (_ = p.key; c !== null; ) {
              if (c.key === _)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(d, c.sibling),
                    (c = l(c, p.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = B1(p, d.mode, g)), (c.return = d), (d = c);
          }
          return o(d);
        case ht:
          return (_ = p._init), N(d, c, _(p._payload), g);
      }
      if (bn(p)) return C(d, c, p, g);
      if (Bn(p)) return S(d, c, p, g);
      Xr(d, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = l(c, p)), (c.return = d), (d = c))
          : (n(d, c), (c = U1(p, d.mode, g)), (c.return = d), (d = c)),
        o(d))
      : n(d, c);
  }
  return N;
}
var Vn = za(!0),
  Oa = za(!1),
  Fl = Nt(null),
  zl = null,
  yn = null,
  Co = null;
function xo() {
  Co = yn = zl = null;
}
function wo(e) {
  var t = Fl.current;
  U(Fl), (e._currentValue = t);
}
function Ei(e, t, n) {
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
function kn(e, t) {
  (zl = e),
    (Co = yn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ye = !0), (e.firstContext = null));
}
function Fe(e) {
  var t = e._currentValue;
  if (Co !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), yn === null)) {
      if (zl === null) throw Error(w(308));
      (yn = e), (zl.dependencies = { lanes: 0, firstContext: e });
    } else yn = yn.next = e;
  return t;
}
var Zt = null;
function So(e) {
  Zt === null ? (Zt = [e]) : Zt.push(e);
}
function Ia(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), So(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    ut(e, r)
  );
}
function ut(e, t) {
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
var mt = !1;
function _o(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ra(e, t) {
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
function lt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function kt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), z & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      ut(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), So(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    ut(e, n)
  );
}
function sl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), uo(e, n);
  }
}
function Fu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
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
function Ol(e, t, n, r) {
  var l = e.updateQueue;
  mt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      f = s.next;
    (s.next = null), o === null ? (i = f) : (o.next = f), (o = s);
    var y = e.alternate;
    y !== null &&
      ((y = y.updateQueue),
      (u = y.lastBaseUpdate),
      u !== o &&
        (u === null ? (y.firstBaseUpdate = f) : (u.next = f),
        (y.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var m = l.baseState;
    (o = 0), (y = f = s = null), (u = i);
    do {
      var h = u.lane,
        v = u.eventTime;
      if ((r & h) === h) {
        y !== null &&
          (y = y.next =
            {
              eventTime: v,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var C = e,
            S = u;
          switch (((h = t), (v = n), S.tag)) {
            case 1:
              if (((C = S.payload), typeof C == "function")) {
                m = C.call(v, m, h);
                break e;
              }
              m = C;
              break e;
            case 3:
              C.flags = (C.flags & -65537) | 128;
            case 0:
              if (
                ((C = S.payload),
                (h = typeof C == "function" ? C.call(v, m, h) : C),
                h == null)
              )
                break e;
              m = Q({}, m, h);
              break e;
            case 2:
              mt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [u]) : h.push(u));
      } else
        (v = {
          eventTime: v,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          y === null ? ((f = y = v), (s = m)) : (y = y.next = v),
          (o |= h);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (y === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = f),
      (l.lastBaseUpdate = y),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (qt |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function zu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(w(191, l));
        l.call(r);
      }
    }
}
var Or = {},
  Xe = Nt(Or),
  kr = Nt(Or),
  Er = Nt(Or);
function Ut(e) {
  if (e === Or) throw Error(w(174));
  return e;
}
function ko(e, t) {
  switch ((D(Er, t), D(kr, e), D(Xe, Or), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ii(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ii(t, e));
  }
  U(Xe), D(Xe, t);
}
function Hn() {
  U(Xe), U(kr), U(Er);
}
function Ta(e) {
  Ut(Er.current);
  var t = Ut(Xe.current),
    n = ii(t, e.type);
  t !== n && (D(kr, e), D(Xe, n));
}
function Eo(e) {
  kr.current === e && (U(Xe), U(kr));
}
var W = Nt(0);
function Il(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
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
var R1 = [];
function jo() {
  for (var e = 0; e < R1.length; e++)
    R1[e]._workInProgressVersionPrimary = null;
  R1.length = 0;
}
var al = at.ReactCurrentDispatcher,
  T1 = at.ReactCurrentBatchConfig,
  Jt = 0,
  G = null,
  q = null,
  ee = null,
  Rl = !1,
  sr = !1,
  jr = 0,
  Jc = 0;
function oe() {
  throw Error(w(321));
}
function Mo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Be(e[n], t[n])) return !1;
  return !0;
}
function Po(e, t, n, r, l, i) {
  if (
    ((Jt = i),
    (G = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (al.current = e === null || e.memoizedState === null ? t8 : n8),
    (e = n(r, l)),
    sr)
  ) {
    i = 0;
    do {
      if (((sr = !1), (jr = 0), 25 <= i)) throw Error(w(301));
      (i += 1),
        (ee = q = null),
        (t.updateQueue = null),
        (al.current = r8),
        (e = n(r, l));
    } while (sr);
  }
  if (
    ((al.current = Tl),
    (t = q !== null && q.next !== null),
    (Jt = 0),
    (ee = q = G = null),
    (Rl = !1),
    t)
  )
    throw Error(w(300));
  return e;
}
function Vo() {
  var e = jr !== 0;
  return (jr = 0), e;
}
function Ge() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ee === null ? (G.memoizedState = ee = e) : (ee = ee.next = e), ee;
}
function ze() {
  if (q === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = q.next;
  var t = ee === null ? G.memoizedState : ee.next;
  if (t !== null) (ee = t), (q = e);
  else {
    if (e === null) throw Error(w(310));
    (q = e),
      (e = {
        memoizedState: q.memoizedState,
        baseState: q.baseState,
        baseQueue: q.baseQueue,
        queue: q.queue,
        next: null,
      }),
      ee === null ? (G.memoizedState = ee = e) : (ee = ee.next = e);
  }
  return ee;
}
function Mr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function $1(e) {
  var t = ze(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = q,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      f = i;
    do {
      var y = f.lane;
      if ((Jt & y) === y)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (r = f.hasEagerState ? f.eagerState : e(r, f.action));
      else {
        var m = {
          lane: y,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (o = r)) : (s = s.next = m),
          (G.lanes |= y),
          (qt |= y);
      }
      f = f.next;
    } while (f !== null && f !== i);
    s === null ? (o = r) : (s.next = u),
      Be(r, t.memoizedState) || (ye = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (G.lanes |= i), (qt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function D1(e) {
  var t = ze(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Be(i, t.memoizedState) || (ye = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function $a() {}
function Da(e, t) {
  var n = G,
    r = ze(),
    l = t(),
    i = !Be(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (ye = !0)),
    (r = r.queue),
    Ho(Ua.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ee !== null && ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Pr(9, Za.bind(null, n, r, l, t), void 0, null),
      ne === null)
    )
      throw Error(w(349));
    Jt & 30 || Aa(n, t, l);
  }
  return l;
}
function Aa(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Za(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ba(t) && Wa(e);
}
function Ua(e, t, n) {
  return n(function () {
    Ba(t) && Wa(e);
  });
}
function Ba(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Be(e, n);
  } catch {
    return !0;
  }
}
function Wa(e) {
  var t = ut(e, 1);
  t !== null && Ze(t, e, 1, -1);
}
function Ou(e) {
  var t = Ge();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Mr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = e8.bind(null, G, e)),
    [t.memoizedState, e]
  );
}
function Pr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ga() {
  return ze().memoizedState;
}
function cl(e, t, n, r) {
  var l = Ge();
  (G.flags |= e),
    (l.memoizedState = Pr(1 | t, n, void 0, r === void 0 ? null : r));
}
function n1(e, t, n, r) {
  var l = ze();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (q !== null) {
    var o = q.memoizedState;
    if (((i = o.destroy), r !== null && Mo(r, o.deps))) {
      l.memoizedState = Pr(t, n, i, r);
      return;
    }
  }
  (G.flags |= e), (l.memoizedState = Pr(1 | t, n, i, r));
}
function Iu(e, t) {
  return cl(8390656, 8, e, t);
}
function Ho(e, t) {
  return n1(2048, 8, e, t);
}
function Qa(e, t) {
  return n1(4, 2, e, t);
}
function Ka(e, t) {
  return n1(4, 4, e, t);
}
function Ya(e, t) {
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
function Xa(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), n1(4, 4, Ya.bind(null, t, e), n)
  );
}
function No() {}
function Ja(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function qa(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ba(e, t, n) {
  return Jt & 21
    ? (Be(n, t) || ((n = la()), (G.lanes |= n), (qt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ye = !0)), (e.memoizedState = n));
}
function qc(e, t) {
  var n = I;
  (I = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = T1.transition;
  T1.transition = {};
  try {
    e(!1), t();
  } finally {
    (I = n), (T1.transition = r);
  }
}
function e0() {
  return ze().memoizedState;
}
function bc(e, t, n) {
  var r = jt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    t0(e))
  )
    n0(t, n);
  else if (((n = Ia(e, t, n, r)), n !== null)) {
    var l = de();
    Ze(n, e, r, l), r0(n, t, r);
  }
}
function e8(e, t, n) {
  var r = jt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (t0(e)) n0(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Be(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), So(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ia(e, t, l, r)),
      n !== null && ((l = de()), Ze(n, e, r, l), r0(n, t, r));
  }
}
function t0(e) {
  var t = e.alternate;
  return e === G || (t !== null && t === G);
}
function n0(e, t) {
  sr = Rl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function r0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), uo(e, n);
  }
}
var Tl = {
    readContext: Fe,
    useCallback: oe,
    useContext: oe,
    useEffect: oe,
    useImperativeHandle: oe,
    useInsertionEffect: oe,
    useLayoutEffect: oe,
    useMemo: oe,
    useReducer: oe,
    useRef: oe,
    useState: oe,
    useDebugValue: oe,
    useDeferredValue: oe,
    useTransition: oe,
    useMutableSource: oe,
    useSyncExternalStore: oe,
    useId: oe,
    unstable_isNewReconciler: !1,
  },
  t8 = {
    readContext: Fe,
    useCallback: function (e, t) {
      return (Ge().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Fe,
    useEffect: Iu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        cl(4194308, 4, Ya.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return cl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return cl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ge();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ge();
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
        (e = e.dispatch = bc.bind(null, G, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ge();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ou,
    useDebugValue: No,
    useDeferredValue: function (e) {
      return (Ge().memoizedState = e);
    },
    useTransition: function () {
      var e = Ou(!1),
        t = e[0];
      return (e = qc.bind(null, e[1])), (Ge().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = G,
        l = Ge();
      if (B) {
        if (n === void 0) throw Error(w(407));
        n = n();
      } else {
        if (((n = t()), ne === null)) throw Error(w(349));
        Jt & 30 || Aa(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Iu(Ua.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Pr(9, Za.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ge(),
        t = ne.identifierPrefix;
      if (B) {
        var n = rt,
          r = nt;
        (n = (r & ~(1 << (32 - Ae(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = jr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Jc++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  n8 = {
    readContext: Fe,
    useCallback: Ja,
    useContext: Fe,
    useEffect: Ho,
    useImperativeHandle: Xa,
    useInsertionEffect: Qa,
    useLayoutEffect: Ka,
    useMemo: qa,
    useReducer: $1,
    useRef: Ga,
    useState: function () {
      return $1(Mr);
    },
    useDebugValue: No,
    useDeferredValue: function (e) {
      var t = ze();
      return ba(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = $1(Mr)[0],
        t = ze().memoizedState;
      return [e, t];
    },
    useMutableSource: $a,
    useSyncExternalStore: Da,
    useId: e0,
    unstable_isNewReconciler: !1,
  },
  r8 = {
    readContext: Fe,
    useCallback: Ja,
    useContext: Fe,
    useEffect: Ho,
    useImperativeHandle: Xa,
    useInsertionEffect: Qa,
    useLayoutEffect: Ka,
    useMemo: qa,
    useReducer: D1,
    useRef: Ga,
    useState: function () {
      return D1(Mr);
    },
    useDebugValue: No,
    useDeferredValue: function (e) {
      var t = ze();
      return q === null ? (t.memoizedState = e) : ba(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = D1(Mr)[0],
        t = ze().memoizedState;
      return [e, t];
    },
    useMutableSource: $a,
    useSyncExternalStore: Da,
    useId: e0,
    unstable_isNewReconciler: !1,
  };
function Te(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ji(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var r1 = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? rn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      l = jt(e),
      i = lt(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = kt(e, i, l)),
      t !== null && (Ze(t, e, l, r), sl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      l = jt(e),
      i = lt(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = kt(e, i, l)),
      t !== null && (Ze(t, e, l, r), sl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      r = jt(e),
      l = lt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = kt(e, l, r)),
      t !== null && (Ze(t, e, r, n), sl(t, e, r));
  },
};
function Ru(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !xr(n, r) || !xr(l, i)
        : !0
  );
}
function l0(e, t, n) {
  var r = !1,
    l = Vt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Fe(i))
      : ((l = ve(t) ? Yt : ce.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Mn(e, l) : Vt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = r1),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Tu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && r1.enqueueReplaceState(t, t.state, null);
}
function Mi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), _o(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Fe(i))
    : ((i = ve(t) ? Yt : ce.current), (l.context = Mn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (ji(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && r1.enqueueReplaceState(l, l.state, null),
      Ol(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Nn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += N2(r)), (r = r.return);
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
function A1(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Pi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var l8 = typeof WeakMap == "function" ? WeakMap : Map;
function i0(e, t, n) {
  (n = lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Dl || ((Dl = !0), (Ti = r)), Pi(e, t);
    }),
    n
  );
}
function o0(e, t, n) {
  (n = lt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Pi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Pi(e, t),
          typeof r != "function" &&
            (Et === null ? (Et = new Set([this])) : Et.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function $u(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new l8();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = v8.bind(null, e, t, n)), t.then(e, e));
}
function Du(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Au(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = lt(-1, 1)), (t.tag = 2), kt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var i8 = at.ReactCurrentOwner,
  ye = !1;
function fe(e, t, n, r) {
  t.child = e === null ? Oa(t, null, n, r) : Vn(t, e.child, n, r);
}
function Zu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    kn(t, l),
    (r = Po(e, t, n, r, i, l)),
    (n = Vo()),
    e !== null && !ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        st(e, t, l))
      : (B && n && yo(t), (t.flags |= 1), fe(e, t, r, l), t.child)
  );
}
function Uu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !$o(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), u0(e, t, i, r, l))
      : ((e = hl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : xr), n(o, r) && e.ref === t.ref)
    )
      return st(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Mt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function u0(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (xr(i, r) && e.ref === t.ref)
      if (((ye = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (ye = !0);
      else return (t.lanes = e.lanes), st(e, t, l);
  }
  return Vi(e, t, n, r, l);
}
function s0(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(vn, _e),
        (_e |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(vn, _e),
          (_e |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        D(vn, _e),
        (_e |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(vn, _e),
      (_e |= r);
  return fe(e, t, l, n), t.child;
}
function a0(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Vi(e, t, n, r, l) {
  var i = ve(n) ? Yt : ce.current;
  return (
    (i = Mn(t, i)),
    kn(t, l),
    (n = Po(e, t, n, r, i, l)),
    (r = Vo()),
    e !== null && !ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        st(e, t, l))
      : (B && r && yo(t), (t.flags |= 1), fe(e, t, n, l), t.child)
  );
}
function Bu(e, t, n, r, l) {
  if (ve(n)) {
    var i = !0;
    Hl(t);
  } else i = !1;
  if ((kn(t, l), t.stateNode === null))
    fl(e, t), l0(t, n, r), Mi(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      f = n.contextType;
    typeof f == "object" && f !== null
      ? (f = Fe(f))
      : ((f = ve(n) ? Yt : ce.current), (f = Mn(t, f)));
    var y = n.getDerivedStateFromProps,
      m =
        typeof y == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== f) && Tu(t, o, r, f)),
      (mt = !1);
    var h = t.memoizedState;
    (o.state = h),
      Ol(t, r, o, l),
      (s = t.memoizedState),
      u !== r || h !== s || ge.current || mt
        ? (typeof y == "function" && (ji(t, n, y, r), (s = t.memoizedState)),
          (u = mt || Ru(t, n, u, r, h, s, f))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = f),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Ra(e, t),
      (u = t.memoizedProps),
      (f = t.type === t.elementType ? u : Te(t.type, u)),
      (o.props = f),
      (m = t.pendingProps),
      (h = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Fe(s))
        : ((s = ve(n) ? Yt : ce.current), (s = Mn(t, s)));
    var v = n.getDerivedStateFromProps;
    (y =
      typeof v == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== m || h !== s) && Tu(t, o, r, s)),
      (mt = !1),
      (h = t.memoizedState),
      (o.state = h),
      Ol(t, r, o, l);
    var C = t.memoizedState;
    u !== m || h !== C || ge.current || mt
      ? (typeof v == "function" && (ji(t, n, v, r), (C = t.memoizedState)),
        (f = mt || Ru(t, n, f, r, h, C, s) || !1)
          ? (y ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, C, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, C, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = C)),
        (o.props = r),
        (o.state = C),
        (o.context = s),
        (r = f))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Hi(e, t, n, r, i, l);
}
function Hi(e, t, n, r, l, i) {
  a0(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Vu(t, n, !1), st(e, t, i);
  (r = t.stateNode), (i8.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Vn(t, e.child, null, i)), (t.child = Vn(t, null, u, i)))
      : fe(e, t, u, i),
    (t.memoizedState = r.state),
    l && Vu(t, n, !0),
    t.child
  );
}
function c0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Pu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Pu(e, t.context, !1),
    ko(e, t.containerInfo);
}
function Wu(e, t, n, r, l) {
  return Pn(), vo(l), (t.flags |= 256), fe(e, t, n, r), t.child;
}
var Ni = { dehydrated: null, treeContext: null, retryLane: 0 };
function Li(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function f0(e, t, n) {
  var r = t.pendingProps,
    l = W.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D(W, l & 1),
    e === null)
  )
    return (
      ki(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = o1(o, r, 0, null)),
              (e = Gt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Li(n)),
              (t.memoizedState = Ni),
              e)
            : Lo(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return o8(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Mt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = Mt(u, i)) : ((i = Gt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Li(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ni),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Mt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
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
function Lo(e, t) {
  return (
    (t = o1({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Jr(e, t, n, r) {
  return (
    r !== null && vo(r),
    Vn(t, e.child, null, n),
    (e = Lo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function o8(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = A1(Error(w(422)))), Jr(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = o1({ mode: "visible", children: r.children }, l, 0, null)),
          (i = Gt(i, l, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Vn(t, e.child, null, o),
          (t.child.memoizedState = Li(o)),
          (t.memoizedState = Ni),
          i);
  if (!(t.mode & 1)) return Jr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(w(419))), (r = A1(i, r, void 0)), Jr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), ye || u)) {
    if (((r = ne), r !== null)) {
      switch (o & -o) {
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
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), ut(e, l), Ze(r, e, l, -1));
    }
    return To(), (r = A1(Error(w(421)))), Jr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = C8.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ke = _t(l.nextSibling)),
      (Ee = t),
      (B = !0),
      (De = null),
      e !== null &&
        ((Ve[He++] = nt),
        (Ve[He++] = rt),
        (Ve[He++] = Xt),
        (nt = e.id),
        (rt = e.overflow),
        (Xt = t)),
      (t = Lo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Gu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ei(e.return, t, n);
}
function Z1(e, t, n, r, l) {
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
function d0(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((fe(e, t, r.children, n), (r = W.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Gu(e, n, t);
        else if (e.tag === 19) Gu(e, n, t);
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
  if ((D(W, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Il(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Z1(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Il(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Z1(t, !0, n, null, i);
        break;
      case "together":
        Z1(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function fl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function st(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (qt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Mt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Mt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function u8(e, t, n) {
  switch (t.tag) {
    case 3:
      c0(t), Pn();
      break;
    case 5:
      Ta(t);
      break;
    case 1:
      ve(t.type) && Hl(t);
      break;
    case 4:
      ko(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      D(Fl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(W, W.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? f0(e, t, n)
            : (D(W, W.current & 1),
              (e = st(e, t, n)),
              e !== null ? e.sibling : null);
      D(W, W.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return d0(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D(W, W.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), s0(e, t, n);
  }
  return st(e, t, n);
}
var p0, Fi, h0, m0;
p0 = function (e, t) {
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
};
Fi = function () {};
h0 = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Ut(Xe.current);
    var i = null;
    switch (n) {
      case "input":
        (l = ti(e, l)), (r = ti(e, r)), (i = []);
        break;
      case "select":
        (l = Q({}, l, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = li(e, l)), (r = li(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Pl);
    }
    oi(n, r);
    var o;
    n = null;
    for (f in l)
      if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
        if (f === "style") {
          var u = l[f];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          f !== "dangerouslySetInnerHTML" &&
            f !== "children" &&
            f !== "suppressContentEditableWarning" &&
            f !== "suppressHydrationWarning" &&
            f !== "autoFocus" &&
            (pr.hasOwnProperty(f)
              ? i || (i = [])
              : (i = i || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (
        ((u = l != null ? l[f] : void 0),
        r.hasOwnProperty(f) && s !== u && (s != null || u != null))
      )
        if (f === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(f, n)), (n = s);
        else
          f === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(f, s))
            : f === "children"
              ? (typeof s != "string" && typeof s != "number") ||
                (i = i || []).push(f, "" + s)
              : f !== "suppressContentEditableWarning" &&
                f !== "suppressHydrationWarning" &&
                (pr.hasOwnProperty(f)
                  ? (s != null && f === "onScroll" && A("scroll", e),
                    i || u === s || (i = []))
                  : (i = i || []).push(f, s));
    }
    n && (i = i || []).push("style", n);
    var f = i;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
m0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Xn(e, t) {
  if (!B)
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
function ue(e) {
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
function s8(e, t, n) {
  var r = t.pendingProps;
  switch ((go(t), t.tag)) {
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
      return ue(t), null;
    case 1:
      return ve(t.type) && Vl(), ue(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Hn(),
        U(ge),
        U(ce),
        jo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Yr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), De !== null && (Ai(De), (De = null)))),
        Fi(e, t),
        ue(t),
        null
      );
    case 5:
      Eo(t);
      var l = Ut(Er.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        h0(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return ue(t), null;
        }
        if (((e = Ut(Xe.current)), Yr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ke] = t), (r[_r] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              A("cancel", r), A("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              A("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < tr.length; l++) A(tr[l], r);
              break;
            case "source":
              A("error", r);
              break;
            case "img":
            case "image":
            case "link":
              A("error", r), A("load", r);
              break;
            case "details":
              A("toggle", r);
              break;
            case "input":
              tu(r, i), A("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                A("invalid", r);
              break;
            case "textarea":
              ru(r, i), A("invalid", r);
          }
          oi(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Kr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Kr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : pr.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  A("scroll", r);
            }
          switch (n) {
            case "input":
              Dr(r), nu(r, i, !0);
              break;
            case "textarea":
              Dr(r), lu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Pl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Us(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ke] = t),
            (e[_r] = r),
            p0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ui(n, r)), n)) {
              case "dialog":
                A("cancel", e), A("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                A("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < tr.length; l++) A(tr[l], e);
                l = r;
                break;
              case "source":
                A("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                A("error", e), A("load", e), (l = r);
                break;
              case "details":
                A("toggle", e), (l = r);
                break;
              case "input":
                tu(e, r), (l = ti(e, r)), A("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = Q({}, r, { value: void 0 })),
                  A("invalid", e);
                break;
              case "textarea":
                ru(e, r), (l = li(e, r)), A("invalid", e);
                break;
              default:
                l = r;
            }
            oi(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? Gs(e, s)
                  : i === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && Bs(e, s))
                    : i === "children"
                      ? typeof s == "string"
                        ? (n !== "textarea" || s !== "") && hr(e, s)
                        : typeof s == "number" && hr(e, "" + s)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (pr.hasOwnProperty(i)
                          ? s != null && i === "onScroll" && A("scroll", e)
                          : s != null && to(e, i, s, o));
              }
            switch (n) {
              case "input":
                Dr(e), nu(e, r, !1);
                break;
              case "textarea":
                Dr(e), lu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Pt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? xn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      xn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Pl);
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
      return ue(t), null;
    case 6:
      if (e && t.stateNode != null) m0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (((n = Ut(Er.current)), Ut(Xe.current), Yr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ke] = t),
            (i = r.nodeValue !== n) && ((e = Ee), e !== null))
          )
            switch (e.tag) {
              case 3:
                Kr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Kr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ke] = t),
            (t.stateNode = r);
      }
      return ue(t), null;
    case 13:
      if (
        (U(W),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (B && ke !== null && t.mode & 1 && !(t.flags & 128))
          Fa(), Pn(), (t.flags |= 98560), (i = !1);
        else if (((i = Yr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(w(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(w(317));
            i[Ke] = t;
          } else
            Pn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ue(t), (i = !1);
        } else De !== null && (Ai(De), (De = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || W.current & 1 ? b === 0 && (b = 3) : To())),
          t.updateQueue !== null && (t.flags |= 4),
          ue(t),
          null);
    case 4:
      return (
        Hn(), Fi(e, t), e === null && wr(t.stateNode.containerInfo), ue(t), null
      );
    case 10:
      return wo(t.type._context), ue(t), null;
    case 17:
      return ve(t.type) && Vl(), ue(t), null;
    case 19:
      if ((U(W), (i = t.memoizedState), i === null)) return ue(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Xn(i, !1);
        else {
          if (b !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Il(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Xn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return D(W, (W.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Y() > Ln &&
            ((t.flags |= 128), (r = !0), Xn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Il(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Xn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !B)
            )
              return ue(t), null;
          } else
            2 * Y() - i.renderingStartTime > Ln &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Xn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Y()),
          (t.sibling = null),
          (n = W.current),
          D(W, r ? (n & 1) | 2 : n & 1),
          t)
        : (ue(t), null);
    case 22:
    case 23:
      return (
        Ro(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? _e & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ue(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function a8(e, t) {
  switch ((go(t), t.tag)) {
    case 1:
      return (
        ve(t.type) && Vl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Hn(),
        U(ge),
        U(ce),
        jo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Eo(t), null;
    case 13:
      if ((U(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(w(340));
        Pn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(W), null;
    case 4:
      return Hn(), null;
    case 10:
      return wo(t.type._context), null;
    case 22:
    case 23:
      return Ro(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var qr = !1,
  se = !1,
  c8 = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function gn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        K(e, t, r);
      }
    else n.current = null;
}
function zi(e, t, n) {
  try {
    n();
  } catch (r) {
    K(e, t, r);
  }
}
var Qu = !1;
function f8(e, t) {
  if (((gi = El), (e = xa()), mo(e))) {
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
          var o = 0,
            u = -1,
            s = -1,
            f = 0,
            y = 0,
            m = e,
            h = null;
          t: for (;;) {
            for (
              var v;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = o + l),
                m !== i || (r !== 0 && m.nodeType !== 3) || (s = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (v = m.firstChild) !== null;

            )
              (h = m), (m = v);
            for (;;) {
              if (m === e) break t;
              if (
                (h === n && ++f === l && (u = o),
                h === i && ++y === r && (s = o),
                (v = m.nextSibling) !== null)
              )
                break;
              (m = h), (h = m.parentNode);
            }
            m = v;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (vi = { focusedElem: e, selectionRange: n }, El = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var C = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (C !== null) {
                  var S = C.memoizedProps,
                    N = C.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Te(t.type, S),
                      N,
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(w(163));
            }
        } catch (g) {
          K(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (C = Qu), (Qu = !1), C;
}
function ar(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && zi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function l1(e, t) {
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
function Oi(e) {
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
function y0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), y0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ke], delete t[_r], delete t[wi], delete t[Qc], delete t[Kc])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function g0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ku(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || g0(e.return)) return null;
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
function Ii(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Pl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ii(e, t, n), e = e.sibling; e !== null; ) Ii(e, t, n), (e = e.sibling);
}
function Ri(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ri(e, t, n), e = e.sibling; e !== null; ) Ri(e, t, n), (e = e.sibling);
}
var re = null,
  $e = !1;
function dt(e, t, n) {
  for (n = n.child; n !== null; ) v0(e, t, n), (n = n.sibling);
}
function v0(e, t, n) {
  if (Ye && typeof Ye.onCommitFiberUnmount == "function")
    try {
      Ye.onCommitFiberUnmount(Xl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      se || gn(n, t);
    case 6:
      var r = re,
        l = $e;
      (re = null),
        dt(e, t, n),
        (re = r),
        ($e = l),
        re !== null &&
          ($e
            ? ((e = re),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : re.removeChild(n.stateNode));
      break;
    case 18:
      re !== null &&
        ($e
          ? ((e = re),
            (n = n.stateNode),
            e.nodeType === 8
              ? O1(e.parentNode, n)
              : e.nodeType === 1 && O1(e, n),
            vr(e))
          : O1(re, n.stateNode));
      break;
    case 4:
      (r = re),
        (l = $e),
        (re = n.stateNode.containerInfo),
        ($e = !0),
        dt(e, t, n),
        (re = r),
        ($e = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !se &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && zi(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      dt(e, t, n);
      break;
    case 1:
      if (
        !se &&
        (gn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          K(n, t, u);
        }
      dt(e, t, n);
      break;
    case 21:
      dt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((se = (r = se) || n.memoizedState !== null), dt(e, t, n), (se = r))
        : dt(e, t, n);
      break;
    default:
      dt(e, t, n);
  }
}
function Yu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new c8()),
      t.forEach(function (r) {
        var l = x8.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Re(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (re = u.stateNode), ($e = !1);
              break e;
            case 3:
              (re = u.stateNode.containerInfo), ($e = !0);
              break e;
            case 4:
              (re = u.stateNode.containerInfo), ($e = !0);
              break e;
          }
          u = u.return;
        }
        if (re === null) throw Error(w(160));
        v0(i, o, l), (re = null), ($e = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (f) {
        K(l, t, f);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) C0(t, e), (t = t.sibling);
}
function C0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Re(t, e), We(e), r & 4)) {
        try {
          ar(3, e, e.return), l1(3, e);
        } catch (S) {
          K(e, e.return, S);
        }
        try {
          ar(5, e, e.return);
        } catch (S) {
          K(e, e.return, S);
        }
      }
      break;
    case 1:
      Re(t, e), We(e), r & 512 && n !== null && gn(n, n.return);
      break;
    case 5:
      if (
        (Re(t, e),
        We(e),
        r & 512 && n !== null && gn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          hr(l, "");
        } catch (S) {
          K(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && As(l, i),
              ui(u, o);
            var f = ui(u, i);
            for (o = 0; o < s.length; o += 2) {
              var y = s[o],
                m = s[o + 1];
              y === "style"
                ? Gs(l, m)
                : y === "dangerouslySetInnerHTML"
                  ? Bs(l, m)
                  : y === "children"
                    ? hr(l, m)
                    : to(l, y, m, f);
            }
            switch (u) {
              case "input":
                ni(l, i);
                break;
              case "textarea":
                Zs(l, i);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null
                  ? xn(l, !!i.multiple, v, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? xn(l, !!i.multiple, i.defaultValue, !0)
                      : xn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[_r] = i;
          } catch (S) {
            K(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Re(t, e), We(e), r & 4)) {
        if (e.stateNode === null) throw Error(w(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (S) {
          K(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Re(t, e), We(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          vr(t.containerInfo);
        } catch (S) {
          K(e, e.return, S);
        }
      break;
    case 4:
      Re(t, e), We(e);
      break;
    case 13:
      Re(t, e),
        We(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Oo = Y())),
        r & 4 && Yu(e);
      break;
    case 22:
      if (
        ((y = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((se = (f = se) || y), Re(t, e), (se = f)) : Re(t, e),
        We(e),
        r & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !y && e.mode & 1)
        )
          for (j = e, y = e.child; y !== null; ) {
            for (m = j = y; j !== null; ) {
              switch (((h = j), (v = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ar(4, h, h.return);
                  break;
                case 1:
                  gn(h, h.return);
                  var C = h.stateNode;
                  if (typeof C.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (C.props = t.memoizedProps),
                        (C.state = t.memoizedState),
                        C.componentWillUnmount();
                    } catch (S) {
                      K(r, n, S);
                    }
                  }
                  break;
                case 5:
                  gn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Ju(m);
                    continue;
                  }
              }
              v !== null ? ((v.return = h), (j = v)) : Ju(m);
            }
            y = y.sibling;
          }
        e: for (y = null, m = e; ; ) {
          if (m.tag === 5) {
            if (y === null) {
              y = m;
              try {
                (l = m.stateNode),
                  f
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Ws("display", o)));
              } catch (S) {
                K(e, e.return, S);
              }
            }
          } else if (m.tag === 6) {
            if (y === null)
              try {
                m.stateNode.nodeValue = f ? "" : m.memoizedProps;
              } catch (S) {
                K(e, e.return, S);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            y === m && (y = null), (m = m.return);
          }
          y === m && (y = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Re(t, e), We(e), r & 4 && Yu(e);
      break;
    case 21:
      break;
    default:
      Re(t, e), We(e);
  }
}
function We(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (g0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (hr(l, ""), (r.flags &= -33));
          var i = Ku(e);
          Ri(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Ku(e);
          Ii(e, u, o);
          break;
        default:
          throw Error(w(161));
      }
    } catch (s) {
      K(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function d8(e, t, n) {
  (j = e), x0(e);
}
function x0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var l = j,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || qr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || se;
        u = qr;
        var f = se;
        if (((qr = o), (se = s) && !f))
          for (j = l; j !== null; )
            (o = j),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? qu(l)
                : s !== null
                  ? ((s.return = o), (j = s))
                  : qu(l);
        for (; i !== null; ) (j = i), x0(i), (i = i.sibling);
        (j = l), (qr = u), (se = f);
      }
      Xu(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (j = i)) : Xu(e);
  }
}
function Xu(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              se || l1(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !se)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Te(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && zu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                zu(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                var f = t.alternate;
                if (f !== null) {
                  var y = f.memoizedState;
                  if (y !== null) {
                    var m = y.dehydrated;
                    m !== null && vr(m);
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
              throw Error(w(163));
          }
        se || (t.flags & 512 && Oi(t));
      } catch (h) {
        K(t, t.return, h);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Ju(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function qu(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            l1(4, t);
          } catch (s) {
            K(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              K(t, l, s);
            }
          }
          var i = t.return;
          try {
            Oi(t);
          } catch (s) {
            K(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Oi(t);
          } catch (s) {
            K(t, o, s);
          }
      }
    } catch (s) {
      K(t, t.return, s);
    }
    if (t === e) {
      j = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (j = u);
      break;
    }
    j = t.return;
  }
}
var p8 = Math.ceil,
  $l = at.ReactCurrentDispatcher,
  Fo = at.ReactCurrentOwner,
  Le = at.ReactCurrentBatchConfig,
  z = 0,
  ne = null,
  J = null,
  le = 0,
  _e = 0,
  vn = Nt(0),
  b = 0,
  Vr = null,
  qt = 0,
  i1 = 0,
  zo = 0,
  cr = null,
  me = null,
  Oo = 0,
  Ln = 1 / 0,
  be = null,
  Dl = !1,
  Ti = null,
  Et = null,
  br = !1,
  Ct = null,
  Al = 0,
  fr = 0,
  $i = null,
  dl = -1,
  pl = 0;
function de() {
  return z & 6 ? Y() : dl !== -1 ? dl : (dl = Y());
}
function jt(e) {
  return e.mode & 1
    ? z & 2 && le !== 0
      ? le & -le
      : Xc.transition !== null
        ? (pl === 0 && (pl = la()), pl)
        : ((e = I),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : fa(e.type))),
          e)
    : 1;
}
function Ze(e, t, n, r) {
  if (50 < fr) throw ((fr = 0), ($i = null), Error(w(185)));
  Lr(e, n, r),
    (!(z & 2) || e !== ne) &&
      (e === ne && (!(z & 2) && (i1 |= n), b === 4 && gt(e, le)),
      Ce(e, r),
      n === 1 && z === 0 && !(t.mode & 1) && ((Ln = Y() + 500), t1 && Lt()));
}
function Ce(e, t) {
  var n = e.callbackNode;
  X2(e, t);
  var r = kl(e, e === ne ? le : 0);
  if (r === 0)
    n !== null && uu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && uu(n), t === 1))
      e.tag === 0 ? Yc(bu.bind(null, e)) : Ha(bu.bind(null, e)),
        Wc(function () {
          !(z & 6) && Lt();
        }),
        (n = null);
    else {
      switch (ia(r)) {
        case 1:
          n = oo;
          break;
        case 4:
          n = na;
          break;
        case 16:
          n = _l;
          break;
        case 536870912:
          n = ra;
          break;
        default:
          n = _l;
      }
      n = P0(n, w0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function w0(e, t) {
  if (((dl = -1), (pl = 0), z & 6)) throw Error(w(327));
  var n = e.callbackNode;
  if (En() && e.callbackNode !== n) return null;
  var r = kl(e, e === ne ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Zl(e, r);
  else {
    t = r;
    var l = z;
    z |= 2;
    var i = _0();
    (ne !== e || le !== t) && ((be = null), (Ln = Y() + 500), Wt(e, t));
    do
      try {
        y8();
        break;
      } catch (u) {
        S0(e, u);
      }
    while (!0);
    xo(),
      ($l.current = i),
      (z = l),
      J !== null ? (t = 0) : ((ne = null), (le = 0), (t = b));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = di(e)), l !== 0 && ((r = l), (t = Di(e, l)))), t === 1)
    )
      throw ((n = Vr), Wt(e, 0), gt(e, r), Ce(e, Y()), n);
    if (t === 6) gt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !h8(l) &&
          ((t = Zl(e, r)),
          t === 2 && ((i = di(e)), i !== 0 && ((r = i), (t = Di(e, i)))),
          t === 1))
      )
        throw ((n = Vr), Wt(e, 0), gt(e, r), Ce(e, Y()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          Dt(e, me, be);
          break;
        case 3:
          if (
            (gt(e, r), (r & 130023424) === r && ((t = Oo + 500 - Y()), 10 < t))
          ) {
            if (kl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              de(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = xi(Dt.bind(null, e, me, be), t);
            break;
          }
          Dt(e, me, be);
          break;
        case 4:
          if ((gt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Ae(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Y() - r),
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
                          : 1960 * p8(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = xi(Dt.bind(null, e, me, be), r);
            break;
          }
          Dt(e, me, be);
          break;
        case 5:
          Dt(e, me, be);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return Ce(e, Y()), e.callbackNode === n ? w0.bind(null, e) : null;
}
function Di(e, t) {
  var n = cr;
  return (
    e.current.memoizedState.isDehydrated && (Wt(e, t).flags |= 256),
    (e = Zl(e, t)),
    e !== 2 && ((t = me), (me = n), t !== null && Ai(t)),
    e
  );
}
function Ai(e) {
  me === null ? (me = e) : me.push.apply(me, e);
}
function h8(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Be(i(), l)) return !1;
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
function gt(e, t) {
  for (
    t &= ~zo,
      t &= ~i1,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ae(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function bu(e) {
  if (z & 6) throw Error(w(327));
  En();
  var t = kl(e, 0);
  if (!(t & 1)) return Ce(e, Y()), null;
  var n = Zl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = di(e);
    r !== 0 && ((t = r), (n = Di(e, r)));
  }
  if (n === 1) throw ((n = Vr), Wt(e, 0), gt(e, t), Ce(e, Y()), n);
  if (n === 6) throw Error(w(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Dt(e, me, be),
    Ce(e, Y()),
    null
  );
}
function Io(e, t) {
  var n = z;
  z |= 1;
  try {
    return e(t);
  } finally {
    (z = n), z === 0 && ((Ln = Y() + 500), t1 && Lt());
  }
}
function bt(e) {
  Ct !== null && Ct.tag === 0 && !(z & 6) && En();
  var t = z;
  z |= 1;
  var n = Le.transition,
    r = I;
  try {
    if (((Le.transition = null), (I = 1), e)) return e();
  } finally {
    (I = r), (Le.transition = n), (z = t), !(z & 6) && Lt();
  }
}
function Ro() {
  (_e = vn.current), U(vn);
}
function Wt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Bc(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n;
      switch ((go(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Vl();
          break;
        case 3:
          Hn(), U(ge), U(ce), jo();
          break;
        case 5:
          Eo(r);
          break;
        case 4:
          Hn();
          break;
        case 13:
          U(W);
          break;
        case 19:
          U(W);
          break;
        case 10:
          wo(r.type._context);
          break;
        case 22:
        case 23:
          Ro();
      }
      n = n.return;
    }
  if (
    ((ne = e),
    (J = e = Mt(e.current, null)),
    (le = _e = t),
    (b = 0),
    (Vr = null),
    (zo = i1 = qt = 0),
    (me = cr = null),
    Zt !== null)
  ) {
    for (t = 0; t < Zt.length; t++)
      if (((n = Zt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Zt = null;
  }
  return e;
}
function S0(e, t) {
  do {
    var n = J;
    try {
      if ((xo(), (al.current = Tl), Rl)) {
        for (var r = G.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Rl = !1;
      }
      if (
        ((Jt = 0),
        (ee = q = G = null),
        (sr = !1),
        (jr = 0),
        (Fo.current = null),
        n === null || n.return === null)
      ) {
        (b = 1), (Vr = t), (J = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = le),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var f = s,
            y = u,
            m = y.tag;
          if (!(y.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = y.alternate;
            h
              ? ((y.updateQueue = h.updateQueue),
                (y.memoizedState = h.memoizedState),
                (y.lanes = h.lanes))
              : ((y.updateQueue = null), (y.memoizedState = null));
          }
          var v = Du(o);
          if (v !== null) {
            (v.flags &= -257),
              Au(v, o, u, i, t),
              v.mode & 1 && $u(i, f, t),
              (t = v),
              (s = f);
            var C = t.updateQueue;
            if (C === null) {
              var S = new Set();
              S.add(s), (t.updateQueue = S);
            } else C.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              $u(i, f, t), To();
              break e;
            }
            s = Error(w(426));
          }
        } else if (B && u.mode & 1) {
          var N = Du(o);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256),
              Au(N, o, u, i, t),
              vo(Nn(s, u));
            break e;
          }
        }
        (i = s = Nn(s, u)),
          b !== 4 && (b = 2),
          cr === null ? (cr = [i]) : cr.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var d = i0(i, s, t);
              Fu(i, d);
              break e;
            case 1:
              u = s;
              var c = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (Et === null || !Et.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = o0(i, u, t);
                Fu(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      E0(n);
    } catch (k) {
      (t = k), J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function _0() {
  var e = $l.current;
  return ($l.current = Tl), e === null ? Tl : e;
}
function To() {
  (b === 0 || b === 3 || b === 2) && (b = 4),
    ne === null || (!(qt & 268435455) && !(i1 & 268435455)) || gt(ne, le);
}
function Zl(e, t) {
  var n = z;
  z |= 2;
  var r = _0();
  (ne !== e || le !== t) && ((be = null), Wt(e, t));
  do
    try {
      m8();
      break;
    } catch (l) {
      S0(e, l);
    }
  while (!0);
  if ((xo(), (z = n), ($l.current = r), J !== null)) throw Error(w(261));
  return (ne = null), (le = 0), b;
}
function m8() {
  for (; J !== null; ) k0(J);
}
function y8() {
  for (; J !== null && !A2(); ) k0(J);
}
function k0(e) {
  var t = M0(e.alternate, e, _e);
  (e.memoizedProps = e.pendingProps),
    t === null ? E0(e) : (J = t),
    (Fo.current = null);
}
function E0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = a8(n, t)), n !== null)) {
        (n.flags &= 32767), (J = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (b = 6), (J = null);
        return;
      }
    } else if (((n = s8(n, t, _e)), n !== null)) {
      J = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  b === 0 && (b = 5);
}
function Dt(e, t, n) {
  var r = I,
    l = Le.transition;
  try {
    (Le.transition = null), (I = 1), g8(e, t, n, r);
  } finally {
    (Le.transition = l), (I = r);
  }
  return null;
}
function g8(e, t, n, r) {
  do En();
  while (Ct !== null);
  if (z & 6) throw Error(w(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(w(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (J2(e, i),
    e === ne && ((J = ne = null), (le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      br ||
      ((br = !0),
      P0(_l, function () {
        return En(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Le.transition), (Le.transition = null);
    var o = I;
    I = 1;
    var u = z;
    (z |= 4),
      (Fo.current = null),
      f8(e, n),
      C0(n, e),
      Rc(vi),
      (El = !!gi),
      (vi = gi = null),
      (e.current = n),
      d8(n),
      Z2(),
      (z = u),
      (I = o),
      (Le.transition = i);
  } else e.current = n;
  if (
    (br && ((br = !1), (Ct = e), (Al = l)),
    (i = e.pendingLanes),
    i === 0 && (Et = null),
    W2(n.stateNode),
    Ce(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Dl) throw ((Dl = !1), (e = Ti), (Ti = null), e);
  return (
    Al & 1 && e.tag !== 0 && En(),
    (i = e.pendingLanes),
    i & 1 ? (e === $i ? fr++ : ((fr = 0), ($i = e))) : (fr = 0),
    Lt(),
    null
  );
}
function En() {
  if (Ct !== null) {
    var e = ia(Al),
      t = Le.transition,
      n = I;
    try {
      if (((Le.transition = null), (I = 16 > e ? 16 : e), Ct === null))
        var r = !1;
      else {
        if (((e = Ct), (Ct = null), (Al = 0), z & 6)) throw Error(w(331));
        var l = z;
        for (z |= 4, j = e.current; j !== null; ) {
          var i = j,
            o = i.child;
          if (j.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                for (j = f; j !== null; ) {
                  var y = j;
                  switch (y.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ar(8, y, i);
                  }
                  var m = y.child;
                  if (m !== null) (m.return = y), (j = m);
                  else
                    for (; j !== null; ) {
                      y = j;
                      var h = y.sibling,
                        v = y.return;
                      if ((y0(y), y === f)) {
                        j = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = v), (j = h);
                        break;
                      }
                      j = v;
                    }
                }
              }
              var C = i.alternate;
              if (C !== null) {
                var S = C.child;
                if (S !== null) {
                  C.child = null;
                  do {
                    var N = S.sibling;
                    (S.sibling = null), (S = N);
                  } while (S !== null);
                }
              }
              j = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (j = o);
          else
            e: for (; j !== null; ) {
              if (((i = j), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ar(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                (d.return = i.return), (j = d);
                break e;
              }
              j = i.return;
            }
        }
        var c = e.current;
        for (j = c; j !== null; ) {
          o = j;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (j = p);
          else
            e: for (o = c; j !== null; ) {
              if (((u = j), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      l1(9, u);
                  }
                } catch (k) {
                  K(u, u.return, k);
                }
              if (u === o) {
                j = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (j = g);
                break e;
              }
              j = u.return;
            }
        }
        if (
          ((z = l), Lt(), Ye && typeof Ye.onPostCommitFiberRoot == "function")
        )
          try {
            Ye.onPostCommitFiberRoot(Xl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (I = n), (Le.transition = t);
    }
  }
  return !1;
}
function es(e, t, n) {
  (t = Nn(n, t)),
    (t = i0(e, t, 1)),
    (e = kt(e, t, 1)),
    (t = de()),
    e !== null && (Lr(e, 1, t), Ce(e, t));
}
function K(e, t, n) {
  if (e.tag === 3) es(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        es(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Et === null || !Et.has(r)))
        ) {
          (e = Nn(n, e)),
            (e = o0(t, e, 1)),
            (t = kt(t, e, 1)),
            (e = de()),
            t !== null && (Lr(t, 1, e), Ce(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function v8(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ne === e &&
      (le & n) === n &&
      (b === 4 || (b === 3 && (le & 130023424) === le && 500 > Y() - Oo)
        ? Wt(e, 0)
        : (zo |= n)),
    Ce(e, t);
}
function j0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ur), (Ur <<= 1), !(Ur & 130023424) && (Ur = 4194304))
      : (t = 1));
  var n = de();
  (e = ut(e, t)), e !== null && (Lr(e, t, n), Ce(e, n));
}
function C8(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), j0(e, n);
}
function x8(e, t) {
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
      throw Error(w(314));
  }
  r !== null && r.delete(t), j0(e, n);
}
var M0;
M0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ge.current) ye = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ye = !1), u8(e, t, n);
      ye = !!(e.flags & 131072);
    }
  else (ye = !1), B && t.flags & 1048576 && Na(t, Ll, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      fl(e, t), (e = t.pendingProps);
      var l = Mn(t, ce.current);
      kn(t, n), (l = Po(null, t, r, e, l, n));
      var i = Vo();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ve(r) ? ((i = !0), Hl(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            _o(t),
            (l.updater = r1),
            (t.stateNode = l),
            (l._reactInternals = t),
            Mi(t, r, e, n),
            (t = Hi(null, t, r, !0, i, n)))
          : ((t.tag = 0), B && i && yo(t), fe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (fl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = S8(r)),
          (e = Te(r, e)),
          l)
        ) {
          case 0:
            t = Vi(null, t, r, e, n);
            break e;
          case 1:
            t = Bu(null, t, r, e, n);
            break e;
          case 11:
            t = Zu(null, t, r, e, n);
            break e;
          case 14:
            t = Uu(null, t, r, Te(r.type, e), n);
            break e;
        }
        throw Error(w(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Vi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Bu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((c0(t), e === null)) throw Error(w(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Ra(e, t),
          Ol(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = Nn(Error(w(423)), t)), (t = Wu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Nn(Error(w(424)), t)), (t = Wu(e, t, r, n, l));
            break e;
          } else
            for (
              ke = _t(t.stateNode.containerInfo.firstChild),
                Ee = t,
                B = !0,
                De = null,
                n = Oa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Pn(), r === l)) {
            t = st(e, t, n);
            break e;
          }
          fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ta(t),
        e === null && ki(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Ci(r, l) ? (o = null) : i !== null && Ci(r, i) && (t.flags |= 32),
        a0(e, t),
        fe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && ki(t), null;
    case 13:
      return f0(e, t, n);
    case 4:
      return (
        ko(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Vn(t, null, r, n)) : fe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Zu(e, t, r, l, n)
      );
    case 7:
      return fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          D(Fl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Be(i.value, o)) {
            if (i.children === l.children && !ge.current) {
              t = st(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = lt(-1, n & -n)), (s.tag = 2);
                      var f = i.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var y = f.pending;
                        y === null
                          ? (s.next = s)
                          : ((s.next = y.next), (y.next = s)),
                          (f.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Ei(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(w(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Ei(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        fe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        kn(t, n),
        (l = Fe(l)),
        (r = r(l)),
        (t.flags |= 1),
        fe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Te(r, t.pendingProps)),
        (l = Te(r.type, l)),
        Uu(e, t, r, l, n)
      );
    case 15:
      return u0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        fl(e, t),
        (t.tag = 1),
        ve(r) ? ((e = !0), Hl(t)) : (e = !1),
        kn(t, n),
        l0(t, r, l),
        Mi(t, r, l, n),
        Hi(null, t, r, !0, e, n)
      );
    case 19:
      return d0(e, t, n);
    case 22:
      return s0(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function P0(e, t) {
  return ta(e, t);
}
function w8(e, t, n, r) {
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
function Ne(e, t, n, r) {
  return new w8(e, t, n, r);
}
function $o(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function S8(e) {
  if (typeof e == "function") return $o(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ro)) return 11;
    if (e === lo) return 14;
  }
  return 2;
}
function Mt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ne(e.tag, t, e.key, e.mode)),
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
function hl(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) $o(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case sn:
        return Gt(n.children, l, i, t);
      case no:
        (o = 8), (l |= 8);
        break;
      case J1:
        return (
          (e = Ne(12, n, t, l | 2)), (e.elementType = J1), (e.lanes = i), e
        );
      case q1:
        return (e = Ne(13, n, t, l)), (e.elementType = q1), (e.lanes = i), e;
      case b1:
        return (e = Ne(19, n, t, l)), (e.elementType = b1), (e.lanes = i), e;
      case Ts:
        return o1(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Is:
              o = 10;
              break e;
            case Rs:
              o = 9;
              break e;
            case ro:
              o = 11;
              break e;
            case lo:
              o = 14;
              break e;
            case ht:
              (o = 16), (r = null);
              break e;
          }
        throw Error(w(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ne(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Gt(e, t, n, r) {
  return (e = Ne(7, e, r, t)), (e.lanes = n), e;
}
function o1(e, t, n, r) {
  return (
    (e = Ne(22, e, r, t)),
    (e.elementType = Ts),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function U1(e, t, n) {
  return (e = Ne(6, e, null, t)), (e.lanes = n), e;
}
function B1(e, t, n) {
  return (
    (t = Ne(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function _8(e, t, n, r, l) {
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
    (this.eventTimes = k1(0)),
    (this.expirationTimes = k1(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = k1(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Do(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new _8(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ne(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    _o(i),
    e
  );
}
function k8(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: un,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function V0(e) {
  if (!e) return Vt;
  e = e._reactInternals;
  e: {
    if (rn(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ve(n)) return Va(e, n, t);
  }
  return t;
}
function H0(e, t, n, r, l, i, o, u, s) {
  return (
    (e = Do(n, r, !0, e, l, i, o, u, s)),
    (e.context = V0(null)),
    (n = e.current),
    (r = de()),
    (l = jt(n)),
    (i = lt(r, l)),
    (i.callback = t ?? null),
    kt(n, i, l),
    (e.current.lanes = l),
    Lr(e, l, r),
    Ce(e, r),
    e
  );
}
function u1(e, t, n, r) {
  var l = t.current,
    i = de(),
    o = jt(l);
  return (
    (n = V0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = lt(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = kt(l, t, o)),
    e !== null && (Ze(e, l, o, i), sl(e, l, o)),
    o
  );
}
function Ul(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ts(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ao(e, t) {
  ts(e, t), (e = e.alternate) && ts(e, t);
}
function E8() {
  return null;
}
var N0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Zo(e) {
  this._internalRoot = e;
}
s1.prototype.render = Zo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  u1(e, t, null, null);
};
s1.prototype.unmount = Zo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    bt(function () {
      u1(null, e, null, null);
    }),
      (t[ot] = null);
  }
};
function s1(e) {
  this._internalRoot = e;
}
s1.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = sa();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < yt.length && t !== 0 && t < yt[n].priority; n++);
    yt.splice(n, 0, e), n === 0 && ca(e);
  }
};
function Uo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function a1(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ns() {}
function j8(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var f = Ul(o);
        i.call(f);
      };
    }
    var o = H0(t, r, e, 0, null, !1, !1, "", ns);
    return (
      (e._reactRootContainer = o),
      (e[ot] = o.current),
      wr(e.nodeType === 8 ? e.parentNode : e),
      bt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var f = Ul(s);
      u.call(f);
    };
  }
  var s = Do(e, 0, !1, null, null, !1, !1, "", ns);
  return (
    (e._reactRootContainer = s),
    (e[ot] = s.current),
    wr(e.nodeType === 8 ? e.parentNode : e),
    bt(function () {
      u1(t, s, n, r);
    }),
    s
  );
}
function c1(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = Ul(o);
        u.call(s);
      };
    }
    u1(t, o, e, l);
  } else o = j8(n, t, e, l, r);
  return Ul(o);
}
oa = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = er(t.pendingLanes);
        n !== 0 &&
          (uo(t, n | 1), Ce(t, Y()), !(z & 6) && ((Ln = Y() + 500), Lt()));
      }
      break;
    case 13:
      bt(function () {
        var r = ut(e, 1);
        if (r !== null) {
          var l = de();
          Ze(r, e, 1, l);
        }
      }),
        Ao(e, 1);
  }
};
so = function (e) {
  if (e.tag === 13) {
    var t = ut(e, 134217728);
    if (t !== null) {
      var n = de();
      Ze(t, e, 134217728, n);
    }
    Ao(e, 134217728);
  }
};
ua = function (e) {
  if (e.tag === 13) {
    var t = jt(e),
      n = ut(e, t);
    if (n !== null) {
      var r = de();
      Ze(n, e, t, r);
    }
    Ao(e, t);
  }
};
sa = function () {
  return I;
};
aa = function (e, t) {
  var n = I;
  try {
    return (I = e), t();
  } finally {
    I = n;
  }
};
ai = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ni(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = e1(r);
            if (!l) throw Error(w(90));
            Ds(r), ni(r, l);
          }
        }
      }
      break;
    case "textarea":
      Zs(e, n);
      break;
    case "select":
      (t = n.value), t != null && xn(e, !!n.multiple, t, !1);
  }
};
Ys = Io;
Xs = bt;
var M8 = { usingClientEntryPoint: !1, Events: [zr, dn, e1, Qs, Ks, Io] },
  Jn = {
    findFiberByHostInstance: At,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  P8 = {
    bundleType: Jn.bundleType,
    version: Jn.version,
    rendererPackageName: Jn.rendererPackageName,
    rendererConfig: Jn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: at.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = bs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Jn.findFiberByHostInstance || E8,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var el = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!el.isDisabled && el.supportsFiber)
    try {
      (Xl = el.inject(P8)), (Ye = el);
    } catch {}
}
Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M8;
Me.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Uo(t)) throw Error(w(200));
  return k8(e, t, null, n);
};
Me.createRoot = function (e, t) {
  if (!Uo(e)) throw Error(w(299));
  var n = !1,
    r = "",
    l = N0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Do(e, 1, !1, null, null, n, !1, r, l)),
    (e[ot] = t.current),
    wr(e.nodeType === 8 ? e.parentNode : e),
    new Zo(t)
  );
};
Me.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(w(188))
      : ((e = Object.keys(e).join(",")), Error(w(268, e)));
  return (e = bs(t)), (e = e === null ? null : e.stateNode), e;
};
Me.flushSync = function (e) {
  return bt(e);
};
Me.hydrate = function (e, t, n) {
  if (!a1(t)) throw Error(w(200));
  return c1(null, e, t, !0, n);
};
Me.hydrateRoot = function (e, t, n) {
  if (!Uo(e)) throw Error(w(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = N0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = H0(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[ot] = t.current),
    wr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new s1(t);
};
Me.render = function (e, t, n) {
  if (!a1(t)) throw Error(w(200));
  return c1(null, e, t, !1, n);
};
Me.unmountComponentAtNode = function (e) {
  if (!a1(e)) throw Error(w(40));
  return e._reactRootContainer
    ? (bt(function () {
        c1(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ot] = null);
        });
      }),
      !0)
    : !1;
};
Me.unstable_batchedUpdates = Io;
Me.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!a1(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return c1(e, t, n, !1, r);
};
Me.version = "18.3.1-next-f1338f8080-20240426";
function L0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L0);
    } catch (e) {
      console.error(e);
    }
}
L0(), (Ls.exports = Me);
var V8 = Ls.exports,
  F0,
  rs = V8;
(F0 = rs.createRoot), rs.hydrateRoot;
var ae = function () {
  return (
    (ae =
      Object.assign ||
      function (t) {
        for (var n, r = 1, l = arguments.length; r < l; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    ae.apply(this, arguments)
  );
};
function Bl(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, l = t.length, i; r < l; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var Z = "-ms-",
  dr = "-moz-",
  O = "-webkit-",
  z0 = "comm",
  f1 = "rule",
  Bo = "decl",
  H8 = "@import",
  O0 = "@keyframes",
  N8 = "@layer",
  I0 = Math.abs,
  Wo = String.fromCharCode,
  Zi = Object.assign;
function L8(e, t) {
  return te(e, 0) ^ 45
    ? (((((((t << 2) ^ te(e, 0)) << 2) ^ te(e, 1)) << 2) ^ te(e, 2)) << 2) ^
        te(e, 3)
    : 0;
}
function R0(e) {
  return e.trim();
}
function et(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function H(e, t, n) {
  return e.replace(t, n);
}
function ml(e, t, n) {
  return e.indexOf(t, n);
}
function te(e, t) {
  return e.charCodeAt(t) | 0;
}
function Fn(e, t, n) {
  return e.slice(t, n);
}
function Qe(e) {
  return e.length;
}
function T0(e) {
  return e.length;
}
function nr(e, t) {
  return t.push(e), e;
}
function F8(e, t) {
  return e.map(t).join("");
}
function ls(e, t) {
  return e.filter(function (n) {
    return !et(n, t);
  });
}
var d1 = 1,
  zn = 1,
  $0 = 0,
  Oe = 0,
  X = 0,
  An = "";
function p1(e, t, n, r, l, i, o, u) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: l,
    children: i,
    line: d1,
    column: zn,
    length: o,
    return: "",
    siblings: u,
  };
}
function pt(e, t) {
  return Zi(
    p1("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t,
  );
}
function on(e) {
  for (; e.root; ) e = pt(e.root, { children: [e] });
  nr(e, e.siblings);
}
function z8() {
  return X;
}
function O8() {
  return (X = Oe > 0 ? te(An, --Oe) : 0), zn--, X === 10 && ((zn = 1), d1--), X;
}
function Ue() {
  return (
    (X = Oe < $0 ? te(An, Oe++) : 0), zn++, X === 10 && ((zn = 1), d1++), X
  );
}
function Qt() {
  return te(An, Oe);
}
function yl() {
  return Oe;
}
function h1(e, t) {
  return Fn(An, e, t);
}
function Ui(e) {
  switch (e) {
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
function I8(e) {
  return (d1 = zn = 1), ($0 = Qe((An = e))), (Oe = 0), [];
}
function R8(e) {
  return (An = ""), e;
}
function W1(e) {
  return R0(h1(Oe - 1, Bi(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function T8(e) {
  for (; (X = Qt()) && X < 33; ) Ue();
  return Ui(e) > 2 || Ui(X) > 3 ? "" : " ";
}
function $8(e, t) {
  for (
    ;
    --t &&
    Ue() &&
    !(X < 48 || X > 102 || (X > 57 && X < 65) || (X > 70 && X < 97));

  );
  return h1(e, yl() + (t < 6 && Qt() == 32 && Ue() == 32));
}
function Bi(e) {
  for (; Ue(); )
    switch (X) {
      case e:
        return Oe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Bi(X);
        break;
      case 40:
        e === 41 && Bi(e);
        break;
      case 92:
        Ue();
        break;
    }
  return Oe;
}
function D8(e, t) {
  for (; Ue() && e + X !== 57; ) if (e + X === 84 && Qt() === 47) break;
  return "/*" + h1(t, Oe - 1) + "*" + Wo(e === 47 ? e : Ue());
}
function A8(e) {
  for (; !Ui(Qt()); ) Ue();
  return h1(e, Oe);
}
function Z8(e) {
  return R8(gl("", null, null, null, [""], (e = I8(e)), 0, [0], e));
}
function gl(e, t, n, r, l, i, o, u, s) {
  for (
    var f = 0,
      y = 0,
      m = o,
      h = 0,
      v = 0,
      C = 0,
      S = 1,
      N = 1,
      d = 1,
      c = 0,
      p = "",
      g = l,
      k = i,
      _ = r,
      x = p;
    N;

  )
    switch (((C = c), (c = Ue()))) {
      case 40:
        if (C != 108 && te(x, m - 1) == 58) {
          ml((x += H(W1(c), "&", "&\f")), "&\f", I0(f ? u[f - 1] : 0)) != -1 &&
            (d = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += W1(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += T8(C);
        break;
      case 92:
        x += $8(yl() - 1, 7);
        continue;
      case 47:
        switch (Qt()) {
          case 42:
          case 47:
            nr(U8(D8(Ue(), yl()), t, n, s), s);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * S:
        u[f++] = Qe(x) * d;
      case 125 * S:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            N = 0;
          case 59 + y:
            d == -1 && (x = H(x, /\f/g, "")),
              v > 0 &&
                Qe(x) - m &&
                nr(
                  v > 32
                    ? os(x + ";", r, n, m - 1, s)
                    : os(H(x, " ", "") + ";", r, n, m - 2, s),
                  s,
                );
            break;
          case 59:
            x += ";";
          default:
            if (
              (nr(
                (_ = is(x, t, n, f, y, l, u, p, (g = []), (k = []), m, i)),
                i,
              ),
              c === 123)
            )
              if (y === 0) gl(x, t, _, _, g, i, m, u, k);
              else
                switch (h === 99 && te(x, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    gl(
                      e,
                      _,
                      _,
                      r && nr(is(e, _, _, 0, 0, l, u, p, l, (g = []), m, k), k),
                      l,
                      k,
                      m,
                      u,
                      r ? g : k,
                    );
                    break;
                  default:
                    gl(x, _, _, _, [""], k, 0, u, k);
                }
        }
        (f = y = v = 0), (S = d = 1), (p = x = ""), (m = o);
        break;
      case 58:
        (m = 1 + Qe(x)), (v = C);
      default:
        if (S < 1) {
          if (c == 123) --S;
          else if (c == 125 && S++ == 0 && O8() == 125) continue;
        }
        switch (((x += Wo(c)), c * S)) {
          case 38:
            d = y > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            (u[f++] = (Qe(x) - 1) * d), (d = 1);
            break;
          case 64:
            Qt() === 45 && (x += W1(Ue())),
              (h = Qt()),
              (y = m = Qe((p = x += A8(yl())))),
              c++;
            break;
          case 45:
            C === 45 && Qe(x) == 2 && (S = 0);
        }
    }
  return i;
}
function is(e, t, n, r, l, i, o, u, s, f, y, m) {
  for (
    var h = l - 1, v = l === 0 ? i : [""], C = T0(v), S = 0, N = 0, d = 0;
    S < r;
    ++S
  )
    for (var c = 0, p = Fn(e, h + 1, (h = I0((N = o[S])))), g = e; c < C; ++c)
      (g = R0(N > 0 ? v[c] + " " + p : H(p, /&\f/g, v[c]))) && (s[d++] = g);
  return p1(e, t, n, l === 0 ? f1 : u, s, f, y, m);
}
function U8(e, t, n, r) {
  return p1(e, t, n, z0, Wo(z8()), Fn(e, 2, -2), 0, r);
}
function os(e, t, n, r, l) {
  return p1(e, t, n, Bo, Fn(e, 0, r), Fn(e, r + 1, -1), r, l);
}
function D0(e, t, n) {
  switch (L8(e, t)) {
    case 5103:
      return O + "print-" + e + e;
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
      return O + e + e;
    case 4789:
      return dr + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return O + e + dr + e + Z + e + e;
    case 5936:
      switch (te(e, t + 11)) {
        case 114:
          return O + e + Z + H(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return O + e + Z + H(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return O + e + Z + H(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return O + e + Z + e + e;
    case 6165:
      return O + e + Z + "flex-" + e + e;
    case 5187:
      return (
        O + e + H(e, /(\w+).+(:[^]+)/, O + "box-$1$2" + Z + "flex-$1$2") + e
      );
    case 5443:
      return (
        O +
        e +
        Z +
        "flex-item-" +
        H(e, /flex-|-self/g, "") +
        (et(e, /flex-|baseline/)
          ? ""
          : Z + "grid-row-" + H(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        O +
        e +
        Z +
        "flex-line-pack" +
        H(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return O + e + Z + H(e, "shrink", "negative") + e;
    case 5292:
      return O + e + Z + H(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        O +
        "box-" +
        H(e, "-grow", "") +
        O +
        e +
        Z +
        H(e, "grow", "positive") +
        e
      );
    case 4554:
      return O + H(e, /([^-])(transform)/g, "$1" + O + "$2") + e;
    case 6187:
      return (
        H(H(H(e, /(zoom-|grab)/, O + "$1"), /(image-set)/, O + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return H(e, /(image-set\([^]*)/, O + "$1$`$1");
    case 4968:
      return (
        H(
          H(e, /(.+:)(flex-)?(.*)/, O + "box-pack:$3" + Z + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        O +
        e +
        e
      );
    case 4200:
      if (!et(e, /flex-|baseline/))
        return Z + "grid-column-align" + Fn(e, t) + e;
      break;
    case 2592:
    case 3360:
      return Z + H(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, l) {
          return (t = l), et(r.props, /grid-\w+-end/);
        })
        ? ~ml(e + (n = n[t].value), "span", 0)
          ? e
          : Z +
            H(e, "-start", "") +
            e +
            Z +
            "grid-row-span:" +
            (~ml(n, "span", 0) ? et(n, /\d+/) : +et(n, /\d+/) - +et(e, /\d+/)) +
            ";"
        : Z + H(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return et(r.props, /grid-\w+-start/);
        })
        ? e
        : Z + H(H(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return H(e, /(.+)-inline(.+)/, O + "$1$2") + e;
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
      if (Qe(e) - 1 - t > 6)
        switch (te(e, t + 1)) {
          case 109:
            if (te(e, t + 4) !== 45) break;
          case 102:
            return (
              H(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  O +
                  "$2-$3$1" +
                  dr +
                  (te(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~ml(e, "stretch", 0)
              ? D0(H(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return H(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, l, i, o, u, s, f) {
          return (
            Z +
            l +
            ":" +
            i +
            f +
            (o ? Z + l + "-span:" + (u ? s : +s - +i) + f : "") +
            e
          );
        },
      );
    case 4949:
      if (te(e, t + 6) === 121) return H(e, ":", ":" + O) + e;
      break;
    case 6444:
      switch (te(e, te(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            H(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                O +
                (te(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                O +
                "$2$3$1" +
                Z +
                "$2box$3",
            ) + e
          );
        case 100:
          return H(e, ":", ":" + Z) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return H(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Wl(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function B8(e, t, n, r) {
  switch (e.type) {
    case N8:
      if (e.children.length) break;
    case H8:
    case Bo:
      return (e.return = e.return || e.value);
    case z0:
      return "";
    case O0:
      return (e.return = e.value + "{" + Wl(e.children, r) + "}");
    case f1:
      if (!Qe((e.value = e.props.join(",")))) return "";
  }
  return Qe((n = Wl(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function W8(e) {
  var t = T0(e);
  return function (n, r, l, i) {
    for (var o = "", u = 0; u < t; u++) o += e[u](n, r, l, i) || "";
    return o;
  };
}
function G8(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Q8(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Bo:
        e.return = D0(e.value, e.length, n);
        return;
      case O0:
        return Wl([pt(e, { value: H(e.value, "@", "@" + O) })], r);
      case f1:
        if (e.length)
          return F8((n = e.props), function (l) {
            switch (et(l, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                on(pt(e, { props: [H(l, /:(read-\w+)/, ":" + dr + "$1")] })),
                  on(pt(e, { props: [l] })),
                  Zi(e, { props: ls(n, r) });
                break;
              case "::placeholder":
                on(
                  pt(e, { props: [H(l, /:(plac\w+)/, ":" + O + "input-$1")] }),
                ),
                  on(pt(e, { props: [H(l, /:(plac\w+)/, ":" + dr + "$1")] })),
                  on(pt(e, { props: [H(l, /:(plac\w+)/, Z + "input-$1")] })),
                  on(pt(e, { props: [l] })),
                  Zi(e, { props: ls(n, r) });
                break;
            }
            return "";
          });
    }
}
var K8 = {
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
  Se = {},
  On =
    (typeof process < "u" &&
      Se !== void 0 &&
      (Se.REACT_APP_SC_ATTR || Se.SC_ATTR)) ||
    "data-styled",
  A0 = "active",
  Z0 = "data-styled-version",
  m1 = "6.1.17",
  Go = `/*!sc*/
`,
  Gl = typeof window < "u" && "HTMLElement" in window,
  Y8 = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
        Se !== void 0 &&
        Se.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
        Se.REACT_APP_SC_DISABLE_SPEEDY !== ""
      ? Se.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
        Se.REACT_APP_SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        Se !== void 0 &&
        Se.SC_DISABLE_SPEEDY !== void 0 &&
        Se.SC_DISABLE_SPEEDY !== "" &&
        Se.SC_DISABLE_SPEEDY !== "false" &&
        Se.SC_DISABLE_SPEEDY),
  y1 = Object.freeze([]),
  In = Object.freeze({});
function X8(e, t, n) {
  return (
    n === void 0 && (n = In), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var U0 = new Set([
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
  J8 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  q8 = /(^-|-$)/g;
function us(e) {
  return e.replace(J8, "-").replace(q8, "");
}
var b8 = /(a)(d)/gi,
  tl = 52,
  ss = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Wi(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > tl; t = (t / tl) | 0) n = ss(t % tl) + n;
  return (ss(t % tl) + n).replace(b8, "$1-$2");
}
var G1,
  B0 = 5381,
  Cn = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  W0 = function (e) {
    return Cn(B0, e);
  };
function e4(e) {
  return Wi(W0(e) >>> 0);
}
function t4(e) {
  return e.displayName || e.name || "Component";
}
function Q1(e) {
  return typeof e == "string" && !0;
}
var G0 = typeof Symbol == "function" && Symbol.for,
  Q0 = G0 ? Symbol.for("react.memo") : 60115,
  n4 = G0 ? Symbol.for("react.forward_ref") : 60112,
  r4 = {
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
  l4 = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  K0 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  i4 =
    (((G1 = {})[n4] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (G1[Q0] = K0),
    G1);
function as(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Q0
    ? K0
    : "$$typeof" in e
      ? i4[e.$$typeof]
      : r4;
  var t;
}
var o4 = Object.defineProperty,
  u4 = Object.getOwnPropertyNames,
  cs = Object.getOwnPropertySymbols,
  s4 = Object.getOwnPropertyDescriptor,
  a4 = Object.getPrototypeOf,
  fs = Object.prototype;
function Y0(e, t, n) {
  if (typeof t != "string") {
    if (fs) {
      var r = a4(t);
      r && r !== fs && Y0(e, r, n);
    }
    var l = u4(t);
    cs && (l = l.concat(cs(t)));
    for (var i = as(e), o = as(t), u = 0; u < l.length; ++u) {
      var s = l[u];
      if (!(s in l4 || (n && n[s]) || (o && s in o) || (i && s in i))) {
        var f = s4(t, s);
        try {
          o4(e, s, f);
        } catch {}
      }
    }
  }
  return e;
}
function en(e) {
  return typeof e == "function";
}
function Qo(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Bt(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function ds(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Hr(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function Gi(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !Hr(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = Gi(e[r], t[r]);
  else if (Hr(t)) for (var r in t) e[r] = Gi(e[r], t[r]);
  return e;
}
function Ko(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function tn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""),
  );
}
var c4 = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, l = r.length, i = l; t >= i; )
            if ((i <<= 1) < 0) throw tn(16, "".concat(t));
          (this.groupSizes = new Uint32Array(i)),
            this.groupSizes.set(r),
            (this.length = i);
          for (var o = l; o < i; o++) this.groupSizes[o] = 0;
        }
        for (
          var u = this.indexOfGroup(t + 1), s = ((o = 0), n.length);
          o < s;
          o++
        )
          this.tag.insertRule(u, n[o]) && (this.groupSizes[t]++, u++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            l = r + n;
          this.groupSizes[t] = 0;
          for (var i = r; i < l; i++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            l = this.indexOfGroup(t),
            i = l + r,
            o = l;
          o < i;
          o++
        )
          n += "".concat(this.tag.getRule(o)).concat(Go);
        return n;
      }),
      e
    );
  })(),
  vl = new Map(),
  Ql = new Map(),
  Cl = 1,
  nl = function (e) {
    if (vl.has(e)) return vl.get(e);
    for (; Ql.has(Cl); ) Cl++;
    var t = Cl++;
    return vl.set(e, t), Ql.set(t, e), t;
  },
  f4 = function (e, t) {
    (Cl = t + 1), vl.set(e, t), Ql.set(t, e);
  },
  d4 = "style[".concat(On, "][").concat(Z0, '="').concat(m1, '"]'),
  p4 = new RegExp(
    "^".concat(On, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  ),
  h4 = function (e, t, n) {
    for (var r, l = n.split(","), i = 0, o = l.length; i < o; i++)
      (r = l[i]) && e.registerName(t, r);
  },
  m4 = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Go),
        l = [],
        i = 0,
        o = r.length;
      i < o;
      i++
    ) {
      var u = r[i].trim();
      if (u) {
        var s = u.match(p4);
        if (s) {
          var f = 0 | parseInt(s[1], 10),
            y = s[2];
          f !== 0 && (f4(y, f), h4(e, y, s[3]), e.getTag().insertRules(f, l)),
            (l.length = 0);
        } else l.push(u);
      }
    }
  },
  ps = function (e) {
    for (
      var t = document.querySelectorAll(d4), n = 0, r = t.length;
      n < r;
      n++
    ) {
      var l = t[n];
      l &&
        l.getAttribute(On) !== A0 &&
        (m4(e, l), l.parentNode && l.parentNode.removeChild(l));
    }
  };
function y4() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var X0 = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      l = (function (u) {
        var s = Array.from(u.querySelectorAll("style[".concat(On, "]")));
        return s[s.length - 1];
      })(n),
      i = l !== void 0 ? l.nextSibling : null;
    r.setAttribute(On, A0), r.setAttribute(Z0, m1);
    var o = y4();
    return o && r.setAttribute("nonce", o), n.insertBefore(r, i), r;
  },
  g4 = (function () {
    function e(t) {
      (this.element = X0(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, l = 0, i = r.length; l < i; l++) {
            var o = r[l];
            if (o.ownerNode === n) return o;
          }
          throw tn(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  v4 = (function () {
    function e(t) {
      (this.element = X0(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  C4 = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  hs = Gl,
  x4 = { isServer: !Gl, useCSSOMInjection: !Y8 },
  J0 = (function () {
    function e(t, n, r) {
      t === void 0 && (t = In), n === void 0 && (n = {});
      var l = this;
      (this.options = ae(ae({}, x4), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server && Gl && hs && ((hs = !1), ps(this)),
        Ko(this, function () {
          return (function (i) {
            for (
              var o = i.getTag(),
                u = o.length,
                s = "",
                f = function (m) {
                  var h = (function (d) {
                    return Ql.get(d);
                  })(m);
                  if (h === void 0) return "continue";
                  var v = i.names.get(h),
                    C = o.getGroup(m);
                  if (v === void 0 || !v.size || C.length === 0)
                    return "continue";
                  var S = ""
                      .concat(On, ".g")
                      .concat(m, '[id="')
                      .concat(h, '"]'),
                    N = "";
                  v !== void 0 &&
                    v.forEach(function (d) {
                      d.length > 0 && (N += "".concat(d, ","));
                    }),
                    (s += ""
                      .concat(C)
                      .concat(S, '{content:"')
                      .concat(N, '"}')
                      .concat(Go));
                },
                y = 0;
              y < u;
              y++
            )
              f(y);
            return s;
          })(l);
        });
    }
    return (
      (e.registerId = function (t) {
        return nl(t);
      }),
      (e.prototype.rehydrate = function () {
        !this.server && Gl && ps(this);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            ae(ae({}, this.options), t),
            this.gs,
            (n && this.names) || void 0,
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                l = n.target;
              return n.isServer ? new C4(l) : r ? new g4(l) : new v4(l);
            })(this.options)),
            new c4(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((nl(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(nl(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(nl(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  w4 = /&/g,
  S4 = /^\s*\/\/.*$/gm;
function q0(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = q0(n.children, t)),
      n
    );
  });
}
function _4(e) {
  var t,
    n,
    r,
    l = In,
    i = l.options,
    o = i === void 0 ? In : i,
    u = l.plugins,
    s = u === void 0 ? y1 : u,
    f = function (h, v, C) {
      return C.startsWith(n) && C.endsWith(n) && C.replaceAll(n, "").length > 0
        ? ".".concat(t)
        : h;
    },
    y = s.slice();
  y.push(function (h) {
    h.type === f1 &&
      h.value.includes("&") &&
      (h.props[0] = h.props[0].replace(w4, n).replace(r, f));
  }),
    o.prefix && y.push(Q8),
    y.push(B8);
  var m = function (h, v, C, S) {
    v === void 0 && (v = ""),
      C === void 0 && (C = ""),
      S === void 0 && (S = "&"),
      (t = S),
      (n = v),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var N = h.replace(S4, ""),
      d = Z8(C || v ? "".concat(C, " ").concat(v, " { ").concat(N, " }") : N);
    o.namespace && (d = q0(d, o.namespace));
    var c = [];
    return (
      Wl(
        d,
        W8(
          y.concat(
            G8(function (p) {
              return c.push(p);
            }),
          ),
        ),
      ),
      c
    );
  };
  return (
    (m.hash = s.length
      ? s
          .reduce(function (h, v) {
            return v.name || tn(15), Cn(h, v.name);
          }, B0)
          .toString()
      : ""),
    m
  );
}
var k4 = new J0(),
  Qi = _4(),
  b0 = Je.createContext({
    shouldForwardProp: void 0,
    styleSheet: k4,
    stylis: Qi,
  });
b0.Consumer;
Je.createContext(void 0);
function ms() {
  return Tn.useContext(b0);
}
var E4 = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (l, i) {
        i === void 0 && (i = Qi);
        var o = r.name + i.hash;
        l.hasNameForId(r.id, o) ||
          l.insertRules(r.id, o, i(r.rules, o, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        Ko(this, function () {
          throw tn(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Qi), this.name + t.hash;
      }),
      e
    );
  })(),
  j4 = function (e) {
    return e >= "A" && e <= "Z";
  };
function ys(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    j4(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var e2 = function (e) {
    return e == null || e === !1 || e === "";
  },
  t2 = function (e) {
    var t,
      n,
      r = [];
    for (var l in e) {
      var i = e[l];
      e.hasOwnProperty(l) &&
        !e2(i) &&
        ((Array.isArray(i) && i.isCss) || en(i)
          ? r.push("".concat(ys(l), ":"), i, ";")
          : Hr(i)
            ? r.push.apply(
                r,
                Bl(Bl(["".concat(l, " {")], t2(i), !1), ["}"], !1),
              )
            : r.push(
                ""
                  .concat(ys(l), ": ")
                  .concat(
                    ((t = l),
                    (n = i) == null || typeof n == "boolean" || n === ""
                      ? ""
                      : typeof n != "number" ||
                          n === 0 ||
                          t in K8 ||
                          t.startsWith("--")
                        ? String(n).trim()
                        : "".concat(n, "px")),
                    ";",
                  ),
              ));
    }
    return r;
  };
function Kt(e, t, n, r) {
  if (e2(e)) return [];
  if (Qo(e)) return [".".concat(e.styledComponentId)];
  if (en(e)) {
    if (!en((i = e)) || (i.prototype && i.prototype.isReactComponent) || !t)
      return [e];
    var l = e(t);
    return Kt(l, t, n, r);
  }
  var i;
  return e instanceof E4
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : Hr(e)
      ? t2(e)
      : Array.isArray(e)
        ? Array.prototype.concat.apply(
            y1,
            e.map(function (o) {
              return Kt(o, t, n, r);
            }),
          )
        : [e.toString()];
}
function M4(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (en(n) && !Qo(n)) return !1;
  }
  return !0;
}
var P4 = W0(m1),
  V4 = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && M4(t)),
        (this.componentId = n),
        (this.baseHash = Cn(P4, n)),
        (this.baseStyle = r),
        J0.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var l = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            l = Bt(l, this.staticRulesId);
          else {
            var i = ds(Kt(this.rules, t, n, r)),
              o = Wi(Cn(this.baseHash, i) >>> 0);
            if (!n.hasNameForId(this.componentId, o)) {
              var u = r(i, ".".concat(o), void 0, this.componentId);
              n.insertRules(this.componentId, o, u);
            }
            (l = Bt(l, o)), (this.staticRulesId = o);
          }
        else {
          for (
            var s = Cn(this.baseHash, r.hash), f = "", y = 0;
            y < this.rules.length;
            y++
          ) {
            var m = this.rules[y];
            if (typeof m == "string") f += m;
            else if (m) {
              var h = ds(Kt(m, t, n, r));
              (s = Cn(s, h + y)), (f += h);
            }
          }
          if (f) {
            var v = Wi(s >>> 0);
            n.hasNameForId(this.componentId, v) ||
              n.insertRules(
                this.componentId,
                v,
                r(f, ".".concat(v), void 0, this.componentId),
              ),
              (l = Bt(l, v));
          }
        }
        return l;
      }),
      e
    );
  })(),
  Kl = Je.createContext(void 0);
Kl.Consumer;
function H4(e) {
  var t = Je.useContext(Kl),
    n = Tn.useMemo(
      function () {
        return (function (r, l) {
          if (!r) throw tn(14);
          if (en(r)) {
            var i = r(l);
            return i;
          }
          if (Array.isArray(r) || typeof r != "object") throw tn(8);
          return l ? ae(ae({}, l), r) : r;
        })(e.theme, t);
      },
      [e.theme, t],
    );
  return e.children
    ? Je.createElement(Kl.Provider, { value: n }, e.children)
    : null;
}
var K1 = {};
function N4(e, t, n) {
  var r = Qo(e),
    l = e,
    i = !Q1(e),
    o = t.attrs,
    u = o === void 0 ? y1 : o,
    s = t.componentId,
    f =
      s === void 0
        ? (function (g, k) {
            var _ = typeof g != "string" ? "sc" : us(g);
            K1[_] = (K1[_] || 0) + 1;
            var x = "".concat(_, "-").concat(e4(m1 + _ + K1[_]));
            return k ? "".concat(k, "-").concat(x) : x;
          })(t.displayName, t.parentComponentId)
        : s,
    y = t.displayName,
    m =
      y === void 0
        ? (function (g) {
            return Q1(g) ? "styled.".concat(g) : "Styled(".concat(t4(g), ")");
          })(e)
        : y,
    h =
      t.displayName && t.componentId
        ? "".concat(us(t.displayName), "-").concat(t.componentId)
        : t.componentId || f,
    v = r && l.attrs ? l.attrs.concat(u).filter(Boolean) : u,
    C = t.shouldForwardProp;
  if (r && l.shouldForwardProp) {
    var S = l.shouldForwardProp;
    if (t.shouldForwardProp) {
      var N = t.shouldForwardProp;
      C = function (g, k) {
        return S(g, k) && N(g, k);
      };
    } else C = S;
  }
  var d = new V4(n, h, r ? l.componentStyle : void 0);
  function c(g, k) {
    return (function (_, x, M) {
      var $ = _.attrs,
        L = _.componentStyle,
        xe = _.defaultProps,
        zt = _.foldedComponentIds,
        Ot = _.styledComponentId,
        Ir = _.target,
        g1 = Je.useContext(Kl),
        Zn = ms(),
        It = _.shouldForwardProp || Zn.shouldForwardProp,
        E = X8(x, g1, xe) || In,
        P = (function (ct, we, qe) {
          for (
            var Un,
              Tt = ae(ae({}, we), { className: void 0, theme: qe }),
              v1 = 0;
            v1 < ct.length;
            v1 += 1
          ) {
            var Rr = en((Un = ct[v1])) ? Un(Tt) : Un;
            for (var ft in Rr)
              Tt[ft] =
                ft === "className"
                  ? Bt(Tt[ft], Rr[ft])
                  : ft === "style"
                    ? ae(ae({}, Tt[ft]), Rr[ft])
                    : Rr[ft];
          }
          return (
            we.className && (Tt.className = Bt(Tt.className, we.className)), Tt
          );
        })($, x, E),
        V = P.as || Ir,
        R = {};
      for (var T in P)
        P[T] === void 0 ||
          T[0] === "$" ||
          T === "as" ||
          (T === "theme" && P.theme === E) ||
          (T === "forwardedAs"
            ? (R.as = P.forwardedAs)
            : (It && !It(T, V)) || (R[T] = P[T]));
      var Rt = (function (ct, we) {
          var qe = ms(),
            Un = ct.generateAndInjectStyles(we, qe.styleSheet, qe.stylis);
          return Un;
        })(L, P),
        Ie = Bt(zt, Ot);
      return (
        Rt && (Ie += " " + Rt),
        P.className && (Ie += " " + P.className),
        (R[Q1(V) && !U0.has(V) ? "class" : "className"] = Ie),
        M && (R.ref = M),
        Tn.createElement(V, R)
      );
    })(p, g, k);
  }
  c.displayName = m;
  var p = Je.forwardRef(c);
  return (
    (p.attrs = v),
    (p.componentStyle = d),
    (p.displayName = m),
    (p.shouldForwardProp = C),
    (p.foldedComponentIds = r
      ? Bt(l.foldedComponentIds, l.styledComponentId)
      : ""),
    (p.styledComponentId = h),
    (p.target = r ? l.target : e),
    Object.defineProperty(p, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (g) {
        this._foldedDefaultProps = r
          ? (function (k) {
              for (var _ = [], x = 1; x < arguments.length; x++)
                _[x - 1] = arguments[x];
              for (var M = 0, $ = _; M < $.length; M++) Gi(k, $[M], !0);
              return k;
            })({}, l.defaultProps, g)
          : g;
      },
    }),
    Ko(p, function () {
      return ".".concat(p.styledComponentId);
    }),
    i &&
      Y0(p, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    p
  );
}
function gs(e, t) {
  for (var n = [e[0]], r = 0, l = t.length; r < l; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var vs = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function L4(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (en(e) || Hr(e)) return vs(Kt(gs(y1, Bl([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string"
    ? Kt(r)
    : vs(Kt(gs(r, t)));
}
function Ki(e, t, n) {
  if ((n === void 0 && (n = In), !t)) throw tn(1, t);
  var r = function (l) {
    for (var i = [], o = 1; o < arguments.length; o++) i[o - 1] = arguments[o];
    return e(t, n, L4.apply(void 0, Bl([l], i, !1)));
  };
  return (
    (r.attrs = function (l) {
      return Ki(
        e,
        t,
        ae(ae({}, n), {
          attrs: Array.prototype.concat(n.attrs, l).filter(Boolean),
        }),
      );
    }),
    (r.withConfig = function (l) {
      return Ki(e, t, ae(ae({}, n), l));
    }),
    r
  );
}
var n2 = function (e) {
    return Ki(N4, e);
  },
  Ft = n2;
U0.forEach(function (e) {
  Ft[e] = n2(e);
});
const F4 = () =>
    a.jsxs("svg", {
      width: "24",
      height: "22",
      viewBox: "0 0 24 22",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        a.jsx("foreignObject", {
          x: "-7.19998",
          y: "-7.9999",
          width: "38.4",
          height: "37.9998",
          children: a.jsx("div", {
            style: {
              backdropFilter: "blur(4.8px)",
              clipPath: "url(#bgblur_0_9452_35056_clip_path)",
              height: "100%",
              width: "100%",
            },
          }),
        }),
        a.jsxs("g", {
          filter: "url(#filter0_i_9452_35056)",
          "data-figma-bg-blur-radius": "9.6",
          children: [
            a.jsx("path", {
              d: "M12 20.4001C17.3019 20.4001 21.6 16.1916 21.6 11.0001C21.6 5.80863 17.3019 1.6001 12 1.6001C6.69809 1.6001 2.40002 5.80863 2.40002 11.0001C2.40002 16.1916 6.69809 20.4001 12 20.4001Z",
              fill: "#F1F1F1",
              "fill-opacity": "0.1",
            }),
            a.jsx("path", {
              d: "M12 20.4001C17.3019 20.4001 21.6 16.1916 21.6 11.0001C21.6 5.80863 17.3019 1.6001 12 1.6001C6.69809 1.6001 2.40002 5.80863 2.40002 11.0001C2.40002 16.1916 6.69809 20.4001 12 20.4001Z",
              fill: "url(#paint0_linear_9452_35056)",
              "fill-opacity": "0.2",
            }),
            a.jsx("path", {
              d: "M21.36 11.0001C21.36 16.0543 17.1742 20.1601 12 20.1601C6.82585 20.1601 2.64002 16.0543 2.64002 11.0001C2.64002 5.94592 6.82585 1.8401 12 1.8401C17.1742 1.8401 21.36 5.94592 21.36 11.0001Z",
              stroke: "url(#paint1_linear_9452_35056)",
              "stroke-width": "0.48",
            }),
          ],
        }),
        a.jsx("foreignObject", {
          x: "-8.79995",
          y: "-9.6",
          width: "41.6",
          height: "41.2",
          children: a.jsx("div", {
            style: {
              backdropFilter: "blur(4.8px)",
              height: "100%",
              width: "100%",
            },
          }),
        }),
        a.jsx("g", {
          filter: "url(#filter1_i_9452_35056)",
          "data-figma-bg-blur-radius": "9.6",
          children: a.jsx("path", {
            d: "M22.4001 11C22.4001 16.6198 17.7574 21.2 12 21.2C6.24264 21.2 1.60005 16.6198 1.60005 11C1.60005 5.38024 6.24264 0.8 12 0.8C17.7574 0.8 22.4001 5.38024 22.4001 11Z",
            stroke: "url(#paint2_linear_9452_35056)",
            "stroke-width": "1.6",
          }),
        }),
        a.jsx("g", {
          filter: "url(#filter2_dd_9452_35056)",
          children: a.jsx("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M12.6686 6.82097C12.773 6.85076 12.8642 6.91 12.9289 6.99007C12.9936 7.07013 13.0285 7.16686 13.0285 7.26617V9.5995H15.0855C15.1796 9.59946 15.2719 9.62284 15.3523 9.66709C15.4328 9.71133 15.4983 9.77475 15.5418 9.85045C15.5853 9.92614 15.605 10.0112 15.5989 10.0964C15.5929 10.1816 15.5611 10.2636 15.5072 10.3336L11.9075 15.0002C11.8448 15.0817 11.7552 15.1429 11.6515 15.1749C11.5479 15.2069 11.4357 15.2081 11.3313 15.1783C11.2269 15.1484 11.1357 15.0892 11.071 15.009C11.0063 14.9289 10.9714 14.8322 10.9715 14.7328V12.3995H8.91451C8.82044 12.3995 8.72816 12.3762 8.64772 12.3319C8.56728 12.2877 8.50175 12.2243 8.45827 12.1486C8.41478 12.0729 8.39501 11.9878 8.4011 11.9026C8.4072 11.8174 8.43892 11.7354 8.49282 11.6654L12.0926 6.99877C12.1553 6.91747 12.245 6.85644 12.3486 6.82455C12.4522 6.79266 12.5642 6.79157 12.6686 6.82143V6.82097Z",
            fill: "white",
          }),
        }),
        a.jsxs("defs", {
          children: [
            a.jsxs("filter", {
              id: "filter0_i_9452_35056",
              x: "-7.19998",
              y: "-7.9999",
              width: "38.4",
              height: "37.9998",
              filterUnits: "userSpaceOnUse",
              "color-interpolation-filters": "sRGB",
              children: [
                a.jsx("feFlood", {
                  "flood-opacity": "0",
                  result: "BackgroundImageFix",
                }),
                a.jsx("feBlend", {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "BackgroundImageFix",
                  result: "shape",
                }),
                a.jsx("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha",
                }),
                a.jsx("feOffset", { dy: "3.2" }),
                a.jsx("feGaussianBlur", { stdDeviation: "2.4" }),
                a.jsx("feComposite", {
                  in2: "hardAlpha",
                  operator: "arithmetic",
                  k2: "-1",
                  k3: "1",
                }),
                a.jsx("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0",
                }),
                a.jsx("feBlend", {
                  mode: "normal",
                  in2: "shape",
                  result: "effect1_innerShadow_9452_35056",
                }),
              ],
            }),
            a.jsx("clipPath", {
              id: "bgblur_0_9452_35056_clip_path",
              children: a.jsx("path", {
                transform: "translate(7.19998 7.9999)",
                d: "M12 20.4001C17.3019 20.4001 21.6 16.1916 21.6 11.0001C21.6 5.80863 17.3019 1.6001 12 1.6001C6.69809 1.6001 2.40002 5.80863 2.40002 11.0001C2.40002 16.1916 6.69809 20.4001 12 20.4001Z",
              }),
            }),
            a.jsxs("filter", {
              id: "filter1_i_9452_35056",
              x: "-8.79995",
              y: "-9.6",
              width: "41.6",
              height: "41.2",
              filterUnits: "userSpaceOnUse",
              "color-interpolation-filters": "sRGB",
              children: [
                a.jsx("feFlood", {
                  "flood-opacity": "0",
                  result: "BackgroundImageFix",
                }),
                a.jsx("feBlend", {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "BackgroundImageFix",
                  result: "shape",
                }),
                a.jsx("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha",
                }),
                a.jsx("feOffset", { dy: "3.2" }),
                a.jsx("feGaussianBlur", { stdDeviation: "2.4" }),
                a.jsx("feComposite", {
                  in2: "hardAlpha",
                  operator: "arithmetic",
                  k2: "-1",
                  k3: "1",
                }),
                a.jsx("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0",
                }),
                a.jsx("feBlend", {
                  mode: "normal",
                  in2: "shape",
                  result: "effect1_innerShadow_9452_35056",
                }),
              ],
            }),
            a.jsxs("filter", {
              id: "filter2_dd_9452_35056",
              x: "1.60002",
              y: "-0.00019598",
              width: "20.8",
              height: "21.9999",
              filterUnits: "userSpaceOnUse",
              "color-interpolation-filters": "sRGB",
              children: [
                a.jsx("feFlood", {
                  "flood-opacity": "0",
                  result: "BackgroundImageFix",
                }),
                a.jsx("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha",
                }),
                a.jsx("feOffset", {}),
                a.jsx("feGaussianBlur", { stdDeviation: "2.22" }),
                a.jsx("feColorMatrix", {
                  type: "matrix",
                  values:
                    "0 0 0 0 0.187339 0 0 0 0 0.317424 0 0 0 0 0.91463 0 0 0 1 0",
                }),
                a.jsx("feBlend", {
                  mode: "normal",
                  in2: "BackgroundImageFix",
                  result: "effect1_dropShadow_9452_35056",
                }),
                a.jsx("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha",
                }),
                a.jsx("feOffset", {}),
                a.jsx("feGaussianBlur", { stdDeviation: "3.4" }),
                a.jsx("feComposite", { in2: "hardAlpha", operator: "out" }),
                a.jsx("feColorMatrix", {
                  type: "matrix",
                  values:
                    "0 0 0 0 0.188235 0 0 0 0 0.317647 0 0 0 0 0.913725 0 0 0 0.5 0",
                }),
                a.jsx("feBlend", {
                  mode: "normal",
                  in2: "effect1_dropShadow_9452_35056",
                  result: "effect2_dropShadow_9452_35056",
                }),
                a.jsx("feBlend", {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "effect2_dropShadow_9452_35056",
                  result: "shape",
                }),
              ],
            }),
            a.jsxs("linearGradient", {
              id: "paint0_linear_9452_35056",
              x1: "3.20002",
              y1: "5.3601",
              x2: "24.1126",
              y2: "8.32642",
              gradientUnits: "userSpaceOnUse",
              children: [
                a.jsx("stop", { "stop-color": "#5498FF" }),
                a.jsx("stop", { offset: "1", "stop-color": "#8940FF" }),
              ],
            }),
            a.jsxs("linearGradient", {
              id: "paint1_linear_9452_35056",
              x1: "28.7085",
              y1: "-7.47484",
              x2: "32.4731",
              y2: "21.9702",
              gradientUnits: "userSpaceOnUse",
              children: [
                a.jsx("stop", { offset: "0.24238", "stop-color": "#5498FF" }),
                a.jsx("stop", {
                  offset: "1",
                  "stop-color": "#A131F9",
                  "stop-opacity": "0",
                }),
              ],
            }),
            a.jsxs("linearGradient", {
              id: "paint2_linear_9452_35056",
              x1: "31.4932",
              y1: "-10.6196",
              x2: "35.9117",
              y2: "23.834",
              gradientUnits: "userSpaceOnUse",
              children: [
                a.jsx("stop", { offset: "0.24238", "stop-color": "#5498FF" }),
                a.jsx("stop", {
                  offset: "1",
                  "stop-color": "#A131F9",
                  "stop-opacity": "0",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  z4 = () =>
    a.jsxs("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        a.jsx("foreignObject", {
          x: "-3.73842",
          y: "-0.47145",
          width: "21.6779",
          height: "20.2168",
          children: a.jsx("div", {
            style: {
              backdropFilter: "blur(3.68px)",
              clipPath: "url(#bgblur_0_9452_35062_clip_path)",
              height: "100%",
              width: "100%",
            },
          }),
        }),
        a.jsx("g", {
          filter: "url(#filter0_i_9452_35062)",
          "data-figma-bg-blur-radius": "7.3694",
          children: a.jsx("path", {
            d: "M3.67898 11.5003L4.9162 9.42472C5.96476 7.66563 7.89812 6.69481 9.87689 6.93377C10.4213 6.99951 10.7339 7.61093 10.4813 8.11611L8.49356 12.0919C8.36469 12.3497 8.05931 12.4506 7.8107 12.3176C7.01131 11.8899 6.10616 11.7231 5.21389 11.8389L3.98654 11.9982C3.72332 12.0324 3.53935 11.7346 3.67898 11.5003Z",
            fill: "url(#paint0_linear_9452_35062)",
          }),
        }),
        a.jsx("foreignObject", {
          x: "4.29637",
          y: "5.73753",
          width: "20.2171",
          height: "22.043",
          children: a.jsx("div", {
            style: {
              backdropFilter: "blur(3.68px)",
              clipPath: "url(#bgblur_1_9452_35062_clip_path)",
              height: "100%",
              width: "100%",
            },
          }),
        }),
        a.jsx("g", {
          filter: "url(#filter1_i_9452_35062)",
          "data-figma-bg-blur-radius": "7.3694",
          children: a.jsx("path", {
            d: "M12.5416 20.3608L14.6173 19.0584C16.3764 17.9547 17.3472 15.9196 17.1082 13.8366C17.0425 13.2636 16.4311 12.9345 15.9259 13.2004L11.9501 15.2928C11.6923 15.4284 11.5914 15.7499 11.7244 16.0116C12.1521 16.853 12.3189 17.8058 12.2031 18.7451L12.0438 20.037C12.0096 20.3141 12.3074 20.5077 12.5416 20.3608Z",
            fill: "url(#paint1_linear_9452_35062)",
          }),
        }),
        a.jsx("foreignObject", {
          x: "0.135118",
          y: "-3.69459",
          width: "27.6078",
          height: "27.6016",
          children: a.jsx("div", {
            style: {
              backdropFilter: "blur(3.68px)",
              clipPath: "url(#bgblur_2_9452_35062_clip_path)",
              height: "100%",
              width: "100%",
            },
          }),
        }),
        a.jsxs("g", {
          filter: "url(#filter2_i_9452_35062)",
          "data-figma-bg-blur-radius": "7.3694",
          children: [
            a.jsx("path", {
              d: "M16.6235 13.699C13.4328 16.8782 10.7829 17.3455 8.73864 15.3086C6.6944 13.2718 7.16132 10.6335 10.352 7.45433C13.5427 4.27516 17.8593 3.22446 20.2442 3.84462C20.751 6.10573 19.8142 10.5199 16.6235 13.699Z",
              fill: "#F1F1F1",
              "fill-opacity": "0.1",
            }),
            a.jsx("path", {
              d: "M16.6235 13.699C13.4328 16.8782 10.7829 17.3455 8.73864 15.3086C6.6944 13.2718 7.16132 10.6335 10.352 7.45433C13.5427 4.27516 17.8593 3.22446 20.2442 3.84462C20.751 6.10573 19.8142 10.5199 16.6235 13.699Z",
              fill: "url(#paint2_linear_9452_35062)",
              "fill-opacity": "0.2",
            }),
            a.jsx("path", {
              d: "M16.4823 13.5573C14.8989 15.135 13.473 16.0151 12.2125 16.2636C10.9678 16.509 9.85997 16.1436 8.8798 15.167C7.89957 14.1903 7.53282 13.0875 7.77841 11.8487C8.02722 10.5938 8.90969 9.17379 10.4932 7.59601C12.0648 6.03012 13.9139 4.98832 15.6626 4.41476C17.3551 3.85965 18.9374 3.74808 20.0743 4.00893C20.2845 5.09296 20.172 6.66956 19.6299 8.3667C19.0686 10.1239 18.0521 11.9932 16.4823 13.5573Z",
              stroke: "#F1F1F1",
              "stroke-opacity": "0.1",
              "stroke-width": "0.4",
            }),
            a.jsx("path", {
              d: "M16.4823 13.5573C14.8989 15.135 13.473 16.0151 12.2125 16.2636C10.9678 16.509 9.85997 16.1436 8.8798 15.167C7.89957 14.1903 7.53282 13.0875 7.77841 11.8487C8.02722 10.5938 8.90969 9.17379 10.4932 7.59601C12.0648 6.03012 13.9139 4.98832 15.6626 4.41476C17.3551 3.85965 18.9374 3.74808 20.0743 4.00893C20.2845 5.09296 20.172 6.66956 19.6299 8.3667C19.0686 10.1239 18.0521 11.9932 16.4823 13.5573Z",
              stroke: "url(#paint3_linear_9452_35062)",
              "stroke-opacity": "0.2",
              "stroke-width": "0.4",
            }),
          ],
        }),
        a.jsx("foreignObject", {
          x: "-1.97499",
          y: "6.468",
          width: "19.4973",
          height: "19.4326",
          children: a.jsx("div", {
            style: {
              backdropFilter: "blur(3.68px)",
              clipPath: "url(#bgblur_3_9452_35062_clip_path)",
              height: "100%",
              width: "100%",
            },
          }),
        }),
        a.jsx("g", {
          filter: "url(#filter3_i_9452_35062)",
          "data-figma-bg-blur-radius": "7.3694",
          children: a.jsx("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M6.98609 14.3339C6.8924 14.0653 6.70973 13.7393 6.45477 13.8655C6.41747 13.884 6.3825 13.9088 6.35144 13.9398L5.51036 14.7809C5.25508 15.0362 5.45096 15.4716 5.81133 15.45L6.22472 15.4252C6.51538 15.4077 6.72312 15.7018 6.60951 15.9699L5.92931 17.5751C5.7947 17.8928 6.10617 18.2171 6.429 18.0954L8.10417 17.4637C8.37896 17.3601 8.66599 17.584 8.63237 17.8758L8.60737 18.0927C8.56482 18.462 9.01176 18.6779 9.27459 18.4151L10.0506 17.639C10.0817 17.608 10.1065 17.573 10.1249 17.5357C10.2512 17.2807 9.92516 17.0981 9.65652 17.0044C9.11182 16.8144 8.54222 16.4565 8.03809 15.9524C7.53395 15.4482 7.17604 14.8786 6.98609 14.3339Z",
            fill: "url(#paint4_linear_9452_35062)",
          }),
        }),
        a.jsx("circle", {
          cx: "15.7079",
          cy: "8.33403",
          r: "1.6",
          transform: "rotate(45 15.7079 8.33403)",
          fill: "white",
        }),
        a.jsxs("defs", {
          children: [
            a.jsxs("filter", {
              id: "filter0_i_9452_35062",
              x: "-3.73842",
              y: "-0.47145",
              width: "21.6779",
              height: "20.2168",
              filterUnits: "userSpaceOnUse",
              "color-interpolation-filters": "sRGB",
              children: [
                a.jsx("feFlood", {
                  "flood-opacity": "0",
                  result: "BackgroundImageFix",
                }),
                a.jsx("feBlend", {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "BackgroundImageFix",
                  result: "shape",
                }),
                a.jsx("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha",
                }),
                a.jsx("feOffset", { dy: "2.45647" }),
                a.jsx("feGaussianBlur", { stdDeviation: "10.55" }),
                a.jsx("feComposite", {
                  in2: "hardAlpha",
                  operator: "arithmetic",
                  k2: "-1",
                  k3: "1",
                }),
                a.jsx("feColorMatrix", {
                  type: "matrix",
                  values:
                    "0 0 0 0 0.341176 0 0 0 0 0.643137 0 0 0 0 1 0 0 0 0.4 0",
                }),
                a.jsx("feBlend", {
                  mode: "normal",
                  in2: "shape",
                  result: "effect1_innerShadow_9452_35062",
                }),
              ],
            }),
            a.jsx("clipPath", {
              id: "bgblur_0_9452_35062_clip_path",
              children: a.jsx("path", {
                transform: "translate(3.73842 0.47145)",
                d: "M3.67898 11.5003L4.9162 9.42472C5.96476 7.66563 7.89812 6.69481 9.87689 6.93377C10.4213 6.99951 10.7339 7.61093 10.4813 8.11611L8.49356 12.0919C8.36469 12.3497 8.05931 12.4506 7.8107 12.3176C7.01131 11.8899 6.10616 11.7231 5.21389 11.8389L3.98654 11.9982C3.72332 12.0324 3.53935 11.7346 3.67898 11.5003Z",
              }),
            }),
            a.jsxs("filter", {
              id: "filter1_i_9452_35062",
              x: "4.29637",
              y: "5.73753",
              width: "20.2171",
              height: "22.043",
              filterUnits: "userSpaceOnUse",
              "color-interpolation-filters": "sRGB",
              children: [
                a.jsx("feFlood", {
                  "flood-opacity": "0",
                  result: "BackgroundImageFix",
                }),
                a.jsx("feBlend", {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "BackgroundImageFix",
                  result: "shape",
                }),
                a.jsx("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha",
                }),
                a.jsx("feOffset", { dy: "2.45647" }),
                a.jsx("feGaussianBlur", { stdDeviation: "10.55" }),
                a.jsx("feComposite", {
                  in2: "hardAlpha",
                  operator: "arithmetic",
                  k2: "-1",
                  k3: "1",
                }),
                a.jsx("feColorMatrix", {
                  type: "matrix",
                  values:
                    "0 0 0 0 0.341176 0 0 0 0 0.643137 0 0 0 0 1 0 0 0 0.4 0",
                }),
                a.jsx("feBlend", {
                  mode: "normal",
                  in2: "shape",
                  result: "effect1_innerShadow_9452_35062",
                }),
              ],
            }),
            a.jsx("clipPath", {
              id: "bgblur_1_9452_35062_clip_path",
              children: a.jsx("path", {
                transform: "translate(-4.29637 -5.73753)",
                d: "M12.5416 20.3608L14.6173 19.0584C16.3764 17.9547 17.3472 15.9196 17.1082 13.8366C17.0425 13.2636 16.4311 12.9345 15.9259 13.2004L11.9501 15.2928C11.6923 15.4284 11.5914 15.7499 11.7244 16.0116C12.1521 16.853 12.3189 17.8058 12.2031 18.7451L12.0438 20.037C12.0096 20.3141 12.3074 20.5077 12.5416 20.3608Z",
              }),
            }),
            a.jsxs("filter", {
              id: "filter2_i_9452_35062",
              x: "0.135118",
              y: "-3.69459",
              width: "27.6078",
              height: "27.6016",
              filterUnits: "userSpaceOnUse",
              "color-interpolation-filters": "sRGB",
              children: [
                a.jsx("feFlood", {
                  "flood-opacity": "0",
                  result: "BackgroundImageFix",
                }),
                a.jsx("feBlend", {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "BackgroundImageFix",
                  result: "shape",
                }),
                a.jsx("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha",
                }),
                a.jsx("feOffset", { dy: "2.45647" }),
                a.jsx("feGaussianBlur", { stdDeviation: "10.55" }),
                a.jsx("feComposite", {
                  in2: "hardAlpha",
                  operator: "arithmetic",
                  k2: "-1",
                  k3: "1",
                }),
                a.jsx("feColorMatrix", {
                  type: "matrix",
                  values:
                    "0 0 0 0 0.341176 0 0 0 0 0.643137 0 0 0 0 1 0 0 0 0.4 0",
                }),
                a.jsx("feBlend", {
                  mode: "normal",
                  in2: "shape",
                  result: "effect1_innerShadow_9452_35062",
                }),
              ],
            }),
            a.jsx("clipPath", {
              id: "bgblur_2_9452_35062_clip_path",
              children: a.jsx("path", {
                transform: "translate(-0.135118 3.69459)",
                d: "M16.6235 13.699C13.4328 16.8782 10.7829 17.3455 8.73864 15.3086C6.6944 13.2718 7.16132 10.6335 10.352 7.45433C13.5427 4.27516 17.8593 3.22446 20.2442 3.84462C20.751 6.10573 19.8142 10.5199 16.6235 13.699Z",
              }),
            }),
            a.jsxs("filter", {
              id: "filter3_i_9452_35062",
              x: "-1.97499",
              y: "6.468",
              width: "19.4973",
              height: "19.4326",
              filterUnits: "userSpaceOnUse",
              "color-interpolation-filters": "sRGB",
              children: [
                a.jsx("feFlood", {
                  "flood-opacity": "0",
                  result: "BackgroundImageFix",
                }),
                a.jsx("feBlend", {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "BackgroundImageFix",
                  result: "shape",
                }),
                a.jsx("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha",
                }),
                a.jsx("feOffset", { dy: "2.45647" }),
                a.jsx("feGaussianBlur", { stdDeviation: "10.55" }),
                a.jsx("feComposite", {
                  in2: "hardAlpha",
                  operator: "arithmetic",
                  k2: "-1",
                  k3: "1",
                }),
                a.jsx("feColorMatrix", {
                  type: "matrix",
                  values:
                    "0 0 0 0 0.341176 0 0 0 0 0.643137 0 0 0 0 1 0 0 0 0.4 0",
                }),
                a.jsx("feBlend", {
                  mode: "normal",
                  in2: "shape",
                  result: "effect1_innerShadow_9452_35062",
                }),
              ],
            }),
            a.jsx("clipPath", {
              id: "bgblur_3_9452_35062_clip_path",
              children: a.jsx("path", {
                transform: "translate(1.97499 -6.468)",
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M6.98609 14.3339C6.8924 14.0653 6.70973 13.7393 6.45477 13.8655C6.41747 13.884 6.3825 13.9088 6.35144 13.9398L5.51036 14.7809C5.25508 15.0362 5.45096 15.4716 5.81133 15.45L6.22472 15.4252C6.51538 15.4077 6.72312 15.7018 6.60951 15.9699L5.92931 17.5751C5.7947 17.8928 6.10617 18.2171 6.429 18.0954L8.10417 17.4637C8.37896 17.3601 8.66599 17.584 8.63237 17.8758L8.60737 18.0927C8.56482 18.462 9.01176 18.6779 9.27459 18.4151L10.0506 17.639C10.0817 17.608 10.1065 17.573 10.1249 17.5357C10.2512 17.2807 9.92516 17.0981 9.65652 17.0044C9.11182 16.8144 8.54222 16.4565 8.03809 15.9524C7.53395 15.4482 7.17604 14.8786 6.98609 14.3339Z",
              }),
            }),
            a.jsxs("linearGradient", {
              id: "paint0_linear_9452_35062",
              x1: "3.63098",
              y1: "6.89795",
              x2: "11.3898",
              y2: "12.6203",
              gradientUnits: "userSpaceOnUse",
              children: [
                a.jsx("stop", { offset: "0.24238", "stop-color": "#5498FF" }),
                a.jsx("stop", { offset: "1", "stop-color": "#A131F9" }),
              ],
            }),
            a.jsxs("linearGradient", {
              id: "paint1_linear_9452_35062",
              x1: "11.6658",
              y1: "13.1069",
              x2: "19.6084",
              y2: "16.5754",
              gradientUnits: "userSpaceOnUse",
              children: [
                a.jsx("stop", { offset: "0.24238", "stop-color": "#5498FF" }),
                a.jsx("stop", { offset: "1", "stop-color": "#A131F9" }),
              ],
            }),
            a.jsxs("linearGradient", {
              id: "paint2_linear_9452_35062",
              x1: "8.04073",
              y1: "6.24736",
              x2: "22.0688",
              y2: "8.19666",
              gradientUnits: "userSpaceOnUse",
              children: [
                a.jsx("stop", { "stop-color": "#5498FF" }),
                a.jsx("stop", { offset: "1", "stop-color": "#8940FF" }),
              ],
            }),
            a.jsxs("linearGradient", {
              id: "paint3_linear_9452_35062",
              x1: "8.04073",
              y1: "6.24736",
              x2: "22.0688",
              y2: "8.19666",
              gradientUnits: "userSpaceOnUse",
              children: [
                a.jsx("stop", { "stop-color": "#5498FF" }),
                a.jsx("stop", { offset: "1", "stop-color": "#8940FF" }),
              ],
            }),
            a.jsxs("linearGradient", {
              id: "paint4_linear_9452_35062",
              x1: "6.56079",
              y1: "13.7305",
              x2: "6.94018",
              y2: "20.4553",
              gradientUnits: "userSpaceOnUse",
              children: [
                a.jsx("stop", { offset: "0.24238", "stop-color": "#5498FF" }),
                a.jsx("stop", { offset: "1", "stop-color": "#A131F9" }),
              ],
            }),
          ],
        }),
      ],
    }),
  O4 = () =>
    a.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "113",
      height: "24",
      viewBox: "0 0 113 24",
      fill: "none",
      children: [
        a.jsx("path", {
          d: "M35.3051 12.7698V12.4885C35.3051 11.7817 35.0634 11.2407 34.58 10.8656C34.1113 10.4761 33.4961 10.2814 32.7344 10.2814C32.1485 10.2814 31.6871 10.3824 31.3502 10.5843C31.0279 10.7719 30.7203 11.0604 30.4274 11.4499C30.3395 11.5653 30.2443 11.6446 30.1417 11.6879C30.0392 11.7312 29.9001 11.7528 29.7243 11.7528H29.0651C28.904 11.7528 28.7575 11.6951 28.6257 11.5797C28.5085 11.4643 28.4572 11.3273 28.4719 11.1686C28.5158 10.7358 28.7282 10.3103 29.1091 9.89192C29.5046 9.45915 30.0246 9.10573 30.6691 8.83164C31.3136 8.55756 32.002 8.42052 32.7344 8.42052C34.0967 8.42052 35.1952 8.79558 36.0302 9.54571C36.8797 10.2958 37.3045 11.3489 37.3045 12.7049V19.3045C37.3045 19.4632 37.2459 19.6003 37.1288 19.7157C37.0116 19.8311 36.8724 19.8888 36.7113 19.8888H35.8983C35.7372 19.8888 35.5981 19.8311 35.4809 19.7157C35.3637 19.6003 35.3051 19.4632 35.3051 19.3045V18.4174C35.0707 18.9367 34.5727 19.3478 33.811 19.6508C33.0493 19.9537 32.2877 20.1052 31.526 20.1052C30.7789 20.1052 30.1124 19.9753 29.5265 19.7157C28.9406 19.4416 28.4865 19.0737 28.1643 18.6121C27.8567 18.1505 27.7029 17.6312 27.7029 17.0542C27.7029 15.9723 28.113 15.1284 28.9333 14.5225C29.7536 13.9022 30.8448 13.4839 32.2071 13.2675L35.3051 12.7698ZM35.3051 14.5009L32.7124 14.912C31.7603 15.0562 31.0206 15.2943 30.4933 15.626C29.966 15.9434 29.7023 16.3473 29.7023 16.8378C29.7023 17.1984 29.8708 17.523 30.2077 17.8115C30.5446 18.1 31.0572 18.2443 31.7457 18.2443C32.8003 18.2443 33.6572 17.9486 34.3164 17.3571C34.9755 16.7657 35.3051 15.9939 35.3051 15.0418V14.5009Z",
          fill: "#E2E8F0",
        }),
        a.jsx("path", {
          d: "M42.5096 19.3045C42.5096 19.4632 42.451 19.6003 42.3338 19.7157C42.2167 19.8311 42.0775 19.8888 41.9164 19.8888H41.1034C40.9423 19.8888 40.8031 19.8311 40.686 19.7157C40.5688 19.6003 40.5102 19.4632 40.5102 19.3045V5.10987C40.5102 4.95119 40.5688 4.81414 40.686 4.69874C40.8031 4.58334 40.9423 4.52563 41.1034 4.52563H41.9164C42.0775 4.52563 42.2167 4.58334 42.3338 4.69874C42.451 4.81414 42.5096 4.95119 42.5096 5.10987V19.3045Z",
          fill: "#E2E8F0",
        }),
        a.jsx("path", {
          d: "M50.4241 18.2443C51.8889 18.2443 52.8776 17.6817 53.3903 16.5565C53.4928 16.3401 53.5953 16.1886 53.6979 16.1021C53.8004 16.0155 53.9396 15.9723 54.1153 15.9723H54.7745C54.9356 15.9723 55.0748 16.03 55.1919 16.1454C55.3091 16.2463 55.3677 16.369 55.3677 16.5132C55.3677 17.0037 55.17 17.5302 54.7745 18.0928C54.379 18.6554 53.8077 19.1314 53.0607 19.5209C52.3136 19.9104 51.4348 20.1052 50.4241 20.1052C49.3841 20.1052 48.4832 19.8888 47.7215 19.456C46.9599 19.0233 46.3739 18.4318 45.9638 17.6817C45.5537 16.9171 45.3266 16.066 45.2827 15.1284C45.268 14.9553 45.2607 14.6235 45.2607 14.133C45.2607 13.7868 45.268 13.5416 45.2827 13.3973C45.4145 11.9259 45.9199 10.7286 46.7987 9.80536C47.6776 8.88213 48.8861 8.42052 50.4241 8.42052C51.4348 8.42052 52.3063 8.61526 53.0387 9.00475C53.7858 9.37981 54.3497 9.84864 54.7305 10.4112C55.126 10.9594 55.3384 11.4787 55.3677 11.9692C55.3824 12.1279 55.3238 12.2649 55.1919 12.3803C55.0748 12.4957 54.9356 12.5534 54.7745 12.5534H54.1153C53.9396 12.5534 53.8004 12.5101 53.6979 12.4236C53.5953 12.337 53.4928 12.1856 53.3903 11.9692C52.8776 10.844 51.8889 10.2814 50.4241 10.2814C49.6184 10.2814 48.9153 10.5483 48.3148 11.082C47.7142 11.6158 47.37 12.4236 47.2821 13.5055C47.2675 13.6642 47.2601 13.9238 47.2601 14.2845C47.2601 14.6163 47.2675 14.8615 47.2821 15.0202C47.3846 16.1021 47.7289 16.9099 48.3148 17.4437C48.9153 17.9774 49.6184 18.2443 50.4241 18.2443Z",
          fill: "#E2E8F0",
        }),
        a.jsx("path", {
          d: "M68.1484 19.3045C68.1484 19.4632 68.0898 19.6003 67.9726 19.7157C67.8555 19.8311 67.7163 19.8888 67.5552 19.8888H66.7422C66.5811 19.8888 66.4419 19.8311 66.3248 19.7157C66.2076 19.6003 66.149 19.4632 66.149 19.3045V13.5921C66.149 12.5101 65.878 11.6879 65.336 11.1253C64.794 10.5627 64.0397 10.2814 63.0729 10.2814C62.1208 10.2814 61.3665 10.5627 60.8098 11.1253C60.2679 11.6879 59.9969 12.5101 59.9969 13.5921V19.3045C59.9969 19.4632 59.9383 19.6003 59.8211 19.7157C59.7039 19.8311 59.5648 19.8888 59.4037 19.8888H58.5907C58.4296 19.8888 58.2904 19.8311 58.1732 19.7157C58.0561 19.6003 57.9975 19.4632 57.9975 19.3045V5.10987C57.9975 4.95119 58.0561 4.81414 58.1732 4.69874C58.2904 4.58334 58.4296 4.52563 58.5907 4.52563H59.4037C59.5648 4.52563 59.7039 4.58334 59.8211 4.69874C59.9383 4.81414 59.9969 4.95119 59.9969 5.10987V9.89192C60.3191 9.47358 60.7586 9.12736 61.3152 8.85328C61.8865 8.56477 62.5822 8.42052 63.4025 8.42052C64.3253 8.42052 65.1456 8.61526 65.8633 9.00475C66.5811 9.39424 67.1377 9.95683 67.5332 10.6925C67.9433 11.4138 68.1484 12.2721 68.1484 13.2675V19.3045Z",
          fill: "#E2E8F0",
        }),
        a.jsx("path", {
          d: "M75.8478 8.42052C77.4151 8.42052 78.6528 8.91098 79.561 9.89192C80.4692 10.8729 80.9233 12.2072 80.9233 13.895V14.4792C80.9233 14.6379 80.8647 14.7749 80.7475 14.8903C80.6303 15.0058 80.4911 15.0635 80.33 15.0635H72.7717V15.1933C72.801 16.1454 73.094 16.8955 73.6506 17.4437C74.2219 17.9774 74.9543 18.2443 75.8478 18.2443C76.5802 18.2443 77.1441 18.1505 77.5396 17.963C77.9498 17.7754 78.3159 17.5086 78.6382 17.1624C78.7554 17.047 78.8579 16.9676 78.9458 16.9243C79.0483 16.8811 79.1802 16.8594 79.3413 16.8594H80.0005C80.1762 16.8594 80.3227 16.9171 80.4399 17.0325C80.5571 17.1479 80.6083 17.285 80.5937 17.4437C80.5351 17.8331 80.3154 18.2371 79.9345 18.6554C79.5683 19.0593 79.0337 19.4055 78.3306 19.694C77.6421 19.9681 76.8145 20.1052 75.8478 20.1052C74.9103 20.1052 74.0754 19.896 73.343 19.4777C72.6106 19.0449 72.0247 18.4534 71.5853 17.7033C71.1605 16.9532 70.9041 16.1093 70.8163 15.1716C70.787 14.7389 70.7723 14.4071 70.7723 14.1763C70.7723 13.9455 70.787 13.6137 70.8163 13.1809C70.9041 12.2865 71.1605 11.4787 71.5853 10.7574C72.0247 10.0362 72.6033 9.46636 73.321 9.04803C74.0534 8.62969 74.8957 8.42052 75.8478 8.42052ZM78.9458 13.2458V13.1809C78.9458 12.301 78.6602 11.6013 78.0889 11.082C77.5323 10.5483 76.7852 10.2814 75.8478 10.2814C74.9982 10.2814 74.2731 10.5483 73.6726 11.082C73.0867 11.6158 72.7864 12.3154 72.7717 13.1809V13.2458H78.9458Z",
          fill: "#E2E8F0",
        }),
        a.jsx("path", {
          d: "M85.5734 9.89192C85.9249 9.44473 86.3204 9.0913 86.7599 8.83164C87.1993 8.55756 87.7852 8.42052 88.5176 8.42052C90.2314 8.42052 91.4325 9.04802 92.121 10.303C92.5457 9.69717 93.0291 9.23556 93.5711 8.9182C94.1131 8.58641 94.8235 8.42052 95.7023 8.42052C97.1378 8.42052 98.1998 8.84607 98.8883 9.69717C99.5914 10.5483 99.9429 11.7528 99.9429 13.3108V19.3045C99.9429 19.4632 99.8843 19.6003 99.7671 19.7157C99.6499 19.8311 99.5108 19.8888 99.3497 19.8888H98.5367C98.3756 19.8888 98.2364 19.8311 98.1192 19.7157C98.0021 19.6003 97.9435 19.4632 97.9435 19.3045V13.5271C97.9435 11.3633 97.0792 10.2814 95.3508 10.2814C94.5598 10.2814 93.93 10.5411 93.4612 11.0604C92.9925 11.5797 92.7581 12.3515 92.7581 13.3757V19.3045C92.7581 19.4632 92.6996 19.6003 92.5824 19.7157C92.4652 19.8311 92.326 19.8888 92.1649 19.8888H91.3519C91.1908 19.8888 91.0517 19.8311 90.9345 19.7157C90.8173 19.6003 90.7587 19.4632 90.7587 19.3045V13.5271C90.7587 11.3633 89.8945 10.2814 88.166 10.2814C87.3751 10.2814 86.7452 10.5411 86.2765 11.0604C85.8077 11.5797 85.5734 12.3515 85.5734 13.3757V19.3045C85.5734 19.4632 85.5148 19.6003 85.3976 19.7157C85.2804 19.8311 85.1413 19.8888 84.9801 19.8888H84.1672C84.0061 19.8888 83.8669 19.8311 83.7497 19.7157C83.6325 19.6003 83.5739 19.4632 83.5739 19.3045V9.22113C83.5739 9.06245 83.6325 8.92541 83.7497 8.81C83.8669 8.6946 84.0061 8.6369 84.1672 8.6369H84.9801C85.1413 8.6369 85.2804 8.6946 85.3976 8.81C85.5148 8.92541 85.5734 9.06245 85.5734 9.22113V9.89192Z",
          fill: "#E2E8F0",
        }),
        a.jsx("path", {
          d: "M106.097 23.4807C105.965 23.8269 105.752 24 105.459 24H104.559C104.412 24 104.288 23.9496 104.185 23.8486C104.082 23.7476 104.031 23.625 104.031 23.4807C104.031 23.423 104.039 23.3725 104.053 23.3293L106.162 18.8069L101.812 9.30768C101.797 9.26441 101.79 9.21392 101.79 9.15622C101.79 9.01196 101.841 8.88935 101.944 8.78837C102.046 8.68739 102.171 8.6369 102.317 8.6369H103.218C103.511 8.6369 103.724 8.81001 103.855 9.15622L107.239 16.5132L110.667 9.15622C110.799 8.81001 111.011 8.6369 111.304 8.6369H112.205C112.351 8.6369 112.476 8.68739 112.578 8.78837C112.681 8.88935 112.732 9.01196 112.732 9.15622C112.732 9.21392 112.725 9.26441 112.71 9.30768L106.097 23.4807Z",
          fill: "#E2E8F0",
        }),
        a.jsx("path", {
          d: "M19.3958 12.7306L12.0181 0.205008C11.9824 0.143159 11.9306 0.0916386 11.8681 0.0556463C11.8056 0.019654 11.7345 0.000462384 11.662 8.25127e-06C11.5895 -0.000445881 11.5181 0.0178533 11.4551 0.0530595C11.3922 0.0882657 11.3398 0.139134 11.3033 0.200531L9.09371 3.95372C9.02135 4.07658 8.98326 4.21595 8.98326 4.35781C8.98326 4.49967 9.02135 4.63904 9.09371 4.7619L13.9044 12.9332C13.9769 13.0562 14.0811 13.1583 14.2066 13.2292C14.3321 13.3001 14.4744 13.3374 14.6193 13.3373H19.0384C19.1107 13.3371 19.1817 13.3182 19.2443 13.2827C19.3069 13.2471 19.3589 13.1961 19.3951 13.1347C19.4313 13.0733 19.4504 13.0036 19.4505 12.9327C19.4506 12.8618 19.4317 12.7921 19.3958 12.7306Z",
          fill: "#E2E8F0",
        }),
        a.jsx("path", {
          d: "M0.0568897 19.2769L7.43458 6.75134C7.47078 6.68998 7.52283 6.63904 7.58546 6.60362C7.64809 6.5682 7.71911 6.54956 7.79142 6.54956C7.86373 6.54956 7.93478 6.5682 7.99741 6.60362C8.06004 6.63904 8.11206 6.68998 8.14826 6.75134L10.359 10.5012C10.4313 10.6242 10.4694 10.7638 10.4694 10.9058C10.4694 11.0479 10.4313 11.1874 10.359 11.3105L5.54819 19.4818C5.47604 19.6047 5.37206 19.7068 5.24675 19.7778C5.12144 19.8487 4.97923 19.886 4.83452 19.8858H0.414299C0.341483 19.8862 0.269874 19.8676 0.206748 19.8321C0.143622 19.7965 0.0912388 19.7451 0.0549242 19.6833C0.0186097 19.6214 -0.000341874 19.5512 4.66863e-06 19.4798C0.000351211 19.4085 0.019976 19.3384 0.0568897 19.2769Z",
          fill: "#E2E8F0",
        }),
        a.jsx("path", {
          d: "M8.1472 19.8832H22.9026C22.975 19.8831 23.0461 19.8643 23.1087 19.8288C23.1714 19.7933 23.2233 19.7422 23.2595 19.6807C23.2956 19.6192 23.3145 19.5494 23.3144 19.4785C23.3143 19.4075 23.2952 19.3379 23.2589 19.2765L21.0516 15.5244C20.9792 15.4014 20.875 15.2993 20.7495 15.2284C20.624 15.1574 20.4816 15.1202 20.3368 15.1203H10.7153C10.5704 15.1202 10.4281 15.1574 10.3026 15.2284C10.1771 15.2993 10.0729 15.4014 10.0005 15.5244L7.79095 19.2765C7.75466 19.3379 7.7355 19.4075 7.73539 19.4785C7.73529 19.5494 7.75423 19.6192 7.79034 19.6807C7.82645 19.7422 7.87846 19.7933 7.9411 19.8288C8.00375 19.8643 8.07482 19.8831 8.1472 19.8832Z",
          fill: "#E2E8F0",
        }),
      ],
    }),
  I4 = () =>
    a.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "113",
      height: "24",
      viewBox: "0 0 113 24",
      fill: "none",
      children: [
        a.jsx("path", {
          d: "M35.3052 12.7696V12.4883C35.3052 11.7814 35.0635 11.2405 34.5801 10.8654C34.1114 10.4759 33.4962 10.2812 32.7345 10.2812C32.1486 10.2812 31.6872 10.3821 31.3503 10.5841C31.028 10.7716 30.7204 11.0601 30.4274 11.4496C30.3396 11.565 30.2443 11.6444 30.1418 11.6876C30.0393 11.7309 29.9001 11.7526 29.7243 11.7526H29.0652C28.9041 11.7526 28.7576 11.6949 28.6258 11.5795C28.5086 11.4641 28.4573 11.327 28.472 11.1683C28.5159 10.7356 28.7283 10.31 29.1091 9.89167C29.5046 9.45891 30.0246 9.10548 30.6691 8.8314C31.3136 8.55731 32.0021 8.42027 32.7345 8.42027C34.0967 8.42027 35.1953 8.79534 36.0302 9.54546C36.8798 10.2956 37.3046 11.3486 37.3046 12.7046V19.3043C37.3046 19.463 37.246 19.6 37.1288 19.7154C37.0116 19.8308 36.8725 19.8885 36.7114 19.8885H35.8984C35.7373 19.8885 35.5981 19.8308 35.4809 19.7154C35.3638 19.6 35.3052 19.463 35.3052 19.3043V18.4171C35.0708 18.9365 34.5728 19.3476 33.8111 19.6505C33.0494 19.9535 32.2877 20.1049 31.526 20.1049C30.779 20.1049 30.1125 19.9751 29.5266 19.7154C28.9407 19.4413 28.4866 19.0735 28.1643 18.6119C27.8567 18.1503 27.7029 17.6309 27.7029 17.0539C27.7029 15.972 28.1131 15.1281 28.9334 14.5223C29.7536 13.902 30.8449 13.4836 32.2071 13.2672L35.3052 12.7696ZM35.3052 14.5006L32.7125 14.9117C31.7604 15.056 31.0207 15.294 30.4934 15.6258C29.966 15.9432 29.7024 16.3471 29.7024 16.8375C29.7024 17.1982 29.8708 17.5228 30.2077 17.8113C30.5446 18.0998 31.0573 18.244 31.7457 18.244C32.8004 18.244 33.6573 17.9483 34.3164 17.3569C34.9756 16.7654 35.3052 15.9937 35.3052 15.0416V14.5006Z",
          fill: "#475569",
        }),
        a.jsx("path", {
          d: "M42.5097 19.3043C42.5097 19.463 42.4511 19.6 42.3339 19.7154C42.2167 19.8308 42.0776 19.8885 41.9164 19.8885H41.1035C40.9424 19.8885 40.8032 19.8308 40.686 19.7154C40.5688 19.6 40.5102 19.463 40.5102 19.3043V5.10962C40.5102 4.95094 40.5688 4.8139 40.686 4.6985C40.8032 4.58309 40.9424 4.52539 41.1035 4.52539H41.9164C42.0776 4.52539 42.2167 4.58309 42.3339 4.6985C42.4511 4.8139 42.5097 4.95094 42.5097 5.10962V19.3043Z",
          fill: "#475569",
        }),
        a.jsx("path", {
          d: "M50.4241 18.244C51.8889 18.244 52.8776 17.6814 53.3903 16.5562C53.4929 16.3399 53.5954 16.1884 53.6979 16.1018C53.8005 16.0153 53.9396 15.972 54.1154 15.972H54.7745C54.9357 15.972 55.0748 16.0297 55.192 16.1451C55.3092 16.2461 55.3678 16.3687 55.3678 16.513C55.3678 17.0034 55.17 17.53 54.7745 18.0926C54.3791 18.6552 53.8078 19.1312 53.0607 19.5207C52.3137 19.9102 51.4348 20.1049 50.4241 20.1049C49.3841 20.1049 48.4833 19.8885 47.7216 19.4558C46.9599 19.023 46.374 18.4316 45.9639 17.6814C45.5537 16.9169 45.3267 16.0658 45.2827 15.1281C45.2681 14.955 45.2608 14.6232 45.2608 14.1328C45.2608 13.7866 45.2681 13.5413 45.2827 13.3971C45.4146 11.9257 45.9199 10.7284 46.7988 9.80512C47.6777 8.88189 48.8861 8.42027 50.4241 8.42027C51.4348 8.42027 52.3064 8.61502 53.0388 9.00451C53.7858 9.37957 54.3498 9.8484 54.7306 10.411C55.1261 10.9592 55.3385 11.4785 55.3678 11.9689C55.3824 12.1276 55.3238 12.2647 55.192 12.3801C55.0748 12.4955 54.9357 12.5532 54.7745 12.5532H54.1154C53.9396 12.5532 53.8005 12.5099 53.6979 12.4233C53.5954 12.3368 53.4929 12.1853 53.3903 11.9689C52.8776 10.8438 51.8889 10.2812 50.4241 10.2812C49.6185 10.2812 48.9154 10.548 48.3148 11.0818C47.7143 11.6155 47.3701 12.4233 47.2822 13.5053C47.2675 13.6639 47.2602 13.9236 47.2602 14.2842C47.2602 14.616 47.2675 14.8613 47.2822 15.0199C47.3847 16.1018 47.7289 16.9097 48.3148 17.4434C48.9154 17.9772 49.6185 18.244 50.4241 18.244Z",
          fill: "#475569",
        }),
        a.jsx("path", {
          d: "M68.1485 19.3043C68.1485 19.463 68.0899 19.6 67.9727 19.7154C67.8555 19.8308 67.7164 19.8885 67.5552 19.8885H66.7423C66.5812 19.8885 66.442 19.8308 66.3248 19.7154C66.2076 19.6 66.149 19.463 66.149 19.3043V13.5918C66.149 12.5099 65.8781 11.6876 65.3361 11.1251C64.7941 10.5625 64.0398 10.2812 63.073 10.2812C62.1209 10.2812 61.3665 10.5625 60.8099 11.1251C60.2679 11.6876 59.997 12.5099 59.997 13.5918V19.3043C59.997 19.463 59.9384 19.6 59.8212 19.7154C59.704 19.8308 59.5648 19.8885 59.4037 19.8885H58.5908C58.4296 19.8885 58.2905 19.8308 58.1733 19.7154C58.0561 19.6 57.9975 19.463 57.9975 19.3043V5.10962C57.9975 4.95094 58.0561 4.8139 58.1733 4.6985C58.2905 4.58309 58.4296 4.52539 58.5908 4.52539H59.4037C59.5648 4.52539 59.704 4.58309 59.8212 4.6985C59.9384 4.8139 59.997 4.95094 59.997 5.10962V9.89167C60.3192 9.47333 60.7586 9.12712 61.3153 8.85304C61.8865 8.56453 62.5823 8.42027 63.4026 8.42027C64.3254 8.42027 65.1457 8.61502 65.8634 9.00451C66.5812 9.39399 67.1378 9.95659 67.5333 10.6923C67.9434 11.4136 68.1485 12.2719 68.1485 13.2672V19.3043Z",
          fill: "#475569",
        }),
        a.jsx("path", {
          d: "M75.8478 8.42027C77.4152 8.42027 78.6529 8.91074 79.5611 9.89167C80.4692 10.8726 80.9233 12.207 80.9233 13.8947V14.479C80.9233 14.6377 80.8647 14.7747 80.7476 14.8901C80.6304 15.0055 80.4912 15.0632 80.3301 15.0632H72.7718V15.193C72.8011 16.1451 73.0941 16.8952 73.6507 17.4434C74.2219 17.9772 74.9543 18.244 75.8478 18.244C76.5802 18.244 77.1442 18.1503 77.5397 17.9627C77.9498 17.7752 78.316 17.5083 78.6383 17.1621C78.7554 17.0467 78.858 16.9674 78.9459 16.9241C79.0484 16.8808 79.1802 16.8592 79.3414 16.8592H80.0005C80.1763 16.8592 80.3228 16.9169 80.4399 17.0323C80.5571 17.1477 80.6084 17.2847 80.5937 17.4434C80.5352 17.8329 80.3154 18.2368 79.9346 18.6552C79.5684 19.0591 79.0337 19.4053 78.3307 19.6938C77.6422 19.9679 76.8146 20.1049 75.8478 20.1049C74.9104 20.1049 74.0755 19.8957 73.3431 19.4774C72.6107 19.0446 72.0248 18.4532 71.5853 17.7031C71.1605 16.9529 70.9042 16.1091 70.8163 15.1714C70.787 14.7386 70.7724 14.4069 70.7724 14.176C70.7724 13.9452 70.787 13.6134 70.8163 13.1807C70.9042 12.2863 71.1605 11.4785 71.5853 10.7572C72.0248 10.0359 72.6034 9.46612 73.3211 9.04778C74.0535 8.62944 74.8957 8.42027 75.8478 8.42027ZM78.9459 13.2456V13.1807C78.9459 12.3007 78.6602 11.6011 78.089 11.0818C77.5324 10.548 76.7853 10.2812 75.8478 10.2812C74.9983 10.2812 74.2732 10.548 73.6726 11.0818C73.0867 11.6155 72.7865 12.3152 72.7718 13.1807V13.2456H78.9459Z",
          fill: "#475569",
        }),
        a.jsx("path", {
          d: "M85.5734 9.89167C85.925 9.44448 86.3205 9.09106 86.7599 8.8314C87.1993 8.55731 87.7853 8.42027 88.5177 8.42027C90.2314 8.42027 91.4326 9.04778 92.121 10.3028C92.5458 9.69693 93.0292 9.23531 93.5712 8.91795C94.1131 8.58617 94.8235 8.42027 95.7024 8.42027C97.1379 8.42027 98.1999 8.84582 98.8883 9.69693C99.5914 10.548 99.943 11.7526 99.943 13.3105V19.3043C99.943 19.463 99.8844 19.6 99.7672 19.7154C99.65 19.8308 99.5108 19.8885 99.3497 19.8885H98.5368C98.3756 19.8885 98.2365 19.8308 98.1193 19.7154C98.0021 19.6 97.9435 19.463 97.9435 19.3043V13.5269C97.9435 11.3631 97.0793 10.2812 95.3509 10.2812C94.5599 10.2812 93.93 10.5408 93.4613 11.0601C92.9926 11.5795 92.7582 12.3512 92.7582 13.3754V19.3043C92.7582 19.463 92.6996 19.6 92.5824 19.7154C92.4652 19.8308 92.3261 19.8885 92.165 19.8885H91.352C91.1909 19.8885 91.0517 19.8308 90.9345 19.7154C90.8174 19.6 90.7588 19.463 90.7588 19.3043V13.5269C90.7588 11.3631 89.8945 10.2812 88.1661 10.2812C87.3751 10.2812 86.7453 10.5408 86.2765 11.0601C85.8078 11.5795 85.5734 12.3512 85.5734 13.3754V19.3043C85.5734 19.463 85.5148 19.6 85.3977 19.7154C85.2805 19.8308 85.1413 19.8885 84.9802 19.8885H84.1672C84.0061 19.8885 83.867 19.8308 83.7498 19.7154C83.6326 19.6 83.574 19.463 83.574 19.3043V9.22089C83.574 9.06221 83.6326 8.92516 83.7498 8.80976C83.867 8.69436 84.0061 8.63665 84.1672 8.63665H84.9802C85.1413 8.63665 85.2805 8.69436 85.3977 8.80976C85.5148 8.92516 85.5734 9.06221 85.5734 9.22089V9.89167Z",
          fill: "#475569",
        }),
        a.jsx("path", {
          d: "M106.097 23.4805C105.965 23.8267 105.752 23.9998 105.459 23.9998H104.559C104.412 23.9998 104.288 23.9493 104.185 23.8483C104.083 23.7474 104.031 23.6247 104.031 23.4805C104.031 23.4228 104.039 23.3723 104.053 23.329L106.163 18.8066L101.812 9.30744C101.797 9.26416 101.79 9.21368 101.79 9.15597C101.79 9.01172 101.841 8.8891 101.944 8.78812C102.046 8.68714 102.171 8.63665 102.317 8.63665H103.218C103.511 8.63665 103.724 8.80976 103.855 9.15597L107.239 16.513L110.667 9.15597C110.799 8.80976 111.011 8.63665 111.304 8.63665H112.205C112.351 8.63665 112.476 8.68714 112.578 8.78812C112.681 8.8891 112.732 9.01172 112.732 9.15597C112.732 9.21368 112.725 9.26416 112.71 9.30744L106.097 23.4805Z",
          fill: "#475569",
        }),
        a.jsx("path", {
          d: "M19.3958 12.7306L12.0181 0.205008C11.9824 0.143159 11.9306 0.0916386 11.8681 0.0556463C11.8056 0.019654 11.7345 0.000462384 11.662 8.25127e-06C11.5895 -0.000445881 11.5181 0.0178533 11.4551 0.0530595C11.3922 0.0882657 11.3398 0.139134 11.3033 0.200531L9.09371 3.95372C9.02135 4.07658 8.98326 4.21595 8.98326 4.35781C8.98326 4.49967 9.02135 4.63904 9.09371 4.7619L13.9044 12.9332C13.9769 13.0562 14.0811 13.1583 14.2066 13.2292C14.3321 13.3001 14.4744 13.3374 14.6193 13.3373H19.0384C19.1107 13.3371 19.1817 13.3182 19.2443 13.2827C19.3069 13.2471 19.3589 13.1961 19.3951 13.1347C19.4313 13.0733 19.4504 13.0036 19.4505 12.9327C19.4506 12.8618 19.4317 12.7921 19.3958 12.7306Z",
          fill: "#475569",
        }),
        a.jsx("path", {
          d: "M0.0568897 19.2769L7.43458 6.75134C7.47078 6.68998 7.52283 6.63904 7.58546 6.60362C7.64809 6.5682 7.71911 6.54956 7.79142 6.54956C7.86373 6.54956 7.93478 6.5682 7.99741 6.60362C8.06004 6.63904 8.11206 6.68998 8.14826 6.75134L10.359 10.5012C10.4313 10.6242 10.4694 10.7638 10.4694 10.9058C10.4694 11.0479 10.4313 11.1874 10.359 11.3105L5.54819 19.4818C5.47604 19.6047 5.37206 19.7068 5.24675 19.7778C5.12144 19.8487 4.97923 19.886 4.83452 19.8858H0.414299C0.341483 19.8862 0.269874 19.8676 0.206748 19.8321C0.143622 19.7965 0.0912388 19.7451 0.0549242 19.6833C0.0186097 19.6214 -0.000341874 19.5512 4.66863e-06 19.4798C0.000351211 19.4085 0.019976 19.3384 0.0568897 19.2769Z",
          fill: "#475569",
        }),
        a.jsx("path", {
          d: "M8.1472 19.8832H22.9026C22.975 19.8831 23.0461 19.8643 23.1087 19.8288C23.1714 19.7933 23.2233 19.7422 23.2595 19.6807C23.2956 19.6192 23.3145 19.5494 23.3144 19.4785C23.3143 19.4075 23.2952 19.3379 23.2589 19.2765L21.0516 15.5244C20.9792 15.4014 20.875 15.2993 20.7495 15.2284C20.624 15.1574 20.4816 15.1202 20.3368 15.1203H10.7153C10.5704 15.1202 10.4281 15.1574 10.3026 15.2284C10.1771 15.2993 10.0729 15.4014 10.0005 15.5244L7.79095 19.2765C7.75466 19.3379 7.7355 19.4075 7.73539 19.4785C7.73529 19.5494 7.75423 19.6192 7.79034 19.6807C7.82645 19.7422 7.87846 19.7933 7.9411 19.8288C8.00375 19.8643 8.07482 19.8831 8.1472 19.8832Z",
          fill: "#475569",
        }),
      ],
    }),
  R4 = () =>
    a.jsxs("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        a.jsx("foreignObject", {
          x: "1.39045",
          y: "1.5998",
          width: "21.2381",
          height: "20.2286",
          children: a.jsx("div", {
            style: {
              backdropFilter: "blur(0.6px)",
              clipPath: "url(#bgblur_0_9452_35072_clip_path)",
              height: "100%",
              width: "100%",
            },
          }),
        }),
        a.jsxs("g", {
          filter: "url(#filter0_i_9452_35072)",
          "data-figma-bg-blur-radius": "1.2",
          children: [
            a.jsx("mask", {
              id: "path-1-inside-1_9452_35072",
              fill: "white",
              children: a.jsx("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M21.4286 3.39981C21.4286 3.06844 21.16 2.7998 20.8286 2.7998H17.0762C16.7448 2.7998 16.4762 3.06843 16.4762 3.3998V20.0284C16.4762 20.3597 16.7448 20.6284 17.0762 20.6284H20.8286C21.16 20.6284 21.4286 20.3597 21.4286 20.0284V3.39981ZM14.4762 9.34265C14.4762 9.01128 14.2076 8.74265 13.8762 8.74265H10.1238C9.79244 8.74265 9.52381 9.01128 9.52381 9.34265V20.0284C9.52381 20.3597 9.79244 20.6284 10.1238 20.6284H13.8762C14.2076 20.6284 14.4762 20.3597 14.4762 20.0284V9.34265ZM6.94286 11.7141C7.27423 11.7141 7.54286 11.9827 7.54286 12.3141V20.0284C7.54286 20.3597 7.27423 20.6284 6.94286 20.6284H3.19048C2.85911 20.6284 2.59048 20.3597 2.59048 20.0284V12.3141C2.59048 11.9827 2.85911 11.7141 3.19048 11.7141H6.94286Z",
              }),
            }),
            a.jsx("path", {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M21.4286 3.39981C21.4286 3.06844 21.16 2.7998 20.8286 2.7998H17.0762C16.7448 2.7998 16.4762 3.06843 16.4762 3.3998V20.0284C16.4762 20.3597 16.7448 20.6284 17.0762 20.6284H20.8286C21.16 20.6284 21.4286 20.3597 21.4286 20.0284V3.39981ZM14.4762 9.34265C14.4762 9.01128 14.2076 8.74265 13.8762 8.74265H10.1238C9.79244 8.74265 9.52381 9.01128 9.52381 9.34265V20.0284C9.52381 20.3597 9.79244 20.6284 10.1238 20.6284H13.8762C14.2076 20.6284 14.4762 20.3597 14.4762 20.0284V9.34265ZM6.94286 11.7141C7.27423 11.7141 7.54286 11.9827 7.54286 12.3141V20.0284C7.54286 20.3597 7.27423 20.6284 6.94286 20.6284H3.19048C2.85911 20.6284 2.59048 20.3597 2.59048 20.0284V12.3141C2.59048 11.9827 2.85911 11.7141 3.19048 11.7141H6.94286Z",
              fill: "#F1F1F1",
              "fill-opacity": "0.1",
            }),
            a.jsx("path", {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M21.4286 3.39981C21.4286 3.06844 21.16 2.7998 20.8286 2.7998H17.0762C16.7448 2.7998 16.4762 3.06843 16.4762 3.3998V20.0284C16.4762 20.3597 16.7448 20.6284 17.0762 20.6284H20.8286C21.16 20.6284 21.4286 20.3597 21.4286 20.0284V3.39981ZM14.4762 9.34265C14.4762 9.01128 14.2076 8.74265 13.8762 8.74265H10.1238C9.79244 8.74265 9.52381 9.01128 9.52381 9.34265V20.0284C9.52381 20.3597 9.79244 20.6284 10.1238 20.6284H13.8762C14.2076 20.6284 14.4762 20.3597 14.4762 20.0284V9.34265ZM6.94286 11.7141C7.27423 11.7141 7.54286 11.9827 7.54286 12.3141V20.0284C7.54286 20.3597 7.27423 20.6284 6.94286 20.6284H3.19048C2.85911 20.6284 2.59048 20.3597 2.59048 20.0284V12.3141C2.59048 11.9827 2.85911 11.7141 3.19048 11.7141H6.94286Z",
              fill: "url(#paint0_linear_9452_35072)",
              "fill-opacity": "0.2",
            }),
            a.jsx("path", {
              d: "M20.8286 2.3998C21.3809 2.3998 21.8286 2.84752 21.8286 3.39981H21.0286C21.0286 3.28935 20.939 3.1998 20.8286 3.1998V2.3998ZM17.0762 2.3998H20.8286V3.1998H17.0762V2.3998ZM16.0762 3.3998C16.0762 2.84752 16.5239 2.3998 17.0762 2.3998V3.1998C16.9658 3.1998 16.8762 3.28935 16.8762 3.3998H16.0762ZM16.0762 20.0284V3.3998H16.8762V20.0284H16.0762ZM17.0762 21.0284C16.5239 21.0284 16.0762 20.5807 16.0762 20.0284H16.8762C16.8762 20.1388 16.9658 20.2284 17.0762 20.2284V21.0284ZM20.8286 21.0284H17.0762V20.2284H20.8286V21.0284ZM21.8286 20.0284C21.8286 20.5807 21.3809 21.0284 20.8286 21.0284V20.2284C20.939 20.2284 21.0286 20.1388 21.0286 20.0284H21.8286ZM21.8286 3.39981V20.0284H21.0286V3.39981H21.8286ZM13.8762 8.34265C14.4285 8.34265 14.8762 8.79037 14.8762 9.34265H14.0762C14.0762 9.23219 13.9867 9.14265 13.8762 9.14265V8.34265ZM10.1238 8.34265H13.8762V9.14265H10.1238V8.34265ZM9.12381 9.34265C9.12381 8.79036 9.57153 8.34265 10.1238 8.34265V9.14265C10.0134 9.14265 9.92381 9.23219 9.92381 9.34265H9.12381ZM9.12381 20.0284V9.34265H9.92381V20.0284H9.12381ZM10.1238 21.0284C9.57153 21.0284 9.12381 20.5806 9.12381 20.0284H9.92381C9.92381 20.1388 10.0134 20.2284 10.1238 20.2284V21.0284ZM13.8762 21.0284H10.1238V20.2284H13.8762V21.0284ZM14.8762 20.0284C14.8762 20.5807 14.4285 21.0284 13.8762 21.0284V20.2284C13.9867 20.2284 14.0762 20.1388 14.0762 20.0284H14.8762ZM14.8762 9.34265V20.0284H14.0762V9.34265H14.8762ZM7.14286 12.3141C7.14286 12.2036 7.05332 12.1141 6.94286 12.1141V11.3141C7.49515 11.3141 7.94286 11.7618 7.94286 12.3141H7.14286ZM7.14286 20.0284V12.3141H7.94286V20.0284H7.14286ZM6.94286 20.2284C7.05332 20.2284 7.14286 20.1388 7.14286 20.0284H7.94286C7.94286 20.5807 7.49515 21.0284 6.94286 21.0284V20.2284ZM3.19048 20.2284H6.94286V21.0284H3.19048V20.2284ZM2.99048 20.0284C2.99048 20.1388 3.08002 20.2284 3.19048 20.2284V21.0284C2.6382 21.0284 2.19048 20.5807 2.19048 20.0284H2.99048ZM2.99048 12.3141V20.0284H2.19048V12.3141H2.99048ZM3.19048 12.1141C3.08002 12.1141 2.99048 12.2036 2.99048 12.3141H2.19048C2.19048 11.7618 2.6382 11.3141 3.19048 11.3141V12.1141ZM6.94286 12.1141H3.19048V11.3141H6.94286V12.1141Z",
              fill: "#F1F1F1",
              "fill-opacity": "0.1",
              mask: "url(#path-1-inside-1_9452_35072)",
            }),
            a.jsx("path", {
              d: "M20.8286 2.3998C21.3809 2.3998 21.8286 2.84752 21.8286 3.39981H21.0286C21.0286 3.28935 20.939 3.1998 20.8286 3.1998V2.3998ZM17.0762 2.3998H20.8286V3.1998H17.0762V2.3998ZM16.0762 3.3998C16.0762 2.84752 16.5239 2.3998 17.0762 2.3998V3.1998C16.9658 3.1998 16.8762 3.28935 16.8762 3.3998H16.0762ZM16.0762 20.0284V3.3998H16.8762V20.0284H16.0762ZM17.0762 21.0284C16.5239 21.0284 16.0762 20.5807 16.0762 20.0284H16.8762C16.8762 20.1388 16.9658 20.2284 17.0762 20.2284V21.0284ZM20.8286 21.0284H17.0762V20.2284H20.8286V21.0284ZM21.8286 20.0284C21.8286 20.5807 21.3809 21.0284 20.8286 21.0284V20.2284C20.939 20.2284 21.0286 20.1388 21.0286 20.0284H21.8286ZM21.8286 3.39981V20.0284H21.0286V3.39981H21.8286ZM13.8762 8.34265C14.4285 8.34265 14.8762 8.79037 14.8762 9.34265H14.0762C14.0762 9.23219 13.9867 9.14265 13.8762 9.14265V8.34265ZM10.1238 8.34265H13.8762V9.14265H10.1238V8.34265ZM9.12381 9.34265C9.12381 8.79036 9.57153 8.34265 10.1238 8.34265V9.14265C10.0134 9.14265 9.92381 9.23219 9.92381 9.34265H9.12381ZM9.12381 20.0284V9.34265H9.92381V20.0284H9.12381ZM10.1238 21.0284C9.57153 21.0284 9.12381 20.5806 9.12381 20.0284H9.92381C9.92381 20.1388 10.0134 20.2284 10.1238 20.2284V21.0284ZM13.8762 21.0284H10.1238V20.2284H13.8762V21.0284ZM14.8762 20.0284C14.8762 20.5807 14.4285 21.0284 13.8762 21.0284V20.2284C13.9867 20.2284 14.0762 20.1388 14.0762 20.0284H14.8762ZM14.8762 9.34265V20.0284H14.0762V9.34265H14.8762ZM7.14286 12.3141C7.14286 12.2036 7.05332 12.1141 6.94286 12.1141V11.3141C7.49515 11.3141 7.94286 11.7618 7.94286 12.3141H7.14286ZM7.14286 20.0284V12.3141H7.94286V20.0284H7.14286ZM6.94286 20.2284C7.05332 20.2284 7.14286 20.1388 7.14286 20.0284H7.94286C7.94286 20.5807 7.49515 21.0284 6.94286 21.0284V20.2284ZM3.19048 20.2284H6.94286V21.0284H3.19048V20.2284ZM2.99048 20.0284C2.99048 20.1388 3.08002 20.2284 3.19048 20.2284V21.0284C2.6382 21.0284 2.19048 20.5807 2.19048 20.0284H2.99048ZM2.99048 12.3141V20.0284H2.19048V12.3141H2.99048ZM3.19048 12.1141C3.08002 12.1141 2.99048 12.2036 2.99048 12.3141H2.19048C2.19048 11.7618 2.6382 11.3141 3.19048 11.3141V12.1141ZM6.94286 12.1141H3.19048V11.3141H6.94286V12.1141Z",
              fill: "url(#paint1_linear_9452_35072)",
              "fill-opacity": "0.1",
              mask: "url(#path-1-inside-1_9452_35072)",
            }),
          ],
        }),
        a.jsx("foreignObject", {
          x: "1.39045",
          y: "12.4001",
          width: "21.2381",
          height: "9.42881",
          children: a.jsx("div", {
            style: {
              backdropFilter: "blur(0.6px)",
              clipPath: "url(#bgblur_1_9452_35072_clip_path)",
              height: "100%",
              width: "100%",
            },
          }),
        }),
        a.jsxs("g", {
          filter: "url(#filter1_i_9452_35072)",
          "data-figma-bg-blur-radius": "1.2",
          children: [
            a.jsx("mask", {
              id: "path-3-inside-2_9452_35072",
              fill: "white",
              children: a.jsx("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M21.4286 14.2001C21.4286 13.8687 21.16 13.6001 20.8286 13.6001H17.0762C16.7448 13.6001 16.4762 13.8687 16.4762 14.2001V20.0287C16.4762 20.36 16.7448 20.6287 17.0762 20.6287H20.8286C21.16 20.6287 21.4286 20.36 21.4286 20.0287V14.2001ZM14.4762 16.543C14.4762 16.2116 14.2076 15.943 13.8762 15.943H10.1238C9.79244 15.943 9.52381 16.2116 9.52381 16.543V20.0287C9.52381 20.36 9.79244 20.6287 10.1238 20.6287H13.8762C14.2076 20.6287 14.4762 20.36 14.4762 20.0287V16.543ZM6.94287 17.1144C7.27424 17.1144 7.54287 17.383 7.54287 17.7144V20.0287C7.54287 20.36 7.27424 20.6287 6.94287 20.6287H3.19049C2.85912 20.6287 2.59049 20.36 2.59049 20.0287V17.7144C2.59049 17.383 2.85912 17.1144 3.19049 17.1144H6.94287Z",
              }),
            }),
            a.jsx("path", {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M21.4286 14.2001C21.4286 13.8687 21.16 13.6001 20.8286 13.6001H17.0762C16.7448 13.6001 16.4762 13.8687 16.4762 14.2001V20.0287C16.4762 20.36 16.7448 20.6287 17.0762 20.6287H20.8286C21.16 20.6287 21.4286 20.36 21.4286 20.0287V14.2001ZM14.4762 16.543C14.4762 16.2116 14.2076 15.943 13.8762 15.943H10.1238C9.79244 15.943 9.52381 16.2116 9.52381 16.543V20.0287C9.52381 20.36 9.79244 20.6287 10.1238 20.6287H13.8762C14.2076 20.6287 14.4762 20.36 14.4762 20.0287V16.543ZM6.94287 17.1144C7.27424 17.1144 7.54287 17.383 7.54287 17.7144V20.0287C7.54287 20.36 7.27424 20.6287 6.94287 20.6287H3.19049C2.85912 20.6287 2.59049 20.36 2.59049 20.0287V17.7144C2.59049 17.383 2.85912 17.1144 3.19049 17.1144H6.94287Z",
              fill: "url(#paint2_linear_9452_35072)",
            }),
            a.jsx("path", {
              d: "M20.8286 13.2001C21.3809 13.2001 21.8286 13.6478 21.8286 14.2001H21.0286C21.0286 14.0896 20.939 14.0001 20.8286 14.0001V13.2001ZM17.0762 13.2001H20.8286V14.0001H17.0762V13.2001ZM16.0762 14.2001C16.0762 13.6478 16.5239 13.2001 17.0762 13.2001V14.0001C16.9658 14.0001 16.8762 14.0896 16.8762 14.2001H16.0762ZM16.0762 20.0287V14.2001H16.8762V20.0287H16.0762ZM17.0762 21.0287C16.5239 21.0287 16.0762 20.581 16.0762 20.0287H16.8762C16.8762 20.1391 16.9657 20.2287 17.0762 20.2287V21.0287ZM20.8286 21.0287H17.0762V20.2287H20.8286V21.0287ZM21.8286 20.0287C21.8286 20.581 21.3809 21.0287 20.8286 21.0287V20.2287C20.939 20.2287 21.0286 20.1391 21.0286 20.0287H21.8286ZM21.8286 14.2001V20.0287H21.0286V14.2001H21.8286ZM13.8762 15.543C14.4285 15.543 14.8762 15.9907 14.8762 16.543H14.0762C14.0762 16.4325 13.9867 16.343 13.8762 16.343V15.543ZM10.1238 15.543H13.8762V16.343H10.1238V15.543ZM9.12381 16.543C9.12381 15.9907 9.57153 15.543 10.1238 15.543V16.343C10.0134 16.343 9.92381 16.4325 9.92381 16.543H9.12381ZM9.12381 20.0287V16.543H9.92381V20.0287H9.12381ZM10.1238 21.0287C9.57153 21.0287 9.12381 20.581 9.12381 20.0287H9.92381C9.92381 20.1391 10.0134 20.2287 10.1238 20.2287V21.0287ZM13.8762 21.0287H10.1238V20.2287H13.8762V21.0287ZM14.8762 20.0287C14.8762 20.581 14.4285 21.0287 13.8762 21.0287V20.2287C13.9867 20.2287 14.0762 20.1391 14.0762 20.0287H14.8762ZM14.8762 16.543V20.0287H14.0762V16.543H14.8762ZM7.14287 17.7144C7.14287 17.6039 7.05333 17.5144 6.94287 17.5144V16.7144C7.49515 16.7144 7.94287 17.1621 7.94287 17.7144H7.14287ZM7.14287 20.0287V17.7144H7.94287V20.0287H7.14287ZM6.94287 20.2287C7.05333 20.2287 7.14287 20.1391 7.14287 20.0287H7.94287C7.94287 20.5809 7.49515 21.0287 6.94287 21.0287V20.2287ZM3.19049 20.2287H6.94287V21.0287H3.19049V20.2287ZM2.99049 20.0287C2.99049 20.1391 3.08003 20.2287 3.19049 20.2287V21.0287C2.6382 21.0287 2.19049 20.5809 2.19049 20.0287H2.99049ZM2.99049 17.7144V20.0287H2.19049V17.7144H2.99049ZM3.19049 17.5144C3.08003 17.5144 2.99049 17.6039 2.99049 17.7144H2.19049C2.19049 17.1621 2.6382 16.7144 3.19049 16.7144V17.5144ZM6.94287 17.5144H3.19049V16.7144H6.94287V17.5144Z",
              fill: "#F1F1F1",
              "fill-opacity": "0.1",
              mask: "url(#path-3-inside-2_9452_35072)",
            }),
            a.jsx("path", {
              d: "M20.8286 13.2001C21.3809 13.2001 21.8286 13.6478 21.8286 14.2001H21.0286C21.0286 14.0896 20.939 14.0001 20.8286 14.0001V13.2001ZM17.0762 13.2001H20.8286V14.0001H17.0762V13.2001ZM16.0762 14.2001C16.0762 13.6478 16.5239 13.2001 17.0762 13.2001V14.0001C16.9658 14.0001 16.8762 14.0896 16.8762 14.2001H16.0762ZM16.0762 20.0287V14.2001H16.8762V20.0287H16.0762ZM17.0762 21.0287C16.5239 21.0287 16.0762 20.581 16.0762 20.0287H16.8762C16.8762 20.1391 16.9657 20.2287 17.0762 20.2287V21.0287ZM20.8286 21.0287H17.0762V20.2287H20.8286V21.0287ZM21.8286 20.0287C21.8286 20.581 21.3809 21.0287 20.8286 21.0287V20.2287C20.939 20.2287 21.0286 20.1391 21.0286 20.0287H21.8286ZM21.8286 14.2001V20.0287H21.0286V14.2001H21.8286ZM13.8762 15.543C14.4285 15.543 14.8762 15.9907 14.8762 16.543H14.0762C14.0762 16.4325 13.9867 16.343 13.8762 16.343V15.543ZM10.1238 15.543H13.8762V16.343H10.1238V15.543ZM9.12381 16.543C9.12381 15.9907 9.57153 15.543 10.1238 15.543V16.343C10.0134 16.343 9.92381 16.4325 9.92381 16.543H9.12381ZM9.12381 20.0287V16.543H9.92381V20.0287H9.12381ZM10.1238 21.0287C9.57153 21.0287 9.12381 20.581 9.12381 20.0287H9.92381C9.92381 20.1391 10.0134 20.2287 10.1238 20.2287V21.0287ZM13.8762 21.0287H10.1238V20.2287H13.8762V21.0287ZM14.8762 20.0287C14.8762 20.581 14.4285 21.0287 13.8762 21.0287V20.2287C13.9867 20.2287 14.0762 20.1391 14.0762 20.0287H14.8762ZM14.8762 16.543V20.0287H14.0762V16.543H14.8762ZM7.14287 17.7144C7.14287 17.6039 7.05333 17.5144 6.94287 17.5144V16.7144C7.49515 16.7144 7.94287 17.1621 7.94287 17.7144H7.14287ZM7.14287 20.0287V17.7144H7.94287V20.0287H7.14287ZM6.94287 20.2287C7.05333 20.2287 7.14287 20.1391 7.14287 20.0287H7.94287C7.94287 20.5809 7.49515 21.0287 6.94287 21.0287V20.2287ZM3.19049 20.2287H6.94287V21.0287H3.19049V20.2287ZM2.99049 20.0287C2.99049 20.1391 3.08003 20.2287 3.19049 20.2287V21.0287C2.6382 21.0287 2.19049 20.5809 2.19049 20.0287H2.99049ZM2.99049 17.7144V20.0287H2.19049V17.7144H2.99049ZM3.19049 17.5144C3.08003 17.5144 2.99049 17.6039 2.99049 17.7144H2.19049C2.19049 17.1621 2.6382 16.7144 3.19049 16.7144V17.5144ZM6.94287 17.5144H3.19049V16.7144H6.94287V17.5144Z",
              fill: "url(#paint3_linear_9452_35072)",
              "fill-opacity": "0.1",
              mask: "url(#path-3-inside-2_9452_35072)",
            }),
          ],
        }),
        a.jsxs("defs", {
          children: [
            a.jsxs("filter", {
              id: "filter0_i_9452_35072",
              x: "1.39045",
              y: "1.5998",
              width: "21.2381",
              height: "20.2286",
              filterUnits: "userSpaceOnUse",
              "color-interpolation-filters": "sRGB",
              children: [
                a.jsx("feFlood", {
                  "flood-opacity": "0",
                  result: "BackgroundImageFix",
                }),
                a.jsx("feBlend", {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "BackgroundImageFix",
                  result: "shape",
                }),
                a.jsx("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha",
                }),
                a.jsx("feOffset", { dy: "0.2" }),
                a.jsx("feGaussianBlur", { stdDeviation: "0.4" }),
                a.jsx("feComposite", {
                  in2: "hardAlpha",
                  operator: "arithmetic",
                  k2: "-1",
                  k3: "1",
                }),
                a.jsx("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0",
                }),
                a.jsx("feBlend", {
                  mode: "normal",
                  in2: "shape",
                  result: "effect1_innerShadow_9452_35072",
                }),
              ],
            }),
            a.jsx("clipPath", {
              id: "bgblur_0_9452_35072_clip_path",
              children: a.jsx("path", {
                transform: "translate(-1.39045 -1.5998)",
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M21.4286 3.39981C21.4286 3.06844 21.16 2.7998 20.8286 2.7998H17.0762C16.7448 2.7998 16.4762 3.06843 16.4762 3.3998V20.0284C16.4762 20.3597 16.7448 20.6284 17.0762 20.6284H20.8286C21.16 20.6284 21.4286 20.3597 21.4286 20.0284V3.39981ZM14.4762 9.34265C14.4762 9.01128 14.2076 8.74265 13.8762 8.74265H10.1238C9.79244 8.74265 9.52381 9.01128 9.52381 9.34265V20.0284C9.52381 20.3597 9.79244 20.6284 10.1238 20.6284H13.8762C14.2076 20.6284 14.4762 20.3597 14.4762 20.0284V9.34265ZM6.94286 11.7141C7.27423 11.7141 7.54286 11.9827 7.54286 12.3141V20.0284C7.54286 20.3597 7.27423 20.6284 6.94286 20.6284H3.19048C2.85911 20.6284 2.59048 20.3597 2.59048 20.0284V12.3141C2.59048 11.9827 2.85911 11.7141 3.19048 11.7141H6.94286Z",
              }),
            }),
            a.jsxs("filter", {
              id: "filter1_i_9452_35072",
              x: "1.39045",
              y: "12.4001",
              width: "21.2381",
              height: "9.42881",
              filterUnits: "userSpaceOnUse",
              "color-interpolation-filters": "sRGB",
              children: [
                a.jsx("feFlood", {
                  "flood-opacity": "0",
                  result: "BackgroundImageFix",
                }),
                a.jsx("feBlend", {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "BackgroundImageFix",
                  result: "shape",
                }),
                a.jsx("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha",
                }),
                a.jsx("feOffset", { dy: "0.2" }),
                a.jsx("feGaussianBlur", { stdDeviation: "0.4" }),
                a.jsx("feComposite", {
                  in2: "hardAlpha",
                  operator: "arithmetic",
                  k2: "-1",
                  k3: "1",
                }),
                a.jsx("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0",
                }),
                a.jsx("feBlend", {
                  mode: "normal",
                  in2: "shape",
                  result: "effect1_innerShadow_9452_35072",
                }),
              ],
            }),
            a.jsx("clipPath", {
              id: "bgblur_1_9452_35072_clip_path",
              children: a.jsx("path", {
                transform: "translate(-1.39045 -12.4001)",
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M21.4286 14.2001C21.4286 13.8687 21.16 13.6001 20.8286 13.6001H17.0762C16.7448 13.6001 16.4762 13.8687 16.4762 14.2001V20.0287C16.4762 20.36 16.7448 20.6287 17.0762 20.6287H20.8286C21.16 20.6287 21.4286 20.36 21.4286 20.0287V14.2001ZM14.4762 16.543C14.4762 16.2116 14.2076 15.943 13.8762 15.943H10.1238C9.79244 15.943 9.52381 16.2116 9.52381 16.543V20.0287C9.52381 20.36 9.79244 20.6287 10.1238 20.6287H13.8762C14.2076 20.6287 14.4762 20.36 14.4762 20.0287V16.543ZM6.94287 17.1144C7.27424 17.1144 7.54287 17.383 7.54287 17.7144V20.0287C7.54287 20.36 7.27424 20.6287 6.94287 20.6287H3.19049C2.85912 20.6287 2.59049 20.36 2.59049 20.0287V17.7144C2.59049 17.383 2.85912 17.1144 3.19049 17.1144H6.94287Z",
              }),
            }),
            a.jsxs("linearGradient", {
              id: "paint0_linear_9452_35072",
              x1: "21.6",
              y1: "0.999804",
              x2: "6.6513",
              y2: "8.18793",
              gradientUnits: "userSpaceOnUse",
              children: [
                a.jsx("stop", { "stop-color": "#83E9FF" }),
                a.jsx("stop", { offset: "1", "stop-color": "#8940FF" }),
              ],
            }),
            a.jsxs("linearGradient", {
              id: "paint1_linear_9452_35072",
              x1: "20.6437",
              y1: "6.36552",
              x2: "0.153719",
              y2: "9.37249",
              gradientUnits: "userSpaceOnUse",
              children: [
                a.jsx("stop", { "stop-color": "#5498FF" }),
                a.jsx("stop", { offset: "1", "stop-color": "#8940FF" }),
              ],
            }),
            a.jsxs("linearGradient", {
              id: "paint2_linear_9452_35072",
              x1: "-4.38397",
              y1: "10.2073",
              x2: "-4.92775",
              y2: "21.3691",
              gradientUnits: "userSpaceOnUse",
              children: [
                a.jsx("stop", { offset: "0.24238", "stop-color": "#5498FF" }),
                a.jsx("stop", {
                  offset: "1",
                  "stop-color": "#A131F9",
                  "stop-opacity": "0",
                }),
              ],
            }),
            a.jsxs("linearGradient", {
              id: "paint3_linear_9452_35072",
              x1: "20.6437",
              y1: "15.0058",
              x2: "2.25991",
              y2: "21.8492",
              gradientUnits: "userSpaceOnUse",
              children: [
                a.jsx("stop", { "stop-color": "#5498FF" }),
                a.jsx("stop", { offset: "1", "stop-color": "#8940FF" }),
              ],
            }),
          ],
        }),
      ],
    }),
  T4 = Ft.section`
  padding-block: 44px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  gap: 1rem;
  width: 100%;
  color: ${({ theme: e }) => (e.mode === "dark" ? "#e2e8f0" : "#475569")};
  font-weight: 400;
`,
  $4 = Ft.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
  border-top: 1px solid
    ${({ theme: e }) => (e.mode === "dark" ? "#1f2937" : "#e2e8f0")};
  border-bottom: 1px solid
    ${({ theme: e }) => (e.mode === "dark" ? "#1f2937" : "#e2e8f0")};
  padding-block: 36px;
  a {
    color: ${({ theme: e }) => (e.mode === "dark" ? "#CBD5E0" : "#94a3b8")};
    text-decoration: underline;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 50px;
    padding: 24px 16px;
  }
`,
  D4 = Ft.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,
  Y1 = Ft.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,
  A4 = Ft.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  @media screen and (max-width: 768px) {
    align-items: center;
    padding: 8px;
  }
`,
  Z4 = Ft.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`,
  U4 = Ft.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
  max-width: 800px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`,
  B4 = () => {
    const [e, t] = Je.useState(
      document.documentElement.classList.contains("dark"),
    );
    Je.useEffect(() => {
      const r = new MutationObserver((l) => {
        l.forEach((i) => {
          i.target === document.documentElement &&
            i.attributeName === "class" &&
            t(document.documentElement.classList.contains("dark"));
        });
      });
      return (
        r.observe(document.documentElement, {
          attributes: !0,
          attributeFilter: ["class"],
        }),
        () => r.disconnect()
      );
    }, []);
    const n = { mode: e ? "dark" : "light" };
    return a.jsx(H4, {
      theme: n,
      children: a.jsxs(T4, {
        children: [
          a.jsxs($4, {
            children: [
              a.jsxs(D4, {
                children: [
                  a.jsxs(Y1, {
                    children: [
                      a.jsx(F4, {}),
                      a.jsxs("span", {
                        children: [
                          "View the ",
                          a.jsx("a", {
                            href: "https://www.alchemy.com/blog",
                            children: "changelog",
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsxs(Y1, {
                    children: [
                      a.jsx(z4, {}),
                      a.jsxs("span", {
                        children: [
                          "Join our ",
                          a.jsx("a", {
                            href: "https://discord.gg/9GnAcXQYZ6",
                            children: "community",
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsxs(Y1, {
                    children: [
                      a.jsx(R4, {}),
                      a.jsxs("span", {
                        children: [
                          "Check our ",
                          a.jsx("a", {
                            href: "https://status.alchemy.com",
                            children: "status",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              a.jsx(A4, {
                children: a.jsx(Z4, {
                  children: a.jsx("iframe", {
                    title: "Substack form",
                    src: "https://alchemysupercharged.substack.com/embed",
                    width: "320",
                    height: "280",
                  }),
                }),
              }),
            ],
          }),
          a.jsxs(U4, {
            children: [
              e ? a.jsx(O4, {}) : a.jsx(I4, {}),
              a.jsxs("p", {
                children: [
                  a.jsxs("span", {
                    children: [
                      "© ",
                      new Date().getFullYear(),
                      " Alchemy Insights, Inc. ·",
                      " ",
                    ],
                  }),
                  a.jsx("a", {
                    href: "https://www.alchemy.com/terms-conditions/terms/",
                    children: "Terms of Service",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Cs = "fern-footer",
  xs = async () => {
    if (!document.getElementById("alchemy-footer")) {
      const t = document.createElement("div");
      t.setAttribute("id", "alchemy-footer"),
        t.setAttribute("data-react-component", "true");
      let n = document.getElementById(Cs);
      n ||
        ((n = document.createElement("div")),
        n.setAttribute("id", Cs),
        document.body.appendChild(n)),
        n.insertBefore(t, n.firstChild),
        F0(t).render(a.jsx(Je.StrictMode, { children: a.jsx(B4, {}) })),
        n && (n.style.display = "block");
    }
  };
window.addEventListener("load", async () => {
  window.location.pathname === "/docs" && (await xs()),
    new MutationObserver(async (e) => {
      var n;
      window.location.pathname === "/docs" &&
        e.some(
          (r) =>
            r.type === "childList" &&
            !document.getElementById("alchemy-footer"),
        ) &&
        (await xs()),
        window.location.pathname !== "/docs" &&
          document.getElementById("alchemy-footer") &&
          ((n = document.getElementById("alchemy-footer")) == null ||
            n.remove());
    }).observe(document.body, { childList: !0, subtree: !0 });
});
