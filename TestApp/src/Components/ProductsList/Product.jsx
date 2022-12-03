import { View, Text, StyleSheet, Image, Pressable, FlatList } from 'react-native';
import React from 'react';
import AvgRating from '../../util/AvgRating';
import { useNavigation } from '@react-navigation/native';
import ImgAlbum from '../Common/ImgAlbum';
import { useSelector } from 'react-redux';
import Ratings from '../Common/Ratings';

const Product = ({ id }) => {
    const navigation = useNavigation();
    const data = useSelector((state) => state.data);
    const currentProduct = data.find((product) => product.id === id);

    var dpImage = "file:///data/user/0/com.testapp/cache/rn_image_picker_lib_temp_680e9101-c704-4a34-bab2-8aad3f5efcd9.jpg";

    if (currentProduct.image === []) {
        dpImage = { uri: "file:///data/user/0/com.testapp/cache/rn_image_picker_lib_temp_680e9101-c704-4a34-bab2-8aad3f5efcd9.jpg" };
    } else {
        dpImage = { uri: currentProduct.image[0] };
    }


    return (
        <Pressable
            android_ripple
            style={styles.cont}
            onPress={() => navigation.navigate("viewProductScreen", id)}>
            <View style={{ flexDirection: "row" }}>
                <Image style={styles.img}
                    source={dpImage} />
                <View style={styles.details}>

                    <Text style={styles.title}>{currentProduct.name}</Text>
                    <Ratings ratings={AvgRating(currentProduct.ratings)} />
                    <Text style={styles.text}>Rs.{currentProduct.amount}</Text>
                    <Text style={styles.text}>{currentProduct.description}</Text>
                </View>
            </View>

            <ImgAlbum images={currentProduct.image} />



        </Pressable>
    );
};

export default Product;

const styles = StyleSheet.create({
    cont: {
        backgroundColor: "white",
        padding: 16,
        elevation: 3,
        borderRadius: 4,
        marginVertical: 12,
    },
    img: {
        width: 120,
        height: 120,
    },
    title: {
        marginVertical: 6,
        fontSize: 16,
        fontWeight: '500',
        color: "black"
    },

    text: {
        marginVertical: 6,
        marginRight: 6,
    },
    details: {
        marginHorizontal: 16,
    }
});