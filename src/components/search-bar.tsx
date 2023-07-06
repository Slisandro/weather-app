"use client"
import useDeviceSize from "@/hooks/use-device-size";
import { useStore } from "@/store/store";
import ResponseForecast from "@/types/response-forecast";
import { getCurrentPosition } from "@/utils/position";
import axios from "axios";
import { useState } from "react";

export default function SearchBar({ handleSearchbar, toFavorite }: { handleSearchbar: (e: string) => void; toFavorite: () => void; }) {
    const { setCurrent, current, addFavorite, favorites, deleteFavorite } = useStore(s => s);
    const [width] = useDeviceSize();
    const [degress, setDegress] = useState("celsius")
    const addToFavorites = () => {
        if (current) {
            const isSelect = favorites.findIndex(x => x.location.name === current.location.name);
            if (isSelect >= 0) {
                return deleteFavorite(favorites.filter(x => x.location.name !== current.location.name))
            } else {
                return addFavorite(current);
            }
        }
    }

    const getCurrentLocation = async () => {
        const position = await getCurrentPosition();
        if (!position) return

        return await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${"aff7b0e933df40b6a23215651230207"}&q=${position}&days=6&aqi=no&alerts=no`)
            .then(r => setCurrent(r.data as ResponseForecast))
            .catch(() => console.log("error"))
            .finally(() => { })
    };

    // @ts-ignore
    const handleClick = (e) => setDegress(e.target.id);

    return (
        <div className="w-full fixed top-0 left-0 lg:relative p-8 bg-[rgba(0,0,0,.75)] lg:bg-transparent h-[5rem] lg:px-0 lg:py-4 flex justify-between pt-8 lg:h-[6rem] items-center">
            {/* @ts-ignore */}
            <button id="searchbar" onClick={() => handleSearchbar("searchbar")} className="bg-[#6e707a] p-2 lg:p-2 text-white shadow text-[#e7e7eb] w-[max-content] rounded-full lg:rounded-none lg:h-[max-content] hidden lg:block">
                Search
            </button>
            <button id="searchbar" onClick={() => handleSearchbar("searchbar")} className="bg-[#6e707a] p-2 lg:p-2 text-white shadow text-[#e7e7eb] w-[max-content] rounded-full lg:rounded-none lg:h-[max-content] block lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                </svg>
            </button>
            <span className="flex gap-2 lg:hidden text-white">|</span>
            <div className="flex gap-4 lg:hidden">
                <button
                    id="celsius"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.5) 5px 5px 2px" }}
                    onClick={handleClick}
                    className={
                        degress === "celsius" ?
                            "bg-[#6e707a] p-2 shadow rounded-full text-[#e7e7eb] text-xl font-semibold "
                            : "bg-[#6e707a] p-2 shadow rounded-full text-[#e7e7eb] text-xl font-semibold "
                    }
                >
                    °&nbsp;C
                </button>
                <button
                    id="fahrenheit"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.5) 5px 5px 2px" }}
                    onClick={handleClick}
                    className={
                        degress !== "celsius" ?
                            "bg-[#6e707a] p-2 shadow rounded-full text-[#e7e7eb] text-xl font-semibold "
                            : "bg-[#6e707a] p-2 shadow rounded-full text-[#e7e7eb] text-xl font-semibold "
                    }
                >
                    °&nbsp;F
                </button>
            </div>
            <span className="flex gap-2 lg:hidden text-white">|</span>
            <div className="flex items-center gap-4">
                <button className="bg-[#6e707a] lg:block hidden lg:p-2 p-2 shadow rounded-full" onClick={addToFavorites}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#fef301]">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                </button>
                <button className="bg-[#6e707a] lg:p-2 p-2 shadow rounded-full" onClick={getCurrentLocation}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#e7e7eb]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                </button>
                <button className="block lg:hidden lg:p-2 p-2 shadow rounded-full" onClick={() => toFavorite()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#fef301]">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    )
}