import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text, ScrollView, TouchableNativeFeedback } from 'react-native';
import {InputWithLabel, PickerWithLabel} from './UI';

let animalsData = [
  {
    key: '112',
    value: 'Kangaroo',
  },
  {
    key: '222',
    value: 'Koala',
  },
  {
    key: '333',
    value: 'Cat',
  },
  {
    key: '444',
    value: 'Dog',
  },
];

const App = () => {
  const [animals,setAnimals] = useState<any[]>([]);
  const [animal,setAnimal] = useState('112');
  const [selectedAnimalCode,setSelectedAnimalCode] = useState('');

  useEffect(()=>{                           //animal list
    setAnimals(animalsData);
  },[]);

  const handleShowCode = () => {            //function to handle when the TouchableNativeFeedback was click
    const selectedAnimal = animals.find( (item:any) => item.key === animal);
    if (selectedAnimal) {
      setSelectedAnimalCode(selectedAnimal.value);
    }
  };

  return (
    <ScrollView>
      
      <PickerWithLabel                      //picker list from the animal list 
        label="Animal:"
        items={animals}                     //animal list
        orientation={'horizontal'}
        prompt='Select Favourite Animal'
        selectedValue={ animal }
        onValueChange={(itemValue:any) => {
          setAnimal(itemValue);
        }}
      />
      
      <InputWithLabel                 //to display the animal code only
          label="Value:"
          orientation={'horizontal'}
          placeholder="type here"
          value={animal}
          editable={false}    
      />

      <View style={styles.container}>
        <TouchableNativeFeedback onPress={handleShowCode}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Click Me</Text>
          </View>
        </TouchableNativeFeedback>
      </View>

      {selectedAnimalCode ? (
        <View style={styles.container}>
          <Text style={styles.label}>Selected Animal:</Text>
          <TextInput
            style={styles.input}
            value={selectedAnimalCode}
            editable={false} // Make the TextInput read-only
          />
        </View>
      ) : null}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    // right:20,
    fontSize: 20,
    color: 'blue',
  },
  button: {
    backgroundColor: '#286090',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default App;