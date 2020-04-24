import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route} from 'react-router-dom';
import Product from './Product';
import ProductList from './ProductList';
import Cart from './Cart';
import Navbar from './Navbar';
import {Component} from 'react';
import details from './details';
import Modal from './Modal';
import Register from './user/Register';
import Login from './user/Login'; 
import Profile from './user/Profile';
import Footer from './Footer';
import Hover from './Hover'


class App extends Component{
     
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <br></br>
                <Switch>
                  
                <Route  exact path = "/" component ={Hover}/>
                <Route path = "/profile" component={Profile}/>
                <Route path="/details" component = {details}/>
                <Route path = "/Product" component={Product}/>
                <Route path="/ProductList" component={ProductList}/>
                <Route path="/Cart" component={Cart}/> 
                <Route path = "/Register" component ={Register}/>   
                <Route path = "/Login" component = {Login}/> 
                     
                </Switch>
                 <Modal/>
                 <Footer/>
            </React.Fragment>
        )
    }
}
export default App;
