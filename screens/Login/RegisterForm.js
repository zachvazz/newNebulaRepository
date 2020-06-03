import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                 barStyle="light-content"
                />
                <TextInput 
                placeholder="First Name"
                style={styles.input}
                />
                <TextInput 
                 placeholder="Last Name"
                 style={styles.input}
                />
                <TextInput 
                 placeholder="Email"
                 style={styles.input}
                />
                <TextInput 
                 placeholder="Create a Username"
                 style={styles.input}
                />
                <TextInput 
                 placeholder="Password"
                 style={styles.input}
                />
                <TextInput 
                 placeholder="Confirm Password"
                 style={styles.input}
                />

                {/* <TouchableOpacity style={styles.buttonContainer}>
                   <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity> */}

                <Button
                onPress={()=>Actions.Register()}
                    title='Register'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 0
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#000000',
        paddingHorizontal: 10,
        paddingVertical: 10,
    }, 
    buttonContainer: {
        backgroundColor: '#CC6600',
        paddingVertical: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
});