import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import TrendingMovies from "../components/TrendingMovie";
import { useQuery } from "@tanstack/react-query";
import {
  fetchGenres,
  fetchPopularMovie,
  fetchTopRatedMovie,
  fetchTrendingMovie,
  fetchUpComingMovie,
} from "../../utils/moviesapi";
import Loading from "../components/Loading";
import PopularMovie from "../components/PopularMovie";
import UpcomingMovie from "../components/UpcomingMovie";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [trending, SetTrending] = useState([]);
  const [popular, SetPopular] = useState([]);
  const [upcoming, SetUpcoming] = useState([]);

  const { isLoading: isTrendingLoading } = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: fetchTrendingMovie,
    onSuccess: (data) => {
      SetTrending(data.results);
    },
    onError: (error) => {
      console.log("Error fetching trending Movies", error);
    },
  });

  const { isLoading: isPopularLoading } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: fetchPopularMovie,
    onSuccess: (data) => {
      SetPopular(data.results);
    },
    onError: (error) => {
      console.log("Error fetching Popular Movies", error);
    },
  });

  const { isLoading: isUpcomingLoading } = useQuery({
    queryKey: ["upcomingMovies"],
    queryFn: fetchUpComingMovie,
    onSuccess: (data) => {
      SetUpcoming(data.results);
    },
    onError: (error) => {
      console.log("Error fetching Popular Movies", error);
    },
  });

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView style={{ marginTop: 16 }}>
        <StatusBar style="light" />
        {/* Welcome Title */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 23, marginVertical: 20 }}>
          <View style={{ borderWidth: 2, borderColor: "grey", borderRadius: 25, overflow: "hidden" }}>
            <Image
              source={require("../../assets/images/avatar.png")}
              style={{ width: 45, height: 45 }}
              resizeMode="cover"
            />
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 10 ,marginHorizontal:20}}>
          <TouchableOpacity style={{ backgroundColor: "black", borderRadius: 20, padding: 10, borderWidth: 1, borderColor: "grey" }}>
            <Text style={{ color: "grey" }} onPress={()=>console.log("Popular")}>Popular</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ backgroundColor: "black", borderRadius: 20, padding: 10, borderWidth: 1, borderColor: "grey" }}>
            <Text style={{ color: "grey" }} onPress={()=>console.log("Upcoming")}>Upcoming</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ backgroundColor: "black", borderRadius: 20, padding: 10, borderWidth: 1, borderColor: "grey" }}>
            <Text style={{ color: "grey" }} onPress={()=>console.log("Classics")}>Classics</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ backgroundColor: "black", borderRadius: 20, padding: 10, borderWidth: 1, borderColor: "grey" }}>
            <Text style={{ color: "grey" }} onPress={()=>console.log("Top10")}>Top 10</Text>
          </TouchableOpacity>
        </View>

        {isTrendingLoading ? (
          <Loading />
        ) : (
          <ScrollView>
            {/* Trending Movies */}
            {trending?.length > 0 && <TrendingMovies data={trending} />}

            {/* Popular Movies */}
            {popular?.length > 0 && (
              <PopularMovie title="Popular" data={popular} />
            )}

            {/* Top Rated Movies */}
            {/* {topRated?.length > 0 && (
              <TopRatedMovies genre={genre} title="Top Rated" data={topRated} />
            )} */}

            {/* Upcoming Movies */}
            {upcoming?.length > 0 && (
              <UpcomingMovie title="Upcoming" data={upcoming} />
            )}
          </ScrollView>
        )}
      </ScrollView>
    </View>
  );
}
