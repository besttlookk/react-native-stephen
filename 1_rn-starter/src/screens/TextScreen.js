import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'

const TextScreen = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    // const [error, setError] = useState('')


    // if(password.length < 5){
    //     setError('Password Length Should be greater than 5 characters')
    // }
    return (
        <View>
            <Text>Enter Your Name</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />

            <Text> Enter Password</Text>
            <TextInput 
                style={styles.input}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            
            />
            {password.length < 4 ? (<Text>ERROR</Text>) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: "black",
        borderWidth: 1
    }
})

export default TextScreen