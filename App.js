import * as React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ListingsScreen from './src/screens/Listings';



const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <ListingsScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default App;
