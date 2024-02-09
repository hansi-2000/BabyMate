
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import * as React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Start from './Start';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Calculator from './Calculator';
import Diagnosis from './Diagnosis';
import Sight from './Sight';
import Hearing from './Hearing';
import BMIChart from './BMIChart';
import Autism from './Autism';
import Record from './Record';
import ColorBlind from './ColorBlind';
import Profile from './Profile';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={Start}
          options={{

            headerStyle: {
              backgroundColor: '#6CB4EE', //Set Header color
            },
            headerTintColor: '#6CB4EE', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login', //Set Header Title
            headerStyle: {
              backgroundColor: '#6CB4EE', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

          <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: 'Register', //Set Header Title
            headerStyle: {
              backgroundColor: '#6CB4EE', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

          <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: 'Dashboard', //Set Header Title
            headerStyle: {
              backgroundColor: '#6CB4EE', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

          <Stack.Screen
          name="Calculator"
          component={Calculator}
          options={{
            title: 'Calculator', //Set Header Title
            headerStyle: {
              backgroundColor: '#6CB4EE', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
     
         <Stack.Screen
          name="Diagnosis"
          component={Diagnosis}
          options={{
            title: 'Diagnosis', //Set Header Title
            headerStyle: {
              backgroundColor: '#6CB4EE', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

          <Stack.Screen
          name="Sight"
          component={Sight}
          options={{
            title: 'Sight', //Set Header Title
            headerStyle: {
              backgroundColor: '#6CB4EE', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

          <Stack.Screen
          name="Hearing"
          component={Hearing}
          options={{
            title: 'Hearing', //Set Header Title
            headerStyle: {
              backgroundColor: '#6CB4EE', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

        <Stack.Screen
          name="BMIChart"
          component={BMIChart}
          options={{
            title: 'BMIChart', //Set Header Title
            headerStyle: {
              backgroundColor: '#6CB4EE', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

          <Stack.Screen
          name="Autism"
          component={Autism}
          options={{
            title: 'Autism', //Set Header Title
            headerStyle: {
              backgroundColor: '#6CB4EE', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

          <Stack.Screen
          name="Record"
          component={Record}
          options={{
            title: 'Record', //Set Header Title
            headerStyle: {
              backgroundColor: '#6CB4EE', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

          <Stack.Screen
          name="ColorBlind"
          component={ColorBlind}
          options={{
            title: 'ColorBlind', //Set Header Title
            headerStyle: {
              backgroundColor: '#6CB4EE', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

          <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile', //Set Header Title
            headerStyle: {
              backgroundColor: '#6CB4EE', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

export default App;
