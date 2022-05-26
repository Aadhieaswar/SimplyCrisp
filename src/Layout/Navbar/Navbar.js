import React, { Component } from "react";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand mb-0 h1">
                    <img src="/logo192.png" alt="simply-crisp-logo" width="30" className="m-1" />
                        Simply Crisp
                    </div>
                </div>
            </nav>
        );
    }
}