import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Car from './components/Car';
import Motor from './components/Motor';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Car />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE8AA',
    alignItems: "left",
    justifyContent: "left",
    
  },
 
});
