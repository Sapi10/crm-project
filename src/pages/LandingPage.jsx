import React from "react";

const roles = [
    {role : 'admin', title: 'Admin', description: 'Manage the CRM System'},
    {role : 'manager', title: 'Manager', description: 'Manage orders and leads'},
    {role : 'customer', title : 'Customer', description: 'Track you orders'}    
]

export default function LandingPage() {
    const [expanded, setExpadened] = React.useState(null)
    
    const handleCardClick = (role) => {
        // Toggle the expansion: if the clicked card is already expanded, collapse it. Otherwise, expand it.
        setExpadened(expanded === role ? null : role)
    }
    
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-4 flex flex-col items-center justify-center">
            <div className="text-center mb-10">
                <h1 className="text-white text-4xl font-bold mb-4">Welcome to Our CRM</h1>
            </div>
            <div className="flex flex-wrap w-50 justify-center gap-6" style={{ minHeight: '250px'}}>
                {
                    roles.map((item) =>(
                        <div
                            key={item.role}
                            onClick={() => handleCardClick(item.role)}
                            className={`cursor-pointer bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 p-4 w-64 overflow-hidden ${
                                expanded === item.role ? 'h-auto' : 'h-40'
                            }`}
                        >
                            <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                            <p className="text-gray-600">{item.description}</p>
                            {
                                expanded === item.role && (
                                    <div className="mt-4">
                                        <form>
                                            <input 
                                                type="email"
                                                placeholder="Email"
                                                className="w-full p-2 border rounded mb-2"
                                                onClick={(e) => e.stopPropagation()}
                                                required
                                            />
                                            <input 
                                                type="password"
                                                placeholder="Password"
                                                className="w-full p-2 border rounded mb-2"
                                                onClick={(e) => e.stopPropagation()}
                                                required
                                            />
                                            <button
                                                type="submit"
                                                className="w-full bg-blue-500 text-white p-2 rounded"
                                            >
                                                Login
                                            </button>
                                        </form>
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
            </div>

        </div>
    )    

}