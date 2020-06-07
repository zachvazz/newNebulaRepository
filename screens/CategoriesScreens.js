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
    state = {
      textValue: 'LumbarConditions'
    }
  
    onPress = () => {
      this.setState({
        textValue: 'Lie on your back on floor with hips and knees bent to 90 degrees with feet flat on floor; draw in abdominal muscles and maintain throughout exercise; slowly and with control, rotate knees to one side keeping hips in contact with the floor'
      })
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
          state = {
    textValue}: 'AnkleConditions'
  }

  onPress = () => {
    this.setState({
      textValue: 'Trace the alphabet with your toe, which encourages ankle movement in all directions. Trace the alphabet 1 to 3 times.'
    })
  }
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
        state = {
    textValue}: 'KneeConditions'
  }

  onPress = () => {
    this.setState({
      textValue: 'Lying on your back, keep one knee bent with your foot flat on the floor. Tighten the knee of the straight leg and lift it up to the height of your bent knee. You will feel your quads and hip flexors working! Perform 2 sets of 10 reps.'
    })
  }
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
          state = {
    textValue}: 'ShoulderConditions'
  }

  onPress = () => {
    this.setState({
      textValue: 'Let your other arm hang down and try to swing it gently backwards and forwards and in a circular motion. Repeat about 5 times.'
    })
  }
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
        state = {
    textValue}: 'WristHandConditions'
  }

  onPress = () => {
    this.setState({
      textValue: 'Place your forearm on a table, with your hand and affected wrist extended beyond the table, palm down. Bend your wrist to move your hand upward and allow your hand to close into a fist, then lower your hand and allow your fingers to relax. Hold each position for about 6 seconds. Repeat 8 to 12 times.'
    })
  }
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
          state = {
    textValue}: 'SpineConditions'
  }

  onPress = () => {
    this.setState({
      textValue: 'Begin on your hands and knees with your shoulders positioned over your hands. Rock forward onto your arms, round your shoulders and allow your low back to drop toward the floor. Hold for 5 seconds. Rock backward and sit your buttocks as close to your heels as possible. Extend your arms and hold for 5 seconds.'
    })
  }
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
