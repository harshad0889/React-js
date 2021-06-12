import React, { useEffect } from 'react';
import {View, Text, StyleSheet, Image, TextInput,StatusBar,Keyboard,TouchableWithoutFeedback,TouchableOpacity, Dimensions,Button} from 'react-native';
import {Icon} from 'react-native-elements';

const Home =({navigation})=>{



   
  
    
        return(
         <TouchableWithoutFeedback
         onPress={()=> {
           Keyboard.dismiss();
         }}
         >
    
         <View style={styles.container}>
         
         <View style={styles.bigcircle}></View>
         <View style={styles.smallCircle}></View>
         <View style={styles.centerizedView}>
         <View style={styles.authBox}>
    
         <View style={styles.logoBox}>
    
           <Icon
          color='#fff'
          name='lock'
          type='font-awesome'
          size={50}
    
          />
          </View>
            
            <Text style={styles.loginTitleText}>LOGIN</Text>
            <View style={styles.hr}></View>   
            <View style={styles.inputBox}>
    
            
    
            <Icon
            style={styles.texticon}
          color='#333'
          name='envelope'
          type='font-awesome'
          
          
    
          />
              <Text style={styles.inputLabel}></Text>
              <TextInput 
              style={styles.input}
              placeholder='Email'
               
              keyboardType='email-address'
              textContentType='emailAddress'
              ></TextInput>
              
            </View>   
            
    
            <View style={styles.inputBox}>
            <Icon
            style={styles.texticon}
          color='#333'
          name='lock'
          type='font-awesome'
          
          
    
          />
    
              <Text style={styles.inputLabel}></Text>
              <TextInput style={styles.input}
               placeholder='Password'
              secureTextEntry={true}
              textContentType='password'
              ></TextInput>
              
              
            </View> 
            <Button title="login" onPress = {() =>
              navigation.navigate("home")
            }>
              
            </Button>
            <TouchableOpacity >
              <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
            </View>
            </View>
            </View>
            
    
    
    
    
            
         
         </TouchableWithoutFeedback>
        );
    
    
        
    

    
};
    
    const styles = StyleSheet.create({
      container: { 
    
    
    
    
        flex:2,
        position:'relative',
        backgroundColor:'#0000'
        
        
      },
      bigcircle:{
        width: Dimensions.get('window').height * 0.6,
        height: Dimensions.get('window').height * 0.5,
        backgroundColor:'#0000',
        position:'absolute',
        borderRadius: 1000,
        right: Dimensions.get('window').width * 0.10,
        top: -50,
      },
      smallCircle: {
        width: Dimensions.get('window').height * 0.4,
        height: Dimensions.get('window').height * 0.4,
        backgroundColor: '#0000',
        borderRadius: 1000,
        position: 'absolute',
        bottom: Dimensions.get('window').width * -0.2,
        right: Dimensions.get('window').width * -0.3,
      },
      centerizedView: {
        width: '100%',
        top: '25%',
      },
      authBox: {
        width: '80%',
        
        backgroundColor: '#fafafa',
        borderRadius: 20,
        alignSelf: 'center',
        paddingHorizontal: 15,
        paddingBottom: 30,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      logoBox: {
        width: 100,
        height: 100,
        backgroundColor: '#333',
        borderRadius: 1000,
        alignSelf: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: -50,
        marginBottom: -50,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
      },
      loginTitleText: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10,
      },
      hr: {
        width: '100%',
        height: 0.5,
        backgroundColor: '#444',
        marginTop: 6,
      },
      inputBox: {
        marginTop: 10,
        flexDirection:'row',
        display:'flex',
        height:40,
        borderRadius:10,
        backgroundColor:'#f1f3f6',
        alignItems:'center'
      },
      inputLabel: {
        fontSize: 16,
        color:'#333',
        height:40,
        flex:1,
    
      },
      input: {
        width: '100%',
        height: 40,
        
        borderRadius: 4,
        paddingHorizontal: 10,
      },
      loginButton: {
        backgroundColor: '#0000',
        marginTop: 10,
        paddingVertical: 5,
        borderRadius: 4,
        borderWidth:2,
        borderColor:'#333',
        textAlign: 'center',
        fontWeight:'bold'
      },
      loginButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
      },
      registerText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        textDecorationLine:'underline'
      },
      forgotPasswordText: {
        textAlign: 'center',
        marginTop: 12,
        fontSize: 16,
      },
      texticon:{
        paddingHorizontal:8,
      }
    
      
    });
    
    

