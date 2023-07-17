import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  heading: {
    marginBottom: 10,
    fontWeight: "bold",
  },
  textbox: {
    flexShrink: 1,
    paddingRight: 20,
  },
  buttonBox: {
    width: 100,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    height: "auto",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 20,
    marginBottom: 5,
  },
  deleteText: {
    color: "red",
  },
  noGames: {
    marginVertical: 20,
  },
  newGame: {
    marginVertical: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    minHeight: 400,
  },
  bold: {
    fontWeight: "bold",
  },
  inline: {
    flexDirection: "row",
  },
});
