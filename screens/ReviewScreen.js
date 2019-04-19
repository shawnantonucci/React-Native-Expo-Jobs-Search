import React, { Component } from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Review Jobs",
      headerRight: (
        <Button
          title="Settings"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("settings")}
          type="clear"
        />
      ),
      headerStyle: {
        marginTop: Platform.OS === "android" ? 24 : 0
      }
    };
  };

  render() {
    return (
      <View>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    backgroundColor: "transparent",
  }
});

export default ReviewScreen;
