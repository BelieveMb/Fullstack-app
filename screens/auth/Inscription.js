import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, {useState} from 'react'
import InputBox from '../../components/Forms/InputBox'

const Inscription = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Rjhh</Text>
      <View style={{ marginHorizontal: 20}}>
          <InputBox inputTitle={"Name"} value={name} setValue={setName} />
          <InputBox inputTitle={"Email"} 
            keyboardType = "email-address"
            autoComplete="email"
            value={email} setValue={setEmail}
          />
        <InputBox inputTitle={"Password"}
          secureTextEntry={true}
          autoComplete="password" 
          value={password} setValue={setPassword}
        />
      </View>
      <Text>{JSON.stringify({name, email, password}, null, 4)} </Text>
    </View>    
  )
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#e1d5c9"
  },
  pageTitle: {
      fontSize: 40,
      fontWeight: "bold",
      textAlign: "center",
      color: "#1e2225",
      marginBottom: 20,
  },
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

export default Inscription