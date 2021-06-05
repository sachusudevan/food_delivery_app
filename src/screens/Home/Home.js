import React, {useState, useEffect, useContext} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Container from '../../components/common/Container';

import Category from '../../components/Home/Category';
import HeaderSearch from '../../components/Home/HeaderSearch';
import Header from '../../components/Home/Header';
import getCategories from '../../context/actions/home/getCategories';
import {GlobalContext} from '../../context/Provider';
import Loader from '../../components/Home/Loader';
import PTRView from 'react-native-pull-to-refresh';
import Restaurant from '../../components/Home/Restaurant';
import getShops from '../../context/actions/home/getShops';
import RestaurantLoader from '../../components/Home/Restaurant/RestaurantLoader';

const Home = () => {
  const {
    homeDispatch,
    homeState: {loading, error,shoploading},
  } = useContext(GlobalContext);



  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);
  const data = useContext(GlobalContext);
  const [categoryList, setcategoryList] = useState({});
  const [shopList, setShopList] = useState({});
  const [homeLoader, setHomeLoader] = useState(true);


  const getCategoryFunction = () => {
    getCategories()(homeDispatch)(response => {
      setcategoryList(response);
    });
  };


  const getShopFunction = () => {
    getShops()(homeDispatch)(response => {
      setShopList(response);
    });
  };

  useEffect(() => {
    getCategoryFunction();
    getShopFunction();
  }, []);



  useEffect(() => {
      setHomeLoader(loading);
  }, [loading]);


  const  _refresh = () => {
    return new Promise((resolve) => {
      setTimeout(()=>{
        setHomeLoader(true);
        getCategoryFunction();
        getShopFunction();
        resolve();
      }, 2000)
    });
  };


  return (
    <>
      <PTRView onRefresh={_refresh} >

        <View  >
          <Container >
            <View>
              <Header />
              <HeaderSearch />
              {!loading ? (<Category categoryList={categoryList} />) : (<Loader />) }
              <Restaurant shoplist={shopList}/>
            </View>
          </Container>
        </View>
      </PTRView>
    </>
  );
};

export default Home;
