import React from "react"

const LessonCard = () => {
    return (
        <div
            class="cursor-pointer hover:bg-surface-default focus-within:ring-4 focus-within:ring-blue-500 max-w-[350px] flex-grow-1 bg-surface-muted border border-border-default rounded-lg overflow-hidden p-4 transition-colors snap-center min-w-[280px] flex flex-col"
            role="button"
        >
            <div class="relative w-24 h-24 flex-shrink-0 aspect-square bg-black rounded-full mx-auto my-4 ">
                <img
                    src="https://sb.critikid.com/storage/v1/render/image/public/static/w/logical-fallacies-teachers-bundle.png?width=96&amp;height=96&amp;resize=contain"
                    srcSet="https://sb.critikid.com/storage/v1/render/image/public/static/w/logical-fallacies-teachers-bundle.png?width=96&amp;height=96&amp;resize=contain 1x, https://sb.critikid.com/storage/v1/render/image/public/static/w/logical-fallacies-teachers-bundle.png?width=192&amp;height=192&amp;resize=contain 2x, https://sb.critikid.com/storage/v1/render/image/public/static/w/logical-fallacies-teachers-bundle.png?width=288&amp;height=288&amp;resize=contain 3x"
                    alt="Logical Fallacies Worksheets and Lesson Plans"
                    class="drop-shadow-lg  w-24 h-24 object-cover aspect-square"
                    loading="lazy"
                />{" "}
            </div>{" "}
            <div class="flex-1">
                <h3 class="mb-2 font-bold text-xl">
                    <a
                        href="/worksheets/logical-fallacies"
                        class="link"
                    >
                        Logical Fallacies Worksheets and Lesson Plans
                    </a>
                </h3>{" "}
                <p class="flex-1">
                    Teach your grades 3-7 students about ten common logical fallacies with these
                    engaging and easy-to-use lesson plans and worksheets.
                </p>
            </div>{" "}
            <p class="mt-4">
                <span class="relative inline-block ">
                    <button
                        type="button"
                        class="whitespace-nowrap align-middle select-none transition-all relative rounded-lg text-orange-50 bg-orange-500 enabled:hover:bg-orange-600 shadow-lg dark:bg-orange-700 dark:enabled:hover:bg-orange-800  active:shadow-sm active:translate-y-1  px-4 py-2 text-center      svelte-1wj6ij5"
                    >
                        Buy Now{" "}
                    </button>{" "}
                    10&nbsp;US${" "}
                </span>{" "}
            </p>{" "}
        </div>
    )
}

export default LessonCard
