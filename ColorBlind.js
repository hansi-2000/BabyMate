import React, { useState, useEffect } from "react"
import { TouchableOpacity, Text, View, SafeAreaView, StyleSheet, Image, TextInput, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { doc, setDoc,collection, onSnapshot, updateDoc } from "firebase/firestore"; 
import {db} from './firebaseConfig';

const PlaceholderImage = require('./assets/logo.png');
const Image5 = require('./assets/5.jpg');
const Image7 = require('./assets/7.jpg');
const Image8 = require('./assets/8.jpg');
const Image12 = require('./assets/12.jpg');
const Image15 = require('./assets/15.jpg');
const Image26 = require('./assets/26.jpg');
const Image27 = require('./assets/27.jpg');
const Image73 = require('./assets/73.jpg');
const Image74 = require('./assets/74.jpg');
const Image96 = require('./assets/96.jpg');
const Refresh = require('./assets/refresh.png');

function ColorBlind({ route }) {
  const navigation = useNavigation();

  const paramKeyValue = route.params.paramKey;
  useEffect(() => {
    console.log(paramKeyValue); // Output the value of 'paramey' to the console
  }, []);
    const [num5, setNum5] = useState('');
    const [num7, setNum7] = useState('');
    const [num8, setNum8] = useState('');
    const [num12, setNum12] = useState('');
    const [num15, setNum15] = useState('');
    const [num26, setNum26] = useState('');
    const [num27, setNum27] = useState('');
    const [num73, setNum73] = useState('');
    const [num74, setNum74] = useState('');
    const [num96, setNum96] = useState('');
    const [count, setCount] = useState('');
    const [color, setColor] = useState('');
    
    const handleCalculate = () => {
      let count = 0; // Initialize count to 0
      
      
      if (num5 === '5') {
        count += 1;
        setNum5('Correct');
      }else{
        setNum5('Incorrect');
      }

      if (num7 === '7') {
        count += 1;
        setNum7('Correct');
      }else{
        setNum7('Incorrect');
      }

      if (num8 === '8') {
        count += 1;
        setNum8('Correct');
      }else{
        setNum8('Incorrect');
      }

      if (num12 === '12') {
        count += 1;
        setNum12('Correct');
      }else{
        setNum12('Incorrect');
      }

      if (num15 === '15') {
        count += 1;
        setNum15('Correct');
      }else{
        setNum15('Incorrect');
      }

      if (num26 === '26') {
        count += 1;
        setNum26('Correct');
      }else{
        setNum26('Incorrect');
      }

      if (num27 === '27') {
        count += 1;
        setNum27('Correct');
      }else{
        setNum27('Incorrect');
      }

      if (num73 === '73') {
        count += 1;
        setNum73('Correct');
      }else{
        setNum73('Incorrect');
      }

      if (num74 === '74') {
        count += 1;
        setNum74('Correct');
      }else{
        setNum74('Incorrect');
      }

      if (num96 === '96') {
        count += 1;
        setNum96('Correct');
      }else{
        setNum96('Incorrect');
      }
    
      console.log(count);
      setCount(count);

      if (count < 10) {
        const color = ((10-count)*100 / 10).toFixed(2);
        Alert.alert(`Your child has a ${color} % possibility to be colorblind`);
        setColor(color);
        create(); // Call the create() function
        
      }
      function create() {
        const docRef = doc(db, paramKeyValue, 'diagnosis');
      
        updateDoc(docRef, {
          colorblind: color
        })
          .then(() => {
            console.log('Data appended successfully');
          })
          .catch((error) => {
            console.error('Error appending data:', error);
          });
      }
      
    };

    const refresh = () => {
      setNum5('');
      setNum7('');
      setNum8('');
      setNum12('');
      setNum15('');
      setNum26('');
      setNum27('');
      setNum73('');
      setNum74('');
      setNum96('');
    };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
          <View style={styles.lineBreak} />
          <Text>BabyMate</Text>
        </View>
      </View>
      
      <Text style={styles.text}>Try to identify each number displayed</Text>
      <View style={styles.imagesContainer}>
 <ScrollView horizontal>
  <View style={styles.containerImg}>
  <Image source={Image5} style={[styles.images, { marginRight: 30}]} /><TextInput value={num5} onChangeText={setNum5} placeholder={'Type the number that is visible'} style={styles.input}/></View>
  <View style={styles.containerImg}>
  <Image source={Image7} style={[styles.images, { marginRight: 30 }]} /><TextInput value={num7} onChangeText={setNum7} placeholder={'Type the number that is visible'} style={styles.input}/></View>
  <View style={styles.containerImg}>
  <Image source={Image8} style={[styles.images, { marginRight: 30 }]} /><TextInput value={num8} onChangeText={setNum8} placeholder={'Type the number that is visible'} style={styles.input}/></View>
  <View style={styles.containerImg}>
  <Image source={Image12} style={[styles.images, { marginRight: 30 }]} /><TextInput value={num12} onChangeText={setNum12} placeholder={'Type the number that is visible'} style={styles.input}/></View>
  <View style={styles.containerImg}>
  <Image source={Image15} style={[styles.images, { marginRight: 30 }]} /><TextInput value={num15} onChangeText={setNum15} placeholder={'Type the number that is visible'} style={styles.input}/></View>
  <View style={styles.containerImg}>
  <Image source={Image26} style={[styles.images, { marginRight: 30 }]} /><TextInput value={num26} onChangeText={setNum26} placeholder={'Type the number that is visible'} style={styles.input}/></View>
  <View style={styles.containerImg}>
  <Image source={Image27} style={[styles.images, { marginRight: 30 }]} /><TextInput value={num27} onChangeText={setNum27} placeholder={'Type the number that is visible'} style={styles.input}/></View>
  <View style={styles.containerImg}>
  <Image source={Image73} style={[styles.images, { marginRight: 30 }]} /><TextInput value={num73} onChangeText={setNum73} placeholder={'Type the number that is visible'} style={styles.input}/></View>
  <View style={styles.containerImg}>
  <Image source={Image74} style={[styles.images, { marginRight: 30 }]} /><TextInput value={num74} onChangeText={setNum74} placeholder={'Type the number that is visible'} style={styles.input}/></View>
  <View style={styles.containerImg}>
  <Image source={Image96} style={[styles.images, { marginRight: 30 }]} /><TextInput value={num96} onChangeText={setNum96} placeholder={'Type the number that is visible'} style={styles.input}/></View>
</ScrollView>

<ScrollView>
<View style={styles.buttonContainer}>
<TouchableOpacity
onPress={handleCalculate}
activeOpacity={0.5}>
<Text style={styles.buttonText}>Calculate</Text>
</TouchableOpacity></View>


<View style={styles.refreshContainer}>
<TouchableOpacity
onPress={refresh}>
<Image source={Refresh} style={styles.imageR} />
</TouchableOpacity>


</View>
</ScrollView>
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

  imagesContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 30,
  },
  refreshContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: -20,
  },

  images: {
    width: 248 * 1.2,
    height: 238 * 1.2,
    borderRadius: 10,
  },
 
  image: {
    width: 248 * 0.5,
    height: 238 * 0.5,
    borderRadius: 10,
  },

  imageR: {
    width: 248 * 0.2,
    height: 238 * 0.2,
    borderRadius: 10,
  },

  lineBreak: {
    height: 15,
  },

  text: {
    fontSize: 16,
    marginTop: -250,
    fontWeight: 'bold',
    
  },

  input: {
    borderWidth: 2,
    borderColor: 'gray',
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: 300,
    marginLeft:0
  },

  buttonContainer: {
    alignSelf: 'flex-end',
    alignSelf: 'center',
    marginBottom: 40,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#6CB4EE',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ColorBlind;