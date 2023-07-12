import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Realm from 'realm';

export enum Destination {
  dev = 'Dev',
  game = 'Game',
  home = 'Home',
  previous = 'Previous Games',
}

export type MainStackNavigatorParamList = {
  [Destination.dev]: undefined;
  [Destination.game]:
    | {
        id: Realm.BSON.ObjectId;
      }
    | undefined;
  [Destination.home]: undefined;
  [Destination.previous]: undefined;
};

export type GameScreenNavigationProp = NativeStackNavigationProp<
  MainStackNavigatorParamList,
  Destination.game
>;
