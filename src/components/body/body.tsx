import { Sort, useAlg } from "../../Context/SortingContext";
import { useEffect, useState } from "react";
import { Bars } from "../../types";

type Props = {};

const Body: React.FC<Props> = () => {
  const { algorithm, setAlgo, bars, arrayBars, setArr } = useAlg();

  useEffect(() => {
    let randArr: Bars[] = [];
    for (let i = 0; i < bars; i++) {
      randArr[i] = {
        height: Math.floor(
          Math.random() *
            ((window.screen.height -
              document.getElementById("header-main")!.offsetHeight -
              document.getElementById("header-footer")!.offsetHeight) -
              40) +
            40
        ),
      };
    }
    setArr(randArr);
    console.log(bars);
  }, [bars]);

  useEffect(() => {}, [arrayBars]);
  return (
    <>
      <h1 className="body-heading">{algorithm}</h1>
      <div id="box" className="array-box">
        {arrayBars.map((entry, id) => {
          return (
            <>
              <div
                id={"bar" + id}
                style={{
                  height: entry.height + "px",
                  width: "-webkit-fill-available",
                }}
                className="array-entry"
              >
                {bars <= 40 ? (
                  <p className={"array-digit"}>{entry.height}</p>
                ) : (
                  ""
                )}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Body;
