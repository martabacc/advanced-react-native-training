import React from 'react';
import {Text, View} from 'react-native';

const greet = ({name}) => (
  typeof name === 'string'
  ? <Text>`Hello ${name}`</Text> 
  : <Text>Hello nobody!</Text>
};

const App = () => {
  const greeting = greet()
  return (
    <View>
      <Text>{greeting}</Text>
    </View>
  )
};

export default App;
