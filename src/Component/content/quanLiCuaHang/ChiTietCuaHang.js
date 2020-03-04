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
import autosize from "autosize";
import TextareaAutosize from 'react-textarea-autosize';



const ChiTietCuaHang = () => {
    const [id, setId] = useState(useParams());
    const [isLoading, setIsLoading] = useState(false);
    const [count, setCount] = useState(0);
    const [nameStore, setNameStore] = useState('');
    const [phoneStore, setPhoneStore] = useState('');
    const [description, setDescription] = useState('');
    const [addressStore, setaddressStore] = useState('');
    const [products,setProducts] = useState([]);



    // function fileSelectedHandler(event) {
    //     setImageBanner(event.target.files[0])
    //     console.log(event.target.files[0]);
    // }

    const NameStoreChange = (event) => {
            setNameStore(event.target.value)
           
        console.log(`${nameStore},${phoneStore},${description}`)
    }

    
    const PhoneStoreChange = (event) => {
            setPhoneStore(event.target.value)
           
           
        console.log(`${nameStore},${phoneStore},${description}`)
    }


    const AddressChange = (event) => {
        setaddressStore(event.target.value)
           
        console.log(`${nameStore},${phoneStore},${description}`)
    }

    const DescriptionChange = (event) => {
        setDescription(event.target.value)
        console.log(`${nameStore},${phoneStore},${description}`)

    }

    const update = (event) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://103.102.46.103:3000/store/";
        axios.post(proxyurl + url + id.id, {
            nameStore: nameStore,
            phoneStore: phoneStore,
            description: description,
            addressStore: addressStore
        }).then(res => {
            console.log(res)
            alert("xong rồi đấy")
            window.location.reload();
        }).catch(error => {
            console.log(error)
        })
    }


    useEffect(() => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://103.102.46.103:3000/store/";
        fetch(proxyurl + url + id.id)
            .then(res => res.json())
            .then((data) => {
                setNameStore(data.nameStore)
                setPhoneStore(data.phoneStore)
                setaddressStore(data.addressStore)
                setDescription(data.description)
                setIsLoading(true);
            })
        setCount(100);
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
                    <div className="title-namestore linestore"><b>TÊN CỬA HÀNG:</b><input className="editmode" onChange={NameStoreChange} type="text" name="nameStore" defaultValue={nameStore}></input></div>
                    <div className="except-store linestore">
                        <b>MÔ TẢ:</b><TextareaAutosize className="editmode" onChange={DescriptionChange} name="description" defaultValue={description}></TextareaAutosize>
                    </div>
                    <div className="hotline-store linestore"><b>Địa chỉ:</b><input type="text" onChange={AddressChange} className="editmode" name="addressStore" defaultValue={addressStore}></input></div>
                    <div className="hotline-store linestore"><b>SỐ ĐIỆN THOẠI:</b><input type="text" onChange={PhoneStoreChange} className="editmode" name="phoneStore" defaultValue={phoneStore}></input></div>
                    <div className="product-store"><b>SẢN PHẨM:</b>

                        {products.map(product => (
                            <div className="product-name1 linestore product-name" key={product._id}>
                                <div className="product-detail">
                                    <p><b>Tên sản phẩm:</b> {product.nameProduct}</p>
                                    <p><b>Mô tả:</b>  {product.description}</p>
                                    <p><b>Giá thành:</b>  {product.description}</p>
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
                    <div className="save-prd"><a href="#" onClick={update}><span>LƯU LẠI</span></a></div>
                    <div className="huy-prd"><a href="#"><span>HỦY</span></a></div>
                </div>
            </div>
        )

}


export default ChiTietCuaHang;