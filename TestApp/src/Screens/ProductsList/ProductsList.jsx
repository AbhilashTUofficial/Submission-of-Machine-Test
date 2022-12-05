import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import Product from '../../Components/ProductsList/Product';
import { useDispatch, useSelector } from 'react-redux';
import GetDataFromLocal from '../../util/GetDataFromLocal';
import { loadLocalData } from '../../Redux/productsSlice';

const ProductsList = () => {

  const dispatch = useDispatch();


  useEffect(() => {
    getData();
  }, []);

  getData = async () => {
    GetDataFromLocal().then((result) => dispatch(loadLocalData(result)));

  };


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