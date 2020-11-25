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
        picture: {
            src: require("./../../../assets/2.png"),
            width: 2713,
            height: 3583,
        }

    }, 
    {
        title: "Playful",  
        subtitle: "Hear it First, Wear it First", 
        description: "Heating the clother in your wardrobe?  explore hundreds of "  , 
        color: "#BEECC4",
        picture: {
            src: require("./../../../assets/4.png"),
            width: 2791,
            height: 3744,
        }
    }, 
    {
        title: "Excentric",  
        subtitle: 'Lorem ipsum dolor sit amet', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veritatis, consequuntur ', 
        color: "#FFE4D9",
        picture: {
            src: require("./../../../assets/3.png"),
           width: 2338,
           height: 2944,
        }
    }, 
    {
        title: "Funky",  
        subtitle: 'Lorem ipsum dolor si.', 
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.' ,
        color: "#FFDDDD",
        picture: {
            src: require("./../../../assets/5.png"),
            width: 1857,
            height: 2451,
        }
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