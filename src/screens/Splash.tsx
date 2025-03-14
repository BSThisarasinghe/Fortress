import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import CustomText from '../components/CustomerText';
import { useNavigation } from '@react-navigation/native';
import auth from "@react-native-firebase/auth";

const { width, height } = Dimensions.get('window');

export default function Splash() {
  const navigation = useNavigation<any>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("SignIn");
    }, 2000); // 2-second delay
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/animation/splash-animation.json')}
        autoPlay
        loop
        style={styles.animation}
      />
      <CustomText variant="bold" style={styles.title}>HomeForPaws</CustomText>
      <CustomText variant="extraLight" style={styles.footerText}>Designed by Symatics</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
  },
  animation: {
    width: width * 0.4,
    height: height * 0.2,
  },
  title: {
    fontSize: 24,
    color: '#333',
  },
  footerText: {
    position: 'absolute',
    bottom: 20,
    fontSize: 12,
    color: '#999999',
  }
});
