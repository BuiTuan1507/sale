import React, { Component } from 'react'
import styled from 'styled-components';
import { ProductConsumer } from './context';
import { Link } from 'react-router-dom';
export default class Thanhtoan extends Component {
   render() {
      return (
         
                  <div>
                     <div className="container">
                        <div className="row">
                           <div
                              className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                              style = {{background:"white"}}
                           >
                             
                              Ban da thanh toan thanh cong
                              <Link to ="/">
                                 <button>Continuing shopping</button>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               );
            }
  
}
