import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Screen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Message {props.index} </Text>
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
