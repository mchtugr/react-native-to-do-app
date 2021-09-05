import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header.styles';

const Header = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>To Do List</Text>
      <Text style={styles.text}>({props.count})</Text>
    </View>
  );
};

export default Header;
