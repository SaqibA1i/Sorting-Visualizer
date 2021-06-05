import { Bars } from "../types";
import { bubbleSort } from "./bubbleSort";

export const algorithms = async (algo: string, array: Bars[]): Promise<boolean> => {
    switch (algo) {
        case "Bubble Sort":
            return await bubbleSort(array);
        case "Merge Sort":
            return await bubbleSort(array);
        case "Quick Sort":
            return await bubbleSort(array);
    }
    return await bubbleSort(array);
}
