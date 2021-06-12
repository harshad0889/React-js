import React, { useEffect } from 'react';
import {View, Text, StyleSheet, Image, TextInput,StatusBar,Keyboard,TouchableWithoutFeedback,TouchableOpacity, Dimensions,ToastAndroid} from 'react-native';
import {Icon} from 'react-native-elements';
import {NavigationContainer} from "@react-navigation/native";
import{createStackNavigator} from "@react-navigation/stack";
import Profilescreen from "./Profilescreen";
import Home from "./Home";
import home2 from "./src/screens/Home2";

const Stack = createStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
      
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
        
        
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}



 