import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import UnityScreen from './screens/UnityView';
import PhotoSelectScreen from './screens/SelectImages';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack=createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Unity" component={UnityScreen} />
        <Stack.Screen name="PhotoSelect" component={PhotoSelectScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
