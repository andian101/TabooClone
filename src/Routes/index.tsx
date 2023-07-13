import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Landing, Game, PreviousGames, Dev} from 'Pages';
import {MainStackNavigatorParamList, Destination} from './types';

const Stack = createNativeStackNavigator<MainStackNavigatorParamList>();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Destination.home} component={Landing} />
      <Stack.Screen name={Destination.game} component={Game} />
      <Stack.Screen name={Destination.previous} component={PreviousGames} />
      <Stack.Screen name={Destination.dev} component={Dev} />
    </Stack.Navigator>
  );
}

export default Routes;
