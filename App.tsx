import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppButton from './AppButton';

const App = () => {
  const handleButtonPress = () => {
    console.log('Button Pressed');
  };

  const handleButtonLongPress = () => {
    console.log('Button Long Pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>AppButton Example</Text>

      <AppButton
        title="Success Button"
        theme="success"
        onPress={handleButtonPress}
        onLongPress={handleButtonLongPress}
      />

      <AppButton
        title="Info Button"
        theme="info"
        onPress={handleButtonPress}
        onLongPress={handleButtonLongPress}
      />

      <AppButton
        title="Warning Button"
        theme="warning"
        onPress={handleButtonPress}
        onLongPress={handleButtonLongPress}
      />

      <AppButton
        title="Danger Button"
        theme="danger"
        onPress={handleButtonPress}
        onLongPress={handleButtonLongPress}
      />

      <AppButton
        title="Primary Button"
        theme="primary"
        onPress={handleButtonPress}
        onLongPress={handleButtonLongPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;