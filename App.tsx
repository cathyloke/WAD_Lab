import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import ProfileScreen from "./screens/ProfileScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
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
  const windowHeight = Dimensions.get('window').height;
    return(
        <DrawerContentScrollView>
          <View style={{height:"100%"}}>

            <View style={{alignItems:'center', justifyContent: 'center', backgroundColor: '#eb4034'}}>
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

            <View style={{backgroundColor: '#fff', paddingTop: 10, height: windowHeight * .75}}>
              <DrawerItemList {...props} />
            </View>

            <View style={{
              borderTopWidth: 1, 
              borderTopColor: 'gray',
             }}>
              <TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginLeft: 20,

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
              </TouchableOpacity>
            </View>

          </View>
        </DrawerContentScrollView>
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