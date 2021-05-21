import React, {useState, useEffect, useContext} from 'react';
import {View, Text} from 'react-native';
import Container from '../../components/common/Container';

import Category from '../../components/Home/Category';
import HeaderSearch from '../../components/Home/HeaderSearch';
import Header from '../../components/Home/Header';
import getCategories from '../../context/actions/home/getCategories';
import {GlobalContext} from '../../context/Provider';
import Loader from '../../components/Home/Loader';
import PTRView from 'react-native-pull-to-refresh';


const Home = () => {
  const {
    homeDispatch,
    homeState: {loading, error},
  } = useContext(GlobalContext);
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);
  const data = useContext(GlobalContext);
  const [categoryList, setcategoryList] = useState({});
  const [homeLoader, setHomeLoader] = useState(true);


  const getCategoryFunction = () => {
    getCategories()(homeDispatch)(response => {
      setcategoryList(response);
    });
  };

  useEffect(() => {
    getCategoryFunction();
  }, []);



  useEffect(() => {
      setHomeLoader(loading);
  }, [loading]);


  const  _refresh = () => {
    return new Promise((resolve) => {
      setTimeout(()=>{
        setHomeLoader(true);
        getCategoryFunction();
        resolve();
      }, 2000)
    });
  };

  console.log('home loading:>>>.',homeLoader);

  return (
    <>
      <PTRView onRefresh={_refresh} >

        <View>
          <Container>
            <View>
              <Header />
              <HeaderSearch />
              {!loading ? (<Category categoryList={categoryList} />) : (<Loader />) }


            </View>
          </Container>
        </View>
      </PTRView>
    </>
  );
};

export default Home;
