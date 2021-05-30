import React, { useContext, useState } from 'react';

export type Sort = {
    algorithm: string;
    setAlgo: React.Dispatch<React.SetStateAction<string>>;
    bars: number;
    setBars: React.Dispatch<React.SetStateAction<number>>;
    inProg: boolean;
}

export const SortingContext = React.createContext<Sort>({
    algorithm: "Please Select an algorithm",
    setAlgo: useState,
    bars: 50,
    setBars: useState,
    inProg: false
});

export const useAlg = () => React.useContext(SortingContext);