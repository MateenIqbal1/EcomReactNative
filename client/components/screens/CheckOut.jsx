import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Layout from '../Layout/Layout'

const CheckOut = ({navigation}) => {
  const handleCOD=()=>{
    alert('Your Order Has been placed Successfully')
  }
  const handleOnline=()=>{
    alert('Your are redirected to payment');
    navigation.navigate('payment');
  }
  return (
    <Layout>
    <View style={styles.container}>
      <Text style={styles.heading}>Payment Options</Text>
      <Text style={styles.price}>Total Amount:101$</Text>
      <View style={styles.paymentCard}>
        <Text style={styles.paymentHeading}>Select your payment method</Text>
        <TouchableOpacity style={styles.paymentBtn} onPress={handleCOD}>
            <Text style={styles.paymentBtnText}>Cash On Delievery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentBtn} onPress={handleOnline}>
            <Text style={styles.paymentBtnText}>Online ( Debit  /  Credit Card )</Text>
        </TouchableOpacity>
      </View>
    </View>
    </Layout>
  )
}
const styles=StyleSheet.create({
container:{
alignItems:'center',
justifyContent:'center',
height:'88%',
//marginTop:90,
},
heading:{
    fontSize:30,
    fontWeight:'500',
   marginVertical:10
},
price:{
    fontSize:22,
    marginBottom:10,
    color:'gray',

},
paymentCard:{
    backgroundColor:'#ffffff',
    width:'90%',
    borderRadius:10,
    borderWidth:0.2,
    padding:30,
    marginVertical:10
},
paymentHeading:{
  color:'gray',
  marginBottom:10,
},
paymentBtn:{
  backgroundColor:'#008080',
  height:40,
  borderRadius:15,
  justifyContent:'center',
  marginVertical:10,
},
paymentBtnText:{
  color:'#ffffff',
  textAlign:'center',
  fontSize:16,
  fontWeight:'semibold'
}
})

export default CheckOut