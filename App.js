import React, { Component } from "react";
import { Router, Scene, Drawer } from "react-native-router-flux";

import CategoriesScreens from "./screens/CategoriesScreens";
import LumbarConditions from "./screens/ConditionsPages/LumbarConditions";
import AnkleConditions from "./screens/ConditionsPages/AnkleConditions";
import KneeConditions from "./screens/ConditionsPages/KneeConditions";
import ShoulderConditions from "./screens/ConditionsPages/ShoulderConditions";
import SpineConditions from "./screens/ConditionsPages/SpineConditions";
import WristHandConditions from "./screens/ConditionsPages/WristHandConditions";
import DrawerContent from "./screens/DrawerContent";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Drawer
          key="drawer"
          drawer
          contentComponent={DrawerContent}
          drawerWidth={220}
        >
          <Scene key="root">
            <Scene
              key="CategoriesScreens"
              component={CategoriesScreens}
              drawer={false}
              initial
              title="Most Common Conditions"
              headerMode="screen"
              labelStyle={{ color: "black", fontSize: 18 }}
              titleStyle={{ color: "black" }}
            />
            <Scene key="LumbarConditions" component={LumbarConditions} />
            <Scene key="AnkleConditions" component={AnkleConditions} />
            <Scene key="KneeConditions" component={KneeConditions} />
            <Scene key="ShoulderConditions" component={ShoulderConditions} />
            <Scene key="SpineConditions" component={SpineConditions} />
            <Scene key="WristHandConditions" component={WristHandConditions} />
          </Scene>
        </Drawer>
      </Router>
    );
  }
}
