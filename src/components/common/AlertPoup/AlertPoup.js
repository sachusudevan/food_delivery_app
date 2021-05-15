import React , {useContext} from 'react';
import {View, Text, StyleSheet , Animated, Modal, Image} from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import colors from '../../../assets/theme/colors';
import { LOGIN_FAIL } from '../../../constants/actionTypes';
import { GlobalContext } from '../../../context/Provider';


const AlertPoup = ({visible, setVisible, icon, title , message})  => {

  const {authDispatch, authState: {error}} = useContext(GlobalContext);

  const claerErrorState = () => dispatch => {
    setVisible(false);
    dispatch({
      type: LOGIN_FAIL,
      payload:null
    });
  }

  const ModelAlert = ({visible, children}) => {


    const [showModal, setShowModal] = React.useState(visible);

    const scaleValue = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {

      toggleModal();

    }, [visible]);

    const toggleModal = () => {

      if (visible) {

        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();

      } else {

        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();

      }

    };

    return (
      <>
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
      </>
    );
  };

  return (

    <ModelAlert visible={visible} >
      <View style={{alignItems: 'center'}}>
          
        </View>
        <View style={{alignItems: 'center'}}>
          
          <Image
            source={icon}
            style={{height: 100, width: 100, marginVertical: 10}}
          />
        </View>

        <Text style={{marginVertical: 10, fontWeight: "bold" , fontSize:25,  textAlign: 'center'}}>
          {title}
        </Text>
        <Text style={{ paddingBottom:20 , fontSize: 16, textAlign: 'center'}}>
          {message}
        </Text>

        <GradientButton
          text="Ok"
          textStyle={{fontSize:15}}
          gradientBegin={colors.Gbutton_secondary}
          gradientEnd={colors.Gbutton_primary}
          gradientDirection="diagonal"
          height={40}
          radius={50}
          impact
          impactStyle="Light"
          onPressAction={() => claerErrorState()(authDispatch)}
        />
    </ModelAlert>

  );



};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '70%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default AlertPoup;
