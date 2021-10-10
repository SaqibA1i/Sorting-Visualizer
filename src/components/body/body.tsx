import { useAlg } from "../../Context/SortingContext";
import { useEffect } from "react";
import { Bars } from "../../types";
type Props = {};

const Body: React.FC<Props> = () => {
  const { algorithm, bars, arrayBars, setArr } = useAlg();
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
  }, [bars]);

  return (
    <>
      <h1 className="body-heading">{algorithm}</h1>
      <div id="box" className="array-box">
        {arrayBars.map((entry, id) => {
          return (
            <div
              id={"bar" + id}
              key={id}
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
          );
        })}
      </div>
    </>
  );
};

export default Body;
