import React, { useState, useEffect } from "react"
import { TouchableOpacity, Text, View, SafeAreaView, StyleSheet, Image, TextInput, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { doc, setDoc,collection, onSnapshot } from "firebase/firestore"; 
import {db} from './firebaseConfig';
import { useNavigation } from '@react-navigation/native';

const PlaceholderImage = require('./assets/logo.png');

function Record({ route }) {
  const paramKeyValue = route.params.paramKey;
  useEffect(() => {
    console.log(paramKeyValue); // Output the value of 'paramKeyValue' to the console
  }, []);

  const navigation = useNavigation();

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);
  const [checked8, setChecked8] = useState(false);
  const [checked9, setChecked9] = useState(false);
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [countC, setCountC] = useState(0);

  const handleCheckBox1 = () => {
    setChecked1(!checked1);
    if (!checked1) {
      // Checkbox is being checked
      setCountA(countA + 1);
    }
    else {
      // Checkbox is being unchecked
      setChecked1(false);
      setCountA(countA - 1);
    }
  };

  const handleCheckBox2 = () => {
    setChecked2(!checked2);
    if (!checked2) {
      // Checkbox is being checked
      setCountA(countA + 1);
    }
    else {
      // Checkbox is being unchecked
      setChecked2(false);
      setCountA(countA - 1);
    }
  };

  const handleCheckBox3 = () => {
    setChecked3(!checked3);
    if (!checked3) {
      // Checkbox is being checked
      setCountA(countA + 1);
    }
    else {
      // Checkbox is being unchecked
      setChecked3(false);
      setCountA(countA - 1);
    }
  };

  const handleCheckBox4 = () => {
    setChecked4(!checked4);
    if (!checked4) {
      // Checkbox is being checked
      setCountB(countB + 1);
    }
    else {
      // Checkbox is being unchecked
      setChecked4(false);
      setCountB(countB - 1);
    }
  };

  const handleCheckBox5 = () => {
    setChecked5(!checked5);
    if (!checked5) {
      // Checkbox is being checked
      setCountB(countB + 1);
    }
    else {
      // Checkbox is being unchecked
      setChecked5(false);
      setCountB(countB - 1);
    }
  };

  const handleCheckBox6 = () => {
    setChecked6(!checked6);
    if (!checked6) {
      // Checkbox is being checked
      setCountB(countB + 1);
    }
    else {
      // Checkbox is being unchecked
      setChecked6(false);
      setCountB(countB - 1);
    }
  };

  const handleCheckBox7 = () => {
    setChecked7(!checked7);
    if (!checked7) {
      // Checkbox is being checked
      setCountC(countC + 1);
    }
    else {
      // Checkbox is being unchecked
      setChecked7(false);
      setCountC(countC - 1);
    }
  };

  const handleCheckBox8 = () => {
    setChecked8(!checked8);
    if (!checked8) {
      // Checkbox is being checked
      setCountC(countC + 1);
    }
    else {
      // Checkbox is being unchecked
      setChecked8(false);
      setCountC(countC - 1);
    }
  };

  const handleCheckBox9 = () => {
    setChecked9(!checked9);
    if (!checked9) {
      // Checkbox is being checked
      setCountC(countC + 1);
    }
    else {
      // Checkbox is being unchecked
      setChecked9(false);
      setCountC(countC - 1);
    }
  };

  function create(){
    setDoc(doc(db,paramKeyValue,"vaccine"), {
    VaccineA:countA,
    VaccineB:countB,
    VaccineC:countC,
    });}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
          <View style={styles.lineBreak} />
          <Text>BabyMate</Text>
        </View>
      </View>
      <ScrollView>
      <View style={styles.checkboxesContainer}>
      <Text style={styles.boldText}>  Vaccination Shot A</Text>
          <View style={styles.lineBreak} />
          <CheckBox
            title="First Dose     "
            checked={checked1}
            checkedColor="green"
            onPress={handleCheckBox1}
          />
          <CheckBox
            title="Second Dose"
            checked={checked2}
            checkedColor="green"
            onPress={handleCheckBox2}
          />
          <CheckBox
            title="Third Dose    "
            checked={checked3}
            checkedColor="green"
            onPress={handleCheckBox3}
          />
        </View>
        <View style={styles.lineBreak} />
        <Text style={styles.boldText}>  Vaccination Shot B</Text>
          <View style={styles.lineBreak} />
          <CheckBox
            title="First Dose     "
            checked={checked4}
            checkedColor="green"
            onPress={handleCheckBox4}
          />
          <CheckBox
            title="Second Dose"
            checked={checked5}
            checkedColor="green"
            onPress={handleCheckBox5}
          />
          <CheckBox
            title="Third Dose    "
            checked={checked6}
            checkedColor="green"
            onPress={handleCheckBox6}
          />
          <View style={styles.lineBreak} />
             <Text style={styles.boldText}>  Vaccination Shot C</Text>
          <View style={styles.lineBreak} />
          <CheckBox
            title="First Dose     "
            checked={checked7}
            checkedColor="green"
            onPress={handleCheckBox7}
          />
          <CheckBox
            title="Second Dose"
            checked={checked8}
            checkedColor="green"
            onPress={handleCheckBox8}
          />
          <CheckBox
            title="Third Dose    "
            checked={checked9}
            checkedColor="green"
            onPress={handleCheckBox9}
          />
        <View style={styles.buttonSContainer}>
        <TouchableOpacity
        onPress={async () => {
        await create();
        navigation.navigate('Dashboard',{ paramKey: route.params.paramKey });
          }}
        activeOpacity={0.5}
        >
        <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
  },
  checkboxesContainer: {
    paddingTop: 50,
    marginTop:125
    
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
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 50,
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

export default Record;