import React from 'react'
import { useNavigate } from 'react-router-dom'
import PublicsMainCards from '../componenets/PublicsCard'
import Comments from '../componenets/CommentsCard'
import CommentsCard from '../componenets/CommentsCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Publics() {
    const navigate = useNavigate()
    const comments = [
        {
          name: "Michael Gough",
          date: "Feb. 8, 2022",
          text: "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
          avatar: "https://via.placeholder.com/40",
        },
        {
          name: "Jese Leos",
          date: "Feb. 12, 2022",
          text: "Much appreciated! Glad you liked it ☺️",
          avatar: "https://via.placeholder.com/40",
        },
        {
          name: "Bonnie Green",
          date: "Mar. 12, 2022",
          text: "The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.",
          avatar: "https://via.placeholder.com/40",
        },
        {
          name: "Helene Engels",
          date: "Jun. 23, 2022",
          text: "Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.",
          avatar: "https://via.placeholder.com/40",
        }
  ];
  
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
      <div className='text-zinc-900 h-[100vh] px-5 md:px-10 pt-5'>
        <h1 className='pt-5 text-4xl text-blue poppins-bold'>Publikatsiyalar</h1>
        <PublicsMainCards/>
            <div>
              <h1 className='py-5 text-4xl text-blue poppins-bold'>Kommentariyalar</h1>
                <div className="py-5 grid md:grid-cols-2 gap-4">
                    {comments.map(comment => (
                        <CommentsCard comment={comment} className={"card opacity-0 translate-y-24"}/>
                    ))}
                </div>
            </div>
            
    </div>
  )
}
