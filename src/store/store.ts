import ResponseForecast from "@/types/response-forecast";
import { create } from "zustand";

// export interface Result { id: number, name: string }

interface Store {
    current: ResponseForecast | null,
    favorites: ResponseForecast[],
    result: ResponseForecast[],
    setCurrent: (c: ResponseForecast) => void;
    setResult: (c: ResponseForecast[]) => void;
    addFavorite: (c: ResponseForecast) => void;
    deleteFavorite: (c: ResponseForecast[]) => void;
}

export const useStore = create<Store>((set) => ({
    current: null,
    favorites: [],
    result: [],
    setCurrent: (current: ResponseForecast) => set((state) => ({
        ...state,
        current: current
    })),
    setResult: (result: ResponseForecast[]) => set((state) => ({
        ...state,
        result: result
    })),
    addFavorite: (favorite: ResponseForecast) => set((state) => {
        state.favorites.push(favorite);
        return ({
            ...state,
            favorites: state.favorites
        })
    }),
    deleteFavorite: (favorites: ResponseForecast[]) => set((state) => ({
        ...state,
        favorites: favorites
    }))
}))