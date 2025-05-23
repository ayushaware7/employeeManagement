import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import employeeServiceInstance from '../services/EmployeeService';
import Employee from './Employee';

export const EmployeeList = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true)
  const [employees, setEmployees] = useState(null)

  useEffect(() => {
    const fetchData = async ()=> {
      setLoading(true)
      try{
        const response = await employeeServiceInstance.getEmployees();
        setEmployees(response.data)
      }catch(error){
        console.log(error)
      }
      setLoading(false)
    }
    fetchData()
  }
  , [])

  const deleteEmployee = (e,id) =>{
    e.preventDefault()
    employeeServiceInstance.deleteEmployee(id).then((res)=>{
      if(employees){
        setEmployees((prevElement)=>{
          return prevElement.filter((employee) => employee.id !== id) 
        })
      }
    })
  }
  

  return (
    <div className='container mx-auto my-8'>
      <div className='h-12'>
        <button 
        onClick={()=> navigate("/addEmployee")}
        className='rounded bg-blue-500 text-white px-6 py-2 font-semibold'>Add Employee</button>
      </div>
      <div className='flex shadow border-b'>
        <table className='min-w-full'>
          <thead className='bg-blue-50'>
            <tr>
              <th className='text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6'>
                First Name
              </th>
              <th className='text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6'>
                Last Name
              </th>
              <th className='text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6'>
                Email Id
              </th>
              <th className='text-center font-medium text-gray-600 uppercase tracking-wider py-3 px-6'>
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody >
              {employees.map((employee)=> (
                <Employee 
                  employee={employee} 
                  deleteEmployee={deleteEmployee} 
                  key={employee.id}></Employee>
              ))}
            </tbody>
          )}
          
        </table>
      </div>
    </div>
  )
}

export default EmployeeList 