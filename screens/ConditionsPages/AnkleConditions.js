import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import { getCommonConditions } from "../../database/CommonConditions";

export default class AnkleConditions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  render() {
    return (
      <View>
        <Text>{this.state.content}</Text>
      </View>
    );
  }
  componentDidMount() {
    (async () => {
      let conditions = await getCommonConditions();
      console.log(conditions);
      let item = conditions.filter((p) => {
        return p.title == "AnkleConditions";
      });
      console.log(item);
      this.setState({ content: item[0].content });
    })();
  }
}
