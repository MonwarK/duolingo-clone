import React from 'react';
import { Text, Pressable } from 'react-native';
import { Button } from 'react-native-web';
import Styles from './styles';
import PropTypes from 'prop-types';

const index = (props) => {
  const { text, onPress, disabled } = props;

  return (
    <Pressable 
      disabled={disabled}
      onPress={onPress} 
      style={[Styles.container, disabled && Styles.disabledContainer]}
    >
      <Text style={Styles.text}>
        {text}
      </Text>
    </Pressable>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool
}

Button.defaultProps ={
  onPress: () => {},
  disabled: false
}

export default index