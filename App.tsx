import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './sqlite_lec/Screens/HomeScreen';
import ViewScreen from './sqlite_lec/Screens/ViewScreen';
import CreateScreen from './sqlite_lec/Screens/CreateScreen';
import EditScreen from './sqlite_lec/Screens/EditScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={styles.HeaderOptionsStyle}
        />
        <Stack.Screen
          name="ViewScreen"
          component={ViewScreen}
          options={styles.HeaderOptionsStyle}
        />
        <Stack.Screen
          name="CreateScreen"
          component={CreateScreen}
          options={styles.HeaderOptionsStyle}
        />
        <Stack.Screen
          name="EditScreen"
          component={EditScreen}
          options={styles.HeaderOptionsStyle}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = {
  HeaderOptionsStyle: {
    headerStyle: {
      backgroundColor: '#a80000',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
};

export default App;