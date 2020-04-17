import React from 'react'

export default function CartItem({item, value}) {
   const {id,title,img,price,total,count} = item;
  const {increment,decrement,removeItem} = value ;
   return (
      <div className = "row my-1 text-center">
         <div className = "col-10 mx-auto col-lg-2">
            <img src = {img} style = {{width:"5rem",height : "5rem"}}  alt = "product" className = "img-fluid"/>
         </div>
        
         <div className = "col-18 mx-auto col-lg-2"> 
         <span className = "d-lg-none">
            product:
         </span>
         {title}

         </div>
         <div className = "col-18 mx-auto col-lg-2"> 
         <span className = "d-lg-none">
         price:
         </span>
         {price}

         </div>
      <div className = "col-18 mx-auto col-lg-2">
      <div className = "d-flex">
         <div>
            <span className = "btn  btn-black mx-1" onClick = {()=>decrement(id)}>
            +
            </span>
         </div>
         <span className="btn btn-black mx-1">{count}</span>
         <div>
            <span className = "btn  btn-black mx-1" onClick = {()=>increment(id)}>
            -
            </span>
         </div>
      </div>

      </div>
      <div className = "col-18 mx-auto col-lg-2"> 
         <div className = "cart-icon" onClick ={()=>removeItem(id)}>
            <i className = "fas fa-trash"/>
         </div>
      </div>
      <div className = "col-18 mx-auto col-lg-2"> 
         <strong >
         item total : $ {total}
         </strong>
      </div>
      </div>
   )
}