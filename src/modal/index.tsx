import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { TextInput, Modal, Portal, Provider } from 'react-native-paper';
import {
  Container,
  ModalContainer,
  ModalInput,
  TouchableButton,
  TopView,
  BottomView,
  ModalTitle
} from './styles';

export default function ModalCard() {
  return (
    <Provider>
      <Container>
        <Portal>
          <Modal
            visible={true}
            contentContainerStyle={{
              alignItems: 'center',
              backgroundColor: '#fff',
              borderRadius: 10,
              height: '50%',
              width: '90%',
              alignSelf: 'center'
            }}
          >
            <TopView>
              <ModalTitle>
                Quickly setup a credit
              </ModalTitle>
              {/* <ModalInput
                theme={{ colors: { PRIMARY: '#000'} }}
                mode="outlined"
                label="New Credit"
                placeholder="Credit Amount"
                placeholderTextColor="#00000040"
              /> */}
            </TopView>

            <BottomView>
              <TouchableButton>
                <Text style={{ color: '#fff' }}>Save</Text>
              </TouchableButton>
            </BottomView>
        
          </Modal>
        </Portal>
      </Container>
    </Provider>
  );
}
