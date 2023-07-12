import React from 'react';
import {Button, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackNavigatorParamList, Destination} from '../../Routes/types';

function App(): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackNavigatorParamList>>();

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Button
          title="New Game"
          onPress={() => navigation.navigate(Destination.game)}
        />

        <Button
          title="Previous Games"
          onPress={() => navigation.navigate(Destination.previous)}
        />

        <Button
          title="Dev Functions"
          onPress={() => navigation.navigate(Destination.dev)}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
