import React from 'react'
import Card from '../components/Card'

function Reports() {

  const data = [
    {title : 'Total Sales', value: 'Rs. 10000'},
    {title : 'Total Customers', value : 150},
    {title : 'Total Dealers', value : 50},
  ]
  return (  
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4'>Reports</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'> 
          {
            data.map((item, index) =>(
              <Card title={item.title} value={item.value} index={index}  /> 
            ))
          }
        </div>
    </div>
  )
}

export default Reports
