import React from 'react'
import { Link } from "react-router-dom"
import Th from './Th'
export default function CartTotal({ value }) {
   const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
   value.cartSubTotal = sessionStorage.setItem("total", cartSubTotal);
   let a = value.cartTotal;

   const dec = sessionStorage.getItem("usertoken");
   const de = JSON.parse(dec);
   let money = de.money;

   function dis(a, money) {
      if (money <= a) {
         return false;
      }
      else return true;
   }
   let check = dis(a, money);

   function Thanhtoan(a, money) {
      if (money <= a) {
         money = money;
      } else {
         money = money - a;
      }
      return money;
   }
   let moneySub = Thanhtoan(a, money);
   sessionStorage.setItem("moneySub", moneySub);
   function checkMoney(props) {
      const isCheck = props.isCheck;
      if (isCheck) {
         return <Thanhcong />
      } else {
         return <Thatbai />
      }
   }
   function Thanhcong(props) {
      return <Link to="/Thanhtoan"></Link>
   }
   function Thatbai(props) {
      return <h1>Quy khach khong du tien de mua</h1>
   }
   return (
      <React.Fragment>
         <div className="container">
            <div className="row">
               <div className="col-10  mt-2 ml-sm-5 ml-md-auto col-sx-0 text center">
                  <Link to="/">
                     <button className="btn btn-danger" type="button" onClick={() => clearCart()}>
                        Clear cart
                  </button>
                  </Link>
                  <h5>
                     <span className="text-title">
                        Subtotal:
                  </span>
                     <strong>$ {cartSubTotal}</strong>
                  </h5>
                  <h5>
                     <span className="text-title">
                        Subtotal:
                  </span>
                     <strong>$ {cartTax}</strong>
                  </h5>
                  <h5>
                     <span className="text-title">
                        Subtotal:
                  </span>
                     <strong>$ {cartTotal}</strong>
                  </h5>


               </div>

            </div>
            <checkMoney isCheck={check} />
            <Th  />
            <Link to = '/'>
            <button className = "btn btn-primary btn-sm" type = "button" onClick={() => clearCart()}>Tiếp tục mua sắm</button>

            </Link>
            


         </div>
      </React.Fragment>
   );
}
