import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import {interpolateColor , useScrollHandler} from  "react-native-redash/lib/module/v1";

import Slide, {SLIDE_HEIGHT} from './Slide';
import Dot from './Dot';
import Animated, {multiply, divide, interpolate, Extrapolate} from 'react-native-reanimated';
import SubSlide from './SubSlide';
import { theme } from '../../components';
import { Routes, StackNavigationProps } from '../../components/Navigation';

const {width} = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "white"
    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: "flex-end",
        borderBottomRightRadius: theme.borderRadii.xl,
        overflow: 'hidden',
    },
    slider: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: theme.borderRadii.xl,
    },
    footer: {
        flex: 1,
    },
    footerContent: {
        flex: 1,
        backgroundColor: "white", 
        borderTopLeftRadius: theme.borderRadii.xl,
    },
    pagination: {
        ...StyleSheet.absoluteFillObject, 
        height: theme.borderRadii.xl,
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
            src: require("./../../../assets/2.png"),
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
            src: require("./../../../assets/2.png"),
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
            src: require("./../../../assets/2.png"),
            width: 1857,
            height: 2451,
        }
    }, 
]

export const assets  = slides.map((slide) => slide.picture.src)

const Onboarding = ({navigation}: StackNavigationProps<Routes, "Onboarding">) => {
    const scroll = useRef<Animated.ScrollView>(null);
    const {scrollHandler,  x}  = useScrollHandler();
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * width ), 
        outputRange: slides.map((slide) => slide.color )});
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, {backgroundColor}]}>
            {slides.map(({picture}, index)  => {
                const  opacity = interpolate(x,  {
                    inputRange: 
                    [
                        (index - 0.5) * width,  
                        index * width,
                         (index + 0.5) * width
                    ], 
                     outputRange: [0, 1 , 0],
                     extrapolate: Extrapolate.CLAMP,
                    })
                return (
                    <Animated.View style={[styles.underlay, {opacity}]} key={index}> 
                    <Image source={picture.src} style={
                    {   
                        width: width - theme.borderRadii.xl,
                        height: ((width - theme.borderRadii.xl) * picture.height) / picture.width
                    }}/>
                </Animated.View>
                );
            })}
           
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
                            {slides.map(({subtitle, description}, index) => {
                                const last = index === slides.length - 1;
                                return (
                                    <SubSlide
                                        onPress={() => {
                                            if (last) {
                                                navigation.navigate("Welcome")
                                            } else  {
                                                scroll?.current?.getNode()
                                                .scrollTo({x:  width * (index + 1),  animated: true})
                                            }
                                        }}
                                        key={index}  
                                        {...{subtitle, description, last}} 
                                  />
                                )
                            })}
                        </Animated.View>
                </View>
            </View>
        </View>
    )
}

export default  Onboarding;