import React, { Component } from 'react'
import styled from 'styled-components';
import { ProductConsumer } from './context';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format'
export default class Thanhtoan extends Component {

   render() {
      return (

         <div>
            <div className="container">
               <div className="row">
                  <div
                     className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                     style={{ background: "white" }}
                  >
                     <p style={{ fontSize: "30px", color: "orange" }}>Bạn đã thanh toán thành công</p>
                     <div>
                        <p>Số dư còn lại trong tài khoản <NumberFormat value={sessionStorage.getItem("moneySub")} displayType={'text'} thousandSeparator={true} suffix={'d'}  /></p>
                     </div>
                     <Link to="/">
                        <button className = "btn btn-primary">Tiếp tục mua sắm</button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      );
   }

}
