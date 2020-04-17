import React, { Component } from 'react'
import Title from "./Cart/Title"
import CartColumns from './Cart/CartColumns'
import EmptyCart from './Cart/EmptyCart'
import {ProductConsumer} from './context'
import CartTotal from './Cart/CartTotal'
import CartList from './Cart/CartList'
export default class 
 extends Component {
   render() {
      return (
         <section>
            <ProductConsumer>
               {value=>{
                  const {cart}= value;
                  if(cart.length>0){
                     return (
                        <React.Fragment>
                           <Title/>
                        <CartColumns/>
                        <CartList value = {value}/>
                        <CartTotal value = {value}/>
                        </React.Fragment>
                        
                     );
                  }
                  else{
                     return <EmptyCart/>;
                  }
               }}
            </ProductConsumer>
            
            <EmptyCart/>
         </section>
      )
   }
}

