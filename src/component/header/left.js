
import React from 'react'
import logo from '../../../src/images/img/logo2.png'

export default function LeftHeaderComponent() {
    return (
        <div className="left pl-5">
            <a className="navbar-brand" href="#">
                <img src={logo} alt />
            </a>
        </div>
    )
}
