import { Bars } from "../types";
import { verify, compare, swap } from "./helperFunctions";

import React from "react";

export const bubbleSort = async (
  array: Bars[],
  sortSpeed: number,
  setArr: React.Dispatch<React.SetStateAction<Bars[]>>
): Promise<boolean> => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (await compare(i, j, array[i].height, array[j].height, sortSpeed)) {
        await swap(
          array,
          i,
          j,
          array[i].height,
          array[j].height,
          sortSpeed,
          setArr
        );
      }
    }
  }
  await verify(array);

  return true;
};
