import React from 'react'
import Modal from './Modal'

function EditModal({isOpen, onClose, title, onSubmit, children}) {
  return (
      <Modal isOpen={isOpen} onClose={onClose} title={title}> 
        <form onSubmit={onSubmit}>
            {children}
            <div className='mt-4 flex justify-end'>
                <button 
                    type='submit'
                    className='bg-blue-500 text-white px-2 py-2 rounded hover:bg-green-600'
                >
                    Update
                </button>
            </div>
        </form>
       </Modal>
  )
}

export default EditModal