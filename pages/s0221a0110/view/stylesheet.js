import { Dimensions, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export const styleSheet = (windowHeight = Dimensions.get('window').height, windowWidth = Dimensions.get('window').width) => {
    const wp = windowWidth / 360
    const hp = windowHeight / 800
    return StyleSheet.create({
        "wrap": {
            'width': '100%',
            'height': '100%',
            'backgroundColor' : 'white',
        },

        "topLogoWrap": {
            'width': '100%',
            'display': 'flex',
            'alignItems': 'center',
            'marginTop': '10%',

        },
        "topLogo": {
            'width': 44.06,
            'height': 83.69,
        },
        "mainTitle": {
            'color': '#f15a24',
            'fontFamily': 'AppleSDGothicNeo',
            'fontWeight': '900',
            'fontSize': 44,
            'textAlign': 'center',
            'marginTop': '10%',
        },
        "subTitle": {
            'color': '#707070',
            'fontFamily': 'AppleSDGothicNeo',
            'fontWeight': '500',
            'fontSize': 13,
            'textAlign': 'center',
            'marginVertical': '5%',
        },

        'divider': {
            'width': '90%',
            'height': 1.5,
            'backgroundColor': '#a9a9a9',
            'marginLeft': 'auto',
            'marginRight': 'auto'

        },

        'infoWrap': {
            'width': '90%',
            'marginTop': '10%',
            'marginLeft': 'auto',
            'marginRight': 'auto',
        },
        'info': {
            'width': '100%',
            'flexDirection': 'row',
            'alignItems': 'center',
            'marginBottom': "10%",
        },

        'icon': {
            'width': 40,
            'height': 40,
        },

        'infoText': {
            'marginLeft': '5%'
        },

        'text1': {
            'color': '#707070',
            'fontFamily': 'Apple SD Gothic Neo',
            'fontWeight': '500',
            'fontSize': 20,
        },
        'text2': {
            'color': '#707070',
            'fontFamily': 'Apple SD Gothic Neo',
            'fontWeight': '100',
            'fontSize': 10,
        },

        'BtnWrap': {
            'marginTop' : 'auto',
            'width': '100%',
            'backgroundColor': '#f15a24'
        },
        'confirmBtn': {
            'lineHeight': 72,
            'backgroundColor': '#f15a24',
            'color': 'white',
            'fontFamily': 'Apple SD Gothic Neo',
            'fontWeight': '500',
            'fontSize': 36,
            'textAlign': 'center'
        }
    })
}