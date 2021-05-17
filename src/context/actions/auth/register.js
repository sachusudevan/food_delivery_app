import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CLEAR_AUTH_STATE,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

export const clearAuthState = () => dispatch => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};

export default ({
  email,
  password,
  username,
  first_name,
  last_name,
}) => dispatch => onSuccess => {
  dispatch({
    type: REGISTER_LOADING,
  });
  axiosInstance
    .post('auth/register', {
      email,
      password,
      username,
      first_name,
      last_name,
    })
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      onSuccess(res.data);
    })
    .catch(err => {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response
          ? err.response.data
          : {detail: 'Something went wrong!'},
      });
    });
};
