/* eslint-disable no-shadow */
var UTM_PARAMETERS = {
    utm_source: "docs",
    utm_medium: "referral",
    utm_campaign: "docs_to_dashboard",
  },
  DASHBOARD_DOMAIN = "dashboard.alchemy.com",
  DOCS_PATH_REGEX = /\/docs\/(.+)$/,
  DASHBOARD_URL_REGEX = /^https?:\/\/dashboard\.alchemy\.com/;
!(function () {
  "use strict";
  function e() {
    var e = window.location.href,
      t = window.location.pathname,
      r = e.match(DOCS_PATH_REGEX);
    return r && r[1]
      ? r[1].replace(/\//g, "_")
      : t.replace(/^\//, "").replace(/\//g, "_") || "homepage";
  }
  function t() {
    var t = e();
    document
      .querySelectorAll(
        'a[href*="'.concat(
          DASHBOARD_DOMAIN,
          '"]:not([data-utm-tracked="true"])',
        ),
      )
      .forEach(function (e) {
        var r = e,
          a = r.getAttribute("href");
        if (a && DASHBOARD_URL_REGEX.test(a)) {
          var n = (function (e, t) {
            try {
              var r = new URL(e);
              return (
                r.searchParams.set("utm_source", UTM_PARAMETERS.utm_source),
                r.searchParams.set("utm_medium", UTM_PARAMETERS.utm_medium),
                r.searchParams.set("utm_campaign", UTM_PARAMETERS.utm_campaign),
                r.searchParams.set("utm_content", t),
                r.toString()
              );
            } catch (t) {
              return (
                console.warn("Error adding UTM parameters to URL:", e, t), e
              );
            }
          })(a, t);
          r.setAttribute("href", n), r.setAttribute("data-utm-tracked", "true");
        }
      });
  }
  function r() {
    new MutationObserver(function (e) {
      var r = !1;
      e.forEach(function (e) {
        "childList" === e.type &&
          e.addedNodes.length > 0 &&
          e.addedNodes.forEach(function (e) {
            (function (e) {
              if (e.nodeType !== Node.ELEMENT_NODE) return !1;
              var t = e;
              if ("A" === t.tagName) {
                var r = t;
                return Boolean(r.href) && r.href.includes(DASHBOARD_DOMAIN);
              }
              return (
                !!t.querySelectorAll &&
                t.querySelectorAll('a[href*="'.concat(DASHBOARD_DOMAIN, '"]'))
                  .length > 0
              );
            })(e) && (r = !0);
          });
      }),
        r && t();
    }).observe(document.body, { childList: !0, subtree: !0 });
  }
  function a() {
    t(), r();
  }
  var n;
  (n = function () {
    setTimeout(a, 100);
  }),
    "loading" === document.readyState
      ? document.addEventListener("DOMContentLoaded", n)
      : n(),
    window.addEventListener("popstate", function () {
      setTimeout(t, 100);
    }),
    (window.alchemyUTMTracking = { update: t, getCurrentSlug: e });
})();
