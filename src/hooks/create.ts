import { Game, useRealm } from "Models";
import Realm from "realm";

export const useCreate = () => {
  const realm = useRealm();

  const createGame = async (players: string[], gameName: Game["name"]): Promise<Realm.BSON.ObjectId> => {
    const date = new Date();
    const gameId = new Realm.BSON.ObjectId();
    await realm.write(() => {
      realm.create("Game", {
        _id: gameId,
        name: gameName,
        players: players.map(name => ({
          _id: new Realm.BSON.ObjectId(),
          name,
          score: "",
        })),
        dateCreated: date,
        lastUpdated: date,
      });
    });

    return gameId;
  };

  return { createGame };
};

export default useCreate;
