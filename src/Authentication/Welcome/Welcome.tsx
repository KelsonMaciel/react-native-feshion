import React from 'react';
import theme, { Box, Text } from '../../components/Theme';
import { Image, Dimensions } from 'react-native';
import { Button } from '../../components';
import { StackNavigationProps, Routes } from '../../components/Navigation';


const picture = {
  src: require("./../../../assets/2.png"),
  width:  3383,
  height: 4274,
}
export  const assets = [picture.src]

const {width} = Dimensions.get('window');
const Welcome = ({navigation}: StackNavigationProps<Routes, "Welcome">) => {
  return (
    <Box flex={1} backgroundColor='white'>
        <Box flex={1} borderBottomRightRadius='xl' backgroundColor='grey' justifyContent="flex-end" alignItems="center">
          <Image 
            source={picture.src}
            style={{
              width: width - theme.borderRadii.xl,
              height: ((width - theme.borderRadii.xl) * picture.height) / picture.width
            }}
            />
        </Box>
        <Box flex={1} borderTopLeftRadius='xl' >
          <Box backgroundColor='grey' position='absolute' top={0} left={0} right={0} bottom={0} />
          <Box  
            backgroundColor='white'  
            borderTopLeftRadius='xl'  
            justifyContent='space-evenly' 
            alignItems='center'
            flex={1}
            padding='xl'
          >
            <Text variant='title2'>Let's  get started</Text>
            <Text variant='body' textAlign='center'>
              Login to your account below or signup for an amazin experience
            </Text>
            <Button variant='primary' label='Have an account? Login'  onPress={() => navigation.navigate("Login")}/>
            <Button  label='Join us, its Free'  onPress={() => {}} />
            <Button  variant="transparent" label='Forgot password?'  onPress={() => {}} />
          </Box >
       </Box>
    </Box>
  )
 }

export default Welcome;