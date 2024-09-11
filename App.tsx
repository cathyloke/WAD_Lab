import React, { useState, useEffect } from 'react';
import {
  PermissionsAndroid,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { InputWithLabel } from './UI';
import Geolocation from '@react-native-community/geolocation';

const requestLocationPermission = async() => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                'title': 'Geolocation Permission Required',
                'message': 'This app needs to access your device location',
            }
        )

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Location permission granted')
        }
        else {
            console.log('Location permission denied')
        }

        return granted
    }
    catch (err) {
        console.warn(err)
    }
}

var watchID:any = null;

const App = () => {

  const [granted, setGranted] = useState<any>(PermissionsAndroid.RESULTS.DENIED);
  const [position, setPosition] = useState<any>(null);


  useEffect(()=>{
    setGranted(requestLocationPermission());

    if(granted) readLocation();

    return () => {
      Geolocation.clearWatch(watchID);          //CLEAR MEMORY USAGE
    }
  },[]);

  const readLocation = () => {
    Geolocation.getCurrentPosition(
         (position) => setPosition(position),
         (error) => console.log(error.message),
         {
             enableHighAccuracy: true,
             timeout: 20000,
             maximumAge: 1000
         }
     );

    watchID = Geolocation.watchPosition(
         (position) =>  setPosition(position),
         (error) => console.log(error.message),
         {
             enableHighAccuracy: true,
             timeout: 20000,
             maximumAge: 1000
         }
     );
 }

    console.log(position)
    return (
      <>
      <InputWithLabel 
        label="Longitude: "
        value={(position) ? position.coords.longitude.toString():"Unknown"}
        editable = {false}
        orientation='horizontal'
      />
      <InputWithLabel 
        label="Latitude: "
        value={(position) ? position.coords.latitude.toString():"Unknown"}
        editable = {false}
        orientation='horizontal'
      />
      <InputWithLabel 
        label="Altitude: "
        value={(position) ? position.coords.altitude.toString():"Unknown"}
        editable = {false}
        orientation='horizontal'
      />
      </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  label: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
  data: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
});

export default App;