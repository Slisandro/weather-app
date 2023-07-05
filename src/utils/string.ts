import { getDay, getMonth } from "./dates";

export const changeURL = (url: string) => {
    const initialPath = url.split("64x64");
    return initialPath[0] + "128x128" + initialPath[1]
}

export const getDate = (last_updated: string) => {
    return getDay(new Date(last_updated).getDay())
        + ", "
        + new Date(last_updated).getDate()
        + " "
        + getMonth(new Date(last_updated).getMonth())
}