import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";


export default function Home ({navigation}){
    const pressHandler =()=>{
        navigation.navigate("NewsList");
    }

  return (
    <View style={styles.bacground}>
      <View style={styles.container}>
        <Text style={styles.headText}>Let`s click to see news</Text>
        <Button
          title="Folow the latests news"
          onPress={pressHandler}
          color="#ff6347"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  headText: {
    fontSize: 30,
    color:'white'
  },
  bacground: {
    backgroundColor: "#708090",
    height: "100%",
    justifyContent:"center",
    alignItems:"center",
  },
});