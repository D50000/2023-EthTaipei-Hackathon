import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { Input } from "@rneui/themed";
import ImageUpload from "./src/modules/ImageUpload";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontSize: 35,
  },
  button: {
    marginTop: 50,
    width: "90%",
    height: 50,
    display: "flex",
    justifyContent: "center",
  },
  address: {
    width: "80%",
    display: "flex",
  },
});

type LoginScreenProps = {
  navigation: any;
};

const LoginScreen: NavigationStackScreenComponent<LoginScreenProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Web3 Login</Text>
      <Input style={styles.address} placeholder="Enter Your Wallet Address" />
      <Button
        title=">>> Sign In >>>"
        onPress={() => navigation.navigate("Account")}
      />
    </View>
  );
};

type AccountScreenProps = {
  navigation: any;
};

const AccountScreen: NavigationStackScreenComponent<AccountScreenProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>xxx User</Text>
      <ImageUpload></ImageUpload>
      <Button
        color="#d4ac2d"
        title="<<< Sign Out  <<<"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

// 設置路由
const AppNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Account: { screen: AccountScreen },
});

// 創建 AppContainer
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  override render() {
    return <AppContainer />;
  }
}
