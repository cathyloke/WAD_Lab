import React, { useState, useEffect } from 'react';
import {Alert, Image, StyleSheet, ScrollView, View} from 'react-native';
import {InputWithLabel} from '../UI';
import {FloatingAction} from 'react-native-floating-action';

let config = require('../Config');
let common = require('../CommonData');

const actions = [
  {
    text: 'Edit',
    color: '#cd5c5c',
    icon: require('../icons/edit_icon.png'),
    name: 'edit',
    position: 2,
  },
  {
    text: 'Delete',
    color: '#cd5c5c',
    icon: require('../icons/delete_icon.jpg'),
    name: 'delete',
    position: 1,
  },
];

const ViewScreen = ({route, navigation}: any) => {

  const [id, setId] = useState(route.params.id);
  const [member, setMember] = useState<any>();

  useEffect(()=>{
    _loadByID();
  },[]);


  const _loadByID = () => {
    let url = config.settings.serverPath + '/api/members/' + id;
    console.log(url);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          Alert.alert('Error:', response.status.toString());
          throw Error('Error ' + response.status);
        }
        return response.json();
      })
      .then(member => {
        setMember(member);
        navigation.setOptions({headerTitle: member.name});
      })
      .catch(error => {
        console.error(error);
      });
  }

  const _delete = () => {
    Alert.alert('Confirm to DELETE', member.name, [
      {
        text: 'No',
        onPress: () => {},
      },
      {
        text: 'Yes',
        onPress: () => {
          let url =
            config.settings.serverPath + '/api/members/' + id;
          console.log(url);
          fetch(url, {
            method: 'DELETE',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({id: id}),
          })
            .then(response => {
              if (!response.ok) {
                Alert.alert('Error:', response.status.toString());
                throw Error('Error ' + response.status);
              }
              return response.json();
            })
            .then(responseJson => {
              if (responseJson.affected == 0) {
                Alert.alert('Error in DELETING');
              }
            })
            .catch(error => {
              console.error(error);
            });
          route.params._refresh();
          navigation.goBack();
        },
      },
    ]);
  }

    //console.log(member);
    if (member) {
      return (
        <ScrollView style={{flex: 1, margin: 10}}>
          <InputWithLabel
            textInputStyle={styles.input}
            textLabelStyle={styles.label}
            editable={false}
            label="Name:">
            {member.name ? member.name : 'No information'}
          </InputWithLabel>
          <InputWithLabel
            textInputStyle={styles.input}
            textLabelStyle={styles.label}
            editable={false}
            label="Email:">
            {member.email ? member.email : 'No information'}
          </InputWithLabel>
          <InputWithLabel
            textInputStyle={styles.input}
            textLabelStyle={styles.label}
            editable={false}
            label="Phone:">
            {member.phone ? member.phone : 'No information'}
          </InputWithLabel>
          <InputWithLabel
            textInputStyle={styles.input}
            textLabelStyle={styles.label}
            editable={false}
            label="Address:">
            {member.address ? member.address : 'No information'}
          </InputWithLabel>
          <InputWithLabel
            textInputStyle={styles.input}
            textLabelStyle={styles.label}
            editable={false}
            label="Postcode:">
            {member.postcode ? member.postcode : 'No information'}
          </InputWithLabel>
          <InputWithLabel
            textInputStyle={styles.input}
            textLabelStyle={styles.label}
            editable={false}
            label="City:">
            {member.city ? member.city : 'No information'}
          </InputWithLabel>
          <InputWithLabel
            textInputStyle={styles.input}
            textLabelStyle={styles.label}
            editable={false}
            label="State:">
            {member.state
              ? common.getValue(common.states, member.state)
              : 'No information'}
          </InputWithLabel>
          <FloatingAction
            actions={actions}
            color="#cd5c5c"
            onPressItem={name => {
              switch (name) {
                case 'edit':
                  navigation.navigate('Edit', {
                    id: member.id,
                    _refresh: _loadByID,
                    homeRefresh: route.params._refresh,
                  });
                  break;
                case 'delete':
                  _delete();
                  break;
              }
            }}></FloatingAction>
        </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    color: 'darkblue',
    fontSize: 15,
  },

  input: {
    color: 'black',
  },
});

export default ViewScreen;