import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store.js";

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {/* Redux Provider makes the store available to all components */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
