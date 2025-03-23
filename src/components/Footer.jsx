import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer class="py-4 mt-8 bg-black/30 w-full svelte-9n1dia">
            <div class="flex flex-col md:flex-row gap-4 items-start justify-between container px-4 lg:px-8 mx-auto">
                <div class="flex flex-col gap-2">
                    <a
                        href="/public/Unbox-Wisdom.pdf"
                        target="_blank"
                        // className="px-2 py-1 rounded-full link"
                        className="link"
                    >
                        Unbox Wisdom Class{" "}
                    </a>
                    {/* <Link
                        class="link"
                        to="/worksheets"
                    >
                        Worksheets
                    </Link>{" "} */}
                    <Link
                        class="link"
                        to="/puzzles"
                    >
                        Puzzles
                    </Link>{" "}
                    <Link
                        to="/blog"
                        class="link"
                    >
                        Blog
                    </Link>
                    <p class="link">Critical Thinking Resources</p>
                    <p class="link">Privacy</p>{" "}
                    {/* <p
                        class="link"
                    >
                        Terms
                    </p> */}
                </div>{" "}
                <div class="flex flex-col gap-2"></div>{" "}
                <div class="flex flex-col gap-2 justify-between self-stretch items-start">
                    <div>
                        <h4 class="font-bold mb-2">Follow me on</h4>{" "}
                        <div class="flex nowrap mx-auto gap-4 items-center justify-center max-w-md ">
                            <a
                                href="https://www.facebook.com/profile.php?id=61551653827260"
                                class="opacity-90 hover:opacity-100 transition-opacity"
                                target="_blank"
                            >
                                <img
                                    src="https://sb.critikid.com/storage/v1/render/image/public/static/logo-fb.svg"
                                    alt="Facebook"
                                    class="aspect-square w-6"
                                    loading="lazy"
                                />
                            </a>{" "}
                            <a
                                href="https://www.instagram.com/critikid"
                                class="opacity-90 hover:opacity-100 transition-opacity"
                                target="_blank"
                            >
                                <img
                                    src="https://sb.critikid.com/storage/v1/render/image/public/static/logo-instagram.svg"
                                    alt="Instagram"
                                    class="aspect-square w-6"
                                    loading="lazy"
                                />
                            </a>{" "}
                            <a
                                href="https://twitter.com/critikids"
                                target="_blank"
                                class="opacity-90 hover:opacity-100 transition-opacity"
                            >
                                <img
                                    src="https://sb.critikid.com/storage/v1/render/image/public/static/logo-x.svg"
                                    alt="X"
                                    class="aspect-square w-6"
                                    loading="lazy"
                                />
                            </a>{" "}
                            <a
                                href="https://www.tiktok.com/@critikid"
                                target="_blank"
                                class="opacity-90 hover:opacity-100 transition-opacity"
                            >
                                <img
                                    src="https://sb.critikid.com/storage/v1/render/image/public/static/logo-tiktok.svg"
                                    alt="TikTok"
                                    class="aspect-square w-6"
                                    loading="lazy"
                                />
                            </a>{" "}
                            <a
                                href="https://www.linkedin.com/in/stephanie-simoes-b4a159157/"
                                target="_blank"
                                class="opacity-90 hover:opacity-100 transition-opacity"
                            >
                                <img
                                    src="https://sb.critikid.com/storage/v1/render/image/public/static/logo-ln.png"
                                    alt="LinkedIn"
                                    class="aspect-square w-6"
                                    loading="lazy"
                                />
                            </a>
                        </div>{" "}
                        <h4 class="font-bold mb-1 mt-6">Message me at</h4>{" "}
                        <a
                            href="mailto:stephanie@critikid.com"
                            class="link"
                        >
                            stephanie@critikid.com
                        </a>
                    </div>{" "}
                    <span class="self-end opacity-80">© Critikid.com 2024</span>{" "}
                </div>
            </div>
        </footer>
    )
}

export default Footer
