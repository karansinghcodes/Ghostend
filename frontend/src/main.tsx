import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { FireBaseProvider } from "./Context/fireBase.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FireBaseProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FireBaseProvider>
  </StrictMode>
);
