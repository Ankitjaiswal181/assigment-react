import react from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import AddEmployee from "./Components/AddEmployee";
import Cart from "./Components/Cart";
import EditEmployee from "./Components/EditEmployee";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Product from './Components/Product'
import Productdetails from "./Components/Productdetails";
function App() {
  return (
    <>
    <main>
      <Router>
        <Nav/>
          <section>
              <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/addEmployeedetail" element={<AddEmployee/>}/>
              <Route path="/editemployeedetail/:id" element={<EditEmployee/>}/>
              <Route path="/product" element={<Product/>}/>
              <Route path="/cart" element={<Cart/>}/>
              {/* <Route path="/product-details/:id" element={<Productdetails/>}/> */}
              </Routes>
          </section>
      </Router>
    </main>
    
    </>
  );
}

export default App;
