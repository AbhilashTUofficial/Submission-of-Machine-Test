import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import React from 'react';

const Ratings = ({ ratings }) => {

    const star = require("../../Assets/Img/starImg.png");
    try {
        if (ratings === 0) {
            return <Text>No Ratings</Text>;

        } else {

            return (
                <FlatList
                    data={[...Array(parseInt(ratings)).fill(0)]}
                    horizontal
                    renderItem={() => (
                        <Image style={styles.img} source={star} />
                    )} />
            );
        }
    } catch (error) {

        return <Text>NaN</Text>;

    }





};

export default Ratings;

const styles = StyleSheet.create({
    img: {
        width: 16,
        height: 16,

    }
});