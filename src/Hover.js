import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from './context'
export default class Hover extends Component {
   render() {

      return (
         <ProductConsumer>
            {value => {
               const {
                  d
               } = value.userProfile;
               return (
                  <div className="container">
                     <div className="row">

                        <div className="col-lg-3">
                           <p style={{ fontSize: "24px", color: "orange", fontFamily: "Pacifico" }}>Danh mục sản phẩm</p>
                           <hr></hr>
                           <Link to="/ProductList" >
                              <p style ={{fontFamily:"Lato", fontSize:"20px",}} onClick={() => {
                                 value.display(1, 7)
                              }}>Tiểu thuyết</p>

                           </Link>
                           
                           <Link to="/ProductList">
                              <p style ={{fontFamily:"Lato", fontSize:"20px",}} onClick={() => {
                                 value.display(2, 7)
                              }}>Văn học</p>
                           </Link>
                           
                           <Link to="/ProductList">
                              <p style ={{fontFamily:"Lato", fontSize:"20px",}} onClick={() => {
                                 value.display(3, 7)
                              }}>Tâm lí - Kĩ năng sống</p>
                           </Link>
                           <Link to = "/ProductList">
                           <p style ={{fontFamily:"Lato", fontSize:"20px",}} onClick={() => {
                                 value.display(4, 7)
                              }}>Sách thiếu nhi</p>
                           </Link>
                           <Link to = "/ProductList">
                           <p style ={{fontFamily:"Lato", fontSize:"20px",}} onClick={() => {
                                 value.display(5, 7)
                              }}>Sách bán chạy</p>
                           </Link>
                           <Link to = "/ProductList">
                           <p style ={{fontFamily:"Lato", fontSize:"20px",}} onClick={() => {
                                 value.display(6, 7)
                              }}>Dụng cụ học sinh</p>
                           </Link>
                        </div>
                        <div className="col-lg-9" >
                           <img src="img/nen.jpg" style={{maxWidth:"100%",height:"auto"}} alt="background" />
                        </div>

                     </div>

                  </div>
               )
            }}


         </ProductConsumer>

      )
   }
}

