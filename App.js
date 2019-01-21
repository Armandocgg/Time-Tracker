import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Header from '@/components/Header'
import ToggleableTimerForm from '@/containers/ToggleableTimerForm'
import EditableTimer from '@/containers/EditableTimer'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Time Tracker"></Header>
        <ToggleableTimerForm 
          onFormSubmit={() => null} //this.handleCreateFormSubmit
        />
        <ScrollView style={styles.container}>
          <EditableTimer
            id="1"
            title="Create timer app"
            project="Bootcamp"
            elapsed="8986300"
            isRunning 
            onFormSubmit={ () => null } //this.handleFormSubmit
            onRemovePress={() => null } //this.handleRemovePress
            onStartPress={() => null } //this.toggleTimer
            onStopPress={() => null } //this.toggleTimer
          />
          <EditableTimer
            id="2"
            title="Mow the lawn"
            project="House Chores"
            elapsed="8986300"
            isRunning={false}
            onFormSubmit={ () => null } //this.handleFormSubmit
            onRemovePress={() => null } //this.handleRemovePress
            onStartPress={() => null } //this.toggleTimer
            onStopPress={() => null } //this.toggleTimer
          />    
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
