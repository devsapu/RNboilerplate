import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../utilities/network/httpService'; 

const HomeScreen = ({ navigation }:any) => {
  return<View style={{justifyContent:'center', alignItems:'center' ,flex:1}}>
    <Text>Welcome to SL doc</Text>
  </View>
};

const styles = StyleSheet.create({
  // your styles here
});

export default HomeScreen;
