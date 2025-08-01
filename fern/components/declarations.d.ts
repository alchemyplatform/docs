// Make React available globally for custom components
import type * as ReactType from "react";

declare global {
  const React: typeof ReactType;
}
