import React, { useState, useEffect } from "react"
import { TouchableOpacity, Text, View, SafeAreaView, StyleSheet, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PlaceholderImage = require('./assets/logo.png');

function Dashboard({route}) {
  const navigation = useNavigation();

  const paramKeyValue = route.params.paramKey;
  useEffect(() => {
    console.log(paramKeyValue); // Output the value of 'paramey' to the console
  }, []);
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        
        <View style={styles.imageContainer}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Profile',{ paramKey: route.params.paramKey })}>
          <Image source={PlaceholderImage} style={styles.image} /></TouchableOpacity>
          <View style={styles.lineBreak} />
          <Text>BabyMate</Text>
        </View>
        
        <View style={styles.buttonSContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Calculator')}
            activeOpacity={0.5}>
            <Text style={styles.buttonText}>BMI Calculator</Text>
          </TouchableOpacity>
        </View>
  
        <View style={styles.buttonSContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Diagnosis',{ paramKey: route.params.paramKey })}
            activeOpacity={0.5}>
            <Text style={styles.buttonText}>Diagnosis</Text>
          </TouchableOpacity>
        </View>
      
        <View style={styles.buttonSContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Record',{ paramKey: route.params.paramKey })}
            activeOpacity={0.5}>
            <Text style={styles.buttonText}>Child Health Development Record</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  image: {
    width: 248 * 0.5,
    height: 238 * 0.5,
    borderRadius: 10,
  },

  lineBreak: {
    height: 15,
  },

  buttonSContainer: {
    
    alignSelf: 'flex-start',
    alignSelf: 'center',
    marginTop: -100,
    marginBottom: 150,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#318CE7',
    width: 320,
    height: 60
  },
 
});


export default Dashboard;