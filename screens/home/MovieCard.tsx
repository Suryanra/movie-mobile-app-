import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

const MovieCard = ({ data, funtionForBottomSheet }) => {
  const id = data.id;
  const title = data.originalTitleText?.text;
  const releaseYear = data.releaseYear?.year;
  const imageLink = data.primaryImage?.url;

  if (!imageLink) return <View></View>;

  const handlePress = () => {
    funtionForBottomSheet({ title, image: imageLink, year: releaseYear });
  };

  return (
    <Pressable onPress={handlePress} style={styles.card}>
      <Image style={styles.image} source={{ uri: imageLink }} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.year}>{releaseYear}</Text>
    </Pressable>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  card: {
    width: 150,
    margin: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "700",
    textAlign: "center",
    padding: 5,
  },
  year: {
    textAlign: "center",
    color: "gray",
    paddingBottom: 10,
  },
});
