import React from 'react';
import { Text, TextProps, StyleSheet, TextStyle } from 'react-native';
import { Fonts } from '../assets/styles/fonts';

// Define font variants
type FontVariant = 
  | 'black'
  | 'blackItalic'
  | 'bold'
  | 'boldItalic'
  | 'extraBold'
  | 'extraBoldItalic'
  | 'extraLight'
  | 'extraLightItalic'
  | 'italic'
  | 'italicVariable'
  | 'light'
  | 'lightItalic'
  | 'medium'
  | 'mediumItalic'
  | 'regular'
  | 'semiBold'
  | 'semiBoldItalic'
  | 'thin'
  | 'thinItalic'
  | 'variable';

// Extend TextProps to include custom props
interface CustomTextProps extends TextProps {
  variant?: FontVariant;
  style?: TextStyle;
  children: React.ReactNode;
}

// CustomText Component
const CustomText: React.FC<CustomTextProps> = ({ 
  variant = 'regular', 
  style, 
  children, 
  ...props 
}) => {
  return (
    <Text style={[styles.text, Fonts[variant], style]} {...props}>
      {children}
    </Text>
  );
};

// Default styles
const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#000',
  },
});

export default CustomText;