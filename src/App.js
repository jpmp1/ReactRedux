import React from 'react';
import './App.css';
import Media from "./components/media/Media";
import Soma from "./components/soma/Soma";
import Sorteio from "./components/sorteio/Sorteio";
import Intervalo from "./components/intervalo/Intervalo";

function App() {
  return (
    <div className="App">
        <h1>React Redux</h1>
        <div className="linha">
            <Intervalo/>
        </div>
        <div className="linha">
            <Media />
            <Soma />
            <Sorteio />
        </div>

    </div>
  );
}

export default App;
