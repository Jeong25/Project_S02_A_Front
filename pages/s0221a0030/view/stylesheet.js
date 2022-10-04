import { Dimensions, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export const styleSheet = (windowHeight = Dimensions.get('window').height, windowWidth = Dimensions.get('window').width) => {
    const wp = windowWidth / 360
    const hp = windowHeight / 800
    return StyleSheet.create({

        "wrap": {
            'width': '100%',
            'height': '100%',
            'position': 'relative',
            'backgroundColor': '#F15A24',
            'overflow': 'hidden',
        },

        "titleWrap": {
            'marginTop': '10%',
            'marginLeft': 'auto',
            'marginRight': 'auto',
        },
        "title": {
            'fontFamily': 'Jalnan',
            'textAlign': 'center',
            'fontSize': 75,
            'color': 'white'
        },
        "subTitle": {
            'fontFamily': 'Apple SD Gothic Neo',
            'fontWeight': '400',
            'textAlign': 'center',
            'fontSize': 25,
            'color': 'white'
        },
        "subTitleBold": {
            'fontFamily': 'Apple SD Gothic Neo',
            'fontWeight': '900',
            'textAlign': 'center',
            'fontSize': 27,
            'color': 'white'
        },

        "contentsWrap": {
            'width': '100%',
            'backgroundColor': 'white',
            'borderTopLeftRadius': 30,
            'borderTopRightRadius': 30,
            'marginTop': 10,
            'elevation': 30,
        },

        "contentsInner": {
            'width': '80%',
            "height": '100%',
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'paddingTop': "15%",
            'position': 'relative',
        },

        "inputName": {
            "width": "100%",
            "height": 35,
            "overflow": "hidden",
            "borderBottomWidth": 2,
            "borderBottomColor": "#707070",
            "fontFamily": "Apple SD Gothic Neo",
            "fontSize": 18,
            "fontWeight": '700',
            "color": "#383838",
            "paddingTop": 0,
            "paddingBottom": 10,
        },
        "inputCode": {
            "width": "100%",
            "height": 35,
            "overflow": "hidden",
            "borderBottomWidth": 2,
            "borderBottomColor": "#707070",
            "fontFamily": "Apple SD Gothic Neo",
            "fontSize": 18,
            "fontWeight": '700',
            "color": "#383838",
            "paddingTop": 0,
            "paddingBottom": 10,
            'marginTop': '8%',
        },
        "phoneInputWrap": {
            'flexDirection': 'row',
            'justifyContent': 'space-between',
            'alignItems': 'center',
            "width": "100%",
            'marginTop': '8%',
        },

        "phoneInput1": {
            'width': '23%',
            "overflow": "hidden",
            "borderBottomWidth": 2,
            "borderBottomColor": "#707070",
            "fontFamily": "Apple SD Gothic Neo",
            "fontSize": 18,
            "fontWeight": '700',
            "color": "#383838",
            "paddingTop": 0,
            "paddingBottom": 0,
            "textAlign": 'center'
        },

        "phoneInput2": {
            'width': '23%',
            "overflow": "hidden",
            "borderBottomWidth": 2,
            "borderBottomColor": "#707070",
            "fontFamily": "Apple SD Gothic Neo",
            "fontSize": 18,
            "fontWeight": '700',
            "color": "#383838",
            "paddingTop": 0,
            "paddingBottom": 0,
            "textAlign": 'center'
        },

        "phoneInput3": {
            'width': '23%',
            "overflow": "hidden",
            "borderBottomWidth": 2,
            "borderBottomColor": "#707070",
            "fontFamily": "Apple SD Gothic Neo",
            "fontSize": 18,
            "fontWeight": '700',
            "color": "#383838",
            "paddingTop": 0,
            "paddingBottom": 0,
            "textAlign": 'center'
        },

        "dash": {
            'width': 23,
            'height': 3,
            'backgroundColor': '#a9a9a9',
        },
        "infoAggWrap": {
            'marginTop': 30,
            'flexDirection': 'row',
            'alignItems': 'center'
        },

        'unCheckBox': {
            'width': 30,
            'height': 30,
            'backgroundColor': '#d9d9d9',
            'borderRadius': 100,
            'marginRight': 10,
        },

        // 체크시 체크박스 배경이 변경됨

        'checkBox': {
            'width': 30,
            'height': 30,
            'backgroundColor': '#f15a24',
            'borderRadius': 100,
            'marginRight': 10,
        },

        'checkIcon': {
            'width': 25,
            'height': 25,
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'marginTop': 'auto',
            'marginBottom': 'auto',
        },

        "infoAgg": {
            'fontFamily': 'Apple SD Gothic Neo',
            'fontWeight': '600',
            'fontSize': 15,
            'color': '#707070',
        },

        "textBox": {
            'marginTop': 10,
            'width': '100%',
            'height': 120,
            'borderWidth': 2,
            'borderColor': '#707070',
            'borderRadius': 10,
            'paddingVertical': 10,
            'paddingHorizontal': 10
        },

        "textBoxTitle": {
            'fontFamily': 'Apple SD Gothic Neo',
            'fontWeight': '700',
            'color': '#707070',
            'fontSize': 15,
            'marginBottom': 5,
        },
        "text": {
            'fontFamily': 'Apple SD Gothic Neo',
            'color': '#707070',
            'marginBottom': 5,
        },


        "loginBtnWrap": {
            "width": '100%',
            'height': 80,
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'marginTop': '20%'

        },

        "loginBtn": {
            'backgroundColor': "#F15A24",
            'lineHeight': 80,
            'fontSize': 36,
            "fontFamily": "Apple SD Gothic Neo",
            "fontWeight": '700',
            'color': 'white',
            'textAlign': 'center',
            'textAlignVertical': 'center',
            'borderRadius': 50,
            'elevation': 6,

        },
    })
}