import React from 'react'
import { Text, View,StyleSheet } from 'react-native';
import Layout from './Layout/Layout'
import Category from '../components/category/Category'
import Banner from '../components/banner/Banner'
import Products from '../components/Products/Products'
import Header from '../components/Layout/Header'
const Home = () => {
  return (
    <>   
     <Layout>
      <Header />
      <Category />
      <Banner />
      <Products />
<View style={styles.container}>
    <Text>Home Page </Text>
   </View>

     </Layout>
   
    </>
   
  )
}
const styles = StyleSheet.create({
    container: {
      //marginTop:100,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
     
    },
  });
export default Home