import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, Image } from 'react-native';

const Latihan1 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ borderWidth:1, width:200 }}>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    backgroundColor: "brown",
                    color: "#fff",
                    textAlign: "center",
                    textDecorationLine: "underline",
                    padding: 10,
                    marginBottom: 10
                }}
            >
                History of Bicycle
            </Text>
            <Text style={styles.paragraf}>
                A bicycle, also called a
                <Text style={{ ...styles.paragraf, color: "red" }}> pedal cycle</Text>,
                <Text style={{ ...styles.paragraf, fontWeight: "bold" }}> bike</Text>,
                <Text style={{ ...styles.paragraf, fontStyle: "italic" }}> push-bike or cycle</Text>,
                is a human-powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicyclerider is called a cyclist, or bicyclist.
            </Text>
            </View>
            <Image source={require("../assets/4X6.jpg")}
                style={{width:150, height:200}}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    paragraf: {
        fontSize: 18,
        textAlign: "justify"
    },
    container: {
        flex: 1,
        padding:10,
        backgroundColor: 'white',
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
    }
})

export default Latihan1;