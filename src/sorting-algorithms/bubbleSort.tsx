import { Bars } from "../types";
import { verify, compare, swap } from "./helperFunctions";

import React from "react";

export const bubbleSort = async (
  array: Bars[],
  sortSpeed: number,
  setArr: React.Dispatch<React.SetStateAction<Bars[]>>
): Promise<boolean> => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (
        await compare(j + 1, j, array[j + 1].height, array[j].height, sortSpeed)
      ) {
        await swap(
          array,
          j + 1,
          j,
          array[j + 1].height,
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
