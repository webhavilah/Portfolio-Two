import React from "react";
import { FaAnglesDown } from "react-icons/fa6";
const HeroSection = () => {
    return (
        <>
            <div className="">
                <div className="h-screen bg-slate-900">
                    <header className="h-1/10 bg-slate-950 flex">
                        <nav className="flex justify-between items-center m-auto w-9/10">
                            <h2 className="text-3xl font-semibold text-[#e3ffcc] max-[400px]:text-2xl">
                                Portfolio
                            </h2>
                            <button className="border-2 border-[#e3ffcc] py-2 px-3.5 text-[#e3ffcc] rounded hover:bg-[#e3ffcc] hover:text-slate-900 font-semibold transition duration-500 max-[400px]:px-2.5 max-[400px]:py-1.5 max-[400px]:text-sm">
                                <a href="https://github.com/webhavilah"  target="_blank" rel="noopener noreferrer">
                                See my Github
                                </a>
                            </button>
                        </nav>
                    </header>

                    <div className="hero h-9/10 flex flex-col justify-center">
                        <div className="w-9/10 m-auto">
                            <p className="text-2xl text-[#c7baff] mb-5 max-[400px]:text-xl">
                                Hello, My Name is
                            </p>

                            <h2 className="text-4xl md:text-5xl font-semibold mb-5 max-[400px]:text-3xl">
                                <span className="text-[#e3ffcc]">Adekanye </span>
                                <span className="text-slate-400">Havilah</span>
                            </h2>

                            <p className="text-2xl text-[#e3ffcc] max-[400px]:text-xl">
                                I am a web developer
                            </p>

                            <div className="w-9/10 absolute bottom-[10vh] m-auto flex justify-center flex-col items-center">
                                <p className="text-slate-400 text-3xl max-[400px]:text-2xl">View My Projects Here</p>
                                <FaAnglesDown className="text-xl text-slate-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
