import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FavoriteScreen = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>You have no favorite meals yet.</Text>
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#e4baa1",
  },
});
