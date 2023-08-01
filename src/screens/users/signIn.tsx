import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import api from '../../utilities/network/httpService';

const SignInScreen = () => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');

  const handleSignIn = async() => {
    try {
      const response = await api.post('/api/users/signin', { name, contactNumber, email,username, password });
      console.log('response',response)
    } catch (error) {
      console.log(error);
      // handle error
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Name"
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        onChangeText={setContactNumber}
        value={contactNumber}
        placeholder="Contact Number"
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
      />
       <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Usernanme"
        autoCapitalize="none"
        keyboardType="default"
      />
       <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        autoCapitalize="none"
        keyboardType="visible-password"
      />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default SignInScreen;
