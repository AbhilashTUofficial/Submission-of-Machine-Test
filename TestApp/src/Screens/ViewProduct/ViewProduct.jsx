import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Product from '../../Components/ViewProduct/Product';
import { useSelector } from 'react-redux';
import AddRatingBtn from '../../Components/ViewProduct/AddRatingBtn';

const ViewProduct = ({ route }) => {

    const id = route.params;

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}

            style={styles.cont}>
            <Product id={id} />
            <AddRatingBtn id={id} />

        </ScrollView>
    );
};

export default ViewProduct;

const styles = StyleSheet.create({
    cont: {
        height: "100%",
        marginBottom: 16,
        marginHorizontal: 12,
    },
});