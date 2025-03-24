import React from 'react'
import Table from '../components/Table'
import Modal from '../components/Modal'

function Dealers() {
  const headers = ['Dealer Name', 'Email', 'Phone']
  const [isModalOpen, setIsModalOpen] = React.useState(false) 

  const data = [
    ['Dealer One', 'dealer1@example.com', '1234567890'],
    ['Dealer Two', 'dealer2@example.com', '0987654321']
  ]
  
  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4'>Dealers</h2>
      <button 
              onClick={() => setIsModalOpen(true)} 
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      > 
        Add Dealer
      </button>

      <Table headers={headers} data={data} />
      
      <Modal isOpen ={isModalOpen} onClose ={() => setIsModalOpen(false)} title='Add New Dealer'> 
        <form>
          <label className='block mb-2'>
            Dealer Name:
            <input 
              type='text'
              className='w-full border p-2 border-gray-300 rounded my-2'
              placeholder='Enter Dealer Name'
            />
          </label>

          <label>
            Dealer Email:
            <input 
              type='email'
              className='w-full border p-2 border-gray-300 rounded my-2'
              placeholder='Enter Dealer Email'
            />
          </label>

          <label>
            Dealer Phone:
            <input 
              type='number'
              className='w-full border p-2 border-gray-300 rounded my-2'
              placeholder='Enter Dealer Phone'
            />
          </label>
          <div className='mt-4 flex justify-end'>
            <button 
              type='submit'
              className='bg-blue-500 text-white px-5 py-2 rounded mt-4 hover:bg-green-600' 
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default Dealers