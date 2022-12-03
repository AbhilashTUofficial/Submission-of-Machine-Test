import { View, Text, Pressable, Image, StyleSheet, FlatList } from 'react-native';
import React from 'react';

const InsertImage = ({ handler, uris }) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <Pressable style={styles.addImg}
                onPress={handler}>
                <Image style={styles.img} source={require("../../Assets/Img/addImg.png")} />
            </Pressable>

            <FlatList
                data={uris}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={(img) => {
                    return (
                        <View style={styles.addImg}>
                            <Image style={styles.img} source={{ uri: img.item }} />
                        </View>
                    );
                }} />


        </View>
    );
};

export default InsertImage;


const styles = StyleSheet.create({
    addImg: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderColor: "lightgrey",
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 16,
    },
    img: {
        width: 60,
        height: 60,
    },

});