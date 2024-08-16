import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text, ScrollView, TouchableNativeFeedback } from 'react-native';
import InputWithLabel from './InputWithLabel';

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
  const [animalName,setAnimalName] = useState('');
  const [selectedAnimalCode,setSelectedAnimalCode] = useState('');

  useEffect(()=>{
    setAnimals(animalsData);
  },[]);

  const handleShowCode = () => {
    const selectedAnimal = animals.find( (item:any) => item.key === animal);
    if (selectedAnimal) {
      setSelectedAnimalCode(selectedAnimal.value);
    }
  };

    return (
      <ScrollView>
        <View style={[styles.container, {flexDirection: 'row'}]}>
          <Text style={styles.label}>Animal:</Text>
          <TextInput
            style={styles.input}
            value={ animals.find(item => item.key === animal) ? (animals.find(item => item.key === animal)).value : ''}
            editable={false} // Make the TextInput read-only
          />
        </View>
        <InputWithLabel
            label="Value:"
            orientation={'horizontal'}
            placeholder="type here"
            value={animal}
            onChangeText={ (animal:string) =>
              setAnimal(animal)
        }/>
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