import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import FetchCoinData from '../Actions/FetchCoinData';

class CryptoContainer extends Component {

    componentDidMount(){
        this.props.FetchCoinData();
    }
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

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)