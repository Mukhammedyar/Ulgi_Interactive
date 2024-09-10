import React, { useState } from 'react'
import LoginIcon, { MenuIcon, PhoneIcon } from '../Utils/icons'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useNavigate } from 'react-router-dom'
import ContactsModal from './ContactsModal'

export default function Navbar() {
    const [openSidebar, setOpenSidebar] = useState(false)
    const [open, setOpen] = useState(false);
    const [openMObile, setOpenMObile] = useState(false);
    const navigate = useNavigate()

    const openSidebarHandler = () => { 
        setOpenSidebar(!openSidebar)
        if (openSidebar) {
            gsap.to('.mobile-sidebar', {
                translateX: '0%',
                display: 'block',
                duration: 0.5
            }) 
            gsap.fromTo('.item',
                {opacity: 0},
                {opacity: 1, stagger: 0.05}
            )
        }else{
            gsap.to('.mobile-sidebar', {
                translateX: "120%", 
                display: 'none' 
            }) 
            gsap.to('.item',
                {opacity: 0, stagger: 0.05,}
            )
        }
    }
    const handleToggle = () => setOpen(!open);


    useGSAP(() => {
        gsap.to('.navbar-box', {
            opacity: 1, 
            translateY: 0, 
            delay: 0.5, 
        })
        gsap.to('.text-hover', {
            opacity: 1,  
            delay: 0.5, 
            stagger: 0.05
        })
        gsap.to('.logo', {
            opacity: 1,  
            delay: 1.5,
            translateX: 30,
        })
        
    }, [])

  return (
    <div className='navbar-box px-5 md:px-16 sticky top-0 z-10 bg-[rgba(255,255,255,.5)] backdrop-blur-sm text-zinc-900 -translate-y-[100%] opacity-0' >
        <div className="logo -translate-x-10 opacity-0">
            <span className='-mb-2 text-indigo-700 text-2xl'>Úlgi</span>
            <span className='text-sm text-indigo-700'>Interactive</span>
        </div>
        <div className=" gap-5 text-sm md:text-md text-center hidden md:flex-between relative">
            <span className='text-hover' onClick={()=> navigate('/')}>Bas bet</span>
            <span className='text-hover' onClick={()=> navigate('/literature')}>Ádebiyatlar</span>
            <span className='text-hover' onClick={()=> navigate('/publics')}>Publikaciyalar</span>
            <span className='text-hover' onClick={()=> navigate('/send-question')}>Soraw jollaw</span>  
        </div>
        <span className='text-hover hidden md:flex gap-2' onClick={handleToggle}>
            Baylanıs
            <PhoneIcon width={20} height={20}/>
        </span>  
        <ContactsModal open={open} setOpen={setOpen} className={"p-4 mt-2 top-16 right-10"}/>
        <button className='bg-[#5768FC] p-1 rounded-lg flex md:hidden' onClick={()=> openSidebarHandler()}>
            <MenuIcon/>
        </button>
        <div className={`mobile-sidebar`}>
            <div className="flex-between px-2">
                <div className="logo-mobile item">
                    <span className='-mb-2 text-indigo-700'>Úlgi</span>
                    <span className='text-sm text-indigo-700'>Interactive</span>
                </div>
            </div>
            <div className="gap-7 text-md md:text-md text-center md:hidden flex-between text-zinc-900 flex-col mt-12 relative">
                <span className='text-hover item' onClick={()=> navigate('/')}>Bas bet</span>
                <span className='text-hover item' onClick={()=> navigate('/literature')}>Ádebiyatlar</span>
                <span className='text-hover item' onClick={()=> navigate('/publics')}>Publikaciyalar</span>
                <span className='text-hover item' onClick={()=> navigate('/send-question')}>Soraw jollaw</span>  
                <span className='text-hover item flex md:hidden gap-2' onClick={()=> setOpenMObile(!openMObile)}>
                    Baylanıs
                    <PhoneIcon width={20} height={20}/>
                </span>
                <ContactsModal open={openMObile} setOpen={setOpenMObile} className={"p-4 mt-2 top-[220px] right-10"}/>
                  
            </div>
        </div>
    </div>
  )
}
