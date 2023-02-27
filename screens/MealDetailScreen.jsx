import React, { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
const MealDetailScreen = ({ route, navigation }) => {
  // const favoriteMealContext = useContext(FavoriteContext);
  // const mealIsFavorite = favoriteMealContext.ids.includes(mealId);
  console.log(mealIsFavorite);
  const { mealId } = route.params;
  function headerButtonPressedHandler() {
    if (mealIsFavorite) {
      favoriteMealContext.removeFavorite(mealId);
    } else {
      favoriteMealContext.addFavorite(mealId);
    }
  }
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={headerButtonPressedHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressedHandler]);
  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  root: {
    marginBottom: 32,
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    color: "white",
    textAlign: "center",
  },
  detailText: {
    color: "white",
  },
});
