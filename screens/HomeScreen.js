import React from 'react'
import {
  View,
  StyleSheet,
  TextInput
} from 'react-native'

const LOCATION_PLACEHOLDER_TEXT = 'Enter your location'

export default function HomeScreen() {
  const [ locationInput, setLocationInput ] = React.useState('')
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={ LOCATION_PLACEHOLDER_TEXT }
        onChangeText={ text => setLocationInput(text) }
        value={ locationInput }
      />
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
