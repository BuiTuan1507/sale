import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { GiShop } from "react-icons/gi";
import {Login} from "./Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import {IconContext} from "react-icons";
import {FaShoppingBag} from "react-icons/fa";
import {IoMdLogIn} from "react-icons/io";
export default class Navbar extends Component {
    render() {
        return (
           <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-4x-5">
               <Link to ="/" >
                   <IconContext.Provider value={{color:"White", size:"4em"}} ><GiShop /></IconContext.Provider>
                   
               </Link>
               <ul className ="navbar-nav align-items-center">
                   <li className="nav-item ml-5">
                       <Link to = "/" className="nav-link">
                           <li style={{fontSize:"2em"}}>Products</li></Link>
                   </li>
               </ul>
               <Link to ='/Cart' className = "ml-auto" style = {{position:"absolute", right:"100px"}}>
                   <button>
                       <span className="nr-2">
                       <FaShoppingBag/> 
                    </span>My cart</button>
               </Link>
               <Link to = '/Login' className = "ml-auto">
                   <button>
                       <span className = "nr-2"> <IoMdLogIn/>Login</span>
                   </button>
               
               </Link>
               
            
           </nav>
        );
    }
}