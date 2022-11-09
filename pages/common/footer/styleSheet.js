import { Dimensions, StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper'

export const styleSheet = (windowHeight = Dimensions.get('window').height, windowWidth = Dimensions.get('window').width) => {
    const wp = windowWidth / 360
    const hp = windowHeight / 800
    return StyleSheet.create({
        'bottomMenu': {
            'width': '100%',
            'height': 80,
            'backgroundColor': 'white',
            'position': 'absolute',
            'bottom': 0,
            'flexDirection': 'row',
            'alignItems': 'center',
            'justifyContent': 'space-around',
            'paddingHorizontal': 30,
            'borderTopWidth': 2,
            'borderTopColor': "#e9e9e9",
            'zIndex' : 9,
            
        },
      
        'menuIcon': {
            'width': 30,
            'height': 30,
            'marginLeft': 'auto',
            'marginRight': 'auto',

        },
      
        'menuText': {
            'fontFamily': "Apple SD Gothic Neo",
            'color': '#707070',
            'fontSize': 12,
            'fontWeight': '700',
            'marginTop': 5,
            'textAlign': 'center'
        },
      
    })
}