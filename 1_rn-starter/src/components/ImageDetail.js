import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const ImageDetail = (props) => {

    return <View>
        <Image source={props.imageSource}/>
        <Text>Show image of {props.title}</Text>

    </View> 
    
}

const styles = StyleSheet.create({})

export default ImageDetail