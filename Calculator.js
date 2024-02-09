import React, { useState } from 'react';
import { TouchableOpacity, Text, View, SafeAreaView, StyleSheet, Image, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PlaceholderImage = require('./assets/logo.png');

function Calculator() {
  const navigation = useNavigation();
  const [Weight, setWeight] = useState('');
  const [Height, setHeight] = useState('');
  const [age, setAge] = useState('');

  const handleCalculate = () => {
    const bmi = (Weight / (Height * Height)).toFixed(2); // Calculate BMI with two decimal places

    // Show the pop-up box
    Alert.alert(
      'Your BMI has been calculated',
      `Your BMI is ${bmi}`,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
        { text: 'More Info', onPress: () => navigation.navigate('BMIChart',{
          paramKey1: bmi
         },{
          paramKey2: age
         }) }
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
          <View style={styles.lineBreak} />
          <Text>BabyMate</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text>Weight (kgs) :</Text>
          <TextInput
            value={Weight}
            onChangeText={setWeight}
            placeholder={'Weight in Kgs'}
            style={styles.input}
          />

          <View style={styles.lineBreak} />
          <Text>Height (m) :</Text>
          <TextInput
            value={Height}
            onChangeText={setHeight}
            placeholder={'Height in cm'}
            style={styles.input}
          />
          <View style={styles.lineBreak} />
          <Text>Age :</Text>
          <TextInput
            value={age}
            onChangeText={(age) => setAge(age)}
            placeholder={'Type the baby\'s age'}
            style={styles.input}
          />
           <View style={styles.lineBreak} />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleCalculate}
            activeOpacity={0.5}
          >
            
            <Text style={styles.buttonText}>Calculate</Text>
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
  buttonContainer: {
    alignSelf: 'flex-end',
    alignSelf: 'center',
    marginBottom: 140,
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
  image: {
    width: 248 * 0.5,
    height: 238 * 0.5,
    borderRadius: 10,
  },
  inputContainer: {
    flex: 1,
    //alignSelf: 'flex-start',
    marginTop: -50,
    paddingHorizontal: 30,
  },
  input: {
    borderWidth: 2,
    borderColor: 'gray',
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: 250,
  },
  lineBreak: {
    height: 15,
  },
});

export default Calculator;