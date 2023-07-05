"use client"
import AdditionalData from '@/components/additional-data';
import Forecast from '@/components/forecast';
import Header from '@/components/header';
import useDeviceSize from '@/hooks/use-device-size';
import { useStore } from '@/store/store';
import ResponseForecast from '@/types/response-forecast';
import { isFavorite } from '@/utils/favoite';
import { useEffect, useState } from 'react';

export default function Home({ forecast }: { forecast: ResponseForecast }) {
    const [degress, setDegress] = useState("searchbar");
    const [width] = useDeviceSize();
    const { setCurrent, favorites, addFavorite, deleteFavorite, current } = useStore(s => s);
    // @ts-ignore
    const handleClick = (e) => setDegress(e.target.id);
    useEffect(() => { setCurrent(forecast) }, []);
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
    return (
        <div className="relative w-full h-full flex flex-col lg:flex-row bg-[#100e1d] pb-8 lg:pb-0">
            <Header degress={degress} toFavorite={() => setDegress("favorites")} />
            <section className="bg-[#100e1d] min-h-[90vh] lg:min-h-[100vh] flex flex-col py-4 pt-8" style={{ width: width >= 800 ? "calc(100% - 20rem)" : "100%" }}>
                <div className="flex gap-4 px-4 mb-8 justify-end ml-auto" style={{ display: width >= 800 ? "flex" : "none" }}>
                    <button
                        id="celsius"
                        style={{ boxShadow: "rgba(0, 0, 0, 0.5) 5px 5px 2px", border: degress === "fahrenheit" ? "1px #e7e7eb solid" : "" }}
                        onClick={handleClick}
                        className={
                            degress === "celsius" ?
                                'bg-[#6e707a] p-2 rounded-full text-[#e7e7eb] font-semibold'
                                : 'bg-[#e7e7eb] p-2 rounded-full text-[#e7e7eb] font-semibold'
                        }
                    >
                        °&nbsp;C
                    </button>
                    <button
                        id="fahrenheit"
                        style={{ boxShadow: "rgba(0, 0, 0, 0.5) 5px 5px 2px", border: degress === "celsius" ? "1px #e7e7eb solid" : "" }}
                        onClick={handleClick}
                        className={
                            degress === "fahrenheit" ?
                                'bg-[#6e707a] p-2 rounded-full text-[#e7e7eb] font-semibold'
                                : 'bg-[#e7e7eb] p-2 rounded-full text-[#e7e7eb] font-semibold'
                        }
                    >
                        °&nbsp;F
                    </button>
                </div>
                <Forecast degress={degress} />
                <AdditionalData />
            </section>
            <button style={{ bottom: "3rem", right: "3rem" }} className="fixed flex lg:hidden p-4 shadow rounded-full" onClick={addToFavorites}>
                {isFavorite(favorites, current) ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: "4rem", height: "4rem" }} className="lg:w-6 lg:h-6 text-[#fef301]">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-6 lg:h-6 text-[#e7e7eb]" style={{ width: "4rem", height: "4rem" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                )}
            </button>
        </div>
    )
}