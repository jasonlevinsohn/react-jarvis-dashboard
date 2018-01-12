import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';

class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <AppBar
                    title="L3 Dashboard"
                />
            </div>
        );
    }
}

export default Header;
