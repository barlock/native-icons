import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import * as feather from '@native-icons/feather';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.iconTitle}>Feather</Text>
        <View style={styles.container}>
          { Object.keys(feather).map(icon => (
            <View style={styles.iconContainer} key={icon}>
              { React.createElement(feather[icon], { color: 'green', size: 30 }) }
              <Text>{icon}</Text>
            </View>
          ))}
        </View>
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
