interface Props {
  buscar: string
  setBuscar: Function
}

const SearchBar: React.FC<Props> = ({ buscar, setBuscar }) => {
  return (
    <>
      <form
        className='search flex justify-center bg-white items-center shadow-lg border border-opacity-75 border-gray-300 rounded-lg px-6 py-3 my-5'
        onSubmit={e => {
          e.preventDefault()
          setBuscar(buscar)
        }}
      >
        <button aria-label='search button' type='submit' className='mr-5'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 transform hover:scale-110 hover:animate-pulse'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
        <input
          type='text'
          className='bg-transparent focus:outline-none uppercase text-gray-800 font-semibold'
          onChange={e => {
            setBuscar(e.target.value)
          }}
        />
      </form>
    </>
  )
}

export default SearchBar
