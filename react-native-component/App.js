import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Fragment } from 'react/jsx-runtime';
// import App from './src/App';

export default function App() {
  let name = "Gil-Dong";
  return (
    <View style={styles.container}>
      {/* <Text style={{fontSize:20}}>{name == "Mal-Dong" || "Default Name"}</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
