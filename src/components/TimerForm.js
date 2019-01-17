import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'
import InputField from './InputField'
import PropTypes from 'prop-types'

class TimerForm extends React.Component {
  state = {
    title: '',
    project: ''
  }

  render() {
    const { title, project } = this.state
    return(
      <View style={ styles.container}>
        <InputField
          label="Title" 
          textStyle={[ styles.textBold ]} 
          value={ title } 
          handleChangeText={(title) => this.setState({ title }) }
        />
        <InputField
          label="Project" 
          textStyle={[ styles.textBold ]}
          handleChangeText={(project) => this.setState({ project }) }
          value={ project }  
        />
        <View style={ styles.buttonAction }>
          <View style={[ styles.flex, styles.pRight ]}>
            <Button 
              text="Create"
              containerStyle={ styles.colorStart }
              textStyles={[ styles.colorStart, styles.textBold ]}/>
          </View>
          <View style={[ styles.flex, styles.pLeft ]}>
            <Button 
              text="Cancel"
              containerStyle={ styles.colorRemove } 
              textStyles={[ styles.colorRemove, styles.textBold ]}/>
          </View>
        </View>
      </View>
    )
  }
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
  colorRemove:{
    borderColor: "#c0392b",
    color: '#c0392b'
  },
  colorStart:{
    borderColor: "#27ae60",
    color: '#27ae60'
  }
})

TimerForm.propTypes = {}

export default TimerForm