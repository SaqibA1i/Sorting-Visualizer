import { Bars } from "../types";
import { verify, compare, delay } from "./helperFunctions";

import React from "react";

const merge = async (
  array: Bars[],
  sortSpeed: number,
  setArr: React.Dispatch<React.SetStateAction<Bars[]>>,
  start: number,
  end: number
): Promise<undefined> => {
  let middle = Math.floor((end - start) / 2);

  let left = start;
  let left_end = start + middle;

  let right = left_end + 1;
  let right_end = end;
  let temp = [];

  while (left <= left_end && right <= right_end) {
    if (
      await compare(
        left,
        right,
        array[left].height,
        array[right].height,
        sortSpeed
      )
    ) {
      temp.push(array[left]);
      ++left;
    } else {
      temp.push(array[right]);
      ++right;
    }
  }

  // There are remaining sorted entries in either right or left array
  //  so copy them over
  for (let i = right; i <= right_end; i++) {
    temp.push(array[i]);
  }

  for (let i = left; i <= left_end; i++) {
    temp.push(array[i]);
  }
  // assign temp to array
  let j = 0;
  for (let i = start; i <= end; i++) {
    array[i] = temp[j];
    await delay(sortSpeed);
    setArr([...array]);
    ++j;
  }
  return;
};

const merge_sort_helper = async (
  array: Bars[],
  sortSpeed: number,
  setArr: React.Dispatch<React.SetStateAction<Bars[]>>,
  start: number,
  end: number
): Promise<undefined> => {
  if (start >= end) {
    return;
  }

  let middle = Math.floor((end - start) / 2);

  let left = start;
  let left_end = left + middle;

  let right = left_end + 1;
  let right_end = end;

  await merge_sort_helper(array, sortSpeed, setArr, left, left_end);
  await merge_sort_helper(array, sortSpeed, setArr, right, right_end);

  await merge(array, sortSpeed, setArr, start, end);
};

export const mergeSort = async (
  array: Bars[],
  sortSpeed: number,
  setArr: React.Dispatch<React.SetStateAction<Bars[]>>
): Promise<boolean> => {
  await merge_sort_helper(array, sortSpeed, setArr, 0, array.length - 1);
  await verify(array);
  return true;
};
