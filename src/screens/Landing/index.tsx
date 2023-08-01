import React from 'react';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LandingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button 
        title="Go to Login" 
        onPress={() => navigation.navigate('Login')} 
      />
      <Button 
        title="Register" 
        onPress={() => navigation.navigate('SignIn')} 
      />
    </View>
  );
};

export default LandingScreen;
