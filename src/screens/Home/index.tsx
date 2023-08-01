
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }:any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to SLDoc</Text>
      <Text style={styles.subtitle}>Now you can access your doctor easily</Text>
      <Button 
        title="Go to Login" 
        onPress={() => navigation.navigate('Landing')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 32,
  },
});

export default HomeScreen;
