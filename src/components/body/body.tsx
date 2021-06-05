import { Sort, useAlg } from "../../Context/SortingContext";
import { useEffect, useState } from "react";
import { Bars } from "../../types";

type Props = {

}

const Body: React.FC<Props> = () => {
    const { algorithm, setAlgo, bars, arrayBars, setArr } = useAlg();

    useEffect(() => {
        let randArr: Bars[] = [];
        for (let i = 0; i < bars; i++) {
            randArr[i] = { height: Math.floor(Math.random() * (200 - 5) + 5) };
        }
        setArr(randArr);
        console.log(bars)
    }, [bars])
    return (
        <>
            <h1 className="body-heading">
                {algorithm}
            </h1>
            <div id="box" className="array-box">
                {
                    arrayBars.map((entry, id) => {
                        return (
                            <>
                                <div id={"bar" + id} style={{ height: entry.height + 'px', width: "-webkit-fill-available" }} className="array-entry">
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Body;