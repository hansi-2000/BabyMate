
import React, { useState, useEffect } from "react"
import { ScrollView,TouchableOpacity, Text, View, SafeAreaView, StyleSheet, Image, TextInput, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { doc, setDoc,collection, onSnapshot, updateDoc } from "firebase/firestore"; 
import {db} from './firebaseConfig';
import { useNavigation } from '@react-navigation/native';
const PlaceholderImage = require('./assets/logo.png');



function Sight({ route }) {

   const navigation = useNavigation();

   const paramKeyValue = route.params.paramKey;
  useEffect(() => {
    console.log(paramKeyValue); // Output the value of 'paramey' to the console
  }, []);
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);
    const [checked6, setChecked6] = useState(false);
    const [checked7, setChecked7] = useState(false);
    const [checked8, setChecked8] = useState(false);
    const [checked9, setChecked9] = useState(false);
    const [checked10, setChecked10] = useState(false);
    const [count, setCount] = useState(0);
    const [sight, setSight] = useState(0);
   
    const handleCalculate = () => {
      const sight = (100-(count / 10)*100).toFixed(2); // Calculate BMI with two decimal places
  
      // Show the pop-up box
      Alert.alert(
        'Calculation Complete',
        `Your child has a ${sight}% probability of having weakened sight`,
        [
          {
            text: 'OK',
            onPress: () => {
              console.log('OK Pressed');
              setSight(sight);
              create(); // Call the create() function
            }
          },
          {
            text: 'Try the ColorBlind Test',
            onPress: () => {
              setSight(sight);
              create(); // Set the sight state
              navigation.navigate('ColorBlind', { paramKey: route.params.paramKey });
            }
          }
        ],
        { cancelable: false }
      );
      
      console.log(count);
    };
    function create(){
      setDoc(doc(db,paramKeyValue,"diagnosis"), {
      sight:sight,
      
      });}
    
  


    const handleCheckBox1 = () => {
      setChecked1(!checked1);
      if (!checked1) {
        // Checkbox is being checked
        setCount(count + 1);
      }
      else {
        // Checkbox is being unchecked
        setChecked1(false);
        setCount(count - 1);
      }
    };
  
    const handleCheckBox2 = () => {
      setChecked2(!checked2);
      if (!checked2) {
        // Checkbox is being checked
        setCount(count + 1);
      }
      else {
        // Checkbox is being unchecked
        setChecked2(false);
        setCount(count - 1);
      }
    };

    const handleCheckBox3 = () => {
        setChecked3(!checked3);
        if (!checked3) {
          // Checkbox is being checked
          setCount(count + 1);
        }
        else {
          // Checkbox is being unchecked
          setChecked3(false);
          setCount(count - 1);
        }
      };

      const handleCheckBox4 = () => {
        setChecked4(!checked4);
        if (!checked4) {
          // Checkbox is being checked
          setCount(count + 1);
        }
        else {
          // Checkbox is being unchecked
          setChecked4(false);
          setCount(count - 1);
        }
      };

      const handleCheckBox5 = () => {
        setChecked5(!checked5);
        if (!checked5) {
          // Checkbox is being checked
          setCount(count + 1);
        }
        else {
          // Checkbox is being unchecked
          setChecked5(false);
          setCount(count - 1);
        }
      };

      const handleCheckBox6 = () => {
        setChecked6(!checked6);
        if (!checked6) {
          // Checkbox is being checked
          setCount(count + 1);
        }
        else {
          // Checkbox is being unchecked
          setChecked6(false);
          setCount(count - 1);
        }
      };

      const handleCheckBox7 = () => {
        setChecked7(!checked7);
        if (!checked7) {
          // Checkbox is being checked
          setCount(count + 1);
        }
        else {
          // Checkbox is being unchecked
          setChecked7(false);
          setCount(count - 1);
        }
      };

      const handleCheckBox8 = () => {
        setChecked8(!checked8);
        if (!checked8) {
          // Checkbox is being checked
          setCount(count + 1);
        }
        else {
          // Checkbox is being unchecked
          setChecked8(false);
          setCount(count - 1);
        }
      };

      const handleCheckBox9 = () => {
        setChecked9(!checked9);
        if (!checked9) {
          // Checkbox is being checked
          setCount(count + 1);
        }
        else {
          // Checkbox is being unchecked
          setChecked9(false);
          setCount(count - 1);
        }
      };

      const handleCheckBox10 = () => {
        setChecked10(!checked10);
        if (!checked10) {
          // Checkbox is being checked
          setCount(count + 1);
        }
        else {
          // Checkbox is being unchecked
          setChecked10(false);
          setCount(count - 1);
        }
      };

    
  return (

    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
          <View style={styles.lineBreak} />
          <Text>BabyMate</Text>
        </View>
        <View style={styles.lineBreak} />
        <View style={styles.lineBreak} />
        <Text style={styles.text}>Answer the questions according</Text>
        <Text style={styles.text}>to the behavior of the child</Text>
        <View style={styles.boxContainer}>
        <CheckBox
        title="Does the child direct eyes towards light? "
        checked={checked1}
        checkedColor="green"
        onPress={handleCheckBox1}
      />
        
        <CheckBox
        title="Does the child look at your face intently?"
        checked={checked2}
        checkedColor="green"
        onPress={handleCheckBox2}
      />

        <CheckBox
        title="Does the child responsively smile when you turn your face?"
        checked={checked3}
        checkedColor="green"
        onPress={handleCheckBox3}
      />

        <CheckBox
        title="Do his eyes move together or separately?"
        checked={checked4}
        checkedColor="green"
        onPress={handleCheckBox4}
      />

        <CheckBox
        title="Does the child look around inquisitively?"
        checked={checked5}
        checkedColor="green"
        onPress={handleCheckBox5}
      />

        <CheckBox
        title="Does the child try to grab something after looking at it?"
        checked={checked6}
        checkedColor="green"
        onPress={handleCheckBox6}
      />

        <CheckBox
        title="Do you suspect him to have any disability in his vision?"
        checked={checked7}
        checkedColor="green"
        onPress={handleCheckBox7}
      />

        <CheckBox
        title="Can the child hold small objects using the thumb and the second finger?"
        checked={checked8}
        checkedColor="green"
        onPress={handleCheckBox8}
      />

        <CheckBox
        title="Does the child ask for something by moving his hands?"
        checked={checked9}
        checkedColor="green"
        onPress={handleCheckBox9}
      />

        <CheckBox
        title="Can the child recongize familiar people before they speak?"
        checked={checked10}
        checkedColor="green"
        onPress={handleCheckBox10}
      />

        </View>
        <View style={styles.lineBreak} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleCalculate}
            activeOpacity={0.5}>
            <Text style={styles.buttonText}>Calculate</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    fontSize: 18,
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
    
    alignSelf: 'flex-end',
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 50,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#318CE7',
  },

  boxContainer: {
    alignSelf: 'flex-end',
    alignSelf: 'center',
    marginTop: 75,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#318CE7',
  },

  text: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    
  },
  buttonContainer: {
    
    alignSelf: 'flex-end',
    alignSelf: 'center',
    marginBottom: 50,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#6CB4EE',
  },

});

export default Sight;