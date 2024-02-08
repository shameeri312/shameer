import React from 'react'
import { Home } from './Home'
import coding from '../assets/images/coding-2.jpg'
import { About } from './About'

export const Content = () => {
    return (
        <>
            <div className={`absolute top-0 bg-[url(${coding})] bg-left-bottom bg-cover bg-fixed width`} >
                <Home />
                <About />
            </div>
        </>
    )
}
