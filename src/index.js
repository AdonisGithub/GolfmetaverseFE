import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { store } from "./_helpers";

/*bootstrap4 */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
/*costom bootstrap */
import "../src/assets/styles/costom-btsp.scss";
import ReactNotification from "react-notifications-component";

/* react bootstrap */
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';

/* MDB boostrap */
// import 'mdbreact/dist/css/mdb-free.css';
// import "./assets/scss/mdb-free.scss"

import "react-notifications-component/dist/theme.css";
//import useLoadGoogleMapApi from "../src/Components/HotDealsPageSection/HotDealsLeftBarSearchSection/LocationSearch/UseLoadGoogleMapAPI"
import 'pure-react-carousel/dist/react-carousel.es.css';

ReactDOM.render(
  <Provider store={store}>
    <ReactNotification />
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
