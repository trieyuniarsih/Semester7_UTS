import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';

const index = () => {
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
      <Text>silahkan daftarkan dengan email kerja</Text>
      <Text>Email</Text>
      <View style={{
        backgroundColor:'red',
        width:100,
        height:100,
        marginTop:50
      }}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 20,
            paddingHorizontal: 10,
          }}
          placeholder="Type here"
          onChangeText={newText => setText(newText)}
          value={'masukan password'}
        />
        
      </View>

      <View style={{
        backgroundColor:'red',
        width:100,
        height:100,
        marginTop:50
      }}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 20,
            paddingHorizontal: 10,
          }}
          placeholder="Type here"
          onChangeText={newText => setText(newText)}
          value={'masukan password'}
        />
        
      </View>
      <TouchableOpacity style={{
        width:100,
        height:100,
        marginTop:10,
        backgroundColor:'blue'
      }}>

      </TouchableOpacity>
    </View>
  )
}

export default index