import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the hook

function UnityScreen() {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <View style={{ flex: 1,justifyContent:'center',alignItems:'center' }}>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default UnityScreen;
