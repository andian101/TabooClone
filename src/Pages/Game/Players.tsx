import React, { useState } from "react";
import { SafeAreaView, ScrollView, Button, TextInput, Text, View } from "react-native";
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
            <Text>What's the name of the game?</Text>
            <TextInput
              style={styles.input}
              placeholder="Game Name"
              onChangeText={e => setGameName(e)}
              value={gameName}
            />
          </View>
          <View>
            <Text>Players</Text>
            {players.map((name, index) => (
              <View key={index}>
                <Text>
                  Player {index + 1} {name && `: ${name}`}
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Name"
                  onChangeText={e => onChangeText(index, e)}
                  value={name}
                />
              </View>
            ))}
          </View>

          <Button title="Add player" onPress={() => setPlayers([...players, ""])} />
          <Button title="Start Game" onPress={createTheGame} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Players;
