import React from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainStackNavigatorParamList, Destination } from "../../Routes/types";
import { styles } from "./styles";

function App(): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackNavigatorParamList>>();

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.sectionContainer}>
        <Button style={styles.button} mode="contained" onPress={() => navigation.navigate(Destination.game)}>
          New Game
        </Button>
        <Button style={styles.button} mode="contained" onPress={() => navigation.navigate(Destination.previous)}>
          Previous Games
        </Button>
        <Button style={styles.button} mode="contained" onPress={() => navigation.navigate(Destination.dev)}>
          Dev Functions
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
