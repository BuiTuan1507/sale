import React from 'react'

export default function CartItem({ item, value }) {
   const { id, title, img, price, total, count } = item;
   const { increment, decrement, removeItem } = value;
   return (
      <div className="row my-1 text-center">
         <div className="col-10 mx-auto col-lg-2" style={{ textAlign: "center" }}>
            <img src={img} style={{ width: "6rem", height: "8rem" }} alt="product" className="img-fluid" />
         </div>

         <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">
               sản phẩm:
         </span>
            <span style={{ position: "absolute", left: "105px" }}> {title}</span>


         </div>
         <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">
               giá:
         </span>
            <div style={{ position: "absolute", left: "199px" }}>{price} </div>


         </div>
         <div className="col-10 mx-auto col-lg-2"  style={{left:"180px"}}>
           
            <div className="d-flex"  >
               <div>
                  <span className="btn  btn-black mx-1" onClick={() => increment(id)} style={{ color: "blue" }}>
                     +
                  </span>
               </div>
               <span className="btn btn-black mx-1"  >{count}</span>
               <div>
                  <span className="btn  btn-black mx-1" onClick={() => decrement(id)}>
                     -
                  </span>
               </div>
            </div>

         </div>
         <div className="col-18 mx-auto col-lg-2">
            <div className="cart-icon" onClick={() => removeItem(id)}>
               <i className="fas fa-trash" />
            </div>
         </div>
         <div className="col-18 mx-auto col-lg-2">
            <strong >
               Tổng số tiền: {total}đ
         </strong>
         </div>
      </div>
   )
}
