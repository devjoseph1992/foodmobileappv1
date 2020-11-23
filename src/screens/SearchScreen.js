import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import SearchBar from "../Components/SearchBar.component";
import ResultsList from "../Components/ResultsList.component";

import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultByPrice = (price) => {
    // price === '$' || "$$" || "$$$"
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultByPrice("$$")} title="Bit Pricier" />
        <ResultsList results={filterResultByPrice("$$$")} title="Big Spender" />
        <ResultsList
          results={filterResultByPrice("$$$$")}
          title="Top of the line"
        />
        <ResultsList results={filterResultByPrice("$$$$$")} title="Big Timer" />
      </ScrollView>
    </>
  );
};

const Styles = StyleSheet.create({});

export default SearchScreen;
