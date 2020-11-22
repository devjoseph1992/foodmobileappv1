import React from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../Components/SearchBar.component";

const SearchScreen = () => {
  return (
    <View>
      <SearchBar />
      <Text>Search Screen</Text>
    </View>
  );
};

const Styles = StyleSheet.create({});

export default SearchScreen;
