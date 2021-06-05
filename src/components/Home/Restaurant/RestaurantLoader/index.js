import React from 'react';
import { ScrollView } from 'react-native';
import {View, Text} from 'react-native';
import ContentLoader from 'react-native-content-loader'
import {Circle, Rect} from 'react-native-svg'


const RestaurantLoader = () => {
  return (
    <View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <ScrollView horizontal={false}>
          <View style={{ alignItems: 'center'}}>
            <ContentLoader 
                  primaryColor="#fff0f6"
                  secondaryColor="#f783ac"
                  duration={700}
                  height={270}>
                <Rect x="0" y="15" rx="4" ry="4" width="50%" height="13"/>
                <Rect x="80%" y="15" rx="4" ry="4" width="20%" height="13"/>
                <Rect x="0" y="40" rx="10" ry="10" width="100%" height="150"/>
                <Rect x="0" y="200" rx="4" ry="4" width="40%" height="20"/>
                <Rect x="0" y="225" rx="4" ry="4" width="50%" height="10"/>
                <Rect x="0" y="240" rx="4" ry="4" width="80%" height="15"/>
            </ContentLoader>
            <ContentLoader 
                  primaryColor="#fff0f6"
                  secondaryColor="#f783ac"
                  duration={700}
                  height={270}>
                <Rect x="0" y="15" rx="4" ry="4" width="50%" height="13"/>
                <Rect x="80%" y="15" rx="4" ry="4" width="20%" height="13"/>
                <Rect x="0" y="40" rx="10" ry="10" width="100%" height="150"/>
                <Rect x="0" y="200" rx="4" ry="4" width="40%" height="20"/>
                <Rect x="0" y="225" rx="4" ry="4" width="50%" height="10"/>
                <Rect x="0" y="240" rx="4" ry="4" width="80%" height="15"/>
            </ContentLoader>
          </View>
          
        </ScrollView>
      </View>
    </View>
  );
};

export default RestaurantLoader;
