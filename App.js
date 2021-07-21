import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, Text, View, Button, TextInput,BVLinearGradient } from 'react-native';

export default function App() {

  const answer = '09123'
  const [code, setCode] = useState('')
  const [message, setMessage ] = useState('')
  const [message2, setMessage2 ] = useState('')

  function result(num){
    setCode(num)
    if(num == answer ){
      setMessage('密碼正確')
    }else{
      setMessage('密碼錯誤')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>請輸入神秘密碼</Text>

      <TextInput
      style={styles.mainInput}
      onChangeText={(text) => result(text)}
      value={code} //讀取textinput裡面的值
      maxLength={30}
      placeholder='請輸入'
      keyboardType={'numeric'}
      secureTextEntry={true}
      editable={true}
      //autoFocus={true}
      />

      <Text style={styles.header}>你輸入的是：{code}</Text>
      <Text style={styles.header}>輸入結果：{message}</Text>


      <Button
      Color='#3571FF'
      title={'再次確認'}
      onPress={() => {code == answer ? setMessage2('就跟你說正確啦！') : setMessage2('就跟你說錯了！再試試看吧～')}}
      />

      <Text style={styles.header}>{message2}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    margin:16,
    textAlign: 'center',
    fontSize:16
},

  mainInput:{
    height:50,
    width:300, 
    borderRadius:4,
    borderColor:'#EBF2FF',
    borderWidth:4,
    backgroundColor:'#EBF2FF',
    color:'#3571FF',
    fontSize:20,
    textAlign:'center',
  }

});
