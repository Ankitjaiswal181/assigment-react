import React from 'react';
import Pagination from "react-bootstrap/Pagination";
const Paginations = ({postsPerPage,totalPosts,paginate,currentPage}) => {
    console.log(postsPerPage);
    console.log(totalPosts);
  const pageNumbers=[];
  
  for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(
          
        <Pagination.Item
            key={i}
            active={i === currentPage}
            onClick={() => paginate(i)}>
    
            {i}
    
          </Pagination.Item>);
  }
//   console.log(pageNumbers);
    return (
        <div className="d-flex justify-content-around pagination">
        <Pagination className="d-flex" >{pageNumbers}</Pagination>
    </div>
  )};

export default Paginations;
