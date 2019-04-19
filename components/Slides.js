import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Button } from "react-native-elements";

const SCREEN_WIDTH = Dimensions.get("window").width;

class Slides extends Component {
  renderSlides = () => {
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={styles.slideText}>{slide.text}</Text>
          {this.renderLastSlide(index)}
        </View>
      );
    });
  };

  renderLastSlide = index => {
    if (index === this.props.data.length - 1) {
      return (
        <View>
          <Button
            raised
            title="Continue"
            containerStyle={{ marginTop: 15 }}
            buttonStyle={styles.buttonStyle}
            onPress={this.props.onComplete}
          />
        </View>
      );
    }
  };

  render() {
    return (
      <ScrollView horizontal pagingEnabled style={{ height: "100%" }}>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  slideStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH
  },
  slideText: {
    fontSize: 30,
    textAlign: "center",
    color: "white"
  },
  buttonStyle: {
    backgroundColor: "#0288D1"
  }
});

export default Slides;
