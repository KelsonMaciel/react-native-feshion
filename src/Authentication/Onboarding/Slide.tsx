import React from 'react';
import { View, Dimensions, StyleSheet, Image } from 'react-native';
import {Text} from '../../components';

interface SlideProps {
    title: string;
    right?: boolean;
    picture: number;
}
const {width, height} = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;
export  const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
    container: {
        width,
        overflow: "hidden"
    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
    },
    picture: {
        ...StyleSheet.absoluteFillObject,
        borderBottomRightRadius: BORDER_RADIUS,
        width: undefined,
        height: undefined,
    },
    titleContainer: {
        height: 100,
        justifyContent: "center",
    },
    title: {
        fontSize: 80,
        lineHeight: 80,
        fontFamily: "SFProText-Bold",
        color: "white",
        textAlign: "center"
    }
})

const Slide = ({title, right, picture} : SlideProps) => {
    const  transform = [
        { translateY: (SLIDE_HEIGHT - 100) / 2}, 
        {translateX:  right ? width / 2 - 50 : -width / 2 + 50},
        {rotate: right ? "-90deg" : "90deg"}
    ]
    return (
        <View style={styles.container}>
            <View style={styles.underlay}> 
                <Image source={picture}  style={styles.picture}/>
            </View>
            <View style={[styles.titleContainer, {transform}]}>
                <Text variant="title1">{title}</Text>
            </View>
        </View>
    );
}

export default Slide;
