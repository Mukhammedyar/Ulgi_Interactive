import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger);

export default function PublicsMainCards() {
    const navigate = useNavigate()
    
    useEffect(() => {
        scrollTrigger: {
            trigger: ".box", 
            gsap.to('.card', {
                filter: "blur(0)", 
                opacity: 1, 
                scale: 1,
                stagger: 0.3
            })
        }  
    }, [])
        

  return (
    <div className='grid box grid-cols-12 lg:grid-rows-2 h-[350px] lg:h-[400px] gap-3 p-3'>
        <div className="big-public-card card opacity-0 scale-90 grid grid-col-12 row-end-4">
            <img src="https://storage.kun.uz/source/thumbnails/_medium/10/cHvlSYjGyMrp7cH63Ug-AXvc5wv7JsRs_medium.jpg" alt=""
                className='h-full w-full object-cover col-start-1 col-end-10' />
            <div className='col-start-10 col-end-13 p-3 flex flex-col poppins-medium justify-between lg:pt-10 gap-3'>
                <p className="text-xs lg:text-sm  text-zinc-500">21:43 / 24.05.2024</p>
                <p className="title text-md lg:text-xl font-bold">“Baha urısi”. Ne ushın Qitay elektromobillari júdá arzan?</p>
                <p className="title text-xs lg:text-md text-zinc-600 font-medium">Qanday etip Kitay kompaniyaları jáhán avtomobil bazarınıń dástúriy jetekshileri - nemislar, yaponlar hám amerikalıqlardı artta qaldıryapti?
                Qanday etip Qitay kompaniyaları jáhán avtomobil bazarınıń 
                </p>
                <button onClick={()=> navigate('')} className='text-blue py-2 px-2 rounded-xl bg-white'>
                    {"Kóbirek oqıw >"}
                </button>
            </div>
        </div>
        <div className="lg:grid hidden lg:grid-rows-2 lg:col-start-9 col-start-1 col-end-13 lg:row-start-1 lg:row-end-3 row-start-4 row-end-6 gap-2">
            <div className="public-card1 card opacity-0 scale-90 lg:grid grid-cols-12 grid-rows-2 row-start-3 row-end-4">
                <img src="https://storage.kun.uz/source/thumbnails/_medium/10/cHvlSYjGyMrp7cH63Ug-AXvc5wv7JsRs_medium.jpg" alt=""
                    className='public-card1_img row-start-1 row-end-3 col-start-1 col-end-7' />
                <div className='public-card1_text col-start-7 col-end-13 row-start-1 row-end-3'>
                    <p className="text-xs text-zinc-500">21:43 / 24.05.2024</p>
                    <p className="title text-sm font-bold"  onClick={()=> navigate('')}>“Baha urısi”. Ne ushın Qitay elektromobillari júdá arzan?</p>
                    <p className="title text-xs text-zinc-600 font-medium">Qanday etip Kitay kompaniyaları jáhán avtomobil bazarınıń dástúriy jetekshileri - nemislar</p>
                </div>
            </div>
            <div className="public-card2 card opacity-0 scale-90 lg:grid grid-rows-2 grid-cols-12">
                <img src="https://storage.kun.uz/source/thumbnails/_medium/10/cHvlSYjGyMrp7cH63Ug-AXvc5wv7JsRs_medium.jpg" alt=""
                    className='public-card1_img row-start-1 row-end-3 col-start-1 col-end-7' />
                <div className='public-card1_text col-start-7 col-end-13 row-start-1 row-end-3'>
                    <p className="text-xs text-zinc-500">21:43 / 24.05.2024</p>
                    <p className="title text-sm font-bold"  onClick={()=> navigate('')}>“Baha urısi”. Ne ushın Qitay elektromobillari júdá arzan?</p>
                    <p className="title text-xs text-zinc-600 font-medium">Qanday etip Kitay kompaniyaları jáhán avtomobil bazarınıń dástúriy jetekshileri - nemislar</p>
                </div>
            </div>
        </div>
    </div>
  )
}
