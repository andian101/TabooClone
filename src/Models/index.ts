import Game from "./Game";
import Player from "./Player";
import Realm from "realm";

import { createRealmContext } from "@realm/react";

export const realmConfig: Realm.Configuration = {
  schema: [Player, Game],
  schemaVersion: 13,
};

// Create a realm context
const { RealmProvider, useRealm, useObject, useQuery } = createRealmContext(realmConfig);

export { RealmProvider, useRealm, useObject, useQuery, Game, Player };
