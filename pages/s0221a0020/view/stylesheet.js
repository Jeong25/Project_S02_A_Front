import { StyleSheet } from 'react-native';

export const styleSheet = (windowHeight, windowWidth) => {
    console.log(windowHeight, windowWidth)
    const wp = windowWidth > 540 ? 1.5 : windowWidth / 360
    const hp = windowHeight > 960 ? 1.5 : windowHeight / 640

    return StyleSheet.create({
        "wrap": {
            "width": '100%',
            "height": '100%',
        },
        // "inner": {

        //     "width": '90%',
        //     "height": '100%',
        //     'marginLeft': 'auto',
        //     'marginRight': 'auto',
        // },

        "topBtnWrap": {

            "width": '90%',
            'marginLeft' : 'auto',
            'marginRight' : 'auto',
            'flexDirection': 'row',
            'justifyContent': 'space-between',
            'alignItems': 'center',
            'paddingVertical': 5,
            'paddingHorizontal': 10,
            'marginTop': 20,
            'zIndex' : 9,
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

        "camera": {
            "width": windowWidth,
            "height": windowHeight,
            'position' : 'absolute',
            'top' : 0,
            'zIndex' : 1,
        },
     
        "textGroup": {
            'marginTop' : 'auto',
            'marginBottom' : '30%',
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'zIndex':9,

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