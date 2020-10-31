import React from 'react';
import { Image } from 'react-native';
import { Container, SubContainer, Header, HeaderTwo } from './style';

type AppUserProps = {
  name: string;
};

const date = new Date();

const getGreetingTime = () => {
  let greet = '';

  let split_afternoon = 12;
  let split_evening = 17;
  let currentHour = date.getHours();

  if (currentHour >= split_afternoon && currentHour <= split_evening) {
    greet = 'Afternoon';
  } else if (currentHour >= split_evening) {
    greet = 'Evening';
  } else {
    greet = 'Morning';
  }

  return greet;
};

export default function AppUser(props: AppUserProps) {
  return (
    <Container>
      <Image
        source={require('../../../assets/images/avatar.png')}
        style={{ width: 40, height: 40 }}
        resizeMode="contain"
      />
      <SubContainer>
        <Header>Good {getGreetingTime()}</Header>
        <HeaderTwo>{props.name}</HeaderTwo>
      </SubContainer>
    </Container>
  );
}
