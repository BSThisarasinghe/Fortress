import React from 'react';
import {View, TextInput, StyleSheet, TextInputProps} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Controller} from 'react-hook-form';
import {Fonts} from '../assets/styles/fonts.ts';
import CustomText from './CustomText.tsx';

interface CustomTextInputProps extends TextInputProps {
  iconName?: any; // Optional left-side icon
  style?: object; // Custom styles for container
  inputStyle?: object; // Custom styles for TextInput
  size?: number;
  control: any; // React Hook Form control
  name: string; // Name of the field in form
}

const Input: React.FC<CustomTextInputProps> = ({
  control,
  name,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  iconName,
  style = {},
  inputStyle = {},
  size,
  ...rest
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
        <>
          <View style={[styles.container, style]}>
            {iconName && (
              <FontAwesomeIcon icon={iconName} size={size || 20} color="#999" />
            )}
            <TextInput
              style={[styles.input, inputStyle, Fonts.light]}
              placeholder={placeholder}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={secureTextEntry}
              keyboardType={keyboardType}
              placeholderTextColor="#999"
              {...rest}
            />
          </View>
          <View style={styles.errorWrapper}>
            {error && (
              <CustomText style={styles.errorText}>{error.message}</CustomText>
            )}
          </View>
        </>
      )}
    />
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
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  errorText: {
    color: '#ff4d4d',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  errorWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 30,
    marginBottom: 10,
    width: '100%',
  },
});

export default Input;
