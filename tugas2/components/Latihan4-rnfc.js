import React, { useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Latihan4rnfc = () => {
    const [MyBio] = useState({
        identity: {
            npm: 222310018,
            firstname: "Mira",
            middlename: "Nur",
            lastname: "Aulia",
        },
        education:[
            {id:1, school:"SMPN 2 Ciawi"},
            {id:2, school:"SMKS Wikrama Kota Bogor"},
            {id:3, school:"Institut Bisnis dan Informatika Kesatuan"},
        ],

        mobile_phone: "082125239388",
        email:"222310018@student.ibik.ac.id",
        gender: "Female", tall_body: 157, weight_body: 54
    })

    const eduNow = MyBio.education.find((item) => item.id == 3);

    return (
        <View>
            <Text style={styles.judul}>Biodata Diri Dengan RFC</Text>
            <Text style={styles.container}>NPM : {MyBio.identity.npm}</Text>
            <Text style={styles.container}>First Name : {MyBio.identity.firstname}</Text>
            <Text style={styles.container}>Middle Name : {MyBio.identity.middlename}</Text>
            <Text style={styles.container}>Last Name : {MyBio.identity.lastname}</Text>
            <Text style={styles.container}>Education : {eduNow?.school}</Text>
            <Text style={styles.container}>Phone : {MyBio.mobile_phone}</Text>
            <Text style={styles.container}>Email : {MyBio.email}</Text>
            <Text style={styles.container}>Gender : {MyBio.gender}</Text>
            <Text style={styles.container}>Height : {MyBio.tall_body}</Text>
            <Text style={styles.container}>Weight : {MyBio.weight_body}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    judul: {
        color: "white",
        textAlign: "center",
        marginBottom: 20,
        fontWeight: "bold",
        fontSize: 20
    },
    container:{
        color: "white"
    }
})

export default Latihan4rnfc;