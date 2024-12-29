import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CartData from "./../data/CartData";
import PriceTable from "../Cart/PriceTable";
import Layout from "../Layout/Layout";
import CartItem from "./../Cart/CartItem";
const Cart = ({navigation}) => {
  const [cartItems, setCartItems] = useState(CartData);
  return (
    <Layout>
      <Text style={styles.heading}>
        {cartItems?.length > 0
          ? `You have ${cartItems?.length} item in your cart`
          : "OOPs your cart is empty"}
      </Text>
      {cartItems?.length > 0 && (
        <>
          <ScrollView>
            {cartItems?.map((item) => (
              <CartItem item={item} />
            ))}
          </ScrollView>
          <View>
            <PriceTable title={"Price"} price={999} />
            <PriceTable title={"Tax"} price={1} />
            <PriceTable title={"Shipping"} price={1} />
            <View style={styles.grandTotal}>
              <PriceTable  title={"Grand Total"} price={1001} />
            </View>
            <TouchableOpacity style={styles.btnCheckOut} onPress={()=>navigation.navigate('checkout')}>
              <Text style={styles.btnCheckOutText}>Check Out</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Layout>
  );
};
const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    color: "green",
    marginTop: 10,
  },
  grandTotal: {
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "#ffffff",
    padding: 5,
    margin: 5,
    marginHorizontal: 18,
  },
  btnCheckOut:{
    marginTop:20,
    alignItems:'center',
    height:40,
    backgroundColor:'#FF0000',
    width:'90%',
    marginHorizontal:20,
    borderRadius:20,
  },
  btnCheckOutText:{
    color:'#ffffff',
    fontWeight:'bold',
    marginTop:7,
    fontSize:19,
  },
  
});
export default Cart;
