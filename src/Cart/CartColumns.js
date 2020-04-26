import React from 'react'

export default function CartColumns() {
   return (
      <div className="container-fluid text-center d-none d-lg-block">
         <div className ="row">
            <div className="col-10 mx-auto col-lg-2">
               <div className="text-uppercase">Ảnh</div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
               <div className="text-uppercase">Tên Sản phẩm</div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
               <div className="text-uppercase">Giá</div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
               <div className="text-uppercase">Số lượng</div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
               <div className="text-uppercase">Tổng số tiền</div>
            </div>
         </div>
      </div>
   )
}
