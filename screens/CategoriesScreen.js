import { FlatList, StyleSheet } from "react-native";
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
      data={CATEGORIES}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.listContainer}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
});
