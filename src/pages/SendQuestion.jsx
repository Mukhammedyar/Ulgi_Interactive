import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SendQuestion() {
    const [values, setValues] = useState({ email: "", question: "" })
    const navigate = useNavigate()
    
    const clickHandler = (e) => {
        e.preventDefault()
        if (values.email !== "" | values.question !== "") {
            navigate('/')
        }
    }

  return (
      <div className='w-full h-[90vh] bg-white flex-center'>
          <form className="w-1/2 md:w-1/3 border-[1px] border-zinc-300 p-4">
          <p className="text-3xl text-blue text-center poppins-medium my-2">Soraw jollaw</p>    
            <label 
                for="email" 
                className="block mb-2 text-md font-medium text-blue dark:text-white">Your email</label>
            <input
                onChange={(e)=> setValues({...values, email: e.target.value})} 
                type="email" 
                id="email" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com" />
            <label 
                for="message" 
                className="block mb-2 text-md mt-4 font-medium text-blue dark:text-white">Your message</label>
            <textarea
                onChange={(e)=> setValues({...values, question: e.target.value})} 
                id="message" 
                rows="4" 
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Leave a comment..."></textarea>
            
            <button onClick={(e) => clickHandler(e)} className='bg-blue py-2 w-full px-2 rounded-xl my-2 mt-10 text-white'>
                {"Sorawdi jiberiw"}
            </button>
        </form>
    </div>
  )
}
