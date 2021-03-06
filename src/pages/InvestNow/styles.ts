import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
  },

  scrollPage: {
    marginTop: -60,
  },

  innerContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e6e6f0',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },

  banner: {
    width: '100%',
    height: 300,
    resizeMode: "contain",
    padding: 24,
  },

  paragraph: {
    marginHorizontal: 24,
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#6a6180',
    textAlign: "justify",
  },

  buttonsContainer: {
    padding: 24,
  },

  button: {
    backgroundColor: '#d4ad68',
    width: '100%',
    height: 60,
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 10,
    justifyContent: 'space-evenly',
  },

  buttonText: {
    color: '#fff',
    fontFamily: 'RobotoSlab_700Bold',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default styles;