import React, { ReactNode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { store } from "./core/redux/store";
import App from "./App";
import "./tailwind.css";
import Error500 from "./components/pages/consumer/error/500";

type AppProviderProps = {
  children: ReactNode;
};

function AppProvider(props: AppProviderProps) {
  const { children } = props;
  return (
    <ErrorBoundary fallback={<Error500/>}>
      {" "}
      <Suspense fallback={<div>Loading...</div>}>
        <Provider store={store}>
          <BrowserRouter>{children}</BrowserRouter>
        </Provider>
      </Suspense>
    </ErrorBoundary>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
