import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoriesOver from "./screens/CategoriesOver";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: { backgroundColor: "#fcfcfc" },
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverView" component={CategoriesOver} />
          <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 34,
  },
});
