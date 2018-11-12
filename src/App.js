// @flow
import React from 'react';
import {Text, View} from 'react-native';

type GreetingProps = {
  name?: ?string,
};
const greet = (props: ?GreetingProps) => {
  const {name = 'World'} = props;
  return <Text>`Hello ${name}`</Text>;
};

const App = () => {
  const greeting = greet();
  return (
    <View>
      <Text>{greeting}</Text>
    </View>
  );
};

export default App;
