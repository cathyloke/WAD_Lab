import React  from "react";
import type { StackScreenProps } from '@react-navigation/stack';
import {Button, View} from "react-native";
import { RootStackParamList } from '../Types'; 

export type Props = StackScreenProps<RootStackParamList, 'Home'>;

const App = ( { route, navigation}: Props ) => {
    return(
        <View>
            <View style={{ margin:10 }}>
                <Button title="Chicken" onPress={()=>{navigation.navigate('Animal', {img: require('../img/chicken.jpg')})}} />
            </View>
            <View style={{ margin:10 }}>
                <Button title="Koala" onPress={()=>{navigation.navigate('Animal', {img: require('../img/koala.jpg')})}}/>
            </View>
        </View>
    )
}

export default App;