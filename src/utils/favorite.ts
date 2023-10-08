import ResponseForecast from "@/types/response-forecast";

export const isFavorite = (favorites: ResponseForecast[], current: ResponseForecast | null) => {
    if(!current) return false; 
    console.log(favorites.findIndex(x => x.location.name === current.location.name) >= 0 ? true : false)
    return favorites.findIndex(x => x.location.name === current.location.name) >= 0 ? true : false;
}