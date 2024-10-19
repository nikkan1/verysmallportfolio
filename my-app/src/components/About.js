import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="mx-auto py-20">
                <div className="flex flex-col text-center">
                    <h1 className="sm:text-4xl text-3xl mb-14 font-medium text-white">
                        Hi, I'm ---.
                        <br/>And this is my site
                    </h1>
                    <div className="justify-center">
                        <a
                            href="#projects"
                            className="bg-gray-800 py-2 px-6 hover:bg-gray-700 hover:text-white rounded text-lg">
                            Look at the games i developed
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}