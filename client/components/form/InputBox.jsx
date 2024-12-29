import { View, Text ,TextInput, StyleSheet} from 'react-native'
import React from 'react'

const InputBox = ({value,setValue ,autoComplete ,placeholder ,secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} autoComplete={autoComplete} placeholder={placeholder}
      autoCorrect={false}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={(text)=>setValue(text)}
      />
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
       // alignItems:'center',
        marginVertical:10,
        width:'100%',
        marginTop:10,
    },
    input: { 
               height:50,
        width: '95%', // Makes the input full width of the container
        padding: 10,
        borderWidth: 1.5,
        borderColor: 'black',
        backgroundColor:'#B0E0E6',
        borderRadius: 4,
       // marginTop:30,
        marginHorizontal:1,
        marginLeft:10,
       
      },
})
export default InputBox