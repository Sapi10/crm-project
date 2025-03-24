import React from 'react'
import Table from '../components/Table'
import Modal from '../components/Modal'

function Quotations() {
  const  headers = ['Quotation ID', 'Dealer', 'Customer', 'Amount', 'Status']
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const data = [
    ['Q001', 'Dealer One', 'John Doe', 'Rs. 1000', 'Pending'],  
    ['Q002', 'Dealer Two', 'Jane Smith', 'Rs. 2000', 'Approved']
  ]

  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4 '>Quotations</h2> 
      <button
        onClick={() =>setIsModalOpen(true)}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Add Quoations
      </button>

      <Table headers={headers} data={data} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title='Add New Quotation'>
        <form>
          <label className='block mb-2'>
            Quotation ID:
            <input
              type='text'
              className='w-full p-2 border rounded my-2'
              placeholder='Enter Quotation ID'
            />
          </label>

          <label className='block mb-2'>
            Dealer Name:
            <input
              type='text'
              className='w-full p-2 border rounded my-2'
              placeholder='Enter Dealer Name'
            />
          </label>
          
          <label className='block mb-2'>
            Customer Name:
            <input
              type='text'
              className='w-full p-2 border rounded my-2'
              placeholder='Enter Customer Name'
            />
          </label>

          <label className='block mb-2'>
            Amount:
            <input
              type='text'
              className='w-full p-2 border rounded my-2'
              placeholder='Enter Amount'
            />
          </label>

          <label className='block mb-2'>
            Status:
            <input
              type='text'
              className='w-full p-2 border rounded my-2'
              placeholder='Enter Status'
            />
          </label>

          <div className='mt-4 flex justify-end'> 
            <button className='bg-blue-500 text-white px-5 py-2 rounded hover:bg-green-600'>
              Save
            </button>
          </div>
        </form>
      </Modal>

    </div>
  )
}

export default Quotations