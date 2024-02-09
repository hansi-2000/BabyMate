import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, Text, View, SafeAreaView, StyleSheet, Image, TextInput } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const PlaceholderImage = require('./assets/logo.png');

function BMIChart({ route }) {
  
 
  const [age, setAge] = useState('');
  const [bmi, setBmi] = useState('');

  const navigation = useNavigation();
  const paramKeyValue1 = route.params.paramKey1;
  const paramKeyValue2 = route.params.paramKey2;


    
    const data = {
        labels: ['24', '30', '36', '42', '48', '54', '48','60'],
        datasets: [
          {
            data: [17.8, 17.4, 17.2, 17.1, 17.1, 17.1, 17.1],
            color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Set the line color
          },
          {
            data: [14.4, 14.1, 13.8, 13.6, 13.4, 13.3, 13.3], // NaN to leave the last data point empty
            color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Set the line color for data2
          },

          {
            data: [paramKeyValue1,paramKeyValue1,paramKeyValue1,paramKeyValue1,paramKeyValue1,paramKeyValue1,paramKeyValue1], // NaN to leave the last data point empty
            color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // Set the line color for data2
          },
        ],
    
      };
      
      
      return (
        
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <View style={styles.imageContainer}>
              <Image source={PlaceholderImage} style={styles.image} />
              <View style={styles.lineBreak} />
              <Text>BabyMate</Text>
              <View style={styles.lineBreak} />
              <View style={styles.lineBreak} />
              <View style={styles.text} />

           
              <Text>Find out whether the BMI value of the child is within the optimal range</Text>
             
            </View>
           <ScrollView>
            <LineChart
             data={data}
            width={400} // Adjust the width to your desired value
            height={400} // Adjust the height to your desired value
            chartConfig={{
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
            borderRadius: 16,
             },
            }}
            bezier
            style={styles.chart}
            fromZero={false}
            yLabelsOffset={10}
            xAxisLabel="m"
            yAxisLabel="BMI"
            />
             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.text}>For Overweight Children:</Text><View style={styles.lineBreak} /></View>
           
<Text style={styles.text}>Balanced meals: Focus on providing a variety of nutrient-dense foods from all food groups, including fruits, vegetables, whole grains, lean proteins, and healthy fats.</Text><View style={styles.lineBreak} />
<Text style={styles.text}>Portion control: Be mindful of portion sizes and avoid oversized servings.</Text><View style={styles.lineBreak} />
<Text style={styles.text}>Limit sugary foods and beverages: Minimize the intake of sugary snacks, candies, desserts, and sweetened beverages.</Text><View style={styles.lineBreak} />
<Text style={styles.text}>Encourage physical activity: Promote regular physical activity and active play to support weight management and overall health.</Text><View style={styles.lineBreak} />
<Text style={styles.text}>Limit screen time: Minimize sedentary behaviors, such as excessive screen time, to promote physical activity and healthy habits.</Text><View style={styles.lineBreak} />
<Text style={styles.text}>Offer healthy snacks: Provide nutritious snacks like fresh fruits, cut vegetables, yogurt, or whole grain crackers instead of processed snacks.</Text><View style={styles.lineBreak} />
<View style={styles.lineBreak} />
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  
<Text style={styles.text}>For Underweight Children:</Text><View style={styles.lineBreak} /></View>

<Text style={styles.text}>Calorie-dense foods: Include energy-dense foods to promote weight gain, such as avocados, nuts, seeds, nut butters, whole milk, cheese, lean meats, and healthy oils.</Text><View style={styles.lineBreak} />
<Text style={styles.text}>Frequent meals and snacks: Offer small, frequent meals and snacks throughout the day to increase calorie intake.</Text><View style={styles.lineBreak} />
<Text style={styles.text}>Protein-rich foods: Include lean meats, poultry, fish, eggs, dairy products, legumes, and tofu to support muscle growth and repair.</Text><View style={styles.lineBreak} />
<Text style={styles.text}>Nutrient-dense carbohydrates: Choose whole grains, starchy vegetables, and fruits to provide energy and nutrients.</Text><View style={styles.lineBreak} />
<Text style={styles.text}>Consult a healthcare professional or registered dietitian: They can provide personalized guidance and ensure the child's nutritional needs are met based on their specific circumstances.</Text><View style={styles.lineBreak} />
<Text style={styles.text}>Monitor growth: Regularly track the child's growth with the help of a healthcare professional to ensure progress is being made.</Text><View style={styles.lineBreak} />
            </ScrollView>             
          </View>
        </SafeAreaView>
      );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'top',
      alignItems: 'center',
      backgroundColor: 'white' 

    },

    imageContainer: {
     
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 50,     
    },
    
    image: {
      width: 248 * 0.5,
      height: 238 * 0.5,
      borderRadius: 10,
    },

    lineBreak: {
      height: 15,
    },

    chart: {
     alignItems:'center',
      marginVertical: 40,
      borderRadius: 16,      
    },

    text: {
        justifyContent:'center',
        alignItems:'center',
        fontSize:14,
        paddingHorizontal:15
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
    buttonContainer: {
      alignSelf: 'flex-end',
      alignSelf: 'center',
      marginBottom: 150,
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

  export default BMIChart;