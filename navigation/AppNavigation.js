import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";

import AuthScreen from "../screens/AuthScreen";
import HomeScreen from "../screens/WelcomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DeckScreen from "../screens/DeckScreen";
import MapScreen from "../screens/MapScreen";
import ReviewScreen from "../screens/ReviewScreen";

const MainNavigator = createAppContainer( 
  createBottomTabNavigator({
    home: {
      screen: HomeScreen,
      navigationOptions: { tabBarVisible: false }
    },
    auth: {
      screen: AuthScreen,
      navigationOptions: { tabBarVisible: false }
    },
    main: {
      navigationOptions: { tabBarVisible: false },
      screen: createBottomTabNavigator({
        map: MapScreen,
        deck: DeckScreen,
        review: createStackNavigator({
          review: ReviewScreen,
          settings: SettingsScreen
        })
      })
    }
  })
);

const AppContainer = createAppContainer(MainNavigator);

class AppNavigation extends Component {
  render() {
    return <AppContainer screenProps={this.props} />;
  }
}

export default connect(
  null,
  actions
)(AppNavigation);
