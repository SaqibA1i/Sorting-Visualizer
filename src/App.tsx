import React, { useContext, useState } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Body from "./components/body/body";
import { SortingContext } from "./Context/SortingContext";
import "./sass/styler.scss";

function App() {
  const [currAlgo, setAlgo] = useState("Please Select hm");
  const [bars, setBars] = useState(50);

  return (
    <div className="App">
      <SortingContext.Provider value={{
        algorithm: currAlgo,
        setAlgo: setAlgo,
        bars: bars,
        setBars: setBars,
        inProg: false
      }}>
        <Header />
        <Body />
      </SortingContext.Provider>
    </div>
  );
}

export default App;
