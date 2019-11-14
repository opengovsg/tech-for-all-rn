import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

export default function HomeScreen() {
  return (
    <View style={styles.container}>

    </View>
  )
}

HomeScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue' // Hex code or HTML 5 colors
  }
})
