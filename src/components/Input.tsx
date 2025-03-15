import React from 'react';
import {View, TextInput, StyleSheet, TextInputProps} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Fonts} from "../assets/styles/fonts.ts";

interface CustomTextInputProps extends TextInputProps {
  iconName?: any; // Optional left-side icon
  style?: object; // Custom styles for container
  inputStyle?: object; // Custom styles for TextInput
  size?: number;
}

const Input: React.FC<CustomTextInputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  iconName,
  style = {},
  inputStyle = {},
  size,
  ...rest
}) => {
  return (
    <View style={[styles.container, style]}>
      {iconName && (
        <FontAwesomeIcon icon={iconName} size={size || 20} color="#999" />
      )}
      <TextInput
        style={[styles.input, inputStyle, Fonts['light']]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholderTextColor="#999"
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    height: 50,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default Input;
