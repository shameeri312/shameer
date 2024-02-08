import React, { useState } from 'react'
import pfp from '../assets/images/pfp.png'

export const Sidebar = () => {
    const [width, setWidth] = useState(0)
    const [left, setLeft] = useState('-150px')
    const [top, setTop] = useState(0)
    let hover = 'hover:text-yellow-400'

    // open the menu
    const openMenu = () => {
        setWidth('250px')
        setLeft('0px')
        setTop('-100px')
    }

    // close the menu
    const closeMenu = () => {
        setWidth('0')
        setLeft('-150px')
        setTop('0px')
    }

    return (
        <>
            {/* // sidebar */}
            <div className={`flex flex-col justify-between bg-[#020D19] h-[100svh] 
            w-[${width}] md:opacity-1 md:w-[250px] z-40 fixed flex-nowrap left-[${left}] md:left-0`}>

                {/* image */}
                <div className='text-center pt-16 h-[300px] flex flex-col relative overflow-hidden '>
                    <img src={pfp} className='m-auto rounded-full w-[150px] z-10' alt="" />
                    <h1 className='text-[#f8f9fa] font-bold py-4 text-xl'>Shameer Ijaz</h1>
                </div>

                {/* menu list */}
                <div className='text-center p-12 '>
                    <ul className='text-[#f8f9fa] flex flex-col gap-4'>
                        <a href='#home' className={`${hover}`}>Home</a>
                        <a href='#about' className={`${hover}`}>About me</a>
                        <a href='#' className={`${hover}`}>What I Do</a>
                        <a href='#' className={`${hover}`}>Resume</a>
                        <a href='#' className={`${hover}`}>Portfolio</a>
                        <a href='#' className={`${hover}`}>Testimonial</a>
                        <a href='#' className={`${hover}`}>Contact</a>
                    </ul>
                </div>

                {/* social icons */}
                <div className='text-center md:pt-20 md:pr-12 md:pl-12 pb-4 text-gray-400 flex justify-center items-center gap-4' >
                    <a href="#" className={`${hover}`}><i className={`fa-brands fa-facebook-f text-base`}></i></a>
                    <a href="#" className={`${hover}`}><i className={`fa-brands fa-linkedin-in text-lg`}></i></a>
                    <a href="#" className={`${hover}`}><i className={`fa-brands fa-instagram text-lg`}></i></a>
                </div>

                {/* close menu btn */}
                <div className="absolute top-1/2 left-[95%] bg-[#020D19] z-50 text-white md:hidden items-center 
                justify-center flex rounded-r-full">
                    <button className='text-3xl inline m-0 h-16 w-10 rounded-r-full font-bold' onClick={closeMenu}>
                        &lt;
                    </button>
                </div>
            </div>

            {/* mobile navbar */}
            <div className={`bg-[#020D19] fixed w-full md:hidden flex justify-between py-3 px-4 top-[${top}] z-20`}>
                <div className='text-center text-gray-400 flex justify-center items-center gap-4' >
                    <a href="#" className={`${hover}`}><i className={`fa-brands fa-facebook-f text-base`}></i></a>
                    <a href="#" className={`${hover}`}><i className={`fa-brands fa-linkedin-in text-lg`}></i></a>
                    <a href="#" className={`${hover}`}><i className={`fa-brands fa-instagram text-lg`}></i></a>
                </div>
                <div className='text-right text-2xl'>
                    <button className='text-gray-400' onClick={openMenu} onBlur={closeMenu}><i class="fa-solid fa-bars"> </i></button>
                </div>
            </div>
        </>
    )
}
