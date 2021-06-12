import React, { useEffect } from 'react';
import {View, Text, StyleSheet, Image, TextInput,StatusBar,Keyboard,TouchableWithoutFeedback,TouchableOpacity, Dimensions,ToastAndroid} from 'react-native';
import {Icon} from 'react-native-elements';

const Home2 = ({ navigation }) => {
    return(
        <View>
            <Text style={styles.loginTitleText}>LOGIN</Text>
            
        </View>
    );

};

const styles = StyleSheet.create({
    container: { 
  
  
  
  
      flex:2,
      position:'relative',
      backgroundColor:'#333',
      fontWeight:'bold',
      textShadowColor:'#333'
      
      
      
    },
    loginTitleText: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10,
      },
})
export default home2;