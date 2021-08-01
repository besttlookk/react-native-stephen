import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const BoxScreen = () => {
    return (
        <View style= {styles.viewStyle}>
            <Text style={styles.textOneStyle}>Box 1</Text>
            <Text style={styles.textTwoStyle}>Box 2</Text>
            <Text style={styles.textThreeStyle}>Box 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle : {
        height: 200,
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    textOneStyle : {
        height: 100,
        width: 100,
        borderWidth: 1,
        backgroundColor: 'yellow'
    },
    textTwoStyle : {
        height: 100,
        width: 100,
        borderWidth: 1,
        alignSelf:'flex-end',
        backgroundColor: 'green'
    },
    textThreeStyle : {
        width: 100,
        height: 100,
        borderWidth: 1,
        backgroundColor: 'yellow',
    },
})

export default BoxScreen