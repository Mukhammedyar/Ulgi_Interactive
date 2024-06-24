import React from 'react';
import { Telegram, Phone, Instagram, Facebook } from '@mui/icons-material';


const ContactsModal = ({ open }) => {
    if (!open) return null;

    return (
      <div className="absolute bg-white border border-gray-300 rounded-lg shadow-lg p-4 mt-2 top-16 right-10 z-10">
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
      </div>
    );
};

export default ContactsModal;
