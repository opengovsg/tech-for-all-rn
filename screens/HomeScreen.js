import React from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  Dimensions
} from 'react-native'
import { getCarparkDataByLocation } from '../services'
import MapView from 'react-native-maps'

const LOCATION_PLACEHOLDER_TEXT = 'Enter your location'

export default function HomeScreen() {
  const [ locationInput, setLocationInput ] = React.useState('')
  return (
    <View style={ styles.container }>
      <TextInput
        placeholder={ LOCATION_PLACEHOLDER_TEXT }
        onChangeText={ text => setLocationInput(text) }
        style={ styles.textInput }
        value={ locationInput }
        onSubmitEditing={ () => getCarparkDataByLocation(locationInput).then((data) => console.log('got carparkdata', data)) }
      />
      <MapView style={ styles.mapStyle }/>
    </View>
  )
}

HomeScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue', // Hex code or HTML 5 colors
    paddingTop: 50
  },
  textInput: {
    height: 40,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 5,
    paddingHorizontal: 5
  },
  mapStyle: {
    height: Dimensions.get('window').height * 0.7,
    borderRadius: 5,
    marginTop: 'auto',
    alignSelf: 'stretch'
  }
})
