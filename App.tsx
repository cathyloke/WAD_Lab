import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';

const App = () => {
  //initialize the states of the App component to 0
  const [x,setX] = useState<string>('0');
  const [y,setY] = useState<string>('0');
  const [z, setZ] = useState<string>('0');
  const [sum,setSum] = useState<string>('0');
  const [difference,setDifference] = useState<string>('0');
  const [multiplication, setMultiplication] = useState<string>('0');

    return (
      <View>  
        <View style={{alignItems: 'center'}}> 
          <Text style={styles.title}>Simple Calculator</Text>
        </View>
        
        <View style={styles.container}>
          <Text style={styles.label}>
            First Number X
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(input) => {
                setX(input);                                          //set x state value
                setSum((Number(input) + Number(y) + Number(z)).toString());       //set the sum state value
                setDifference((Number(input) - Number(y) - Number(z)).toString());//set the difference state value
                setMultiplication((Number(input) * Number(y) * Number(z)).toString());
                }
              }
            value={x}                 //set the value of the TextInput
            keyboardType={'numeric'}
            selectTextOnFocus={true} //when user tap on it, all the text within the input field will be selected
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.label}>
            Second Number Y
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(input) => {
              setY(input);
              setSum((Number(x) + Number(input) + Number(z)).toString());
              setDifference((Number(x) - Number(input) - Number(z)).toString());
              setMultiplication((Number(x) * Number(input) * Number(z)).toString());
              }
            }
            value={y}
            keyboardType={'numeric'}
            selectTextOnFocus={true}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.label}>
            Third Number Z
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(input) => {
              setZ(input);
              setSum((Number(x) + Number(y) + Number(input)).toString());
              setDifference((Number(x) - Number(y) - Number(input)).toString());
              setMultiplication((Number(x) * Number(y) * Number(input)).toString());
              }
            }
            value={z}
            keyboardType={'numeric'}
            selectTextOnFocus={true}
          />
        </View>
        <View style={[styles.container,{paddingTop: 50}]}>
          <Text style={[styles.label,{color:'#B71C1C'}]}>
            Sum
          </Text>
          <TextInput
            style={styles.result}
            value={sum}
            editable={false}      //to prevent user input
          />
        </View>

        <View style={styles.container}>
          <Text style={[styles.label,{color:'#B71C1C'}]}>
            Difference
          </Text>
          <TextInput
            style={styles.result}
            value={difference}
            editable={false}
          />
        </View>

        <View style={styles.container}>
          <Text style={[styles.label,{color:'#B71C1C'}]}>
            Multiplication
          </Text>
          <TextInput
            style={styles.result}
            value={multiplication}
            editable={false}
          />
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30
  },
  label: {
    color: '#E53935',
    fontWeight: 'bold',
    fontSize: 24,
    margin: 5,

  },
  input: {
    color: 'black',
    fontSize: 24,
    margin: 5,
    textAlign: 'right',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    width: 100,
  },
  result: {
    color: 'green',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 5,
    textAlign: 'right',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default App;