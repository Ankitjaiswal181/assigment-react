import React,{useState,useEffect} from 'react';
import useFetchData from '../customHooks/useFetchData';
import { MAIN_URL } from '../Config/Url';
import { useNavigate } from 'react-router-dom';
import { deleteEmployee, getEmployee } from '../Config/Myservice';
import axios from 'axios';
import Pagination from './Paginations';



const Home = () => {

    
    const navigate=useNavigate();

    const [data,setData]=useState([]);
     useEffect(()=>{
      axios.get(MAIN_URL)
      .then(res=>setData(res.data))
  },[])  
    //custom hook
    // const postData=useFetchData(MAIN_URL);
    const addEmploye=()=>{
        // alert('hello');
        navigate('/addEmployeeDetail');
    }
    const editEmploye=(id)=>{
        // console.log(id);
        navigate(`/editemployeedetail/${id}`);
                // alert(id);
       }
    const deleteEmploye=(id)=>{
        if(window.confirm('Do you want to delete?')){
            deleteEmployee(id)
            .then(res=>{
                if(res){
                    alert('Employee Detail Deleted');
                    getEmployee()
                    .then(res=>setData(res.data));
                }
            })
        }

    }
  return (
  <div className='container '>
      <h2 className='text-center'>Home Component</h2>
        <h3>Employee List</h3>
        <table className="table table-dark table-sm table-hover mb-0">
            <tbody >
                
                    <tr>
                        
                        <th>Employee Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Gender</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                    
                    {data.map((detail,id)=>{
                        return(
                            <tr key={id}>
                                
                                <td>{detail.ename}</td>
                                <td>{detail.age}</td>
                                <td>{detail.city}</td>
                                <td>{detail.gender}</td>
                                <td>{detail.salary}</td>
                                <td><button type="button" className="btn btn-primary btn-sm" onClick={()=>editEmploye(detail.id)} >Edit </button>&nbsp;|&nbsp;<button type="button" className="btn btn-danger btn-sm" onClick={()=>deleteEmploye(detail.id)}>Delete</button></td>
                                
                            </tr>

                        )
                    })}
                
            </tbody>
 
        </table>
        <button type="button" className="btn btn-primary btn-sm" onClick={addEmploye}>Add New Employee Detail</button>
        <div>
    {/* <Pagination postsPerPage={postsPerPage} totalPosts={data.length}/> */}
    </div> 
  </div>
  )};

export default Home;
