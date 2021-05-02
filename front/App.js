import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { FiHome} from 'react-icons/fi'
import Login from './src/pages/login'
import Home from './src/pages/home'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return(
  <Tab.Navigator>
    <Tab.Screen name="Login" component={Login}  />
    <Tab.Screen name="Home" component={Home} />
  </Tab.Navigator>
  )
}

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Adopet" component={HomeTabs} />
        <Stack.Screen name ="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
    
    
    //<View>
      //<Login></Login>
      //<Home></Home>
    //</View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
