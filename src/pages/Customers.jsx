import React from 'react'
import Table from '../components/Table'
import Modal from '../components/Modal'

function Customers() {
  const headers = ["Name", "Email", "Phone"]

  const [isModalOpen, setIsModalOpen] = React.useState(false)
  // this state will help in opening and closing the modal

  const data = [
    ['John Doe', 'john@example.com', '123-456-7890' ],
    ['Jane Smith', 'jane@example.com', '098-765-4321' ]
]
    // a dummy data which we have passed to the table component
    // this data will be displayed in the table
    
    return (
        <div className='p-4'>
            <h2 className='text-2xl font-bold mb-4'>Customers</h2>
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
                            className='w-full p-2 border rounded my-2'
                            placeholder='Enter Customer Name'
                        /> 
                    </label>
                    <label className='block mb-2'> 
                        Email:
                        <input 
                            type='email' 
                            className='w-full p-2 border rounded my-2'
                            placeholder='Enter Customer Email'
                        /> 
                    </label>
                    <label className='block mb-2'> 
                        Phone:
                        <input 
                            type='number' 
                            className='w-full p-2 border rounded my-2'
                            placeholder='Enter Customer Phone No.'
                        /> 
                    </label>

                    <div className='mt-4 flex justify-end'>
                        <button 
                            type='submit' 
                            className='bg-blue-500 text-white px-5 py-2 rounded hover:bg-green-600'
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