import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import React, {useState} from 'react'
import InputBox from '../../components/Forms/InputBox'
import SubmitButton from '../../components/Forms/SubmitButton'


const Login = () => {
   //useState
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [loading, setLoading] = useState(false)
   //Function
 
   //Btn function
   const handleSubmit = () => {
     try {
       setLoading(true)
       if (!email || !password) {
         Alert.alert("rempliisez les champs");
         setLoading(false);
         return;
       }
       setLoading(false);
       console.log("Register => ", { email, password});
       
       
     } catch (error) {
       setLoading(false)
       console.log(error)
     }
   }
   return (
     <View style={styles.container}>
       <Text style={styles.pageTitle}>Login</Text>
       <View style={{ marginHorizontal: 20}}>
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
       {/* <Text>{JSON.stringify({name, email, password}, null, 4)} </Text> */}
       <SubmitButton btnTitle="Login" loading={loading} handleSubmit={handleSubmit} />
 
       <Text style={styles.linkText}>Nouvel user ?? <Text style={styles.link}>S'INSCRIRE</Text> </Text>
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
    },
    linkText: {
      textAlign: 'center',
    },
    link: {
      color: "red",
    },
  })
  

export default Login