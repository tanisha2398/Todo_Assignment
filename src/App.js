import React from "react";

import "./resources/styles.css";
import Header from "./components/Header";
import TodoContent from "./components/TodoContent/index";
function App() {
  return (
    <div className="App" style={{ height: "1500px", background: "black" }}>
      <Header />
      <TodoContent />
    </div>
  );
}

export default App;
