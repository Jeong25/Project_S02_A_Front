import { Dimensions, StyleSheet } from 'react-native';

export const styleSheet = (windowHeight = Dimensions.get('window').height, windowWidth = Dimensions.get('window').width) => {
    const wp = windowWidth / 360
    const hp = windowHeight / 800
    return StyleSheet.create({
        'container': {
            'flexDirection' : 'row',
            'alignItems' : 'center'

        },
        'toggleWrap': {
            'width': 50,
            'height': 30,
            'paddingLeft': 2,
            'borderRadius': 15,
            'justifyContent': 'center'

        },


    })
}