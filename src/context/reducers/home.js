import { HOME_CATEGORY_FAIL, HOME_CATEGORY_LOADING, HOME_CATEGORY_SUCCESS } from "../../constants/actionTypes";

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


      default:
        return state;
    }
  };
  
  export default Home;
  