import React from "react"
import { Breadcrump } from "../components"
import { CoursesList } from "../components/sections"

const Puzzles = () => {
    return (
        <main>
            <Breadcrump
                linkTo="/puzzles"
                navItem="Puzzles"
            />
            <section class="container mx-auto px-4 md:px-8 ">
                <section class="prose-headings:mb-2 mx-auto  prose md:prose-xl ">
                    <h1>Logic puzzles</h1>{" "}
                    <div class="lead">
                        A collection of puzzles and brainteasers to challenge your logical thinking
                        skills. Beware: While some of these puzzles are straightforward, many of
                        them are “mind illusions” - in other words, they have counterintuitive
                        solutions!
                    </div>{" "}
                    <div
                        class="flex flex-col gap-4 max-w-3xl "
                        itemscope=""
                        itemtype="https://schema.org/FAQPage"
                    >
                        <details
                            class="faq-block rounded-md overflow-hidden"
                            itemscope=""
                            itemprop="mainEntity"
                            itemtype="https://schema.org/Question"
                        >
                            <summary
                                class="p-4 font-extrabold text-xl md:text-2xl bg-surface-muted hover:bg-surface-default transition-colors cursor-pointer"
                                itemprop="name"
                            >
                                What are Mind Illusions?
                            </summary>
                            <div
                                itemscope=""
                                itemprop="acceptedAnswer"
                                itemtype="https://schema.org/Answer"
                            >
                                <div itemprop="text">
                                    <div class="prose md:prose-xl max-w-none w-full p-4 bg-surface-default mt-1">
                                        <p>
                                            We’re all familiar with optical illusions. These are
                                            images that demonstrate that our eyes can fool us.
                                            Traditionally called <em>veridical paradoxes</em>, mind
                                            illusions are puzzles or brainteasers that demonstrate
                                            that our minds can fool us.
                                        </p>
                                        <p>
                                            Our intuition is excellent at making fast judgments, but
                                            not always for making correct ones. When we make
                                            judgments quickly, we can get things wrong. When we have
                                            the luxury of time, it is worth thinking about things
                                            slowly and carefully before making decisions or drawing
                                            conclusions.
                                        </p>
                                        <p>
                                            Just like we might need a ruler or some other tool to
                                            make correct judgments when faced with an optical
                                            illusion, we need slow, careful thought to make correct
                                            judgments when faced with mind illusions.
                                        </p>
                                        <p>
                                            The first puzzles are the easiest ones for most people,
                                            but even adults frequently get even these ones wrong.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </details>
                    </div>{" "}
                    <p>
                        <button
                            type="button"
                            class=" align-middle select-none transition-all relative rounded-lg text-inherit border border-border-default enabled:hover:border-border-highlight    px-4 py-2 text-center      svelte-1wj6ij5"
                        >
                            Get a printable version{" "}
                        </button>
                    </p>
                </section>
                <hr class="my-8"></hr>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                        <a
                            class="block aspect-[1080/1350] puzzle hover:scale-105 transition-transform duration-300 ease-in-out  svelte-lxn1mc"
                            href="/puzzles/regression-to-the-mean"
                        // style={"--puzzle-card-slug: puzzle-card-regression-to-the-mean; --card-bg: #FFDE59;"}
                        >
                            <img
                                src="https://sb.critikid.com/storage/v1/render/image/public/static/puzzles/1.png?width=480&amp;height=600"
                                alt="Highly intelligent children tend to have friends who are less intelligent than they are. What is the most likely explanation for this?"
                                class="question w-full aspect-[1080/1350] block rounded-lg bg-[var(--card-bg)]"
                            />
                        </a>
                    ))}
                </div>
            </section>

            {/* <CoursesList heading="Courses" />
            <CoursesList
                heading="Worksheets"
                arr={[1, 2, 3, 4, 5]}
            /> */}
        </main>
    )
}

export default Puzzles
