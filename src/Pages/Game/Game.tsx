import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { styles } from "./styles";
import { useObject, Game, useRealm } from "Models";
import { Text, TextInput } from "react-native-paper";

type PlayersType = {
  id: string;
};

function GamePage({ id }: PlayersType): JSX.Element {
  const gameData = useObject(Game, id);
  const realm = useRealm();

  if (!gameData) {
    return (
      <View>
        <Text>No game selected</Text>
      </View>
    );
  }

  const updateScore = (score: string, index: number) => {
    realm.write(() => {
      gameData.players[index].score = score;
      gameData.lastUpdated = new Date();
    });
  };

  return (
    <SafeAreaView>
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.sectionContainer}>
          <View>
            <Text variant="headlineSmall">{gameData.name}!!</Text>
            {gameData.players.map((el, index) => (
              <View style={styles.score} key={String(el._id)}>
                <TextInput
                  mode="outlined"
                  keyboardType="numeric"
                  label={`${el.name}`}
                  placeholder={`${el.name}`}
                  onChangeText={e => updateScore(e, index)}
                  value={el.score}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default GamePage;
