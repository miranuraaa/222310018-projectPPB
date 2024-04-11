import React, { Component } from 'react';
import {View, StyleSheet, Image, Text, SafeAreaView} from 'react-native';

class Latihan3 extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Image 
                        source={require('../assets/logo_ibik.png')}
                        style={{ width:83, height:80 }}/>
                </View>
                <Text style={styles.textLoad}>Loading...</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:70
    },
    textLoad :{
        color: 'white',
        fontSize:10,
        textAlign:'center',
        marginBottom:70
    }
})

export default Latihan3;