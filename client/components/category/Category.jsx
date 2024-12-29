import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { CategoriesData } from '../../constants/CategoriesData';
import  FontAwesome  from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
const Category = () => {
    const navigation=useNavigation()
  return (
    <View style={styles.container}>
      {CategoriesData?.map((item) => (
        <View style={styles.itemContainer} key={item._id}>
          <TouchableOpacity style={styles.touchable} 
          onPress={()=>navigation.navigate(item.path)}
          >
            <FontAwesome name={item.icon} size={25} color="white" />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 9,
    marginHorizontal: 6,
    flexDirection: 'row',
    alignItems: 'center',
   flexWrap:'nowrap',
   borderTopWidth: 1, // Top border line
   borderBottomWidth: 1, // Bottom border line
   //borderColor: '#ccc',
   borderColor: 'black',

  },
  itemContainer: {
    width: 70, // Set a fixed width to fit multiple items in a row
    alignItems: 'center',
    marginHorizontal: 2,
    flex:1, // Small horizontal margin for minimal gap
    marginTop:5,
    marginBottom:5
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#4682B4', // Example background color for each item
    borderRadius: 10,
    width: '100%',
    height: 50, // Fixed height to match the example image
  },
  text: {
    marginTop: 5,
    fontSize: 12, // Adjust font size to fit in the container
    color: 'white',
    textAlign: 'center',
  },
});

export default Category;
