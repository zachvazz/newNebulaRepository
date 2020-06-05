import React, { Component } from 'react';
import {StyleSheet, View, Image, Text } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
    render() {
        return (
                <View style={StyleSheet.container}>
                    <View style={styles.logoContainer}>
                        <Image 
                        style={styles.logo}
                        source={require('../../assets/Physicus.png')}
                        />
                        <Text style={styles.title}>An app made for online physiotherapy</Text>
                    </View>
                    <View style={styles.logoContainer}>
                    <LoginForm />
                    </View>
                </View>
       );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8DC',
        justifyContent: 'center',
        alignItems: 'center'    
    },
    logoContainer: {
        marginTop: 100,
        alignItems:'center',
        flexGrow: 1,
        justifyContent : 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#000000',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    }
});