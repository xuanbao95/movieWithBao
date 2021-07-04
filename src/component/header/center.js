import React from 'react'

export default function CenterHeaderComponent(props) {
    let center = props.center;
    // console.log(center);
    switch (center) {
        case 'home': {
            return (
                <div className="center">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#film__content">Lịch chiếu <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Cụm rạp <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Tin tức <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Ứng dụng <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            )
        }
        case 'userPage': {
            return (
                <div className="center">
                    THÔNG TIN TÀI KHOẢN
                </div>
            )
        }
        case 'admin': {
            return (
                <div className="center">
                    QUẢN LÝ
                </div>
            )
        }
        default: return <div></div>
    }
}
