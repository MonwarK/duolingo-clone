import React, { useState } from 'react'
import { View, Text } from 'react-native'
import ImageOption from '../ImageOption'
import Styles from './styles'
import PropTypes from 'prop-types'
import Button from "../Button"

const ImageMultipleChoiceQuestion = ({ question, onCorrect, onWrong }) => {
  const [selected, setSelected] = useState(null);

  const onButtonPress = () => {
    if(selected.correct) {
      onCorrect();
      setSelected(null);     
    } else {
      onWrong();
    }
  }

  return (
    <>
      <Text style={Styles.title}>
        {question.question}
      </Text>
      <View style={Styles.optionsContainer}>
        {question.options.map((option) => (
          <ImageOption
            key={option.id}
            imageUrl={option.image}
            text={option.text}
            isSelected={selected?.id === option.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>
      <Button 
        onPress={onButtonPress}
        text="Check"
        disabled={!selected}
      />
    </>
  )
}

ImageMultipleChoiceQuestion.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        correct: PropTypes.bool
      }),
    ).isRequired
  }).isRequired,
  onCorrect: PropTypes.func.isRequired, 
  onWrong: PropTypes.func.isRequired
}

export default ImageMultipleChoiceQuestion