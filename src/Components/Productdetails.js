import React,{useState} from 'react';
import Dummydata from '../Product Dummydata/Product.json'
const Productdetails = () => {
    const [proData,setProData]=useState(Dummydata);
  return (
      <>
    <section>
    <div className="container">
        <div className="row">
            
            
            <div className="col-sm-9 padding-right">
                <div className="product-details">
                    <div className="col-sm-5">
                        <div className="view-product">
                            <img src="images/product-details/1.jpg" alt="" />
                            <h3>ZOOM</h3>
                        </div>
                       
                    </div>
                    <div className="col-sm-7">
                        <div className="product-information">
                            <img src="images/product-details/new.jpg" className="newarrival" alt="" />
                            <h2>{proData.pname}</h2>
                            <p>Web ID: {proData.id}</p>
                            <img src="images/product-details/rating.png" alt="" />
                            <span>
                                <span>Rs.{proData.price}</span>
                                <label>Quantity:</label>
                                <input type="number"/>
                                <button type="button" className="btn btn-fefault cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    Add to cart
                                </button>
                            </span>
                            <p><b>Availability:</b> In Stock</p>
                            <p><b>Condition:</b> New</p>
                            <p><b>Brand:</b> {proData.cname}</p>
                            <a href=""><img src="images/product-details/share.png" className="share img-responsive"  alt="" /></a>
                        </div>
                    </div>
                </div>
                
                
                
               
                
            </div>
        </div>
    </div>
</section>
</>
  )};

export default Productdetails;
