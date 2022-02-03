import React,{useEffect,useState} from 'react';
import axios from 'axios';

const useFetchData = (url) => {
 const [data,setData]=useState([]);
  useEffect(()=>{
      axios.get(url)
      .then(res=>setData(res.data))
  },[])  
 return data;
  };

export default useFetchData;