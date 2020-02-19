import React, { Component, useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import axios from 'axios';

const ChiTietQuangCao = () => {
    const [id, setId] = useState(useParams());
    const [item, setItem] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/"
        const url = 'http://103.102.46.103:3000/banner/';
        fetch(proxyurl + url + id.id).then(res => res.json())
            .then(data => {
                setItem(data);
                setIsLoaded(true);
            })
        console.log(item)
        setCount(100);
    }, [count])


    if (!isLoaded) {
        return (
            <div>Loading...</div>)
    } else
        return (
            <div className="container-right">
                <header><h1>Thông tin cửa hàng</h1></header>

                <div className="row"><span className="col-4">Tên công ti:</span> <span className="col-4">{item.nameCompany} </span>
                </div>
                <div className="row">
                    <span className="col-4">Số điện thoại công ti:</span><span className="col-4"> {item.phoneCompany}</span>
                </div>
                <div className="row">
                    <span className="col-4">Địa chỉ công ti:</span><span className="col-4"> {item.addressCompany}</span>
                </div>
                <div className="row">
                    <span className="col-4">Ảnh đăng kí quảng cáo:</span><span className="col-4"> <img src={"http://103.102.46.103:3000/" + item.imageBanner.slice(7)} height={100} width={100} /></span>
                </div>
                <div className="row">
                    <span className="col-4">Vị trí quảng cáo trong trang:</span><span className="col-4">{item.position}</span>
                </div>
                <div className="row">
                    <span className="col-4">Trang quảng cáo:</span><span className="col-4"> {item.page} </span>
                </div>
                <div className="row">
                    <span className="col-4">Hành động:</span><span className="col-4"> {item.action} </span>
                </div>
            </div>
        );
}

export default ChiTietQuangCao;