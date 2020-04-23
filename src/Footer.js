import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
   render() {
      return (
         <div className="container text-center">
            
            <div className="row">
                <div className = "col-lg-4">
                    <div>SACHVIET.COM</div>
                    <div>Địa chỉ: Phường Bách Khoa, Quận Hai Bà Trưng , Hà Nội </div>
                    <div>SachViet.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả Hệ Thống SachViet trên toàn quốc

                    </div>
                    <div>
                       
                        <a href ="/#"> <FaFacebook className = "col-2" size = "30" color ="blue"/></a>
                        <a href ="/#"><FaInstagram className = "col-3" size = "30" color = "red"/></a>
                        <a href ="/#"> <FaYoutube className = "col-3" size = "30" color = "red"/></a>
                        <a href = "/#"> <FaTwitter className = "col-3" size = "30" color = "blue"/></a>
                       
                        </div>
                </div>
                <div className ="col-lg-2">
                   
                        <div>Dịch vụ</div>
                        <div>Điều khoản sử dụng</div>
                        <div>Chính sách bảo mật</div>
                        <div>Giới thiệu</div>
                        <div>Hệ thống nhà sách</div>
                   
                   
                   
                </div>
                <div className="col-lg-3">
                
                        <divdiv>Hỗ trợ</divdiv>
                        <div>Phương thức thanh toán</div>
                        <div>Phương thức vận chuyển</div>
                        <div>Chính sách đổi trả</div>
                        
                    
                </div>
                <div className = "col-lg-3">
                    <div>Tài khảon của tôi</div>
                    <div>Đăng nhập</div>
                    <div>Đăng ký</div> 
                    <div>Lịch sử mua hàng</div>
                </div>
            </div>
            <div className = "row">
                <div>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </div>
      )
   }
}
