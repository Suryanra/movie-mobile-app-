import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import MovieCard from "./MovieCard";
// import { ScrollView } from 'react-native-gesture-handler';

const MovieComponent = () => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchDataHandle = async () => {
    setLoading(true);
    const base_url = "https://moviesdatabase.p.rapidapi.com/titles";
    const addded_url = "/x/upcoming";
    const url = base_url + addded_url;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "32b757f97fmsh2416e0076f09163p1f5d76jsn2a99c2b3a551",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log("item:",result.results);
      // console.log(result);

      setMovieData(result.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataHandle();
  }, []);

  // =============================

  // =============================
  return (
    <View>
      <Text>Movie component</Text>
      <View style={styles.movieCardContainer}>
        {!loading &&
          movieData.map((item, index) => (
            <MovieCard data={item} key={index}></MovieCard>
          ))}
      </View>
    </View>
  );
};

export default MovieComponent;
const styles = StyleSheet.create({
  movieCardContainer: {
    flexDirection: "row",

    // flexWrap: "wrap",
  },
});
