import { Card } from '@mui/material'
import React from 'react'
import CardBox from '../componenets/Card'

export default function Cards() {
    const cards =  Array(4).fill(0)

  return (
    <div className='text-zinc-800 h-[50vh] container-box bg-white'>
        <h1 className='text-3xl poppins-bold text-blue py-10'>Nátiyjeler</h1>
        <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
            {cards.map((card, index) => (
                <Card key={index} variant="outlined">
                    <CardBox/>
               </Card> 
            ))}
        </div>
    </div>
  )
}
