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
            'width': '95%',
            'height': 50,
            'flexDirection': 'row',
            'justifyContent' : 'space-between',
            'alignItems': 'center',
            'paddingHorizontal': 10,
            'marginRight' : 'auto',
            'marginLeft' : 'auto',
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
            'height': 150,
            'borderBottomRightRadius': 20,
            'borderBottomLeftRadius': 20,
            'backgroundColor': '#f15a24',
            'marginTop': 'auto',
            'paddingHorizontal': 10,

        },
        'upperProcessBox': {

            'width': '100%',
            'height': 70,
            'backgroundColor': 'rgba(255,255,255,0.3)',
            'borderRadius': 10,
            'marginBottom' : 10,

        },
        'underProcessBox': {

            'width': '100%',
            'height': 75,
            'backgroundColor': 'rgba(255,255,255,0.3)',
            'borderRadius': 10,
        },

        'processTitle': {
            'color': 'white',
            'fontSize': 8,
            'fontWeight': '700',
            'textAlign': 'center',
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'marginTop': 5,
            'marginBottom': 5,
            'width': '90%',            

        },
        'processInner': {
            'width': '95%',
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'flexDirection': 'row',
            'alignItems': 'center',
            'justifyContents': 'space-around',
            'borderTopWidth': 1,
            'borderTopColor': 'white'

        },

        'process': {
            'width': '17%',
            'display': 'flex',
            'alignItems': 'center',
            'justifyContents': 'space-around',
            'marginTop' : 5,
        },
        'processRight': {
            'width': '100%',
            'display': 'flex',
            'alignItems': 'center',
            'justifyContents': 'space-around',
            'marginTop' : 5,

        },

        'processText': {
            'fontSize': 10,
            'color': 'white',
            'fontWeight': '900',

        },
        'processNumber': {

            'color': 'white',
            'fontSize': 22,
            'fontWeight': '700',
            'marginTop': Platform.OS === 'ios' ? '8%' : '5%' ,

        },

        'divider': {

            'height': '80%',
            'width': 1,
            'backgroundColor': 'white'

        },

        'memberName': {

            'fontFamily': "Apple SD Gothic Neo",
            'color': '#383838',
            'fontSize': 24,
            'textAlign': 'center',
            'fontWeight': '700',
            'marginBottom': 5
        },

        'memberPosition': {

            'fontFamily': "Apple SD Gothic Neo",
            'color': '#707070',
            'fontSize': 12,
            'fontWeight': '700',
            'textAlign': 'center',
            'marginBottom': 5
        },

        'topBtnWrap' : {
            
            'flexDirection' : 'row',
            'alignContent' : 'center',

        },
        'logoutBtn': {
            'width': 30,
            'height': 30,
            'marginBottom': 5

        },
        'logout': {
            'width': 30,
            'height': 30,
        },
        'accountDelBtn': {
            'width': 30,
            'height': 30,
            'marginBottom': 5,
            'marginRight': 20,

        },
        'accountDel': {
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
            'width': '90%',
            'flexDirection': 'row',
            'justifyContent': 'space-between',
            'marginLeft' : 'auto',
            'marginRight' : 'auto',
            'marginTop': '5%',
            'marginBottom': '8%',

        },

        'centerCostBtn': {
            'width': 70,
            'height': 70,
            'borderRadius': 10,
            'backgroundColor': '#f15a24'

        },
        'centerpaymentBtn': {
            'width': 70,
            'height': 70,
            'borderRadius': 10,
            'backgroundColor': '#f15a24'

        },
        'centerQrBtn': {
            'width': 70,
            'height': 70,
            'borderRadius': 10,
            'backgroundColor': '#f29433'

        },
        'centerGuideBtn': {
            'width': 70,
            'height': 70,
            'borderRadius': 10,
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

            'width': 50,
            'height': 50,
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'marginTop': 'auto',
            'marginBottom': 'auto'


        },
        'centerText': {
            'fontSize': 16,
            'fontFamily' : 'Apple SD Gothic Neo',
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