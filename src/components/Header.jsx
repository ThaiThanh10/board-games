import React from "react"
import { Link, NavLink } from "react-router-dom";
const Header = () => {
    return (
        <header className="container flex justify-between flex-wrap items-center px-4 sm:px-8 py-4 md:flex-nowrap gap-4">
            <Link
                to={"/"}
                className="flex-shrink-0"
            >
                <img
                    src="https://critikid.com/logo.svg"
                    alt="Critikid Logo"
                    className="h-auto aspect-[10/4] w-44 xs:w-56 md:w-52 lg:w-64 object-contain"
                />
            </Link>{" "}
            <nav className="flex gap-0 items-center justify-center flex-1 max-md:order-1 md:justify-end xs:border-x border-b border-border-highlight xs:rounded-full xs:px-4 py-2 md:flex-grow-0 md:justify-self-end max-xs:-mx-4 lg:mr-28 ">
                <Link
                    to={"/courses"}
                    className="px-2 py-1 rounded-full link"
                >
                    Courses{" "}
                </Link>
                <Link
                    to="/worksheets"
                    className="px-2 py-1 rounded-full link"
                >
                    Worksheets{" "}
                </Link>
                <Link
                    to="/puzzles"
                    className="px-2 py-1 rounded-full link"
                >
                    Puzzles{" "}
                </Link>
                <Link
                    to="/blog"
                    className="px-2 py-1 rounded-full link"
                >
                    Blog{" "}
                </Link>
            </nav>{" "}
            <button
                type="button"
                className="md:border-t-0 align-middle select-none transition-all relative rounded-full border border-orange-500 text-orange-500 enabled:hover:bg-orange-500 enabled:hover:bg-opacity-5 dark:border-orange-700    px-4 py-2 text-center      svelte-1wj6ij5"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block h-6 w-6   max-sm:hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                    ></path>
                </svg>{" "}
                Log In <small className="block "></small>{" "}
            </button>{" "}
        </header>
    )
}

export default Header
