import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';

export default function Cart() {
    const localdata=useSelector(state=>state.cartData);
    const dispatch=useDispatch();
    const [input,setInput]=useState(localdata)
    const [counter,setCounter]=useState();
    // console.log(input);
    console.log(localdata);
    // const count=
    // console.log(localdata);
    var totalCartPrice=0;
    var subTotal=0;
    const handler=()=>{
        console.log('click')
    }
    const increment=(cartId)=>{
        // pro.quantity+1
        setInput(cart=>
            cart.map(item=>
              cartId.pid===item.pid ?{...item,quantity:item.quantity+1}:item)   )

                // console.log(cart)
//            localStorage.setItem('addcart',JSON.stringify(setInput));
//              dispatch({type:'updatecart',payload:setInput}); 
            
        // console.log(cartId)

    }
    const decrement=(cartId)=>{
        setInput(cart=>
            cart.map(item=>
              cartId.pid===item.pid ?{...item,quantity:item.quantity-1}:item)   )
//               localStorage.setItem('addcart',JSON.stringify(setInput));
//              dispatch({type:'updatecart',payload:setInput});
    }
    const del=(id)=>{
        const local=input.filter((val)=>{
            return val.pid!==id;
            console.log(id);

        })
        console.log(local);
        localStorage.setItem('addcart',JSON.stringify(local));
        dispatch({type:'updatecart',payload:local});
       setInput(local);
    }
  return (
      <>
    <section id="cart_items">
    <div className="container">
        <div className="breadcrumbs mt-1" >
            <ol className="breadcrumb">
              <li><a href="#">Home</a></li>
              <li className="active">Shopping Cart</li>
            </ol>
        </div>
        <div className="table-responsive cart_info">
            <table className="table table-condensed">
                <thead>
                    <tr className="cart_menu">
                        <td className="image">Item</td>
                        <td className="description"></td>
                        <td className="price">Price</td>
                        <td className="quantity">Quantity</td>
                        <td className="total">Total</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {input.map((pro,index)=>
                    
                        <>
                        <div className='d-none' >
                        {totalCartPrice +=pro.price * pro.quantity}
                        {subTotal=totalCartPrice+100}
                        </div>
                        
                        <tr key={pro.pid}>
                         <td className="cart_product">
                             <a href=""><img src={pro.image} alt="cart_image" width={100}  /></a>
                         </td>
                         <td className="cart_description text-center">
                             <h4><a href="">{pro.pname}</a></h4>
                             
                         </td>
                         <td className="cart_price">
                             <p>{pro.price}</p>
                         </td>
                         <td className="cart_quantity">
                             <div className="cart_quantity_button">
                                 <button className="cart_quantity_up" onClick={()=>increment(pro)}> + </button>
                                 <input className="cart_quantity_input" type="text" name="quantity" value={pro.quantity} onChange={handler} autoComplete="off" size="2"/>
                                 <button className="cart_quantity_down"   onClick={()=>decrement(pro)} > - </button>
                                 
                             </div>
                         </td>
                         <td className="cart_total">
                             <p className="cart_total_price">{pro.price*pro.quantity}</p>
                         </td>
                         <td className="cart_delete">
                             <a className="cart_quantity_delete" href="#" onClick={()=>del(pro.pid)}><i className="fa fa-times"></i></a>
                         </td>
                     </tr>
                    </>)

                    }


                   
                    
                </tbody>
            </table>
        </div>
    </div>
</section> 
<section id="do_action">
    <div className="container">
        <div className="heading">
            <h3>What would you like to do next?</h3>
            <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
        </div>
        <div className="row">
            <div className="col-sm-6">
                <div className="chose_area">
                    <ul className="user_option">
                        <li>
                            <input type="checkbox"/>
                            <label>Use Coupon Code</label>
                        </li>
                        <li>
                            <input type="checkbox"/>
                            <label>Use Gift Voucher</label>
                        </li>
                        <li>
                            <input type="checkbox"/>
                            <label>Estimate Shipping & Taxes</label>
                        </li>
                    </ul>
                    <ul className="user_info">
                        <li className="single_field">
                            <label>Country:</label>
                            <select>
                                <option>United States</option>
                                <option>Bangladesh</option>
                                <option>UK</option>
                                <option>India</option>
                                <option>Pakistan</option>
                                <option>Ucrane</option>
                                <option>Canada</option>
                                <option>Dubai</option>
                            </select>
                            
                        </li>
                        <li className="single_field">
                            <label>Region / State:</label>
                            <select>
                                <option>Select</option>
                                <option>Dhaka</option>
                                <option>London</option>
                                <option>Dillih</option>
                                <option>Lahore</option>
                                <option>Alaska</option>
                                <option>Canada</option>
                                <option>Dubai</option>
                            </select>
                        
                        </li>
                        <li className="single_field zip-field">
                            <label>Zip Code:</label>
                            <input type="text"/>
                        </li>
                    </ul>
                    <a className="btn btn-default update" href="">Get Quotes</a>
                    <a className="btn btn-default check_out" href="">Continue</a>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="total_area">
                    <ul>
                        <li>Cart Sub Total <span>{totalCartPrice}</span></li>
                        <li>Eco Tax <span>Rs.100</span></li>
                        <li>Shipping Cost <span>Free</span></li>
                        <li>Total <span>{subTotal}</span></li>
                    </ul>
                        <a className="btn btn-default update" href="">Update</a>
                        <a className="btn btn-default check_out" href="">Check Out</a>
                </div>
            </div>
        </div>
    </div>
</section>
</>
  );
}
