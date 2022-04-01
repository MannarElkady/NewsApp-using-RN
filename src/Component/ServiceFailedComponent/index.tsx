import {StyleSheet, Text} from 'react-native';
import React from 'react';

//TODO: Enhance UI
const ServiceFailedComponent = () => {
  return (
    <Text style={styles.container}>
      Service Failed Service Failed Service FailedService Failed
    </Text>
  );
};

export default ServiceFailedComponent;

const styles = StyleSheet.create({
  container: {fontSize: 21, flex: 1, justifyContent: 'center'},
});
