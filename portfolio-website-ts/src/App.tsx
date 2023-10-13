import React from "react";
import "./styles/main.scss";
import { Link } from "./components/buttons/Link";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <main>
        <Link text="blah blah" classType="primary" link="ww.google.com"></Link>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
