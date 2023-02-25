import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

export default function MealItem({ item }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressedButton : null)}
      >
        <View style={styles.toBorderApply}>
          <View>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text>{item.duration}</Text>
            <Text>{item.affordability.toUpperCase()}</Text>
            <Text>{item.complexity.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.45,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.os === "android" ? "hidden" : "visible",
  },
  // it is mainly to make the shadow work in the ios platform since the elevation is not working in it. (the overflow is the problem to apply the rounded corners)
  toBorderApply: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 8,
  },
  textContainer: {
    paddingLeft: 10,
    paddingBottom: 10,
  },
  pressedButton: {
    opacity: 0.6,
  },
});
