import React from "react"
import { Link } from "react-router-dom"
import { Breadcrump } from "../components"
import { Bundles, ComingSoon, CoursesList } from "../components/sections"

const Courses = () => {
    return (
        <main>
            <Breadcrump linkTo="/courses" navItem="Courses" />
            <CoursesList heading="Available Now" />
            <Bundles />
            <ComingSoon />
        </main>
    )
}

export default Courses
