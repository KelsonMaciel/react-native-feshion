import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import {Button, Text} from './../../components'

interface SubSlideProps {
    subtitle: string;
    description: string;
    last:boolean;
    onPress: () => void;
}

const { width } = Dimensions.get('window')

const  styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 44,
        flex: 1,
    }, 
    subtitle: {
        textAlign: 'center',
        marginBottom: 12,
    }, 
    description: {
        color:  "#0C0D34",
        textAlign: 'center',
        marginBottom: 40,
    }
})

const SubSlide = ({subtitle, description, last, onPress}: SubSlideProps) => {
  return (
      <View style={styles.container}>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text variant='body' style={styles.description}>{description}</Text>
          <Button
            label={last ? "lets get Started" : "Next"} 
            variant={last ? "primary" : "default"} 
            {...{onPress}}
            />
      </View>
  )
}

export default SubSlide;