import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

export default class DrawerContent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => Actions.CategoriesScreens()}>
          <View>
            <Text style={styles.option}>Categories</Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={()=>Actions.Screen1()}>

                    <View>
                        <Text style={styles.option}>Screen 1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Actions.Screen2()}>
                    <View>
                        <Text style={styles.option}>Screen 2</Text>
                    </View>
                </TouchableOpacity> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  option: {
    color: "black",
    fontSize: 20,
    paddingLeft: 45,
    paddingTop: 40,
    paddingBottom: 20,
  },
});
