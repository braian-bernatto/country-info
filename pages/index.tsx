import type { NextPage } from 'next'
import React, { useState } from 'react'
import Head from 'next/head'
import CountryList from '../components/CountryList'
import SearchBar from '../components/SearchBar'

const Home: NextPage = () => {
  const [buscar, setBuscar] = useState('')

  return (
    <div className='flex flex-col items-center min-h-screen bg-gray-100'>
      <Head>
        <title>Country Info</title>
        <meta
          name='description'
          content='Get info about your favorite country'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container mx-auto flex flex-col items-center justify-center'>
        <h1 className='text-xl font-bold text-pink-500 pt-5'>
          Countries List!
        </h1>
        <SearchBar buscar={buscar} setBuscar={setBuscar} />
        <CountryList buscar={buscar} />
      </main>

      <footer className='mt-10 text-pink-500 font-bold text-xs'>
        &copy; {new Date().getFullYear()} - Bernatto
      </footer>
    </div>
  )
}

export default Home
