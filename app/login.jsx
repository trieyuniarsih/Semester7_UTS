import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [text, setText] = useState('');

  return (
    <View>
        <View style={{
        width: 450,
        height: 500,
        backgroundColor: '#44B156',
        borderRadius: 50,
        marginTop: -150
        }}><View style={{
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        marginTop: 250,
        marginHorizontal: 'auto'
      }}></View>
      </View>
      <Text style={{
        fontSize: 25,
        textAlign: 'center',
        marginTop: 50
      }}>Silahkan login menggunakan akun</Text>
      <View style={{
        width: 350,
        height: 40,
        marginTop: 50,
        marginHorizontal: 'auto',
        borderRadius: 20
      }}>
        <TextInput
          style={styles.input}
          placeholder="Type here"
          onChangeText={newText => setText(newText)}
          value={'masuk ke akun anda'}
        />
                <TextInput
          style={styles.input}
          placeholder="Type here"
          onChangeText={newText => setText(newText)}
          value={'masukan password'}
        />
      </View>
      <TouchableOpacity style={{
        width:100,
        height:100,
        backgroundColor: 'blue',
        marginTop:100,
        marginHorizontal:'auto'
      }}>

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  text: {
    fontSize: 16
  }
});

export default App;
