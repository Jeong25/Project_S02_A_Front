import { StyleSheet } from 'react-native';

export const styleSheet = (windowHeight, windowWidth) => {
    console.log(windowHeight, windowWidth)
    const wp = windowWidth > 540 ? 1.5 : windowWidth / 360
    const hp = windowHeight > 960 ? 1.5 : windowHeight / 640

    return StyleSheet.create({
        "wrap": {
            "backgroundColor": "rgba(0, 0, 0, 0.7)",
            "width": '100%',
            "height": '100%',
        },
        "inner": {

            "width": '90%',
            "height": '100%',
            'marginLeft': 'auto',
            'marginRight': 'auto',
        },

        "topBtnWrap": {

            "width": '100%',
            'flexDirection': 'row',
            'justifyContent': 'space-between',
            'alignItems': 'center',
            'paddingVertical': 5,
            'paddingHorizontal': 10,
            'marginTop': 20,
        },

        'closeBtn': {
            "width": 40,
            "height": 40,
        },
        'closeIcon': {
            "width": 30,
            "height": 30,
        },

        'eventSelectBtn': {
            "width": 40,
            "height": 40,
            'alignItems': 'center'
        },
        'searchIcon': {
            "width": 30,
            "height": 30,
            'marginBottom': 3
        },

        'eventSelect': {
            'fontFamily': 'Apple SD Gothic Neo',
            'fontWeight': '900',
            'fontSize': 10,
            'color': 'white',

        },

        "camArea": {
            "width": 250,
            "height": 250,
            'borderRadius': 40,
            "backgroundColor": "rgba(255, 255, 255, 0.3)",
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'marginTop': 100
        },
        "textGroup": {
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'marginTop': 30
        },
        "compName": {
            'fontFamily': 'Apple SD Gothic Neo',
            'fontWeight': '600',
            'fontSize': 24,
            'color': 'white',
            'textAlign': 'center'
        },
        "eventName": {
            'fontFamily': 'Apple SD Gothic Neo',
            'fontWeight': '900',
            'fontSize': 32,
            'color': 'white',
            'textAlign': 'center'
        },
        "eventDate": {
            'fontFamily': 'Apple SD Gothic Neo',
            'fontWeight': '600',
            'fontSize': 16,
            'color': 'white',
            'textAlign': 'center',
            'marginTop': 5
        },


    })
}