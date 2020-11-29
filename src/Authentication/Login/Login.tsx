import React from 'react';
import { View } from 'react-native';

import SocialLogin from '../components/SocialLogin';
import { Container, Button, Text } from '../../components'
import { Box } from '../../components/Theme';

const Login  = () => {
  const footer = (
    <>
      <SocialLogin />
        <Box alignItems='center'>
          <Button variant='transparent' onPress={() => alert("SignUp")}>
            <Box flexDirection='row' justifyContent='center' flex={1}>
              <Text variant='button' color='white'>Dont have an account?</Text>
              <Text marginLeft='s' variant='button' color='primary'>Sign up here</Text>
            </Box>
          </Button>
        </Box>
    </>
  );
  return (
      <Container {...{footer}}>
            <View />
      </Container>
  )
}

export default Login;