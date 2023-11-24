//view -> container that will wrap multiple components
//text -> to showcase any text
//textinput -> input component
//button -> button component

import { useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ApiCall from "./components/apicall";


export default function App() {
  const [value, setValue] = useState("");
  const [listOfNotes, setListOfNotes] = useState([]);

  function handleOnChangeText(getEnteredText) {
    setValue(getEnteredText);
  }

  function handleOnPressButton() {
    setListOfNotes((currentNotes) => [...currentNotes, value]);
    setValue('');
    console.log(listOfNotes);
  }

  function handleRemoveItem(getCurrentIndex) {
    console.log('Item pressed Here ', getCurrentIndex);
    let copyListOfNotes = [...listOfNotes]
    copyListOfNotes = copyListOfNotes.filter((_, index) => getCurrentIndex !== index)
    setListOfNotes(copyListOfNotes)
  }

  return (
    <View
      style={{
        padding: 60,
        paddingHorizontal: 15,
        flex: 1
      }}
    >
      {/* to render input along with button */}
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleOnChangeText}
          style={styles.input}
          placeholder="Add Your Note Here"
          value={value}
        ></TextInput>
        <Button onPress={handleOnPressButton} color={"#000"} title="Add Note" />
      </View>
      {/* to render input along with button */}
      {/* to tender all notes that we created */}
      <View style={styles.listContainer}>
        <Text
          style={{
            fontSize: 30,
          }}
        >
          List of Notes
        </Text>
        <FlatList 
          data={listOfNotes}
          renderItem={(itemData)=> (
            <Pressable onPress={()=>handleRemoveItem(itemData.index)}> 
              <Text style={styles.listItem}>{itemData.item}</Text>
            </Pressable>
            
          )}
          />
      </View>
      {/* to render all notes that we created */}

      {/* Our Api component */}
      <View style={styles.apiContainer}>
        <ApiCall/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    paddingBottom: 30,
    borderBottomWidth: 1,
    flex: 1,
    alignItems : 'center',
    justifyContent: 'space-between' 
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
  },
  listContainer: {
    paddingTop: 30,
    flex: 1
  },
  listItem: {
    borderRadius: 1,
    borderColor: "red",
    backgroundColor: "green",
    padding: 20,
    marginBottom: 20,
    color: "white",
    fontSize: 20,
  },
  apiContainer : {
    flex: 2
  }
});
