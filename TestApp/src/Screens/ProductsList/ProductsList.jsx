import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import Product from '../../Components/ProductsList/Product';
import { useSelector } from 'react-redux';

const ProductsList = () => {

  const data = useSelector((state) => state.data);

  return (
    <View style={styles.cont}>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={product => product.id}
        renderItem={(product) => (
          < Product id={product.item.id} />
        )}
      />
    </View>
  );
};

export default ProductsList;

const styles = StyleSheet.create({
  cont: {
    height: "100%",
    marginVertical: 16,
    marginHorizontal: 12,
  }
});