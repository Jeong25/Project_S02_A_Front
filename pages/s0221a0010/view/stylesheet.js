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
            'height' : 230,
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
            'height': 175,
            'borderBottomRightRadius': 20,
            'borderBottomLeftRadius': 20,
            'backgroundColor': '#f15a24',
            'marginTop': 'auto',
            'paddingHorizontal': 10,

        },
        'upperProcessBox': {

            'width': '100%',
            'height': 70,
            'borderRadius': 10,
            'marginTop' : 10,
            'marginBottom' : 10,


        },
        'underProcessBox': {

            'width': '100%',
            'height': 75,
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
            // 'marginTop': Platform.OS === 'ios' ? '8%' : '5%' ,

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
            'marginBottom': 2
        },

        'memberPosition': {

            'fontFamily': "Apple SD Gothic Neo",
            'color': '#707070',
            'fontSize': 12,
            'fontWeight': '700',
            'textAlign': 'center',
            'marginBottom': 2
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

        'recentListWrap' :{
            'width' : '90%',
            'marginLeft' : 'auto',
            'marginRight' : 'auto',
        },

        'listTitle' :{
            'fontSize' : 18,
            'fontFamily' : 'Apple SD Gothic Neo',
            'fontWeight' : '700',
            'color' : '#333',
           
        },
        'list':{
            'borderTopWidth' : 2,
            'borderTopColor' : '#333',
            'marginTop' : 10,
        },
        'cell' : {
        
            'height' : 50,
            'borderBottomWidth' :1,
            'borderBottomColor' : '#888'

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