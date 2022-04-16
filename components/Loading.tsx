import React from 'react'

const Loading = () => {
  return (
    <div className='w-full flex items-center justify-center'>
      <span className='relative w-6 h-6 bg-pink-700 rounded-full flex justify-center items-center opacity-70 my-5'>
        <span className='animate-ping w-6 h-6 bg-pink-700 rounded-full'></span>
      </span>
    </div>
  )
}

export default Loading
