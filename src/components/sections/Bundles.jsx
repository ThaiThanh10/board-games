import React from "react"

const Bundles = () => {
    return (
        <section class="container mx-auto px-4 md:px-8 mt-12">
            <h2 class="font-extrabold text-2xl md:text-4xl text-symbols-highlight mb-4">Bundles</h2>{" "}
            <div class="grid gap-4 md:gap-6 xl:grid-cols-2">
                {[1, 2, 3, 4, 5].map((item) => (
                    <div
                        class="cursor-pointer hover:bg-surface-default focus-within:ring-4 focus-within:ring-blue-500 w-full flex-grow-1 bg-surface-muted border border-border-default rounded-lg overflow-hidden p-4 transition-colors  flex flex-col"
                        role="button"
                    >
                        <h2 class="font-extrabold text-2xl md:text-3xl text-symbols-highlight ">
                            <a
                                href="/bundles/teens"
                                class="link"
                            >
                                Teen Bundle
                            </a>
                        </h2>{" "}
                        <div class="flex-1">
                            {" "}
                            <p class="my-2">
                                <em class="accent">Includes 5 items:</em> A Statistical Odyssey,
                                Logic for Teens, Symbolic Logic Worksheets, High School Worksheets
                                and Lesson Plans, Statistical Shenanigans Worksheets and Lesson
                                Plans.
                            </p>
                        </div>{" "}
                        <div class="flex flex-nowrap justify-around md:justify-start bg-black/40 -mx-4 px-4 py-4 my-5">
                            <div class="relative w-24 h-24 flex-shrink-0 aspect-square bg-black rounded-full -ml-16 first:ml-0 md:ml-2">
                                <img
                                    src="https://sb.critikid.com/storage/v1/render/image/public/static/c/statistical-odyssey.png?width=96&amp;height=96&amp;resize=contain"
                                    srcset="https://sb.critikid.com/storage/v1/render/image/public/static/c/statistical-odyssey.png?width=96&amp;height=96&amp;resize=contain 1x, https://sb.critikid.com/storage/v1/render/image/public/static/c/statistical-odyssey.png?width=192&amp;height=192&amp;resize=contain 2x, https://sb.critikid.com/storage/v1/render/image/public/static/c/statistical-odyssey.png?width=288&amp;height=288&amp;resize=contain 3x"
                                    alt="A Statistical Odyssey"
                                    class="drop-shadow-lg  w-24 h-24 object-cover aspect-square"
                                    loading="lazy"
                                />{" "}
                            </div>
                            <div class="relative w-24 h-24 flex-shrink-0 aspect-square bg-black rounded-full -ml-16 first:ml-0 md:ml-2">
                                <img
                                    src="https://sb.critikid.com/storage/v1/render/image/public/static/c/formal-logic.png?width=96&amp;height=96&amp;resize=contain"
                                    srcset="https://sb.critikid.com/storage/v1/render/image/public/static/c/formal-logic.png?width=96&amp;height=96&amp;resize=contain 1x, https://sb.critikid.com/storage/v1/render/image/public/static/c/formal-logic.png?width=192&amp;height=192&amp;resize=contain 2x, https://sb.critikid.com/storage/v1/render/image/public/static/c/formal-logic.png?width=288&amp;height=288&amp;resize=contain 3x"
                                    alt="Logic for Teens"
                                    class="drop-shadow-lg  w-24 h-24 object-cover aspect-square"
                                    loading="lazy"
                                />{" "}
                            </div>
                            <div class="relative w-24 h-24 flex-shrink-0 aspect-square bg-black rounded-full -ml-16 first:ml-0 md:ml-2">
                                <img
                                    src="https://sb.critikid.com/storage/v1/render/image/public/static/w/symbolic-logic.png?width=96&amp;height=96&amp;resize=contain"
                                    srcset="https://sb.critikid.com/storage/v1/render/image/public/static/w/symbolic-logic.png?width=96&amp;height=96&amp;resize=contain 1x, https://sb.critikid.com/storage/v1/render/image/public/static/w/symbolic-logic.png?width=192&amp;height=192&amp;resize=contain 2x, https://sb.critikid.com/storage/v1/render/image/public/static/w/symbolic-logic.png?width=288&amp;height=288&amp;resize=contain 3x"
                                    alt="Symbolic Logic Worksheets"
                                    class="drop-shadow-lg  w-24 h-24 object-cover aspect-square"
                                    loading="lazy"
                                />{" "}
                            </div>
                            <div class="relative w-24 h-24 flex-shrink-0 aspect-square bg-black rounded-full -ml-16 first:ml-0 md:ml-2">
                                <img
                                    src="https://sb.critikid.com/storage/v1/render/image/public/static/w/bct-high.png?width=96&amp;height=96&amp;resize=contain"
                                    srcset="https://sb.critikid.com/storage/v1/render/image/public/static/w/bct-high.png?width=96&amp;height=96&amp;resize=contain 1x, https://sb.critikid.com/storage/v1/render/image/public/static/w/bct-high.png?width=192&amp;height=192&amp;resize=contain 2x, https://sb.critikid.com/storage/v1/render/image/public/static/w/bct-high.png?width=288&amp;height=288&amp;resize=contain 3x"
                                    alt="High School Worksheets and Lesson Plans"
                                    class="drop-shadow-lg  w-24 h-24 object-cover aspect-square"
                                    loading="lazy"
                                />{" "}
                            </div>
                            <div class="relative w-24 h-24 flex-shrink-0 aspect-square bg-black rounded-full -ml-16 first:ml-0 md:ml-2">
                                <img
                                    src="https://sb.critikid.com/storage/v1/render/image/public/static/w/bct-statistics.png?width=96&amp;height=96&amp;resize=contain"
                                    srcset="https://sb.critikid.com/storage/v1/render/image/public/static/w/bct-statistics.png?width=96&amp;height=96&amp;resize=contain 1x, https://sb.critikid.com/storage/v1/render/image/public/static/w/bct-statistics.png?width=192&amp;height=192&amp;resize=contain 2x, https://sb.critikid.com/storage/v1/render/image/public/static/w/bct-statistics.png?width=288&amp;height=288&amp;resize=contain 3x"
                                    alt="Statistical Shenanigans Worksheets and Lesson Plans"
                                    class="drop-shadow-lg  w-24 h-24 object-cover aspect-square"
                                    loading="lazy"
                                />{" "}
                            </div>
                        </div>{" "}
                        <div class="flex flex-col sm:flex-row justify-end items-stretch gap-2">
                            <a
                                href="/bundles/teens"
                                class="btn btn-lg btn-outline flex items-center justify-center my-0.5"
                            >
                                Bundle info
                            </a>{" "}
                            <div class="flex gap-4 bg-black px-2 sm:px-4 py-2 rounded-lg items-center justify-center">
                                <span class="text-2xl font-bold border-r-2 border-white/20 pr-4">
                                    −20%
                                </span>{" "}
                                <div class="relative inline-block ">
                                    <button
                                        type="button"
                                        class="whitespace-nowrap align-middle select-none transition-all relative rounded-lg text-orange-50 bg-orange-500 enabled:hover:bg-orange-600 shadow-lg dark:bg-orange-700 dark:enabled:hover:bg-orange-800  active:shadow-sm active:translate-y-1  px-4 py-2 text-center      svelte-1wj6ij5"
                                    >
                                        Buy Bundle{" "}
                                    </button>{" "}
                                    44&nbsp;US${" "}
                                </div>{" "}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Bundles
