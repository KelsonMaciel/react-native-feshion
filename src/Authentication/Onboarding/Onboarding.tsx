import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import {interpolateColor , useScrollHandler} from  "react-native-redash/lib/module/v1";

import Slide, {SLIDE_HEIGHT, BORDER_RADIUS} from './Slide';
import Dot from './Dot';
import Animated, {multiply, divide} from 'react-native-reanimated';
import SubSlide from './SubSlide';

const {width} = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "white"
    },
    slider: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: BORDER_RADIUS,
    },
    footer: {
        flex: 1,
    },
    footerContent: {
        flex: 1,
        backgroundColor: "white", 
        borderTopLeftRadius: BORDER_RADIUS,
    },
    pagination: {
        ...StyleSheet.absoluteFillObject, 
        height: BORDER_RADIUS, 
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const slides = [
    {
        title: "Relaxed",  
        subtitle: "Find your OutFit" , 
        description: "Confused about outfit? Dont worry!  Find the bast outfit",
        color: "#BFFAF5",
        picture: require("./../../../assets/2.png")
    }, 
    {
        title: "Playful",  
        subtitle: "Hear it First, Wear it First", 
        description: "Heating the clother in your wardrobe?  explore hundreds of "  , 
        color: "#BEECC4",
        picture: require("./../../../assets/4.png")
    }, 
    {
        title: "Excentric",  
        subtitle: 'Lorem ipsum dolor sit amet', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veritatis, consequuntur ', 
        color: "#FFE4D9",
        picture: require("./../../../assets/3.png")
    }, 
    {
        title: "Funky",  
        subtitle: 'Lorem ipsum dolor si.', 
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.' ,
        color: "#FFDDDD",
        picture: require("./../../../assets/5.png")
    }, 
]

const Onboarding = () => {
    const scroll = useRef<Animated.ScrollView>(null);
    const {scrollHandler,  x}  = useScrollHandler();
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * width ), 
        outputRange: slides.map((slide) => slide.color )});
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, {backgroundColor}]}>
                <Animated.ScrollView 
                    ref={scroll}
                    horizontal snapToInterval={width} 
                    decelerationRate='fast' 
                    showsHorizontalScrollIndicator={false} 
                    bounces={false}
                    scrollEventThrottle={1}
                    {...scrollHandler }
                    >
                    {slides.map(({title, picture}, index) => (
                         <Slide key={index} {...{title, picture}} right={!!(index % 2)} />
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{...StyleSheet.absoluteFillObject, backgroundColor}} />
                    <View style={styles.footerContent} >
                        <View style={styles.pagination} >
                            {slides.map((_, index) => (
                            <Dot  key={index} currentIndex={divide(x,  width)} {...{index}} />
                            ))}
                        </View>
                        <Animated.View style={{
                            flex: 1, 
                            flexDirection: 'row',
                            width: width * slides.length,
                            transform: [{translateX: multiply(x, -1)}]
                            }}>
                            {slides.map(({subtitle, description}, index) => (
                                <SubSlide
                                    onPress={() => {
                                        if (scroll.current) {
                                            scroll.current.getNode().scrollTo({x:  width * (index + 1),  animated: true})
                                        }
                                    }}
                                    key={index}  
                                    last={index === (slides.length - 1)} 
                                    {...{subtitle, description}} 
                                />
                            ))}
                        </Animated.View>
                </View>
            </View>
        </View>
    )
}

export default  Onboarding;