

//view -> container that will wrap multiple components
//text -> to showcase any text

import { StyleSheet, Text } from "react-native";
import { View } from "react-native";

export default function App() {
  return(
    <View style={styles.container}>
        <View style={styles.nestedContainer}>
          <Text>Nested Test</Text>
        </View>
        <Text style={{
          fontSize: 20,
          margin: 30,
          color: 'white'
        }}> Hello React</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  nestedContainer: {
    display: 'flex',
    width: 200,
    height: 200,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  }
})