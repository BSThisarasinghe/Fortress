import React from 'react';
import {View, Text, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {CustomButton} from "../components";
import {useNavigation} from "@react-navigation/native";
import auth from "@react-native-firebase/auth";

export default function SignIn() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigation = useNavigation<any>();

    const signIn = async () => {
        try {
            await auth().signInWithEmailAndPassword(email, password);
            console.log('User signed in successfully');
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
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
            <CustomButton onPress={signIn} btnText="Sign In" />
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
        </View>
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
