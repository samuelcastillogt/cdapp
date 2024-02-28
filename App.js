
import { useState } from 'react';
import { Button, StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import HomeStack from './stacks/HomeStack';
const Stack = createNativeStackNavigator()
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Shop from './pages/Shop';
import ShopStack from './stacks/ShopStack';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={HomeStack} options={{
                                                              headerShown: false,
                                                              tabBarIcon:() => {return <FontAwesome5 name="newspaper" size={24} color="black" />}
                                                              }} />
      <Tab.Screen name="Tienda" component={ShopStack} options={{
                                                              headerShown: false,
                                                              tabBarIcon:() => {return <Fontisto name="shopping-store" size={24} color="black" />}
                                                            }} />
    </Tab.Navigator>      
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCF2F1',
  },
});
