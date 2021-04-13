import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
      titles: {
        marginTop: '38%',
        width: '100%',     
        alignItems: 'center',
      },
      title: {
        fontSize: 40,
        fontWeight: '500',
      },
      subtitle: {
        fontSize: 16,
        color: '#5c5e62'
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },
      buttonsContainer: {
          position: 'absolute',
          bottom: 75,
          width: '100%',
      },
      subtitleCTA: {
        textDecorationLine: 'underline',
      },
});

export default styles;