import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class EmptyCart extends Component {
   render() {
      return (
         <div className = "container">
            <div style ={{boxShadow: "0px 0px 2px rgba(0,0,0,0.1)",padding:"20px",backgroundColor:"#fff"}}>
          <div className="page-title" style = {{textAlign:"center", fontSize:"25px", fontFamily:"Permanent Marker"}}>Giỏ hàng trống</div>
          <div style = {{height:"400px", width:"450px"}}>
             <Link to  = "/"> Click vào đây để quay lại trang chủ</Link>
         </div>
       </div>
         </div>
       
      )
   }
}
