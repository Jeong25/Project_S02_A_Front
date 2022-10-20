import { StyleSheet } from 'react-native';

export const styleSheet = (windowHeight, windowWidth) => {
  const wp = windowWidth / 360
  const hp = windowHeight / 800
  return StyleSheet.create({

    "wrap": {
      'position': 'relative',
      "width": '100%',
    },

    "inner": {
      "width": "90%",
      "marginLeft": 'auto',
      "marginRight": 'auto',
      'position': 'relative',
    },
    "topMenu": {
      "width": "100%",
      "height": 60,
      "position": "relative",
      "marginLeft": 'auto',
      "marginRight": 'auto',
      'paddingHorizontal': 20,
      'backgroundColor' :'#f15a24',
      'flexDirection': 'row',
      'alignItems': 'center',
      'justifyContent': 'center',
    },

    "topTitle": {
      "color": "white",
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '800',
      "fontSize": 22,
    },

    "backBtn": {
      "overflow": "hidden",
      'position' : 'absolute',
      'left' : 16,
      'top' : 15,
      "width": 40,
      "height": 40,
    },
    "backBtnIcon": {
      "width": 30,
      "height": 30
    },

    "contentsWrap": {
      "width": "100%",
      'marginTop': 10,
    },
    "contents": {
      'display': 'flex',
      'flexDirection': 'row',
      'alignItems': 'center',
      'justifyContent': 'space-between',
      'marginBottom' : '1%',
    },
    "renderContents": {
      'display': 'flex',
      'flexDirection': 'row',
      'alignItems': 'center',
      'justifyContent': 'space-between',
      'marginBottom' : '1%',
    },

    "inputWrap": {
      'flexDirection': 'row',
      'alignItems': 'center',
      'justifyContent' : 'space-between'
    },
    "contentsInner": {
      'width': '45%',
      'height': '100%',
      'display': 'flex',
      'flexDirection': 'row',
      'alignItems': 'center',
      'justifyContent': 'space-between',
    },

    "label": {
      "fontFamily": "Apple SD Gothic Neo",
      "color": "#f15a24",
      "fontWeight": '700',
      "fontSize": 13,
      'marginTop': 10,
      'marginBottom': 5,

    },
    "inputText": {
      'width': 80,
      'lineHeight': 5,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'color': '#383838',
      'textAlign': 'center',
      "fontSize": 13,
    },
    "inputTextLong": {
      'width' : '80%',
      'height' :40,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'textAlign': 'left',
      'color': '#383838',
      "fontSize": 13,
      'marginTop' : -5,
      'marginLeft' : 11,
      'paddingHorizontal' : 10,
      'paddingBottom': -10,
    },
  
    "dateText": {
      'width': '82%',
      'height' : 40,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'color': '#383838',
      'textAlign': 'left',
      "fontSize": 13,
      'marginTop' : -5,
      'marginLeft' : 15,
      'paddingLeft': 10,
      'paddingBottom': -10,
     
    },
    "centerAlignText": {
      'width': 80,
      'height' :40,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'color': '#383838',
      'textAlign': 'center',
      "fontSize": 13,
      'marginTop': -5,
      'paddingBottom': -10,
    },
    "rightAlignText": {
      'width': 75,
      'height' :40,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'color': '#383838',
      'textAlign': 'right',
      "fontSize": 13,
      'marginTop' : -5,
      'marginLeft' : 5,
      'paddingBottom': -10,
    },
    
    "textLongAlignCenter": {
      'width' : '80%',
      'height' :40,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'textAlign': 'center',
      'color': '#383838',
      "fontSize": 13,
      'marginTop' : -5,
      'marginLeft' : 11,
      'paddingHorizontal' : 10,
      'paddingBottom': -10,
    },
    
    "fileInput": {
      'width' : '88%',
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'textAlign': 'left',
      'color': '#383838',
      "fontSize": 13,
      'marginLeft' : 10,
      'marginTop' : -5,
      'paddingLeft' : 10,
      'paddingRight' : 25,
      'paddingBottom': -10,

    },
    "won": {
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'color': '#1d1d1d',
      "fontSize": 13,
      'marginTop' : 5,
    },
 
    "inputWrap": {
      'flexDirection': 'row',
      'alignItems': 'center',
    },

    "historyInput": {
      'width' : '80%',
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'textAlign': 'left',
      'color': '#383838',
      "fontSize": 13,
      'marginTop' : -5,
      'paddingBottom': -10,      
    },
    "RhistoryInput": {
      'width' : '80%',
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'textAlign': 'left',
      'color': '#383838',
      "fontSize": 13,
      'marginTop' : -5,
      'paddingBottom': -10,

    },

  
    'divider': {
      'width': '100%',
      'height': 10,
      'backgroundColor': '#e9e9e9',
      'marginTop': 5,
    },
   
    'renderInner' : {
      'width' : '90%',
      'marginTop' : 10,
      'marginLeft': 'auto',
      'marginRight': 'auto',
    },
  

    "textfield": {
      "height": 30,
      "borderRadius": 10,
      "borderWidth": 2,
      "borderColor": "#707070",
      "marginTop": 8,
      'paddingLeft': 10,
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 14,
      "textAlignVertical": "top",
    },

    'opinion': {
      'height': 50,
      'width': '100%',
      'borderRadius': 10,
      'borderWidth': 2,
      'borderColor': '#707070',
      'marginTop': 10,
      'fontFamily': 'Apple SD Gothic Neo',
      'fontSize': 12,
      'textAlignVertical': 'top',
    },

    "btnWrap": {
      "width": "90%",
      "height": 50,
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 20,
      "flexDirection": "row",
      "justifyContent": "space-between",
      "alignItems": "center",
      "zIndex": 9,
    },
    'confBtn': {

      "width": 140,
      "height": 50,
      "backgroundColor": "#F15A24",
      "borderRadius": 50,
      "textAlign": "center",
      "color": "white",
      "fontSize": 21,
      "fontWeight": "500",
      "lineHeight": 50,
      "fontFamily": "Apple SD Gothic Neo"
    },
    'rejBtn': {

      "width": 140,
      "height": 50,
      "backgroundColor": "#707070",
      "borderRadius": 50,
      "color": "white",
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      "fontSize": 21,
      "textAlign": "center",
      "lineHeight": 50,
    },

  })
}