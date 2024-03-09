import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {View, StyleSheet, Text,Image,Button} from 'react-native';

class Car extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>My Profile</Text>
                <Text>Nama        : Mira</Text>
                <Text>Kelas         : TI22PA</Text>
                <Text>Umur         : 19 Tahun</Text>
                <Text>Nomor HP : 082125239388</Text>
                <Text>Alamat       : Ciawi, Bogor</Text>
                <Text>Agama       : Islam</Text>
                <Text>Prodi          : S1 Teknologi Informasi</Text>
                <Image source={require("../assets/4X6.jpg")}
                style={{width:200, height:250, margin:10}}/>
            </View>
        );
    } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEE8AA',
        alignItems: "left",
        justifyContent: "left",
        margin:20,
      },
})

export default Car;
