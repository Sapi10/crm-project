import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')

    const handleSubmit = (e) =>{
        e.preventDefault ();

        if(email === 'admin@test.com' && password === 'password'){
            navigate('/dashboard')
        }
        else{
            setError('Invalid email or password')
        }
    }
  
    return (
        <div className='min-h-screen flex flex-col justify-center items-center bg-blue-500  overflow-hidden'>
                <div className="flex justify-center mb-10 items-center h-40 ">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" w-36 h-36 mx-auto text-white "
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    >
                    {/* <path d="M72.975 58.994H31.855c-1.539 0-2.897-1.005-3.347-2.477L15.199 13.006H3.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5h14.289c1.539 0 2.897 1.005 3.347 2.476l13.309 43.512h36.204l10.585-25.191h-6.021c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5H86.5c1.172 0 2.267.587 2.915 1.563s.766 2.212.312 3.293L76.201 56.85c-.546 1.299-1.817 2.144-3.226 2.144z" /> */}
                    <path
                        d="M72.975 58.994H31.855c-1.539 0-2.897-1.005-3.347-2.477L15.199 13.006H3.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5h14.289c1.539 0 2.897 1.005 3.347 2.476l13.309 43.512h36.204l10.585-25.191h-6.021c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5H86.5c1.172 0 2.267.587 2.915 1.563s.766 2.212.312 3.293L76.201 56.85c-.546 1.299-1.817 2.144-3.226 2.144z"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="currentcolor"
                    />
                    <circle 
                        cx="28.88" 
                        cy="74.33" 
                        r="6.16"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="currentColor"
                    />
                    <circle 
                        cx="74.59" 
                        cy="74.33" 
                        r="6.16"
                        stroke="currentColor"
                        strokeWidth ="1"
                        fill="currentColor" 
                    />
                    
                    <path d="M63.653 23.359c-1.367 1.367-3.582 1.367-4.949 0L53.3 17.956v17.3c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5v-17.3l-5.404 5.404c-1.366 1.366-3.583 1.367-4.95 0-1.367-1.367-1.367-3.583 0-4.95L47.324 7.033c.163-.163.343-.309.535-.438.084-.056.176-.095.264-.143.112-.061.22-.129.338-.178.115-.047.234-.075.353-.109.1-.03.197-.068.301-.089A1.969 1.969 0 0149.8 6.006c.23 0 .459.024.685.069.104.021.2.059.301.089.118.035.238.062.353.109.119.049.227.117.338.178.088.048.18.087.264.143.193.129.372.274.535.438l11.824 11.377c1.368 1.367 1.368 3.583.001 4.949z" />
                    </svg>
                </div>
                {
                    error && <div className='mb-4 text-center text-red-500'>
                        {error}
                    </div>
                }

                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        {/* <label
                            htmlFor='email'
                            className='block text-gray-700 text-sm font-bold mb-2'
                        >
                            Email:
                        </label> */}
                        <input 
                            type='email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='EMAIL'
                            required
                            className='shadow placeholder-white appearance-none border-2 bg-blue-500 rounded w-full my-2 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline'
                        />

                        {/* <label
                            className='block text-gray-700 text-sm font-bold mb-2 my-2'
                        >
                            Password:
                        </label> */}
                        <input
                            type='password'
                            id='password'
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            placeholder='PASSWORD'
                            required
                            className='shadow placeholder-white placeholder:font-serif appearance-none border-2 bg-blue-500 border-white rounded w-full my-5 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline'
                        />

                    </div>
                    <div className='flex items-center justify-between'>
                        <button 
                            type='submit'
                            className='bg-white w-full hover:bg-blue-700 hover:text-white text-blue-500 font-bold py-4 mt-5 uppercase font-sans tracking-widest px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-600 '
                            >
                            Login
                        </button>

                    </div>
                </form>
        </div>
    )
}

export default Login