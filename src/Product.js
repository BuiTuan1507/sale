import React, { Component } from 'react'
import  './style.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProductConsumer } from './context';
import {FiShoppingCart} from "react-icons/fi";
export default class Product extends Component {
    state={}
    render() {
    const {id, title, img, price, inCart,rating1, rating2,rating3,rating4,rating5 }=this.props.product;
        return (
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                       {(value)=>(
                           <div className="img-container " style={{backgroundSize:"cover",backgroundPosition:"center center"}}
                           onClick={ () => value.handleDetail(id)}>
                              <Link to="/details">
                                <img src={img} alt="product" className="card-img-top" />
                            </Link> 
                            <button  className = "cart-btn" disabled={inCart? true : false} 
                            onClick={()=>{value.addToCart(id);
                            value.openModal(id);
                            }}>
                            {inCart?(<p disabled>{" "}đã chọn</p>):(<FiShoppingCart/> )}
                            </button>
                           </div>
                       )}
                    </ProductConsumer> 
                    <div className = "card-footer d-flex justify-content-between"> 
                        <p className = "align-self-center mb-0">
                            <div>{title}</div>
                            
                            <div className="text-blue font-italic mb-0">
                            
                                
                                {price}
                                <span className = "mr-1">đ</span>
                            </div>
                            <div>
                                <img src = {rating1} alt =""/>
                                <img src = {rating2} alt=""/>
                                <img src = {rating3}alt =""/>
                                <img src ={rating4} alt =""/>
                                <img src= {rating5} alt =""/>
                            </div>
                        </p>

                    </div>
                </div>
            </div>
        )
    }
}
Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}

