import React, { useState } from 'react'
import avatar from '../../../src/images/img/avatar.png'
import location from '../../../src/images/img/location-header.png'
import { Modal, Button, Form, Container } from 'react-bootstrap';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { dangNhapAction, dangKyAction } from '../../redux/actions/NguoiDungAction.js'
import logo from '../../../src/images/img/web-logo.png'
import { Link } from 'react-router-dom'

export default function RightHeaderComponent() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [dangNhap, setDangNhap] = useState(true);

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống').min(6, 'Mật khẩu từ 6-32 ký tự').max(32, 'Mật khẩu từ 6-32 ký tự')//.test(/biểu thức chính quy - regular expression/,'mật khẩu phải đúng định dạng'),
        }),
        onSubmit: values => {
            // console.log(values);
            const action = dangNhapAction(values);
            dispatch(action);
        }
    });
    const formikSignIn = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDt: '',
            maLoaiNguoiDung: 'KhachHang',
            maNhom: "GP09",
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống').min(6, 'Mật khẩu từ 6-32 ký tự').max(32, 'Mật khẩu từ 6-32 ký tự'),//.test(/biểu thức chính quy - regular expression/,'mật khẩu phải đúng định dạng'),
            hoTen: '',
            email: Yup.string().required('Email không được bỏ trống'),
            soDt: '',
        }),
        onSubmit: values => {
            const action = dangKyAction(values);
            dispatch(action);
        }
    });
    let tenDangNhap = '';
    let maLoaiNguoiDung = '';
    if (localStorage.getItem('userlogin')) {
        tenDangNhap = JSON.parse(localStorage.getItem('userlogin')).taiKhoan;
        maLoaiNguoiDung = JSON.parse(localStorage.getItem('userlogin')).maLoaiNguoiDung;
    }

    function logOut() {
        localStorage.removeItem('userlogin');
        localStorage.removeItem('accessToken');
        window.location.reload()
    }
    return (
        <div>
            <Modal id="modal" show={show} onHide={handleClose} style={{ marginTop: "3%" }}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-center w-100 " style={{ marginLeft: "18%" }}>
                        <img src={logo} />
                        <div>Thế giới phim trên đầu ngón tay</div>
                    </Modal.Title>
                </Modal.Header>
                <div class="tab-content" id="myTabContent">
                    {(dangNhap ?
                        <form onSubmit={formik.handleSubmit}>
                            <Container style={{ width: "80%" }} className="mt-3">
                                <div className="form-group">
                                    <label>Tài khoản</label>
                                    <input type="text" name="taiKhoan" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.touched && formik.errors.taiKhoan ? <p className="text-danger">{formik.errors.taiKhoan}</p> : ''}
                                </div>
                                <div className="form-group">
                                    <label>Mật khẩu</label>
                                    <input type="password" name="matKhau" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.touched && formik.errors.matKhau ? <p className="text-danger">{formik.errors.matKhau}</p> : ''}
                                </div>
                                <label className="text-center" style={{ fontSize: "0.8rem" }}>
                                    Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
                                </label>
                                <div className="form-group text-light mt-3 mp-5">
                                    <button type="submit" name="" id="" className="btn btn-dangnhap w-100">ĐĂNG NHẬP</button>
                                </div>
                            </Container>
                        </form>
                        :
                        <form onSubmit={formikSignIn.handleSubmit}>
                            <Container style={{ width: "80%" }} className="mt-3">
                                <div className="form-group">
                                    <label>Tài khoản</label>
                                    <input type="text" name="taiKhoan" className="form-control" onChange={formikSignIn.handleChange} onBlur={formikSignIn.handleBlur} />
                                    {formikSignIn.touched && formikSignIn.errors.taiKhoan ? <p className="text-danger">{formikSignIn.errors.taiKhoan}</p> : ''}
                                </div>
                                <div className="form-group">
                                    <label>Mật khẩu</label>
                                    <input type="password" name="matKhau" className="form-control" onChange={formikSignIn.handleChange} onBlur={formikSignIn.handleBlur} />
                                    {formikSignIn.touched && formikSignIn.errors.matKhau ? <p className="text-danger">{formikSignIn.errors.matKhau}</p> : ''}
                                </div>
                                <div className="form-group">
                                    <label>Tên đầy đủ</label>
                                    <input type="text" name="hoTen" className="form-control" onChange={formikSignIn.handleChange} onBlur={formikSignIn.handleBlur} />
                                    {formikSignIn.touched && formikSignIn.errors.hoTen ? <p className="text-danger">{formikSignIn.errors.hoTen}</p> : ''}
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" className="form-control" onChange={formikSignIn.handleChange} onBlur={formikSignIn.handleBlur} />
                                    {formikSignIn.touched && formikSignIn.errors.email ? <p className="text-danger">{formikSignIn.errors.email}</p> : ''}
                                </div>
                                <div className="form-group">
                                    <label>Số điện thoại</label>
                                    <input type="text" name="soDt" className="form-control" onChange={formikSignIn.handleChange} onBlur={formikSignIn.handleBlur} />
                                    {formikSignIn.touched && formikSignIn.errors.soDt ? <p className="text-danger">{formikSignIn.errors.soDt}</p> : ''}
                                </div>
                                <label className="text-center" style={{ fontSize: "0.8rem" }}>
                                    Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
                                </label>
                                <div className="form-group text-light mt-3 mp-5">
                                    <button type="submit" name="" id="" className="btn btn-dangnhap w-100">ĐĂNG KÝ</button>
                                </div>
                            </Container>
                        </form>
                    )}
                </div>
                <Modal.Footer>
                    {(dangNhap ?
                        <div>Nếu chưa có tài khoản <a class="d-inline" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" onClick={() => { setDangNhap(false) }}>Đăng ký ngay</a></div>
                        :
                        <div>Nếu đã có tài khoản <a class="d-inline" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false" onClick={() => { setDangNhap(true) }}>Đăng nhập ngay</a></div>
                    )}
                </Modal.Footer>
            </Modal>
            <div className="right">
                <ul className="navbar-nav mr-auto">
                    <li>
                        <div className="account" style={{ marginTop: "195.6px" }}>
                            {(tenDangNhap !== '' ?
                                <span>
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" style={{ cursor: "pointer" }}>
                                        <img src={`https://i.pravatar.cc/150?u=${tenDangNhap}`} alt="avt" />
                                        <p style={{ display: 'inline-block' }}>{tenDangNhap}</p>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" style={{ cursor: "pointer" }} onClick={logOut}>Đăng xuất</a>
                                        <Link className="nav-link" to="/user" className="dropdown-item" style={{ cursor: "pointer" }}>Xem thông tin tài khoản</Link>
                                        {maLoaiNguoiDung == 'QuanTri' ?
                                            <Link className="nav-link" to="/admin" className="dropdown-item" style={{ cursor: "pointer" }}>Quản lý</Link>
                                            :
                                            ''
                                        }
                                    </div>
                                </span>
                                :
                                <a className="nav-link" id="navbarDropdown" onClick={handleShow} style={{ cursor: "pointer" }}>
                                    <img src={avatar} alt="avt" />
                                    <p style={{ display: 'inline-block' }}> Đăng nhập </p>
                                </a>
                            )}
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <img src={location} alt />
                        <div style={{ display: 'inline' }}>
                            <a aria-haspopup="true" aria-expanded="false" style={{ display: 'inline', padding: 'auto', lineHeight: 30 }}>
                                Hồ Chí Minh
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div >
    )
}



