import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screen/HomeScreen";
import ArticleScreen from "./screen/ArticleScreen";
import AuthorScreen from "./screen/AuthorScreen";

const Stack = createStackNavigator<any>();

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
          name="Article" 
          component={ArticleScreen} 
          options={styles}>
        </Stack.Screen>
        <Stack.Screen 
          name="Author"
          component={AuthorScreen}
          options={styles}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles: any = ({
  headerTitleAlign:'center',
  headerStyle: {
      backgroundColor: '#3846ab',
    },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
});

export default App;