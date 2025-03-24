import React from 'react'

function Settings() {
  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4'>Settings</h2>
      <form>
          <label className='flex flex-col my-2'>
            Email:
            <input 
              type='email'
              placeholder='Enter Email'
              className='w-96 p-2 border rounded my-2'
            />
          </label>

          <label className='flex flex-col my-2'>
            Username:
            <input 
              type='text'
              placeholder='Enter Username'
              className='w-96 p-2 border rounded my-2'
            />
          </label>

          <button 
            type='submit'
            className='bg-blue-500 text-white px-5 py-2 rounded mt-4 hover:bg-green-500'
          >
            Save Changes
          </button>
      </form>
    </div>  
  )
}

export default Settings