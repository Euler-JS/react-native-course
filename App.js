

//view -> container that will wrap multiple components
//text -> to showcase any text
//textinput -> input component
//button -> button component

import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return(
    <View style={{
      padding: 60
    }}>
      {/* to render input along with button */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Add Your Note Here"></TextInput>
        <Button color={'#000'} title="Add Note"/>
      </View>
      {/* to render input along with button */}
      {/* to tender all notes that we created */}
      <View>
        <Text>Show List Here</Text>
      </View>
      {/* to render all notes that we created */}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer : {
    flexDirection: 'row',
    paddingBottom: 30,
    borderBottomWidth: 1
  },
  input : {
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1
  }

})
