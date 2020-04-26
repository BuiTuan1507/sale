import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import { thanhtoan } from '../user/UserFunctions'
export default class Th extends Component {
   constructor() {
      super()
      this.state = {
        email: sessionStorage.getItem("email"),
        money:sessionStorage.getItem("moneySub"),
        errors: {}
      }
  
      this.onChange = this.onChange.bind(this)
      this.onClick = this.onClick.bind(this)
    }
  
    onChange(e) {
      this.setState({ [e.target.name]: e.target.value })
    }
    onClick(e) {
      e.preventDefault();
     
      const user = {
        email: this.state.email,
        money: this.state.money
      }
      
      thanhtoan(user).then(res => {
        if (res) {
          
        }
      })
    }
   render() {
      return (
         <div>
           
               <Link to='/Thanhtoan'>
                  <button className="btn btn-warning btn-sm" type="submit" value={this.onChange}
                  onClick={this.onClick} >Thanh toán</button>
               </Link>
            
         </div>
      )
   }
}
