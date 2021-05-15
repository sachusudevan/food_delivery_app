import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

export default ({
  password,
  username,
}) => dispatch => {
  dispatch({
    type: LOGIN_LOADING,
  });

  console.log('username: >>>', username);
  console.log('password: >>>', password);
  axiosInstance
    .post('login', {
      password,
      username,
    })
    .then(res => {
      console.log('success  res.data : >>>', res.data);
      AsyncStorage.setItem("token", res.data.token);
      AsyncStorage.setItem("refreshtoken", res.data.refresh);
      AsyncStorage.setItem("user", JSON.stringify(res.data.user));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      // console.log('error res :>>> ',err.response.data);
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response
          ? err.response.data
          : {detail: 'Something went wrong!'},
      });
    });
};
