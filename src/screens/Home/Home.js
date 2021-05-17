import React from 'react';
import {View, Text} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../../components/common/Container';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconBadge from 'react-native-icon-badge';
import SearchBar from 'react-native-dynamic-search-bar';

const HeaderScreen = () => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View>
          <MaterialCommunityIcons
            name="briefcase-variant-outline"
            size={30}
            color={colors.tabBarIcon}
          />
        </View>
        <View style={{flex: 1, flexDirection: 'column', marginLeft: 10}}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Work</Text>
          <Text style={{fontSize: 11}}>Technopark, Trivandrum</Text>
        </View>
      </View>
      <View>
        <IconBadge
          MainElement={
            <Ionicons
              name="md-notifications-outline"
              size={30}
              color={colors.tabBarIcon}
            />
          }
          BadgeElement={
            <Text style={{color: '#FFFFFF', fontSize: 8}}>99+</Text>
          }
          IconBadgeStyle={{
            height: 15,
            backgroundColor: colors.NotificationBadgecolor,
          }}
          // Hidden={true}
        />
      </View>
    </View>
  );
};

const SearchScreen = () => {
  return (
    <View style={{marginTop: 10}}>
      <SearchBar
        style={{
          width: '100%',
          borderWidth: 1,
          borderColor: colors.SearchBarBorder,
          borderRadius: 7,
        }}
        // darkMode={true}
        textInputStyle={{
          color: colors.SearchBarBorder,
          textDecorationColor: colors.white,
        }}
        // fontColor="#c6c6c6"
        iconColor="#d63031"
        // shadowColor="#282828"
        // cancelIconColor="#c6c6c6"
        // backgroundColor="#353d5e"
        placeholder="Find a food or restaurent"
        // onChangeText={(text) => this.filterList(text)}
        onSearchPress={() => console.log('Search Icon is pressed')}
        // onClearPress={() => this.filterList("")}
        onPress={() => alert('onPress')}
      />
    </View>
  );
};

const Home = () => {
  return (
    <View>
      <Container>
        <View>
          <HeaderScreen />
          <SearchScreen />
        </View>
      </Container>
    </View>
  );
};

export default Home;
