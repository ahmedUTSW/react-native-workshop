import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';

export default function App() {
  return (
    
    <NavigationContainer>

        <AuthNavigator/>

    </NavigationContainer>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: "#880808",
    fontSize: 40
  }
});
