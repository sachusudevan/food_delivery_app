import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {FlatList} from 'react-native';
import {View, Text, Image, SafeAreaView} from 'react-native';
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar';
import colors from '../../../assets/theme/colors';
import Styles from './styles';

const Restaurant = ({shoplist}) => {



  const Item = ({item, onPress}) => {

    return (
      <>
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={{paddingBottom: 10}}>
                <View>
                  <Image
                    style={Styles.shopImage}
                    source={{uri: shoplist.BASE_URL + item.image}}
                  />
                </View>
                <View style={{marginTop: 7}}>
                  <Text
                    style={{color: '#1B1464', fontSize: 18, fontWeight: 'bold'}}>
                    {item.name}
                  </Text>
                  <Text style={{color: colors.subfontcolor, fontWeight: 'bold'}}>
                    Sandwich, FastFood, Beverages
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      marginTop: 5,
                    }}>
                    <StarRatingBar
                      scoreTextStyle={{
                        display: 'none',
                      }}
                      starStyle={{
                        width: 20,
                        height: 20,
                      }}
                      emptyStarColor="#ff6666"
                      tintColor="#ff6666"
                      readOnly={true}
                      continuous={true}
                      score={2.5}
                      allowsHalfStars={true}
                      accurateHalfStars={true}
                    />
                    <Text
                      style={{
                        marginHorizontal: 10,
                        color: '#ff6666',
                        fontSize: 15,
                        fontWeight: 'bold',
                        marginTop: 2,
                      }}>
                      2.5
                    </Text>

                    <Text
                      style={{
                        color: colors.subfontcolor,
                        fontSize: 15,
                        fontWeight: 'bold',
                        marginTop: 2,
                      }}>
                      (250 ratings)
                    </Text>
                  </View>
                </View>
              </View>
        </TouchableWithoutFeedback>
      </>
    );
  };



  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        onPress={() => alert(item.id)}
      />
      
    );
  };

  return (
    <>
      <View style={{paddingTop: 20}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 15,
              color: colors.Gbutton_primary,
              fontWeight: 'bold',
            }}>
            Popular Restaurants
          </Text>
          <Text style={{color: colors.subfontcolor}}>See All</Text>
        </View>

        <SafeAreaView style={{flex: 1}}>
          <FlatList
            data={shoplist.data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
    </>
  );
};

export default Restaurant;
