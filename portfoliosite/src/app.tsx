import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "core-js/stable";
import "regenerator-runtime/runtime";
import "react-circular-progressbar/dist/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
// import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
// import '../node_modules/@fortawesome/fontawesome-free/js/all.js';

import PortfolioRouter from "./PortfolioComponents/PortfolioRouter";

const queryClient = new QueryClient();

const jsxWrapper = (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <PortfolioRouter/>
    </QueryClientProvider>
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(jsxWrapper);
