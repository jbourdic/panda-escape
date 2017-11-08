import React from 'react';
import {StyleSheet} from 'react-native';
import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    game: {
        flex: 5,
        width: width
    },
    controls: {
        flex: 2,
        width: width
    }
});

export default styles;