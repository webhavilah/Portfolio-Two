
import React from 'react'
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
    return (
        <>
            <div className="h-auto bg-slate-950 ">
                <h2 className='text-[#e3ffcc] py-15 text-3xl font-semibold text-center'>Here're My Projects</h2>
                <div className="w-90/100 m-auto pb-10">

                    {/* E-commerce (unchanged – already correct) */}
                    <div className="text-[#e3ffcc] border-b border-t pt-5 pb-3 sm:px-10 px-5">
                        <h2 className="text-2xl flex justify-between items-center">
                            <a className="hover:underline cursor-pointer" href="https://e-commerce-rho-steel-54.vercel.app/" target="_blank" rel="noopener noreferrer">
                                E-commerce
                            </a>

                            <div className="flex gap-4 items-center">
                                <a href="https://github.com/webhavilah/e-commerce" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="text-xl max-[600px]:text-xl hover:text-gray-400" />
                                </a>

                                <a href="https://e-commerce-rho-steel-54.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <FaLink className="text-lg max-[600px]:text-xl hover:text-gray-400" />
                                </a>
                            </div>
                        </h2>

                        <p className='mt-2'>
                            A fully responsive e-commerce web application that allows users to browse products, view detailed descriptions, add items to a cart, and experience a smooth checkout flow.
                        </p>
                    </div>

                    {/* Task Manager */}
                    <div className="text-[#e3ffcc] border-b sm:px-10 px-5 pb-3 pt-5">
                        <h2 className="text-2xl flex justify-between items-center">
                            <a className='hover:underline cursor-pointer' href="https://task-manager-gamma-jet.vercel.app/" target="_blank" rel="noopener noreferrer">
                                Task-Manager
                            </a>

                            <div className="flex gap-4 items-center">
                                <a href="https://github.com/webhavilah/Task-Manager" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="text-xl max-[600px]:text-xl hover:text-gray-400" />
                                </a>

                                <a href="https://task-manager-gamma-jet.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <FaLink className="text-lg max-[600px]:text-xl hover:text-gray-400" />
                                </a>
                            </div>
                        </h2>

                        <p className='mt-2'>
                            A productivity-focused task management application designed to help users create, organize, update, and track daily tasks efficiently with a clean and intuitive interface.
                        </p>
                    </div>

                    {/* Portfolio One */}
                    <div className="text-[#e3ffcc] border-b sm:px-10 px-5 pb-3 pt-5">
                        <h2 className="text-2xl flex justify-between items-center">
                            <a href="https://web-havilah.vercel.app/" target="_blank" rel="noopener noreferrer" className='hover:underline cursor-pointer'>
                                Portfolio One
                            </a>

                            <div className="flex gap-4 items-center">
                                <a href="https://github.com/webhavilah/My-Portfolio" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="text-xl max-[600px]:text-xl hover:text-gray-400" />
                                </a>

                                <a href="https://web-havilah.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <FaLink className="text-lg max-[600px]:text-xl hover:text-gray-400" />
                                </a>
                            </div>
                        </h2>

                        <p className='mt-2'>
                            A personal portfolio website built to showcase projects, technical skills, and creativity, while maintaining a modern layout, smooth navigation, and responsive design across devices.
                        </p>
                    </div>

                    {/* Groco */}
                    <div className="text-[#e3ffcc] border-b sm:px-10 px-5 pb-3 pt-5">
                        <h2 className="text-2xl flex justify-between items-center">
                            <a href="https://groco-sage.vercel.app/" target="_blank" rel="noopener noreferrer" className='hover:underline cursor-pointer'>
                                Groco
                            </a>

                            <div className="flex gap-4 items-center">
                                <a href="https://github.com/webhavilah/Groco" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="text-xl max-[600px]:text-xl hover:text-gray-400" />
                                </a>

                                <a href="https://groco-sage.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <FaLink className="text-lg max-[600px]:text-xl hover:text-gray-400" />
                                </a>
                            </div>
                        </h2>

                        <p className='mt-2'>
                            An online grocery store interface that highlights fresh products, categories, and pricing, designed to provide users with an engaging and easy-to-navigate shopping experience.
                        </p>
                    </div>

                    {/* Cold Brew */}
                    <div className="text-[#e3ffcc] border-b sm:px-10 px-5 pb-3 pt-5">
                        <h2 className="text-2xl flex justify-between items-center">
                            <a href="https://webhavilah-coffee.vercel.app/" target="_blank" rel="noopener noreferrer" className='hover:underline cursor-pointer'>
                                Cold Brew
                            </a>

                            <div className="flex gap-4 items-center">
                                <a href="https://github.com/webhavilah/Coffee" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="text-xl max-[600px]:text-xl hover:text-gray-400" />
                                </a>

                                <a href="https://webhavilah-coffee.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <FaLink className="text-lg max-[600px]:text-xl hover:text-gray-400" />
                                </a>
                            </div>
                        </h2>

                        <p className='mt-2'>
                            A stylish landing page for a coffee brand focused on cold brew products, combining appealing visuals, clear typography, and a modern layout to attract potential customers.
                        </p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Projects