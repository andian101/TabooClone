import { Game, useRealm, useObject } from "Models";

export const useGameUpdate = (gameObj: Game) => {
  const realm = useRealm();
  const game = useObject(Game, gameObj._id);

  const updateGameScore = async (players: Game["players"]): Promise<boolean> => {
    if (game) {
      realm.write(() => {
        game.players = players;
      });
    }

    return true;
  };

  return { updateGameScore };
};

export default useGameUpdate;
