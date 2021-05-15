import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import Container from '../common/Container';
import colors from '../../assets/theme/colors';
import styles from './styles';
import {CommonActions, useNavigation} from '@react-navigation/native';

import {LOGIN, REGISTER} from '../../constants/routeName';
import {useState} from 'react';

import {TextField} from 'react-native-material-textfield';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import GradientButton from 'react-native-gradient-buttons';
import AuthSpinner from '../common/AuthLoading';
import { GlobalContext } from '../../context/Provider';

const RegisterComponent = ({form, onSubmit, onChange , errors, error}) => {
  const fieldRef = React.createRef();

  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [isSecureEntryIcon, setIsSecureEntryIcon] = useState('visibility');
  const { authState: {loading} } = useContext(GlobalContext);

  const formatText = text => {
    return text.replace(/^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/, '');
  };

  const onAccessoryPress = () => {
    if (isSecureEntry == true) {
      setIsSecureEntry(false);
      setIsSecureEntryIcon('visibility-off');
    } else {
      setIsSecureEntry(true);
      setIsSecureEntryIcon('visibility');
    }
  };

  const renderPasswordAccessory = () => {
    return (
      <MaterialIcon
        size={24}
        name={isSecureEntryIcon}
        colors={colors.black}
        onPress={onAccessoryPress}
        suppressHighlighting={true}
      />
    );
  };


  

  return (
    <>
    <Container>
      <StatusBar backgroundColor={colors.white} />


      <AuthSpinner
        loading={loading}
      />

      <Image
        source={require('../../assets/images/Auth/signup.png')}
        style={styles.LginImage}
      />

      <View>
        <View style={styles.form}>
          <TextField
            label="First Name"
            onChangeText={value => {
              onChange({name: 'first_name', value});
            }}
            
            formatText={formatText}
            error={errors?.first_name  || error?.first_name}
            ref={fieldRef}
            
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            autoCapitalize="none"
            returnKeyType="next"
          />

          <TextField
            label="Last Name"
            onChangeText={value => {
              onChange({name: 'last_name', value});
            }}
            formatText={formatText}
            ref={fieldRef}
            error={errors?.last_name || error?.last_name}
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            autoCapitalize="none"
            returnKeyType="next"
          />


          <TextField
            label="Username"
            onChangeText={value => {
              onChange({name: 'username', value});
            }}
            formatText={formatText}
            ref={fieldRef}
            error={errors?.username  || error?.username}
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            autoCapitalize="none"
            returnKeyType="next"
          />

          <TextField
            label="Email"
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            formatText={formatText}
            ref={fieldRef}
            error={errors?.email  || error?.email}
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            autoCapitalize="none"
            returnKeyType="next"
          />

          <TextField
            secureTextEntry={isSecureEntry}
            autoCapitalize="none"
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            returnKeyType="done"
            label="Password"
            error={errors?.password  || error?.password}
            maxLength={20}
            characterRestriction={20}
            renderRightAccessory={renderPasswordAccessory}
          />

         
          <View >
            <TouchableOpacity>
              <Text style={styles.termsandcondition}>By clicking Sign Up you agree to the following Terms & Conditions without reservation.</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.GbuttonView}>
            <GradientButton
              style={styles.Gbutton}
              text="Sign Up"
              textStyle={styles.Gbuttonfont}
              gradientBegin={colors.Gbutton_secondary}
              gradientEnd={colors.Gbutton_primary}
              gradientDirection="diagonal"
              height={45}
              width={300}
              radius={50}
              impact
              impactStyle="Light"
              onPressAction={onSubmit}
            />
          </View>
          <View style={styles.socialmedia_wrapper}>
            <View>
              <TouchableOpacity
                // onPress={onPress}
                style={[styles.Sbuttonwrapper, {borderColor: '#d63031'}]}>
                <View style={styles.SbuttonIcon}>
                  <Zocial
                    style={{color: '#d63031'}}
                    size={14}
                    name="googleplus"
                    colors={colors.black}
                    suppressHighlighting={true}
                  />
                  <Text style={{color: '#d63031', paddingLeft: 10}}>
                    Google
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                // onPress={onPress}
                style={[styles.Sbuttonwrapper, {borderColor: '#2980b9'}]}>
                <View style={styles.SbuttonIcon}>
                  <Zocial
                    style={{color: '#2980b9'}}
                    size={14}
                    name="facebook"
                    colors={colors.black}
                    suppressHighlighting={true}
                  />
                  <Text style={{color: '#2980b9', paddingLeft: 10}}>
                    Facebook
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{fontSize: 16, color: colors.lite_black}}>
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#e67e22',
                  fontWeight: 'bold',
                  paddingLeft: 10,
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
    </>
  );
};

export default RegisterComponent;
