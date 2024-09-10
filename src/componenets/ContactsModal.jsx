import React from 'react';
import { Telegram, Phone, Instagram, Facebook } from '@mui/icons-material';
import { CancelIcon } from '../Utils/icons';


const ContactsModal = ({ open, className, setOpen}) => {
    if (!open) return null;

    return (
      <div className={`absolute bg-white border border-gray-300 rounded-lg shadow-lg px-5 z-10 ${className}`}>
        <div className="flex items-center mb-2">
          <Telegram fontSize="large" className='text-zinc-700 border-[1px] border-zinc-300 rounded-full p-1'/>
          <span className="ml-2 ">
            Telegram: <a href='/' className="text-blue underline">@yourtelegram</a></span>
        </div>
        <div className="flex items-center mb-2">
          <Phone fontSize="large" className='text-zinc-700 border-[1px] border-zinc-300 rounded-full p-1'/>
          <span className="ml-2 ">
            Phone: <a href='/' className="text-blue underline">+123456789</a></span>
        </div>
        <div className="flex items-center mb-2">
          <Instagram fontSize="large" className='text-zinc-700 border-[1px] border-zinc-300 rounded-full p-1'/>
          <span className="ml-2 ">
            Instagram: <a href='/' className="text-blue underline">@yourinstagram</a></span>
        </div>
        <div className="flex items-center">
          <Facebook fontSize="large" className='text-zinc-700 border-[1px] border-zinc-300 rounded-full p-1'/>
          <span className="ml-2 ">
            Facebook: <a href='/' className="text-blue underline">@yourfacebook</a></span>
        </div>
        <CancelIcon 
          onClick={()=> setOpen(false)}
          width={30} 
          height={30} 
          className={"absolute top-2 hover:rotate-90 transition-all right-2 bg-zinc-200 rounded-full p-1"}/>
      </div>
    );
};

export default ContactsModal;
