import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const Header = () => {
    return (
        <View style={headerContainer}>
            <Text style={header}>Cryptocurrency Tracker App</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        marginTop: Platform.OS == 'ios' ? 55: 30,
        alignItems: "center"
    },
    header: {
        fontWeight: "bold",
        fontSize: 20
    }
});

const { headerContainer, header } = styles;

export default Header;