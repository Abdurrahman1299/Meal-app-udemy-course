import { Pressable, StyleSheet, Text, View, Platform } from "react-native";

export default function CategoryGridTiles({ item, onPress }) {
  return (
    <View style={[styles.gridItem, { backgroundColor: item.color }]}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressedButton : null,
          // the condition of pressed or not is embedded inside the pressable element
        ]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.os === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  pressedButton: {
    opacity: 0.8,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
