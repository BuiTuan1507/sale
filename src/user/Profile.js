import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      money:'',
      errors: {}
    }
  }

  componentDidMount() {
    const deco = sessionStorage.getItem("usertoken");
      const dd = JSON.parse(deco);
      sessionStorage.setItem("email",dd.email)
      sessionStorage.setItem("check",1);
      sessionStorage.setItem("first_name",dd.first_name);
      sessionStorage.setItem("last_name",dd.last_name);
    this.setState({
      first_name: dd.first_name,
      last_name: dd.last_name,
      email: dd.email,
      money: dd.money
    })
  }
  
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Thông tin cá nhân</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Họ</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Tên</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
              <tr>
                <td>So du tai khoan</td>
    <td>{this.state.money}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Profile