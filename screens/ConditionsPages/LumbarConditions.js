import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";

export default class LumbarConditions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>
          This is the Lumbar Conditions page. This page will contain an article
          that is created by physiotherapists that use our app as an instructor.
          This will ensure that the information is valid and authentic.
        </Text>
      </View>
    );
  }
}
