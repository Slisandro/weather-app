import useDeviceSize from "@/hooks/use-device-size";
import { useStore } from "@/store/store";
import { changeURL, getDate } from "@/utils/string";
import Image from "next/image";

export default function CurrentWeather({ degress }: { degress: string }) {
    const { current } = useStore(s => s);
    const [width] = useDeviceSize();
    return (
        <div
            style={{ height: "calc(100% - 6rem" }}
            className="w-full justify-between flex flex-col py-8"
        >
            <Image
                src={current ? changeURL("https://" + current?.current.condition.icon) : ""}
                alt="icon_weather"
                className="mx-auto shadow my-12 bg-[rgba(0,0,0,.5)] pt-8 lg-pt-0"
                width={width >= 800 ? 128 : 200}
                height={width >= 800 ? 128 : 200}
            />
            <p className="font-medium text-[5rem] lg:text-4xl text-[#e7e7eb] text-center">
                <span className="font-black text-[7rem] lg:text-6xl mr-1">
                    {degress === "celsius" ? current?.current.temp_c : current?.current.temp_f}
                </span>
                {degress === "celsius" ? "°c" : "°F"}
            </p>
            <p className="font-medium text-[4rem] lg:text-xl text-[#e7e7eb] text-center">
                {current?.current.condition.text}
            </p>
            <p className="font-medium text-[2rem] lg:text-xl text-[#e7e7eb] text-center">
                Today&nbsp;·&nbsp;
                {getDate(current?.current.last_updated ?? "")}
            </p>
            <p className="font-medium text-[2rem] lg:text-xl text-[#e7e7eb] text-center flex items-center justify-center gap-4">
                <svg
                    className="fill-[#e7e7eb] relative"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 -960 960 960"
                    width="20"
                >
                    <path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-159q133-121 196.5-219.5T740-552q0-117.79-75.292-192.895Q589.417-820 480-820t-184.708 75.105Q220-669.79 220-552q0 75 65 173.5T480-159Zm0 79Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                </svg>
                {current?.location.name}
            </p>
        </div>
    )
}