import { View, Text, StyleSheet, Pressable, Modal, TextInput } from 'react-native';
import React, { useState } from 'react';
import { addRating } from '../../Redux/productsSlice';
import { useDispatch, useSelector } from 'react-redux';

const AddRatingBtn = ({ id }) => {
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    const [phInput, setPhInput] = useState("");
    const [rating, setRating] = useState("");


    const data = useSelector((state) => state.data);

    const currentProdect = data.find((product) => product.id === id);

    const addRatingHandler = () => {
        if (phInput.length === 10) {
            var isValid = true;

            if (currentProdect.ratings === undefined) {
                console.log("undefined");

            }

            currentProdect.ratings.map((rating) => {
                if (rating.phNumber === phInput) {
                    isValid = false;
                }
            });

            if (isValid) {
                if (rating !== "" && parseFloat(rating) <= 5.0) {

                    dispatch(addRating({ id, phInput, rating }));
                    setPhInput("");
                    setRating("");
                    setModalVisible(false);
                } else {
                    alert("Invalid rating!");
                }
            } else {
                alert("Already had a rating from this number!");
            }
        }
    };


    return (

        <>
            <Pressable style={styles.addRatingBtn}
                android_ripple
                onPress={() => setModalVisible(true)}>
                <Text style={styles.addRatingText}>Add Rating</Text>
            </Pressable>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.modalCont} >
                    <View style={styles.modal}>
                        <TextInput
                            keyboardType='number-pad'
                            placeholder='Phone Number'
                            onChangeText={(text) => { setPhInput(text); }}
                            value={phInput} />
                        <TextInput
                            keyboardType='numeric'
                            placeholder='Rating'
                            onChangeText={(text) => { setRating(text); }}
                            value={rating} />

                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Pressable style={styles.linkBtn}
                                onPress={() => setModalVisible(false)}>
                                <Text style={styles.linkTxt}>Cancel</Text>
                            </Pressable>

                            <Pressable style={styles.linkBtn}
                                onPress={() => addRatingHandler()}>
                                <Text style={styles.linkTxt}>Submit</Text>
                            </Pressable>
                        </View>

                    </View>


                </View>
            </Modal>
        </>
    );
};

export default AddRatingBtn;

const styles = StyleSheet.create({
    addRatingBtn: {
        height: 60,
        backgroundColor: "#3e04c3",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
    },
    addRatingText: {
        color: "white",
    },
    modalCont: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    modal: {
        backgroundColor: "white",
        borderRadius: 6,
        elevation: 3,
        paddingVertical: 16,
        paddingHorizontal: 36,
        width: "70%",
        justifyContent: "space-evenly"
    },
    linkTxt: {
        fontWeight: "bold",
    },
    linkBtn: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: "lightgray",
        paddingVertical: 4,
        paddingHorizontal: 6,
    }

});