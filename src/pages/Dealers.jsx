import React from 'react'
import Table from '../components/Table'
import Modal from '../components/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { addDealer, deleteDealer, updateDealer } from '../redux/actions/dealerActions'
import EditModal from '../components/EditModal'

function Dealers() {
  const headers = ['Dealer Name', 'Email', 'Phone', 'Actions']
  const [isModalOpen, setIsModalOpen] = React.useState(false) 
  const [dealersData, setDealersData] = React.useState({name : "" , email: "", phone: ""})
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false)
  const [editDealer, setEditDealer] = React.useState(null)
  
  // useDispatch to dispatch the actions the payload
  const dispatch = useDispatch()

  // used useSelector to access the state from the actions 
  const dealers = useSelector(state => state.dealers.dealers)

  const handleSubmit = (e) =>{
    e.preventDefault()
    
    // here id is assigned so that it will be easy to identify and also will be helpful while deleting
    const newDealer = {id: Date.now(), ...dealersData}
    
    // dipatching the most recent updated data to the addDealer action creator with newQuotation as payload 
    dispatch(addDealer(newDealer))
    setDealersData({name: '', email : '', phone: ''})
    setIsModalOpen(false)
  }

  const handleUpdateDealer = (e) => {
    e.preventDefault()
    dispatch(updateDealer({...editDealer, ...dealersData}))
    setEditDealer(null)
    setDealersData({name: '', email: '', phone: ''})
    setIsEditModalOpen(false)
  }

  const handleDelete =(id) =>{
    // dipatched the id of the current element to be deleted to deleteQuotation action creator
    dispatch(deleteDealer(id))
  }
  
  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4'>Dealers</h2>
      <button 
              onClick={() => setIsModalOpen(true)} 
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      > 
        Add Dealer
      </button>

      <Table headers={headers} data={
        dealers.map((d) =>(
          [
            d.name, d.email, d.phone,
            <div className='flex'> 
              {/* Edit Button */}
              <button
                className='text-blue-500 hover:text-red-500'
                onClick={() =>{
                  setEditDealer(d)
                  setDealersData({name: d.name, email: d.email, phone: d.phone})
                  setIsEditModalOpen(true)
                }}
              >
                Edit 
              </button>

              {/* Delete Button */}
              <button
                onClick={() => handleDelete(d.id)}
                className='text-black opacity-50 hover:text-red-500 hover:opacity-100' 
              >
                {/* Used a trash can svg with hover effects for Delete button */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 120 120"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="w-10 h-10 pl-3"
                    >
                    <path d="M 64.71 90 H 25.291 c -4.693 0 -8.584 -3.67 -8.859 -8.355 l -3.928 -67.088 c -0.048 -0.825 0.246 -1.633 0.812 -2.234 c 0.567 -0.601 1.356 -0.941 2.183 -0.941 h 59.002 c 0.826 0 1.615 0.341 2.183 0.941 c 0.566 0.601 0.86 1.409 0.813 2.234 l -3.928 67.089 C 73.294 86.33 69.403 90 64.71 90 z M 18.679 17.381 l 3.743 63.913 C 22.51 82.812 23.771 84 25.291 84 H 64.71 c 1.52 0 2.779 -1.188 2.868 -2.705 l 3.742 -63.914 H 18.679 z"></path>

                    <path d="M 80.696 17.381 H 9.304 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 71.393 c 1.657 0 3 1.343 3 3 S 82.354 17.381 80.696 17.381 z"></path>

                    <path d="M 58.729 17.381 H 31.271 c -1.657 0 -3 -1.343 -3 -3 V 8.789 C 28.271 3.943 32.214 0 37.061 0 h 15.879 c 4.847 0 8.789 3.943 8.789 8.789 v 5.592 C 61.729 16.038 60.386 17.381 58.729 17.381 z M 34.271 11.381 h 21.457 V 8.789 C 55.729 7.251 54.478 6 52.939 6 H 37.061 c -1.538 0 -2.789 1.251 -2.789 2.789 V 11.381 z"></path>

                    <path d="M 58.33 74.991 c -0.06 0 -0.118 -0.002 -0.179 -0.005 c -1.653 -0.097 -2.916 -1.517 -2.819 -3.171 l 2.474 -42.244 c 0.097 -1.655 1.508 -2.933 3.171 -2.819 c 1.653 0.097 2.916 1.516 2.819 3.17 l -2.474 42.245 C 61.229 73.761 59.906 74.991 58.33 74.991 z"></path>

                    <path d="M 31.669 74.991 c -1.577 0 -2.898 -1.23 -2.992 -2.824 l -2.473 -42.245 c -0.097 -1.654 1.165 -3.073 2.819 -3.17 c 1.646 -0.111 3.073 1.165 3.17 2.819 l 2.473 42.244 c 0.097 1.654 -1.165 3.074 -2.819 3.171 C 31.788 74.989 31.729 74.991 31.669 74.991 z"></path>

                    <path d="M 45 74.991 c -1.657 0 -3 -1.343 -3 -3 V 29.747 c 0 -1.657 1.343 -3 3 -3 c 1.657 0 3 1.343 3 3 v 42.244 C 48 73.648 46.657 74.991 45 74.991 z"></path>
                </svg>
              </button> 
            </div>
          ]
        ))
      } />
      
      <Modal isOpen ={isModalOpen} onClose ={() => setIsModalOpen(false)} title='Add New Dealer'> 
        <form onSubmit = {handleSubmit}>
          <label className='block mb-2'>
            Dealer Name:
            <input 
              type='text'
              className='w-full border p-2 border-gray-300 rounded my-2'
              placeholder='Enter Dealer Name'
              onChange={(e) => setDealersData({...dealersData, name: e.target.value})}
              required
            />
          </label>

          <label>
            Dealer Email:
            <input 
              type='email'
              className='w-full border p-2 border-gray-300 rounded my-2'
              placeholder='Enter Dealer Email'
              onChange={(e) => setDealersData({...dealersData, email: e.target.value})}
              required
            />
          </label>

          <label>
            Dealer Phone:
            <input 
              type='number'
              className='w-full border p-2 border-gray-300 rounded my-2'
              placeholder='Enter Dealer Phone'
              onChange={(e) => setDealersData({...dealersData, phone: e.target.value})}
              required
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

      <EditModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} onSubmit={handleUpdateDealer} title="Update Dealer" >
        <label className='block mb-2'>
          Name:
          <input 
            type='text'
            placeholder='Enter Name'
            value={dealersData.name}
            onChange={(e) => setDealersData({...dealersData, name : e.target.value})}
            className='rounded border w-full p-2 my-2'
            required
          />
        </label>

        <label>
          Email: 
          <input 
            type='text'
            placeholder='Enter email'
            value={dealersData.email}
            onChange={(e) => setDealersData({...dealersData, email: e.target.value})}
            className='w-full rounded p-2 my-2 border'
            required
          />
        </label>
        
        <label>
          Phone:
          <input 
            type='number'
            placeholder='Enter Phone No'
            value={dealersData.phone}
            className='w-full rounded border p-2 my-2 '
            onChange={(e) => setDealersData({...dealersData, phone: e.target.value})}
            required
          />
        </label>

      </EditModal>
    </div>
  )
}

export default Dealers