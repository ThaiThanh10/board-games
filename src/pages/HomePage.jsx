import React from "react"
import { ComingSoon, CoursesList } from "../components/sections"
import { LessonCard } from "../components"

const HomePage = () => {
    return (
        <main>
            {/* Banner */}
            <section class="w-full max-w-full mx-auto px-4 md:px-8 svelte-xd0o5 hero flex flex-col overflow-hidden">
                <div class="prose-headings:mb-2 hero-content flex flex-col items-center justify-end md:prose-h1:text-center prose md:prose-xl ">
                    <h1>Teach Your Kids Critical&nbsp;Thinking</h1>
                    <p>
                        Our interactive courses, worksheets, and lesson plans help kids develop the
                        skills to communicate clearly, think logically, and make well-informed
                        decisions.
                    </p>
                    <button
                        type="button"
                        class=" align-middle select-none transition-all relative rounded-lg text-orange-50 bg-orange-500 enabled:hover:bg-orange-600 shadow-lg dark:bg-orange-700 dark:enabled:hover:bg-orange-800  active:shadow-sm active:translate-y-1 text-2xl px-5 py-3 text-center      svelte-1wj6ij5"
                    >
                        Explore Courses{" "}
                    </button>
                </div>
            </section>
            {/* // Guarantee */}
            <section class="relative container mx-auto py-4 md:my-8 ">
                <div class="overflow-x-auto max-sm:snap-x snap-mandatory overflow-gradient-x scroll-hide overscroll-x-contain flex items-center justify-start ">
                    <div class="award flex flex-nowrap gap-4 max-w-xs justify-center flex-shrink-0 snap-start self-start mt-8 px-4 last:scale-x-[-1]">
                        <span>
                            <svg
                                width="37"
                                height="58"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M32.842 52.135c0 .02 0 .101-.01.212 1.145-.01 2.289-.06 3.473-.232l.04.172c-1.164.262-2.348.414-3.533.514-.15.899-.592 2.484-1.927 3.604C28.928 58.04 25.807 58 25.807 58s.05-2.695 2.007-4.33a5.916 5.916 0 0 1 1.315-.808 28.207 28.207 0 0 1-2.89-.343c-.261.676-1.084 2.422-2.88 3.24-2.249 1.02-5.15.182-5.15.182s.733-2.504 2.981-3.523c.773-.353 1.626-.485 2.41-.505a24.624 24.624 0 0 1-3.443-1.251l.02.01s-1.315 2.15-3.663 2.543c-2.359.394-4.858-1.12-4.858-1.12s1.315-2.15 3.663-2.544c1.365-.222 2.77.192 3.714.576a88.128 88.128 0 0 0-.307-.16c-.442-.227-.885-.456-1.31-.719a24.614 24.614 0 0 1-2.609-1.816c-.07.08-.12.13-.12.13s-.2-.221-.452-.595a26.327 26.327 0 0 1-3.864-3.916c-.12.07-.21.12-.21.12s-2.038 1.152-4.135.395c-2.098-.758-3.443-3.14-3.443-3.14s2.038-1.15 4.135-.393c2.007.726 3.322 2.937 3.422 3.109-.03-.061-.15-.334-.28-.737a27.491 27.491 0 0 1-2.88-4.815c-.051.01-.091.02-.091.02s-.01-.11-.03-.293c-.492-1.08-.944-2.17-1.285-3.3a18.988 18.988 0 0 1-.662-2.857c-.562-.06-2.188-.323-3.272-1.625C.315 27.94.345 25.396.345 25.396s2.168.04 3.493 1.636c.381.464.642 1.009.833 1.544-.04-1.393.04-2.796.27-4.189-.521-.202-1.926-.868-2.589-2.332-.823-1.817-.15-4.168-.15-4.168s1.997.595 2.82 2.412c.271.585.371 1.231.401 1.837.352-1.363.844-2.695 1.416-3.987-.352-.242-1.666-1.252-1.937-2.887-.312-1.898.893-3.906.893-3.906s1.716 1.06 2.027 2.947c.12.767 0 1.544-.19 2.2l.128-.244c.216-.413.431-.823.674-1.219a27.27 27.27 0 0 1 1.697-2.453c-.282-.333-1.225-1.564-1.084-3.129.16-1.827 1.766-3.402 1.766-3.402s1.335 1.393 1.164 3.22c-.06.646-.301 1.232-.582 1.747a23.967 23.967 0 0 1 3.312-3.079c-.21-.495-.652-1.746-.19-3.038.591-1.646 2.448-2.716 2.448-2.716s.893 1.615.301 3.27c-.17.475-.451.879-.752 1.242 1.254-.757 2.599-1.372 4.004-1.736-.03-.1-.402-1.736.522-3.068C21.993.525 23.97 0 23.97 0s.432 1.716-.521 3.089c-.773 1.11-2.198 1.655-2.72 1.827a10.968 10.968 0 0 1 3.151-.303c.23-.263 1.104-1.171 2.369-1.242 1.475-.08 2.92 1.03 2.92 1.03s-.953 1.242-2.429 1.322c-1.194.06-2.358-.646-2.76-.918-.782.04-1.545.151-2.288.333.462.11.984.303 1.405.656.984.828 1.014 2.19 1.014 2.19s-1.576.02-2.57-.807c-.611-.515-.852-1.232-.953-1.706-1.576.545-3.03 1.403-4.335 2.433.451 0 .933.05 1.385.242 1.244.535 1.686 1.897 1.686 1.897s-1.596.505-2.84-.03c-.643-.272-1.054-.767-1.315-1.18a22.676 22.676 0 0 0-2.951 3.027c.281-.04.572-.05.863-.02 1.415.162 2.258 1.413 2.258 1.413s-1.455.98-2.87.808c-.582-.07-1.044-.323-1.415-.596a27.77 27.77 0 0 0-1.435 2.322c-.088.166-.167.332-.245.496-.065.135-.129.27-.197.402.044-.013.086-.029.128-.044.085-.032.17-.063.263-.077 1.486-.242 2.69.777 2.69.777s-1.194 1.403-2.67 1.646c-.511.08-.993.01-1.405-.111-.461 1.12-.883 2.26-1.184 3.422.043-.03.084-.061.125-.092.072-.056.143-.112.226-.15 1.426-.677 2.931 0 2.931 0s-.793 1.756-2.208 2.432a3.294 3.294 0 0 1-1.556.293 18.935 18.935 0 0 0-.17 3.603c.09-.11.18-.222.29-.313 1.225-1.1 2.931-.878 2.931-.878s-.27 1.999-1.495 3.099a3.344 3.344 0 0 1-1.445.757c.15.838.341 1.655.602 2.473.03.115.071.23.112.345.027.077.055.154.079.23.01 0 .01-.01.01-.01.883-1.463 2.66-1.766 2.66-1.766s.33 2.08-.553 3.553c-.28.464-.652.797-1.023 1.06.36.807.762 1.595 1.204 2.362.522-1.595 2.057-2.362 2.057-2.362s.944 1.968.492 3.704a3.745 3.745 0 0 1-.732 1.393 25.18 25.18 0 0 0 1.575 1.858c.03-1.777 1.385-3.029 1.385-3.029s1.516 1.706 1.556 3.563c.01.697-.18 1.323-.432 1.828.673.555 1.355 1.08 2.068 1.584-.015-.045-.035-.09-.055-.136-.02-.045-.04-.09-.056-.136-.572-1.847.492-3.574.492-3.574s1.987 1.262 2.56 3.11c.28.918.16 1.806-.03 2.462.993.505 2.027.94 3.09 1.303a4.718 4.718 0 0 1-.843-.94c-1.094-1.665-.532-3.694-.532-3.694s2.339.687 3.443 2.352c.723 1.1.723 2.342.642 3.069a2.387 2.387 0 0 0 .291.08c1.395.334 2.82.505 4.266.586a10.79 10.79 0 0 1 1.525-.192c-.743-.04-2.529-.252-3.753-1.282-1.586-1.322-1.626-3.502-1.626-3.502s2.529-.03 4.115 1.292c1.535 1.282 1.625 3.35 1.625 3.482v.02Z"
                                    fill="currentColor"
                                ></path>
                                <path
                                    d="M6.849 37.67s-.663-2.553-2.43-3.795C2.665 32.644.467 33.2.467 33.2s.662 2.554 2.428 3.795c1.767 1.242 3.955.677 3.955.677ZM10.391 45.383c-2.298-.213-4.044 1.483-4.044 1.483s1.977 2.03 4.265 2.241c2.299.212 4.045-1.484 4.045-1.484s-1.977-2.029-4.266-2.24Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </span>{" "}
                        <div class="flex flex-col text-center">
                            <div class="text-xl font-bold">
                                Best Life Skills
                                <br /> Education Website
                            </div>{" "}
                            <div>by Homeschool.com</div>
                        </div>{" "}
                        <span class="scale-x-[-1]  ">
                            <svg
                                className=" rotate-180 "
                                width="37"
                                height="58"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M32.842 52.135c0 .02 0 .101-.01.212 1.145-.01 2.289-.06 3.473-.232l.04.172c-1.164.262-2.348.414-3.533.514-.15.899-.592 2.484-1.927 3.604C28.928 58.04 25.807 58 25.807 58s.05-2.695 2.007-4.33a5.916 5.916 0 0 1 1.315-.808 28.207 28.207 0 0 1-2.89-.343c-.261.676-1.084 2.422-2.88 3.24-2.249 1.02-5.15.182-5.15.182s.733-2.504 2.981-3.523c.773-.353 1.626-.485 2.41-.505a24.624 24.624 0 0 1-3.443-1.251l.02.01s-1.315 2.15-3.663 2.543c-2.359.394-4.858-1.12-4.858-1.12s1.315-2.15 3.663-2.544c1.365-.222 2.77.192 3.714.576a88.128 88.128 0 0 0-.307-.16c-.442-.227-.885-.456-1.31-.719a24.614 24.614 0 0 1-2.609-1.816c-.07.08-.12.13-.12.13s-.2-.221-.452-.595a26.327 26.327 0 0 1-3.864-3.916c-.12.07-.21.12-.21.12s-2.038 1.152-4.135.395c-2.098-.758-3.443-3.14-3.443-3.14s2.038-1.15 4.135-.393c2.007.726 3.322 2.937 3.422 3.109-.03-.061-.15-.334-.28-.737a27.491 27.491 0 0 1-2.88-4.815c-.051.01-.091.02-.091.02s-.01-.11-.03-.293c-.492-1.08-.944-2.17-1.285-3.3a18.988 18.988 0 0 1-.662-2.857c-.562-.06-2.188-.323-3.272-1.625C.315 27.94.345 25.396.345 25.396s2.168.04 3.493 1.636c.381.464.642 1.009.833 1.544-.04-1.393.04-2.796.27-4.189-.521-.202-1.926-.868-2.589-2.332-.823-1.817-.15-4.168-.15-4.168s1.997.595 2.82 2.412c.271.585.371 1.231.401 1.837.352-1.363.844-2.695 1.416-3.987-.352-.242-1.666-1.252-1.937-2.887-.312-1.898.893-3.906.893-3.906s1.716 1.06 2.027 2.947c.12.767 0 1.544-.19 2.2l.128-.244c.216-.413.431-.823.674-1.219a27.27 27.27 0 0 1 1.697-2.453c-.282-.333-1.225-1.564-1.084-3.129.16-1.827 1.766-3.402 1.766-3.402s1.335 1.393 1.164 3.22c-.06.646-.301 1.232-.582 1.747a23.967 23.967 0 0 1 3.312-3.079c-.21-.495-.652-1.746-.19-3.038.591-1.646 2.448-2.716 2.448-2.716s.893 1.615.301 3.27c-.17.475-.451.879-.752 1.242 1.254-.757 2.599-1.372 4.004-1.736-.03-.1-.402-1.736.522-3.068C21.993.525 23.97 0 23.97 0s.432 1.716-.521 3.089c-.773 1.11-2.198 1.655-2.72 1.827a10.968 10.968 0 0 1 3.151-.303c.23-.263 1.104-1.171 2.369-1.242 1.475-.08 2.92 1.03 2.92 1.03s-.953 1.242-2.429 1.322c-1.194.06-2.358-.646-2.76-.918-.782.04-1.545.151-2.288.333.462.11.984.303 1.405.656.984.828 1.014 2.19 1.014 2.19s-1.576.02-2.57-.807c-.611-.515-.852-1.232-.953-1.706-1.576.545-3.03 1.403-4.335 2.433.451 0 .933.05 1.385.242 1.244.535 1.686 1.897 1.686 1.897s-1.596.505-2.84-.03c-.643-.272-1.054-.767-1.315-1.18a22.676 22.676 0 0 0-2.951 3.027c.281-.04.572-.05.863-.02 1.415.162 2.258 1.413 2.258 1.413s-1.455.98-2.87.808c-.582-.07-1.044-.323-1.415-.596a27.77 27.77 0 0 0-1.435 2.322c-.088.166-.167.332-.245.496-.065.135-.129.27-.197.402.044-.013.086-.029.128-.044.085-.032.17-.063.263-.077 1.486-.242 2.69.777 2.69.777s-1.194 1.403-2.67 1.646c-.511.08-.993.01-1.405-.111-.461 1.12-.883 2.26-1.184 3.422.043-.03.084-.061.125-.092.072-.056.143-.112.226-.15 1.426-.677 2.931 0 2.931 0s-.793 1.756-2.208 2.432a3.294 3.294 0 0 1-1.556.293 18.935 18.935 0 0 0-.17 3.603c.09-.11.18-.222.29-.313 1.225-1.1 2.931-.878 2.931-.878s-.27 1.999-1.495 3.099a3.344 3.344 0 0 1-1.445.757c.15.838.341 1.655.602 2.473.03.115.071.23.112.345.027.077.055.154.079.23.01 0 .01-.01.01-.01.883-1.463 2.66-1.766 2.66-1.766s.33 2.08-.553 3.553c-.28.464-.652.797-1.023 1.06.36.807.762 1.595 1.204 2.362.522-1.595 2.057-2.362 2.057-2.362s.944 1.968.492 3.704a3.745 3.745 0 0 1-.732 1.393 25.18 25.18 0 0 0 1.575 1.858c.03-1.777 1.385-3.029 1.385-3.029s1.516 1.706 1.556 3.563c.01.697-.18 1.323-.432 1.828.673.555 1.355 1.08 2.068 1.584-.015-.045-.035-.09-.055-.136-.02-.045-.04-.09-.056-.136-.572-1.847.492-3.574.492-3.574s1.987 1.262 2.56 3.11c.28.918.16 1.806-.03 2.462.993.505 2.027.94 3.09 1.303a4.718 4.718 0 0 1-.843-.94c-1.094-1.665-.532-3.694-.532-3.694s2.339.687 3.443 2.352c.723 1.1.723 2.342.642 3.069a2.387 2.387 0 0 0 .291.08c1.395.334 2.82.505 4.266.586a10.79 10.79 0 0 1 1.525-.192c-.743-.04-2.529-.252-3.753-1.282-1.586-1.322-1.626-3.502-1.626-3.502s2.529-.03 4.115 1.292c1.535 1.282 1.625 3.35 1.625 3.482v.02Z"
                                    fill="currentColor"
                                ></path>
                                <path
                                    d="M6.849 37.67s-.663-2.553-2.43-3.795C2.665 32.644.467 33.2.467 33.2s.662 2.554 2.428 3.795c1.767 1.242 3.955.677 3.955.677ZM10.391 45.383c-2.298-.213-4.044 1.483-4.044 1.483s1.977 2.03 4.265 2.241c2.299.212 4.045-1.484 4.045-1.484s-1.977-2.029-4.266-2.24Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </span>
                    </div>{" "}
                    <button class="text-center block flex-shrink-0 snap-start self-start mx-4 border-4 border-transparent enabled:focus:bg-surface-muted enabled:hover:bg-surface-muted outline-none rounded-xl p-4 bg-surfaces-muted">
                        <img
                            src="https://sb.critikid.com/storage/v1/render/image/public/static/shield.svg"
                            width="48"
                            height="48"
                            alt="Shield Icon"
                            class="mx-auto mb-2"
                        />{" "}
                        <strong class="text-xl font-bold leading-none">
                            Money Back <br /> Guarantee
                        </strong>
                    </button>{" "}
                    <div class="flex items-start">
                        <blockquote class="flex flex-col gap-1 w-[300px] flex-shrink-0 snap-start px-4 box-content last:pr-16 svelte-mw6g9g">
                            <div class="text-yellow-400">★★★★★</div>{" "}
                            <div>
                                <p>
                                    I've been doing this myself as an adult and I find them easy to
                                    understand and entertaining. My eldest child, (8y.o.) started
                                    watching with me and said that...
                                </p>
                                <button
                                    type="button"
                                    class=" align-middle select-none transition-all relative rounded-lg  underline underline-offset-auto active:shadow-sm active:translate-y-1   text-center      svelte-1wj6ij5"
                                >
                                    Read more{" "}
                                </button>
                            </div>{" "}
                            <cite class="text-base">— Liliana</cite>
                        </blockquote>
                        <blockquote class="flex flex-col gap-1 w-[300px] flex-shrink-0 snap-start px-4 box-content last:pr-16 svelte-mw6g9g">
                            <div class="text-yellow-400">★★★★★</div>{" "}
                            <div>
                                <p>
                                    This [Fallacy Detectors] was so easy to comprehend for my child
                                    and was so engaging both us parents did it together with him. It
                                    took us by surprise how much...
                                </p>
                                <button
                                    type="button"
                                    class=" align-middle select-none transition-all relative rounded-lg  underline underline-offset-auto active:shadow-sm active:translate-y-1   text-center      svelte-1wj6ij5"
                                >
                                    Read more{" "}
                                </button>
                            </div>{" "}
                            <cite class="text-base">— Jessica A.</cite>
                        </blockquote>
                        <blockquote class="flex flex-col gap-1 w-[300px] flex-shrink-0 snap-start px-4 box-content last:pr-16 svelte-mw6g9g">
                            <div class="text-yellow-400">★★★★★</div>{" "}
                            <div>
                                <p>
                                    My 8 year old son LOVED [Fallacy Detectors] part 1 and had so
                                    much fun doing the quizzes! I also had a great time watching it
                                    and talking about it.
                                </p>
                            </div>{" "}
                            <cite class="text-base">— Megan, parent</cite>
                        </blockquote>
                        <blockquote class="flex flex-col gap-1 w-[300px] flex-shrink-0 snap-start px-4 box-content last:pr-16 svelte-mw6g9g">
                            <div class="text-yellow-400">★★★★★</div>{" "}
                            <div>
                                <p>
                                    I learned about different types of fallacies which help me to
                                    identify them when having a conversation. I've been able to
                                    identify LOADS of circular reasoning!
                                </p>
                            </div>{" "}
                            <cite class="text-base">— Adèle, 9</cite>
                        </blockquote>
                        <blockquote class="flex flex-col gap-1 w-[300px] flex-shrink-0 snap-start px-4 box-content last:pr-16 svelte-mw6g9g">
                            <div class="text-yellow-400">★★★★★</div>{" "}
                            <div>
                                <p>
                                    The videos are great! They're fun, engaging, and in just a few
                                    days, my son is understanding logical fallacies so much better
                                    than he was before, after like a year of lessons!
                                </p>
                            </div>{" "}
                            <cite class="text-base">— Anonymous</cite>
                        </blockquote>
                        <blockquote class="flex flex-col gap-1 w-[300px] flex-shrink-0 snap-start px-4 box-content last:pr-16 svelte-mw6g9g">
                            <div class="text-yellow-400">★★★★★</div>{" "}
                            <div>
                                <p>
                                    [My daughter] followed the entire Fallacy Detector Part 1 and
                                    immediately asked to do the other classes as well ... we had a
                                    very long discussion about what she learned over dinner.
                                </p>
                            </div>{" "}
                            <cite class="text-base">— Nino, parent</cite>
                        </blockquote>
                        <blockquote class="flex flex-col gap-1 w-[300px] flex-shrink-0 snap-start px-4 box-content last:pr-16 svelte-mw6g9g">
                            <div class="text-yellow-400">★★★★★</div>{" "}
                            <div>
                                <p>
                                    Critikid is an all-around great tool for children and teens who
                                    want to develop their analytical skills.
                                </p>
                            </div>{" "}
                            <cite class="text-base">— Ben, 15</cite>
                        </blockquote>
                        <blockquote class="flex flex-col gap-1 w-[300px] flex-shrink-0 snap-start px-4 box-content last:pr-16 svelte-mw6g9g">
                            <div class="text-yellow-400">★★★★★</div>{" "}
                            <div>
                                <p>
                                    The reason why we are so confused in life is because we just
                                    consume and never really chew information. Critikid is a
                                    fabulous website that addresses the most important skill that
                                    anyone should have, CRITICAL THINKING.
                                </p>
                            </div>{" "}
                            <cite class="text-base">— Dominika, piano teacher</cite>
                        </blockquote>
                        <blockquote class="flex flex-col gap-1 w-[300px] flex-shrink-0 snap-start px-4 box-content last:pr-16 svelte-mw6g9g">
                            <div class="text-yellow-400">★★★★★</div>{" "}
                            <div>
                                <p>
                                    I did this course to assess critical thinking content for kids,
                                    as I feel it is sorely lacking generally in school curricular
                                    and may be one of the reasons for...
                                </p>
                                <button
                                    type="button"
                                    class=" align-middle select-none transition-all relative rounded-lg  underline underline-offset-auto active:shadow-sm active:translate-y-1   text-center      svelte-1wj6ij5"
                                >
                                    Read more{" "}
                                </button>
                            </div>{" "}
                            <cite class="text-base">— Dr Amy</cite>
                        </blockquote>
                        <blockquote class="flex flex-col gap-1 w-[300px] flex-shrink-0 snap-start px-4 box-content last:pr-16 svelte-mw6g9g">
                            <div class="text-yellow-400">★★★★★</div>{" "}
                            <div>
                                <p>
                                    I am a university teacher and I am trained in statistics...and
                                    my score was not perfect :)
                                </p>
                                <p>
                                    I loved the course, learned from it, and am recommending it
                                    to...
                                </p>
                                <button
                                    type="button"
                                    class=" align-middle select-none transition-all relative rounded-lg  underline underline-offset-auto active:shadow-sm active:translate-y-1   text-center      svelte-1wj6ij5"
                                >
                                    Read more{" "}
                                </button>
                            </div>{" "}
                            <cite class="text-base">— Kiron</cite>
                        </blockquote>
                        <blockquote class="flex flex-col gap-1 w-[300px] flex-shrink-0 snap-start px-4 box-content last:pr-16 svelte-mw6g9g">
                            <div class="text-yellow-400">★★★★★</div>{" "}
                            <div>
                                <p>What a fun way to learn statistics!</p>
                            </div>{" "}
                            <cite class="text-base">— Denali, 14</cite>
                        </blockquote>
                        <blockquote class="flex flex-col gap-1 w-[300px] flex-shrink-0 snap-start px-4 box-content last:pr-16 svelte-mw6g9g">
                            <div class="text-yellow-400">★★★★★</div>{" "}
                            <div>
                                <p>
                                    It was a cool little text adventure game. Perhaps it would
                                    benefit from some kind of branching in the story that would lead
                                    to dead ends or some humorous...
                                </p>
                                <button
                                    type="button"
                                    class=" align-middle select-none transition-all relative rounded-lg  underline underline-offset-auto active:shadow-sm active:translate-y-1   text-center      svelte-1wj6ij5"
                                >
                                    Read more{" "}
                                </button>
                            </div>{" "}
                            <cite class="text-base">— Krzyftosz</cite>
                        </blockquote>
                        <blockquote class="flex flex-col gap-1 w-[300px] flex-shrink-0 snap-start px-4 box-content last:pr-16 svelte-mw6g9g">
                            <div class="text-yellow-400">★★★★★</div>{" "}
                            <div>
                                <p>
                                    I am exploring critical learning techniques for young students
                                    and am curious about the structure used.....seems consistency in
                                    delivery is...
                                </p>
                                <button
                                    type="button"
                                    class=" align-middle select-none transition-all relative rounded-lg  underline underline-offset-auto active:shadow-sm active:translate-y-1   text-center      svelte-1wj6ij5"
                                >
                                    Read more{" "}
                                </button>
                            </div>{" "}
                            <cite class="text-base">— Clinton Laird</cite>
                        </blockquote>
                        <blockquote class="flex flex-col gap-1 w-[300px] flex-shrink-0 snap-start px-4 box-content last:pr-16 svelte-mw6g9g">
                            <div class="text-yellow-400">★★★★★</div>{" "}
                            <div>
                                <p>
                                    I've tried emotional intelligence course with my son. We made in
                                    2 days, I liked it, it is not a solution but more like a path to
                                    discovery how to identify and control emotions. I recall it
                                    several time when my son loose his temper.
                                </p>
                            </div>{" "}
                            <cite class="text-base">— Gleb</cite>
                        </blockquote>
                        <blockquote class="flex flex-col gap-1 w-[300px] flex-shrink-0 snap-start px-4 box-content last:pr-16 svelte-mw6g9g">
                            <div class="text-yellow-400">★★★★★</div>{" "}
                            <div>
                                <p>
                                    I always like doing math and puzzles, but The Fallacy Detectors
                                    was extra fun. And I spotted a fallacy in a book the other day!
                                </p>
                            </div>{" "}
                            <cite class="text-base">— Tessa, 9</cite>
                        </blockquote>
                    </div>
                </div>{" "}
                <button class="collapse md:visible absolute right-0 top-1/2 -translate-y-1/2 bg-black rounded-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="inline-block h-12 w-12   "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>{" "}
                </button>
            </section>
            {/* Child Development */}
            <section className="container py-20 ">
                <div class="prose-headings:mb-2 mx-auto text-center child-development prose md:prose-xl ">
                    <h2>Child Development</h2>
                    <p className=" pt-5 pb-10 ">
                        Studies have shown roleplaying games to induce improvements in life skills
                        such as problem solving, organization, responsibility, leadership,
                        creativity, teamwork, social and emotional competencies as well as academic
                        engagement and motivation. Bowman & Standiford, 2015; Dyson et al. 2016;
                        Heinz & Prager, 2019; Ruff 2021
                    </p>
                </div>
                <div>
                    <div class="flex flex-wrap justify-center items-center gap-15">
                        <div className="max-w-[320px] p-6 text-center border border-white rounded-3xl ">
                            <h3 className="text-2xl font-semibold pb-5 ">Social Skills</h3>
                            <div className="grid place-items-center mb-5 ">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 640 512"
                                    height="60px"
                                    width="60px"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path>
                                </svg>
                            </div>
                            <div className="p-5 text-xl font-light italic ">
                                <p className="pb-5">
                                    "Emma gets to collaborate with kids outside her friends circle."{" "}
                                </p>
                                <p>Emma's parents</p>
                                <p>British International School</p>
                            </div>
                        </div>
                        <div className="max-w-[320px] p-6 text-center border border-white rounded-3xl ">
                            <h3 className="text-2xl font-semibold pb-5 ">Emotional Skills</h3>
                            <div className="grid place-items-center mb-5 ">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    height="60px"
                                    width="60px"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                                </svg>
                            </div>
                            <div className="p-5 text-xl font-light italic ">
                                <p className="pb-5">
                                    "Felicia adores the close friendships she made through
                                    UnboxWisdom."{" "}
                                </p>
                                <p>Felicia's parents</p>
                                <p>Engelska Skolan Norr</p>
                            </div>
                        </div>
                        <div className="max-w-[320px] p-6 text-center border border-white rounded-3xl ">
                            <h3 className="text-2xl font-semibold pb-5 ">Analytical skills</h3>
                            <div className="grid place-items-center mb-5 ">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 576 512"
                                    height="60px"
                                    width="60px"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"
                                        stroke="none"
                                    />
                                </svg>
                            </div>
                            <div className="p-5 text-xl font-light italic ">
                                <p className="pb-5">
                                    "Unbox Wisdom has taught Oliver the importance of strategic
                                    thinking."{" "}
                                </p>
                                <p>Oliver's parents</p>
                                <p>Engelska Skolan Norr</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <CoursesList heading="Worksheets &amp; Lesson Plans" /> */}

            {/* // Story Section */}
            <section class="container mx-auto px-4 md:px-8 my-12">
                <div class="prose-headings:mb-2 mx-auto  prose md:prose-xl ">
                    <h2>Critikid’s Story</h2>
                    <p>
                        My name is Stephanie Simoes. I started Critikid because I noticed a shortage
                        of online critical thinking resources for children. I had been teaching
                        children about logical fallacies and cognitive biases for a while, so I knew
                        that not only could they understand those topics, but they loved learning
                        about them!
                    </p>
                    <p>
                        I am funding this project through my savings, so a current priority is
                        keeping costs down. Fortunately, my husband is a web developer and designer,
                        so he takes care of the technical work. I'm covering living expenses by
                        teaching, so all money made from Critikid's sales will go towards funding
                        more content. I don’t have a marketing budget at this time, so if you want
                        to support this project, it would help a lot if you spread the word!
                    </p>
                    <h2>Critikid’s Mission</h2>
                    <p>
                        These days, we have access to more information than ever before but lack the
                        ability to properly understand it. We can interact with more people than
                        ever but have trouble communicating effectively.
                    </p>
                    <p>
                        Critikid's resources give kids and teens the skills they need to rationally
                        think about and discuss controversial issues without telling them the
                        conclusions they should draw. My goal is to help kids and teens build a
                        critical thinking toolkit that they can use to wisely navigate an
                        increasingly confusing world.
                    </p>
                </div>
            </section>
            {/* // Misson */}
            <section class="container mx-auto px-4 md:px-8 my-12">
                <div className="prose-headings:mb-2 mx-auto mb-10 prose md:prose-xl ">
                    {" "}
                    <h2>FAQ</h2>
                </div>
                <div
                    class="flex flex-col gap-4 max-w-3xl mx-auto"
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
                            What is critical thinking?
                        </summary>
                        <div
                            itemscope=""
                            itemprop="acceptedAnswer"
                            itemtype="https://schema.org/Answer"
                        >
                            <div itemprop="text">
                                <div class="prose md:prose-xl max-w-none w-full p-4 bg-surface-default mt-1">
                                    <p>
                                        Critical thinking is careful thinking. It is the process of
                                        rationally analyzing information, arguments, and even our
                                        own thought processes. It lets us distinguish between
                                        logical and flawed reasoning in order to communicate
                                        clearly, even when communicating with ourselves.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </details>

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
                            Why is critical thinking important?
                        </summary>
                        <div
                            itemscope=""
                            itemprop="acceptedAnswer"
                            itemtype="https://schema.org/Answer"
                        >
                            <div itemprop="text">
                                <div class="prose md:prose-xl max-w-none w-full p-4 bg-surface-default mt-1">
                                    <p>
                                        Firstly, critical thinking makes us better communicators.
                                        Logical fallacies frequently find their way into
                                        conversations, and when we can’t identify them, they tend to
                                        derail discussions and make them unproductive. The ability
                                        to recognize when you or your conversational partner is
                                        committing a logical fallacy can help get the conversation
                                        back on track.
                                    </p>
                                    <p>
                                        Critical thinking also makes us better decision-makers.
                                        Understanding cognitive biases means understanding our
                                        minds. When we can recognize our cognitive biases, we can
                                        get a better idea of why we make the decisions we do.
                                    </p>
                                    <p>
                                        People who try to sell us products or ideas know all about
                                        logical fallacies and cognitive biases, and they know how to
                                        use them to their advantage. The ability to think critically
                                        helps us to defend ourselves against manipulation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </details>

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
                            At what age should kids start learning critical thinking?
                        </summary>
                        <div
                            itemscope=""
                            itemprop="acceptedAnswer"
                            itemtype="https://schema.org/Answer"
                        >
                            <div itemprop="text">
                                <div class="prose md:prose-xl max-w-none w-full p-4 bg-surface-default mt-1">
                                    <p>
                                        Children can do activities to develop their critical
                                        thinking skills even before they can talk. A toy that lights
                                        up when a button is pressed teaches cause and effect,
                                        peek-a-boo teaches object permanence, and nesting toys help
                                        develop problem-solving skills.
                                    </p>
                                    <p>
                                        Once kids can talk, they can start to do simple experiments.
                                        For example, a parent might ask, “What do you think will
                                        happen when I mix the red and blue paint?” The child can
                                        make a prediction and then test it by mixing the paints. In
                                        the future, I'll post critical thinking activities for kids
                                        on this site.
                                    </p>
                                    <p>
                                        Critikid will offer various levels targeting different age
                                        groups. Fallacy Detectors is aimed at children ages 8-12.
                                        The formal logic course that I am now working on will target
                                        kids 13 and up.
                                    </p>
                                    <p>
                                        I’ve been teaching critical thinking to children for years
                                        now, so I know that they are not only capable of
                                        understanding it, but they love it. What kid wouldn’t find
                                        it amusing to hear about the silly mistakes that even adults
                                        can make? Moreover, childhood is the best time to strengthen
                                        the mind’s defenses and teach it to recognize its biases. It
                                        only gets harder as you get older.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </details>
                </div>
            </section>

            {/* Testimonials */}
            <section className="container py-20 ">
                <div class="prose-headings:mb-2 mx-auto pb-15 text-center child-development prose md:prose-xl ">
                    <h2>Testimonials</h2>
                </div>
                <div>
                    <div class="flex flex-wrap justify-center items-center gap-15">
                        <div className="max-w-[320px] p-6 text-center border border-white rounded-3xl ">
                            <h3 className="text-2xl font-semibold pb-5 ">Overall satisfaction</h3>
                            <div className="grid place-items-center mb-5 ">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 576 512"
                                    height="60px"
                                    width="60px"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                        stroke="none"
                                    />
                                </svg>
                            </div>
                            <div className="p-5 text-xl font-light italic ">
                                <p className="pb-5">
                                    "The best thing we have ever done is sign our daughter up for
                                    UnboxWisdom."
                                </p>
                                <p>Emma's parents</p>
                                <p>British International School</p>
                            </div>
                        </div>
                        <div className="max-w-[320px] p-6 text-center border border-white rounded-3xl ">
                            <h3 className="text-2xl font-semibold pb-5 ">Weekly effect</h3>
                            <div className="grid place-items-center mb-5 ">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 512 512"
                                    height="60px"
                                    width="60px"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M224 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zM80 160l26.66-53.33L160 80l-53.34-26.67L80 0 53.34 53.33 0 80l53.34 26.67L80 160zm352 128l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67L432 288zm70.62-193.77L417.77 9.38C411.53 3.12 403.34 0 395.15 0c-8.19 0-16.38 3.12-22.63 9.38L9.38 372.52c-12.5 12.5-12.5 32.76 0 45.25l84.85 84.85c6.25 6.25 14.44 9.37 22.62 9.37 8.19 0 16.38-3.12 22.63-9.37l363.14-363.15c12.5-12.48 12.5-32.75 0-45.24zM359.45 203.46l-50.91-50.91 86.6-86.6 50.91 50.91-86.6 86.6z"
                                        stroke="none"
                                    />
                                </svg>
                            </div>
                            <div className="p-5 text-xl font-light italic ">
                                <p className="pb-5">
                                    "Daniela looks forward to UnboxWisdom all week and is walking on
                                    air for hours after it’s over."
                                </p>
                                <p>Daniela's parents</p>
                                <p>British International School</p>
                            </div>
                        </div>
                        <div className="max-w-[320px] p-6 text-center border border-white rounded-3xl ">
                            <h3 className="text-2xl font-semibold pb-5 ">Educational Benefit</h3>
                            <div className="grid place-items-center mb-5 ">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 448 512"
                                    height="60px"
                                    width="60px"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"
                                        stroke="none"
                                    />
                                </svg>
                            </div>
                            <div className="p-5 text-xl font-light italic ">
                                <p className="pb-5">
                                    "Our students have improved their vocabulary and ability to
                                    collaborate."
                                </p>
                                <p>After School Care Supervisor</p>
                                <p>Kista International School</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ComingSoon />
        </main>
    )
}

export default HomePage
