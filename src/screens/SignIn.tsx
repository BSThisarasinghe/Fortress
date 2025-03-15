import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

import { CustomButton } from '../components';
import Input from '../components/Input.tsx';
import CustomText from '../components/CustomText.tsx';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function SignIn() {
    const navigation = useNavigation<any>();
const [loading, setLoading] = React.useState(false);

    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const signIn = async (data: { email: string; password: string }) => {
        try {
            setLoading(true);
            await auth().signInWithEmailAndPassword(data.email, data.password);
            setLoading(false);
            navigation.navigate('SignUp');
            console.log('User signed in successfully');
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    return (
        <LinearGradient
            colors={['#000', '#151c36', '#000']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.container}
        >
            <CustomText variant="medium" style={styles.title}>Sign In</CustomText>

            {/* Email Input */}
            <Controller
                control={control}
                name="email"
                defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        iconName={faEnvelope}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder="Email"
                        keyboardType="email-address"
                        placeholderTextColor="#888"
                    />
                )}
            />
            {errors.email && <CustomText style={styles.errorText}>{errors.email.message}</CustomText>}

            {/* Password Input */}
            <Controller
                control={control}
                name="password"
                defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        iconName={faLock}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder="Password"
                        secureTextEntry
                        placeholderTextColor="#888"
                    />
                )}
            />
            {errors.password && <CustomText style={styles.errorText}>{errors.password.message}</CustomText>}

            {/* Sign In Button */}
            <CustomButton
                onPress={handleSubmit(signIn)}
                btnText={isSubmitting ? 'Signing In...' : 'Sign In'}
                loading={loading}
            />

            {/* Navigate to Sign Up */}
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <CustomText style={styles.signupText}>Don't have an account? Sign Up</CustomText>
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
    errorText: {
        color: '#ff4d4d',
        fontSize: 14,
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    signupText: {
        marginTop: 15,
        color: '#007bff',
        fontSize: 14,
    },
});
