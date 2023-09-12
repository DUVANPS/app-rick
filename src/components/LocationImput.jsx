import React from 'react'

const LocationImput = ( {location} ) => {
return (
    <article className='location'>
        <h2 className='location__name'>
            {location?.name}
        </h2>
        <ul className='location__list'>
            <li className='list'><span className='list__span'>Type:</span><span> {location?.type} </span></li>
            <li className='list'><span className='list__span'>Dimension:</span><span> {location?.dimension || 'unknown'} </span></li>
            <li className='list'><span className='list__span'>Population:</span><span> {location?.residents.length} </span></li>
        </ul>
    </article>
)
}

export default LocationImput