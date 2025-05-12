import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Scale normalizer function to prevent size discrepancies between environments
const normalizeScale = () => {
  // Force the viewport to use exact 1:1 scaling
  const meta = document.querySelector('meta[name="viewport"]');
  if (meta) {
    meta.setAttribute(
      "content",
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    );
  }

  // Apply consistent scaling
  document.documentElement.style.fontSize = "16px";
  document.body.style.fontSize = "16px";
};

// Run normalizer immediately
normalizeScale();

// Re-run on window resize
window.addEventListener("resize", normalizeScale);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
