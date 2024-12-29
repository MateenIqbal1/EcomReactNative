import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import { UserData } from '@/components/data/UserData';
import { ScrollView } from 'react-native-gesture-handler';
import InputBox from '@/components/form/InputBox';

const Profile = ({navigation}) => {
  const [email, setEmail] = useState(UserData.email);
  const [profilePic, setProfilePic] = useState(UserData.profilePic);
  const [password, setPassword] = useState(UserData.password);
  const [name, setName] = useState(UserData.name);
  const [address, setAddress] = useState(UserData.address);
  const [city, setCity] = useState(UserData.city);
  const [contact, setContact] = useState(UserData.contact);


  const handleUpdate=()=>{
    if (!email || !password || !name || !address || !city || !contact) {
        return alert("please provide all fields");
      }
      alert('profile updated successfully')
      navigation.navigate("account");
  }
  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image source={{ uri: profilePic }} style={styles.image} />
            <Pressable style={styles.profileTextContainer}>
              <Text style={styles.profileText}>Update your profile pic</Text>
            </Pressable>
          </View>
          <InputBox value={name} setValue={setName} placeholder={'enter your name'} autoComplete={'name'}/>
          <InputBox value={email} setValue={setEmail} placeholder={'enter your email'} autoComplete={'email'}/>
          <InputBox value={password} setValue={setPassword} placeholder={'enter your password'} autoComplete={'password'}/>
          <InputBox value={address} setValue={setAddress} placeholder={'enter your address'} autoComplete={'address-line1'}/>
          <InputBox value={city} setValue={setCity} placeholder={'enter your city'} autoComplete={'country'}/>
          <InputBox value={contact} setValue={setContact} placeholder={'enter your contact'} autoComplete={'tel'}/>
          <TouchableOpacity style={styles.updateBtn} onPress={handleUpdate}>
        <Text style={styles.updateText}>Update Profile</Text>
      </TouchableOpacity>
        </ScrollView>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: '100%',
    resizeMode: 'contain',
  },
  profileTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    color: 'red',
  },
  updateBtn: {
    marginLeft:85,
    marginTop: 5,
    backgroundColor: "#CD5C5C",
    width: "50%",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    marginBottom:11,
  },
  updateText: {
    color: "white", // White text color
    fontWeight: "bold", // Bold text
    fontSize: 14, // Font size for readability
  },
  
});

export default Profile;
