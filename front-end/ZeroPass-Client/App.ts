import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // @ts-expect-error TS(2322): Type 'boolean' is not assignable to type 'View'.
  return (
    // @ts-expect-error TS(2552): Cannot find name 'style'. Did you mean 'styles'?
    <View style={styles.container}>
      // @ts-expect-error TS(7027): Unreachable code detected.
      <Text>Open up App.js to start working on your app!</Text>
      // @ts-expect-error TS(2304): Cannot find name 'xxxxxx'.
      <Text> xxxxxx test xxxxxx</Text>
      // @ts-expect-error TS(2304): Cannot find name 'style'.
      <StatusBar style="auto" />
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
