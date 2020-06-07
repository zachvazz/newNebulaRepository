import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Header,
  TouchableOpacity,
  Image,
} from "react-native";
import Category from "../category";
import { Actions } from "react-native-router-flux";
import LumbarConditions from "./ConditionsPages/LumbarConditions";
import AnkleConditions from "./ConditionsPages/AnkleConditions";
import KneeConditions from "./ConditionsPages/KneeConditions";
import ShoulderConditions from "./ConditionsPages/ShoulderConditions";
import SpineConditions from "./ConditionsPages/SpineConditions";
import WristHandConditions from "./ConditionsPages/WristHandConditions";

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
          <View>
            <TouchableOpacity onPress={() => Actions.LumbarConditions()}>
              <Image
                source={images.lumbar_conditions}
                style={{ height: 100, width: 100 }}
              />
              <Text>Lumbar Conditions</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={() => Actions.AnkleConditions()}>
              <Image
                source={images.ankle_conditions}
                style={{ height: 100, width: 100 }}
              />
              <Text>Ankle Conditions</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.category}>
          <View>
            <TouchableOpacity onPress={() => Actions.KneeConditions()}>
              <Image
                source={images.knee_conditions}
                style={{ height: 100, width: 100 }}
              />
              <Text>Knee Conditions</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={() => Actions.ShoulderConditions()}>
              <Image
                source={images.shoulder_conditions}
                style={{ height: 100, width: 100 }}
              />
              <Text>Shoulder Conditions</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.category}>
          <View>
            <TouchableOpacity onPress={() => Actions.WristHandConditions()}>
              <Image
                source={images.wrist_conditions}
                style={{ height: 100, width: 100 }}
              />
              <Text>Wrist/Hand Conditions</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={() => Actions.SpineConditions()}>
              <Image
                source={images.spine_conditions}
                style={{ height: 100, width: 100 }}
              />
              <Text>Spine Conditions</Text>
            </TouchableOpacity>
          </View>
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
