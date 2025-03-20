import React from 'react'
import Card from '../components/Card'

function Dashboard() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <Card title="Total Customers" value="150" />
        <Card title="Total Dealers" value="50"/>
        <Card title="Pending Quotations" value="20" />
    </div>
  )
}

export default Dashboard