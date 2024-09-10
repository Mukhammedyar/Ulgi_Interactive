import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SearchIcon } from '../Utils/icons'
import Cards from './Cards'

export default function Header() {
    const [value, setValue] = useState('')
    const resultSectionRef = useRef(null);

    useGSAP(() => {
        
        gsap.fromTo('.text',
            {
                opacity: 0,
                translateY: "30px",
            },
            {
                opacity: 1,
                color: "#18181B",
                translateY: "0%",
                stagger: 0.08,
                onComplete: () => { 
                    gsap.to('.anim', {
                        color: "#4338CA",
                        lineHeight: "40px",
                        delay: -0.5,
                    })
                }
            },
        )
        gsap.fromTo('.header-text',
            { translateY: 50},
            {translateY: 0}
        )
        gsap.to('.icon', {
            display: 'none',
        })
        gsap.fromTo('.button',
            {
                opacity: 0,
                translateY: 30,
                translateX: 50
            }, {
                opacity: 1,
                translateY: 0,
                duration: 0.5,
                background: "#fff",
                color: "#18181B",
                delay: 1,
                onComplete: () => {
                    gsap.to('.button', {
                        translateX: 0, 
                    })
                    gsap.to('.button', {
                        translateX: 0, 
                        background: "button",
                        color: "#18181B",
                        delay: 0.7
                    })
                    gsap.to('.icon', {
                        display: 'block',
                        fill: "#18181B",
                        opacity: 0
                    })
                    gsap.to('.icon', { 
                        opacity: '1',
                        color: '#18181B',
                        translateX: 0,
                        delay: 1,
                        direction: 0.5,
                        fill: "#18181B"
                    })
                }
            }
        )
        
    })
    const handleSearchClick = (e) => {
        e.preventDefault()
        if (resultSectionRef.current) {
          window.scrollTo({
            top: resultSectionRef.current.offsetTop,
            behavior: 'smooth'
          });
        }
    };

  return (
    <div>
        <section id='Header' className='header -mt-20 text-zinc-800 flex-center flex-col md:container-box w-full h-[90vh] md:h-[95vh]'>
            <h1 className="text-3xl md:text-5xl lg:text-5xl text-center px-5 header-text poppins-bold">
                    <span className='text'>«Úlgi» </span>
                    <span className='text'>joybarı </span>
                    <span className='text'>menen </span>
                    <span className='text anim'>qaraqalpaqsha </span>
                    <span className='text'>so'zlerdi </span>
                    <span className='text'>izlep, </span>
                    <span className='text'>duris </span>
                    <span className='text anim px-2 '>hám qátesiz </span>
                    <span className='text'>jazin'. </span>
            </h1>
            <form action="Post" className='w-full flex-center gap-2 mt-24' onSubmit={(e) => handleSearchClick(e)}>
                <input
                    className='button search-input w-3/4 md:w-1/2' 
                    type="text" 
                    placeholder={"So'zlerdi izlew..."} 
                    value={value}  
                        onChange={(e) => setValue(e.target.value)} />
                    <button type='submit' className="icon search-button opacity-0 -translate-x-10" >
                    <SearchIcon width={30} height={30} className={""}/>      
                </button>
            </form>
        </section> 
        <div ref={resultSectionRef}>
            <Cards value={value} />
        </div>
    </div> 
  )
}
