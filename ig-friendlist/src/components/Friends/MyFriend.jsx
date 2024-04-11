import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import SearchBarUi from './widgets/SearchBarUi';
import ExpScrollView from './modules/ExpScrollView';
import { Users } from '../const-data/Users';

class MyFriend extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
            <StatusBar hidden={false} /> 
            <View style={styles.header}>
                <SearchBarUi />
            </View>
            <View style={styles.body}>
                <ExpScrollView Data={Users} />
            </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    }, 

    header: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
    },

    body: {
        flex: 9,
    },
})

export default MyFriend;
