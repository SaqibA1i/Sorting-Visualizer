import { Bars } from "../types";
import { verify, compare, swap } from "./helperFunctions";

export const bubbleSort = async (array: Bars[]): Promise<boolean> => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (await compare(i, j, array[i].height, array[j].height)) {
                await swap(array, i, j, array[i].height, array[j].height);
            }
        }
    }
    await verify(array);

    return true;
}