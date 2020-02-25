import React, { Component } from 'react';
import suaIcon from '../../../images/icon-sua.png';
import xoaIcon from '../../../images/icon-xoa.png';
import themIcon from '../../../images/icon-them.png';
import axios from 'axios';



class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameProduct: '',
            description: '',
            priceProduct: '',
            imageProduct: null,
        }
    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,

        })

        console.log(this.state)

    }

    fileSelectedHandler = (event) => {
        this.setState({
            imageProduct: event.target.files[0]
        })
        this.setState({

        })

    }
    addButtonHandler = (event) => {

        const proxyurl = "https://cors-anywhere.herokuapp.com/"
        const url = 'http://103.102.46.103:3000/product';
        event.preventDefault();
        const fd = new FormData();
        fd.append('imageProduct', this.state.imageProduct, this.state.imageProduct.name);
        fd.append('nameProduct', this.state.nameProduct);
        fd.append('description', this.state.description);
        fd.append('priceProduct', this.state.priceProduct);
        fd.append('storeId', this.props.storeId);
        axios.post(proxyurl + url, fd).then(response => {
            console.log(response);
            alert(' thêm quảng cáo thành công');
            window.location.reload();
        }).catch(error => {
            console.log(error);
            alert('upload failed');
        });
    }

    render() {
        const { nameProduct,
            description,
            priceProduct,
        } = this.state;
        return (
            <div>
                <div className="popup-addProduct"><span className="col-3">Tên sản phẩm:</span><span className="col-5"><input value={nameProduct} onChange={this.onChangeHandler} name="nameProduct" type="text" /></span></div>
                <div className="popup-addProduct"><span className="col-3">Mô tả:</span><span className="col-5"><input value={description} onChange={this.onChangeHandler} name="description" type="text" /></span></div>
                <div className="popup-addProduct"><span className="col-3">Giá tiền:</span><span className="col-5"><input value={priceProduct} onChange={this.onChangeHandler} name="priceProduct" type="text" /></span></div>
                <div className="popup-addProduct"><span className="col-3">Ảnh:</span><span className="col-5" ><input onChange={this.fileSelectedHandler} type="file"></input></span></div>
                <div className="popup-addProduct-button"><input onClick={this.addButtonHandler} type="image" src={themIcon} /></div>
                {/* <div className="add-banner " onClick={this.addButtonHandler}><button type="button" className="button addbt">Thêm mới</button></div> */}

            </div>);
    }
}

export default AddProduct;