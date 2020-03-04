import React, { Component } from 'react';
import SideMenu from '../../router/SideMenu';
import Content from '../Content';
import { Router } from 'react-router-dom';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.data;
        // state = {
        //     loggedInStatus: true,
        //     user: this.state.user
        // }
    }



    render() {
        return (
            <div className="test">
                <SideMenu user={this.state} ></SideMenu>
                <Content ></Content>
            </div>
        );
    }
}

export default HomePage;