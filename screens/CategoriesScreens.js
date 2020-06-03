import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Header,
} from "react-native";
import Category from "../category";

const images = {
  lumbar_conditions: require("../assets/lumbar_conditions.jpg"),
  ankle_conditions: require("../assets/ankle_conditions.jpeg"),
  knee_conditions: require("../assets/knee_conditions.jpg"),
  shoulder_conditions: require("../assets/shoulder_conditions.jpg"),
  wrist_conditions: require("../assets/wrist_conditions.jpeg"),
  spine_conditions: require("../assets/spine_conditions.jpg"),
};

export default class CategoriesScreens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 1,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.category}>
          <Category
            problemName="Lumbar Conditions"
            problemImage={images.lumbar_conditions}
          />
          <Category
            problemName="Ankle Conditions"
            problemImage={images.ankle_conditions}
          />
        </View>

        <View style={styles.category}>
          <Category
            problemName="Knee Conditions"
            problemImage={images.knee_conditions}
          />
          <Category
            problemName="Shoulder Conditions"
            problemImage={images.shoulder_conditions}
          />
        </View>

        <View style={styles.category}>
          <Category
            problemName="Wrist/Hand Conditions"
            problemImage={images.wrist_conditions}
          />
          <Category
            problemName="Spine Conditions"
            problemImage={images.spine_conditions}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  category: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
