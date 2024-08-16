import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

/**
 * InputWithLabel
 */
const InputWithLabel = ( props: any ) => {

  const orientationDirection = (props.orientation == 'horizontal') ? 'row': 'column';

  return (
    <View style={[inputStyles.container, {flexDirection: orientationDirection}]}>
      <Text style={inputStyles.label}>{props.label}</Text>
      <TextInput
        style={[inputStyles.input, props.style]}
        {...props}
      />
    </View>
  );
}

/**
 * PickerWithLabel
 */
const PickerWithLabel = ( props: any )  => {

    const orientationDirection = (props.orientation == 'horizontal') ? 'row': 'column';

    return (
    <View style={[inputStyles.container, {flexDirection: orientationDirection}]}>
        <Text style={inputStyles.label}>{props.label}</Text>
        <Picker 
            style={(props.orientation == 'horizontal') ? {flex:3} : ''}
            {...props}
        >
        {props.items.map( (item:any) => {
            return (
            <Picker.Item
                label={item.value}
                value={item.key}
                key={item.key}
                style={inputStyles.input}
            />
            );
        })}
        </Picker>
    </View>
    );
}

const buttonStyles = StyleSheet.create({
  button: {
    margin: 5,
    alignItems: 'center',
  },
  buttonText: {
    padding: 20,
    fontSize: 20,
    color: 'white',
  },
});

const inputStyles = StyleSheet.create({
  container: {
    height: 100,
  },
  label: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 3,
    textAlignVertical: 'center',
  },
  input: {
    flex: 3,
    fontSize: 20,
    color: 'blue',
  },
});

export {
  InputWithLabel,
  PickerWithLabel
}