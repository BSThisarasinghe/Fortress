import React, {useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '../components/CustomerText';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

export default function Splash() {
  const navigation = useNavigation<any>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("SignIn");
    }, 4000);
  }, []);

  return (
    <LinearGradient
      colors={['#000', '#151c36', '#000']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView
          source={require('../assets/animation/splash-animation.json')}
          autoPlay
          loop
          style={styles.animation}
        />
      </View>
      <CustomText variant="bold" style={styles.title}>
        Fortress
      </CustomText>
      <CustomText variant="extraLight" style={styles.footerText}>
        Designed by Symmatics
      </CustomText>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  animationContainer: {
    backgroundColor: '#fff',
    borderRadius: 200,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  animation: {
    width: width * 0.8,
    height: height * 0.2,
  },
  title: {
    fontSize: 24,
    color: '#fff',
  },
  footerText: {
    position: 'absolute',
    bottom: 20,
    fontSize: 12,
    color: '#999999',
  },
});
