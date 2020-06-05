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
import Login from "./screens/Login/Login";
import LoginForm from "./screens/Login/LoginForm";
import Register from "./screens/Login/Register";
import RegisterForm from "./screens/Login/RegisterForm";
import Welcome from "./screens/Login/Welcome";
import { setCommonConditions } from "./database/CommonConditions";
import Search from "./screens/Searchscreen";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }
  componentDidMount() {
    (async () => {
      let isInitialized = await setCommonConditions();
      this.setState({ isLoaded: true });
    })();
  }

  render() {
    if (this.state.isLoaded) {
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
              <Scene
                key="WristHandConditions"
                component={WristHandConditions}
              />
              <Scene key="Login" component={Login} />
              <Scene key="Welcome" component={Welcome} />
              <Scene key="Register" component={Register} />
            </Scene>
          </Drawer>
        </Router>
      );
    } else {
      return null;
    }
  }
}
