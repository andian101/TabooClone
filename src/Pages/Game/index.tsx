import React, {useState, useEffect} from 'react';
import {useRoute, RouteProp} from '@react-navigation/native';
import {SafeAreaView, ScrollView} from 'react-native';
import GameView from './Game';
import PlayerView from './Players';

function GamePage(): JSX.Element {
  const [gameId, setGameId] = useState('');
  const route: RouteProp<{params: {id: string}}, 'params'> = useRoute();

  useEffect(() => {
    if (route?.params?.id) {
      setGameId(route?.params?.id);
    }
  }, [route?.params?.id]);

  // useEffect - set id from params
  // If no ID - Show players
  // If ID show game with logic

  return (
    <SafeAreaView>
      <ScrollView>
        {gameId ? (
          <GameView id={gameId} />
        ) : (
          <PlayerView setGameId={setGameId} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default GamePage;
