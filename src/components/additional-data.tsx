import { useStore } from '@/store/store';

export default function AdditionalData() {
    const { current } = useStore(s => s);
    return (
        <div className="w-full px-4 lg:px-32 pt-8 gap-8 flex flex-col pb-8 lg:pb-0">
            <p className="text-[#e7e7eb] text-3xl lg:text-2xl font-semibold text-start">Today&apos;s Hightlights</p>
            <div className="flex flex-col gap-8 md:gap-0 mx-8 md:mx-0 md:flex-row w-auto md:w-full justify-around">
                <div style={{ boxShadow: "5px 5px 2px rgba(0,0,0,.5)" }} className="w-auto md-[45%] lg:w-1/3 bg-[#1e213a] flex items-center justify-center flex-col p-8 lg:p-4 gap-8 md:gap-4 h-[max-content]">
                    <p className="text-[#e7e7eb] text-2xl lg:text-large font-semibold">Wind Status</p>
                    <p className="font-medium text-3xl text-[#e7e7eb] text-center">
                        <span className="font-black text-5xl mr-1">{current?.current.wind_mph}</span>
                        mph
                    </p>
                    <p className="text-[#e7e7eb] text-center font-medium">
                        {/* icon */}
                        {current?.current.wind_dir}
                    </p>
                </div>
                <div style={{ boxShadow: "5px 5px 2px rgba(0,0,0,.5)" }} className="w-full md-[45%] lg:w-1/3 bg-[#1e213a] flex items-center justify-center flex-col p-8 lg:p-4 gap-8 md:gap-4 h-[max-content]">
                    <p className="text-[#e7e7eb] text-2xl lg:text-large font-semibold">Humidity</p>
                    <p className="font-medium text-3xl text-[#e7e7eb] text-center">
                        <span className="font-black text-5xl mr-1">{current?.current.humidity}</span>
                        %
                    </p>
                    <p className="text-[#e7e7eb] text-center font-medium">
                        {/* progress */}
                        ----
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-8 md:gap-0 mx-8 md:mx-0 md:flex-row w-auto md:w-full justify-around">
                <div style={{ boxShadow: "5px 5px 2px rgba(0,0,0,.5)" }} className="w-auto md-[45%] lg:w-1/3 bg-[#1e213a] flex items-center justify-center flex-col p-8 lg:p-4 gap-8 lg:gap-4">
                    <p className="text-[#e7e7eb] text-2xl lg:text-large font-semibold">Visibility</p>
                    <p className="font-medium text-3xl text-[#e7e7eb] text-center">
                        <span className="font-black text-5xl mr-1">{current?.current.vis_miles}</span>
                        miles
                    </p>
                </div>
                <div style={{ boxShadow: "5px 5px 2px rgba(0,0,0,.5)" }} className="w-auto md-[45%] lg:w-1/3 bg-[#1e213a] flex items-center justify-center flex-col p-8 lg:p-4 gap-8 lg:gap-4">
                    <p className="text-[#e7e7eb] text-2xl lg:text-large font-semibold">Air Pressure</p>
                    <p className="font-medium text-3xl text-[#e7e7eb] text-center">
                        <span className="font-black text-5xl mr-1">{current?.current.pressure_mb}</span>
                        mb
                    </p>
                </div>
            </div>
        </div>
    )
}