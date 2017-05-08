import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

export default class Swiper extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal pagingEnabled>
          <View style={[styles.page, { backgroundColor: "#779ecb" }]}>
            <Text>Page 1</Text>
          </View>
          <View style={[styles.page, { backgroundColor: "#c8cb77" }]}>
            <Text>Page 2</Text>
          </View>
          <View style={[styles.page, { backgroundColor: "#cb7a77" }]}>
            <Text>Page 3</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  page: {
    width,
    alignItems: "center",
    justifyContent: "center",
  },
});
