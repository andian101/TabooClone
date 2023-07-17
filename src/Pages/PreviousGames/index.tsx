import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Text, Button } from "react-native-paper";
import { styles } from "./styles";
import { Game, useQuery, useRealm } from "Models";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainStackNavigatorParamList, Destination } from "Routes/types";
import moment from "moment";

function PreviousGames(): JSX.Element {
  const realm = useRealm();
  const gameData = useQuery(Game);
  const { navigate } = useNavigation<NativeStackNavigationProp<MainStackNavigatorParamList>>();

  const deleteGame = (deletableGame: Game) => {
    realm.write(() => {
      realm.delete(deletableGame);
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.sectionContainer}>
          {gameData.length === 0 && (
            <View style={styles.noGames}>
              <Text variant="headlineSmall">No Games today</Text>
              <Button style={styles.newGame} mode="elevated" onPress={() => navigate(Destination.game)}>
                New Game
              </Button>
            </View>
          )}
          {gameData.length > 0 &&
            gameData.map(el => (
              <View style={styles.row} key={String(el._id)}>
                <View style={styles.textbox}>
                  <Text style={styles.heading} variant="headlineSmall">
                    {el.name}
                  </Text>
                  <View style={styles.inline}>
                    <Text style={styles.bold}>Last Updated: </Text>
                    <Text>{moment(el.lastUpdated).fromNow()}</Text>
                  </View>
                  <View style={styles.inline}>
                    <Text style={styles.bold}>Players: </Text>
                    <Text>{el.players.length}</Text>
                  </View>
                </View>
                <View style={styles.buttonBox}>
                  <Button mode="elevated" onPress={() => navigate(Destination.game, { id: el._id })}>
                    View
                  </Button>
                  <Button mode="text" onPress={() => deleteGame(el)}>
                    <Text style={styles.deleteText} variant="labelSmall">
                      Delete
                    </Text>
                  </Button>
                </View>
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PreviousGames;
