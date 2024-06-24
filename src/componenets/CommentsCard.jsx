import React from 'react';

const CommentsCard = ({comment, className}) => {

  return (
    <div key={comment.name} className={`bg-white border-zinc-200 border-[1px] rounded-lg p-3 grid grid-rows-2 ${className}`}>
        <div className="flex items-center mb-4 row-1 row-end-2">
            <img src={comment.avatar} alt={`${comment.name}'s avatar`} className="w-10 h-10 rounded-full mr-4" />
            <div>
                <h3 className="text-lg font-semibold">{comment.name}</h3>
                <p className="text-sm text-gray-600">{comment.date}</p>
            </div>
        </div>
        <div className="flex flex-col justify-between gap-2 row-2 row-end-3">
            <p className="text-gray-700">{comment.text}</p>
            <p className="text-gray-700"><box-icon name='reply' color='#211e1e' ></box-icon>Reply</p>
        </div>
    </div>
  );
};

export default CommentsCard;
