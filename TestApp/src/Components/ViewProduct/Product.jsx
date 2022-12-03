import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import ImgAlbum from '../Common/ImgAlbum';
import { useSelector } from 'react-redux';
import SortArray from '../../util/SortArray';

const Product = ({ id }) => {

    const data = useSelector((state) => state.data);
    const currentProduct = data.find((product) => product.id === id);

    const list = SortArray(currentProduct.ratings);

    return (
        <View
            style={styles.cont}>
            <ImgAlbum images={currentProduct.image} />
            <Text style={styles.title}>{currentProduct.name}</Text>
            <Text>Avg Rating: {AvgRating(currentProduct.ratings)}</Text>
            <Text style={styles.text}>Rs.{currentProduct.amount}</Text>

            <Text style={styles.text}>{currentProduct.description}</Text>

            {
                list.map((rating, i) => {
                    return (
                        <View key={i} style={styles.ratings}>
                            <Text style={styles.text}>Phone Number: {rating.phNumber}</Text>
                            <Text style={styles.text}>Ratting: {rating.rating}</Text>
                        </View>
                    );
                })
            }

        </View>
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
    amt: {
    },
    text: {
        marginVertical: 6,
        marginRight: 6,

    },
    ratings: {
        borderColor: "lightgrey",
        borderWidth: 1,
        marginVertical: 6,
        padding: 6,
    }
});