import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../Components/SearchBar.component";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log("term submitted")}
      />
      <Text>Search Screen</Text>
      <Text>{term}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({});

export default SearchScreen;
