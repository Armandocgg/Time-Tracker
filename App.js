import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import  { v4 } from 'uuid'
import Header from '@/components/Header'
import ToggleableTimerForm from '@/containers/ToggleableTimerForm'
import EditableTimer from '@/containers/EditableTimer'

export default class App extends React.Component {
  // {} Objeto
  // [] Array
  state = {
    timers: [
      {
        id: v4(),
        title: 'Create Tinder',
        project: 'Bootcamp',
        elapsed: '8986300',
        isRunning: false
      },
      {
        id: v4(),
        title: 'Create Face',
        project: 'Bootcamp',
        elapsed: '4548300',
        isRunning: false
      },
      {
        id: v4(),
        title: 'Create Inst',
        project: 'Bootcamp',
        elapsed: '3624300',
        isRunning: false
      },{
        id: v4(),
        title: 'Create You',
        project: 'Bootcamp',
        elapsed: '6666300',
        isRunning: false
      }
    ]
  }

  _handleCreateFormSubmit = (title, project, onFormClose ) => {
    if ( title !== "" ) {
      const newTimers = {
        id: v4(),
        title,
        project,
        elapsed: '3624300',
        isRunning: false
      };
      this.setState(prevState => ({
        timers: [newTimers, ...prevState.timers]
      }))
    }
    onFormClose()
  }

  render() {
    const { timers } = this.state
    return (
      <View style={ styles.container }>
        <Header title="Time Tracker"></Header>
        <ToggleableTimerForm 
          onFormSubmit={ this._handleCreateFormSubmit } //this.handleCreateFormSubmit
        />
        <ScrollView style={ styles.container }>
          { timers.map(({ id, title, project, elapsed, isRunning }) => (
            <EditableTimer
              key={ id }
              id={ id }
              title={ title }
              project={ project }
              elapsed={ elapsed }
              isRunning={ isRunning }
              onFormSubmit={ () => null } //this.handleFormSubmit
              onRemovePress={ () => null } //this.handleRemovePress
              onStartPress={ () => null } //this.toggleTimer
              onStopPress={ () => null } //this.toggleTimer
            />
            ))
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
