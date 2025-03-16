import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {CustomButton} from '../components';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '../components/CustomText.tsx';
import Input from '../components/Input.tsx';
import {faEnvelope, faLock, faUser} from '@fortawesome/free-solid-svg-icons';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match') // Ensures it matches `password`
    .required('Confirm Password is required'),
});

export default function SignUp() {
  const navigation = useNavigation<any>();
  const [loading, setLoading] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: {isSubmitting},
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const signUp = async (data: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    setLoading(true);
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        data.email,
        data.password,
      );
      await userCredential.user.updateProfile({displayName: data.name});
      console.log('User signed up:', userCredential.user);
      setLoading(false);
      navigation.navigate('SignIn');
    } catch (error) {
      setLoading(false);
      console.error('Error signing up:', error);
    }
  };

  return (
    <LinearGradient
      colors={['#000', '#151c36', '#000']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.container}>
      <CustomText variant="medium" style={styles.title}>
        Sign Up
      </CustomText>
      <Input
        control={control}
        name="name"
        iconName={faUser}
        placeholder="Full Name"
      />
      <Input
        control={control}
        name="email"
        iconName={faEnvelope}
        placeholder="Email"
        keyboardType="email-address"
      />
      <Input
        control={control}
        name="password"
        iconName={faLock}
        placeholder="Password"
        secureTextEntry
      />
      <Input
        control={control}
        name="confirmPassword"
        iconName={faLock}
        placeholder="Confirm Password"
        secureTextEntry
      />
      <CustomButton
        onPress={handleSubmit(signUp)}
        btnText={isSubmitting ? 'Signing Up...' : 'Sign Up'}
        loading={loading}
      />
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <CustomText style={styles.signupText}>
          Already have an account? Sign In
        </CustomText>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    paddingHorizontal: 15,
    color: '#fff',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333',
  },
  signupText: {
    marginTop: 15,
    color: '#007bff',
    fontSize: 14,
  },
});
