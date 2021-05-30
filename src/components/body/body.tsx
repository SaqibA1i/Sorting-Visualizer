

import { Sort, useAlg } from "../../Context/SortingContext";
import { useEffect, useState } from "react";

type Props = {

}
type Bars = {
    height: number;
}
const Body: React.FC<Props> = () => {
    const [newarr, setArr] = useState<Bars[]>([]);
    const { algorithm, setAlgo, bars } = useAlg();

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
            <h1>
                {algorithm}
            </h1>
            <div id="box" className="array-box">
                {
                    newarr.map((entry) => {
                        return (
                            <div style={{ height: entry.height + 'px', width: "-webkit-fill-available" }} className="array-entry">

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Body;