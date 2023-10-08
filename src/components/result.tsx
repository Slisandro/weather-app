import { useStore } from "@/store/store"
import ResponseForecast from "@/types/response-forecast";
import { isFavorite } from "@/utils/favorite";

export default function Result({ input, handleBack }: { input: string, handleBack: () => void }) {
    const { result, favorites, addFavorite, deleteFavorite, setCurrent } = useStore(s => s);
    const handleClick = (c: ResponseForecast) => {
        setCurrent(c);
        handleBack();
    };

    const handleFavorite = (fav: ResponseForecast) => {
        const isSelect = favorites.findIndex(x => x.location.name === fav.location.name);
        if (isSelect >= 0) {
            return deleteFavorite(favorites.filter(x => x.location.name !== fav.location.name))
        } else {
            return addFavorite(fav);
        }
    }

    return (
        <div className="w-full">
            <p className="font-semibold text-3xl lg:text-xl text-[#e7e7eb]">
                Results of {input}
            </p>
            <ul className="w-full p-0 flex flex-col gap-8 lg:py-4">
                {result.length ?
                    result.map((item) => (
                        <li
                            key={item.location.name}
                            className="flex w-full h-[max-content] my-4 shadow p-2 lg:p-0 flex-col justify-start items-start gap-2 lg:gap-4 ml-2 lg:ml-0"
                        >
                            <p
                                className="font-xl text-2xl lg:text-base text-[#e7e7eb]"
                            >
                                {item.location.name} - {item.location.country}
                            </p>
                            <span
                                className="font-medium flex flex-col gap-4 text-[#e7e7eb] lg:text-base text-small font-light"
                            >
                                {`(${item.location.lat},${item.location.lon})`}
                            </span>
                            <div className="flex gap-4 lg:gap-2 mt-2 lg:mt-0">
                                <button onClick={() => handleFavorite(item)} className="bg-[#6e707a] p-2 lg:p-2 shadow rounded-full">
                                    {isFavorite(favorites, item) ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[2rem] h-[2rem] lg:w-6 lg:h-6 text-[#fef301]">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[2rem] h-[2rem] lg:w-6 lg:h-6 text-black">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    )}
                                </button>
                                <button onClick={() => handleClick(item)} className="bg-[#6e707a] p-2 lg:p-2 flex items-center justify-center shadow rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[2rem] h-[2rem] lg:w-6 lg:h-6 text-[#e7e7eb]">
                                        <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </li>
                    )) : (
                        <li className="flex items-center justify-between h-[max-content] mt-8">
                            <p className="font-medium text-[#e7e7eb]">There are no favourites</p>
                        </li>
                    )}
            </ul>
        </div>
    )
}