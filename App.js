import React,{Component}  from "react";
  import {StyleSheet} from 'react-native';
  import { NavigationContainer } from "@react-navigation/native";
  import { createStackNavigator } from "@react-navigation/stack";
  import HomeScreen from "./screen/HomeScreen";
  import ChickenScreen from "./screen/ChickenScreen";
  import KoalaScreen from "./screen/KoalaScreen";

  const Stack = createStackNavigator();

  export default class App extends Component {
  render (){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{title:'Home Screen', ...styles}}>
          </Stack.Screen>
          <Stack.Screen 
            name="Chicken" 
            component={ChickenScreen} 
            options={styles}>
          </Stack.Screen>
          <Stack.Screen 
            name="Koala"
            component={KoalaScreen}
            options={styles}>
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  }

  const styles = StyleSheet.create({
    headerTitleAlign:'center',
    headerStyle: {
        backgroundColor: '#f4511e',
      },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  })