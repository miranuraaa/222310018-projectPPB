import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Latihan1 from './components/Latihan1-2';
import Latihan3 from './components/Latihan3';
import Latihan4rnfc from './components/Latihan4-rnfc';
import Latihan4rncc from './components/Latihan4-rncc';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Latihan1 /> */}
      {/* <Latihan3 /> */}
      <Latihan4rnfc />
      {/* <Latihan4rncc /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
});