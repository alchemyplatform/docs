export const highlightCode = (code: string, lang: string): string => {
  if (!code) return "";

  let highlighted = code;

  if (lang === "json") {
    // Highlight JSON: strings (keys and values), numbers, booleans, null
    highlighted = highlighted
      .replace(
        /"([^"\\]*(\\.[^"\\]*)*)"/g,
        '<span class="token-string">"$1"</span>',
      )
      .replace(/\b(\d+\.?\d*)\b/g, '<span class="token-number">$1</span>')
      .replace(
        /\b(true|false|null)\b/g,
        '<span class="token-boolean">$1</span>',
      );
  } else if (lang === "bash") {
    // Highlight bash with JSON-aware string handling
    highlighted = highlighted
      // First highlight JSON-like content (strings, numbers, booleans)
      .replace(
        /"([^"\\]*(\\.[^"\\]*)*)"/g,
        '<span class="token-string">"$1"</span>',
      )
      .replace(/\b(\d+\.?\d*)\b/g, '<span class="token-number">$1</span>')
      .replace(
        /\b(true|false|null)\b/g,
        '<span class="token-boolean">$1</span>',
      )
      // Highlight quotes for single-quoted strings
      .replace(/'/g, '<span class="token-punctuation">\'</span>')
      // Keywords
      .replace(
        /\b(curl|POST|GET|PUT|DELETE)\b/g,
        '<span class="token-keyword">$1</span>',
      )
      // Flags
      .replace(/(-[A-Za-z])\b/g, '<span class="token-flag">$1</span>');
  }

  return highlighted;
};
