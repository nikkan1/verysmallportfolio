import React from "react";
import {projects} from "../data";

export default function Projects() {
    return (
        <section id="projects" className="">
            <div className="container py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col mb-20">
                    <h1 className="sm:text-5xl mb-4 text-white">
                        Games I've Developed
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        I Developed These Apps
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <a
                            className="sm:w-1/2 w-100 p-3">
                            <div className="relative">
                                <img
                                    className="absolute w-full h-full object-cover object-center"
                                    src={project.image}
                                />
                                <div className="py-10 relative bg-gray-900 opacity-0 hover:opacity-100">
                                    <h1 className="font-bold mb-1">
                                        {project.title}
                                    </h1>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}