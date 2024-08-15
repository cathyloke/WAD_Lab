import React, { Component }  from "react";
import {Button, View} from "react-native";

export default class App extends Component{
    render()
    {
        return(
            <View>
                <View style={{ margin:10 }}>
                    <Button title="Chicken" onPress={()=>{this.props.navigation.navigate('Chicken')}} />
                </View>
                <View style={{ margin:10 }}>
                    <Button title="Koala" onPress={()=>{this.props.navigation.navigate('Koala')}}/>
                </View>
            </View>
        )
    }
}