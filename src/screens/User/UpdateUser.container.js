import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import DropdownAlert from 'react-native-dropdownalert';
import Loading from '../Common/Loading.container';
import UpdateUserComponent from './UpdateUser.component';

import t from 'tcomb-form-native'; // 0.6.9

const UpdateUserQuery = gql`
  mutation UpdateUser($id: String!, $name: String!, $email: String!) {
    updateUser(id: $id, name: $name, email: $email) {
      id
      name
      email      
    }
  }
`;

export default class UpdateUserContainer extends Component<*, *> {
  dropdown = React.createRef();

  handleSubmit = (data) => {
    console.log(data);
  };

  showError = () => {
    this.dropdown.alertWithType('error', 'Error', 'An error occured, please try again.');
  };

  render() {
    const { user: { id } } = this.props.navigation.state.params;
    return (
      <Mutation mutation={UpdateUserQuery} id={{ id }}>
        {(toggleTodo, { loading, error, data }) => (
          <View style={styles.container}>
            <UpdateUserComponent handleSubmit={toggleTodo} {...this.props} />
            {loading && <Loading/>}
            <DropdownAlert ref={ref => this.dropdown = ref} />
            {error && this.showError()}
          </View>
        )}
      </Mutation>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
});
