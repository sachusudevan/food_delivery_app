import React from 'react';
import {View, Text} from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';
import colors from '../../../assets/theme/colors';

const HeaderSearch = () => {
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

export default HeaderSearch;
