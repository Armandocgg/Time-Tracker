'use strict'
import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import PropsTypes from 'prop-types'

function InputField({ handleChangeText, value, label, textStyle }) {
  return (
    <View style={ styles.container }>
      <Text style={[ styles.label, textStyle ]}>{label}</Text>
      <TextInput
        style={ styles.textInput }
        onChangeText={ handleChangeText }
        underlineColorAndroid="transparent"
        value={ value }
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },
  textInput: {
    width: '100%',
    height: 40,
    borderWidth: 2,
    borderColor: '#bdc3c7',
    color: '#4a4a4a',
    borderRadius: 5,
    paddingHorizontal: 18/2,
  },
  label: {
    paddingBottom: 18/2
  }
})

InputField.propTypes = {
  handleChangeText: PropsTypes.func,
  value: PropsTypes.string,
  label: PropsTypes.string
}

export default InputField