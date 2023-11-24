import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

// Data state

export default function ApiCall(){
    [apiData, setApiData] = useState([])

    useEffect(()=> {
    async function getDataFromApi() {
        const apiResponse = await fetch('https://dummyjson.com/users')
        const finalData = await apiResponse.json()
        // setApiData(finalData.users.map(userItem=> userItem.age));
        setApiData(finalData.users.map(userItem=> `${userItem.firstName} ${userItem.lastName} ${userItem.age}`));
    }
    getDataFromApi()
    }, [])

    console.log("Data: ", apiData)


    return(
        <View>
            <Text>Api Data </Text>
            <View>
                <FlatList 
                data={apiData}
                renderItem={(itemData)=> <Text>{itemData.item}</Text>}/>
            </View>
        </View>
    )
}