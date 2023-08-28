import React from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeModules } from 'react-native';

const UnityModule = NativeModules.UnityModule;
function HomeScreen() {
  const navigation = useNavigation();
  const launchUnity = () => {
    // Call the method to launch Unity app
    navigation.navigate('Unity'); // Navigate to Unity screen after launching
  };

  return (
    <View style={{flex:1,justifyContent:"space-evenly",alignItems:'center'}}>
      <TouchableOpacity onPress={launchUnity} style={{width:200,height:50,backgroundColor:'blue',justifyContent:'center',borderRadius:20}}>
      <Text style={{color:'white' , textAlign:"center",fontSize:30}}>Launch Unity</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('PhotoSelect')} style={{width:200,height:50,backgroundColor:'blue',justifyContent:'center',borderRadius:20}}>
      <Text style={{color:'white' , textAlign:"center",fontSize:30}}>Select Photos</Text></TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
