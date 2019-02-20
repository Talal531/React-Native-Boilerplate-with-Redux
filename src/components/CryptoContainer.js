import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class CryptoContainer extends Component {
    render() {
        return (
            <View>
                <Text> Container </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('++++++', state);
    return {
        crypto: state.crypto
    }
};

export default connect(mapStateToProps)(CryptoContainer)