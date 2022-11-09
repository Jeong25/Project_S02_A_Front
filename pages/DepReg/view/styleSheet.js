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
      
          "title": {
            "color": "white",
            "fontFamily": "Apple SD Gothic Neo",
            "fontWeight": '800',
            "fontSize": 22,
          },
      
        
    });
}