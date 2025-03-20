import React from 'react'

function Card({title, value}) {
  return (
    <div className='bg-white rounded-lg shadow p-6'>
        <h3 className='text-lg font-semibold text-gray-700'>{title}</h3>
        <p className='text-3xl mt-4 font-bold text-gray-900'>{value}</p>
    </div>
  )
}

export default Card