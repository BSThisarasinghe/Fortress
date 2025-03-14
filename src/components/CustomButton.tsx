import React from 'react';
import {Text, StyleSheet, TouchableOpacity } from 'react-native';

export function CustomButton({ onPress, btnText }: any) {
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyles.container}>
            <Text style={buttonStyles.btnText}>{btnText}</Text>
        </TouchableOpacity>
    );
}

const buttonStyles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#007bff',
        borderRadius: 8,
    },
    btnText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});
