import { View, Text, TextInput, StyleSheet, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import InputField from '../../Components/AddProduct/InputField';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/productsSlice';
import InsertImage from '../../Components/AddProduct/InsertImage';
import { launchImageLibrary } from 'react-native-image-picker';

const AddProduct = () => {

    const dispatch = useDispatch();


    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [imgUri, setImgUri] = useState([]);


    const addProductHandler = () => {

        if (name === "" || amount === "" || description === "") {

            alert("Fill all fields");

        } else {
            if (imgUri === [] || imgUri === "") {
                alert("Select a image");
            } else {
                dispatch(addProduct({ name, amount, description, imgUri }));
                setName("");
                setAmount("");
                setDescription("");
                setImgUri("");
            }
        }
    };

    const insertImageHandler = () => {
        const options = {
            noData: true,
        };
        launchImageLibrary(options, response => {
            setImgUri(uri => [...uri, response.assets[0].uri]);

        });
    };


    return (
        <View style={styles.cont}>

            <InsertImage handler={insertImageHandler} uris={imgUri} />

            <InputField
                hintText='Product Name'
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <InputField

                hintText='Product Amount'
                onChangeText={(text) => setAmount(text)}
                value={amount}
                inputCofig={{
                    keyboardType: "number-pad"
                }}
            />
            <InputField
                hintText='Product Description'
                onChangeText={(text) => setDescription(text)}
                value={description}
            />

            <Pressable style={styles.addProductBtn}
                android_ripple
                onPress={addProductHandler}>
                <Text style={styles.addProductText}>Add Product</Text>
            </Pressable>

        </View>
    );
};

export default AddProduct;

const styles = StyleSheet.create({
    cont: {
        backgroundColor: "white",
        padding: 16,
        elevation: 3,
        borderRadius: 4,
        marginVertical: 12,
        marginHorizontal: 12,
    },

    addProductBtn: {
        height: 60,
        backgroundColor: "#3e04c3",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
    },
    addProductText: {
        color: "white",
    },
});