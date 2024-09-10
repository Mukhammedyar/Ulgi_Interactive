import { useState } from "react";
import { SearchIcon } from "../Utils/icons";
import LiteratureCard from "../componenets/LiteratureCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { books } from "../Utils";

export default function Literatures() {
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
    <div className="h-[100vh] px-4 md:px-10 lg:px-16 text-zinc-800 bg-white max-w-[1700px]">
      <div className="flex lg:items-center justify-between w-full flex-col lg:flex-row items-start">
        <header className="text-3xl text-blue md:text-3xl py-5 poppins-medium">Ádebiyatlar</header> 
        <div className="flex flex-col md:flex-row w-full py-5 items-center gap-5">
          <div className=" flex-center gap-3 w-full ">
            {categories.map((category, index) => (
                <div className={`categories-component flex-center `}>
                    <p className='w-full text-center text-sm sm:text-md md:text-lg'>{category}</p>
                </div>
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
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {books.map((book, index) => (
          <LiteratureCard className={'card opacity-0 h-[400px] translate-y-24 flex flex-col justify-between'} name={book.name} description={book.description} imgUrl={book.imgUrl} file={book.file} />
        ))}
      </div>
    </div>
  )
}


