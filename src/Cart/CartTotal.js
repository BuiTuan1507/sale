import React from 'react'
import {Link} from "react-router-dom"
export default function CartTotal({value}) {
   const {cartSubTotal,cartTax,cartTotal,clearCart} = value;
   return (
      <React.Fragment>
         <div className = "container">
            <div className = "row">
               <div className = "col-10  mt-2 ml-sm-5 ml-md-auto col-sx-0 text center">
               <Link to ="/">
                  <button className = "btn btn-danger" type = "button" onClick = {()=>clearCart()}>
                     Clear cart
                  </button>
               </Link>
               <h5>
                  <span className = "text-title">
                  Subtotal:
                  </span>
                  <strong>$ {cartSubTotal}</strong>
               </h5>
               <h5>
                  <span className = "text-title">
                  Subtotal:
                  </span>
                  <strong>$ {cartTax}</strong>
               </h5>
               <h5>
                  <span className = "text-title">
                  Subtotal:
                  </span>
                  <strong>$ {cartTotal}</strong>
               </h5>
               </div>
               
            </div>
            <button className ="btn btn-warning btn-sm" type = "button" >Thanh toán</button>
         </div>
      </React.Fragment>
   );
}
