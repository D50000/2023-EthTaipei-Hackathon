import React, { Component, useState } from "react";
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

interface UserData {
  address: string;
  identity_1: string;
  identity_2: string;
  licence: string;
}

type LoginScreenProps = {
  navigation: any;
};
export const LoginScreen: NavigationStackScreenComponent<LoginScreenProps> = ({
  navigation,
}) => {
  const [userData, setUserData] = useState<UserData>({
    address: "",
    identity_1: "",
    identity_2: "",
    licence: "",
  });
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Web3 Login</Text>
      <Input
        style={styles.address}
        placeholder="Enter Your Wallet Address"
        value={userData.address}
        onChangeText={(text: string) =>
          setUserData({ ...userData, address: text })
        }
      />
      {/* address 0x13A1DC2F092E3a6fA8B1bED3C214453d63512fD3 */}
      <Button
        title=">>> Sign In >>>"
        onPress={() => navigation.navigate("Account", { userData })}
      />
    </View>
  );
};

type AccountScreenProps = {
  navigation: any;
};
export const AccountScreen: NavigationStackScreenComponent<
  AccountScreenProps
> = ({ navigation }) => {
  // const handleImagePick = (image: string) => {
  //   console.log("Selected Image:", image);
  // };

  const [userInputData, setUserInputData] = useState<UserData>({
    address: "0x13A1DC2F092E3a6fA8B1bED3C214453d63512fD3",
    identity_1: "",
    identity_2: "",
    licence: "",
  });

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      // formData.append("address", userInputData.address);
      formData.append("identity_1", userInputData.identity_1);
      formData.append("identity_2", userInputData.identity_2);
      formData.append("licence", userInputData.licence);
      const response = await fetch(
        `https://morris-api.com/zeropass/upload/${userInputData.address}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{userInputData.address} User</Text>

      <ImageUpload
        label="ID (front side)"
        onImageSelect={(image: string) =>
          setUserInputData({ ...userInputData, identity_1: image })
        }
      />
      <ImageUpload
        label="ID (back side)"
        onImageSelect={(image: string) =>
          setUserInputData({ ...userInputData, identity_2: image })
        }
      />
      <ImageUpload
        label="Driver License"
        onImageSelect={(image: string) =>
          setUserInputData({ ...userInputData, licence: image })
        }
      />
      <Button
        color="#d4ac2d"
        title="<<< Sign Out  <<<"
        onPress={() => navigation.goBack()}
      />
      <Button
        color="green"
        title="Submit KYC Data"
        onPress={() => handleSubmit()}
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
