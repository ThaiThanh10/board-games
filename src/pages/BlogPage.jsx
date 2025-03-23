import React from "react"
import { CoursesList } from "../components/sections"

const BlogPage = () => {
    return (
        <main>
            {" "}
            <section className="container mx-auto px-4 md:px-8 ">
                <div className="prose-headings:mb-2 mx-auto  prose md:prose-lg ">
                    <h1>Critical Thinking Blog</h1>
                    <p>This blog contains four sections:</p>
                    <ol>
                        <li>
                            <strong>
                                <a
                                    href="#for_adults"
                                    className="link"
                                >
                                    Critical Thinking Articles
                                </a>
                            </strong>
                            : Articles for teens and adults about various critical thinking topics
                            such as what critical thinking is (and is not), how to spot
                            pseudoscience, and how arguments can go wrong.
                        </li>
                        <li>
                            <strong>
                                <a
                                    href="#teaching_kids"
                                    className="link"
                                >
                                    Pedagogy
                                </a>
                            </strong>
                            : Practical tips on how to teach critical thinking and other skills to
                            kids and teens.
                        </li>
                        <li>
                            <strong>
                                <a
                                    href="#handbooks"
                                    className="link"
                                >
                                    Handbooks
                                </a>
                            </strong>
                            : Short, simple explanations of critical thinking concepts covered in
                            Critikid's courses so that parents and teachers can better support the
                            learning journey.
                        </li>
                        <li>
                            <strong>
                                <a
                                    href="#puzzles"
                                    className="link"
                                >
                                    Puzzles and Paradoxes
                                </a>
                            </strong>
                            : Real-life paradoxes and tricky puzzles with counterintuitive
                            solutions.
                        </li>
                        <li>
                            <strong>
                                <a
                                    href="#media"
                                    className="link"
                                >
                                    Media Literacy Interviews
                                </a>
                            </strong>
                            : Interviews with various media and digital literacy experts about how
                            kids, teens, and all of us can navigate the online world in a safe and
                            rational way.
                        </li>
                    </ol>
                    <div id="for_adults" />
                    <h2>Critical Thinking Articles</h2>
                    <h3>
                        <a
                            href="/what-is-critical-thinking"
                            className="link"
                        >
                            What is Critical Thinking?
                        </a>
                    </h3>
                    <p>
                        <strong>by Jon Guy</strong>
                        <br />
                        Misconceptions about critical thinking include beliefs such as “We are all
                        born critical thinkers” or “Critical thinking comes naturally” or “I’m a
                        critical thinker because I question authority.”
                    </p>
                    <h3>
                        <a
                            href="/pseudoskepticism"
                            className="link"
                        >
                            Pseudo-skepticism: What Is Not Critical Thinking?
                        </a>
                    </h3>
                    <p>
                        <strong>by Jon Guy</strong>
                        <br />
                        How is rational skepticism different from contrarianism, cynicism, and
                        denialism?
                    </p>
                    <h3>
                        <a
                            href="/wellness"
                            className="link"
                        >
                            The Importance of Critical Thinking in Navigating Modern Health and
                            Wellness
                        </a>
                    </h3>
                    <p>
                        <strong>by Amanda Lourens</strong>
                        <br />
                        One woman's story about the power of critical thinking in overcoming health
                        misinformation.
                    </p>
                    <h3>
                        <a
                            href="/critical-thinking-paradox"
                            className="link"
                        >
                            The Critical Thinking Paradox
                        </a>
                    </h3>
                    <p>
                        <strong>by Santiago Gisler</strong>
                        <br />
                        There lies a crucial paradox in critical thinking development: as we focus
                        on mastering our critical thinking skills, we also learn to automate
                        them—sometimes to their detriment.
                    </p>
                    <h3>
                        <a
                            href="/debunkbot"
                            className="link"
                        >
                            How DebunkBot is Helping Minds Change
                        </a>
                    </h3>
                    <p>
                        <strong>by Stephanie Simoes</strong>
                        <br />
                        Six lessons we can learn about effective communication from an AI chatbot
                        that is helping people to change their minds.
                    </p>
                    <h3>
                        <a
                            href="/how-arguments-go-wrong"
                            className="link"
                        >
                            How Arguments Can Go Wrong
                        </a>
                    </h3>
                    <p>
                        <strong>by Stephanie Simoes</strong>
                        <br />
                        There are two main ways an argument can go wrong.
                    </p>
                    <h3>
                        <a
                            href="/how-flawed-arguments-go-right"
                            className="link"
                        >
                            How Flawed Arguments Can Go Right
                        </a>
                    </h3>
                    <p>
                        <strong>by Stephanie Simoes</strong>
                        <br />
                        Sometimes, flawed arguments have true conclusions.
                    </p>
                    <h3>
                        <a
                            href="/denominator-neglect"
                            className="link"
                        >
                            Denominator Neglect: A Poem
                        </a>
                    </h3>
                    <p>
                        <strong>by Stephanie Simoes</strong>
                        <br />
                        Unlikely things are likely to happen when happening happens a lot.
                    </p>
                    <h3>
                        <a
                            href="/how-to-spot-pseudoscience"
                            className="link"
                        >
                            How to Spot Pseudoscience
                        </a>
                    </h3>
                    <p>
                        <strong>by Stephanie Simoes</strong>
                        <br />
                        Pseudoscience is not the same as bad science. This post covers what
                        pseudoscience is (and is not) and how we can detect it.
                    </p>
                    <h3>
                        <a
                            href="/typing-logic-symbols"
                            className="link"
                        >
                            How to Type the Connective Symbols of Symbolic Logic
                        </a>
                    </h3>
                    <p>
                        <strong>by Stephanie Simoes</strong>
                        <br />A guide on how to type the connective symbols for symbolic logic, also
                        called formal logic or sentential logic, on Mac and Windows.
                    </p>
                    <div id="teaching_kids" />
                    <h2>Pedagogy</h2>
                    <h3>
                        <a
                            href="/gamification"
                            className="link"
                        >
                            The Over-Gamification of Learning: When the Subject Becomes an NPC
                        </a>
                    </h3>
                    <p>
                        <strong>by James Myklebust-Hampshire</strong>
                        <br />
                        Can gamified learning go too far? How to design engaging educational games
                        that don't rely on extrinsic rewards.
                    </p>
                    <h3>
                        <a
                            href="/math-fluency"
                            className="link"
                        >
                            Mathematical Fluency: A Pathway to Deeper Thinking
                        </a>
                    </h3>
                    <p>
                        <strong>by Chris Hogbin</strong>
                        <br />
                        An exploration of what mathematical fluency looks like and how it inherently
                        fosters critical thinking.
                    </p>
                    <h3>
                        <a
                            href="/critical-thinking-for-kids"
                            className="link"
                        >
                            Critical Thinking for Kids
                        </a>
                    </h3>
                    <p>
                        <strong>by Ronald Crouch</strong>
                        <br />
                        Tips from a child psychologist on how to teach children of various ages
                        critical thinking at home.
                    </p>
                    <h3>
                        <a
                            href="/student-questions"
                            className="link"
                        >
                            Student Questions That I Don't Answer
                        </a>
                    </h3>
                    <p>
                        <strong>by Stephanie Simoes</strong>
                        <br />
                        One of my favourite parts of being a teacher is the interesting and
                        sometimes even surprising questions my students ask me. Due to their
                        enormous curiosity, children may ask some questions that adults find
                        difficult to answer.
                    </p>
                    <h3>
                        <a
                            href="/socratic-method"
                            className="link"
                        >
                            The Socratic Teaching Method
                        </a>
                    </h3>
                    <p>
                        <strong>by Stephanie Simoes</strong>
                        <br />
                        By asking a series of questions, you can guide students to knowledge they
                        didn’t know they already had.
                    </p>
                    <h3>
                        <a
                            href="/idontknow-in-education"
                            className="link"
                        >
                            The Power of “I Don't Know” in Education
                        </a>
                    </h3>
                    <p>
                        <strong>by Stephanie Simoes</strong>
                        <br />
                        As adults, we must not be embarrassed to say "I don't know" to children.
                        Used correctly, this phrase can be a powerful educational tool, for several
                        reasons.
                    </p>
                    <h3>
                        <a
                            href="/learning-through-teaching"
                            className="link"
                        >
                            Learning through Teaching
                        </a>
                    </h3>
                    <p>
                        <strong>by Stephanie Simoes</strong>
                        <br />
                        Teaching equips students with essential life skills that extend far beyond
                        the classroom.
                    </p>
                    <h3>
                        <a
                            href="/teaching-about-algorithm"
                            className="link"
                        >
                            How I Teach my Six-Year-Old about the Algorithm
                        </a>
                    </h3>
                    <p>
                        <strong>by Jessica Silberman</strong>
                        <br />
                        You can encourage smart and thoughtful technology use in young children by
                        adding in a few questions as you go about your normal day.
                    </p>
                    <div id="handbooks" />
                    <h2>Handbooks</h2>
                    <h3>
                        <a
                            href="/logical-fallacy-handbook"
                            className="link"
                        >
                            Logical Fallacy Handbook
                        </a>
                    </h3>
                    <p>
                        <strong>by Stephanie Simoes</strong>
                        <br />
                        Logical fallacies are flaws in reasoning. This handbook provides a brief
                        overview of ten common logical fallacies.
                    </p>
                    <h3>
                        <a
                            href="/data-analysis-handbook"
                            className="link"
                        >
                            Data Analysis Handbook
                        </a>
                    </h3>
                    <p>
                        <strong>by Stephanie Simoes</strong>
                        <br />
                        We have access to more information than ever, but we also need skills to
                        make sense of it all. This handbook provides a brief overview of common
                        errors in data analysis.
                    </p>
                    <div id="puzzles" />
                    <h2>Puzzles and Paradoxes</h2>
                    <h3>
                        <a
                            href="/false-positive-paradox"
                            className="link"
                        >
                            The False Positive Paradox
                        </a>
                    </h3>
                    <p>
                        <strong>by Stephanie Simoes</strong>
                        <br />
                        You test for a disease that affects 1% of the population. The test has a 5%
                        false positive rate. Your test comes back positive. What are the chances you
                        have the disease?
                    </p>
                    <h3>
                        <a
                            href="/simpsons-paradox"
                            className="link"
                        >
                            Simpson’s Paradox
                        </a>
                    </h3>
                    <p>
                        <strong>by Stephanie Simoes</strong>
                        <br />
                        Simpson's paradox is a counterintuitive statistical phenomenon that can
                        result in data misinterpretation if we're not careful. Let's see how it
                        works with the Kidney Conundrum.
                    </p>
                    <h3>
                        <a
                            href="/two-child-problem"
                            className="link"
                        >
                            The Two Child Problem: A Probability Puzzle in Three Parts
                        </a>
                    </h3>
                    <p>
                        <strong>by Stephanie Simoes</strong>
                        <br />
                        The Two Child Problem shows us that our intuition can mislead us when
                        thinking about probability.
                    </p>
                    <h3>
                        <a
                            href="/two-box-puzzle"
                            className="link"
                        >
                            The Two Box Puzzle
                        </a>
                    </h3>
                    <p>
                        <strong>by Stephanie Simoes</strong>
                        <br />
                        Someone presents you with two opaque boxes. One has two $100 bills. The
                        other has a $100 bill and a $1 bill. You are told that you will get to keep
                        the second bill you withdraw...
                    </p>
                    <h3>
                        <a
                            href="/conditional-probability"
                            className="link"
                        >
                            Conditional Probability
                        </a>
                    </h3>
                    <p>
                        <strong>by Stephanie Simoes</strong>
                        <br />
                        Learning this key concept in probability will help you to understand these
                        probability puzzles.
                    </p>
                    <div id="media" />
                    <h2>Media Literacy Interviews</h2>
                    <h3>
                        <a
                            href="/algorithms"
                            className="link"
                        >
                            1. Understanding Algorithms
                        </a>
                    </h3>
                    <p>
                        <strong>with Douglas Rushkoff</strong>
                        <br />
                        Media theorist, author, and professor Douglas Rushkoff talks about the pros
                        and cons of algorithms and how we can challenge their influence on our
                        online experience.
                    </p>
                    <h3>
                        <a
                            href="/misinformation"
                            className="link"
                        >
                            2. Navigating Misinformation
                        </a>
                    </h3>
                    <p>
                        <strong>with Matthew Facciani</strong>
                        <br />
                        Social scientist Matthew Facciani explains what misinformation is, how
                        cognitive biases make us vulnerable to it, and gives practical strategies
                        for spotting and challenging it.
                    </p>
                </div>{" "}
                <hr className="mx-auto max-w-2xl" />{" "}
                <div className=" w-full flex-grow-1 bg-surface-muted border border-border-default rounded-lg overflow-hidden p-4 transition-colors mt-4 md:p-8 mx-auto max-w-2xl">
                    <div className="relative">
                        <form
                            name="emails"
                            method="POST"
                            className="flex flex-col gap-4 text-center  relative"
                        >
                            <input
                                type="hidden"
                                name="form-name"
                                defaultValue="emails"
                            />{" "}
                            <label
                                htmlFor="email"
                                className="text-2xl my-2"
                            >
                                Don't miss new posts! Subscribe to my newsletter:
                            </label>{" "}
                            <fieldset className="flex flex-nowrap gap-2 max-sm:flex-col ">
                                <input
                                    type="text"
                                    name="username"
                                    className="hidden"
                                />{" "}
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="something@something.com"
                                    className="w-full p-4 rounded-md text-blue-950 text-lg"
                                    required=""
                                />{" "}
                                <button
                                    type="submit"
                                    className="whitespace-nowrap align-middle select-none transition-all relative rounded-lg text-orange-50 bg-orange-500 enabled:hover:bg-orange-600 shadow-lg dark:bg-orange-700 dark:enabled:hover:bg-orange-800  active:shadow-sm active:translate-y-1 text-lg px-4 py-2 text-center      svelte-1wj6ij5"
                                >
                                    Subscribe
                                </button>
                            </fieldset>
                        </form>
                    </div>
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

export default BlogPage
