import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from './Controls.css';

export default class Controls extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={alert}
                    title="<"
                />
                <Button
                    onPress={alert}
                    title="^"
                />
            </View>
        );
    }
};
