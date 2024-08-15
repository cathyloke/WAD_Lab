import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList, StackOptionList } from './Types';
import HomeScreen from "./screen/HomeScreen";
import AnimalScreen from "./screen/AnimalScreen";

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{title:'HomeScreen', ...styles}}>
        </Stack.Screen>
        <Stack.Screen 
          name="Animal" 
          component={AnimalScreen} 
          options={styles}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles: StackOptionList = ({
  headerTitleAlign:'center',
  headerStyle: {
      backgroundColor: '#f4511e',
    },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily: 'Anta-Regular'
  }
})

export default App;