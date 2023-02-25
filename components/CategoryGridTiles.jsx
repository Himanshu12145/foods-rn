import { StyleSheet, Pressable, View, Text, Platform } from "react-native";
import React from "react";

const CategoryGridTiles = ({ title, color, onPress }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        onPress={onPress}
        style={styles.button}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTiles;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
