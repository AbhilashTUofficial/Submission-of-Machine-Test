import { AsyncStorage } from "react-native";

export default GetDataFromLocal = async () => {


    try {
        let data = await AsyncStorage.getItem('product_list_local');
        // console.log(data);
        return JSON.parse(data);

    } catch (error) {
        return [{
            id: null,
            name: null,
            image: [],
            description: null,
            amount: null,
            ratings: [],
        }];
    }



    return [{
        id: null,
        name: null,
        image: [],
        description: null,
        amount: null,
        ratings: [],
    }];


};