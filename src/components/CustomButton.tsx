import React from 'react';
import {Text, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from './CustomText.tsx';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import LottieView from 'lottie-react-native';

interface CustomButtonProps {
  onPress: () => void;
  btnText: string;
  loading?: boolean;
}

export function CustomButton({onPress, btnText, loading}: CustomButtonProps) {
  return (
    <TouchableOpacity
      onPress={!loading ? onPress: () => console.log('Disabled')}
      style={styles.buttonWrapper}
      activeOpacity={0.8}>
      <LinearGradient
        colors={['#2b4d5d', '#3a79a6', '#7af5ff']}
        style={styles.container}>
        {loading ? (
            <ActivityIndicator size="small" color="#fff" />
        ) : (
          <CustomText style={styles.btnText}>{btnText}</CustomText>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden', // Ensures the gradient stays within bounds
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  animation: {
    height: 100,
    width: 100,
      backgroundColor: 'red'
  },
});
