import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '@/components/Header'
import Button from '@/components/Button'
import Timer from '@/components/Timer'
import { MaterialIcons } from '@expo/vector-icons'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header title="TIME"></Header>
        <View style={styles.buttonContainer}>
          <Button
            textStyles={ styles.buttonTextStyles }
            containerStyles={ styles.buttonContainerStyles }>
            <MaterialIcons name="add" size={25} color="#4a4a4a"/>
          </Button>
        </View>
        <View style={ styles.timerContainer }>
          <Timer title="Title" description="Description"/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
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
    backgroundColor: 'transparent',
    paddingHorizontal: 15,
    paddingBottom: 15, 
  }
});
