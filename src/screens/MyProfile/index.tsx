import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, Alert, Button } from "react-native";
import api from "../../utilities/network/httpService";
const ProfileScreen = ({navigation}:any) => {
    const [user, setUser] = useState(null);

    const fetchUser = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        
        if (!token) {
          throw new Error('Access denied');
        }
        
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await api.get('api/users/me');  
        setUser(response.data);
      } catch (error :any) {
        Alert.alert('Error', error.message);
      }
    };
  
    useEffect(() => {
      fetchUser();
    }, []);
  
    return (
      <View style={{justifyContent:'center', alignItems:'center', flex:1}} >
        
        {user ? (
          <View style={{justifyContent:'center', alignItems:'center', flex:1}} >
            <Text >Hello, {user.name}</Text>
            <Text>Name: {user.name}</Text>
            <Text>Email: {user.email}</Text>
            <Text>Contact: {user.contactNumber}</Text>
             
            <Button 
              title="Go to Login" 
              onPress={() => navigation.navigate('Login')} 
            />
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    );
  }
  export default ProfileScreen