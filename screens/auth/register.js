import { StyleSheet, Text, View } from 'react-native'
import React from 'react-native'

const register = () => {
  return (
    <View styles={styles.container}>
        <Text styles={styles.pageTitle}>Register biso</Text>
        <Text styles={styles.pageTitle}>Register biso</Text>
    </View>
  )
}

export default register

  
  
const styles = StyleSheet.create({
      container: {
          flex: 1,
          justifyContent: "center",
          marginHorizontal: 20,
      },
      pageTitle: {
          fontSize:40,
          fontFamily: "bold",
          textAlign: "center",
  
      }
  })
  