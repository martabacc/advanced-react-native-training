
import {View, StyleSheet, Button} from 'react-native';
import React, {Component} from 'react';
import DropdownAlert from 'react-native-dropdownalert';

import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  name: t.String,
});

export default class UpdateUser extends Component<*,*> {
  form = React.createRef();

  handleSubmit = () => {
    const dataToSubmit = this.form.getValue();
    this.props.handleSubmit(dataToSubmit)
  };

  render() {
    const {user} = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Form type={User} value={user} ref={ref => this.form = ref} />
        <Button
          title="Update user"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff'
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
});
