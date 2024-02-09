import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View, SafeAreaView, StyleSheet, Image } from 'react-native';
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from "react-native-gesture-handler";

const PlaceholderImage = require('./assets/logo.png');

function Profile({ route }) {
  const paramKeyValue = route.params.paramKey;
  useEffect(() => {
    console.log(paramKeyValue); // Output the value of 'paramKeyValue' to the console
  }, []);

  const [person, setPerson] = useState({});
  const [personV, setPersonV] = useState({});
  const [personD, setPersonD] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingV, setLoadingV] = useState(false);
  const [loadingD, setLoadingD] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

  useEffect(() => {
    setLoading(true);
    const userRef = doc(db, paramKeyValue, "profile");
    onSnapshot(userRef, (doc) => {
      setPerson(doc.data());
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setLoadingV(true);
    const userRef = doc(db, paramKeyValue, "vaccine");
    onSnapshot(userRef, (doc) => {
      setPersonV(doc.data());
      setLoadingV(false);
    });
  }, []);

  useEffect(() => {
    setLoadingD(true);
    const userRef = doc(db, paramKeyValue, "diagnosis");
    onSnapshot(userRef, (doc) => {
      setPersonD(doc.data());
      setLoadingD(false);
    });
  }, []);

  const renderImage = () => (
    <View style={styles.imageContainer}>
      <Image source={PlaceholderImage} style={styles.image} />
      <View style={styles.lineBreak} />
      <Text>BabyMate</Text>
    </View>
  );

  const renderDatabaseOutput = () => (
   
    <View style={styles.databaseOutputContainer}>
      <Text style={styles.text}>Parent's Name:                  {person.userName}</Text>
      <View style={styles.lineBreak} />
      <Text style={styles.text}>Child's Name:                     {person.childName}</Text>
      <View style={styles.lineBreak} />
      <Text style={styles.text}>Birthday:                              {person.bday}</Text>
      <View style={styles.lineBreak} />
      <Text style={styles.text}>Vaccine A doses received:         {personV.VaccineA}</Text>
      <View style={styles.lineBreak} />
      <Text style={styles.text}>Vaccine B doses received:         {personV.VaccineB}</Text>
      <View style={styles.lineBreak} />
      <Text style={styles.text}>Vaccine C doses received:         {personV.VaccineC}</Text>
      <View style={styles.lineBreak} />
      <Text style={styles.text}>Sight Deficient Probability:         {personD.sight}</Text>
      <View style={styles.lineBreak} />
      <Text style={styles.text}>Colorblind probability:         {personD.colorblind}</Text>
      <View style={styles.lineBreak} />
      <Text style={styles.text}>Hearing impairedness :         {personD.hear}</Text>
      <View style={styles.lineBreak} />
      <Text style={styles.text}>Risk of Autism:                       {personD.Autism}</Text>
      <View style={styles.lineBreak} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {renderImage()}
        {renderDatabaseOutput()}
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: -50,
  },
  databaseOutputContainer: {
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    textAlign: 'left',
  },
  lineBreak: {
    height: 15,
  },
  image: {
    width: 248 * 0.5,
    height: 238 * 0.5,
    borderRadius: 10,
  },
});

export default Profile;