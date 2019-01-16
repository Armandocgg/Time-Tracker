import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'

function Timer ({ title, description }) {
  return(
    <View style={ styles.container}>
      <View>
        <Text style={ styles.textBold }>{ title }</Text>
        <Text>{ description }</Text>
      </View>
      <View style={ styles.clock }>
        <Text style={[ styles.textBig, styles.textBold ]}>0:00:00</Text>
      </View>
      <View style={ styles.buttonAction }>
        <View style={[ styles.flex, styles.pRight ]}>
          <Button 
            text="Edit"
            containerStyle={ styles.colorAction }
            textStyles={[ styles.colorAction, styles.textBold ]}/>
        </View>
        <View style={[ styles.flex, styles.pLeft ]}>
          <Button 
            text="Remove"
            containerStyle={ styles.colorAction } 
            textStyles={[ styles.colorAction, styles.textBold ]}/>
        </View>
      </View>
      <View>
        <Button 
          text="Start" 
          containerStyle={ styles.colorStart } 
          textStyles={[ styles.colorStart, styles.textBold ]}/>
      </View>
    </View>
  )
}
const paddingVariable = 18
const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: '#bdc3c7',
    borderWidth: 2,
    borderRadius: 5,
    padding: paddingVariable,
  },
  clock: {
    paddingVertical: paddingVariable/2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBold: {
    fontWeight: '900'
  },
  textBig: {
    fontSize: 40,
  },
  flex: {
    flex: 1,
  },
  buttonAction:{
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: paddingVariable,
  },
  pLeft: {
    paddingLeft: paddingVariable,
  },
  pRight: {
    paddingRight: paddingVariable,
  },
  colorAction:{
    borderColor: "#2980b9",
    color: '#2980b9'
  },
  colorStop:{
    borderColor: "#c0392b",
    color: '#c0392b'
  },
  colorStart:{
    borderColor: "#27ae60",
    color: '#27ae60'
  }
})

export default Timer