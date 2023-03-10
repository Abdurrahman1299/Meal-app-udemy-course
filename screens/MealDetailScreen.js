import { useLayoutEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import IconButton from "../components/IconButton";

export default function MealDetailScreen({ route, navigation }) {
  // to be able to use the params passed from the parent screen, it must be called from the route object
  const item = route.params.item;
  let iter1 = 1;
  let iter2 = 1;

  function onIconPress() {
    console.log("noway");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton name="star" color="brown" size={24} onPress={onIconPress} />
      ),
    });
  }, [navigation, onIconPress]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <Text style={styles.text}>Title: {item.title}</Text>
          <Text style={styles.text}>Affordablility: {item.affordability}</Text>
          <Text style={styles.text}>Duration: {item.duration}</Text>
        </View>

        <Text style={styles.text}>Ingredients</Text>
        {item.ingredients.map((ingredient) => (
          <View key={ingredient}>
            <Text style={styles.textList}>
              {iter1++} - {ingredient}
            </Text>
          </View>
        ))}

        <Text style={styles.text}>Steps</Text>
        {item.steps.map((step) => (
          <View key={step}>
            <Text style={styles.textList}>
              {iter2++} - {step}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  text: {
    fontSize: 23,
    marginVertical: 8,
  },
  textList: {
    color: "purple",
    fontSize: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
});
