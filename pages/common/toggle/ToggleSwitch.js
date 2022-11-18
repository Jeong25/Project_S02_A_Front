import { styleSheet } from './styleSheet';
import React, { Component, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components/native';
import { Animated,TouchableOpacity,Easing,Pressable } from 'react-native'



const ToggleWheel = styled(Animated.View)`
  width: 13px;
  height: 13px;
  background-color: white;
  border-radius: 12.5px;
`;

const ToggleContainer = styled.View`
  width: 30px;
  height: 15px;
  padding-left: 2px;
  border-radius: 15px;
  justify-content: center;
`;


//toggle 

const ToggleSwitch = (props) => {

    const onColor = '#f15a24'
    const offColor = '#e9e9e9'

    const [aniValue, setAniValue] = useState(new Animated.Value(0));
    const color = props.isOn ? onColor : offColor;
    const styles = useMemo(() => styleSheet())


    const moveSwitchToggle = aniValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 20],
    });

    Animated.timing(aniValue, {
        toValue: props.isOn ? 1 : 0,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true,
    }).start();

    return (

        <Pressable style={styles.container} onPress={props.onToggle}>
            <ToggleContainer style={{ backgroundColor: color }}>
                <ToggleWheel style={[styles.toggleWheel, { transform: [{ translateX: moveSwitchToggle }] }]} />
            </ToggleContainer>
        </Pressable>
    )
}

export default ToggleSwitch