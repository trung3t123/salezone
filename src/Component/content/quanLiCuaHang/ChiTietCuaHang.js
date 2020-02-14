import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

var item = 0;

function IdCuaHang() {
    let { id } = useParams();
    return id;
}

function ChiTietCuaHang() {

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://103.102.46.103:3000/user/";
    fetch(proxyurl + url + IdCuaHang())
        .then(res => res.json())
        .then((data) => {
            item = data;
        })
    return (
        <div class="container-right">
            <div class="content-top">
                <div class="title-left quanlych">Chi tiết cửa hàng</div>
            </div>
            <div class="content-chitiet">
                <div class="title-namestore linestore"><b>TÊN CỬA HÀNG:</b> {item.name}</div>
                <div class="except-store linestore">
                    <p><b>MÔ TẢ:</b>  {item.history + ","}</p>

                </div>
                <div class="hotline-store linestore"><b>SỐ ĐIỆN THOẠI:</b> {item.phone}</div>
                <div class="product-store"><b>SẢN PHẨM:</b>
                    <div class="product-name1 linestore product-name">
                        <div class="product-detail">Tên sản phẩm:<br />
                            Mô tả:<br />
                            ....
                    </div>
                        <div class="product-img"><img src="https://product.hstatic.net/1000321582/product/com-ga-xao-sa-ot_70bfc84a0ec04c69b883b0352b682add_master.jpg" alt="" height={100} width={100} /> <input type="checkbox" /></div>
                    </div>
                </div>
            </div>
            <div class="content-bottom">
                <div class="save-prd"><a href="#"><span>LƯU LẠI</span></a></div>
                <div class="huy-prd"><a href="#"><span>HỦY</span></a></div>
            </div>
        </div>
    );
}

export default ChiTietCuaHang;