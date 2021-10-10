import { Bars } from "../types";
import { verify, compare, swap } from "./helperFunctions";

import React from "react";

const quick_sort = async (
  array: Bars[],
  sortSpeed: number,
  setArr: React.Dispatch<React.SetStateAction<Bars[]>>,
  start: number,
  end: number
): Promise<undefined> => {
  if (start >= end) {
    return;
  }
  let pivot_index = Math.floor((end + start) / 2);
  // set color for pivot
  document.getElementById("bar" + pivot_index)!.classList.add("pivot");
  let index: number = await partition(
    array,
    sortSpeed,
    setArr,
    start,
    end,
    pivot_index
  );
  // remove color for pivot
  document.getElementById("bar" + pivot_index)!.classList.remove("pivot");
  await quick_sort(array, sortSpeed, setArr, start, index - 1);
  await quick_sort(array, sortSpeed, setArr, index, end);
};

const partition = async (
  array: Bars[],
  sortSpeed: number,
  setArr: React.Dispatch<React.SetStateAction<Bars[]>>,
  left: number,
  right: number,
  pivot: number
): Promise<number> => {
  let pivot_height = array[pivot].height;

  while (left <= right) {
    while (
      await compare(left, pivot, array[left].height, pivot_height, sortSpeed)
    ) {
      ++left;
      // found the greater value on the left hand side
    }

    document.getElementById("bar" + left)!.classList.add("hold");

    while (
      await compare(pivot, right, pivot_height, array[right].height, sortSpeed)
    ) {
      --right;
    }

    document.getElementById("bar" + right)!.classList.add("hold");

    if (left <= right) {
      await swap(
        array,
        left,
        right,
        array[left].height,
        array[right].height,
        sortSpeed,
        setArr
      );
      document.getElementById("bar" + left)!.classList.remove("hold");
      document.getElementById("bar" + right)!.classList.remove("hold");
      left++;
      right--;
    } else {
      document.getElementById("bar" + left)!.classList.remove("hold");
      document.getElementById("bar" + right)!.classList.remove("hold");
    }
  }
  return left;
};

export const quickSort = async (
  array: Bars[],
  sortSpeed: number,
  setArr: React.Dispatch<React.SetStateAction<Bars[]>>
): Promise<boolean> => {
  await quick_sort(array, sortSpeed, setArr, 0, array.length - 1);
  await verify(array);
  return true;
};
