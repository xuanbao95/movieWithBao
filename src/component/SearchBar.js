import React, { Component } from 'react'
import { connect } from "react-redux"
import * as action from "../redux/action"
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
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



    render() {
        return (
            <div className="search_bar" name="test3">
                {this.renderTenPhim()}
                {this.renderHeThongRap()}
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