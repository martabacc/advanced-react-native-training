import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const users = [
  {
    'name': 'Proxima Midnight',
    'email': 'proxima@appdividend.com',
  },
  {
    'name': 'Ebony Maw',
    'email': 'ebony@appdividend.com',
  },
  {
    'name': 'Black Dwarf',
    'email': 'dwarf@appdividend.com',
  },
  {
    'name': 'Mad Titan',
    'email': 'thanos@appdividend.com',
  },
  {
    'name': 'Supergiant',
    'email': 'supergiant@appdividend.com',
  },
  {
    'name': 'Loki',
    'email': 'loki@appdividend.com',
  },
  {
    'name': 'corvus',
    'email': 'corvus@appdividend.com',
  },
  {
    'name': 'Proxima Midnight',
    'email': 'proxima1@appdividend.com',
  },
  {
    'name': 'Ebony Maw',
    'email': 'ebony1@appdividend.com',
  },
  {
    'name': 'Black Dwarf',
    'email': 'dwarf1@appdividend.com',
  },
  {
    'name': 'Mad Titan',
    'email': 'thanos1@appdividend.com',
  },
  {
    'name': 'Supergiant',
    'email': 'supergiant1@appdividend.com',
  },
  {
    'name': 'Loki',
    'email': 'loki1@appdividend.com',
  },
  {
    'name': 'corvus',
    'email': 'corvus1@appdividend.com',
  },
];

export default class User extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h2text}>
          User
        </Text>
        <FlatList
          data={users}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>
            <View style={styles.flatview}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          }
          keyExtractor={item => item.email}
        />
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
