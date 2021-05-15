import React from 'react'
import { View, Text } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';
const AuthSpinner = ({loading}) => {
    return (
        <View style={{ flex: 1 }}>
            <Spinner visible={loading} textContent={""} textStyle={{color: '#FFF'}} />
        </View>
    )
}

export default AuthSpinner;
