import React, { Component, useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";


const ChiTietCuaHang = () => {
    const [id, setId] = useState(useParams());
    const [item, setItem] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://103.102.46.103:3000/store/";
        fetch(proxyurl + url + id.id)
            .then(res => res.json())
            .then((data) => {
                setItem(data);
                setIsLoading(true);
            })
        setCount(100);
        console.log(item);
    }, [count]);

    if (!isLoading) {
        return <div>Loading....</div>
    } else
        return (
            <div className="container-right">
                <div className="content-top">
                    <div className="title-left quanlych">Chi tiết cửa hàng</div>
                </div>
                <div className="content-chitiet">
                    <div className="title-namestore linestore"><b>TÊN CỬA HÀNG:</b> {item.nameStore}</div>
                    <div className="except-store linestore">
                        <p><b>MÔ TẢ:</b>  {item._id + ","}</p>
                    </div>
                    <div className="hotline-store linestore"><b>SỐ ĐIỆN THOẠI:</b> {item.phoneStore}</div>
                    <div className="product-store"><b>SẢN PHẨM:</b>
                        <div className="product-name1 linestore product-name">
                            <div className="product-detail">Tên sản phẩm:<br />
                                Mô tả:<br />
                                ....
                              </div>
                            <div className="product-img"><img src="https://product.hstatic.net/1000321582/product/com-ga-xao-sa-ot_70bfc84a0ec04c69b883b0352b682add_master.jpg" alt="" height={100} width={100} /> <input type="checkbox" /></div>
                        </div>
                    </div>
                </div>
                <div className="content-bottom">
                    <div className="save-prd"><a href="#"><span>LƯU LẠI</span></a></div>
                    <div className="huy-prd"><a href="#"><span>HỦY</span></a></div>
                </div>
            </div>
        )

}


export default ChiTietCuaHang;