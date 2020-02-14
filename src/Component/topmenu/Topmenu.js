import React, { Component } from 'react';

class Topmenu extends Component {
    render() {
        return (
            <div className="row border topmenu">
                <div className="col-2">
                </div>
                <div className="col-4">
                    Quản lí tài khoản / quản lí cửa hàng / Cửa hàng món HUế
                </div>
                <div className="col-1 profileOptions" />
                <div className="col-1 profileOptions" />
                <div className="col-1 profileOptions">
                </div>
                <div className="col-2 profileOptions">
                    <p>Trung admin</p>
                </div>
                <div className="col-1">
                    <img src="https://scontent.fhan5-1.fna.fbcdn.net/v/t1.0-0/p640x640/78873116_2482866802037227_8658325400658640896_o.jpg?_nc_cat=109&_nc_ohc=AMIcv0EAfHwAX-lgMtk&_nc_ht=scontent.fhan5-1.fna&_nc_tp=6&oh=4b585311e6568be215771b650e03b2f6&oe=5ECD715F" width={50} height={50} />
                </div>
            </div>
        );
    }
}

export default Topmenu;