

//view -> container that will wrap multiple components
//text -> to showcase any text
//textinput -> input component
//button -> button component

import { Button, StyleSheet, TextInput, View } from "react-native";

export default function App() {
  return(
    <View style={{
      padding: 60
    }}>
      {/* to render input along with button */}
      <View>
        <TextInput placeholder="Add Your Note Here"></TextInput>
        <Button title="Add Note"/>
      </View>
      {/* to render input along with button */}
      {/* to tender all notes that we created */}
      <View>

      </View>
      {/* to render all notes that we created */}
    </View>
  );
}

const styles = StyleSheet.create({

})
