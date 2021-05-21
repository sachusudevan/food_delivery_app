import React from 'react';
import {View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconBadge from 'react-native-icon-badge';
import colors from '../../../assets/theme/colors';


const Header = () => {
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

export default Header;
