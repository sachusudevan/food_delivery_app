import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';
import AnimatedLoader from "react-native-animated-loader";
const AuthSpinner = ({loading}) => {
    return (
        <View style={{ flex: 1 }}>

            <AnimatedLoader
                    visible={loading}
                    overlayColor="rgba(255,255,255,0.75)"
                    source={require("../../../assets/loader/circle_loading_animation.json")}
                    animationStyle={styles.lottie}
                    speed={2}
                >
            </AnimatedLoader>
        </View>
    )
};

const styles = StyleSheet.create({
    lottie: {
      width: 150,
      height: 150
    }
  });
export default AuthSpinner;
