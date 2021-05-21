import {
    HOME_CATEGORY_LOADING,
    HOME_CATEGORY_SUCCESS,
    HOME_CATEGORY_FAIL
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

export default () => dispatch => onSuccess => {
  dispatch({
    type: HOME_CATEGORY_LOADING,
  });
  axiosInstance
    .get('products/categories/list')
    .then(res => {
      dispatch({
        type: HOME_CATEGORY_SUCCESS,
        // payload: res.data,
      });
      onSuccess(res.data);
    })
    .catch(err => {
        console.log('err :>>>>>', err);
      dispatch({
        type: HOME_CATEGORY_FAIL,
        payload: err.response
          ? err.response.data
          : {detail: 'Something went wrong!'},
      });
    });
};
