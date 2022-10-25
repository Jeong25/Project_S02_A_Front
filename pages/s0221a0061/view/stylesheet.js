import { Dimensions, StyleSheet, Platform } from 'react-native';
import { color } from 'react-native-reanimated';

export const styleSheet = (windowHeight = Dimensions.get('window').height, windowWidth = Dimensions.get('window').width) => {
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
      'position': 'relative',
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
    "topTitle": {
      "color": "white",
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '800',
      "fontSize": 22,
    },
    "won": {
      "position": "absolute",
      "right": 0,
      "bottom": 10,
      "fontSize": 14,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": "700",
      "color": "#1d1d1d",
    },

    "contentsWrap": {
      "width": "100%",
      'marginTop': 10,
    },
    "contentsInner": {
      'width': '47%',
      'height': '100%',
      'flexDirection': 'row',
      'alignItems': 'center',
    },
    "RcontentsInner": {
      'height': '100%',
      'flexDirection': 'row',
      'alignItems': 'center',

    },

    "contents": {
      'display': 'flex',
      'flexDirection': 'row',
      'alignItems': 'center',
      'marginBottom': '2%',
    },
    "contentsLayer": {
      'display': 'flex',
      'flexDirection': 'row',
      'alignItems': 'center',
      'justifyContent': 'space-between',
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

    "modifyText": {
      'width': 80,
      'lineHeight': 23,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'color': '#383838',
      'textAlign': 'center',
      "fontSize": 12,
    },
    "modifyDateText": {
      'width': '80%',
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'textAlign': 'left',
      'color': '#383838',
      "fontSize": 12,
      'padding': 0,
      'paddingBottom': Platform.OS === 'ios' ? 5 : 0,
      'margin': 0,
      'borderBottomWidth': 1,
      'borderBottomColor': '#888',
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
    "shortInput": {
      'width': 50,
      'height': 40,
      'lineHeight': 40,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'color': '#383838',
      'textAlign': 'center',
      "fontSize": 12,
      'margin': 0,
      'marginLeft': Platform.OS === 'ios' ? -15 : -20,
      'marginTop': 5,
      'padding': 0,
    },

    "rightAlignText": {
      'width': 90,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'textAlign': 'right',
      'color': '#383838',
      "fontSize": 12,
      'padding': 0,
      'paddingRight': 20,
      'paddingBottom': Platform.OS === 'ios' ? 5 : 0,
      'paddingTop': Platform.OS === 'ios' ? 5 : 0,
      'margin': 0,
      'borderBottomWidth': 1,
      'borderBottomColor': '#888',
    },

    "centerAlignDate": {
      'height': 40,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'lineHeight': 30,
      'textAlign': 'center',
      'color': '#383838',
      "fontSize": 12,
    },

    "longInput": {
      'width': '80%',
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'textAlign': 'left',
      'color': '#383838',
      "fontSize": 12,
      'padding': 0,
      'paddingRight': 15,
      'paddingBottom': Platform.OS === 'ios' ? 5 : 0,
      'margin': 0,
      'borderBottomWidth': 1,
      'borderBottomColor': '#888',
    },

    "longInputAlignCenter": {
      'width': '80%',
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'textAlign': 'center',
      'color': '#383838',
      "fontSize": 12,
      'margin': 0,
      'marginTop': 5,
      'padding': 0,
    },

    "fileBox": {
      'width': '80%',
      'height': 50,
      'flexDirection': 'row',
      'alignItems': 'center',
      'padding': 5,
      'backgroundColor': '#e9e9e9',
      'marginTop': 10,
    },
    "historyInput": {
      'width': '80%',
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'textAlign': 'left',
      'color': '#383838',
      "fontSize": 12,
      'margin': 0,
      'marginTop': 5,
      'padding': 0,
      'paddingRight': 15,
      'borderBottomWidth': 1,
      'borderBottomColor': '#888',
      'paddingBottom': Platform.OS === 'ios' ? 5 : 0,
      'paddingTop': Platform.OS === 'ios' ? 5 : 0,
      'borderBottomWidth': 1,
      'borderBottomColor': '#888',
    },
    "RhistoryInput": {
      'width': '80%',
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'textAlign': 'left',
      'color': '#383838',
      "fontSize": 12,
      'margin': 0,
      'marginTop': 5,
      'padding': 0,
    },

    "won": {
      'position': 'absolute',
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'color': '#1d1d1d',
      "fontSize": 12,
      'right': 0,

    },

    "searchBtn": {
      "position": "absolute",
      'right': Platform.OS === 'ios' ? 15 : 10,
      "width": 22,
      "height": 22,
      'bottom': Platform.OS === 'ios' ? 7 : 5,
    },
    "dateSearchBtn": {
      "position": "absolute",
      "right": 20,
      'bottom': 5,
      "width": 22,
      "height": 22,
      'zIndex': 1
    },
    "searchIcon": {
      "width": "100%",
      "height": "100%",
    },

    // 
    "inputWrap": {
      'flexDirection': 'row',
      'alignItems': 'center',
      'justifyContent': 'flex-start'
    },


    "addBtn": {
      "position": "absolute",
      'right': Platform.OS === 'ios' ? 25 : 20,
      'bottom': 13,
      "width": 25,
      "height": 25,
      "backgroundColor": "#f15a24",
      "borderRadius": 50,

    },

    "addIcon": {
      "width": 18,
      "height": 18,
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 3,
    },
    'divider': {
      'width': '100%',
      'height': 10,
      'backgroundColor': '#e9e9e9',
      'marginTop': 5,
    },

    "textfield": {
      "height": windowHeight * 0.10,
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

    "selectBox": {
      "width": "70%",
      // "border": "none",
      // "borderBottomWidth": 3,
      // "borderBottomColor": "#707070",
    },
    "renderTitleWrap": {

      'width': 80,
      'borderRadius': 50,
      'backgroundColor': '#f15a24',
    },

    "renderTitle": {
      'fontFamily': 'Apple SD Gothic Neo',
      'fontSize': 12,
      'color': 'white',
      'lineHeight': 25,
      'textAlign': 'center',
    
    },

    "btnWrap": {
      "width": "100%",
      "height": 50,
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 40,
      "flexDirection": "row",
      "justifyContent": "center",
      "alignItems": "center",
    },
    "modifyBtnWrap": {
      "width": "90%",
      "height": 50,
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': 40,
      'marginBottom': 40,
      "flexDirection": "row",
      "justifyContent": "space-between",
      "alignItems": "center",
      'marginBottom': '30%',

    },
    "btnWrap2": {
      "width": "100%",
      "height": 50,
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginBottom': 40,
      "flexDirection": "row",
      "justifyContent": "space-between",
      "alignItems": "center",
    },

    "requestBtn": {
      "width": 140,
      "backgroundColor": "#F15A24",
      "borderRadius": 50,
    },

    "delBtn": {
      "width": 140,
      "backgroundColor": "#707070",
      "borderRadius": 50,
    },
    "btnText": {

      "color": "white",
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      "fontSize": 21,
      "textAlign": "center",
      "lineHeight": 50,
    },

    'renderInner': {
      'width': '90%',
      'marginTop': 10,
      'marginLeft': 'auto',
      'marginRight': 'auto',
    }

  })
}