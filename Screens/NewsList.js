import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View,Image,StyleSheet } from "react-native";

export default function NewsList () {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3790854fba94455993448af6b8a74cf1"
    )
      .then((response) => response.json())
      .then((json) => setData(json.articles))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.Container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={styles.newsBox}>
              <View style={styles.titleStyle}>
                <Text style={styles.titleText}>{item.title}</Text>
              </View>
              <View style={styles.contentContainer}>
                <Image
                  source={{ uri: item.urlToImage }}
                  style={{ height: 200, width: 200 }}
                />
                <View style={styles.DiscriptionContainer}>
                  <Text style={styles.ContentText}>{item.description}</Text>
                  <Text></Text>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 10,
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#708090",
  },
  newsBox: {
    color: "grey",
    paddingTop: 20,
  },
  contentContainer: {
    flexDirection: "row",
    backgroundColor: "black",
    borderWidth: 3,
    borderTopWidth: 0,
  },
  titleStyle: {
    paddingBottom: 3,
    borderWidth: 3,
    borderBottomWidth: 0,
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fffaf0",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ContentText: {
    color: "#f0ffff",
    fontSize: 15,
    fontStyle: "italic",
    fontWeight: "500",
  },
  DiscriptionContainer: {
    alignContent: "center",
    justifyContent: "center",
    width: "46%",
    paddingLeft: 5,
  },
});
