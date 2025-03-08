import React from "react"
import { Link } from "react-router-dom"
import { Breadcrump } from "../components"
import { Bundles, CoursesList } from "../components/sections"

const Worksheets = () => {
    return (
        <main>

            <Breadcrump
                linkTo="/worksheets"
                navItem="Worksheets"
            />

            <CoursesList
                heading="Worksheets and Lesson Plans"
                arr={[1, 2, 3, 4, 5, 6, 7]}
            />

            <Bundles />
        </main>
    )
}

export default Worksheets
