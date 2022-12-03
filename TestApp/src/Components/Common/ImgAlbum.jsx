import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import React from 'react';

const ImgAlbum = ({ images }) => {
    if (images.length > 1) {

        return (
            <View style={styles.cont}>
                <Text>Images</Text>
                <FlatList
                    horizontal
                    data={images}
                    renderItem={(image) => {
                        return (<Image style={styles.img} source={{ uri: image.item }} />);

                    }} />
            </View>
        );
    }

};

export default ImgAlbum;


const styles = StyleSheet.create({
    cont: {
        marginVertical: 16,
    },
    img: {
        width: 120,
        height: 120,
        marginVertical: 16,
        marginRight: 16,
    }
});