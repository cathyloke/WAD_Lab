import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './lab04/screens/HomeScreen';
import ViewScreen from './lab04/screens/ViewScreen';
import CreateScreen from './lab04/screens/CreateScreen';
import EditScreen from './lab04/screens/EditScreen';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={myStyle.HomeHeader}>
          </Stack.Screen>
          <Stack.Screen
            name="ViewScreen"
            component={ViewScreen}
            options={myStyle.HomeHeader}>
          </Stack.Screen>
          <Stack.Screen
            name="CreateScreen"
            component={CreateScreen}
            options={myStyle.HomeHeader}>
          </Stack.Screen>
          <Stack.Screen
            name="EditScreen"
            component={EditScreen}
            options={myStyle.HomeHeader}>
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const myStyle = ({
  HomeHeader: {
    headerStyle: {
      backgroundColor: '#7b68ee',
    },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#f5fffa',
    },
  },
});