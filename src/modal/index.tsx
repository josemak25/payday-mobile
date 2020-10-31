import React from 'react';
import Button from '../components/button';
import {Modal, Portal, Provider } from 'react-native-paper';
import {
  Container,
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
              <ModalTitle>Quickly setup a credit</ModalTitle>
              {/* <ModalInput
                theme={{ colors: { PRIMARY: '#000'} }}
                mode="outlined"
                label="New Credit"
                placeholder="Credit Amount"
                placeholderTextColor="#00000040"
              /> */}
            </TopView>

            <BottomView>
              <Button label="Save" onClick={() => {}} />
            </BottomView>
          </Modal>
        </Portal>
      </Container>
    </Provider>
  );
}
