import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { GlobalLoading } from "react-global-loading";
// import ScrollToTop from "./components/ScrollToTop.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <ScrollToTop /> */}
    <App />
    <Toaster position="top-center" reverseOrder={false} />
    <GlobalLoading />
  </Provider>
);
