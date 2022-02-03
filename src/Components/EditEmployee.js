import React, { useState,useEffect,useRef } from 'react';
import { addEmployee,getEmployeeById,updateEmployee } from '../Config/Myservice';
import {  useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EditEmployee = () => {
    const [data,setData]=useState({});
     const {id}=useParams();
    const enameRef=useRef(null);
    const ageRef=useRef(null);
    const cityRef=useRef(null);
    const genderRef=useRef(null);
    const salaryRef=useRef(null);
    const navigate=useNavigate();

    useEffect(()=>{
        getEmployeeById(id)
        .then(res=>{
            if(res){
                console.log(res.data);
                setData(res.data);
            }
        })
    },[])

    const editpostEmployee=(event)=>{
        event.preventDefault();
        let formData={
            ename:enameRef.current.value,
            age:ageRef.current.value,
            city:cityRef.current.value,
            gender:genderRef.current.value,
            salary:salaryRef.current.value

        };
        updateEmployee(id,formData)
        .then(res=>{
            if(res){
                alert("Employee Updated");
                navigate("/");

            }
        })
        
     }
  return (
  <div className='container'>
      <h2>Add Employee Details</h2>
      <form onSubmit={editpostEmployee}>
          <div className='form-group'>
              <label>Employee name</label>
              <input type="text" className="form-control" ref={enameRef} defaultValue={data.ename}/>
            </div>
          <div className='form-group'>
              <label>Age</label>
              <input type="number" className="form-control" ref={ageRef} defaultValue={data.age}/>
            </div>
          <div className='form-group'>
              <label>City</label>
              <input type="text" className="form-control" ref={cityRef} defaultValue={data.city}/>
            </div>
          <div className='form-group'>
              <label>Gender</label>
              <input type="text" className="form-control" ref={genderRef} defaultValue={data.gender}/>
            </div>
          <div className='form-group'>
              <label>Salary</label>
              <input type="number" className="form-control" ref={salaryRef} defaultValue={data.salary}/>
            </div>
            <input type="submit" value="Update" className="btn btn-success mt-1"/>   
      </form>
  </div>
  )};

export default EditEmployee;