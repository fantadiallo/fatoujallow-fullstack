import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { I18nProvider } from "./i18n/I18nProvider";
import { ThemeProvider } from "./theme/ThemeProvider";  // <-- add this
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>            {/* <-- wrap the whole app */}
      <I18nProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nProvider>
    </ThemeProvider>
  </React.StrictMode>
);
