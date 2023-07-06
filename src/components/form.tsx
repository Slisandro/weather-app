import { useState } from "react"

export default function Form({ value, onChange, onSubmit }: { value: string; onChange: any; onSubmit: any; }) {
    return (
        <form
            className="w-full flex items-center justify-around lg:justify-start gap-4 px-0 my-8 lg:mb-0"
        >
            <input
                style={{ boxShadow: "5px 5px 2px rgba(0,0,0,.5)" }}
                className="w-2/3 px-4 lg:px-8 lg:text-xl py-2 lg:px-[.75rem] lg:py-[.75rem] rounded-md text-1xl"
                placeholder="Search..."
                value={value}
                onChange={onChange}
            />
            <button
                onClick={onSubmit}
                className="w-[max-content] bg-[#100e1d] rounded-md p-2 lg:p-2 text-[#e7e7eb]"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-[#e7e7eb]"
                >
                    <path
                        fillRule="evenodd"
                        d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </form>
    )
}