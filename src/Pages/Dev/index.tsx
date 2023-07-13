import React from "react";
import { Text, Button, SafeAreaView, ScrollView, View } from "react-native";
import { useRealm } from "Models";

function DevPage(): JSX.Element {
  const realm = useRealm();

  const getRealm = async () => {
    console.log("Realm is located at: " + realm.path);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Button title="Get Realm Location" onPress={getRealm} />
        </View>
        <View>
          <Text>{realm.path}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DevPage;
