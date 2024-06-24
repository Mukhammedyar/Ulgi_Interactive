import { useState } from "react";
import { SearchIcon } from "../Utils/icons";
import LiteratureCard from "../componenets/LiteratureCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Literatures() {
  const length = Array(5).fill(0);
  const [value, setValue] = useState('')
  const categories = ["Ilimiy materiallar", "Sózlikler", "Maqalalar", "Sabaqlıqlar"]
  
  useGSAP(() => {
    gsap.to('.card', {
      opacity: 1,
      translateY: 0,
      delay: 0.5,
      duration: 0.5, 
      stagger: 0.1,
    })
  }, [])


  return (
    <div className="h-[100vh] px-10 md:px-16 text-zinc-800 bg-white">
      <div className="flex lg:items-center justify-between w-full flex-col lg:flex-row items-start">
        <header className="text-2xl text-blue md:text-3xl py-5 poppins-medium">Ádebiyatlar</header> 
        <div className="flex flex-col md:flex-row w-full py-5 items-center gap-5">
          <div className="flex-center w-full gap-3">
            {categories.map((category, index) => (
              <div className={`categories-component flex-center ${index === 0 && "min-w-[150px]"}`}>{category}</div>
            ))}
          </div>
          <form action="Post" className='items-center justify-end gap-2 w-full md:w-1/2 flex'>
            <input
                className='search-input w-full' 
                type="text" 
                placeholder={"So'zlerdi izlew..."} 
                value={value}  
                    onChange={(e) => setValue(e.target.value)} />
                <button className="search-button border-[1px] border-zinc-300" onClick={(e) => {
                      e.preventDefault()  
                  }}>
                  <SearchIcon width={30} height={30} className={""}/> 
                      
                </button>
            </form>
          </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 ">
        {length.map((_, index) => (
          <LiteratureCard className={'card opacity-0 translate-y-24'}/>
        ))}
      </div>
    </div>
  )
}
