import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      contentContainer: {
        flex: 1,// pushes the footer to the end of the screen
        justifyContent: 'center',
        alignItems: 'center',
      },
      subscribeContentContainer: {
        flex: 1,// pushes the footer to the end of the screen
        justifyContent: 'top',
        alignItems: 'center',
      },
      logo: {
         height: '30%',
         width: 300,
         resizeMode: 'contain',
      },
      logoSmall: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
        marginTop: 30,
      },
      bodyText: {
        fontSize: 26,
        padding: 5,
        marginTop: 30,
        marginVertical: 3,
        color: 'black',
        textAlign: 'center',
      },
      button: {
        height: 40,
        padding: 5,
        width: '90%',
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#3d524b',
        borderColor: '#3d524b',
        borderWidth: 2,
        borderRadius: 10,
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
      },
      inputBox: {
        height: 40,
        width: '90%',
        margin: 20,
        borderWidth: 2,
        padding: 10,
        fontSize: 16,
        borderColor: 'EDEFEE',
        borderRadius: 10,
        backgroundColor: '#fff',
        },
      footer: {
        height: 100
      }
  });