import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  optionContainer: {
    // border
    borderWidth: 2,
    borderColor: "#515151",
    borderRadius: 10,

    // size
    width: '48%',
    height: '49%',

    //spacing
    padding: 10,

    alignItems: 'center'
  },
  selectedOption: {
    backgroundColor: "#334155",
    borderColor: '#81D5FE',
  },  
  selectedText: {
    fontWeight: "bold",
    color: "#40BEF7"
  },
  optionImage: {
    width: '100%', 
    flex: 1
  },
  optionText: {
    color: 'white'
  }
})

export default Styles;