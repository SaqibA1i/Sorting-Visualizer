import { Bars } from "../types";
import { set, verify, compare, swap, delay } from "./helperFunctions";

import React, { useContext, useState } from "react";

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
  let index: number = await partition(
    array,
    sortSpeed,
    setArr,
    start,
    end,
    pivot_index
  );
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
  while (left <= right) {
    while (
      await compare(
        left,
        pivot,
        array[left].height,
        array[pivot].height,
        sortSpeed
      )
    ) {
      ++left;
    }
    while (
      await compare(
        pivot,
        right,
        array[pivot].height,
        array[right].height,
        sortSpeed
      )
    ) {
      --right;
    }
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
      left++;
      right--;
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
