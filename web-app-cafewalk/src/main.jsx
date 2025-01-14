import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import CafeWalkApp from "./CafeWalkApp.jsx"

createRoot (document.getElementById("root")).render(
    <BrowserRouter>
        <CafeWalkApp />
    </BrowserRouter>
);