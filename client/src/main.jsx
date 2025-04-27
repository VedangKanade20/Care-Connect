import { Toaster } from "react-hot-toast";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import store from "./store/store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <Toaster position="top-center" reverseOrder={false} />
  </StrictMode>
);
