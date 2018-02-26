import React, {Componentt} from "react";
import { Root } from "native-base";
import {StyleSheet} from 'react-native';
import { StackNavigator, DrawerNavigator } from "react-navigation";

import AvailableRewards from "./screens/AvailableRewards";
import QRScanner from "./screens/QRScanner/";
import ClaimedRewards from "./screens/ClaimedRewards";
import Profile from "./screens/Profile";
import Challenge from "./screens/Challenge";
import SideBar from "./screens/SideBar";
import Verify from "./screens/Verify";

const Drawer = DrawerNavigator(
  {
    ClaimedRewards: { screen: ClaimedRewards },
    Challenge: { screen: Challenge },
    AvailableRewards: { screen: AvailableRewards },
    Profile:{screen:Profile}
    
  },
  {
    initialRouteName: "ClaimedRewards",
    contentOptions: {
      activeTintColor: "#fff"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = StackNavigator(
  {
   Drawer: { screen: Drawer }
  
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
});