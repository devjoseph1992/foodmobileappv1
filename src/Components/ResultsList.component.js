import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import ResultsDetail from "./ResultsDetail.component";

const ResultsList = ({ title, results }) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default ResultsList;
