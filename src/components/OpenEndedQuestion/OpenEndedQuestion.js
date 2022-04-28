import { View, Text, Image, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import Styles from './styles'
import mascot from "../../../assets/images/mascot.png"
import Button from '../Button'

const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
  const [input, setInput] = useState('');

  const onButtonPress = () => {
    if(question.answer.toLowerCase() === input.toLowerCase()) {
      onCorrect();
      setInput('');
    } else {
      onWrong();
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={Styles.container}
    >
      <Text style={Styles.title}>Translate this sentence</Text>
      <View style={Styles.row}>
        <Image 
          style={Styles.mascot}
          source={mascot} 
          resizeMode='contain'
        />
        <View style={Styles.sentenceContainer}>
          <Text style={Styles.sentence}>{question.text}</Text>
        </View>
      </View>

      <TextInput 
        placeholder='Type in English'
        style={Styles.textInput}
        placeholderTextColor='#cbd5e1'   
        value={input}
        onChangeText={setInput}   
        textAlignVertical="top"
        multiline
      />

      <Button 
        text='Check'
        onPress={onButtonPress}
        disabled={!input}
      />
    </KeyboardAvoidingView>
  )
}

export default OpenEndedQuestion