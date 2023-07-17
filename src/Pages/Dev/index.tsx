import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Button } from "react-native-paper";
import { useRealm } from "Models";
import { styles } from "./styles";

function DevPage(): JSX.Element {
  const realm = useRealm();

  const getRealm = async () => {
    console.log("Realm is located at: " + realm.path);
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.sectionContainer}>
        <View>
          <Button mode="contained" onPress={getRealm}>
            Get Realm Location
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DevPage;
