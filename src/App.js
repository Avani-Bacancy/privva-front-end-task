import React from "react";
import "./App.scss";
import Header from "./components/Header";
import AppContainer from "./components/AppContainer";

function App() {
  return (
    <main>
      <Header />
      <h1 className="text-center header mt-5 text-success">Progress Bar</h1>
      <AppContainer />
    </main>
  );
}

export default App;
