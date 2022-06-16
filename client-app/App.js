import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screen/Home';
import Card from './Components/Card';
import { createAppContainer } from 'react-navigation';
import { AppNavigator } from './routes/Route';

//cree root
const Navigator = createAppContainer();

export default function App() {
  return (
    <Navigator>
        <HomeScreen />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
