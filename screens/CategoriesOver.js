import { FlatList, StyleSheet, View } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

export default function CategoriesOver({ route, navigation }) {
  const catId = route.params.catId;
  // the object route.params only ocntains the id of the component or the element

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderItem({ item }) {
    return <MealItem item={item} />;
  }

  return (
    <View>
      <FlatList
        data={displayedMeals}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
