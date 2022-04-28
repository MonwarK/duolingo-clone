import React from 'react'
import { Text, View, Image, Pressable } from 'react-native';
import Styles from './styles';
import PropTypes from 'prop-types';

const ImageOption = (props) => {
  const { imageUrl, text, isSelected, onPress } = props;

  return (
    <Pressable 
      onPress={onPress}
      style={[Styles.optionContainer, isSelected && Styles.selectedOption]}
    >
      <Image 
        source={{ uri: imageUrl }}
        style={Styles.optionImage}
        resizeMode='contain'
      />
      <Text style={isSelected ? Styles.selectedText : Styles.optionText}>
        {text.toUpperCase()}
      </Text>
    </Pressable>
  )
}

ImageOption.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func
}

ImageOption.defaultProps = {
  text: "Hello",
  isSelected: false,
  onPress: PropTypes.func
}

export default ImageOption