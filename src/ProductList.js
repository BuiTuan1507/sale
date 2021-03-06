import React, { Component } from 'react'
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from './context';
import styled from "styled-components";
export default class ProductList extends Component {

    render() {

        return (


            <React.Fragment>
               
                <ProductWrapper className="py-5">
                    <div className="container">
                        <div style = {{fontSize:"32px", fontFamily:"Pacifico", color: "Black", textAlign:"center"}}>Danh sach san pham </div>
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </ProductWrapper>
            </React.Fragment>

        );
    }
}
const ProductWrapper = styled.section``;