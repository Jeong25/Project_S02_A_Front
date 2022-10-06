import { Dimensions, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export const styleSheet = (windowHeight = Dimensions.get('window').height, windowWidth = Dimensions.get('window').width) => {
  const wp = windowWidth / 360
  const hp = windowHeight / 800
  return StyleSheet.create({

    "wrap": {
      'position': 'relative',
      "width": '100%',
      "height": windowHeight,
      'backgroundColor': 'white',
      'flex': 1,
    },
    "inner": {
      "width": "90%",
      "marginLeft": 'auto',
      "marginRight": 'auto',
      'position': 'relative',
    },

    "topMenu": {
      "width": "100%",
      "height": 66,
      "position": "relative",
      "marginLeft": 'auto',
      "marginRight": 'auto',
      'paddingHorizontal': 20,
      'backgroundColor' : '#f15a24',
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
      'marginTop' : 10,
    },
    "contentsInner": {
      'width': '45%',
      'height': '100%',
      'display': 'flex',
      'flexDirection': 'row',
      'alignItems': 'center',
      'justifyContent': 'space-between',
    },

    "form": {
      "width": "100%",
      'marginTop': 20
    },

    "contents": {
      'display': 'flex',
      'flexDirection': 'row',
      'alignItems': 'center',
      'justifyContent': 'space-between',
      'marginBottom': '5%',
    },
    "label": {
      "fontFamily": "Apple SD Gothic Neo",
      "color": "#f15a24",
      "fontWeight": '700',
      "fontSize": 13,
      'marginTop': 10,
      'marginBottom': 5,
    },
    "modifyLabel": {
      "fontFamily": "Apple SD Gothic Neo",
      "color": "#f15a24",
      "fontWeight": '700',
      "fontSize": 13,
      'marginTop': 5,
    },

    "modifyText": {
      'width': 80,
      'lineHeight': 23,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'color': '#383838',
      'textAlign': 'center',
      "fontSize": 13,     
    },
    "modifyDateText": {
      'width': '82%',
      'height' : 40,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'color': '#383838',
      'textAlign': 'left',
      "fontSize": 13,
      'marginLeft' : 15,
      'marginTop' : -8,
      'paddingLeft': 10,
      'paddingBottom': -10,
      'borderBottomWidth' :1,
      'borderBottomColor' :'#888',
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
      'borderBottomWidth' :1,
      'borderBottomColor' :'#888',
    },
    "RcenterAlignText": {
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
      'marginTop' : -8,
      'marginLeft' : 5,
      'paddingBottom': -10,
      'borderBottomWidth' :1,
      'borderBottomColor' :'#888',
    },
    
    "centerAlignDate": {
      'height' :40,
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'lineHeight': 30,
      'textAlign': 'center',
      'color': '#383838',
      "fontSize": 13,
    },

    "modifyTextLong": {
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
      'borderBottomWidth' :1,
      'borderBottomColor' :'#888',
    },
    
    "modifyTextLongAlignCenter": {
      'width' : '85%',
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'lineHeight': 30,
      'textAlign': 'center',
      'color': '#383838',
      "fontSize": 13,
      'paddingHorizontal' : 10,
    },
    "modifyFileInput": {
      'width' : '80%',
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'textAlign': 'left',
      'color': '#383838',
      "fontSize": 13,
      'marginTop' : -5,
      'marginLeft' : 11,
      'paddingLeft' : 10,
      'paddingRight' : 25,
      'paddingBottom': -10,
      'borderBottomWidth' :1,
      'borderBottomColor' :'#888',
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
      'borderBottomWidth' :1,
      'borderBottomColor' :'#888',
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
    
    "modifyWon": {
      "fontFamily": "Apple SD Gothic Neo",
      "fontWeight": '500',
      'color': '#1d1d1d',
      "fontSize": 13,
      'marginTop': 10,
      'marginBottom': 5,

    },
    "searchBtn": {
      "width": 22,
      "height": 22,
      "marginTop": -5,
      "position": "absolute",
      "right": 0,
      "bottom": 10,
      'zIndex': 1
    },
    "modifySearchBtn": {
      "position": "absolute",
      "right": 0,
      "width": 22,
      "height": 22,
    },
    "modifyDateSearchBtn": {
      "position": "absolute",
      "right": 10,
      "width": 22,
      "height": 22,
      'zIndex': 1
    },
    "searchIcon": {
      "width": "100%",
      "height": "100%",
    },

    "input": {
      // "width": windowWidth * 0.85 * 0.8,
      "width": "100%",
      "height": 35,
      "overflow": "hidden",
      "borderBottomWidth": 2,
      "borderBottomColor": "#707070",
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 20,
      "fontWeight": '700',
      "color": "#383838",
      "paddingTop": 0,
      "paddingBottom": 10,
      'textAlign' : 'center'
    },
    "modifyInputWrap": {
      'flexDirection': 'row',
      'alignItems': 'center',
      'justifyContent' : 'space-between'
    },

    "amountInput": {
      // "width": windowWidth * 0.85 * 0.8,
      "width": "100%",
      "height": 35,
      "overflow": "hidden",
      "borderBottomWidth": 2,
      "borderBottomColor": "#707070",
      "fontFamily": "Apple SD Gothic Neo",
      "fontSize": 20,
      "fontWeight": '700',
      "color": "#383838",
      "paddingTop": 0,
      "paddingBottom": 10,
      'paddingRight' : 25,
      'textAlign' : 'right'
    },


    "addBtn": {
      "position": "absolute",
      "right": 0,
      "bottom": 10,
      "width": 20,
      "height": 20,
      "backgroundColor": "#f15a24",
      "borderRadius": 50,
      'zIndex': 1
    },
    "modifyAddBtn": {
      "position": "absolute",
      "right": 0,
      "width": 20,
      "height": 20,
      "backgroundColor": "#f15a24",
      "borderRadius": 50,
      'zIndex': 1
    },

    "addIcon": {
      "width": 13,
      "height": 13,
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

    "delBtn": {
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

    'renderInner' : {
      'width' : '90%',
      'marginTop' : 10,
      'marginLeft': 'auto',
      'marginRight': 'auto',
    }
    
  })
}