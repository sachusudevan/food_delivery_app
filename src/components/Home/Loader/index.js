import React from 'react';
import {View, Text} from 'react-native';
import ContentLoader from 'react-native-content-loader'
import {Circle, Rect} from 'react-native-svg'
import { ScrollView } from 'react-native-gesture-handler';

const index = () => {
  return (
    <View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <ScrollView horizontal={true}>
          <ContentLoader
            primaryColor="#fff0f6"
            secondaryColor="#f783ac"
            height={75}
            width={70}>
            <Circle cx="30" cy="30" r="25" />
            <Rect x="5" y="60" rx="3" ry="3" width="50" height="10" />
          </ContentLoader>
          <ContentLoader
            primaryColor="#fff0f6"
            secondaryColor="#f783ac"
            height={75}
            width={70}>
            <Circle cx="30" cy="30" r="25" />
            <Rect x="5" y="60" rx="3" ry="3" width="50" height="10" />
          </ContentLoader>
          <ContentLoader
            primaryColor="#fff0f6"
            secondaryColor="#f783ac"
            height={75}
            width={70}>
            <Circle cx="30" cy="30" r="25" />
            <Rect x="5" y="60" rx="3" ry="3" width="50" height="10" />
          </ContentLoader>
          <ContentLoader
            primaryColor="#fff0f6"
            secondaryColor="#f783ac"
            height={75}
            width={70}>
            <Circle cx="30" cy="30" r="25" />
            <Rect x="5" y="60" rx="3" ry="3" width="50" height="10" />
          </ContentLoader>
          <ContentLoader
            primaryColor="#fff0f6"
            secondaryColor="#f783ac"
            height={75}
            width={70}>
            <Circle cx="30" cy="30" r="25" />
            <Rect x="5" y="60" rx="3" ry="3" width="50" height="10" />
          </ContentLoader>
          <ContentLoader
            primaryColor="#fff0f6"
            secondaryColor="#f783ac"
            height={75}
            width={70}>
            <Circle cx="30" cy="30" r="25" />
            <Rect x="5" y="60" rx="3" ry="3" width="50" height="10" />
          </ContentLoader>
          <ContentLoader
            primaryColor="#fff0f6"
            secondaryColor="#f783ac"
            height={75}
            width={70}>
            <Circle cx="30" cy="30" r="25" />
            <Rect x="5" y="60" rx="3" ry="3" width="50" height="10" />
          </ContentLoader>
          <ContentLoader
            primaryColor="#fff0f6"
            secondaryColor="#f783ac"
            height={75}
            width={70}>
            <Circle cx="30" cy="30" r="25" />
            <Rect x="5" y="60" rx="3" ry="3" width="50" height="10" />
          </ContentLoader>
        </ScrollView>
      </View>
    </View>
  );
};

export default index;
