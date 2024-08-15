import React  from "react";
import type { StackScreenProps } from '@react-navigation/stack';
import {Button, Image, View} from "react-native";
import { RootStackParamList } from '../Types'; 

export type Props = StackScreenProps<RootStackParamList, 'Animal'>;

const App = ( { route, navigation}: Props ) => {

    const {img} = route.params;

    return(
        <View style={{flex:1, alignSelf:'center', justifyContent:'center'}} >
            <Image style={{ alignSelf:'center', justifyContent:'center', width: 300, height: 300}} source={img}></Image>
            <Button title="Go back" onPress={()=>navigation.goBack()}/>
        </View>
    )
}

export default App;