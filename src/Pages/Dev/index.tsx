import React from 'react';
import {Button, SafeAreaView, ScrollView, View} from 'react-native';
import Game from '../../Models/Game';
import Player from '../../Models/Player';

function DevPage(): JSX.Element {
  const getRealm = async () => {
    await Realm.open({
      schema: [Game, Player],
    }).then(realm => {
      console.log('Realm is located at: ' + realm.path);
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Button title="Relam Location" onPress={getRealm} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DevPage;
