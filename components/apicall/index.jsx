import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

// Data state

export default function ApiCall() {
    [loading, setLoading] = useState(true)
    [apiData, setApiData] = useState([])
    useEffect(() => {
        console.log("Loading ", loading);
        async function getDataFromApi() {
            const apiResponse = await fetch('https://dummyjson.com/users')
            const finalData = await apiResponse.json()
            // setApiData(finalData.users.map(userItem=> userItem.age));
            if (finalData) {
                setApiData(finalData.users.map(userItem => `${userItem.firstName} ${userItem.lastName} ${userItem.age}`));
                setLoading(false)
            }
        }
        getDataFromApi()
    }, [])
    if (loading) {
        return (
            <ActivityIndicator color={'red'} size={'large'} />
        )
    }
    return (
        <View>
            <Text>Api Data </Text>
            <View>
                <FlatList
                    data={apiData}
                    renderItem={(itemData) => <Text>{itemData.item}</Text>} />
            </View>
        </View>
    )
}