import React,{useState}  from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../../assets/theme/colors';


const Category = ({categoryList}) => {

  const [selectedId, setSelectedId] = useState(null);

  const Item = ({item, onPress, imgborderColor, textColor}) => {

    return (
      <>
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={{paddingRight: 10, paddingLeft: item.key == 1 ? 10 : 0}}>
            <View
              style={{
                flex: 1,
                width: 56,
                height: 56,
                borderColor: imgborderColor.borderColor,
                borderWidth: 1,
                borderRadius: 50,
                alignSelf: 'center',
              }}>
              <Image
                source={{uri: categoryList.BASE_URL + item.image}}
                style={{
                  width: 50,
                  height: 50,
                  marginVertical: 2,
                  marginHorizontal: 2,
                  borderRadius: 50,
                }}
              />
            </View>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'normal',
                color: textColor.color,
              }}>
              {item.name}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </>
    );
  };

  const renderItem = ({item}) => {
    
    const borderColor =
      item.id === selectedId
        ? colors.categoryBorderactiveColor
        : colors.categoryBorderInactiveColor;
    const color =
      item.id === selectedId
        ? colors.categoryNameactiveColor
        : colors.categoryNameInactiveColor;

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        imgborderColor={{borderColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <View style={{paddingTop: 15}}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={categoryList.data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
};

export default Category;
