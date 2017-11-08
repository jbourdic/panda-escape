import React from 'react';
import {Text, View} from 'react-native';
import styles from './Layout.css';
import Controls from '../Controls/Controls';
import Game from '../Game/Game';

export default class Layout extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.game}>
                    <Game/>
                </View>
                <View style={styles.controls}>
                    <Controls/>
                </View>
            </View>
        );
    }
};
