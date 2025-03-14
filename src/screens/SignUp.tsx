import React from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import auth from "@react-native-firebase/auth";
import {CustomButton} from '../components';
import {useNavigation} from "@react-navigation/native";
import LinearGradient from 'react-native-linear-gradient';


export default function SignUp() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const navigation = useNavigation<any>();

    const signUp = async () => {
        if (password !== confirmPassword) {
            console.error('Passwords do not match');
            return;
        }

        try {
            const userCredential = await auth().createUserWithEmailAndPassword(email, password);
            await userCredential.user.updateProfile({ displayName: name });
            console.log('User signed up:', userCredential.user);
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <LinearGradient
            colors={['#000', '#151c36', '#000']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Full Name"
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                keyboardType="email-address"
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm Password"
                secureTextEntry
                placeholderTextColor="#888"
            />
            <CustomButton onPress={signUp} btnText="Sign Up" />
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.signupText}>Already have an account? Sign In</Text>
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
        fontWeight: 'bold',
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
