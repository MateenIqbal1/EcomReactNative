import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Layout from '@/components/Layout/Layout';
import { UserData } from './../../data/UserData';
import { AntDesign } from '@expo/vector-icons';

const Account = ({navigation}) => {
  return (
    <Layout>
      <View style={styles.container}>
        <Image source={{ uri: UserData.profilePic }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{UserData.name} 👋👋</Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Email:</Text> {UserData.email}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Contact:</Text> {UserData.contact}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Address:</Text> {UserData.address}
          </Text>
          
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Account Settings</Text>
            <View style={styles.divider} />
            <TouchableOpacity style={styles.row} onPress={()=>navigation.navigate('profile',{id:UserData._id})}>
              <AntDesign name="edit" size={20} color="white" />
              <Text style={styles.rowText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.row}
             onPress={()=>navigation.navigate('myorders',{id:UserData._id})}
             >
              <AntDesign name="bars" size={20} color="white" />
              <Text style={styles.rowText}>My Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.row} onPress={()=>navigation.navigate('notifications')}>
              <AntDesign name="bells" size={20} color="white" />
              <Text style={styles.rowText}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.row}
             onPress={()=>navigation.navigate('adminPanel',{id:UserData._id})}
            >
              <AntDesign name="windows" size={20} color="white" />
              <Text style={styles.rowText}>Admin Panel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  detailsContainer: {
    alignItems: 'start',
    width: '100%',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#008080',
    marginBottom: 6,
  },
  text: {
    fontSize: 16,
    color: '#008080',
    marginBottom: 2,
  },
  label: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
  },
  buttonContainer: {
    backgroundColor: '#008080',
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: -10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  divider: {
    width: '95%',
    height: 1,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  rowText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default Account;
