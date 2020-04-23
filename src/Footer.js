import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div className="container text-center" style = {{bottom:"5%"}}>
                <hr></hr>
                <div className="row">
                    <div className="col-lg-4">
                        <div style={{ fontSize: "30px", fontFamily: "Permanent Marker" }}>SACHVIET.COM</div>
                        <br></br>
                        <div>Địa chỉ: Phường Bách Khoa, Hai Bà Trưng, Hà Nội </div>
                        <br></br>
                        <div style={{ textAlign: "left" }}>SachViet.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả Hệ Thống SachViet trên toàn quốc
                        

                    </div>
                    <br></br>
                        <div>

                            <a href="/#"> <FaFacebook className="col-2" size="30" color="blue" /></a>
                            <a href="/#"><FaInstagram className="col-3" size="30" color="red" /></a>
                            <a href="/#"> <FaYoutube className="col-3" size="30" color="red" /></a>
                            <a href="/#"> <FaTwitter className="col-3" size="30" color="blue" /></a>

                        </div>
                    </div>
                    <div className="col-lg-3 " style={{ textAlign: "left" }} >
                        <div style={{ fontWeight: "bold", fontSize: "20px" }}>Dịch vụ</div>
                        <br></br>
                        <a href="/#"> <div >Điều khoản sử dụng</div></a>
                        
                        <a href="/#"> <div  >Chính sách bảo mật</div></a>
                        

                        <a href="/#" ><div  >Giới thiệu</div></a>
                       
                        <a href="/#"> <div >Hệ thống nhà sách</div>
                        
                        </a>
                        <br></br>
                        <br></br>
                        <p>Lien he: sachviet@gmail.com</p>
                    </div>
                    <div className="col-lg-3" style={{ textAlign: "left" }}>
                        <div style={{ fontWeight: "bold", fontSize: "20px" }} >Hỗ trợ</div>
                        <br></br>
                        <a href="/#" ><div>Phương thức thanh toán</div></a>
                       
                        <a href="/#"><div>Phương thức vận chuyển</div></a>
                        
                        <a href="/#" ><div>Chính sách đổi trả</div></a>

                    </div>
                    <div className="col-lg-2" style={{ textAlign: "left" }}>
                        <div style={{ fontWeight: "bold", fontSize: "20px" }}>Tài khoản của tôi</div>
                        <br></br>
                        <a href="/#" >
                            <div>Đăng nhập</div>
                        </a>
                       
                        <a href="/#" >
                            <div>Đăng ký</div>
                        </a>
                        
                        <a href="/#" ><div>Lịch sử mua hàng</div></a>
                    </div>
                </div>
              
            </div>
        )
    }
}
