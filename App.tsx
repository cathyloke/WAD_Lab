import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AndroidScreen from "./screens/AndroidScreen";
import {Dimensions, View, TouchableNativeFeedback} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const bottom = createBottomTabNavigator();

const CustomButton = ({children, onPress}: any) => {
  return(
    <TouchableNativeFeedback
      style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 100,
          backgroundColor: '#609146'
        }}
      >
        {children}
      </View>
    </TouchableNativeFeedback>
  )
}

const App = () => {

  const windowHeight = Dimensions.get('window').height;
  let color = '';

  return(
    <NavigationContainer>
      <bottom.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle:{
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            height: windowHeight * .10,
            position: 'absolute',
            backgroundColor: '#b3bab5',
          },
        }}
      >
        <bottom.Screen 
          name = 'home'
          component = {HomeScreen}
          options = {{
            tabBarIcon: ({focused}) => (            
              <MaterialCommunityIcons name='greenhouse' size={50} color={focused ? 'red': 'white'}/>
            )
          }}
        />
        <bottom.Screen 
          name = 'android'
          component = {AndroidScreen}
          options = {{
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons name='android' size={50} color={focused ? '#364d2a': 'white'}/>
            ),
            tabBarButton: (props:any) => (
              <CustomButton {...props} />
            )
          }}
        />
        <bottom.Screen 
          name = 'profile'
          component = {ProfileScreen}
          options = {{
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons name='face-agent' size={50} color={focused ? 'red': 'white'}/>
            )
          }}
        />
      </bottom.Navigator>
    </NavigationContainer>
  )
}

export default App;