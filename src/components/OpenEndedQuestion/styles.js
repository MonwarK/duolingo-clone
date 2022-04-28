import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },  
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  mascot: {
    width: "30%",
    aspectRatio: 1/1,
    marginRight: 10,
  },
  sentenceContainer: {
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 5,
    padding: 10,
  },
  sentence: {
    color: 'white',
    fontSize: 16,
  },
  textInput: {
    color: 'white',
    backgroundColor: '#334155',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    alignSelf: 'stretch',
    flex: 1,
    fontSize: 20,
    padding: 10
  }
});

export default Styles;