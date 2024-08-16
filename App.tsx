import React from "react";
import { View, StyleSheet, Text, TouchableNativeFeedback, Image } from "react-native";
import ProfileScreen from "./screens/ProfileScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

const App = () => {

    return(
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props=> <CustomDrawerComponent {...props}/>}
          screenOptions={{
            drawerActiveTintColor: 'darkslateblue',
            drawerActiveBackgroundColor: 'pink',
          }}
        >
        <Drawer.Screen 
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="home-outline" size={20} color={color} />
            ),
            drawerLabelStyle:{
              fontSize: 23
            }
          }}
        />
        <Drawer.Screen 
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="man-outline" size={20} color={color} />
            ),
            drawerLabelStyle:{
              fontSize: 23
            }
          }}  
        />  
        </Drawer.Navigator>
      </NavigationContainer>
    );
}

const CustomDrawerComponent = ( props: any ) => {

    return(
          <View style={{flex:1}}>
            <View style={{flex:.2, alignItems:'center', justifyContent: 'center', backgroundColor: '#eb4034'}}>
              <Image
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 15,
                }}
                source={require('./img/profilePic.jpg')}
              />
              <Text>My Profile Picture</Text>
            </View>
            <View style={{flex:.7, paddingTop: 10}}>
              <DrawerItemList {...props} />
            </View>
            <View style={{
              flex:.1,
              borderTopWidth: 1, 
              borderTopColor: 'gray',
             }}>
              <TouchableNativeFeedback>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginLeft: 20,
                      paddingTop: 10
                    }}>
                    <Ionicons name="exit-outline" size={23}/>  
                    <Text
                      style={{
                        marginLeft: 20,
                        fontSize: 23,
                      }}>
                      Logout
                    </Text>
                  </View>
              </TouchableNativeFeedback>
            </View>
          </View>
    );
}

const inputStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    //backgroundColor: 'lightblue',
  },
  text: {
    fontSize: 48,
    color: 'black'
  },
  input: {
    textAlign: 'center',
    marginRight: 20
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    marginBottom: 10
  }
});

export default App;