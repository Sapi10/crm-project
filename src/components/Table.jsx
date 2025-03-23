import React from 'react'

function Table({headers, data}) {
    // this is a reusable component which will be used to display data in a table format
    // it accepts two props: headers and data
    // can be used to render data of both Dealers and Customers.
  return (
    <div className='overflow-x-auto my-2'>
        <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
                <tr>
                    {headers.map((header,index) =>(
                            <th 
                                key={index}
                                scope='col'
                                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                            >    
                                {header}
                            </th>
                    ))}
                </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                                    {cell}
                                </td>
                             ))}
                        </tr>
                    ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table