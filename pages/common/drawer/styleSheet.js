import { Dimensions, StyleSheet } from 'react-native';

export const styleSheet = (windowHeight = Dimensions.get('window').height, windowWidth = Dimensions.get('window').width) => {
    const wp = windowWidth / 360
    const hp = windowHeight / 800
    return StyleSheet.create({
        
       
    })
}