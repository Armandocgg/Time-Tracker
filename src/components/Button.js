import React from 'react'
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native'
import PropTypes from 'prop-types'

function Button ({ containerStyle, textStyles, children, disebled, text }){
  return(
    Platform.select({
      ios: (
        <TouchableOpacity disabled={ disebled } style={ [styles.container, containerStyle] }>
          { text ? <Text style={ textStyles }>{ text }</Text> : children }
        </TouchableOpacity>
      ),
      android: (
        <TouchableNativeFeedback disabled={ disebled }>
          <View style={ [styles.container, containerStyle] }> 
            { text ? <Text style={ textStyles }>{ text }</Text> : children }
          </View>
        </TouchableNativeFeedback>
      )
    })
  )
}

Button.propTypes = {
  containerStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  textStyles: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  text: PropTypes.string,
  disebled: PropTypes.bool
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 2,
  }
})

export default Button