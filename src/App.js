// @flow

import * as React from 'react';

import NavigationReact from './navigation/NavigationReact';

type Props = {};
type State = {};

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
  uri: 'https://us1.prisma.sh/advanced-react-training-api/money-trackr/dev',
});

class App extends React.Component<Props, State> {
  render() {
    return (
      <ApolloProvider client={client}>
        <NavigationReact />
      </ApolloProvider>
    );
  }
}

export default App;
