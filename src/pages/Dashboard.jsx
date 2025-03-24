import React from 'react'
import Card from '../components/Card'

function Dashboard() {
  const metrics = [
    {title : "Customers" , value : 150},
    {title : "Dealers" , value : 50},
    {title : "Pending Quotations" , value : 20}
  ]
 
  return (
    <div className='p-4'>

      <h1 className='text-2xl mb-4 font-bold'>Dashboard</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {
        metrics.map((metric, index) =>(
          <Card title={metric.title} value={metric.value} index={index} />
        ))
      }
      </div>
    </div>
  )
}

export default Dashboard