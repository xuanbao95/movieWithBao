import React, { Component } from 'react'
import { connect } from "react-redux"
import * as action from "../redux/action"
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from "@material-ui/core/Button"
class Search_Bar extends Component {
    constructor(props) {
        super(props);
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
        if (listMovie) {
            let arr = listMovie.map((item) => {
                return item.tenPhim;
            });
            return (
                <div>
                    <Autocomplete
                        options={arr}
                        onChange={(event, newValue) => {
                            if (newValue !== null) {
                                this.setState({
                                    tenPhim: newValue,

                                    tenHeThongRap: "",
                                    tenRap: "",
                                    ngayXem: "",
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
                                        this.props.getActListShowTime(movie.maPhim)
                                    })
                            }


                        }}
                        renderInput={(params) => {
                            return (
                                <TextField
                                    {...params}
                                    id="tenPhim"
                                    label="Phim"
                                    margin="normal"
                                    variant="outlined"
                                />
                            )
                        }}
                    />
                </div>
            )
        }
    }
    renderHeThongRap = () => {
        let { heThongRapChieu } = this.props.listShowTime;
        if (heThongRapChieu) {
            let arr = heThongRapChieu.map((item) => {
                return item.tenHeThongRap;
            });
            return (
                <div>
                    <Autocomplete
                        value={this.props.tenHeThongRap}
                        options={arr}
                        onChange={(event, newValue) => {
                            if (newValue !== null) {
                                this.setState({
                                    ...this.state,
                                    tenHeThongRap: newValue,
                                    tenRap: "",
                                    ngayXem: "",
                                    gioXem: "",
                                    btnValid: false
                                })
                            }
                        }}
                        renderInput={(params) => {
                            return (
                                <TextField
                                    {...params}
                                    label="Phim"
                                    margin="normal"
                                    variant="outlined"
                                />
                            )
                        }}
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <Autocomplete
                        value={this.props.tenHeThongRap}
                        options={["vui long chon ten phim"]}
                        onChange={(event, newValue) => {
                            if (newValue !== null) {
                                this.setState({
                                    ...this.state,
                                    tenHeThongRap: newValue,
                                    tenRap: "",
                                    ngayXem: "",
                                    gioXem: "",
                                    btnValid: false
                                })
                            }
                        }}
                        renderInput={(params) => {
                            return (
                                <TextField
                                    {...params}
                                    label="Phim"
                                    margin="normal"
                                    variant="outlined"
                                />
                            )
                        }}
                    />
                </div>
            )
        }
    }
    renderTenRap = () => {
        let { heThongRapChieu } = this.props.listShowTime;
        let { tenHeThongRap } = this.state;
        if (heThongRapChieu && tenHeThongRap) {
            let heThongRap = heThongRapChieu.find((heThongRap) => {
                return heThongRap.tenHeThongRap === tenHeThongRap;
            })
            let arr = heThongRap.cumRapChieu.map((rap) => {
                return rap.tenCumRap;
            });
            return (
                <div>
                    <Autocomplete
                        value={this.props.tenRap}
                        options={arr}
                        onChange={(event, newValue) => {
                            if (newValue !== null) {
                                this.setState({
                                    ...this.state,
                                    tenRap: newValue,
                                    ngayXem: "",
                                    gioXem: "",
                                    maLichChieu: null,
                                    btnValid: false
                                })
                            }
                        }}
                        renderInput={(params) => {
                            return (
                                <TextField
                                    {...params}
                                    label="Phim"
                                    margin="normal"
                                    variant="outlined"
                                />
                            )
                        }}
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <Autocomplete
                        value={this.props.tenRap}
                        options={["vui long chon rap"]}
                        onChange={(event, newValue) => {
                            if (newValue !== null) {
                                this.setState({
                                    ...this.state,
                                    tenRap: newValue,
                                    ngayXem: "",
                                    gioXem: "",
                                    maLichChieu: null,
                                    btnValid: false
                                })
                            }
                        }}
                        renderInput={(params) => {
                            return (
                                <TextField
                                    {...params}
                                    label="Phim"
                                    margin="normal"
                                    variant="outlined"
                                />
                            )
                        }}
                    />
                </div>
            )
        }
    }
    renderNgayXem = () => {
        let { heThongRapChieu } = this.props.listShowTime;
        let { tenPhim, tenRap, tenHeThongRap } = this.state;
        if (heThongRapChieu && tenPhim && tenRap && tenHeThongRap) {
            let heThongRap = heThongRapChieu.find((item) => {
                return item.tenHeThongRap === tenHeThongRap
            })
            let rap = heThongRap.cumRapChieu.find((item) => {
                return item.tenCumRap === tenRap;
            })
            const listDay = new Set(
                rap.lichChieuPhim.map((item) => {
                    return new Date(item.ngayChieuGioChieu).toLocaleDateString();
                })
            );
            const listDayUpdate = [...listDay]
            return (
                <div>
                    <Autocomplete
                        value={this.props.ngayXem}
                        options={listDayUpdate}
                        onChange={(event, newValue) => {
                            if (newValue !== null) {
                                this.setState({
                                    ...this.state,

                                    ngayXem: newValue,
                                    gioXem: "",
                                    maLichChieu: null,
                                    btnValid: true
                                })
                            }
                        }}
                        renderInput={(params) => {
                            return (
                                <TextField
                                    {...params}
                                    label="Phim"
                                    margin="normal"
                                    variant="outlined"
                                />
                            )
                        }}
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <Autocomplete
                        value={this.props.ngayXem}
                        options={"vui long chon"}
                        onChange={(event, newValue) => {
                            if (newValue !== null) {
                                this.setState({
                                    ...this.state,

                                    ngayXem: newValue,
                                    gioXem: "",
                                    maLichChieu: null,
                                    btnValid: true
                                })
                            }
                        }}
                        renderInput={(params) => {
                            return (
                                <TextField
                                    {...params}
                                    label="Phim"
                                    margin="normal"
                                    variant="outlined"
                                />
                            )
                        }}
                    />
                </div>
            )
        }
    }
    renderGioXem = () => {
        let moment = require("moment");
        let { heThongRapChieu } = this.props.listShowTime;
        let { tenPhim, tenRap, tenHeThongRap, ngayXem } = this.state;
        if (heThongRapChieu && tenPhim && tenRap && tenHeThongRap && ngayXem) {
            let heThongRap = heThongRapChieu.find((item) => {
                return item.tenHeThongRap === tenHeThongRap
            })
            let rap = heThongRap.cumRapChieu.find((item) => {
                return item.tenCumRap === tenRap;
            })
            const listTime = new Set(
                rap.lichChieuPhim.map((item) => {
                    return new moment(item.ngayChieuGioChieu).format("HH:MM:A");
                })
            );
            const listNewTime = [...listTime]
            return (
                <div>
                    <Autocomplete
                        value={this.props.gioXem}
                        options={listNewTime}
                        onChange={(event, newValue) => {
                            if (newValue !== null) {
                                this.setState({
                                    ...this.state,


                                    gioXem: newValue,
                                    maLichChieu: null,
                                    btnValid: true
                                }, () => {
                                    this.checkBTN()
                                })
                            }
                        }}
                        renderInput={(params) => {
                            return (
                                <TextField
                                    {...params}
                                    label="Phim"
                                    margin="normal"
                                    variant="outlined"
                                />
                            )
                        }}
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <Autocomplete
                        value={this.props.gioXem}
                        options={"vui long chon"}
                        onChange={(event, newValue) => {
                            if (newValue !== null) {
                                this.setState({
                                    ...this.state,

                                    ngayXem: newValue,
                                    gioXem: "",
                                    maLichChieu: null,
                                    btnValid: true
                                })
                            }
                        }}
                        renderInput={(params) => {
                            return (
                                <TextField
                                    {...params}
                                    label="Phim"
                                    margin="normal"
                                    variant="outlined"
                                />
                            )
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
                {this.renderTenRap()}
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
        listShowTime: state.movieReducer.listMovieShowTime,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getActListShowTime: (idMovie) => {
            dispatch(action.actGetInformationShowTimeAPI(idMovie))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search_Bar);