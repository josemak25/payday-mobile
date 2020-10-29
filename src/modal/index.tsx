import React from 'react';
import { View, Modal, TouchableOpacity, Text } from 'react-native';

import { TextInput } from 'react-native-paper';
import { Container } from './styles';

export default function ModalCard() {
  return (
    <Container>
      <View
        style={{justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}
      >
        <Modal visible={true} transparent={true} animationType="slide">
          <View
            style={{
              height: '40%',
              width: '80%',
              backgroundColor: 'white',
              borderRadius:10
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                marginTop: '5%',
                fontWeight: 'bold',
                fontSize: 20
              }}
            >
              Quickly setup a credit
            </Text>
            <TextInput
              style={{
                padding: 8,
                marginTop: 50,
                width: '90%',
                alignSelf: 'center',
                height: 60,
                backgroundColor: '#FDE9DA65'
              }}
              theme={{ colors: { primary: '#000' } }}
              mode="outlined"
              label="New Credit"
              placeholder="Credit Amount"
              placeholderTextColor="#00000040"
              underlineColor="transparent"
            />

            <TouchableOpacity
              style={{
                width: '90%',
                borderRadius: 30,
                backgroundColor: '#CF9775',
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 90
              }}
            >
              <Text style={{color: '#fff'}}>Save</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </Container>
  );
}
