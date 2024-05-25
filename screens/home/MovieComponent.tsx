import React, {
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useState,
} from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import MovieCard from "./MovieCard";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

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
      setMovieData(result.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataHandle();
  }, []);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [dataToShown, setDataToShown] = useState({
    title: "",
    image: "",
    year: "",
  });

  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  const handlePresentModalPress = useCallback((data) => {
    bottomSheetModalRef.current?.present();
    setDataToShown(data);
  }, []);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheetModalProvider>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.movieCardContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          movieData.map((item, index) => (
            <MovieCard
              data={item}
              key={index}
              funtionForBottomSheet={handlePresentModalPress}
            />
          ))
        )}
      </ScrollView>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <BottomSheetView style={styles.contentContainer}>
          <Image
            style={styles.bottomSheetImage}
            source={{ uri: dataToShown.image }}
          />
          <Text style={styles.bottomSheetTitle}>{dataToShown.title}</Text>
          <Text style={styles.bottomSheetYear}>{dataToShown.year}</Text>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default MovieComponent;

const styles = StyleSheet.create({
  movieCardContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "green",
  },
  contentContainer: {
    alignItems: "center",
    backgroundColor: "yellow",
  },
  bottomSheetImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  bottomSheetTitle: {
    fontWeight: "900",
    fontSize: 22,
    marginBottom: 10,
  },
  bottomSheetYear: {
    fontWeight: "600",
    fontSize: 18,
  },
});
