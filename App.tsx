import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './sqlite_lec/screens/HomeScreen';
import CreateScreen from './sqlite_lec/screens/CreateScreen';
import ViewScreen from './sqlite_lec/screens/ViewScreen';
import EditScreen from './sqlite_lec/screens/EditScreen';

const stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen
          name="Home"
          component={HomeScreen}
          options={styles.headerIndexStyle}/>
        <stack.Screen
          name="Create"
          component={CreateScreen}
          options={styles.headerIndexStyle}/>
        <stack.Screen
          name="View"
          component={ViewScreen}
          options={styles.headerIndexStyle}/>
        <stack.Screen
          name="Edit"
          component={EditScreen}
          options={styles.headerIndexStyle}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = ({
  headerIndexStyle: {
    title: 'Lecture  05: Cloud Conectivity',
    headerStyle: {
      backgroundColor: '#a80000',
    },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

export default App;