import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "stretch",
    marginVertical: 10,
    color: 'white'
  },
  optionsContainer: {
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between'
  }, 
})

export default styles