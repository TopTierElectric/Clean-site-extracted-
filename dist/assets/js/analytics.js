/**
 * Analytics bootstrap (externalized to enable CSP hardening + easier maintenance).
 *
 * - Loads GA4 gtag.js
 * - Initializes dataLayer + gtag
 * - Calls gtag('config', ...)
 */
(function () {
  "use strict";

  // Single source of truth for the GA4 Measurement ID.
  var GA4_ID = "G-FTQKB78PLE";

  // Avoid double-loading if injected twice.
  if (window.__tteAnalyticsLoaded) return;
  window.__tteAnalyticsLoaded = true;

  // Load gtag.js
  var s = document.createElement("script");
  s.async = true;
  s.src =
    "https://www.googletagmanager.com/gtag/js?id=" +
    encodeURIComponent(GA4_ID);
  document.head.appendChild(s);

  // Initialize dataLayer + gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA4_ID);
})();
