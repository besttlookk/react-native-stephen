import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

  // console.log(props.navigation)
  return <View>
      <Text style={styles.text}>Hi There</Text>
      <Button 
        title="Go to Componnet Demo"
        onPress={()=> navigation.navigate('Components')}
        />
        {/* with touchableOpacity we can add any type of clicable element not just text.. it can be image too..or.. multi line elememt */}
        {/* <TouchableOpacity onPress={()=> props.navigation.navigate('List')}>
          <Text>Go to List Demo</Text>
          
        </TouchableOpacity> */}

        <Button 
          title="Go to List Demo"
          onPress={() => navigation.navigate("List")}
        />

        <Button
          title="Go to Image Demo"
          onPress={()=> navigation.navigate("Image")}
        />
        <Button
          title="Go to Counter Demo"
          onPress={()=> navigation.navigate("Counter")}
        />
        <Button
          title="Go to Color Demo"
          onPress={()=> navigation.navigate("Color")}
        />
        <Button
          title="Go to Square Demo"
          onPress={()=> navigation.navigate("Square")}
        />
        <Button
          title="Go to Text Demo"
          onPress={()=> navigation.navigate("Text")}
        />
        <Button
          title="Go to Box Demo"
          onPress={()=> navigation.navigate("Box")}
        />
    </View> 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;


