import React, { useState, useEffect } from 'react';
import {
  Text,
  FlatList,
  View,
  TouchableNativeFeedback,
  Alert,
} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';

let config = require('../Config');

const action = [
  {
    text: 'Add',
    icon: require('../icons/add_icon.png'),
    name: 'add',
    position: 1,
    color: '#cd5c5c',
  },
];

const HomeScreen = ({route, navigation}: any) => {

    const [members, setMembers] = useState([]);
    const [isFetching, setIsFetching] = useState(false);


    const _load = () => {
        let url = config.settings.serverPath + '/api/members';
        setIsFetching(true);

        fetch(url)
        .then(response => {
            console.log(response);
            if (!response.ok) {
            Alert.alert('Error:', response.status.toString());
            throw Error('Error ' + response.status);
            }
            setIsFetching(false);
            return response.json();
        })
        .then(members => {
            console.log(members);
            setMembers(members);
        })
        .catch(error => {
            console.log(error);
        });
    }

    useEffect(()=>{
        _load();
    },[]);

    return (
      <View style={{flex: 1, margin: 5}}>
        <FlatList
          refreshing={isFetching}
          onRefresh={_load}
          data={members}
          renderItem={({item}:any) => {
            return (
              <TouchableNativeFeedback
                onPress={() =>
                  navigation.navigate('View', {
                    id: item.id,
                    _refresh: _load,
                  })
                }>
                <View style={{borderBottomWidth: 1, borderBottomColor: 'grey'}}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    {item.name}
                  </Text>
                  <Text style={{fontSize: 15}}>{item.email}</Text>
                  <Text style={{fontSize: 15}}>{item.phone}</Text>
                </View>
              </TouchableNativeFeedback>
            );
          }}></FlatList>
        <FloatingAction
          actions={action}
          color="#cd5c5c"
          onPressItem={() =>
            navigation.navigate('Create', {_refresh: _load})
          }></FloatingAction>
      </View>
    );
}

export default HomeScreen;