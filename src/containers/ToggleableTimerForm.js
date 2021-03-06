'use strict'
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import TimerForm from '@/components/TimerForm'
import Button from '@/components/Button'

class ToggleableTimerForm extends Component {
  state = { isOpen: false }

  _toggleForm = () => this.setState({ isOpen: !this.state.isOpen })


  render(){
    const { isOpen } = this.state
    const { onFormSubmit } = this.props
    return(
      <React.Fragment>
        { isOpen ? (
          <View style={styles.timerContainer}>
            <TimerForm 
              onFormSubmit={ onFormSubmit }
              onFormClose={ this._toggleForm }
            />
          </View>
        ) : ( 
          <View style={styles.buttonContainer}>
            <Button 
              textStyles={ styles.buttonTextStyles }
              containerStyles={ styles.buttonContainerStyles }
              onPress={ this._toggleForm }
            >
              <MaterialIcons name="add" size={25} color="#4a4a4a" />
            </Button>
          </View>
        )}
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'transparent',
    paddingHorizontal: 15,
    paddingVertical: 25
  },
  buttonTextStyles: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4a4a4a'
  },
  buttonContainerStyles: {
    backgroundColor: 'white',
    borderColor: '#4a4a4a'
  },
  timerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15
  }
})

export default ToggleableTimerForm