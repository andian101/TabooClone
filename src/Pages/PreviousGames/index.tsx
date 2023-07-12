import React from 'react';
import {Button, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import Game from '../../Models/Game';
import {useQuery} from '../../Models/';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackNavigatorParamList, Destination} from '../../Routes/types';

function PreviousGames(): JSX.Element {
  const gameData = useQuery(Game);
  const {navigate} =
    useNavigation<NativeStackNavigationProp<MainStackNavigatorParamList>>();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.sectionContainer}>
          <Text>List of your previous games</Text>
          {gameData.length > 0 &&
            gameData.map(el => (
              <View key={String(el._id)}>
                <Button
                  title={el.name}
                  onPress={() => navigate(Destination.game, {id: el._id})}
                />
                <Text>{el.lastUpdated.toString()}</Text>
                <Text>
                  {el.players.length} player{el.players.length > 1 ? 's' : ''}
                </Text>
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PreviousGames;
