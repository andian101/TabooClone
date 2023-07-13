import React from "react";
import { Button, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { useObject, Game, useRealm } from "Models";

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

  console.log(gameData.players[0].score);

  return (
    <SafeAreaView>
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.sectionContainer}>
          <View>
            <Text>Welcome to the game {gameData.name}!!</Text>
            <Button title="Cleek me" onPress={() => updateScore} />
            {gameData.players.map((el, index) => (
              <View key={String(el._id)}>
                <Text>{el.name}</Text>
                <TextInput
                  keyboardType="numeric"
                  style={styles.input}
                  placeholder={`${el.name} score`}
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
