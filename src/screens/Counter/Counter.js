// @flow

import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import withColorRandomizer from '../../enhancers/withColorRandomizer';

import {Text} from '../../core-ui';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }

  incrementCounter = () => {
    this.setState({counter: this.state.counter + 1});
    this.props.changeColor();
  };

  decrementCounter = () => {
    this.setState({counter: this.state.counter - 1});
    this.props.changeColor();
  };

  render() {
    return (
      <View style={[styles.root, {backgroundColor: this.props.bgColor}]}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.incrementCounter}
        />
        <Text style={styles.counterText}>{this.state.counter}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.decrementCounter}
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    flex: 1,
    width: '100%',
  },
  counterText: {
    fontSize: 130,
    color: 'white',
  },
});

export default withColorRandomizer(Counter);
