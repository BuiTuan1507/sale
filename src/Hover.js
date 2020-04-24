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
                           <p style = {{fontSize:"23px",color:"orange", fontFamily:"Pacifico"}}>Danh muc san pham</p>
                           <hr></hr>
                           <Link to="/ProductList" >
                              <p onClick={() => {
                                 value.display(1,7)
                              }}>Sach tieu thuyet</p>

                           </Link>
                           <br></br>
                           <Link to="/ProductList">
                              <p onClick={() => {
                                 value.display(2,7)
                              }}>Sach tieu thuyet</p>
                           </Link>
                           <br></br>
                           <Link to="/ProductList">
                           <p onClick={() => {
                                 value.display(3,7)
                              }}>Sach ki nang song</p>
            </Link>
                        </div>
                        <div className="col-lg-9" >
                           <img src="img/nen.jpg" alt="background" />
                        </div>

                     </div>

                  </div>
               )
                           }}

            
         </ProductConsumer>

      )
   }
}

