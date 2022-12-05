import { AsyncStorage } from "react-native";


export default PutDataToLocal = (data) => {

    AsyncStorage.setItem("product_list_local", JSON.stringify(data));

};