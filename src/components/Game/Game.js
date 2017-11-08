import React from 'react';
import {Text, View} from 'react-native';
import styles from './Game.css';

export default class Game extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is my Game Component</Text>
            </View>
        );
    }
};
