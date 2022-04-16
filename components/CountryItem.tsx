import React, { useEffect, useState } from 'react'
import CountryDetail from './CountryDetail'

interface Props {
  name: string
  code: string
  emoji: string
  buscar: string
}

const CountryItem: React.FC<Props> = ({ name, emoji, code, buscar }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(false)
  }, [buscar])

  return (
    <div
      className={`cursor-pointer w-48 flex flex-wrap items-center justify-center transform hover:border-teal-600 relative hover:z-50 ${
        show ? 'z-50' : null
      }`}
    >
      <span className='absolute -top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl hover:scale-150 z-30'>
        {emoji}
      </span>
      <div className='rounded-md py-1 px-3 text-gray-700 font-semibold border text-md shadow-lg cursor-pointer bg-white w-full h-16 flex items-center justify-center text-center z-20 relative'>
        {name}
      </div>
      <div
        className={`${
          show ? '-translate-y-2' : 'h-0 -translate-y-6'
        } bg-white opacity-90 transform w-full mx-2 rounded-md border text-xs p-3 flex flex-col gap-1 text-gray-800 font-semibold relative`}
      >
        {show && <CountryDetail countryCode={code} />}
        <button
          className={`absolute ${
            show ? '-bottom-3' : '-bottom-3'
          } bg-white opacity-90 rounded-b-md left-1/2 transform -translate-x-1/2 z-10`}
          onClick={() => setShow(!show)}
        >
          {show ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-10'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M5 15l7-7 7 7'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-10'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19 9l-7 7-7-7'
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

export default CountryItem
