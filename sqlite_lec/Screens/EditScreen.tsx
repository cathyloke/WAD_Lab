import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import {InputWithLabel, PickerWithLabel, AppButton} from '../UI';

let config = require('../Config');
let common = require('../CommonData');

const EditScreen = ({route, navigation}: any) => {

  const [id, setId] = useState(route.params.id);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [postcode, setPostcode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');


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
          setName(member.name);
          setEmail(member.email);
          setPhone(member.phone);
          setAddress(member.address);
          setPostcode(member.postcode);
          setCity(member.city);
          setState(member.state);
          navigation.setOptions({headerTitle: member.name});
      })
      .catch(error => {
        console.error(error);
      });
  }

  const _edit = () => {
    let url = config.settings.serverPath + '/api/members/' + id;

    fetch(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        name: name,
        email: email,
        phone: phone,
        address: address,
        postcode: postcode,
        city: city,
        state: state,
      }),
    })
      .then(response => {
        console.log(response);
        if (!response.ok) {
          Alert.alert('Error:', response.status.toString());
          throw Error('Error ' + response.status);
        }

        return response.json();
      })
      .then(respondJson => {
        if (respondJson.affected > 0) {
          Alert.alert('Record UPDATED for', name);
        } else {
          Alert.alert('Error in UPDATING');
        }
        route.params._refresh();
        navigation.goBack();
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(()=>{
    _loadByID();
  },[]);

  return (
    <ScrollView style={{flex: 1, margin: 5}}>
      <InputWithLabel
        textLabelStyle={styles.TextLabel}
        textInputStyle={styles.TextInput}
        label={'Name'}
        placeholder={'type member Name here'}
        value={name}
        onChangeText={(name:string) => {
          setName(name);
        }}
        orientation={'vertical'}
      />
      <InputWithLabel
        textLabelStyle={styles.TextLabel}
        textInputStyle={styles.TextInput}
        label={'Email'}
        placeholder={'type member Name here'}
        value={email}
        onChangeText={(email:string) => {
          setEmail(email);
        }}
        orientation={'vertical'}
      />
      <InputWithLabel
        textLabelStyle={styles.TextLabel}
        textInputStyle={styles.TextInput}
        label={'Phone'}
        placeholder={'type member Phone here'}
        value={phone}
        onChangeText={(phone:string) => {
          setPhone(phone);
        }}
        orientation={'vertical'}
      />
      <InputWithLabel
        textLabelStyle={styles.TextLabel}
        textInputStyle={styles.TextInput}
        label={'Address'}
        placeholder={'type member Address here'}
        value={address}
        onChangeText={(address:string) => {
          setAddress(address);
        }}
        orientation={'vertical'}
      />
      <InputWithLabel
        textLabelStyle={styles.TextLabel}
        textInputStyle={styles.TextInput}
        label={'Postcode'}
        placeholder={'type member Postcode here'}
        value={postcode}
        onChangeText={(postcode:string) => {
          setPostcode(postcode);
        }}
        orientation={'vertical'}
      />
      <InputWithLabel
        textLabelStyle={styles.TextLabel}
        textInputStyle={styles.TextInput}
        label={'City'}
        placeholder={'type member City here'}
        value={city}
        onChangeText={(city:string) => {
          setCity(city);
        }}
        orientation={'vertical'}
      />
      <PickerWithLabel
        textLabelStyle={styles.TextLabel}
        pickerItemStyle={styles.pickerItemStyle}
        label={'State'}
        items={common.states}
        mode={'dialog'}
        selectedValue={state}
        onValueChange={(itemValue:string, itemIndex:number) => {
          setState(itemValue);
        }}
        orientation={'vertical'}
        textStyle={{fontSize: 24}}></PickerWithLabel>
      <AppButton title={'Edit'} onPress={_edit}></AppButton>
    </ScrollView>
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

export default EditScreen;