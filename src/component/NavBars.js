import React from 'react'
import { Link } from "react-router-dom"
import Dropdown from "react-bootstrap/Dropdown"
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
                            (<div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        {this.state.detailUser.hoTen}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3"><span onClick={this.handleLogInOut}>Đăng Xuất</span></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </div>)}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
