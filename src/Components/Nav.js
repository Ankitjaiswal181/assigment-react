import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Nav = () => {


  
  const cart=useSelector(state=>state.cartData);
    console.log(cart)
    var total=0;
    cart.forEach(element => {
     total+=element.quantity;
        
    });
    console.log(total)
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"  to="/addEmployeeDetail">AddEmployee</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link"  to="/editemployeedetail">EditEmployee</Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link"  to="/product">Product</Link>
          </li>

        </ul>
    </div>
    <div className='navbar-nav ms-auto'>
        <Link href='#' className='nav-item nav-link' to= "/cart" >Cart({total})</Link>
    </div>
  </div>
</nav>
)};

export default Nav;
