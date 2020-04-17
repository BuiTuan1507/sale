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
import Login from './Login';
class App extends Component{
    constructor(props){
        super(props);
        this.state={ apiResponse:""};
    }
    callApi(){
        fetch("http://localhost:9000/testApi")
        .then(res=>res.text())
        .then(res=>this.setState({apiResponse:res}));
    }
    componentDidMount(){
        this.callApi();
    }
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <p className="Api-intro">{this.state.apiResponse}</p>
                
                <Switch>
                <Route path="/details" component = {details}/>
                <Route path = "/Product" component={Product}/>
                <Route exact path="/" component={ProductList}/>
                <Route path="/Cart" component={Cart}/> 
                <Route path = "/Login" component ={Login}/>        
                </Switch>
                 <Modal/>
            </React.Fragment>
        )
    }
}
export default App;
