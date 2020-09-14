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
    fontFamily: 'Roboto_700Bold',
    fontSize: 20,
    lineHeight: 24,
    color: '#6a6180',
    textAlign: "justify",
  },

  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    marginBottom: 8,
    marginRight: 8,
    backgroundColor: '#d4ad68',
    width: 130,
    height: 80,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  buttonText: {
    color: '#fff',
    fontFamily: 'RobotoSlab_700Bold',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default styles;