import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { IconContext } from "react-icons";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { FaRegistered } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-4x-5">
                    <Link to="/" >
                        <IconContext.Provider value={{ color: "White", size: "4em" }} >< FaHome /></IconContext.Provider>

                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">
                                <li style={{ fontSize: "2em", fontFamily: "Permanent Marker", color: "orange" }}>SachViet.com</li></Link>
                        </li>
                    </ul>

                    <Link to="/profile">
                        <p  style={{ position: "absolute", right: "700px", fontFamily: "Lato", fontSize: "22px", color: "white" }}>Xin Chào Bạn  {sessionStorage.getItem("last_name")}</p>
                    </Link>
                    
                    <p style={{ position: "absolute", right: "340px" }}>Hotline: 1900 1503</p>
                    <Link to='/Cart' className="ml-auto" style={{ position: "absolute", right: "240px" }}>
                        <button type="button" class="btn btn-light btn-sm">
                            <span className="nr-2">
                                <FaShoppingBag />
                            </span>Giỏ hàng</button>
                    </Link>
                    <Link to='./Login' style={{ position: "absolute", right: "120px" }} >
                        <button type="button" class="btn btn-light btn-sm" >
                            <span className="nr-2"> <IoMdLogIn />Đăng nhập</span>
                        </button>
                    </Link>
                    <Link to='/Register' className="ml-auto">
                        <button type="button" class="btn btn-light btn-sm" >
                            <span className="nr-2"> <FaRegistered />Đăng ký</span>
                        </button>

                    </Link>


                </nav>
            </React.Fragment>



        );
    }
}
