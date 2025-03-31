import React from 'react'
import Table from '../components/Table'
import Modal from '../components/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { addQuotation, deleteQuotation, updateQuotation } from '../redux/actions/quotationActions'
import EditModal from '../components/EditModal'

function Quotations() {
  const  headers = ['Quotation ID', 'Dealer', 'Customer', 'Amount', 'Status', 'Action']
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [quotationsData, setQuotationsData] = React.useState({quotationId: "", dealerName: "", customerName: "", amount: "", status: ""})
  
  const [editQuotation, setEditQuotation] = React.useState(null)
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false)

  // used useSelector to access the state from the actions 
  const quotations = useSelector(state => state.quotations.quotations)
  
  // useDispatch to dispatch the actions the payload
  const dispatch = useDispatch()


  const handleSubmit = (e) =>{
    e.preventDefault()

    // here id is assigned so that it will be easy to identify and also will be helpful while deleting
    const newQuotation = {id : Date.now(), ...quotationsData}

    // dipatching the most recent updated data to the addQuotation action creator with newQuotation as payload
    dispatch(addQuotation(newQuotation))
    setQuotationsData({
      quotationId: '',
      dealerName: '',
      customerName: '',
      amount: '',
      status: '' 
    })
    setIsModalOpen(false)
  }

  const handleUpdateQuotation = (e) => {
    e.preventDefault()

    dispatch(updateQuotation({...editQuotation, ...quotationsData}))
    setEditQuotation(null)
    setQuotationsData({
      quotationId: '',
      dealerName: '',
      customerName: '',
      amount: '',
      status: ''
    })
    setIsEditModalOpen(false)
  }

  const handleDelete = (id) =>{
    // dipatched the id of the current element to be deleted to deleteQuotation action creator
    dispatch(deleteQuotation(id))
  }
  


  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4 '>Quotations</h2> 
      <button
        onClick={() =>setIsModalOpen(true)}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Add Quotations
      </button>

      <Table headers={headers} data={
        quotations.map((q) =>(
          [
           q.quotationId, q.dealerName, q.customerName, q.amount, q.status,
           <div className='flex'>
            {/* Edit Button */}
              <button
                className='text-blue-500 hover:text-red-500'
                onClick={() =>{
                  setEditQuotation(q)
                  setQuotationsData({
                    quotationId: q.quotationId, 
                    dealerName: q.dealerName, 
                    customerName : q.customerName,
                    amount : q.amount,
                    status : q.status
                  })
                  setIsEditModalOpen(true)
                }}
              >
                Edit
              </button>

              {/* Delete Button */}
              <button 
                  className='opacity-50 text-black hover:text-red-500 hover:opacity-100'
                  onClick={() => handleDelete(q.id)}
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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title='Add New Quotation'>
        <form onSubmit={handleSubmit}>
          <label className='block mb-2'>
            Quotation ID:
            <input
              type='text'
              className='w-full p-2 border rounded my-2'
              placeholder='Enter Quotation ID'
              onChange={(e) => setQuotationsData({...quotationsData, quotationId : e.target.value})}
              required
            />
          </label>

          <label className='block mb-2'>
            Dealer Name:
            <input
              type='text'
              className='w-full p-2 border rounded my-2'
              placeholder='Enter Dealer Name'
              onChange={(e) => setQuotationsData({...quotationsData, dealerName: e.target.value})}
              required
            />
          </label>
          
          <label className='block mb-2'>
            Customer Name:
            <input
              type='text'
              className='w-full p-2 border rounded my-2'
              placeholder='Enter Customer Name'
              onChange={(e) => setQuotationsData({...quotationsData, customerName: e.target.value})}
              required
            />
          </label>

          <label className='block mb-2'>
            Amount:
            <input
              type='text'
              className='w-full p-2 border rounded my-2'
              placeholder='Enter Amount'
              onChange={(e) => setQuotationsData({...quotationsData, amount: e.target.value})}
              required
            />
          </label>

          <label className='block mb-2'>
            Status:
            <input
              type='text'
              className='w-full p-2 border rounded my-2'
              placeholder='Enter Status'
              onChange={(e) => setQuotationsData({...quotationsData, status: e.target.value})}
              required
            />
          </label>

          <div className='mt-4 flex justify-end'> 
            <button className='bg-blue-500 text-white px-5 py-2 rounded hover:bg-green-600'>
              Save
            </button>
          </div>
        </form>
      </Modal>

      <EditModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} onSubmit={handleUpdateQuotation} title="Update Quotation">
        <label className='block mb-2'>
          Quotation Id:
          <input 
            type='text'
            placeholder='Enter ID'
            value={quotationsData.quotationId}
            onChange={(e) => setQuotationsData({...quotationsData, quotationId : e.target.value})}
            className='rounded border p-2 my-2 w-full'
            required
          />
        </label>
        
        <label>
          Dealer Name: 
          <input 
            type='text'
            placeholder='Enter Dealer Name'
            value={quotationsData.dealerName}
            onChange={(e) => setQuotationsData({...quotationsData, dealerName : e.target.value})}
            className='rounded w-full border p-2 my-2'
            required
          />
        </label>

        <label>
          Customer Name:
          <input 
            type='text'
            placeholder='Enter Customer Name'
            value={quotationsData.customerName}
            onChange={(e) => setQuotationsData({...quotationsData, customerName : e.target.value})}
            className='rounded border w-full p-2 my-2'
            required
          />
        </label>

        <label>
          Amount:
          <input 
            type='text'
            placeholder='Enter Amount'
            value={quotationsData.amount}
            onChange={(e) => setQuotationsData({...quotationsData, amount : e.target.value})}
            className='rounded border p-2 my-2 w-full'
            required
          />
        </label>

        <label>
          Status:
          <input 
            type='text'
            placeholder='Enter Status'
            value={quotationsData.status}
            onChange={(e) => setQuotationsData({...quotationsData, status: e.target.value})}
            className='w-full rounded border p-2 my-2'
            required
          />
        </label>
      </EditModal>

    </div>
  )
}

export default Quotations