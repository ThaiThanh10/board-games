import React from "react"
import LessonCard from "../LessonCard"

const CoursesList = ({ heading, arr = [1, 2, 3, 4] }) => {
    return (
        <section class="container mx-auto px-4 md:px-8 my-12 lg:my-24">
            <h2 class="font-extrabold text-2xl md:text-4xl text-symbols-highlight mb-4">
                {heading}
            </h2>
            <section class="relative negate-page-section-px">
                <div class="overflow-x-auto max-sm:snap-x snap-mandatory overflow-gradient-x scroll-hide overscroll-x-contain flex gap-4 md:gap-6 flex-nowrap">
                    {" "}
                    {arr.map((item) => (
                        <LessonCard />
                    ))}{" "}
                </div>
            </section>
        </section>
    )
}

export default CoursesList
