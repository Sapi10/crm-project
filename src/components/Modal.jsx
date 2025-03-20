import React from 'react'

function Modal({isOpen, onClose, title, children}) {
    if(!isOpen) 
        return null
    
    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <div className='bg-white rounded-lg shadow-lg p-6 w-96'>
                <div className='flex justify-between items-center border-b pb-2 mb-4'>
                    <h2 className='text-lg font-bold'>{title}</h2>
                    <button onClick={onClose} className=' text-gray-500 hover:text-red-500'>
                        X
                    </button>
                </div>
                <div>{children}</div>

                <div className='mt-4 flex justify-end'>
                    <button
                        onClick={onClose}
                        className='bg-gray-300 px-4 py-2 rounded hover:bg-gray-400'
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
  )
}

export default Modal