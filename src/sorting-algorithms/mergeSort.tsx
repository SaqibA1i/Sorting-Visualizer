import { Bars } from "../types";
import { set, verify, compare, swap } from "./helperFunctions";

import React, { useContext, useState } from "react";

const merge = (left: Bars[], right: Bars[]): Bars[] => {
  let arr: Bars[] = [];
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (left[0].height < right[0].height) {
      let temp: Bars | undefined = left.shift();
      temp && arr.push(temp);
    } else {
      let temp: Bars | undefined = right.shift();
      temp && arr.push(temp);
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
};

const mergeSortHelper = async (
  array: Bars[],
  sortSpeed: number,
  setArr: React.Dispatch<React.SetStateAction<Bars[]>>
): Promise<Bars[]> => {
  const half = array.length / 2;

  // Base case or terminating case
  if (array.length < 2) {
    return array;
  }

  const left: Bars[] = array.splice(0, half);
  let ar: Bars[] = merge(
    await mergeSortHelper(left, sortSpeed, setArr),
    await mergeSortHelper(array, sortSpeed, setArr)
  );
  console.log(ar);
  await set(ar, setArr);

  return array;
};

export const mergeSort = async (
  array: Bars[],
  sortSpeed: number,
  setArr: React.Dispatch<React.SetStateAction<Bars[]>>
): Promise<boolean> => {
  await mergeSortHelper(array, sortSpeed, setArr);
  await verify(array);
  return true;
};
