import React from 'react';
import {View} from 'react-native';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default (C) => {
  return class withRandomBgColor extends React.Component {
    constructor(props) {
      super(props);
      this.state = {color: getRandomColor()};
    }

    changeColor = () => {
      this.setState({color: getRandomColor()});
    };

    render() {
      return (
        <C
          changeColor={this.changeColor}
          bgColor={this.state.color}
          {...this.props}
        />
      );
    }
  };
};
