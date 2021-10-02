import React, { FC } from "react";

import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import AppRouter from "./components/AppRouter";

const App: FC = () => {
  return <div className="app">
    <AppHeader />
    <AppRouter />
    
    </div>;
};

export default App;
