import React, { useState } from "react";
import { Bars } from "../types";

export type Sort = {
  algorithm: string;
  setAlgo: React.Dispatch<React.SetStateAction<string>>;
  bars: number;
  setBars: React.Dispatch<React.SetStateAction<number>>;
  arrayBars: Bars[];
  setArr: React.Dispatch<React.SetStateAction<Bars[]>>;
  inProg: boolean;
  setProg: React.Dispatch<React.SetStateAction<boolean>>;
  sortSpeed: number;
  setSortSpeed: React.Dispatch<React.SetStateAction<number>>;
};

export const SortingContext = React.createContext<Sort>({
  algorithm: "",
  setAlgo: useState,
  bars: 50,
  setBars: useState,
  arrayBars: [],
  setArr: useState,
  inProg: false,
  setProg: useState,
  sortSpeed: 100,
  setSortSpeed: useState,
});

export const useAlg = () => React.useContext(SortingContext);
