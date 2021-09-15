import { Sort, useAlg } from "../../Context/SortingContext";
import { useEffect, useState } from "react";
import { Bars } from "../../types";
import { CircleFill } from "react-bootstrap-icons";
type Props = {};

const Body: React.FC<Props> = () => {
  const { algorithm, setAlgo, bars, arrayBars, setArr } = useAlg();
  useEffect(() => {}, []);
  useEffect(() => {
    let randArr: Bars[] = [];
    for (let i = 0; i < bars; i++) {
      randArr[i] = {
        height: Math.floor(
          Math.random() *
            (window.innerHeight -
              document.getElementById("header-main")!.offsetHeight -
              document.getElementById("header-footer")!.offsetHeight -
              100) +
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
      {/* <p>
        <div className="comp">
          <CircleFill size={13} color="rgb(83, 86, 253)" /> Comparing
        </div>
        <div className="swap">
          <CircleFill size={13} color="rgb(23, 133, 42)" /> Swapping
        </div>
      </p> */}

      <div id="box" className="array-box">
        {arrayBars.map((entry, id) => {
          return (
            <>
              <div
                id={"bar" + id}
                style={{
                  height: entry.height + "px",
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
