import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
    helloWorld: {
        color: 'blue',
        fontFamily: (Platform.OS === 'ios') ? 'Avenir Next' : 'Roboto',
        fontSize: 50,
        fontStyle: 'italic',
        fontWeight: '800',
        textAlign: 'justify',
        textDecorationLine: 'underline',
        textShadowColor: 'grey',
        textShadowOffset: { width: 2, height: 2},
        textShadowRadius: 10,
        ...Platform.select({
            ios: {
                color: 'blue',
                fontVariant: ['small-caps', 'oldstyle-nums'],
                //letterSpacing: 1,
                textDecorationColor: 'black',
                textDecorationStyle: 'dotted',
                writingDirection: 'rtl'
            },
            android: {
                color: 'red',
                includeFontPadding: true,
                textAlignVertical: 'center',
            },
        }),
    }
});