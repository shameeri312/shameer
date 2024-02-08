import React from 'react';
import Typewriter from 'typewriter-effect';

export const Home = () => {
    return (
        <>
            <div className={`w-[100%] text-white h-[100vh] flex flex-col gap-6 justify-center items-center bg-[#0000006d]`} id='home'>
                <h1 className='text-2xl font-medium'>Welcome</h1>
                <h1 className='text-7xl font-extrabold'>
                    <Typewriter
                        options={{
                            strings: [`I'm Shameer Ijaz`, `I'm Web Developer`],
                            autoStart: true,
                            loop: true, // Set loop to true
                        }}
                    />
                </h1>
                <button className='border-2 border-[#FFC027] text-lg text-[#FFC027] hover:text-white hover:bg-[#FFC027] px-9 py-3 rounded-full' >
                    Hire Me!
                </button>
            </div>
        </>
    );
};
