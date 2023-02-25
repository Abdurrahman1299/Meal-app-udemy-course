import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTiles from "../components/CategoryGridTiles";
/****************************************************************/

// component function
export default CategoriesScreen = ({ navigation }) => {
  // rendering item function
  function renderItem({ item }) {
    function pressHandler() {
      navigation.navigate("MealsOverView", {
        catId: item.id,
      });
    }

    return <CategoryGridTiles item={item} onPress={pressHandler} />;
  }

  return (
    <FlatList
      style={styles.listContainer}
      data={CATEGORIES}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
});
