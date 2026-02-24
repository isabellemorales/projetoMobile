import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}> Hello World! No APP</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d147eff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    fontSize: 24,
    fontFamily: 'cursive',
  }
});
