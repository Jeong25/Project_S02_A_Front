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
       
        'topMenu': {
            'width': '95%',
            'height': 50,
            'flexDirection': 'row',
            'alignItems': 'center',
            'paddingHorizontal': 10,
            'marginRight' : 'auto',
            'marginLeft' : 'auto',
            'marginTop': 10,
        },
        'topLogo': {
            'fontFamily': 'Jalnan',
            'color': '#f15a24',
            'fontSize': 32,
        },
        'profileTextGroup' : {
            'flexDirection' : 'row',
            'marginLeft' : 10,
        },


        "infoCard": {
            'width': '90%',
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'marginTop': '5%',
            'justifyContent': 'center',
          
        },
        'upperProcessBox': {
            'width' : '100%',
            'height': 60,
            'marginBottom' : 5,
            'flexDirection' : 'row',            
            'alignItems':'center',
            'justifyContent': 'space-between',
 
        },
        
        'leftBox': {
            'width' : '52%',
            'height': 60,
            'borderRadius': 15,
            'backgroundColor' : '#f15a24'
        },
        'rightBox': {
            'width' : '25%',
            'height': 60,
            'borderRadius': 15,
            'backgroundColor' : '#f15a24'
        },
        'underProcessBox': {

            'width': '100%',
            'height': 60,
            'borderRadius': 15,
            'backgroundColor' : '#F56F01'
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
            'marginTop' : 'auto',
            'marginBottom' : 'auto',
            'flexDirection': 'row',
            'alignItems': 'center',
            'justifyContents': 'space-around',
            
        },
        'upperProcessInner': {
            'width': '95%',
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'marginTop' : 'auto',
            'marginBottom' : 'auto',
            'flexDirection': 'row',
            'alignItems': 'center',
            'justifyContents': 'space-around',
        
        },

        'upperProcess': {
            'width' : '51%',
            'display': 'flex',
            'alignItems': 'center',
            'justifyContents': 'space-around',
            'marginTop' : 5,
        },
    
        'rightUpperProcess': {
            'marginLeft':'auto',
            'marginRight':'auto',
            'display': 'flex',
            'alignItems': 'center',
            'justifyContents': 'center',
            'marginTop' : 5,
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

            'fontFamily': "Jalnan",
            'color': '#f15a24',
            'fontSize': 24,
            'textAlign': 'center',
            'fontWeight': '700',
        },

        'memberPosition': {

            'fontFamily': "Apple SD Gothic Neo",
            'color': '#616161',
            'fontSize': 12,
            'fontWeight': '700',
            'textAlign': 'center',
            'marginTop' : 10,

        },

        'accountBtnWrap' : {
            
            'flexDirection' : 'row',
            'alignContent' : 'center',
            'marginLeft' : 'auto'
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
            'marginTop': '5%',
        },
        'centerBtn':{
           'height' : 300,
        },

        'btnImg': {
            'width': 60,
            'height': 60,
            'backgroundColor' : 'white',
            'borderRadius': 10,
            'borderWidth' :2,
            'borderColor' : '#f15a25',
            
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
        'contentsDivider' : {
            'marginTop' : 15,
            'marginBottom' : 15,
            'backgroundColor': '#e9e9e9',
            'height': 10,
        },

        'recentListWrap' :{
            'width' : '90%',
            'height' : '50%',
            'marginLeft' : 'auto',
            'marginRight' : 'auto',
            
        },
        'listTitleWrap':{
            'flexDirection' : 'row',
            'alignItems' :'baseline',
            'justifyContent' : 'space-between'
        },

        'listTitle' :{
            'fontSize' : 20,
            'fontFamily' : 'Apple SD Gothic Neo',
            'fontWeight' : '800',
            'fontWeight': Platform.OS === 'ios' ? '800' : 'bold' ,
            'color' : '#333',
        },
        'showMore' : {
            'fontSize' : 14,
            'fontFamily' : 'Apple SD Gothic Neo',
            'fontWeight' : '600',
            'color' : '#888',

        },
        'cellWrap':{
        },
        "cell": {
            "width":"100%",
            "height": 50,
            'borderBottomColor' : '#e9e9e9',
            'borderBottomWidth': 2,
            'padding':5,
            'marginTop' : 10,
          },
        "cellTitle": {
            "color": "#333",
            "fontFamily": "Apple SD Gothic Neo",
            "fontSize": 16,
            "fontWeight": "700",
          },
      
          "cellDate": {
            "fontSize": 11,
            "lineHeight": 13.2,
            "fontWeight": "500",
            "color": "#707070",
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