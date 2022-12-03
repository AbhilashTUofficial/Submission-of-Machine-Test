import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductsList from '../Screens/ProductsList/ProductsList';
import AddProduct from '../Screens/AddProduct/AddProduct';
import ViewProduct from '../Screens/ViewProduct/ViewProduct';
import { Image, Pressable } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '../Redux/store';

const MainController = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Provider store={store}>

            <NavigationContainer>
                <Stack.Navigator>


                    <Stack.Screen name='productsListScreen' component={ProductsList}
                        options={({ navigation }) => ({
                            title: "Product List",
                            headerRight: () => (
                                <Pressable
                                    onPress={() => navigation.navigate("addProductScreen")}>
                                    <Image
                                        source={require("../Assets/Img/add_icon.png")}
                                        style={{ width: 24, height: 24, }}

                                    />
                                </Pressable>
                            )
                        })} />
                    <Stack.Screen name='viewProductScreen' component={ViewProduct} options={{
                        title: "Customer Ratings"
                    }} />

                    <Stack.Screen name='addProductScreen' component={AddProduct} options={{
                        title: "Add Product"
                    }} />

                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default MainController;