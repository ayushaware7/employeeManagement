import React from 'react'
import { useNavigate } from 'react-router'

export const Employee = ({employee , deleteEmployee}) => {
  
  const navigate = useNavigate()

  const editEmployee = (e,id) => {
    e.preventDefault()
    navigate(`/editEmployee/${id}`)
  }
  
  return (
    <tr key={employee.id}>
                <td className='text-left px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-500'>{employee.firstName}</div>
                </td>
                <td className='text-left px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-500'>{employee.lastName}</div>
                </td>
                <td className='text-left px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-500'>{employee.emailId}</div>
                </td>
                <td className='text-left px-6 py-4 whitespace-nowrap '>
                  <button  
                  onClick={(e) => editEmployee(e,employee.id)}
                  className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>
                    EDIT
                  </button>
                  <button
                    onClick = {(e,id)=> deleteEmployee(e, employee.id)} 
                    className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>
                    DELETE
                  </button>
                </td>
              </tr>
  )
}

export default Employee;
