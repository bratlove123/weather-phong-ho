import React from "react";
import { Provider } from "react-redux";
import store from "app-redux/store";
import "./App.scss";
import { HomePage } from "pages/home-page/homePage";

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <HomePage></HomePage>
      </div>
    </Provider>
  );
}

export default App;
