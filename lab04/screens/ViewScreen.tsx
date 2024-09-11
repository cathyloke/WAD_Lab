import React, { useState, useEffect } from 'react';
import {StyleSheet, Alert, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import { InputWithLabel } from '../UI';
import {FloatingAction} from 'react-native-floating-action';
import { getDBConnection, getPlaceById, deletePlace } from '../db-service';
import { formatted } from '../utility';

const actions = [
  {
    text: 'Edit',
    color: '#c80000',
    icon: require('../icons/edit_icon.png'),
    name: 'edit',
    position: 2,
  },
  {
    text: 'Delete',
    color: '#c80000',
    icon: require('../icons/delete_icon.jpg'),
    name: 'delete',
    position: 1,
  },
];

const ViewScreen = ({route, navigation} : any ) => {

    const [placeId, setPlaceId] = useState(route.params.id);
    const [place, setPlace] = useState<any>(null);

    const _queryByID = async (id: any) => {
        setPlace(await getPlaceById(await getDBConnection(), id));
    }

    const _delete = () => {
    Alert.alert('Confirm to delete ?', place.name, [
      {
        text: 'No',
        onPress: () => {},
      },
      {
        text: 'Yes',
        onPress: async () => {
            await deletePlace(await getDBConnection(), placeId)
            route.params.refresh();
            navigation.goBack();
        },
      },
    ]);
  }

    useEffect(()=>{
      _queryByID(placeId);
    },[]);

    return (
      <View style={styles.container}>
        <ScrollView>
          <InputWithLabel
            textLabelStyle={styles.TextLabel}
            textInputStyle={styles.TextInput}
            label={'Name'}
            value={place ? place.name : ''}
            orientation={'vertical'}
            editable={false}
          />
          <InputWithLabel
            textLabelStyle={styles.TextLabel}
            textInputStyle={styles.TextInput}
            label={'City'}
            value={place ? place.city : ''}
            orientation={'vertical'}
            editable={false}
          />
          <InputWithLabel
            textLabelStyle={styles.TextLabel}
            textInputStyle={styles.TextInput}
            label={'Date'}
            value={place ? formatted(new Date(place.date)) : ''}
            orientation={'vertical'}
            editable={false}
          />
        </ScrollView>
        <FloatingAction
          actions={actions}
          color={'#a80000'} //   floatingIcon={( //     <Image //       source={require('./images/baseline_edit_white_18dp.png')} //     /> //   )}
          onPressItem={name => {
            switch (name) {
              case 'edit':
                navigation.navigate('EditScreen', {
                  id: place ? place.id : 0,
                  headerTitle: place ? place.name : '',
                  refresh: _queryByID,
                  homeRefresh: route.params.refresh,
                });
                break;
              case 'delete':
                _delete();
                break;
            }
          }}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  TextLabel: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 3,
    textAlignVertical: 'center',
  },

  TextInput: {
    fontSize: 24,
    color: 'black',
  },

  pickerItemStyle: {
    fontSize: 20,
    color: '#000099',
  },
});

export default ViewScreen;