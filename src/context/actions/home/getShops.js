import {
    HOME_SHOP_LOADING,
    HOME_SHOP_SUCCESS,
    HOME_SHOP_FAIL,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

export default () => dispatch => onSuccess => {
  dispatch({
    type: HOME_SHOP_LOADING,
  });
  axiosInstance
    .get('products/shops/shops')
    .then(res => {
      dispatch({
        type: HOME_SHOP_SUCCESS,
    //     payload: res.data,
      });
      onSuccess(res.data);
    })
    .catch(err => {
        console.log('err :>>>>>', err);
      dispatch({
        type: HOME_SHOP_FAIL,
        payload: err.response
          ? err.response.data
          : {detail: 'Something went wrong!'},
      });
    });
};
