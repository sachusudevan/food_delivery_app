import React from 'react'
import { View, Text, Image, StatusBar } from 'react-native'
import styles from './styles';

const Splash = () => {
    return (
        <View>
            <StatusBar backgroundColor='#c8171d' />
            <Image
                height={100}
                width={100}
                source={require('../../assets/images/splash/splash.png')}
                style={styles.logoImage}
            />
        </View>
    )
}

export default Splash;
