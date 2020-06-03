import React, { Component } from "react";
import { Router, Scene, Drawer } from "react-native-router-flux";

import CategoriesScreens from "./screens/CategoriesScreens";
import LumbarConditions from "./screens/ConditionsPages/LumbarConditions";
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
            <Scene key="Lumbar Conditions" component={LumbarConditions} />
          </Scene>
        </Drawer>
      </Router>
    );
  }
}
