import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/Routes";
import { RealmProvider } from "./src/Models/index";

export default function App() {
  return (
    <RealmProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </RealmProvider>
  );
}
