import App from "./App.js";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./Styles/global.css";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);
