import React from "react";
import {skills} from "../data";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Skills
                    </h1>
                    <p>
                        I code at these languages
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto">
                    {skills.map((skill) => (
                        <div key={skill.skill} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <span className="title-font font-medium text-white">
                  {skill.skill}
                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}