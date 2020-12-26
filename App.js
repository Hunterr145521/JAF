import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';

import Intro from './Components/intropage';


export default function App() {
  const [intro, setIntro] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIntro(true);
    },3000)
  },[]);
  return (
    
    <SafeAreaView style={styles.container}>
      {intro ===  null ? <Intro /> : <Text>Project X</Text> }
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
