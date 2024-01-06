import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./common.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Folder from "@pages/Folder/Folder";
import Shared from "@pages/Shared/Shared";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/shared">
            <Route index element={<Shared />} />
          </Route>
          <Route path="/folder">
            <Route index element={<Folder />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
