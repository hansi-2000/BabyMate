import React from 'react';
import { View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';


import Button from './component/SButton';
import ImageViewer from './component/ImageViewer';
const PlaceholderImage = require('./assets/logo.png');



const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
       <View style={styles.imageContainer}>
       <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        
        <Button label="BabyMate" />
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  footerContainer: {
    flex: 1/3,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
 
});

export default StartScreen;