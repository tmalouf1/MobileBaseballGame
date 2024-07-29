import { View, Text, StatusBar, StyleSheet } from "react-native";
// import {} from "HomeScreen/HomeScreen.scss"

export default function HomeScreen() {

  var counter = 0;

  const handlePress = () => {
    counter++;
  }

    return (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
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