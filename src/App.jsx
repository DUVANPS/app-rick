import { useEffect, useRef, useState } from 'react'

import './App.css'
import './index.css'
import useFetch from './hooks/useFetch'
import LocationImput from './components/LocationImput'
import getRamdomNumber from './utils/getRamdomNumber'
import ResidentsCard from './components/ResidentsCard'

function App() {
const [inputValue, setInputValue] = useState(getRamdomNumber(126))


  const url =` https://rickandmortyapi.com/api/location/${inputValue || 'Err' }`

  const [location, getLocation, hasError] = useFetch(url)

  useEffect(() => {
    getLocation()

  }, [inputValue] )
  const inputSearch = useRef()

  const handleSubmit = e =>{
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim()
)
  }
  


  return (
    <div>
      <div className='bg__img'>
      <h1 className='title'>Rick And Morty App</h1>
      <form className='central__form' onSubmit={handleSubmit}>
        <input ref={inputSearch} type="text" />
        <button>
          Search
        </button>
      </form>
      </div>
    { 
    hasError
  ? <h2>😈Err 125</h2>
  : 
      (<>
  <LocationImput
      location={location}

      />
      
      <div className='order'>

        {


      location?.residents.map(url => (
        <ResidentsCard
        key={url}
        url={url}
        />
      ) )
        }
      </div>

      </>)
      }
    
    </div>
  )
}

export default App
