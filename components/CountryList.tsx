import React, { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import CountryItem from './CountryItem'
import Loading from './Loading'

interface Country {
  name: string
  code: string
  emoji: string
}

interface CountryData {
  countries: Country[]
}

interface Props {
  buscar: string
}

const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
      emoji
    }
  }
`

const CountryList: React.FC<Props> = ({ buscar }) => {
  const [countriesFiltered, setCountriesFiltered] = useState<Country[]>([])

  const { data, loading, error } = useQuery<CountryData>(LIST_COUNTRIES)

  useEffect(() => {
    if (buscar !== '') {
      const countriesFilter = countries.filter(country =>
        country.name.toLowerCase().includes(buscar.toLowerCase())
      )
      setCountriesFiltered(countriesFilter)
    } else {
      setCountriesFiltered(countries || [])
    }
  }, [buscar, data])

  if (loading || error) {
    return <div>{error ? error.message : <Loading />}</div>
  }

  const { countries } = data!

  return (
    <ul className='flex flex-wrap items-start justify-between gap-9 mx-10 p-5 bg-gray-300 rounded-xl shadow-lg'>
      {countriesFiltered.map((country, i) => (
        <li key={i}>
          <CountryItem {...country} buscar={buscar} />
        </li>
      ))}
    </ul>
  )
}

export default CountryList
