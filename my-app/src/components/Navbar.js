import React from "react";

const flexbox = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
export default function Navbar() {
    return (
        <header>
            <div>
                <nav style={flexbox}>
                    <a href="#projects" className="mr-12 hover:text-white">
                        My Apps
                    </a>
                    <a href="#skills" className="mr-12 hover:text-white">
                        Skills
                    </a>
                    <a href="#testimonials" className="mr-12 hover:text-white">
                        Feedback
                    </a>
                </nav>
            </div>
        </header>
    );
}