import React, { Component }  from "react";
import {Button,View, Image} from "react-native";

export default class App extends Component{
    render()
    {
        return(
            <View style={{flex:1, alignSelf:'center', justifyContent:'center'}} >
                <Image style={{ alignSelf:'center', justifyContent:'center', width: 300, height: 300}} source={require('../img/koala.jpg')}></Image>
                <Button title="Go back" onPress={()=>this.props.navigation.goBack()}/>
            </View>
        )
    }
}