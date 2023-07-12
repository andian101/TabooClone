import React from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import Game from '../../Models/Game';
import {styles} from './styles';
import {useObject} from '../../Models/';

type PlayersType = {
  id: string;
};

function GamePage({id}: PlayersType): JSX.Element {
  const gameData = useObject(Game, id);
  console.log(gameData);
  console.log('here ', id);

  return (
    <SafeAreaView>
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.sectionContainer}>
          {!gameData ? (
            <Text>No game selected</Text>
          ) : (
            <View>
              <Text>Welcome to the game {gameData.name}!!</Text>
              {gameData.players.map(el => (
                <View>
                  <Text>{el.name}</Text>
                  <TextInput
                    keyboardType="numeric"
                    style={styles.input}
                    placeholder={`${el.name} score`}
                    onChangeText={e => console.log(e)}
                    value={el.score.toString()} // Convert back to number
                  />
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default GamePage;
