import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import { useCreate } from "hooks";
import { styles } from "./styles";

type PlayersType = {
  setGameId: (id: unknown) => void;
};

function Players({ setGameId }: PlayersType): JSX.Element {
  const [gameName, setGameName] = useState("");
  const [players, setPlayers] = useState([""]);
  const { createGame } = useCreate();

  const onChangeText = (index: number, name: string): void => {
    const nextPlayers = players.map((el, i) => {
      return index === i ? name : el;
    });

    return setPlayers(nextPlayers);
  };

  const createTheGame = async () => {
    const gameId = await createGame(players, gameName);
    return setGameId(gameId);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.sectionContainer}>
          <View>
            <Text variant="labelLarge">What's the name of the game?</Text>
            <TextInput
              // keyboardType="numeric"
              // label={`${el.name}`}
              placeholder="Game Name"
              onChangeText={e => setGameName(e)}
              value={gameName}
            />
          </View>
          <View>
            {players.map((name, index) => (
              <View style={styles.inputGroup} key={index}>
                <Text variant="labelLarge">
                  Player {index + 1} {name && `: ${name}`}
                </Text>
                <TextInput placeholder="Name" onChangeText={e => onChangeText(index, e)} value={name} />
              </View>
            ))}
          </View>

          <Button style={styles.buttons} mode="contained-tonal" onPress={() => setPlayers([...players, ""])}>
            Add player
          </Button>
          <Button style={styles.buttons} mode="contained" onPress={createTheGame}>
            Start Game
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Players;
