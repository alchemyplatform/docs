// Homepage script loader - runs on all pages, only acts on /docs
console.log("Homepage loader running on:", window.location.pathname);

// Only load on homepage
const cleanPath = window.location.pathname.replace(/\/+$/, "");
if (cleanPath === "/docs") {
  console.log("On homepage, loading script...");

  // Check if already loaded
  if (!document.getElementById("homepage-script")) {
    const script = document.createElement("script");
    script.id = "homepage-script";
    script.src = "./dist/output.js"; // Relative to current page
    script.onload = () => console.log("Homepage script loaded successfully");
    script.onerror = (e) => console.error("Failed to load homepage script:", e);
    document.head.appendChild(script);
  } else {
    console.log("Homepage script already loaded");
  }
} else {
  console.log("Not on homepage, skipping script load");
}
