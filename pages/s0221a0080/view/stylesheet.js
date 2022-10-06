import { StyleSheet } from 'react-native';

export const styleSheet = (windowHeight, windowWidth) => {
  const wp = windowWidth / 360
  const hp = windowHeight / 800
  return StyleSheet.create({

    "wrap": {
      "width": "100%",
      "height": '100%',
      'backgroundColor': 'white',
    },

    "inner": {
      "width": "85%",
      'height': '100%',
      "marginLeft": 'auto',
      "marginRight": 'auto',
    },
    "topMenu": {
      "width": "100%",
      "height": 66,
      "position": "relative",
      "marginLeft": 'auto',
      "marginRight": 'auto',
      'paddingHorizontal': 20,
      'backgroundColor': '#f15a24',
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
      'marginTop': 10
    },
    "contents": {
      'display': 'flex',
      'flexDirection': 'row',
      'alignItems': 'center',
      'justifyContent': 'space-between',
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
      'marginLeft' : 10,
      'paddingLeft': 10,
      'paddingBottom': -10,
      'backgroundColor' :'green'
     
    },
    "centerAlignText": {
      'width': 80,
      'height' :40,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'color': '#383838',
      'textAlign': 'center',
      "fontSize": 13,
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
      'marginTop' : -8,
      'marginLeft' : 5,
      'paddingBottom': -10,
    },
    
    "centerAlignDate": {
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'lineHeight': 30,
      'textAlign': 'center',
      'color': '#383838',
      "fontSize": 13,
      'marginTop': 10,
      'marginBottom': 5,
      'backgroundColor' :'red'
    },
   
    "textLongAlignCenter": {
      'width' : '85%',
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'lineHeight': 30,
      'textAlign': 'center',
      'color': '#383838',
      "fontSize": 13,
      'paddingHorizontal' : 10,
    },
    
    "fileInput": {
      'width' : '88%',
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'textAlign': 'left',
      'color': '#383838',
      "fontSize": 13,
      'marginLeft' : 10,
      'paddingLeft' : 10,
      'paddingRight' : 25,
      'paddingBottom': -10,
      'backgroundColor' : 'blue'

    },
    "won": {
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'color': '#1d1d1d',
      "fontSize": 13,
      'marginTop': 10,
      'marginBottom': 5,
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
      'paddingBottom': -10,
      'backgroundColor' : 'red',
      
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
      'backgroundColor' : 'red'

    },

  
    'sepLine': {
      'width': '100%',
      'height': 3,
      'backgroundColor': '#bcbcbc',
      'marginTop': 20,
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
    'contentsTextarea': {
      'marginTop': 10,
      'height': '20%'
    },

    'opinion': {
      'height': '50%',
      'width': '100%',
      'borderRadius': 10,
      'borderWidth': 2,
      'borderColor': '#707070',
      'marginTop': 10,
      'fontFamily': 'Apple SD Gothic Neo',
      'fontSize': 12,
      'textAlignVertical': 'top'
    },

    "btnWrap": {
      "width": "100%",
      "height": 50,
      'marginLeft': 'auto',
      'marginRight': 'auto',
      "flexDirection": "row",
      "justifyContent": "space-between",
      "alignItems": "center",
      'marginBottom': 40,
      "zIndex": 9
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