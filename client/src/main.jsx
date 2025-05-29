import { LoadingProvider } from "@/contexts/LoadingContext";
import { extendedApiSlice } from "@/features/posts/postSlice";
import { store } from "@/store/store";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/global.css";

store.dispatch(extendedApiSlice.endpoints.getPosts.initiate());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/ista-mohamed-el-fassi/">
        <LoadingProvider>
          <App />
        </LoadingProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
