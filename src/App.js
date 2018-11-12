// @flow
import React from 'react';
import {Text, View} from 'react-native';

type GreetingProps = {
  name: string,
};
const Greet = (props: GreetingProps) => {
  return <Text>`Hello ${props.name}`</Text>;
};

const App = () => {
  const greeting = <Greet name="Mickey Mouse" />;
  return (
    <View>
      <Text>{greeting}</Text>
    </View>
  );
};

export default App;
