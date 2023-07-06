import { useStore } from "@/store/store";
import axios from "axios";
import { useState } from "react";
import CurrentWeather from "./current-weather";
import Favorite from "./favorite";
import Form from "./form";
import Result from "./result";
import SearchBar from "./search-bar";
import ResponseForecast from "@/types/response-forecast";
import FavoriteList from "./favorite-list";

export default function Header() {
    const { setResult, degress } = useStore(s => s);
    const [state, setState] = useState("current");
    const [input, setInput] = useState("");
    const [label, setLabel] = useState("");
    const onChange = (e: any) => setInput(e.target.value);
    const onBack = () => setState("current");
    const handleSearchbar = (e: string) => setState(e);
    const onSubmit = (e: any) => {
        e.preventDefault();
        setLabel(input);
        setInput("");
        axios.get(`https://api.weatherapi.com/v1/forecast.json?key=aff7b0e933df40b6a23215651230207&q=${input}&days=6&aqi=no&alerts=no`)
            .then(r => {
                setResult([r.data] as ResponseForecast[]);
                handleSearchbar("result");
            })
            .catch(() => setResult([]))
    };

    return (
        <header className="max-h-[100vh] lg:min-w-[20rem] lg:max-w-[20rem] min-h-[100vh] h-full bg-[#1e213a] border-none" >
            {
                state === "current" ? (
                    <div className="w-full h-full pt-[15%]  lg:pt-8 lg:px-8">
                        <SearchBar
                            toFavorite={() => setState("favorites")}
                            handleSearchbar={handleSearchbar}
                        />
                        <CurrentWeather />
                    </div>
                ) : state === "searchbar" ? (
                    <div
                        className="w-full z-[100] h-full pt-8 lg:pt-8 bg-[rgba(0,0,0,.95)] fixed lg:relative py-2 px-4 lg:px-8"
                    >
                        <button
                            onClick={() => setState("current")}
                            className="w-[max-content] h-auto lg-w-[max-content] lg:h-auto ml-auto lg:ml-0 bg-[#6e707a] shadow p-2 rounded-full mb-4 lg:mb-8"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 lg:w-full lg:h-auto text-[#e7e7eb]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <Form
                            value={input}
                            onChange={onChange}
                            onSubmit={onSubmit}
                        />
                        <Favorite
                            onBack={onBack}
                        />
                    </div>
                ) : state === "result" ? (
                    <div
                        className="w-full z-[100] h-full pt-8 lg:pt-8 bg-[rgba(0,0,0,.95)] fixed lg:relative py-2 px-4 lg:px-8"
                    >
                        <button
                            onClick={onBack}
                            className="w-[max-content] h-auto lg-w-[max-content] lg:h-auto ml-auto lg:ml-0 bg-[#6e707a] shadow p-2 rounded-full mb-4 lg:mb-8"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 lg:w-full lg:h-auto text-[#e7e7eb]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <Form
                            value={input}
                            onChange={onChange}
                            onSubmit={onSubmit}
                        />
                        <Result
                            handleBack={onBack}
                            input={label}
                        />
                    </div>
                ) : state === "favorites" ? (
                    <div
                        className="w-full z-[100] h-full pt-8 lg:pt-8 bg-[rgba(0,0,0,.95)] fixed lg:relative py-2 px-8 lg:px-8"
                    >
                        <button
                            onClick={() => setState("current")}
                            className="w-[max-content] h-auto lg-w-[max-content] lg:h-auto ml-auto lg:ml-0 bg-[#6e707a] shadow p-2 rounded-full mb-4 lg:mb-8"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor" className="w-6 h-6 text-[#e7e7eb]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <FavoriteList onBack={onBack} />
                    </div>
                ) : null
            }
        </header>
    )
}