import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#58CC02',
    height: 50,
    marginVertical: 10,

    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 5,
    borderBottomWidth: 5,
    borderColor: '#57A600'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderColor: 'black'
  },
  disabledContainer: {
    color: 'white',
    backgroundColor: "lightgrey",
    borderColor: "grey"
  }
})

export default Styles;