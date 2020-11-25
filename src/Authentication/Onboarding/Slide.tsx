import React from 'react';
import { View, Dimensions, StyleSheet, Image, ImageRequireSource } from 'react-native';
import {Text} from '../../components';

interface SlideProps {
    title: string;
    right?: boolean;
    picture: {
        src: ImageRequireSource;
        width: number;
        height: number;
    };
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
        alignItems: 'center',
        justifyContent: "flex-end",
    },
    titleContainer: {
        height: 100,
        justifyContent: "center",
    },
    title: {
        fontSize: 80,
        lineHeight: 80,
        fontFamily: "SFProDis-Bold",
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
                <Image source={picture.src} style={
                { ...StyleSheet.absoluteFillObject, 
                    width: width - BORDER_RADIUS,
                    height: (width - BORDER_RADIUS) * picture.height / picture.width
                }}/>
            </View>
            <View style={[styles.titleContainer, {transform}]}>
                <Text variant="hero">{title}</Text>
            </View>
        </View>
    );
}

export default Slide;
