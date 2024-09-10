import { Card } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardBox from '../componenets/Card'

export default function Cards({value}) {
  const cards = Array(1).fill(0)
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')

  useEffect(() => {
    if (value) {
      switch (value) {
        case 'arnawli':
          setDescription('Qanday da zat yamasa háreket ushın qollanıladıgen');
          setType('kelbetlik');
          break;
        case 'apiwayi':
          setDescription('Qanday da zat yamasa háreket ushın qollanıladıgen');
          setType('kelbetlik');
          break;
        case 'yad':
          setDescription('adam yadi yamasa texnika hám atlıq mániste isletiledi');
          setType('atlıq');
          break;
        case 'mayisqaq': 
          setDescription('Qanday da zat yamasa háreket ushın qollanıladıgen');
          setType('ráwish');
          break;
        case 'hareket': 
          setDescription('Qanday da zat yamasa háreket ushın qollanıladıgen');
          setType('atlıq');
          break;
        default: 
          setDescription('Qanday da zat yamasa háreket ushın qollanıladı');
          setType('atlıq');
      }
    }
  }, [value]);

  


  return (
    <div className={`text-zinc-800 h-[60vh] container-box bg-white ${value ? "" : "hidden"}`}>
        <h1 className='text-3xl poppins-bold text-blue py-10'>Nátiyjeler</h1>
        <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5'>
            {cards.map((card, index) => (
                <Card key={index} variant="outlined">
                <CardBox value={value} description={description} type={type} />
               </Card> 
            ))}
        </div>
    </div>
  )
}
