import React, { Component } from 'react'
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from './context';
import styled from "styled-components";
export default class search extends Component {

    render() {

        return (


            <React.Fragment>
               
                <ProductWrapper className="py-5">
                    <div className="container">
                        <div style = {{fontSize:"32px", fontFamily:"Pacifico", color: "Black", textAlign:"center"}}>Sản phẩm tìm kiếm được </div>
                        <div className="row" style={{height:"900px", width:"1200px"}}>
                            <ProductConsumer>
                                {value => {
                                    return value.ss.map(product => {
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