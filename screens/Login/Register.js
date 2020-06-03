import React, { Component } from 'react';
import {StyleSheet, View, Image, Header } from 'react-native';
import RegisterForm from './RegisterForm';

export default class Register extends Component {
    render() {
        return (
                <View style={StyleSheet.container}>
                    <View style={styles.logoContainer}>
                        <Image 
                        style={styles.logo}
                        source={require('../../assets/splash.png')}
                        />
                    </View>
                    <View style={styles.logoContainer}>
                    <RegisterForm />
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
        marginTop: 120,
        alignItems:'center',
        flexGrow: 2,
        justifyContent : 'center'
    },
    Header: {
        marginTop: 20,
        alignItems: 'center',
        color: '#000000',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    }
});