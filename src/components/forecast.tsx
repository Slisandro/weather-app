import { useStore } from "@/store/store";
import { changeURL, getDate } from "@/utils/string";
import Image from "next/image";

export default function Forecast({ degress }: { degress: string }) {
    const current = useStore(s => s.current);

    return (
        <>
            <p className="px-4 mb-8 mt-4 lg:mx-32 block lg:hidden text-[#e7e7eb] text-4xl lg:text-2xl font-semibold text-start">Forecast</p>
            <div className="flex w-auto lg:w-full gap-8 items-center justify-between px-0 lg:px-8 mx-8 lg:mx-0 lg:px-32 overflow-x-auto lg:overflow-x-hidden overflow-y-hidden">
                {
                    current?.forecast.forecastday.slice(1, current?.forecast.forecastday.length).map((forecast, i) => (
                        <div key={forecast.date} style={{ boxShadow: "5px 5px 2px rgba(0,0,0,.5)" }} className="bg-[#1e213a] flex flex-col items-center justify-between pb-8 pt-8 mb-8 mx-4 w-[25rem] lg:w-[max-content] overflow-x-auto gap-[2rem] h-[max-content] min-w-[18rem] lg:min-w-[10rem] lg:max-w-[100%] lg:gap-4">
                            <p className="text-[#e7e7eb] font-semibold text-4xl lg:text-xl">{i === 0 ? "Tomorrow" : getDate(forecast.date)}</p>
                            <Image
                                src={changeURL("https://" + forecast.day.condition.icon)}
                                width={window.innerWidth >= 800 ? 90 : 125}
                                height={window.innerWidth >= 800 ? 90 : 125}
                                alt="icon_forecast"
                            />
                            <div className="flex items-center justify-between mx-4 gap-4 mt-8 lg:mt-0">
                                <p className="text-[#e7e7eb] text-2xl lg:text-xl font-large">
                                    {degress === "celsius" ? `${forecast.day.mintemp_c} °C` : `${forecast.day.mintemp_f} °F`}
                                </p>
                                <p className="text-[#a09fb1] text-2xl lg:text-xl font-large">
                                    {degress === "celsius" ? `${forecast.day.maxtemp_c} °C` : `${forecast.day.maxtemp_f} °F`}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}