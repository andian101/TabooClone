import Realm from "realm";
import Player from "./Player";
import { ObjectSchema } from "realm";

class Game extends Realm.Object<Game> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  players!: Realm.List<Player>;
  dateCreated!: Date;
  lastUpdated!: Date;

  static schema: ObjectSchema = {
    name: "Game",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      name: {
        type: "string",
        indexed: true,
      },
      players: {
        type: "list",
        objectType: "Player",
        optional: false,
      },
      dateCreated: "date",
      lastUpdated: "date",
    },
  };
}

export default Game;
