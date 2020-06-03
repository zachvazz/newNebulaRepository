import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Welcome extends Component {  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to PhysioApp!</Text>
        <Text style={styles.normText}>We hope you benefit from our helpful physiotherapy content, live physiotherapist classes, and even 1-1 private instructor lessons!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'    
    },
    textContainer: {
        marginTop: 50,
        alignItems:'center',
        flexGrow: 1,
        justifyContent : 'center'
    },
    title: {
        color: '#000000',
        marginTop: 10,
        width: 200,
        textAlign: 'center',
        opacity: 1.0,
        fontWeight: "800"
    },
    normText: {
        color: '#CC6600',
        marginTop: 20,
        width: 200,
        textAlign: 'center',
        opacity: 0.7, 
    }
});