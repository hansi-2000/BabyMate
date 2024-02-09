
import React, { useState, useEffect } from "react"
import { ScrollView,TouchableOpacity, Text, View, SafeAreaView, StyleSheet, Image, TextInput, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
const PlaceholderImage = require('./assets/logo.png');
import { useNavigation } from '@react-navigation/native';
import { doc, setDoc,collection, onSnapshot,updateDoc } from "firebase/firestore"; 
import {db} from './firebaseConfig';

function Autism({ route }) {
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
    const [checked11, setChecked11] = useState(false);
    const [checked12, setChecked12] = useState(false);
    const [checked13, setChecked13] = useState(false);
    const [checked14, setChecked14] = useState(false);
    const [checked15, setChecked15] = useState(false);
    const [checked16, setChecked16] = useState(false);
    const [checked17, setChecked17] = useState(false);
    const [checked18, setChecked18] = useState(false);
    const [checked19, setChecked19] = useState(false);
    const [checked20, setChecked20] = useState(false);
    const [autism, setAutism] = useState(null);
   

    const [count, setCount] = useState(0);
   
    const handleCalculate = () => {
      const autismCount = (20-count).toFixed(2); // Calculate BMI with two decimal places
  
      let riskLevel;

      if (autismCount >= 0 && autismCount <= 2) {
       riskLevel = 'Low risk';
      } else if (autismCount >= 3 && autismCount <= 7) {
       riskLevel = 'Medium risk';
      } else {
      riskLevel = 'High risk';
      }

      // Show the pop-up box
      Alert.alert(
        'Calculation Complete',
        `Your child has a ${riskLevel} of suffering from Autism`,

        
        //console.log(count),
        [
          { text: 'OK',             
          onPress: () => {
            setAutism(riskLevel),
            create(); // Set the sight state
            console.log("OK Pressed");
          } },
         
        ],
        { cancelable: false }
      );
     
    };

    function create() {
      const docRef = doc(db, paramKeyValue, 'diagnosis');
    
      updateDoc(docRef, {
        Autism:autism
      })
        .then(() => {
          console.log('Data appended successfully');
        })
        .catch((error) => {
          console.error('Error appending data:', error);
        });
    }

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
        setCount(count - 1);
      }
      else {
        // Checkbox is being unchecked
        setChecked2(false);
        setCount(count + 1);
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

      const handleCheckBox11 = () => {
        setChecked11(!checked11);
        if (!checked11) {
          // Checkbox is being checked
          setCount(count + 1);
        }
        else {
          // Checkbox is being unchecked
          setChecked11(false);
          setCount(count - 1);
        }
      };

      const handleCheckBox12 = () => {
        setChecked12(!checked12);
        if (!checked12) {
          // Checkbox is being checked
          setCount(count + 1);
        }
        else {
          // Checkbox is being unchecked
          setChecked12(false);
          setCount(count - 1);
        }
      };

      const handleCheckBox13 = () => {
        setChecked13(!checked13);
        if (!checked13) {
          // Checkbox is being checked
          setCount(count + 1);
        }
        else {
          // Checkbox is being unchecked
          setChecked13(false);
          setCount(count - 1);
        }
      };

      const handleCheckBox14 = () => {
        setChecked14(!checked14);
        if (!checked14) {
          // Checkbox is being checked
          setCount(count + 1);
        }
        else {
          // Checkbox is being unchecked
          setChecked14(false);
          setCount(count - 1);
        }
      };

      const handleCheckBox15 = () => {
        setChecked15(!checked15);
        if (!checked15) {
          // Checkbox is being checked
          setCount(count + 1);
        }
        else {
          // Checkbox is being unchecked
          setChecked15(false);
          setCount(count - 1);
        }
      };

      const handleCheckBox16 = () => {
        setChecked16(!checked16);
        if (!checked16) {
          // Checkbox is being checked
          setCount(count + 1);
        }
        else {
          // Checkbox is being unchecked
          setChecked16(false);
          setCount(count - 1);
        }
      };

      const handleCheckBox17 = () => {
        setChecked17(!checked17);
        if (!checked17) {
          // Checkbox is being checked
          setCount(count + 1);
        }
        else {
          // Checkbox is being unchecked
          setChecked17(false);
          setCount(count - 1);
        }
      };

      const handleCheckBox18 = () => {
        setChecked18(!checked18);
        if (!checked18) {
          // Checkbox is being checked
          setCount(count + 1);
        }
        else {
          // Checkbox is being unchecked
          setChecked18(false);
          setCount(count - 1);
        }
      };

      const handleCheckBox19 = () => {
        setChecked19(!checked19);
        if (!checked19) {
          // Checkbox is being checked
          setCount(count + 1);
        }
        else {
          // Checkbox is being unchecked
          setChecked19(false);
          setCount(count - 1);
        }
      };

      const handleCheckBox20 = () => {
        setChecked20(!checked20);
        if (!checked20) {
          // Checkbox is being checked
          setCount(count + 1);
        }
        else {
          // Checkbox is being unchecked
          setChecked20(false);
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
        <Text>If the answer to a question is 'YES' tick the box</Text>
        <View style={styles.boxContainer}>
        <CheckBox
        title="If you point at something across the room, does your child look at it? "
        checked={checked1}
        checkedColor="green"
        onPress={handleCheckBox1}
      />
        <CheckBox
        title="Have you ever wondered if your child might be deaf?"
        checked={checked2}
        checkedColor="green"
        onPress={handleCheckBox2}
      />

        <CheckBox
        title="Does your child play pretend or make-believe?"
        checked={checked3}
        checkedColor="green"
        onPress={handleCheckBox3}
      />

        <CheckBox
        title="Does your child like climbing on things? "
        checked={checked4}
        checkedColor="green"
        onPress={handleCheckBox4}
      />

        <CheckBox
        title="Does your child make unusual finger movements near his or her eyes?"
        checked={checked5}
        checkedColor="green"
        onPress={handleCheckBox5}
      />

        <CheckBox
        title="Does your child point with one finger to ask for something or to get help? "
        checked={checked6}
        checkedColor="green"
        onPress={handleCheckBox6}
      />

        <CheckBox
        title=" Does your child point with one finger to show you something interesting? "
        checked={checked7}
        checkedColor="green"
        onPress={handleCheckBox7}
      />

        <CheckBox
        title="Is your child interested in other children?"
        checked={checked8}
        checkedColor="green"
        onPress={handleCheckBox8}
      />

        <CheckBox
        title="Does your child show you things by bringing them to you or holding them up for you to see 
        - not to get help, but just to share?"
        checked={checked9}
        checkedColor="green"
        onPress={handleCheckBox9}
      />

        <CheckBox
        title="Does your child respond when you call his or her name?"
        checked={checked10}
        checkedColor="green"
        onPress={handleCheckBox10}
      />

        <CheckBox
        title="When you smile at your child, does he or she smile back at you? "
        checked={checked11}
        checkedColor="green"
        onPress={handleCheckBox11}
      />
      <CheckBox
        title="Does your child get upset by everyday noises?"
        checked={checked12}
        checkedColor="green"
        onPress={handleCheckBox12}
      />
      <CheckBox
        title="Does your child walk? "
        checked={checked13}
        checkedColor="green"
        onPress={handleCheckBox13}
      />
      <CheckBox
        title=". Does your child look you in the eye when you are talking to him or her, playing with him"
        checked={checked14}
        checkedColor="green"
        onPress={handleCheckBox14}
      />
      <CheckBox
        title="Does your child try to copy what you do?"
        checked={checked15}
        checkedColor="green"
        onPress={handleCheckBox15}
      />
      <CheckBox
        title=" If you turn your head to look at something, does your child look around to see what you are looking at?"
        checked={checked16}
        checkedColor="green"
        onPress={handleCheckBox16}
      />
      <CheckBox
        title=". Does your child try to get you to watch him or her?"
        checked={checked17}
        checkedColor="green"
        onPress={handleCheckBox17}
      />
      <CheckBox
        title="Does your child understand when you tell him or her to do something?"
        checked={checked18}
        checkedColor="green"
        onPress={handleCheckBox18}
      />
      
      <CheckBox
        title="If something new happens, does your child look at your face to see how you feel about it? "
        checked={checked19}
        checkedColor="green"
        onPress={handleCheckBox19}
      />
      <CheckBox
        title="Does your child like movement activities? "
        checked={checked20}
        checkedColor="green"
        onPress={handleCheckBox20}
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

export default Autism;