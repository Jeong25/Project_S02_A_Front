import { StyleSheet } from 'react-native';

export const styleSheet = (windowHeight, windowWidth) => {
  const wp = windowWidth / 360
  const hp = windowHeight / 800
  return StyleSheet.create({

    "wrap": {
      'position': 'relative',
      "width": '100%',
      "height": '100%',
      'backgroundColor': 'white',
    },

    "inner": {
      "width": "90%",
      "marginLeft": 'auto',
      "marginRight": 'auto',
    },
    "topMenu": {
      "width": "100%",
      "height": 60,
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
      'position': 'absolute',
      'left': 16,
      'top': 15,
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
    },

    "contentsLayer": {
      'display': 'flex',
      'flexDirection': 'row',
      'alignItems': 'center',
      'justifyContent': 'space-between',
    },
    "renderContents": {
      'display': 'flex',
      'flexDirection': 'row',
      'alignItems': 'center',
      'justifyContent': 'space-between',
      'marginBottom': '1%',
    },

    "inputWrap": {
      'flexDirection': 'row',
      'alignItems': 'center',
      'justifyContent': 'flex-start'
    },
    "contentsInner": {
      'width': '47%',
      'height': '100%',
      'flexDirection': 'row',
      'alignItems': 'center',
      // 'justifyContent': 'space-between',
    },
    "label": {
      'width': 50,
      "fontFamily": "Apple SD Gothic Neo",
      "color": "#f15a24",
      "fontWeight": '700',
      "fontSize": 13,
      'marginTop': 10,
      'marginBottom': 5,
      'marginRight': 5,
    },
    "inputText": {
      'width': 80,
      'lineHeight': 5,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'color': '#383838',
      'textAlign': 'center',
      "fontSize": 12,
    },
    "inputTextLong": {
      'height': 40,
      'lineHeight': 40,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'textAlign': 'left',
      'color': '#383838',
      "fontSize": 12,
      'margin': 0,
      'marginTop': 5,
      'padding': 0,
    },
    "dateInputTextLong": {
      'width': '80%',
      'height': 40,
      'lineHeight': 40,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'textAlign': 'center',
      'color': '#383838',
      "fontSize": 12,
      'margin': 0,
      'marginTop': 5,
      'padding': 0,
    },

    "dateText": {
      'height': 40,
      'lineHeight': 40,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'color': '#383838',
      'textAlign': 'left',
      "fontSize": 12,
      'margin': 0,
      'marginTop': 5,
      'padding': 0,

    },
    "centerAlignText": {
      'width': 80,
      'height': 40,
      'lineHeight': 40,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'color': '#383838',
      'textAlign': 'center',
      "fontSize": 12,
      'margin': 0,
      'marginTop': 5,
      'padding': 0,
    },
    "rightAlignText": {
      'width': 75,
      'height': 40,
      'lineHeight': 40,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'color': '#383838',
      'textAlign': 'right',
      "fontSize": 12,
      'margin': 0,
      'marginTop': 5,
      'padding': 0,
      'paddingRight': 5,
    },

    "textLongAlignCenter": {
      'width': '80%',
      'height': 40,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'textAlign': 'center',
      'color': '#383838',
      "fontSize": 12,
      'marginTop': -5,
      'marginLeft': 11,
      'paddingHorizontal': 10,
      'paddingBottom': -10,
    },

    "fileBox": {
      'width': '80%',
      'height': 60,
      'flexDirection': 'row',
      'alignItems': 'center',
      'padding': 10,
      'backgroundColor': '#e9e9e9',


    },
    "won": {
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'color': '#1d1d1d',
      "fontSize": 12,
      'marginTop': 5,
    },

    "fileInput": {
      'lineHeight': 40,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'textAlign': 'left',
      'color': '#383838',
      "fontSize": 12,
      'margin': 0,
      'marginTop': 5,
      'padding': 0,
    },

    "historyInput": {
      'lineHeight': 40,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'textAlign': 'left',
      'color': '#383838',
      "fontSize": 12,
      'margin': 0,
      'marginTop': 5,
      'padding': 0,
    },
    "RhistoryInput": {
      'width': '80%',
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'textAlign': 'left',
      'color': '#383838',
      "fontSize": 12,
      'marginTop': -5,
      'paddingBottom': -10,

    },


    'divider': {
      'width': '100%',
      'height': 10,
      'backgroundColor': '#e9e9e9',
      'marginTop': 5,
    },

    'renderInner': {
      'width': '90%',
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
      'marginBottom': '30%',
      "flexDirection": "row",
      "justifyContent": "space-between",
      "alignItems": "center",
      "zIndex": 9,
    },
    'confBtn': {

      "width": 140,
      "backgroundColor": "#F15A24",
      "borderRadius": 50,
      "textAlign": "center",

    },
    'rejBtn': {
      "width": 140,
      "backgroundColor": "#707070",
      "borderRadius": 50,

    },
    'btnText': {
      "color": "white",
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      "fontSize": 21,
      "textAlign": "center",
      "lineHeight": 50,
    },

  })
}