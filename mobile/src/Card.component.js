import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor:'#d3d3d3',
        padding: 20,
        fontSize:15
    },
    header: {
        fontSize:20
    },
    body: {
        fontSize:12
    }
});

export default class Card extends Component {
    render() {
        return (
            <View className="card" style={styles.card}>
                <Text style={styles.header}>{this.props.header}</Text>
                <Text style={styles.body}>{this.props.body}</Text>
            </View>
        );
    }
}