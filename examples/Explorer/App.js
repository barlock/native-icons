import React, { Fragment } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import * as feather from '@native-icons/feather';
import * as ionicons from '@native-icons/ionicons';

const IconCollection = ({ collection, title }) => (
  <Fragment>
    <Text style={styles.iconTitle}>{title}</Text>
    <View style={styles.container}>
      { Object.keys(collection).map(icon => (
        <View style={styles.iconContainer} key={icon}>
          { React.createElement(collection[icon], { color: 'gray', size: 30 }) }
          <Text>{icon}</Text>
        </View>
      ))}
    </View>
  </Fragment>
);

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <IconCollection collection={ionicons} title='Ionicons'/>
        <IconCollection collection={feather} title='Feather'/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconTitle: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconContainer: {
    width: '32%',
    paddingVertical: 10,
    alignItems: 'center'
  }
});
