import { Bars } from "../types";
import { bubbleSort } from "./bubbleSort";
import { mergeSort } from "./mergeSort";
import { insertionSort } from "./insertionSort";
import React, { useContext, useState } from "react";

export const algorithms = async (
  algo: string,
  array: Bars[],
  sortSpeed: number,
  setArr: React.Dispatch<React.SetStateAction<Bars[]>>
): Promise<boolean> => {
  switch (algo) {
    case "Bubble Sort":
      return await bubbleSort(array, sortSpeed, setArr);
    case "Insertion Sort":
      return await insertionSort(array, sortSpeed, setArr);
    case "Quick Sort":
      return await bubbleSort(array, sortSpeed, setArr);
  }
  return await bubbleSort(array, sortSpeed, setArr);
};
