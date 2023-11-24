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


export default function App() {
  const [value, setValue] = useState("");
  const [listOfNotes, setListOfNotes] = useState([]);

  function handleOnChangeText(getEnteredText) {
    setValue(getEnteredText);
  }

  function handleOnPressButton() {
    setListOfNotes((currentNotes) => [...currentNotes, value]);
    console.log(listOfNotes);
  }

  function handleRemoveItem() {
    console.log('Item pressed Here');
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
            <Pressable onPress={handleRemoveItem}> 
              <Text style={styles.listItem}>{itemData.item}</Text>
            </Pressable>
            
          )}
          />
      </View>
      {/* to render all notes that we created */}
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
    flex: 3
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
});
