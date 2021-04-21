import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Loading from '../Common/Loading.container';

const query = gql`
{
	users {
	  id
    name
    email
	}
}`;

export default class User extends Component {
  dropdown = React.createRef();

  showError = () => {
    this.dropdown.alertWithType('error', 'Error', 'An error occured, please try again.');
  };

  render() {
    return (
      <View style={styles.container}>
        <Query
          query={query}
        >
          {
            ({ loading, error, data }) => {
              if (loading) { return <Loading />; }
              if (error) { this.showError(); return null; }

              const { users } = data;
              return (
                <View style={styles.container}>
                  <Text style={styles.h2text}>
                    User
                  </Text>
                  <FlatList
                    data={users}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                      <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('UpdateUser', {user: item})}>
                        <View style={styles.flatview}>
                          <Text style={styles.name}>{item.name}</Text>
                          <Text style={styles.email}>{item.email}</Text>
                        </View>
                      </TouchableOpacity>
                    }
                    keyExtractor={item => item.email}
                  />
                </View>
              );
            }
          }
        </Query>
        <DropdownAlert ref={ref => this.dropdown = ref} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18,
  },
  email: {
    color: 'red',
  },

});
