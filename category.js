import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Actions } from "react-native-router-flux";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => Actions.LumbarConditions()}>
          <Image
            source={this.props.problemImage}
            style={{ height: 100, width: 100 }}
          />
          <Text>{this.props.problemName}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
