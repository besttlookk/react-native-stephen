import React from "react"
import {Text, View, StyleSheet} from 'react-native'

const ComponetsScreen = () => {

    const yourname = 'Prabhash'
    return (
        <View>
            <Text style={styles.textStyle}>Getting Started with React Native!</Text>
            <Text style={styles.subHeaderStyle}>My name is {yourname}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
})

export default ComponetsScreen