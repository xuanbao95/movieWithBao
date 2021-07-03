import React from 'react'
import { Link } from "react-router-dom"
import logo from "../../src/images/img/movie-time-neon-logo-cinema-night-neon-vector-21852342.jpg"
export default class NavBars extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            detailUser: {}
        }
    }
    componentDidMount() {
        if (JSON.parse(localStorage.getItem("user"))) {
            this.setState({
                detailUser: JSON.parse(localStorage.getItem("user"))
            })
        } else {
            this.setState({
                detailUser: null
            })
        }
    }
    handleLogInOut = () => {
        localStorage.removeItem("user")
        this.setState({
            detailUser: null
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="navbar">
                    <div className="nav-img">
                        <img src={logo} alt="123" />
                    </div>
                    <div className="">
                        <h3>Hollywood in town</h3>
                    </div>
                    <div className="">
                        {this.state.detailUser === null ?
                            (<Link to="/form">Đăng nhập</Link>) :
                            (<div><span>{this.state.detailUser.hoTen}</span><span onClick={this.handleLogInOut}> | thoat</span></div>)}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
