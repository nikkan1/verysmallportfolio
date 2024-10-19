import React from "react";
import {testimonials} from "../data";

export default function FeedBack() {
    return (
        <section id="testimonials">
            <div className="container mx-auto text-center">
                <h1 className="sm:text-4xl text-white mb-12">
                    Client Feedback
                </h1>
                <div className="flex flex-wrap">
                    {testimonials.map((testimonial) => (
                        <div className="p-4 md:w-1/2">
                            <div className=" bg-gray-800 p-8">
                                <p className=" mb-6">{testimonial.quote}</p>
                                <div className="inline-flex">
                                    <img
                                        src={testimonial.image}
                                        className="w-12"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}