import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/body/body";
import { SortingContext } from "./Context/SortingContext";
import "./sass/styler.scss";
import { Bars } from "./types";
import { options } from "./components/Header/options";

function App() {
  const [currAlgo, setAlgo] = useState<string>(options[0]["algorithm"]);
  const [bars, setBars] = useState(50);
  const [newarr, setArr] = useState<Bars[]>([]);
  const [prog, setProg] = useState<boolean>(false);
  const [sortSpeed, setSortSpeed] = useState<number>(20);
  return (
    <div className="App">
      <SortingContext.Provider
        value={{
          algorithm: currAlgo,
          setAlgo: setAlgo,
          bars: bars,
          setBars: setBars,
          arrayBars: newarr,
          setArr: setArr,
          inProg: prog,
          setProg: setProg,
          sortSpeed: sortSpeed,
          setSortSpeed: setSortSpeed,
        }}
      >
        <Header />
        <Body />
      </SortingContext.Provider>
    </div>
  );
}

export default App;
