import React, { Component, useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import Popup from "reactjs-popup";
import axios from 'axios';
import addImage from '../../../images/add-img.jpg';
import AddProduct from './AddProduct';




const ChiTietCuaHang = () => {
    const [id, setId] = useState(useParams());
    const [item, setItem] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [count, setCount] = useState(0);
    // const [imageBanner, setImageBanner] = useState(null);
    // const [nameProduct,setNameProduct] = useState(null);
    // const [description,setDescription] = useState(null);
    // const [priceProduct,setPriceProduct] = useState(null);
    const [products, setProducts] = useState([]);


    // function fileSelectedHandler(event) {
    //     setImageBanner(event.target.files[0])
    //     console.log(event.target.files[0]);
    // }



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
        const proxyurl2 = "https://cors-anywhere.herokuapp.com/";
        const url2 = "http://103.102.46.103:3000/products/list_products_store/" + id.id;
        fetch(proxyurl2 + url2).then(res => res.json()).then(querryProduct => {
            setProducts(querryProduct);
        }).catch(error => {
            console.log(error);
        })
        setCount(100);
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
                    
                        {products.map(product => (
                            <div className="product-name1 linestore product-name" key={product._id}>
                                <div className="product-detail"><b>Tên sản phẩm:</b> {product.nameProduct}<br />
                                    <p><b>MÔ TẢ:</b>  {product.description}</p>
                                </div>
                                <div className="product-img"><img src={"http://103.102.46.103:3000/" + product.imageProduct.slice(7)} height={100} width={100} /> <input type="checkbox" /></div>
                            </div>
                        ))}

                        <div className="product-name1 linestore product-name">
                            <div className="image-upload">
                                <label >
                                    <Popup trigger={<img src={addImage} alt="add img" />} position="right center">
                                        <AddProduct storeId={id.id} ></AddProduct>
                                    </Popup>
                                </label>
                            </div>
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