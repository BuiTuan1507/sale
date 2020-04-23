import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
export default class Footer extends Component {
   render() {
      return (
         <div class="container text-center">
            
            <div class="row">
                <div class="col-lg-4">
                    <div class="col-md-3">
                        <ul class="nav nav-pills nav-stacked">
                            <li><a href="#">Về chúng tôi</a></li>
                            <li><a href="#">Tin tức</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <ul class="nav nav-pills nav-stacked">
                            <li><a href="#">Danh mục 1</a></li>
                            <li><a href="#">Danh mục 2</a></li>
                            
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <ul class="nav nav-pills nav-stacked">
                            <li><a href="#">Web analytics</a></li>
                            <li><a href="#">Presentations</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <ul class="nav nav-pills nav-stacked">
                            <li><a href="#">Product Help</a></li>
                            <li><a href="#">Developer API</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-lg-4">
                    <ul class="nav nav-pills nav-justified">
                        <li><a href="/">© 2018 Company Name.</a></li>
                        <li><a href="#">Thông tin dịch vụ</a></li>
                        <li><a href="#">Bản quyền</a></li>
                    </ul>
                </div>
            </div>
        </div>
      )
   }
}
