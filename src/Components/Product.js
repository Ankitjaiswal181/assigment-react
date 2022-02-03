import React,{ useState }  from 'react';
import Dummydata from '../Product Dummydata/Product.json'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Pagination from './Paginations' 
const Product = () => {
    const [data,setData]=useState(Dummydata);
    const total=data.length;
    console.log(data.length)
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage]=useState(10)
  console.log(postsPerPage)
     // Get current Postitems
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage; 
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost); 
    
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
    // let data1={pid:pro.id,pname:pro.pname,image:pro.image,price:pro.price,quantity:pro.quantity}
    // const [input,setnput]=useState()
    // console.log(data);
    const dispatch=useDispatch();
    const addCart=(pro)=>{
        // console.log(pro)
        // let data={pid:pro.id,pname:pro.pname,image:pro.image,price:pro.price,quantity:pro.quantity}
        if(localStorage.getItem('addcart')!=undefined){
            let arr=JSON.parse(localStorage.getItem('addcart'));
			let status=0;
            // let data1={pid:pro.id,quantity:1}
			arr.forEach((val)=>{
				if(val.pid==pro.id){
					status=1;
                    pro.quantity=val.quantity+1;
                //  val.quantity=val.quantity+1;
                //  console.log(val)
                 
				}
                
                // console.log(val)
                // let data={pid:pro.id,pname:pro.pname,image:pro.image,price:pro.price,quantity:val.quantity}
                // console.log(data);
                // localStorage.setItem('addcart', JSON.stringify(data));
			})
            
			if(status==1){
				alert("Already add to cart")
               
                let data={pid:pro.id,pname:pro.pname,image:pro.image,price:pro.price,quantity:pro.quantity}
                // console.log(pro.id);
                // console.log(data.pid);
                arr.forEach((val,index)=>{
                   
                    if(val.pid===data.pid){
                        // localStorage.removeItem('addcart');
                        // arr[0].remove(data.pid);
                        arr.splice(index, 1);
                        // console.log(index);
                    }
                })
               
                arr.push(data);
                    localStorage.setItem('addcart',JSON.stringify(arr));
	                 dispatch({type:'updatecart',payload:arr});
                    // console.log(data.quantity);
                // localStorage.setItem('addcart', JSON.stringify(data));
                
                   
                
                }
			    
// var data = JSON.parse( localStorage.getItem('addcart') );
// for (var key in pro.quantity) {
      

//     // search for a product with current key
//     var index = -1;
//     data.forEach(function(item, i){
//         if( item.id === key ) {
//             index = i;
//         }
//     });

//     if (index !== -1) {
//         // data[index] = cartObj;
//         data[index].pro.quantity = parseInt(data[index].pro.quantity.split[0]) + pro.quantity[key].count+1 ;
//     } else {
//         var cartObj = { id: key,  quantity: pro.quantity[key].count+1 };
//         data.push(cartObj);
//     }
// }

// localStorage.setItem('addcart', JSON.stringify(data));
            
		//	}
			else {
				let data={pid:pro.id,pname:pro.pname,image:pro.image,price:pro.price,quantity:pro.quantity}
                let data1={pid:pro.id,quantity:1}
			arr.push(data)
            localStorage.setItem('addcart',JSON.stringify(arr));
            dispatch({type:'updatecart',payload:arr});
	       alert("Added");
			}
		}
		else {
			let arr=[];
            let data={pid:pro.id,pname:pro.pname,image:pro.image,price:pro.price,quantity:pro.quantity}
            let data1={pid:pro.id,quantity:pro.quantity}
			arr.push(data)
	        localStorage.setItem('addcart',JSON.stringify(arr));
	        dispatch({type:'updatecart',payload:arr});
	       alert("Added");
		}
    }
  return (
    <>
    <div className="container">
        <div className="row">
          
        <div className="col-sm-12 padding-right">
            <div className="features_items row">
               <h2 className="title text-center">Features Items</h2>
            {currentPost.map((pro)=>

           
               <div className="col-sm-4" key={pro.id}>
                   <div className="product-image-wrapper">
                       <div className="single-products">
                               <div className="productinfo text-center">
                               
                                   <img src={pro.image} alt="image" width={200}  />
                            
                                {/* <img src={pro.image} alt="image" width={200}  /> */}
                                   <h2>Rs.{pro.price}</h2>
                                   <p>{pro.pname}</p>
                                   <a href="#" className="btn btn-light add-to-cart" onClick={()=>addCart(pro)}><i className="fa fa-shopping-cart"></i>Add to cart</a>
                               </div>
                               
                       </div>
                   </div>
                  
               </div>
               
           )
           }	
             
           </div>
           
            </div>
            
            
       </div>
    
    </div>
    <Pagination 
    postsPerPage={postsPerPage}
    totalPosts={total}
    paginate={paginate}
    currentPage={currentPage}/>
    <div>
    </div>
</>

  )};

export default Product;
