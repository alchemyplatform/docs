// Debug: Log that script is running
console.log("load-custom-app.js executing", window.location.pathname);

function loadHomepageScript() {
  // Simple pathname check - only load script once when on /docs
  const cleanPath = window.location.pathname.replace(/\/+$/, "");
  console.log("Clean path:", cleanPath);

  if (cleanPath === "/docs") {
    console.log("On homepage, checking for script...");
    // Check if script is already loaded
    if (!document.getElementById("homepage-script")) {
      console.log("Loading homepage script...");
      const script = document.createElement("script");
      script.id = "homepage-script";
      script.src = "/dist/output.js";
      document.head.appendChild(script);
    } else {
      console.log("Homepage script already loaded");
    }
  } else {
    console.log("Not on homepage, path is:", cleanPath);
  }
}

// Run immediately
loadHomepageScript();

// Also run when DOM is ready (in case beforeInteractive is too early)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadHomepageScript);
} else {
  // DOM is already ready
  loadHomepageScript();
}
