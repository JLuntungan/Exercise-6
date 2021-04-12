import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const TextField = ({label, teksBantuan, isi, setIsi}) => {
    return (
        <View style={{marginVertical:7}}>
            <Text style={{marginBottom:5, fontWeight:'bold'}}>{label}</Text>
            <TextInput 
                style={{borderWidth:1,
                 borderRadius:10, 
                 paddingVertical:3, 
                 paddingLeft:10, 
                 borderColor:'#C4C4C4'}} 
                 placeholder={teksBantuan} value={isi} onChangeText={setIsi}></TextInput>
        </View>
    )
}

const Button = ({label, fungsi}) =>{
    return (
        <TouchableOpacity style={{backgroundColor:'#C237CE', paddingVertical:10, borderRadius:25, alignItems:'center',marginTop:25 }}onPress={fungsi}>
            <Text style={{color:'white'}}>{label}</Text>
        </TouchableOpacity>
    )
}

const Registration = ({changePageHandler}) => {
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const phoneNumberHandler = (nilai) => {
        nilai = nilai.replace(/\D/g, '');
        setPhoneNumber(nilai);
    }

    const registerHandler = () =>{
        console.log(`Name = ${name}`);
        console.log(`Username = ${userName}`);
        console.log(`Email = ${email}`);
        console.log(`Address = ${address}`);
        console.log(`Phone Number = ${phoneNumber}`);
        changePageHandler()
    }

    return(
        <View style={{padding:10}}>
            <Text style={{fontSize: 35, fontWeight:'bold'}}>Registration </Text>
            <TextField label='Name' teksBantuan='Masukkan nama lengkap anda' isi={name} setIsi={setName}></TextField>
            <TextField label='Username' teksBantuan='Masukkan usernama anda' isi={userName} setIsi={setUserName}></TextField>
            <TextField label='Email' teksBantuan='Masukan email anda' isi={email} setIsi={setEmail}></TextField>
            <TextField label='Address' teksBantuan='Masukkan alamat anda' isi={address} setIsi={setAddress}></TextField>
            <TextField label='Phone Number' teksBantuan='Masukkan phone number anda' isi={phoneNumber} setIsi={phoneNumberHandler}></TextField>
            <Button label='Register' fungsi={registerHandler}></Button>
        </View>
    )
}

export default Registration;