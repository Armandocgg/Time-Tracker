import React from 'react'
import { Constants } from 'expo'
import { View, Text, StyleSheet, Platform }  from 'react-native'
import PropTypes from 'prop-types'

function Header ({title}) {
  return(
    <View>
      <View style={styles.statusbar}></View>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  )
}

Header.proptypes = {
  title: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Platform.OS == 'ios' ? 50 : 56,
    backgroundColor: '#9b59b6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white'
  },
  statusbar:{
    height: Constants.statusBarHeight,
    backgroundColor: '#9b59b6'
  }
})

export default Header;