import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const InputBox = ({inputTitle, keyboardType, autoComplete,
     secureTextEntry=false, value, setValue}) => {
  return (
    <View>
       <Text>{inputTitle}</Text>
       <TextInput style={styles.inputBox} 
        autoCorrect= {false}
        keyboardType= {keyboardType}
        autoComplete= {autoComplete}
        secureTextEntry= {secureTextEntry} 
        value= {value}
        onChangeText= {(text)=> setValue(text)}
       />
    </View>
  )
}

const styles = StyleSheet.create({
    inputBox: {
      height: 40,
      marginBottom: 20,
      backgroundColor: "#fff",
      borderRadius: 10,
      marginTop: 10,
      paddingLeft: 10,
      color: "#af9f85"
    }
  })


export default InputBox