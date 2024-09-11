import React, { useState, useEffect } from 'react';
import {StyleSheet, TouchableWithoutFeedback, View, ScrollView, Platform} from 'react-native';
import {InputWithLabel, AppButton} from '../UI';
import { getDBConnection, updatePlace, getPlaceById } from '../db-service';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { formatted } from '../utility';

const EditScreen = ({route, navigation} : any )  => {

    const [placeId, setPlaceId] = useState(route.params.id);
    const[name, setName] = useState('');
    const[city, setCity] = useState('');
    const[date, setDate] = useState(new Date(Date.now()));
    const[openPicker, setOpenPicker] = useState(false);

    const _query = async () => {
        const result = await getPlaceById(await getDBConnection(), placeId);
        setName(result.name);
        setCity(result.city);
        setDate(new Date(result.date));
    }

    const openDatePicker = () => {
      setOpenPicker(true);
    }

    const onDateSelected = (event: DateTimePickerEvent, value: any ) => {
        setDate(value);
        setOpenPicker(false);
    }

    useEffect(()=>{
      _query();
    },[]);

    const _update = async () => {
        await updatePlace(await getDBConnection(), name, city, date.getTime() , placeId);
        route.params.refresh(placeId);
        route.params.homeRefresh();
        navigation.goBack();
    }

    return (
      <View style={styles.container}>
        <ScrollView>
        <InputWithLabel
          textLabelStyle={styles.TextLabel}
          textInputStyle={styles.TextInput}
          label={'Name'}
          placeholder={'type Name here'}
          value={name}
          onChangeText={(name:any) => {
            setName(name);
          }}
          orientation={'vertical'}
        />
        <InputWithLabel
          textLabelStyle={styles.TextLabel}
          textInputStyle={styles.TextInput}
          placeholder={'type City here'}
          label={'City'}
          value={city}
          onChangeText={(city:any) => {
            setCity(city);
          }}
          orientation={'vertical'}
        />
        <TouchableWithoutFeedback onPress={openDatePicker}>
          <View>
            <InputWithLabel
              textInputStyle={styles.TextInput}
              textLabelStyle={styles.TextLabel}
              label="Date:"
              value={formatted(new Date(date))}
              editable={false}></InputWithLabel>
          </View>
        </TouchableWithoutFeedback>

        {openPicker &&
          <DateTimePicker
            value={new Date(date)}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
            is24Hour={false}
            onChange={onDateSelected}
            style={styles.datePicker}
        />}

          <AppButton
            style={styles.button}
            title={'Save'}
            theme={'primary'}
            onPress={_update}
          />
        </ScrollView>
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
    color: '#000099',
  },

  pickerItemStyle: {
    fontSize: 20,
    color: '#000099',
  },
  button: {
    margin: 5,
    alignItems: 'center',
  },
  buttonText: {
    padding: 20,
    fontSize: 20,
    color: 'white',
  },
  datePicker: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  }
});
export default EditScreen;