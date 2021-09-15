import { Bars } from "../types";
import { verify, compare, swap } from "./helperFunctions";

import React from "react";

export const insertionSort = async (
  array: Bars[],
  sortSpeed: number,
  setArr: React.Dispatch<React.SetStateAction<Bars[]>>
): Promise<boolean> => {
  // a loop that begins at the second element
  //  with a nested for loop that works backwards
  //  inserting the element at the correct position
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    while (
      j >= 0 &&
      (await compare(j + 1, j, array[j + 1].height, array[j].height, sortSpeed))
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
      j--;
    }
  }

  await verify(array);
  return true;
};
