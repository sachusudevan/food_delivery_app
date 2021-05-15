import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGOUT_USER,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../../constants/actionTypes';

  const auth = (state, {type, payload}) => {
    switch (type) {
      
      case LOGIN_LOADING:
      case REGISTER_LOADING:
        return {
          ...state,
          loading: true,
        };

      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          data: payload,
          isLoggedIn: true,
          error:null,
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          loading: false,
          data: payload,
          error:null,
        };
      case LOGOUT_USER:
        return {
          ...state,
          loading: false,
          data: null,
          isLoggedIn: false,
        };

      case LOGIN_FAIL:
      case REGISTER_FAIL:
        return {
          ...state,
          loading: false,
          error: payload,
        };

      case CLEAR_AUTH_STATE:
        return {
          ...state,
          loading: false,
          data: null,
          error: null,
        };


      default:
        return state;
    }
  };
  
  export default auth;
  