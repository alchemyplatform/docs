// Simple pathname check - only load script once when on /docs
const regex = /\/docs\//;
if (regex.test(window.location.pathname)) {
  // Check if script is already loaded
  if (!document.getElementById("homepage-script")) {
    const script = document.createElement("script");
    script.id = "homepage-script";
    script.src = "/dist/output.js";
    document.head.appendChild(script);
  }
}
