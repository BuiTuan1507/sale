import React, { Component } from 'react'
import { ProductConsumer } from './context';
import { Link } from "react-router-dom"

export default class details extends Component {
   render() {
      return (
         <ProductConsumer>
          {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;

          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end of title */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="" />
                </div>
                {/* prdoduct info */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h1>Sản phẩm {title}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Tác giả <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      giá : <span>đ</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Giới thiệu:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <button>trở lại trang mua hàng</button>
                    </Link>
                    <button
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "Trong giỏ hàng" : "Thêm vào giỏ hàng"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}

         </ProductConsumer>
      )
   }
}
