import { View, Text, StatusBar, StyleSheet } from "react-native";

export default function Screen2() {
    return (
        <View style={styles.container}>
          <Text>Welcome to tab number 2!!!</Text>
          <StatusBar/>
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