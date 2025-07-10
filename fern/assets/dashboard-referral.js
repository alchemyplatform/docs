/* eslint-disable no-shadow, no-console */
!(function () {
  "use strict";
  const e = {
    utm_source: "docs",
    utm_medium: "referral",
    utm_campaign: "docs_to_dashboard",
  };
  function t() {
    const e = window.location.href,
      t = window.location.pathname,
      n = e.match(/\/docs\/(.+)$/);
    return n
      ? n[1].replace(/\//g, "_")
      : t.replace(/^\//, "").replace(/\//g, "_") || "homepage";
  }
  function n(t, n) {
    try {
      const o = new URL(t);
      return (
        o.searchParams.set("utm_source", e.utm_source),
        o.searchParams.set("utm_medium", e.utm_medium),
        o.searchParams.set("utm_campaign", e.utm_campaign),
        o.searchParams.set("utm_content", n),
        o.toString()
      );
    } catch (e) {
      return console.warn("Error adding UTM parameters to URL:", t, e), t;
    }
  }
  function o() {
    const e = t();
    let o = 0;
    document
      .querySelectorAll('a[href*="dashboard.alchemy.com/signup"]')
      .forEach((t) => {
        const r = t.getAttribute("href");
        if (r && r.match(/^https?:\/\/dashboard\.alchemy\.com\/signup\/?$/)) {
          const s = n(r, e);
          t.setAttribute("href", s),
            o++,
            t.setAttribute("data-utm-tracked", "true");
        }
      }),
      o > 0 &&
        (console.log(`✅ Updated ${o} dashboard links with UTM tracking`),
        console.log(`📄 Page slug: ${e}`));
  }
  function r() {
    o();
    const e = new MutationObserver(function (e) {
      let t = !1;
      e.forEach(function (e) {
        "childList" === e.type &&
          e.addedNodes.length > 0 &&
          e.addedNodes.forEach(function (e) {
            if (e.nodeType === Node.ELEMENT_NODE) {
              const n =
                e.querySelectorAll &&
                e.querySelectorAll('a[href*="dashboard.alchemy.com/signup"]')
                  .length > 0;
              (n ||
                ("A" === e.tagName &&
                  e.href &&
                  e.href.includes("dashboard.alchemy.com/signup"))) &&
                (t = !0);
            }
          });
      }),
        t && o();
    });
    e.observe(document.body, { childList: !0, subtree: !0 });
  }
  function s(e) {
    "loading" === document.readyState
      ? document.addEventListener("DOMContentLoaded", e)
      : e();
  }
  s(function () {
    setTimeout(r, 100);
  }),
    window.addEventListener("popstate", function () {
      setTimeout(o, 100);
    }),
    (window.alchemyUTMTracking = { update: o, getCurrentSlug: t });
})();
