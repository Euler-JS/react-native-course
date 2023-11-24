

//view -> container that will wrap multiple components
//text -> to showcase any text
//textinput -> input component
//button -> button component

import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {

  const [value, setValue] = useState('')
  const [listOfNotes, setListOfNotes] = useState([ ])

  function handleOnChangeText(getEnteredText){
    setValue(getEnteredText)
  }

  function handleOnPressButton(){
    setListOfNotes(currentNotes=> [...currentNotes, value])
    console.log( listOfNotes)
  }

  return(
    <View style={{
      padding: 60
    }}>
      {/* to render input along with button */}
      <View style={styles.inputContainer}>
        <TextInput onChangeText={handleOnChangeText} style={styles.input} placeholder="Add Your Note Here"></TextInput>
        <Button onPress={handleOnPressButton} color={'#000'} title="Add Note"/>
      </View>
      {/* to render input along with button */}
      {/* to tender all notes that we created */}
      <View style={styles.listContainer}>
      <Text style={{
        fontSize: 30,
      }}>List of Notes</Text>
        {
          listOfNotes.map((item, index)=> <Text style={styles.listItem} key={`item${index}`}>{item}</Text>)
        }
        
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
  },
  listContainer : {
    paddingTop: 30
  },
  listItem : {
    borderRadius: 1,
    borderColor: 'red',
    backgroundColor: 'green' ,
    padding: 20,
    marginBottom: 20,
    color: 'white',
    fontSize: 20
  }
})
