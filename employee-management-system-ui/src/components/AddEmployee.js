import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import { useNavigate } from 'react-router'
const AddEmployee = () => {
  

    
    const [employee, setEmployee] = useState({
        id:"",
        firstName: "",
        lastName: "",
        emailId: ""
    })

    const navigate = useNavigate()

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
            .then((response) => {
                console.log(response)
                navigate("/employeeList")
            })
            .catch((error)=>{
                console.log(e)
            })

    }

    const reset = (event) => {
        event.preventDefault();
        setEmployee({
            id:"",
            firstName: "",
            lastName: "",
            emailId: ""
        })
    } 

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee,[e.target.name]:value})
    }


    return (
      <div className='p-10 flex items-center justify-center'>
        <div className="w-800 border-2 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
            <div className='px-8 py-8'>
                <div className='font-thin text-2xl tracking-wider'>
                    <h1>Add new Employee</h1>
                </div>
                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-700'>First Name</label>
                    <input 
                        type="text" 
                        name="firstName"
                        value={employee.firstName}
                        onChange={(e) => handleChange(e)}
                        className='h-10 w-90 border mt-2 px-2 py-2'></input>
                </div>
                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-700'>Last Name</label>
                    <input 
                        type="text" 
                        name='lastName'
                        value={employee.lastName}
                        onChange={(e) => handleChange(e)}
                        className='h-10 w-90 border mt-2 px-2 py-2'></input>
                </div>
                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-700'>Email</label>
                    <input 
                        type="email" 
                        name='emailId'
                        value={employee.emailId}
                        onChange={(e) => handleChange(e)}
                        className='h-10 w-90 border mt-2 px-2 py-2'></input>
                </div>
           
                <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                    <button 
                        onClick={saveEmployee} 
                        className='rounded text-white font-semibold bg-green-400 py-2 px-3 hover:bg-green-700'>
                        Save
                    </button>
                    <button 
                        onClick={reset}
                        className='rounded text-white font-semibold bg-red-400 py-2 px-3 hover:bg-red-700'>
                        Clear
                    </button>
                </div>
            </div>
        </div>
    </div>
        
      
    )
}


export default AddEmployee