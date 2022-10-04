import { Dimensions, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export const styleSheet = (windowHeight = Dimensions.get('window').height, windowWidth = Dimensions.get('window').width) => {
    const wp = windowWidth / 360
    const hp = windowHeight / 800
    return StyleSheet.create({

    "wrap" : {
        'width' : '100%',
        'height' : '100%',
        'position' : 'relative',
        'backgroundColor' : 'white',
        'overflow' :'hidden',
    },

    "inner" : {
        'width' : '90%',
        'height' : '100%',
        'marginLeft' : 'auto',
        'marginRight' : 'auto',
    },

    "titleWrap" : {
        'marginTop' : '80%',
        'marginLeft' : 'auto',
        'marginRight' : 'auto',
    },
    "title" : {
        'fontFamily' : 'Jalnan',
        'textAlign' :'center',
        'fontSize': 75,
        'color' : '#f15a24'
    },
    "subTitle" : {
        'fontFamily' : 'Apple SD Gothic Neo',
        'fontWeight' : '400',
        'textAlign' :'center',
        'fontSize': 25,
        'color' : '#f15a24'
    },
    "subTitleBold" : {
        'fontFamily' : 'Apple SD Gothic Neo',
        'fontWeight' : '900',
        'textAlign' :'center',
        'fontSize': 27,
        'color' : '#f15a24'
    },
   
  })
}