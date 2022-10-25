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
            'height' : 190,
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
            'height': 135,
            'borderBottomRightRadius': 20,
            'borderBottomLeftRadius': 20,
            'backgroundColor': '#f15a24',
            'marginTop': 'auto',
            'paddingHorizontal': 10,
            'display' : 'flex',
            'alignItems' : 'center',
            'justifyContent' : 'center'

        },
        'upperProcessBox': {
            'height': 60,
            'borderRadius': 10,
            'marginBottom' : 5,
       
        },
        'underProcessBox': {

            'width': '100%',
            'height': 60,
            'borderRadius': 10,
            'borderTopWidth' : 1,
            'borderTopColor' : 'white',
            'paddingTop' : 5

        },

        'processTitle': {
            'color': 'white',
            'fontSize': 12,
            'fontWeight': '700',
            'textAlign': 'center',
            'marginLeft': 'auto',
            'marginRight': 'auto',
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
            'width': '25%',
            'display': 'flex',
            'alignItems': 'center',
            'justifyContents': 'space-around',
            'marginTop' : 5,
        },
    

        'processText': {
            'fontSize': 12,
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
            'marginBottom': '4%',

        },

        'centerCostBtn': {
            'width': 60,
            'height': 60,
            'borderRadius': 10,
            'backgroundColor': '#f15a24'

        },
        'centerpaymentBtn': {
            'width': 60,
            'height': 60,
            'borderRadius': 10,
            'backgroundColor': '#f15a24'

        },
        'centerQrBtn': {
            'width': 60,
            'height': 60,
            'borderRadius': 10,
            'backgroundColor': '#f29433'

        },
        'centerGuideBtn': {
            'width': 60,
            'height': 60,
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

            'width': 40,
            'height': 40,
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'marginTop': 'auto',
            'marginBottom': 'auto'


        },
        'centerText': {
            'fontSize': 14,
            'fontFamily' : 'Apple SD Gothic Neo',
            'fontWeight': '700',
            'textAlign': 'center',
            'marginTop': 5,
            'color': '#616161'
        },

        'recentListWrap' :{
            'width' : '90%',
            'height' : '50%',
            'marginLeft' : 'auto',
            'marginRight' : 'auto',
            'overflow' : 'hidden'
        },

        'listTitle' :{
            'fontSize' : 18,
            'fontFamily' : 'Apple SD Gothic Neo',
            'fontWeight' : '700',
            'color' : '#333',
           
        },
        'list':{
            'height' : 260,
            'borderTopWidth' : 2,
            'borderTopColor' : '#333',
            'marginTop' : 10,
        },
        "cell": {
            "width": "90%",
            "height": 50,
            "marginLeft": 'auto',
            "marginRight": 'auto', 
          },
        "cellTitle": {
            "color": "#1d1d1d",
            "fontFamily": "Apple SD Gothic Neo",
            "fontSize": 18,
            "fontWeight": "700",
            "marginTop": 5
          },
      
          "cellDate": {
      
            "fontSize": 11,
            "lineHeight": 13.2,
            "fontWeight": "500",
            "color": "#707070",
            "marginTop": 5,
      
          },
        'cellDivider':{
            'width': '100%',
            'height': 2,
            'backgroundColor': '#e9e9e9',

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