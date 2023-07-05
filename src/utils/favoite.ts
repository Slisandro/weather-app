import ResponseForecast from "@/types/response-forecast";

export const isFavorite = (favorites: ResponseForecast[], current: ResponseForecast | null) => {
    return favorites.findIndex(x => x.location.name === current?.location.name) >= 0 ? true : false;
}