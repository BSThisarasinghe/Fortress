import React, {useEffect} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '../components/CustomText.tsx';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

export default function Splash() {
  const navigation = useNavigation<any>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 4000);
  }, []);

  return (
    <LinearGradient
      colors={['#000', '#151c36', '#000']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.container}>
      <LinearGradient
          colors={['#2b4d5d', '#3a79a6', '#7af5ff']}
          style={styles.animationContainer}>
        <LottieView
          source={require('../assets/animation/splash-animation.json')}
          autoPlay
          loop
          style={styles.animation}
        />
      </LinearGradient>
      <CustomText variant="extraBoldItalic" style={styles.title}>
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
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  animation: {
    width: width * 0.8,
    height: height * 0.2,
  },
  title: {
    fontSize: 30,
    color: '#fff',
  },
  footerText: {
    position: 'absolute',
    bottom: 20,
    fontSize: 12,
    color: '#999999',
  },
});
