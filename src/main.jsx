import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Analytics } from "@vercel/analytics/react"; // Import Vercel Analytics
import "./index.css"; // Import global styles for the application

// Created a root element and rendered the main application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App /> {/* Main application component */}
    <Analytics /> {/* Add Analytics component */}
  </React.StrictMode>
);
