import React from "react";
import ReactDOM from "react-dom/client";
import Welcome from "./pages/Welcome";
import reportWebVitals from "./reportWebVitals";

// Old portfolio (./App) is kept in the repo; the site now shows a welcome
// screen that redirects to the new portfolio.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>
);

reportWebVitals();
