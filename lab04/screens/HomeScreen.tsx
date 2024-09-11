import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {FloatingAction} from 'react-native-floating-action';
import { getPlaces } from '../db-service';
import { formatted } from '../utility';

const actions = [
  {
    text: 'Add',
    icon: require('../icons/add_icon.png'),
    name: 'add',
    position: 1,
  },
];
 
const HomeScreen = ({route, navigation} : any ) => {

    const [places, setPlaces] = useState<any>([]);

    const _query = async () => {
        setPlaces(await getPlaces());
    }

    useEffect(()=>{
      _query();
    },[]);

    return (
      <View style={styles.container}>
        <FlatList
          data={places}
          showsVerticalScrollIndicator={true}
          renderItem={({item}:any) => (
            <TouchableHighlight
              underlayColor="pink"
              onPress={() => {
                  navigation.navigate('ViewScreen', {
                  id: item.id,
                  headerTitle: item.name,
                  refresh: _query,
                });
              }}>
              <View style={styles.item}>
                <Text style={styles.itemTitle}>{item.name}</Text>
                <Text style={styles.itemSubtitle}>{item.city}</Text>
                <Text style={styles.itemSubtitle}>{formatted(new Date(item.date))}</Text>
              </View>
            </TouchableHighlight>
          )}
          keyExtractor={ (item:any) => 
            item.id.toString()
          }
        />
        <FloatingAction
          actions={actions}
          overrideWithAction={true}
          color={'#a80000'}
          onPressItem={() => {
              navigation.navigate('CreateScreen', {
              refresh: _query,
            });
          }}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  item: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  itemTitle: {
    fontSize: 22,
    fontWeight: '500',
    color: '#000',
  },
  itemSubtitle: {
    fontSize: 18,
  },
});

export default HomeScreen;