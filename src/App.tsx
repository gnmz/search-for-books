import React, { FC } from "react";

import "./App.css";
import AppRouter from "./components/AppRouter";

const App: FC = () => {
  return <div className="app">
    <AppRouter />
    </div>;
};

export default App;
