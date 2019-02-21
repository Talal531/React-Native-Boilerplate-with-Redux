import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import FetchCoinData from '../Actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {

    componentDidMount(){
        this.props.FetchCoinData();
    }
    renderCoinCards = () => {
        const { crypto } = this.props;
        return crypto.data.map((coin, index) => 
            <CoinCard 
                key={index}
                coin_name={coin.name}
                symbol={coin.symbol}
                price_usd={coin.price_usd}
                percent_change_24h={coin.percent_change_24h}
                percent_change_7d={coin.percent_change_7d}
            />
        );
    }

    render() {
        const { crypto } = this.props;
        if(crypto.isFetching == true || crypto.isFetching == null) return <ActivityIndicator size="large" style={{display:'flex', alignItems:'center', backgroundColor:'#ccc', justifyContent: 'center', height: '100%'}} />

        return (
            <ScrollView contentContainerStyle={contentContainer}>
                {this.renderCoinCards()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55
    }
});

const { contentContainer } = styles;


const mapStateToProps = (state) => {
    return {
        crypto: state.crypto
    }
};

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)