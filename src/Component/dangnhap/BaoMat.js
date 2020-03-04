import React, { Component } from 'react';
import DangNhap from './DangNhap';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from '../content/homePage/HomePage';

class BaoMat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInStatus: false,
            user: []
        }


    }

    handleLogin(data) {
        this.setState({
            loggedInStatus: true,
            user: data
        });

    }



    // render() {
    //     const { loggedInStatus } = this.state;
    //     if (loggedInStatus) {
    //         return (
    //             <Redirect to="/HomePage" />
    //         )
    //     }
    //     return (
    //         <div>
    //             <Route path="/" >
    //                 <DangNhap handleLogin={this.handleLogin}></DangNhap>
    //             </Route>
    //         </div>
    //     );

    // }
    render() {
        return (
            <div>
                <DangNhap></DangNhap>
                {/* <Route exact path="/DangNhap" component={DangNhap} />
                    <Route path="/HomePage" component={HomePage} />
                    <Redirect to="/DangNhap" /> */}
            </div>
        )
    }
}

export default BaoMat;