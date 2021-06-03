import Axios from "axios";
import * as ActionType from "../constants/ActionType";
//  get list movie
export const actGetListMovieAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09",
    })
      .then((rs) => {
        dispatch(actGetListMovie(rs.data));
      })
      .catch((err) => { });
  };
};

export const actGetListMovie = (listMovie) => {
  return {
    type: ActionType.GET_LIST_MOVIE,
    data: listMovie,
  };
};



// lấy danh sách cụm rạp
export const actGetInformationShowTimeAPI = (idMovie) => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idMovie}`
    }).then((rs) => {
      dispatch(actGetInformationShowTime(rs.data))
    }).catch((err) => {
      console.log(err.response.data);
    })
  }
}
export const actGetInformationShowTime = (listShowTime) => {
  return {
    type: ActionType.GET_LIST_SHOW_TIME,
    data: listShowTime
  }
}