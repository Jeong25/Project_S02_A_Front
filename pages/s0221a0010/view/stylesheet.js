import { StyleSheet } from 'react-native';

export const styleSheet = (windowHeight, windowWidth) => {
    const wp = windowWidth / 360
    const hp = windowHeight / 800
    return StyleSheet.create({
        "wrap": {
            "backgroundColor": "white",
            "width": '100%',
            "height": '100%',
        },
        "circle": {
            "backgroundColor": "#f15a24",
            "width": 600,
            "height": 600,
            'borderRadius': 500,
            'position': 'absolute',
            'left': -180,
            'top': -350,
        },

        'topMenu': {
            'width': '100%',
            'height': 50,
            'flexDirection': 'row',
            'justifyContent': 'space-between',
            'alignItems': 'center',
            'paddingVertical': 5,
            'paddingHorizontal': 10,
            'marginTop': 10,

        },

        'topLogo': {

            'fontFamily': 'Jalnan',
            'color': 'white',
            'fontSize': 32,

        },

        "profileCard": {
            'backgroundColor': 'white',
            'width': '90%',
            'height': 240,
            'borderRadius': 20,
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'marginTop': '5%',
            'justifyContent': 'center',
            'position': 'relative',
            'elevation': 10,
        },

        'profileTextGroup': {
            'marginTop': 'auto',
        },

        'processInfoWrap': {
            'width': '100%',
            'height': 100,
            'borderBottomRightRadius': 20,
            'borderBottomLeftRadius': 20,
            'backgroundColor': '#f15a24',
            'marginTop': 'auto',
            'flexDirection': 'row',
            'alignItems': 'center',
            'justifyContent': 'space-between',
            'paddingHorizontal': 10,

        },
        'leftProcessBox': {

            'width': '77%',
            'height': 70,
            'backgroundColor': 'rgba(255,255,255,0.3)',
            'borderRadius': 10,


        },
        'rightProcessBox': {

            'width': '20%',
            'height': 70,
            'backgroundColor': 'rgba(255,255,255,0.3)',
            'borderRadius': 10,

        },

        'processTitle': {
            'color': 'white',
            'fontSize': 8,
            'lineHeight': 18,
            'fontWeight': '700',
            'textAlign': 'center',
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'width': '90%',
            'borderBottomWidth': 1,
            'borderBottomColor': 'white'

        },
        'processInner': {
            'width': '95%',
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'marginTop': 5,
            'flexDirection': 'row',
            'alignItems': 'center',
            'justifyContents': 'space-around',

        },

        'process': {
            'width': '25%',
            'height': 40,
            'display': 'flex',
            'alignItems': 'center',
            'justifyContents': 'space-around',

        },
        'processRight': {
            'width': '100%',
            'height': 40,
            'display': 'flex',
            'alignItems': 'center',
            'justifyContents': 'space-around',

        },

        'processText': {
            'fontSize': 10,
            'color': 'white',
            'fontWeight': '900',
            'marginBottom': -8,

        },
        'processNumber': {

            'color': 'white',
            'fontSize': 26,
            'fontWeight': '700',
            'marginTop': 4,


        },

        'divider': {

            'height': '80%',
            'width': 1,
            'backgroundColor': 'white'

        },

        'memberName': {

            'fontFamily': "Apple SD Gothic Neo",
            'color': '#383838',
            'fontSize': 40,
            'textAlign': 'center',
            'fontWeight': '700',
            'marginBottom': 5
        },

        'memberPosition': {

            'fontFamily': "Apple SD Gothic Neo",
            'color': '#707070',
            'fontSize': 22,
            'fontWeight': '700',
            'textAlign': 'center',
            'marginBottom': 5
        },

        'logoutBtn': {
            'width': 30,
            'height': 30,
        },
        'logout': {
            'width': 30,
            'height': 30,
        },


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


        },
        'scanBtn': {
            'width': 30,
            'height': 30,
            'alignItems': 'center',
            'marginTop': -20,
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
            'textAlign': 'center'
        },

        'centerBtnWrap': {
            'width': '70%',
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'marginTop': '12%',
            'marginBottom': '30%',
            'display': 'flex',
            'flexDirection': 'column',
            'justifyContent': 'space-around',

        },

        'layer1': {
            'width': '100%',
            'flexDirection': 'row',
            'justifyContent': 'space-around',
            'marginBottom': '8%',
        },
        'layer2': {
            'width': '100%',
            'flexDirection': 'row',
            'justifyContent': 'space-around'
        },

        'centerCostBtn': {
            'width': 100,
            'height': 100,
            'borderRadius': 20,
            'backgroundColor': '#f15a24'

        },
        'centerpaymentBtn': {
            'width': 100,
            'height': 100,
            'borderRadius': 20,
            'backgroundColor': '#f15a24'

        },
        'centerQrBtn': {
            'width': 100,
            'height': 100,
            'borderRadius': 20,
            'backgroundColor': '#f29433'

        },
        'centerGuideBtn': {
            'width': 100,
            'height': 100,
            'borderRadius': 20,
            'backgroundColor': '#ff6262'

        },

        'centerCostBtnWrap': {
            'display': 'flex',
            'alignItems': 'center'

        },
        'centerpaymentBtnWrap': {
            'display': 'flex',
            'alignItems': 'center'

        },
        'centerQrBtnWrap': {
            'display': 'flex',
            'alignItems': 'center'

        },
        'centerGuideBtnWrap': {
            'display': 'flex',
            'alignItems': 'center'
        },
        'centerIcon': {

            'width': 65,
            'height': 65,
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'marginTop': 'auto',
            'marginBottom': 'auto'


        },
        'centerText': {
            'fontSize': 18,
            'fontWeight': '700',
            'textAlign': 'center',
            'marginTop': 5,
            'color': '#616161'
        },

        'adWrap': {
            'width': '100%',
            'height': 100,
            'marginTop': '17%',
            'backgroundColor': '#333',

        },
        'adText': {
            'color': 'white',
            'textAlign': 'center',
            'fontSize': 30,
            'lineHeight': 100,

        }

    });
}