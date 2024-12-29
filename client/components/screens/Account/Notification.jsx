import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Layout from '@/components/Layout/Layout'

const Notification = () => {
  return (
    <Layout>
    <View style={styles.container}>
      <Text>Oops ! you don't have any Notifications</Text>
    </View>
    </Layout>
  )
}
const styles=StyleSheet.create({
    container:{
       // flex:1,
        justifyContent:'center',
        alignItems:'center',
      // marginTop:400,
        
    }
})

export default Notification