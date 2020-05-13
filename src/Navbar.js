import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CustomizedMenus from './UI/FadeMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IconContext } from "react-icons";

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
                        <p  style={{ position: "absolute", right: "600px", fontFamily: "Lato", fontSize: "22px", color: "white",top:"25px"  }}>Xin Chào Bạn  {sessionStorage.getItem("last_name")}</p>
                    </Link>
                    
                    <p style={{ position: "absolute", right: "150px" }}>Hotline: 1900 1503</p>
                    <div style = {{position: "absolute", right: "30px"}} >
                    <CustomizedMenus />
                    </div>
                    

                </nav>
            </React.Fragment>



        );
    }
}
