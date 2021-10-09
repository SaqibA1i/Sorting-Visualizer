import { Bars } from "../types";
import React from "react";

// Helper Functions
// delay: Adds delay to the algorithm so that the process can be seen
export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
export const compare = async (
  index1: number,
  index2: number,
  n1: number,
  n2: number,
  sortSpeed: number
): Promise<boolean> => {
  // mark the color as they are being compared
  document.getElementById("bar" + index1)!.classList.add("being-compared");
  document.getElementById("bar" + index2)!.classList.add("being-compared");
  await delay(sortSpeed);

  // reset the color
  document.getElementById("bar" + index1)!.classList.remove("being-compared");
  document.getElementById("bar" + index2)!.classList.remove("being-compared");
  if (n1 < n2) {
    return true;
  } else {
    return false;
  }
};

export const swap = async (
  array: Bars[],
  index1: number,
  index2: number,
  n1: number,
  n2: number,
  sortSpeed: number,
  setArr: React.Dispatch<React.SetStateAction<Bars[]>>
) => {
  //   // swap the height in the DOM
  //   document.getElementById("bar" + index1)!.style.height = n2 + "px";
  //   document.getElementById("bar" + index2)!.style.height = n1 + "px";
  // mark the color as they are being swapped
  document.getElementById("bar" + index1)!.classList.add("being-swapped");
  document.getElementById("bar" + index2)!.classList.add("being-swapped");
  // wait
  await delay(sortSpeed);
  // reset the color
  document.getElementById("bar" + index1)!.classList.remove("being-swapped");
  document.getElementById("bar" + index2)!.classList.remove("being-swapped");
  let d = array[index1];
  array[index1] = array[index2];
  array[index2] = d;
  setArr([...array]);
};
export const set = async (
  array: Bars[],
  setArr: React.Dispatch<React.SetStateAction<Bars[]>>
) => {
  setArr([...array]);
};
export const verify = async (array: Bars[]) => {
  for (let i = 0; i < array.length - 1; i++) {
    await delay(50);
    if (array[i].height <= array[i + 1].height) {
      document.getElementById("bar" + i)!.classList.add("being-swapped");
    } else {
      document.getElementById("bar" + i)!.classList.add("error");
    }
  }
  document
    .getElementById("bar" + (array.length - 1))!
    .classList.add("being-swapped");
  await delay(500);
  // resets the colors after a delay
  for (let i = 0; i < array.length; i++) {
    document.getElementById("bar" + i)!.classList.remove("being-swapped");
  }
};
