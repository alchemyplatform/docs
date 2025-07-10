/**
 * Dashboard Referral Tracking Script
 *
 * Automatically adds UTM tracking parameters to all dashboard.alchemy.com links
 * based on the current page's slug for Google Analytics tracking.
 *
 * UTM Parameters:
 * - utm_source: docs
 * - utm_medium: referral
 * - utm_campaign: docs_to_dashboard
 * - utm_content: [current page slug with underscores]
 */

// =============================================================================
// Types and Interfaces
// =============================================================================

interface UTMParameters {
  utm_source: string;
  utm_medium: string;
}

interface TrackingAPI {
  update: () => void;
  getCurrentSlug: () => string;
}

// =============================================================================
// Constants
// =============================================================================

const UTM_PARAMETERS: UTMParameters = {
  utm_source: "docs",
  utm_medium: "referral",
};

const DASHBOARD_DOMAIN = "dashboard.alchemy.com";
const DOCS_PATH_REGEX = /\/docs\/(.+)$/;
const DASHBOARD_URL_REGEX = /^https?:\/\/dashboard\.alchemy\.com/;

// =============================================================================
// Main Implementation
// =============================================================================

(function initializeDashboardTracking() {
  "use strict";

  /**
   * Extract the page slug from the current URL for utm_content parameter.
   * Converts forward slashes to underscores for better Google Analytics filtering.
   *
   * @returns The current page slug or 'homepage' as fallback
   */
  function getCurrentPageSlug(): string {
    const currentUrl = window.location.href;
    const currentPath = window.location.pathname;

    // Try to extract slug from URL - everything after /docs/
    const docsMatch = currentUrl.match(DOCS_PATH_REGEX);
    if (docsMatch && docsMatch[1]) {
      return docsMatch[1].replace(/\//g, "_");
    }

    // Fallback: use pathname without leading slash and replace slashes with underscores
    const pathSlug = currentPath.replace(/^\//, "").replace(/\//g, "_");
    return pathSlug || "homepage";
  }

  /**
   * Add UTM parameters to a dashboard URL.
   *
   * @param originalUrl - The original dashboard URL
   * @param utmContent - The utm_content parameter value
   * @returns The URL with UTM parameters added
   */
  function addUTMParameters(originalUrl: string, utmContent: string): string {
    try {
      const urlObject = new URL(originalUrl);

      // Add all UTM parameters
      urlObject.searchParams.set("utm_source", UTM_PARAMETERS.utm_source);
      urlObject.searchParams.set("utm_medium", UTM_PARAMETERS.utm_medium);
      urlObject.searchParams.set("utm_content", utmContent);

      return urlObject.toString();
    } catch (error) {
      // Log error but return original URL to avoid breaking links
      console.warn("Error adding UTM parameters to URL:", originalUrl, error);
      return originalUrl;
    }
  }

  /**
   * Find and update all dashboard.alchemy.com links with UTM parameters.
   * Only processes links that haven't been marked as already tracked.
   */
  function updateDashboardLinks(): void {
    const currentSlug = getCurrentPageSlug();

    // Find all links that point to dashboard.alchemy.com and haven't been processed
    const dashboardLinks = document.querySelectorAll(
      `a[href*="${DASHBOARD_DOMAIN}"]:not([data-utm-tracked="true"])`,
    );

    dashboardLinks.forEach((linkElement) => {
      const anchor = linkElement as HTMLAnchorElement;
      const originalHref = anchor.getAttribute("href");

      // Only process valid dashboard.alchemy.com URLs
      if (originalHref && DASHBOARD_URL_REGEX.test(originalHref)) {
        const updatedHref = addUTMParameters(originalHref, currentSlug);
        anchor.setAttribute("href", updatedHref);

        // Mark as processed to avoid duplicate processing
        anchor.setAttribute("data-utm-tracked", "true");
      }
    });
  }

  /**
   * Check if a DOM node or its children contain dashboard links.
   *
   * @param node - The DOM node to check
   * @returns True if the node contains dashboard links
   */
  function containsDashboardLinks(node: Node): boolean {
    if (node.nodeType !== Node.ELEMENT_NODE) {
      return false;
    }

    const element = node as Element;

    // Check if the element itself is a dashboard link
    if (element.tagName === "A") {
      const anchor = element as HTMLAnchorElement;
      return Boolean(anchor.href) && anchor.href.includes(DASHBOARD_DOMAIN);
    }

    // Check if the element contains dashboard links
    if (element.querySelectorAll) {
      return (
        element.querySelectorAll(`a[href*="${DASHBOARD_DOMAIN}"]`).length > 0
      );
    }

    return false;
  }

  /**
   * Set up DOM mutation observer to handle dynamically added links.
   * This ensures the script works with Single Page Applications (SPAs).
   */
  function setupMutationObserver(): void {
    const observer = new MutationObserver((mutations) => {
      let shouldUpdate = false;

      // Check all mutations for new dashboard links
      mutations.forEach((mutation) => {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach((node) => {
            if (containsDashboardLinks(node)) {
              shouldUpdate = true;
            }
          });
        }
      });

      // Update links if new dashboard links were found
      if (shouldUpdate) {
        updateDashboardLinks();
      }
    });

    // Start observing the document body for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  /**
   * Initialize the complete tracking system.
   * Sets up initial link processing and ongoing mutation observation.
   */
  function initializeTrackingSystem(): void {
    // Process existing links on the page
    updateDashboardLinks();

    // Set up observer for dynamically added content
    setupMutationObserver();
  }

  /**
   * Wait for DOM to be ready before initializing tracking.
   *
   * @param callback - Function to call when DOM is ready
   */
  function whenDOMReady(callback: () => void): void {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      // DOM is already ready
      callback();
    }
  }

  // =============================================================================
  // Initialization
  // =============================================================================

  // Initialize tracking when DOM is ready
  whenDOMReady(() => {
    // Small delay to ensure all initial content is loaded
    setTimeout(initializeTrackingSystem, 100);
  });

  // Handle Single Page Application navigation
  window.addEventListener("popstate", () => {
    // Re-process links after navigation with a small delay
    setTimeout(updateDashboardLinks, 100);
  });

  // =============================================================================
  // Public API
  // =============================================================================

  // Export public API for manual control if needed
  // Using type assertion to avoid TypeScript global declaration issues
  (window as unknown as Record<string, unknown>).alchemyUTMTracking = {
    update: updateDashboardLinks,
    getCurrentSlug: getCurrentPageSlug,
  } as TrackingAPI;
})();
