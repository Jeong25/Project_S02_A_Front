import { Dimensions, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

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
            'borderTopColor': "rgba(112, 112, 112 , 0.3)",
            zIndex: 1
        },
        'scanBtnIcon': {
            'width': 30,
            'height': 30,
            'marginLeft': 'auto',
            'marginRight': 'auto',
        },
        'homeBtn': {

            'alignItems': 'center',
        },
        'homeIcon': {
            'width': 30,
            'height': 30,
            'marginLeft': 'auto',
            'marginRight': 'auto',
        },
        'costIcon': {
            'width': 30,
            'height': 30,
            'marginLeft': 'auto',
            'marginRight': 'auto',

        },
        'paymentIcon': {
            'width': 30,
            'height': 30,
            'marginLeft': 'auto',
            'marginRight': 'auto',
        },
        'homeText': {
            'fontFamily': "Apple SD Gothic Neo",
            'color': '#707070',
            'fontSize': 12,
            'fontWeight': '700',
            'marginTop': 5,
            'textAlign': 'center'
        },
        'costText': {
            'fontFamily': "Apple SD Gothic Neo",
            'color': '#707070',
            'fontSize': 12,
            'fontWeight': '700',
            'marginTop': 5

        },
        'paymentText': {
            'fontFamily': "Apple SD Gothic Neo",
            'color': '#707070',
            'fontSize': 12,
            'fontWeight': '700',
            'marginTop': 5
        },
        'qrscanText': {
            'width': 50,
            'fontFamily': "Apple SD Gothic Neo",
            'color': '#707070',
            'fontSize': 12,
            'fontWeight': '700',
            'marginTop': 5,
            'textAlign': 'center',

        },
    })
}