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
const SINGAPORE_REGION = {
  latitude: 1.3594206,   // Lat lon defines the central point
  longitude: 103.8066663,
  latitudeDelta: 0.5,   // Deltas define the zoom box
  longitudeDelta: 0.3
}

export default function HomeScreen() {
  const [ locationInput, setLocationInput ] = React.useState('')
  const [ carparkData, setCarparkData ] = React.useState(null)
  return (
    <View style={ styles.container }>
      <TextInput
        placeholder={ LOCATION_PLACEHOLDER_TEXT }
        onChangeText={ text => setLocationInput(text) }
        style={ styles.textInput }
        value={ locationInput }
        onSubmitEditing={ () => getCarparkDataByLocation(locationInput).then((data) => setCarparkData(data)) }
      />
      <MapView
        style={ styles.mapStyle }
        initialRegion={ SINGAPORE_REGION }
        showsUserLocation={ true }
      >
        {
          carparkData &&
            <MapView.Marker
              coordinate={{
                latitude: carparkData.latitude,
                longitude: carparkData.longitude
              }}
            />
        }
      </MapView>
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
