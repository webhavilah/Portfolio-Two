import React from 'react'

const Projects = () => {
    return (
        <>
            <div className="h-auto bg-slate-950 ">
                <h2 className='text-[#e3ffcc] py-15 text-3xl font-semibold text-center'>Here're My Projects</h2>
                <div className="w-90/100 m-auto pb-10">
                    <div className="text-[#e3ffcc] border-b border-t pt-5 pb-3 sm:px-10 px-5">
                        <h2 className='text-2xl'>
                            <a className='hover:underline cursor-pointer' href="https://e-commerce-rho-steel-54.vercel.app/" target="_blank" rel="noopener noreferrer">
                                E-commerce
                            </a>
                        </h2>
                        <p className='mt-2'>A fully responsive e-commerce web application that allows users to browse products, view detailed descriptions, add items to a cart, and experience a smooth checkout flow.
                        </p>
                    </div>
                    <div className="text-[#e3ffcc] border-b sm:px-10 px-5 pb-3 pt-5">
                        <h2 className='text-2xl'>
                            <a className='hover:underline cursor-pointer' href="https://task-manager-gamma-jet.vercel.app/" target="_blank" rel="noopener noreferrer">
                                Task-Manager
                            </a>
                        </h2>
                        <p className='mt-2'>
                            A productivity-focused task management application designed to help users create, organize, update, and track daily tasks efficiently with a clean and intuitive interface.
                        </p>
                    </div>
                    <div className="text-[#e3ffcc] border-b sm:px-10 px-5 pb-3 pt-5">
                        <h2 className='text-2xl'>
                            <a href="https://web-havilah.vercel.app/" target="_blank" rel="noopener noreferrer" className='hover:underline cursor-pointer'>
                                Portfolio One
                            </a>
                        </h2>
                        <p className='mt-2'>
                            A personal portfolio website built to showcase projects, technical skills, and creativity, while maintaining a modern layout, smooth navigation, and responsive design across devices.
                        </p>
                    </div>
                    <div className="text-[#e3ffcc] border-b sm:px-10 px-5 pb-3 pt-5">
                        <h2 className='text-2xl'>
                            <a href="https://groco-sage.vercel.app/" target="_blank" rel="noopener noreferrer" className='hover:underline cursor-pointer'>
                                Groco
                            </a>
                        </h2>
                        <p className='mt-2'>
                            An online grocery store interface that highlights fresh products, categories, and pricing, designed to provide users with an engaging and easy-to-navigate shopping experience.
                        </p>
                    </div>
                    <div className="text-[#e3ffcc] border-b sm:px-10 px-5 pb-3 pt-5">
                        <h2 className='text-2xl'>
                            <a href="https://webhavilah-coffee.vercel.app/" target="_blank" rel="noopener noreferrer" className='hover:underline cursor-pointer'>
                                Cold Brew
                            </a>
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