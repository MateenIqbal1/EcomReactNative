import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const ProductsCard = ({ p }) => {
    const navigation=useNavigation()

    //more details button(product Details Page)
    const handleMoreButton=(id)=>{
     navigation.navigate('productDetails',{_id:id})
    }
  return (
    <View>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: p?.imageUrl }} resizeMode="contain" />
        <Text style={styles.cardTitle}>{p?.name}</Text>
        <Text style={styles.cardDesc}>{p?.description.substring(0, 30)}...more</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonDetail} onPress={()=>handleMoreButton(p._id)}>
            <Text style={styles.buttonText}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'lightgray',
    marginVertical: 5,
    marginHorizontal: 8,
    width: '45%',
    padding: 10,
    backgroundColor: '#ffffff',
  },
  cardImage: {
    height: 120,
    width: '100%',
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 5,
  },
  cardDesc: {
    fontSize: 10,
    textAlign: 'left',
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 3,
  },
  button: {
    height:20,
    width:75,
   // paddingHorizontal: 15,
    //paddingVertical: 0.5,
    backgroundColor: '#008B8B',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 0.4,
    margin: 1,
  },
  buttonDetail: {
    height:20,
    width:75,
   // paddingHorizontal: 15,
    //paddingVertical: 0.5,
    backgroundColor: '#000000',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 0.4,
    margin: 1,
  },
  buttonText: {
    color:'#ffffff',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProductsCard;
