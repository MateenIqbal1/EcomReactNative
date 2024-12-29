import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import  { useRef ,useState} from 'react';


const Header = () => {
  const inputRef = useRef(null);
  const [searchText,setSearchText]=useState('');
  const handleSearchClick = () => {
    inputRef.current.focus();  
  };
  const handleChangeText = (text) => {
    setSearchText(text);
  };
  const handleSearch=()=>{
    console.log(searchText)
    setSearchText('')
  }
  return (
    <View style={styles.inputContainer}>
<TextInput
        ref={inputRef} // Attach the ref to the TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchText}
        onChangeText={handleChangeText}
        
      />    
       <TouchableOpacity onPress={handleSearchClick,handleSearch}>
      <FontAwesome name="search" size={30} color="Black	" style={styles.icon} />
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row', 
    width: '99%', 
    alignItems: 'center', // Center items vertically
    marginTop: 2, // Add space above the input
    height:62,
    backgroundColor:'lightgray'

  },
  input: {
    //hello
    flex: 1, // Take the majority of the space
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    padding: 10,
    marginRight: 5,
    marginLeft: 15, // Space between input and filter icon
    backgroundColor:'white',
    color:'black',
    //height:45,
  },
  icon: {
    marginRight: 8, // Space between icon and TextInput
  },
});

export default Header;
