import {
  HOME_CATEGORY_FAIL,
  HOME_CATEGORY_LOADING,
  HOME_CATEGORY_SUCCESS,
  HOME_SHOP_FAIL,
  HOME_SHOP_LOADING,
  HOME_SHOP_SUCCESS,
} from '../../constants/actionTypes';

const Home = (state, {type, payload}) => {
  switch (type) {
    case HOME_CATEGORY_LOADING:
      return {
        ...state,
        loading: true,
      };

    case HOME_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case HOME_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case HOME_SHOP_LOADING:
      return {
        ...state,
        shoploading: true,
      };

    case HOME_SHOP_SUCCESS:
      return {
        ...state,
        shoploading: false,
      };

    case HOME_SHOP_FAIL:
      return {
        ...state,
        shoploading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default Home;
