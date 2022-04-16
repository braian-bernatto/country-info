import React from 'react'
import { gql, useQuery } from '@apollo/client'
import Loading from './Loading'

interface Props {
  countryCode: string
}

interface Country {
  name: string
  code: string
  capital: string
  emoji: string
  currency: string
  phone: number
  languages: [
    {
      name: string
    }
  ]
  continent: {
    name: string
    code: string
  }
}

interface CountryData {
  country: Country
}

const COUNTRY_DETAIL = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      name
      code
      capital
      emoji
      currency
      phone
      languages {
        name
      }
      continent {
        name
        code
      }
    }
  }
`

const CountryDetail: React.FC<Props> = ({ countryCode }) => {
  const { data, loading, error } = useQuery<CountryData>(COUNTRY_DETAIL, {
    variables: { code: countryCode }
  })

  if (loading || error) {
    return <div>{error ? error.message : <Loading />}</div>
  }

  const { country } = data!

  return (
    <div className='flex flex-col justify-between gap-4 mt-2 font-semibold'>
      <p className='bg-gray-200 px-2 py-1 rounded-md'>
        <span className='font-normal'>Code:</span> {country.code}
      </p>
      <p className='bg-gray-200 px-2 py-1 rounded-md'>
        <span className='font-normal'>Capital:</span> {country.capital}
      </p>
      <ul className='bg-gray-200 px-2 py-1 rounded-md flex flex-wrap justify-between items-center gap-1'>
        <span className='font-normal'>Currency:</span>
        {country.currency.split(',').map((item, index) => (
          <li key={index} className='bg-white rounded-full px-2 shadow'>
            {item}
          </li>
        ))}
      </ul>
      <ul className='bg-gray-200 px-2 py-1 rounded-md flex flex-wrap justify-between items-center gap-1'>
        <span className='font-normal'>Languages:</span>{' '}
        {country.languages.map((language, index) => (
          <li key={index} className='bg-white rounded-full px-2 shadow'>
            {language.name}
          </li>
        ))}
      </ul>
      <p className='bg-gray-200 px-2 py-1 rounded-md'>
        <span className='font-normal'>Phone code:</span> +{country.phone}
      </p>

      <p className='bg-gray-200 px-2 py-1 rounded-md'>
        <span className='font-normal'>Continent:</span> {country.continent.name}
      </p>
    </div>
  )
}

export default CountryDetail
