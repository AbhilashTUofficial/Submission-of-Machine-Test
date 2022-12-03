import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const InputField = ({ hintText, onChangeText, value, inputCofig }) => {
    return (
        <View style={styles.cont}>
            <TextInput placeholder={hintText}
                onChangeText={onChangeText}
                value={value}
                {...inputCofig}
            />
        </View>
    );
};

export default InputField;

const styles = StyleSheet.create({
    cont: {
        backgroundColor: "white",
        elevation: 2,
        borderRadius: 4,
        marginVertical: 12,
        paddingHorizontal: 6,
    },


});