import Realm from "realm";
import Game from "./Game";

class Player extends Realm.Object<Player> {
  _id!: Realm.BSON.ObjectId;
  name: string = "";
  score: string = "0";
  user!: Realm.List<Game>;

  static schema = {
    name: "Player",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      name: {
        type: "string",
        indexed: true,
      },
      score: "string",
      game: {
        type: "linkingObjects",
        objectType: "Game",
        property: "players",
      },
    },
  };
}

export class OldPlayer extends Realm.Object<Player> {
  _id!: Realm.BSON.ObjectId;
  name: string = "";
  score: number = 0;
  user!: Realm.List<Game>;

  static schema = {
    name: "Player",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      name: {
        type: "string",
        indexed: true,
      },
      score: "int",
      game: {
        type: "linkingObjects",
        objectType: "Game",
        property: "players",
      },
    },
  };
}

export default Player;
