import React, { useRef } from 'react';
import { addEmployee } from '../Config/Myservice';
import {  useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const enameRef=useRef(null);
    const ageRef=useRef(null);
    const cityRef=useRef(null);
    const genderRef=useRef(null);
    const salaryRef=useRef(null);
    const navigate=useNavigate()

    const postEmployee=(event)=>{
        event.preventDefault();
        let formData={
            ename:enameRef.current.value,
            age:ageRef.current.value,
            city:cityRef.current.value,
            gender:genderRef.current.value,
            salary:salaryRef.current.value

        };
        addEmployee(formData)
        .then(res=>{
            if(res){
                alert("Employee Added");
                navigate("/");

            }
        })
        .catch(err=>{
            if(err){
                alert("Something went wrong");
            }
        })
    }
  return (
  <div className='container'>
      <h2>Add Employee Details</h2>
      <form onSubmit={postEmployee}>
          <div className='form-group'>
              <label>Ename</label>
              <input type="text" className="form-control" ref={enameRef}/>
            </div>
          <div className='form-group'>
              <label>Age</label>
              <input type="number" className="form-control" ref={ageRef}/>
            </div>
          <div className='form-group'>
              <label>City</label>
              <input type="text" className="form-control" ref={cityRef}/>
            </div>
          <div className='form-group'>
              <label>Gender</label>
              <input type="text" className="form-control" ref={genderRef}/>
            </div>
          <div className='form-group'>
              <label>Salary</label>
              <input type="number" className="form-control" ref={salaryRef}/>
            </div>
            <input type="submit" value="Add" className="btn btn-success mt-1"/>   
      </form>
  </div>
  )};

export default AddEmployee;