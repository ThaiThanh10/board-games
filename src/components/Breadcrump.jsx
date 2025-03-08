import React from "react"
import { Link } from "react-router-dom"

const Breadcrump = ({ linkTo, navItem }) => {
    return (
        <nav
            aria-label="breadcrumb"
            itemscope=""
            itemtype="https://schema.org/BreadcrumbList"
            class="container mx-auto px-4 md:px-8 mb-4 sm:mb-8"
        >
            <ol class="flex gap-2 flex-nowrap whitespace-nowrap text-ellipsis overflow-hidden">
                <li
                    class="flex items-center gap-2"
                    itemprop="itemListElement"
                    itemscope=""
                    itemtype="https://schema.org/ListItem"
                >
                    <Link
                        class="link"
                        to="/"
                        itemprop="item"
                    >
                        <span itemprop="name">Home</span>
                    </Link>{" "}
                    <meta
                        itemprop="position"
                        content="1"
                    />{" "}
                    <span class="opacity-50">\</span>{" "}
                </li>
                <li
                    class="flex items-center gap-2"
                    itemprop="itemListElement"
                    itemscope=""
                    itemtype="https://schema.org/ListItem"
                >
                    <Link
                        class="link"
                        to={linkTo}
                        itemprop="item"
                    >
                        <span itemprop="name">{navItem}</span>
                    </Link>{" "}
                    <meta
                        itemprop="position"
                        content="2"
                    />{" "}
                </li>
            </ol>
        </nav>
    )
}

export default Breadcrump
