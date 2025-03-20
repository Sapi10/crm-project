import React from 'react'
import Table from '../components/Table'
import Modal from '../components/Modal'

function Customers() {
  const headers = ["Name", "Email", "Phone"]

  const [isModalOpen, setIsModalOpen] = React.useState(false)
  

  const data = [
    ['John Doe', 'john@example.com', '123-456-7890' ],
    ['Jane Smith', 'jane@example.com', '098-765-4321' ]
]
    return (
        <div className='p-4'>
            <h2 className='text-xl font-bold mb-4'>Customers</h2>
            <button 
                onClick={() => setIsModalOpen(true)}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
                Add Customer
            </button>

            <Table headers={headers} data={data} />

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title='Add New Customer'>
                <form>
                    <label className='block mb-2'> 
                        Name:
                        <input 
                            type='text' 
                            className='w-full p-2 border rounded mt-1'
                            placeholder='Enter Customer Name'
                        /> 
                    </label>
                    <label className='block mb-2'> 
                        Email:
                        <input 
                            type='email' 
                            className='w-full p-2 border rounded mt-1'
                            placeholder='Enter Customer Email'
                        /> 
                    </label>
                    <label className='block mb-2'> 
                        Phone:
                        <input 
                            type='number' 
                            className='w-full p-2 border rounded mt-1'
                            placeholder='Enter Customer Phone No.'
                        /> 
                    </label>

                    <div className='mt-4 flex justify-end'>
                        <button 
                            type='submit' 
                            className='bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600'
                        >
                            Save
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default Customers