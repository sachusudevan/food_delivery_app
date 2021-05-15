import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import colors from '../../assets/theme/colors';
import styles from './styles';
import {CommonActions, useNavigation} from '@react-navigation/native';

import {REGISTER} from '../../constants/routeName';
import {useState} from 'react';

const LoginComponent = ({error, onChange, onSubmit, loading, form, justSignedUp}) => {

  console.log('form cont :>>',form);
  const {navigate} = useNavigation();

  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome to contact_py</Text>

        {/* {justSignedUp && (<Message
              onDismiss={() => {}}
              success
              message="Account Created Successfully"
            />)} */}


        <View style={styles.form}>
          {/* {error && !error.error && (
            <Message
              onDismiss={() => {}}
              danger
              message="Invalid Credentials"
            />
          )} */}

          {/* {error?.error && (
            <Message onDismiss={() => {}} danger message={error?.error} />
          )} */}

          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            value={form.userName || null}
            placeholderTextColor={colors.grey}
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
            error={error?.username?.[0]}
          />

          <Input
            label="Password"
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity onPress={() => {
                setIsSecureEntry((prev) => !prev);
              }} >
                <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            placeholder="Enter Password"
            placeholderTextColor={colors.grey}
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            error={error?.password?.[0]}
          />

          <CustomButton
            disabled={loading}
            onPress={onSubmit}
            loading={loading}
            primary
            title="Submit">
            {' '}
          </CustomButton>

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
