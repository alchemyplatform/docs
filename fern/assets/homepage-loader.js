// Homepage script loader - only downloads output.js on /docs pages
console.log("Homepage loader running on:", window.location.pathname);

// Only load on homepage
const cleanPath = window.location.pathname.replace(/\/+$/, "");
if (cleanPath === "/docs") {
  console.log("On homepage, detecting base URL...");

  // Check if already loaded
  if (!document.getElementById("homepage-script")) {
    // Find base URL from our own script tag
    let baseUrl = null;
    const scripts = Array.from(document.querySelectorAll("script[src]"));
    for (const script of scripts) {
      const src = script.src;
      if (src.includes("homepage-loader.js")) {
        baseUrl = src.substring(0, src.lastIndexOf("/assets/"));
        console.log("Found base URL from homepage-loader.js:", baseUrl);
        break;
      }
    }

    if (baseUrl) {
      const scriptUrl = `${baseUrl}/dist/output.js`;
      console.log("Loading homepage script from:", scriptUrl);

      const script = document.createElement("script");
      script.id = "homepage-script";
      script.src = scriptUrl;
      script.onload = () => console.log("Homepage script loaded successfully");
      script.onerror = (e) => {
        console.error("Failed to load homepage script from:", scriptUrl, e);
        // Could add fallback logic here
      };
      document.head.appendChild(script);
    } else {
      console.error("Could not determine base URL for homepage script");
    }
  } else {
    console.log("Homepage script already loaded");
  }
} else {
  console.log("Not on homepage, skipping script load");
}
