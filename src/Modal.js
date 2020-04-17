import React, { Component } from 'react'
import styled from 'styled-components';
import { ProductConsumer } from './context';
import { Link } from 'react-router-dom';
export default class Modal extends Component {
   render() {
      return (
         <ProductConsumer>
            {value => {
               const { modalOpen, closeModal } = value;
               const { img, title, price } = value.modalProduct;
               if (!modalOpen) {
                  return null;
               } else {
                  return (
                     <ModalContainer>
                        <div className="container">
                           <div className="row">
                              <div
                                 className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                                 style = {{background:"white"}}
                              >
                                 <h5>item added to cart</h5>
                                 <img src={img} style = {{height:"350px",width:"230px"}} className="img-fluid  " alt="" />
                                 <h5>{title}</h5>
                                 <h5 className="text-muted">price : ${price}</h5>
                                 <Link to="/">
                                    <button
                                       onClick={() => {
                                          closeModal();
                                       }}
                                    >
                                       Continue Shopping
                          </button>
                                 </Link>
                                 <Link to="/cart">
                                    <button
                                       cart
                                       onClick={() => {
                                          closeModal();
                                       }}
                                    >
                                       Go To Cart
                          </button>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </ModalContainer>
                  );
               }
            }}
         </ProductConsumer>
      );
   }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

`;
