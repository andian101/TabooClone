import Realm from "realm";

export interface IGame {
  _id: Realm.BSON.ObjectId;
  name: string;
  players: Realm.List<IPlayer>;
  dateCreated: Date;
  lastUpdated: Date;
}

export interface IPlayer {
  _id: Realm.BSON.ObjectId;
  name: string;
  score: number;
  user: Realm.List<IGame>;
}
