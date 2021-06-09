import React, { Component } from 'react'
import { connect } from "react-redux"
import * as action from "../redux/action"
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from "@material-ui/core/Button"
class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tenPhim: "",
            maPhim: '',
            tenHeThongRap: "",
            tenRap: "",
            ngayXem: "",
            gioXem: "",
            maLichChieu: null,
            btnValid: false
        }
    }
    renderTenPhim = () => {
        let { listMovie } = this.props;
        // console.log(listMovie);
        if (listMovie) {
            let arr = listMovie.map((item) => {
                return item.tenPhim;
            });
            return (
                <div style={{ width: 200 }}>
                    <Autocomplete
                        options={arr}
                        onChange={(event, newValue) => {
                            console.log(newValue);
                            if (newValue !== null) {
                                this.setState({
                                    tenPhim: newValue,
                                    tenHeThongRap: "",
                                    tenRap: "",
                                    ngayXen: "",
                                    gioXem: "",
                                    btnValid: false

                                },
                                    () => {
                                        //closua
                                        let movie = listMovie.find((movie) => {
                                            return movie.tenPhim === this.state.tenPhim
                                        })
                                        this.setState({
                                            maPhim: movie.maPhim,
                                        })
                                        this.props.getListShowTime(movie.maPhim)
                                    })

                            }
                        }}
                        //   value = {this.state.tenPhim}
                        renderInput={(params) => {
                            return (
                                <TextField
                                    {...params}
                                    id="tenPhim"
                                    label="Phim"
                                    margin="normal"
                                    variant="outlined"
                                />
                            );
                        }}
                    />
                </div>
            );
        }
    };
    renderHeThongRap = () => {
        let { heThongRapChieu } = this.props.listMovieShowTime;
        console.log(heThongRapChieu);
        if (heThongRapChieu) {
            let arr = heThongRapChieu.map((heThongRap) => {
                return heThongRap.tenHeThongRap;
            });
            return (
                <div style={{ width: 200 }}>
                    <Autocomplete
                        value={this.state.tenHeThongRap}
                        options={arr}
                        onChange={(event, newValue) => {
                            this.setState({
                                ...this.state,
                                tenHeThongRap: newValue,
                                tenRap: "",
                                ngayXem: "",
                                gioXem: "",
                                btnValid: false,
                            })
                        }}
                        renderInput={(params) => {
                            return (
                                <TextField
                                    {...params}
                                    label="he thong rap"
                                    margin="normal"
                                    variant="outlined"
                                />
                            );
                        }}
                    />
                </div>
            );
        } else {
            return (
                <div style={{ width: 200 }}>
                    <Autocomplete
                        value={this.state.tenHeThongRap}
                        options={["vui long chon ten phim"]}

                        renderInput={(params) => {
                            return (
                                <TextField
                                    {...params}
                                    label="he thong rap"
                                    margin="normal"
                                    variant="outlined"
                                />
                            );
                        }}
                    />
                </div>
            );
        }
    };

    renderRap = () => {
        let { heThongRapChieu } = this.props.listMovieShowTime;
        let { tenHeThongRap } = this.state;
        if (heThongRapChieu && tenHeThongRap) {
            let heThongRap = heThongRapChieu.find((heThongRap) => {
                return heThongRap.tenHeThongRap === tenHeThongRap;
            })
            let arr = heThongRap.cumRapChieu.map((rap) => {
                return rap.tenCumRap;
            });
            return (
                <div style={{ width: 200 }}>
                    <Autocomplete
                        value={this.state.tenRap}
                        options={arr}
                        onChange={(event, newValue) => {
                            this.setState({
                                ...this.state,

                                tenRap: newValue,
                                ngayXem: "",
                                gioXem: "",
                                btnValid: false
                            })
                        }}
                        renderInput={(params) => {
                            return (
                                <TextField
                                    {...params}
                                    label="tên rap"
                                    margin="normal"
                                    variant="outlined"
                                />
                            );
                        }}
                    />
                </div>
            );
        } else {
            return (
                <div style={{ width: 200 }}>
                    <Autocomplete
                        value={this.state.tenRap}
                        options={["vui lòng chọn rạp"]}
                        renderInput={(params) => {
                            return (
                                <TextField
                                    {...params}
                                    label="tên rap"
                                    margin="normal"
                                    variant="outlined"
                                />
                            );
                        }}
                    />
                </div>
            );
        }


    }
    renderNgayXem = () => {
        let { heThongRapChieu } = this.props.listMovieShowTime;
        let { tenPhim, tenRap, tenHeThongRap } = this.state;
        if (heThongRapChieu && tenPhim && tenRap && tenHeThongRap) {
            let heThongRap = heThongRapChieu.find((item) => {
                return item.tenHeThongRap === tenHeThongRap
            })
            let rap = heThongRap.cumRapChieu.find((item) => {
                return item.tenCumRap === tenRap;
            })
            const listDay = new Set(
                rap.lichChieuPhim.map((lichChieu) => {
                    return new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString();
                })
            );
            const listDayUpdate = [...listDay];
            return (
                <div style={{ width: 200 }}>
                    <Autocomplete
                        value={this.state.ngayXem}
                        options={listDayUpdate}
                        onChange={(event, newValue) => {
                            this.setState({
                                ...this.state,
                                ngayXem: newValue,
                                gioXem: "",
                                btnValid: false
                            })
                        }}
                        renderInput={(params) => {
                            return (
                                <TextField
                                    {...params}
                                    label="ngày chiếu"
                                    margin="normal"
                                    variant="outlined"
                                />
                            );
                        }}
                    />
                </div>
            );
        } else {
            return (
                <div style={{ width: 200 }}>
                    <Autocomplete
                        value={this.state.ngayXem}
                        options={["vui lòng chọn phim,rạp phim,hệ thống rạp"]}
                        renderInput={(params) => {
                            return (
                                <TextField
                                    {...params}
                                    label="ngày xem"
                                    margin="normal"
                                    variant="outlined"
                                />
                            );
                        }}
                    />
                </div>
            );
        }
    }
    renderGioXem = () => {
        let moment = require("moment");
        let { heThongRapChieu } = this.props.listMovieShowTime;
        let { tenPhim, tenRap, tenHeThongRap, ngayXem } = this.state;
        if (heThongRapChieu && tenPhim && tenRap && tenHeThongRap && ngayXem) {
            let heThongRap = heThongRapChieu.find((item) => {
                return item.tenHeThongRap === tenHeThongRap;
            });
            let rap = heThongRap.cumRapChieu.find((item) => {
                return item.tenCumRap === tenRap;
            })
            const listTime = new Set(
                rap.lichChieuPhim.map((lichChieu) => {
                    return new moment(lichChieu.ngayChieuGioChieu).format("HH:MM:A");
                })
            );
            const listTimeUpdate = [...listTime];
            return (
                <div style={{ width: 200 }}>
                    <Autocomplete
                        value={this.state.gioXem}
                        options={listTimeUpdate}
                        onChange={(event, newValue) => {
                            this.setState({
                                ...this.state,
                                gioXem: newValue,
                                btnValid: false
                            }, () => {
                                this.checkBTN()
                            })
                        }}
                        renderInput={(params) => {
                            return (
                                <TextField
                                    {...params}
                                    label="giờ chiếu"
                                    margin="normal"
                                    variant="outlined"
                                />
                            );
                        }}
                    />
                </div>
            );
        } else {
            return (<div style={{ width: 200 }}>
                <Autocomplete
                    value={this.state.gioXem}
                    options={["vui lòng chọn tất cả các mục"]}
                    renderInput={(params) => {
                        return (
                            <TextField
                                {...params}
                                label="giờ chiếu"
                                margin="normal"
                                variant="outlined"
                            />
                        );
                    }}
                />
            </div>
            )
        }
    }
    checkBTN = () => {
        let { tenPhim, tenRap, tenHeThongRap, ngayXem, gioXem } = this.state;
        if (tenPhim && tenRap && tenHeThongRap && ngayXem && gioXem) {
            this.setState({
                ...this.state,
                btnValid: true
            })
        }
    }
    render() {
        return (
            <div className="search_bar" name="test3">
                {this.renderTenPhim()}
                {this.renderHeThongRap()}
                {this.renderRap()}
                {this.renderNgayXem()}
                {this.renderGioXem()}
                <Button className="buyTicket"
                    variant="contained" color="secondary"
                    disabled={!this.state.btnValid}
                > Mua Vé</Button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        listMovie: state.movieReducer.listMovie,
        listMovieShowTime: state.movieReducer.listMovieShowTime,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getListShowTime: (idMovie) => {
            dispatch(action.actGetInformationShowTimeAPI(idMovie))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)